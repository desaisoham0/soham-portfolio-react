/**
 * Security regression suite for the contact-form endpoint.
 *
 * Written RED-first: each test describes the behaviour the endpoint *should*
 * have. The tests that fail today are the proof of a confirmed vulnerability in
 * api/send_email.js; the ones under "regression guards" already pass and must
 * keep passing after the fix.
 *
 * Nothing here touches the network: nodemailer is replaced with an in-memory
 * stub that records the mail objects the handler tried to send.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

const { sent } = vi.hoisted(() => ({ sent: [] }));

vi.mock('nodemailer', () => ({
  default: {
    createTransport: () => ({
      sendMail: async (options) => {
        sent.push(options);
        return { messageId: 'stubbed-no-network' };
      },
    }),
  },
}));

const OWNER = 'owner@gmail.com';
// The one origin vercel.json grants Access-Control-Allow-Origin to.
const SITE_ORIGIN = 'https://sohamdesai.dev';
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;

let moduleCounter = 0;

/**
 * Import a pristine copy of the handler. The rate-limit Map and the
 * CONTACT_FORM_ENABLED kill switch are module-scoped, so every test that cares
 * about them needs its own module instance.
 *
 * `trackMaps` swaps in a Map subclass for the duration of the import so the
 * module-scoped rate-limit Map can be observed from the outside.
 */
async function loadHandler({ enabled = true, trackMaps = null } = {}) {
  // send_email.js calls dotenv.config() at import time; keep its banner out of
  // the test output. Test-run only - it changes nothing about the handler.
  process.env.DOTENV_CONFIG_QUIET = 'true';

  if (enabled) {
    process.env.CONTACT_FORM_ENABLED = 'true';
  } else {
    delete process.env.CONTACT_FORM_ENABLED;
  }
  process.env.EMAIL_OWNER = OWNER;
  process.env.EMAIL_PASSWORD = 'app-password';

  const NativeMap = globalThis.Map;
  if (trackMaps) {
    globalThis.Map = class TrackedMap extends NativeMap {
      constructor(...args) {
        super(...args);
        trackMaps.push(this);
      }
    };
  }
  try {
    // @vite-ignore keeps Vite from trying to statically analyse the query,
    // which is what gives us a fresh module-scoped rateLimit Map each time.
    const specifier = `./send_email.js?fresh=${++moduleCounter}`;
    const mod = await import(/* @vite-ignore */ specifier);
    return mod.default;
  } finally {
    globalThis.Map = NativeMap;
  }
}

function makeRes() {
  const res = {
    statusCode: null,
    body: null,
    headers: {},
    setHeader(name, value) {
      res.headers[name] = value;
      return res;
    },
    status(code) {
      res.statusCode = code;
      return res;
    },
    json(payload) {
      res.body = payload;
      return res;
    },
  };
  return res;
}

function makeReq({ method = 'POST', headers = {}, body, ip = '203.0.113.5' } = {}) {
  return { method, headers, body, socket: { remoteAddress: ip } };
}

/** A request that looks exactly like a legitimate one from the real site. */
function makeLegitReq(overrides = {}) {
  return makeReq({
    ...overrides,
    headers: {
      origin: SITE_ORIGIN,
      referer: `${SITE_ORIGIN}/`,
      ...(overrides.headers ?? {}),
    },
  });
}

async function post(handler, options = {}) {
  const res = makeRes();
  await handler(makeLegitReq(options), res);
  return res;
}

beforeEach(() => {
  sent.length = 0;
});

