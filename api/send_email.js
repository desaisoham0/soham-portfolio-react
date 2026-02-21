import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Basic in-memory rate limiting
const rateLimit = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimit.set(ip, { firstRequest: now, count: 1 });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ success: false, error: 'Too many requests. Please try again later.' });
  }

  const { email, message } = req.body;

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

    // 1) Confirmation to the sender
    await transporter.sendMail({
      from: `"Soham Desai" <${process.env.EMAIL_OWNER}>`,
      to: email,
      replyTo: process.env.EMAIL_OWNER,
      subject: 'Thank you for contacting me',
      text: `Dear sender,\n\nThank you for reaching out.\n\nMessage:\n${message}\n\nBest regards,\nSoham Desai`,
    });

    // 2) Notification to yourself — use EMAIL_OWNER as sender, replyTo for user's email
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_OWNER}>`,
      to: process.env.EMAIL_OWNER,
      replyTo: email,
      subject: 'New Portfolio Contact Message',
      text: `New message from: ${email}\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
  }
}
