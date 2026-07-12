import { describe, it, expect } from "vitest";
import { POST } from "./route";

/** Build a POST Request for the demo endpoint. Unique ip per test isolates the
 *  in-memory rate-limit / duplicate state that the route keeps at module scope. */
function req(body: unknown, ip = "10.0.0.1", raw?: string) {
  return new Request("http://localhost/api/demo", {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": ip },
    body: raw !== undefined ? raw : JSON.stringify(body),
  });
}

const valid = {
  name: "Aisha Khan",
  company: "Bright Futures",
  email: "aisha@brightfutures.com",
  phone: "+91 98765 43210",
  team: "6-20",
  consent: true,
};

describe("POST /api/demo", () => {
  it("accepts a valid submission (no webhook configured in test => ok)", async () => {
    const res = await POST(req({ ...valid, email: "ok1@example.com" }, "10.1.0.1"));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });

  it("rejects missing required fields with 422 + field errors", async () => {
    const res = await POST(req({ consent: true }, "10.1.0.2"));
    expect(res.status).toBe(422);
    const body = await res.json();
    expect(body.code).toBe("validation");
    expect(body.errors.name).toBeTruthy();
    expect(body.errors.email).toBeTruthy();
  });

  it("rejects an invalid email", async () => {
    const res = await POST(req({ ...valid, email: "not-an-email" }, "10.1.0.3"));
    expect(res.status).toBe(422);
    expect((await res.json()).errors.email).toBeTruthy();
  });

  it("requires consent", async () => {
    const res = await POST(req({ ...valid, email: "c@example.com", consent: false }, "10.1.0.4"));
    expect(res.status).toBe(422);
    expect((await res.json()).errors.consent).toBeTruthy();
  });

  it("silently accepts and drops when the honeypot is filled", async () => {
    const res = await POST(req({ ...valid, email: "bot@example.com", company_website: "spam" }, "10.1.0.5"));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ ok: true });
  });

  it("returns 400 on malformed JSON", async () => {
    const res = await POST(req(null, "10.1.0.6", "{not valid json"));
    expect(res.status).toBe(400);
    expect((await res.json()).code).toBe("bad_request");
  });

  it("rate-limits after too many requests from one IP", async () => {
    const ip = "10.9.9.9";
    let last!: Response;
    for (let i = 0; i < 6; i++) {
      last = await POST(req({ ...valid, email: `rl${i}@example.com` }, ip));
    }
    expect(last.status).toBe(429);
    expect((await last.json()).code).toBe("rate_limited");
  });

  it("flags a duplicate email within the window", async () => {
    const ip = "10.2.0.1";
    const email = "dupe-window@example.com";
    const first = await POST(req({ ...valid, email }, ip));
    expect(first.status).toBe(200);
    const second = await POST(req({ ...valid, email }, ip));
    expect(second.status).toBe(409);
    expect((await second.json()).code).toBe("duplicate");
  });
});
