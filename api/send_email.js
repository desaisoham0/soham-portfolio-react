import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// In-memory sliding-window rate limiting.
//
// KNOWN LIMITATION — this Map lives in a single Lambda instance's memory.
// Vercel runs many instances concurrently and recycles them freely, so the
// effective quota is RATE_LIMIT_MAX x (number of warm instances), not
// RATE_LIMIT_MAX, and it resets whenever an instance is cold-started. This is
// a speed bump, not a real limiter. A correct fix needs a shared store the
// instances agree on — Vercel Firewall rate limiting, Edge Config, or Redis.
// Everything below only hardens the per-instance behaviour.
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

// The keys are derived from client-controlled headers, so the Map is capped:
// without a cap a spoofing client can grow it until the instance runs out of
// memory. MAX_ENTRIES is the hard ceiling; PRUNE_SCAN bounds how many stale
// entries a single request cleans up, so no one request pays an O(n) sweep.
const RATE_LIMIT_MAX_ENTRIES = 1000;
const RATE_LIMIT_PRUNE_SCAN = 20;

/**
 * Drop expired entries (a bounded slice per call) and enforce the hard cap.
 * A Map iterates in insertion order and every touched entry is re-inserted,
 * so the oldest keys seen here are the least recently active ones.
 */
function pruneRateLimit(now) {
  let scanned = 0;
  for (const [key, entry] of rateLimit) {
    if (scanned >= RATE_LIMIT_PRUNE_SCAN) break;
    scanned++;
    if (now - entry.lastRequest >= RATE_LIMIT_WINDOW) {
      rateLimit.delete(key);
    }
  }

  while (rateLimit.size >= RATE_LIMIT_MAX_ENTRIES) {
    const oldest = rateLimit.keys().next();
    if (oldest.done) break;
    rateLimit.delete(oldest.value);
  }
}

/**
 * True sliding window: each key keeps the timestamps of its recent requests
 * and only those older than the window fall out. A fixed window refunds the
 * whole quota the instant the boundary passes, which lets a caller spend 2x
 * RATE_LIMIT_MAX within a couple of milliseconds.
 */
function isRateLimited(ip) {
  const now = Date.now();
  pruneRateLimit(now);

  const entry = rateLimit.get(ip);
  const timestamps = entry ? entry.timestamps.filter((ts) => now - ts < RATE_LIMIT_WINDOW) : [];

  if (timestamps.length >= RATE_LIMIT_MAX) {
    // Re-insert so an actively-limited key stays fresh in the eviction order.
    rateLimit.delete(ip);
    rateLimit.set(ip, { timestamps, lastRequest: now });
    return true;
  }

  timestamps.push(now);
  rateLimit.delete(ip);
  rateLimit.set(ip, { timestamps, lastRequest: now });
  return false;
}

/**
 * Resolve the client IP without trusting anything the client wrote.
 *
 * X-Forwarded-For is append-only: a proxy adds the address it saw to the
 * RIGHT. Anything to the left of that was supplied by the caller, so reading
 * the leftmost entry (split(',')[0]) hands the caller a free key rotation and
 * unlimited quota. Vercel's own headers are preferred where present.
 */
function getClientIp(req) {
  const headers = req.headers ?? {};

  const vercelForwarded = headers['x-vercel-forwarded-for'];
  if (typeof vercelForwarded === 'string' && vercelForwarded.trim()) {
    return vercelForwarded.trim();
  }

  const realIp = headers['x-real-ip'];
  if (typeof realIp === 'string' && realIp.trim()) {
    return realIp.trim();
  }

  const forwardedFor = headers['x-forwarded-for'];
  if (typeof forwardedFor === 'string' && forwardedFor.trim()) {
    const parts = forwardedFor
      .split(',')
      .map((part) => part.trim())
      .filter(Boolean);
    if (parts.length > 0) {
      return parts[parts.length - 1];
    }
  }

  return req.socket?.remoteAddress || 'unknown';
}

// Master switch for the contact form endpoint. Disabled by default: the
// endpoint stays publicly reachable once deployed, so hiding the form in the
// UI does not stop bots from POSTing here directly. Set CONTACT_FORM_ENABLED
// to the string "true" in the Vercel dashboard to accept messages again.
const CONTACT_FORM_ENABLED = process.env.CONTACT_FORM_ENABLED === 'true';

// Only the real site (both hosts it may be served from) and the local dev
// server may drive this endpoint. A request with neither Origin nor Referer is
// rejected on purpose: browsers always send Origin on a same-origin POST, so
// this only costs scripted submissions.
const ALLOWED_ORIGINS = new Set([
  'https://sohamdesai.dev',
  'https://www.sohamdesai.dev',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
]);

function isAllowedOrigin(req) {
  const headers = req.headers ?? {};

  const origin = headers.origin;
  if (typeof origin === 'string' && origin.trim()) {
    return ALLOWED_ORIGINS.has(origin.trim());
  }

  const referer = headers.referer;
  if (typeof referer === 'string' && referer.trim()) {
    try {
      return ALLOWED_ORIGINS.has(new URL(referer.trim()).origin);
    } catch {
      return false;
    }
  }

  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

export default async function handler(req, res) {
  // Contact form switched off — reject before doing any work.
  if (!CONTACT_FORM_ENABLED) {
    return res
      .status(503)
      .json({ success: false, error: 'The contact form is currently unavailable.' });
  }

  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  // Origin allowlist — cheaper than rate limiting, so it runs first.
  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ success: false, error: 'Forbidden' });
  }

  // Rate limiting
  if (isRateLimited(getClientIp(req))) {
    return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
  }

  // A request with no parsed body must answer 400, not throw out of the
  // handler: destructuring an undefined body is an unhandled rejection.
  const body = req.body;
  if (!body || typeof body !== 'object') {
    return res.status(400).json({ success: false, error: 'Invalid request body.' });
  }

  const { email, message } = body;

  // Input validation
  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email) || email.length > MAX_EMAIL_LENGTH) {
    return res.status(400).json({ success: false, error: 'Invalid email address.' });
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({ success: false, error: 'Message is required and must be under 5000 characters.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_OWNER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // The only mail this endpoint sends: a notification to the owner.
    //
    // There used to be a second "thank you" mail addressed to the submitted
    // address. That made the endpoint an open relay — anyone could mail an
    // arbitrary recipient an arbitrary body, signed by the owner's Gmail
    // account. No request input may reach a `to:` field. The sender still gets
    // an acknowledgement: ContactForm.jsx shows it on the page.
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_OWNER}>`,
      to: process.env.EMAIL_OWNER,
      replyTo: email,
      subject: 'New Portfolio Contact Message',
      text: `New message from: ${email}\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
  }
}