afterEach(() => {
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// BUG 1 - OPEN RELAY (critical)
// api/send_email.js:81 `to: email` mails an attacker-supplied address with an
// attacker-supplied body, authenticated as the owner's Gmail account.
// ---------------------------------------------------------------------------
describe('BUG 1: open relay', () => {
  it('never addresses mail to an address supplied by the requester', async () => {
    const handler = await loadHandler();

    await post(handler, { body: { email: 'victim@example.org', message: 'hello' } });

    const foreignRecipients = sent.map((mail) => mail.to).filter((to) => to !== OWNER);
    expect(foreignRecipients).toEqual([]);
  });

  it('does not relay an attacker-controlled body to an attacker-chosen recipient', async () => {
    const handler = await loadHandler();
    const payload = `CLAIM YOUR PRIZE ${'x'.repeat(4900)}`;

    await post(handler, { body: { email: 'victim@example.org', message: payload } });

    const relayed = sent.filter(
      (mail) => mail.to !== OWNER && String(mail.text ?? '').includes('CLAIM YOUR PRIZE')
    );
    expect(relayed).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// BUG 2 - RATE LIMIT BYPASS VIA X-FORWARDED-FOR SPOOFING (high)
// api/send_email.js:52-53 split(',')[0] trusts the LEFTMOST entry, which the
// client fully controls; trustworthy proxies append on the right.
// ---------------------------------------------------------------------------
describe('BUG 2: X-Forwarded-For spoofing', () => {
  it('does not grant unlimited quota when the leftmost X-Forwarded-For entry rotates', async () => {
    const handler = await loadHandler();
    const statuses = [];

    for (let i = 0; i < 20; i++) {
      const res = await post(handler, {
        // The right-hand entry is the one our own proxy appended: one real client.
        headers: { 'x-forwarded-for': `198.51.100.${i}, 203.0.113.9` },
        body: { email: 'attacker@example.org', message: `burst ${i}` },
      });
      statuses.push(res.statusCode);
    }

    const accepted = statuses.filter((code) => code === 200).length;
    expect(accepted).toBeLessThanOrEqual(RATE_LIMIT_MAX);
  });
});

// ---------------------------------------------------------------------------
// BUG 3 - FIXED-WINDOW RATE LIMIT ALLOWS A 2x BURST (low/medium)
// api/send_email.js:14-17 the window anchors on firstRequest and resets
// wholesale, so a full quota spent at the end of one window is refunded
// milliseconds later at the start of the next.
// ---------------------------------------------------------------------------
describe('BUG 3: fixed-window burst across the boundary', () => {
  it('does not refund the whole quota two milliseconds after it was spent', async () => {
    const t0 = 1_700_000_000_000;
    let clock = t0;
    vi.spyOn(Date, 'now').mockImplementation(() => clock);

    const handler = await loadHandler();
    const headers = { 'x-forwarded-for': '203.0.113.77' };
    const body = { email: 'attacker@example.org', message: 'burst' };

    // One request opens the window.
    clock = t0;
    await post(handler, { headers, body });

    // Spend the rest of the quota 1ms before the window expires.
    clock = t0 + RATE_LIMIT_WINDOW - 1;
    const beforeBoundary = [];
    for (let i = 0; i < 4; i++) {
      beforeBoundary.push((await post(handler, { headers, body })).statusCode);
    }

    // 2ms later the fixed window resets and the quota is handed back in full.
    clock = t0 + RATE_LIMIT_WINDOW + 1;
    const afterBoundary = [];
    for (let i = 0; i < 7; i++) {
      afterBoundary.push((await post(handler, { headers, body })).statusCode);
    }

    const acceptedWithinTwoMilliseconds = [...beforeBoundary, ...afterBoundary].filter(
      (code) => code === 200
    ).length;
    expect(acceptedWithinTwoMilliseconds).toBeLessThanOrEqual(RATE_LIMIT_MAX);
  });
});

// ---------------------------------------------------------------------------
// BUG 4 - UNHANDLED CRASH ON AN EMPTY BODY (medium)
// api/send_email.js:58 the destructure sits outside the try block that opens on
// line 69, so a request with no parsed body throws out of the handler.
// ---------------------------------------------------------------------------
describe('BUG 4: crash on a missing request body', () => {
  it('answers 400 instead of throwing when req.body is undefined', async () => {
    const handler = await loadHandler();
    const res = makeRes();

    await expect(handler(makeLegitReq({ body: undefined }), res)).resolves.not.toThrow();
    expect(res.statusCode).toBe(400);
  });

  it('answers 400 instead of throwing when req.body is null', async () => {
    const handler = await loadHandler();
    const res = makeRes();

    await expect(handler(makeLegitReq({ body: null }), res)).resolves.not.toThrow();
    expect(res.statusCode).toBe(400);
  });
});

// ---------------------------------------------------------------------------
// BUG 5 - NO ORIGIN CHECK AND NO BOT DEFENCE (high)
// The handler never reads req.headers.origin or req.headers.referer, and there
// is no captcha or honeypot anywhere, so any site can drive the endpoint.
// ---------------------------------------------------------------------------
describe('BUG 5: missing Origin check', () => {
  it('rejects a cross-site request from a disallowed Origin', async () => {
    const handler = await loadHandler();
    const res = makeRes();

    await handler(
      makeReq({
        headers: { origin: 'https://evil.example', referer: 'https://evil.example/' },
        body: { email: 'attacker@example.org', message: 'drive-by submission' },
      }),
      res
    );

    expect(res.statusCode).toBe(403);
    expect(sent).toEqual([]);
  });

  it('sends no mail for a scripted request that carries no Origin and no Referer', async () => {
    const handler = await loadHandler();
    const res = makeRes();

    await handler(
      makeReq({
        headers: {},
        body: { email: 'attacker@example.org', message: 'scripted submission' },
      }),
      res
    );

    expect(res.statusCode).toBe(403);
    expect(sent).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// BUG 6 - UNBOUNDED rateLimit MAP (low)
// api/send_email.js:6 entries are never deleted or expired and the keys come
// straight from a client-controlled header.
// ---------------------------------------------------------------------------
describe('BUG 6: unbounded rate-limit map', () => {
  it('does not retain one entry per spoofed IP forever', async () => {
    const DISTINCT_IPS = 20_000;
    const t0 = 1_700_000_000_000;
    let clock = t0;
    vi.spyOn(Date, 'now').mockImplementation(() => clock);

    const maps = [];
    const handler = await loadHandler({ trackMaps: maps });

    // An invalid email short-circuits with a 400 *after* the rate limiter has
    // already recorded the key, so this fills the map without sending mail.
    const body = { email: 'not-an-email', message: 'x' };
    for (let i = 0; i < DISTINCT_IPS; i++) {
      await post(handler, {
        headers: { 'x-forwarded-for': `10.${(i >> 16) & 255}.${(i >> 8) & 255}.${i & 255}` },
        body,
      });
    }

    // Long after every one of those entries went stale, one more request.
    clock = t0 + RATE_LIMIT_WINDOW * 10;
    await post(handler, { headers: { 'x-forwarded-for': '192.0.2.1' }, body });

    const rateLimitMap = maps.find((map) => map.size > 100);
    expect(rateLimitMap, 'expected to observe the module-scoped rate-limit Map').toBeDefined();
    expect(rateLimitMap.size).toBeLessThanOrEqual(1000);
  });
});

// ---------------------------------------------------------------------------
// REGRESSION GUARDS - these pass today and must keep passing.
// ---------------------------------------------------------------------------
describe('regression guards', () => {
  it('returns 503 and sends nothing while CONTACT_FORM_ENABLED is unset', async () => {
    const handler = await loadHandler({ enabled: false });

    const res = await post(handler, {
      body: { email: 'someone@example.org', message: 'hello' },
    });

    expect(res.statusCode).toBe(503);
    expect(res.body).toEqual({
      success: false,
      error: 'The contact form is currently unavailable.',
    });
    expect(sent).toEqual([]);
  });

  it('returns 405 with an Allow header for a non-POST method', async () => {
    const handler = await loadHandler();

    const res = await post(handler, { method: 'GET', body: undefined });

    expect(res.statusCode).toBe(405);
    expect(res.headers.Allow).toBe('POST');
    expect(sent).toEqual([]);
  });
});

// ---------------------------------------------------------------------------
// CLIENT-IP PRECEDENCE - pins which header the limiter keys on.
//
// The limiter is only as good as its key. These lock in every proxy shape the
// handler can actually be reached through on Vercel, so a future refactor of
// getClientIp() cannot silently reintroduce the rotation bypass.
//
// KNOWN RESIDUAL (deliberately not blocked): a BARE single-entry
// `x-forwarded-for` with no `x-vercel-forwarded-for` and no `x-real-ip` is
// still attacker-controlled, so rotating it rotates the bucket. That shape is
// not reachable in production - Vercel always sets its own header, which takes
// precedence (see the first case below). Distrusting single-entry XFF and
// falling back to req.socket.remoteAddress was considered and rejected: on
// Vercel that address is a shared proxy, so the fallback would bucket every
// visitor under one key and cap the whole site at RATE_LIMIT_MAX submissions
// per window. An unreachable bypass is preferable to a global outage.
// ---------------------------------------------------------------------------
describe('client IP precedence', () => {
  const burst = async (headersFor) => {
    const handler = await loadHandler();
    let accepted = 0;
    for (let i = 0; i < 20; i++) {
      const res = await post(handler, {
        headers: { origin: SITE_ORIGIN, ...headersFor(i) },
        socket: { remoteAddress: '9.9.9.9' },
        body: { email: 'a@b.co', message: 'm' },
      });
      if (res.statusCode === 200) accepted++;
    }
    return accepted;
  };

  it('prefers x-vercel-forwarded-for over a rotating x-forwarded-for', async () => {
    expect(
      await burst((i) => ({
        'x-vercel-forwarded-for': '203.0.113.9',
        'x-forwarded-for': `10.0.0.${i}`,
      }))
    ).toBeLessThanOrEqual(RATE_LIMIT_MAX);
  });

  it('prefers x-real-ip over a rotating x-forwarded-for', async () => {
    expect(
      await burst((i) => ({ 'x-real-ip': '203.0.113.9', 'x-forwarded-for': `10.0.0.${i}` }))
    ).toBeLessThanOrEqual(RATE_LIMIT_MAX);
  });

  it('uses the proxy-appended rightmost x-forwarded-for entry', async () => {
    expect(
      await burst((i) => ({ 'x-forwarded-for': `10.0.0.${i}, 203.0.113.9` }))
    ).toBeLessThanOrEqual(RATE_LIMIT_MAX);
  });

  it('falls back to the socket address when no forwarding headers are present', async () => {
    expect(await burst(() => ({}))).toBeLessThanOrEqual(RATE_LIMIT_MAX);
  });
});
