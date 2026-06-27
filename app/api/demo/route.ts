import { NextResponse } from "next/server";

/* ===========================================================================
   POST /api/demo — demo-request endpoint stub.

   This is a real server route with server-side validation, spam/honeypot
   checks, basic in-memory rate limiting, and duplicate detection. It does NOT
   yet persist or notify — wire the marked TODO to the CRM (workspace lead) +
   Resend confirmation at integration time. Configure DEMO_WEBHOOK_URL to POST
   the validated payload onward.

   Responses:
     200 { ok: true }                          → success
     409 { ok: false, code: "duplicate" }      → recent request from this email
     422 { ok: false, code: "validation", errors }
     429 { ok: false, code: "rate_limited" }
     500 { ok: false, code: "server_error" }
   =========================================================================== */

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  team?: string;
  branches?: string;
  system?: string;
  message?: string;
  consent?: boolean;
  company_website?: string; // honeypot — must stay empty
  utm?: Record<string, string>;
};

// Ephemeral stores (per server instance). Replace with a durable store/queue.
const recentByEmail = new Map<string, number>();
const hitsByIp = new Map<string, { count: number; first: number }>();

const DUPLICATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_WINDOW_MS = 60 * 1000;
const RATE_MAX = 5;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(p: Payload) {
  const errors: Record<string, string> = {};
  if (!p.name?.trim()) errors.name = "Enter your full name.";
  if (!p.company?.trim()) errors.company = "Enter your company name.";
  if (!p.email?.trim()) errors.email = "Enter your work email.";
  else if (!EMAIL_RE.test(p.email.trim())) errors.email = "Enter a valid email address.";
  if (!p.phone?.trim()) errors.phone = "Enter a phone number.";
  else if ((p.phone.replace(/[^0-9]/g, "")).length < 7) errors.phone = "Enter a valid phone number.";
  if (!p.team) errors.team = "Select your team size.";
  if (!p.consent) errors.consent = "Please agree to be contacted.";
  return errors;
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, code: "server_error" }, { status: 500 });
  }

  // Honeypot: real users never fill this hidden field.
  if (body.company_website && body.company_website.trim() !== "") {
    return NextResponse.json({ ok: true }, { status: 200 }); // silently accept-and-drop
  }

  // Basic IP rate limit.
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const hit = hitsByIp.get(ip);
  if (!hit || now - hit.first > RATE_WINDOW_MS) {
    hitsByIp.set(ip, { count: 1, first: now });
  } else {
    hit.count += 1;
    if (hit.count > RATE_MAX) {
      return NextResponse.json({ ok: false, code: "rate_limited" }, { status: 429 });
    }
  }

  const errors = validate(body);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, code: "validation", errors }, { status: 422 });
  }

  const email = body.email!.trim().toLowerCase();

  // Duplicate detection. The `+dupe@` / `+fail@` patterns let reviewers exercise
  // the duplicate and server-error paths deterministically before a backend exists.
  if (/\+dupe@|duplicate@/.test(email)) {
    return NextResponse.json({ ok: false, code: "duplicate" }, { status: 409 });
  }
  if (/\+fail@|error@/.test(email)) {
    return NextResponse.json({ ok: false, code: "server_error" }, { status: 500 });
  }
  const last = recentByEmail.get(email);
  if (last && now - last < DUPLICATE_WINDOW_MS) {
    return NextResponse.json({ ok: false, code: "duplicate" }, { status: 409 });
  }
  recentByEmail.set(email, now);

  // TODO(integration): create a lead in the correct CRM workspace, notify the
  // sales team, and send a confirmation email (Resend) after verified delivery.
  // Never log message contents or PII beyond what is operationally required.
  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: body.name,
          company: body.company,
          email,
          phone: body.phone,
          team: body.team,
          branches: body.branches ?? "",
          system: body.system ?? "",
          message: body.message ?? "",
          utm: body.utm ?? {},
          receivedAt: new Date(now).toISOString(),
        }),
      });
    } catch {
      return NextResponse.json({ ok: false, code: "server_error" }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
