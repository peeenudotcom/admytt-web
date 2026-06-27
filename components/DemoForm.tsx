"use client";

import { useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  team: string;
  branches: string;
  system: string;
  message: string;
  consent: boolean;
};
type Status = "idle" | "submitting" | "success" | "duplicate" | "error";
type Errors = Partial<Record<keyof FormState, string>>;

const empty: FormState = { name: "", company: "", email: "", phone: "", team: "", branches: "", system: "", message: "", consent: false };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const baseInput: React.CSSProperties = {
  width: "100%",
  font: "400 14.5px var(--font-inter)",
  color: "#0B1230",
  background: "#fff",
  border: "1px solid #DCE3EE",
  borderRadius: 8,
  padding: "11px 13px",
  outline: "none",
  transition: "border-color .15s,box-shadow .15s",
  WebkitAppearance: "none",
};
const badInput: React.CSSProperties = { ...baseInput, background: "#FEF6F6", border: "1px solid #CB0000" };

function validate(f: FormState): Errors {
  const e: Errors = {};
  if (!f.name.trim()) e.name = "Enter your full name.";
  if (!f.company.trim()) e.company = "Enter your company name.";
  if (!f.email.trim()) e.email = "Enter your work email.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (!f.phone.trim()) e.phone = "Enter a phone number.";
  else if (f.phone.replace(/[^0-9]/g, "").length < 7) e.phone = "Enter a valid phone number.";
  if (!f.team) e.team = "Select your team size.";
  if (!f.consent) e.consent = "Please agree to be contacted.";
  return e;
}

/** Reads UTM params off the current URL without storing anything sensitive. */
function readUtm(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const utm: Record<string, string> = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => {
    const v = p.get(k);
    if (v) utm[k] = v;
  });
  return utm;
}

export default function DemoForm() {
  const [f, setF] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const startedRef = useRef(false);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const set = <K extends keyof FormState>(key: K, val: FormState[K]) => {
    if (!startedRef.current) {
      startedRef.current = true;
      track("demo_form_started");
    }
    setF((s) => ({ ...s, [key]: val }));
    setErrors((e) => {
      if (!e[key]) return e;
      const next = { ...e };
      delete next[key];
      return next;
    });
  };

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (status === "submitting") return;
    const errs = validate(f);
    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus("idle");
      return;
    }
    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...f, company_website: honeypotRef.current?.value ?? "", utm: readUtm() }),
      });
      if (res.ok) {
        track("demo_form_submitted", { plan: undefined });
        setStatus("success");
        return;
      }
      let code = "server_error";
      try {
        const data = await res.json();
        code = data?.code ?? code;
        if (data?.errors) setErrors(data.errors);
      } catch {
        /* ignore parse error */
      }
      setStatus(code === "duplicate" ? "duplicate" : code === "validation" ? "idle" : "error");
    } catch {
      setStatus("error");
    }
  }

  const submitting = status === "submitting";
  const labelStyle: React.CSSProperties = { display: "block", font: "600 13px var(--font-inter)", color: "#334155", marginBottom: 6 };
  const errStyle: React.CSSProperties = { font: "500 12px var(--font-inter)", color: "#CB0000", marginTop: 5 };
  const st = (k: keyof FormState) => (errors[k] ? badInput : baseInput);

  return (
    <div style={{ background: "#fff", borderRadius: 16, padding: 30, boxShadow: "0 34px 80px -34px rgba(0,0,0,.6)" }}>
      {status === "success" ? (
        <div style={{ textAlign: "center", padding: "26px 6px" }}>
          <div style={{ width: 58, height: 58, margin: "0 auto 18px", borderRadius: "50%", background: "#E6F6EF", display: "flex", alignItems: "center", justifyContent: "center", font: "700 27px var(--font-manrope)", color: "#0F9F6E" }}>✓</div>
          <div style={{ font: "800 23px var(--font-manrope)", color: "#0B1230", marginBottom: 9 }}>Request received</div>
          <p style={{ font: "400 15px/23px var(--font-inter)", color: "#475569", maxWidth: 340, margin: "0 auto 22px" }}>
            Thanks — a product specialist will reply within one business day to schedule your demo. A confirmation is on its way to your work email.
          </p>
          <button
            type="button"
            onClick={() => {
              setF(empty);
              setErrors({});
              setStatus("idle");
              startedRef.current = false;
            }}
            style={{ font: "700 14px var(--font-manrope)", color: "#212177", background: "#fff", border: "1px solid #DCE3EE", borderRadius: 8, padding: "11px 20px", cursor: "pointer" }}
          >
            Book another demo
          </button>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <div style={{ font: "800 20px var(--font-manrope)", color: "#0B1230", marginBottom: 4 }}>Book a demo</div>
          <div style={{ font: "400 13.5px var(--font-inter)", color: "#64748B", marginBottom: 20 }}>Fields marked * are required.</div>

          {status === "error" && (
            <div role="alert" style={{ display: "flex", alignItems: "flex-start", gap: 9, background: "#FBE9E9", border: "1px solid #F2C9C9", borderRadius: 8, padding: "11px 13px", marginBottom: 16, font: "500 13px/19px var(--font-inter)", color: "#9B1C1C" }}>
              <span style={{ fontWeight: 700 }}>!</span>Something went wrong sending your request. Please try again, or email {site.demoEmail}.
            </div>
          )}
          {status === "duplicate" && (
            <div role="alert" style={{ display: "flex", alignItems: "flex-start", gap: 9, background: "#FCEFDD", border: "1px solid #F0D6AE", borderRadius: 8, padding: "11px 13px", marginBottom: 16, font: "500 13px/19px var(--font-inter)", color: "#92590B" }}>
              <span style={{ fontWeight: 700 }}>i</span>We already have a recent demo request from this email. We&apos;ll be in touch shortly — or email {site.demoEmail} to follow up.
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div>
              <label htmlFor="df-name" style={labelStyle}>Full name *</label>
              <input id="df-name" type="text" autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} placeholder="Aisha Khan" style={st("name")} />
              {errors.name && <div style={errStyle}>{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="df-company" style={labelStyle}>Company name *</label>
              <input id="df-company" type="text" autoComplete="organization" value={f.company} onChange={(e) => set("company", e.target.value)} aria-invalid={!!errors.company} placeholder="Bright Futures Education" style={st("company")} />
              {errors.company && <div style={errStyle}>{errors.company}</div>}
            </div>
            <div>
              <label htmlFor="df-email" style={labelStyle}>Work email *</label>
              <input id="df-email" type="email" autoComplete="email" value={f.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} placeholder="aisha@brightfutures.com" style={st("email")} />
              {errors.email && <div style={errStyle}>{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="df-phone" style={labelStyle}>Phone *</label>
              <input id="df-phone" type="tel" autoComplete="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} placeholder="+91 98765 43210" style={st("phone")} />
              {errors.phone && <div style={errStyle}>{errors.phone}</div>}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label htmlFor="df-team" style={labelStyle}>Team size *</label>
                <select id="df-team" value={f.team} onChange={(e) => set("team", e.target.value)} aria-invalid={!!errors.team} style={st("team")}>
                  <option value="">Select…</option>
                  <option value="1-5">1–5</option>
                  <option value="6-20">6–20</option>
                  <option value="21-50">21–50</option>
                  <option value="51+">51+</option>
                </select>
                {errors.team && <div style={errStyle}>{errors.team}</div>}
              </div>
              <div>
                <label htmlFor="df-branches" style={labelStyle}>Branches</label>
                <select id="df-branches" value={f.branches} onChange={(e) => set("branches", e.target.value)} style={baseInput}>
                  <option value="">Select…</option>
                  <option value="1">1</option>
                  <option value="2-5">2–5</option>
                  <option value="6+">6+</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="df-system" style={labelStyle}>Current system</label>
              <select id="df-system" value={f.system} onChange={(e) => set("system", e.target.value)} style={baseInput}>
                <option value="">Select…</option>
                <option value="spreadsheets">Spreadsheets &amp; email</option>
                <option value="another-crm">Another CRM</option>
                <option value="mix">A mix of tools</option>
                <option value="none">Nothing structured yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="df-message" style={labelStyle}>
                Anything specific you want to see? <span style={{ color: "#94a3b8", fontWeight: 400 }}>(optional)</span>
              </label>
              <textarea id="df-message" rows={3} value={f.message} onChange={(e) => set("message", e.target.value)} placeholder="e.g. visa workflow for the UK, partner commissions…" style={{ ...baseInput, resize: "vertical", minHeight: 74 }} />
            </div>

            {/* Honeypot — visually hidden, ignored by humans. */}
            <input
              ref={honeypotRef}
              type="text"
              name="company_website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
              defaultValue=""
            />

            <label htmlFor="df-consent" style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
              <input id="df-consent" type="checkbox" checked={f.consent} onChange={(e) => set("consent", e.target.checked)} aria-invalid={!!errors.consent} style={{ width: 17, height: 17, marginTop: 2, accentColor: "#2453D4", flexShrink: 0 }} />
              <span style={{ font: "400 12.5px/18px var(--font-inter)", color: "#64748B" }}>
                I agree to be contacted about my demo request. adMYTT will not share my details, and I can opt out at any time.
              </span>
            </label>
            {errors.consent && <div style={{ ...errStyle, marginTop: -6 }}>{errors.consent}</div>}

            <button
              type="submit"
              disabled={submitting}
              style={{
                width: "100%",
                font: "700 15px var(--font-manrope)",
                color: "#fff",
                background: submitting ? "#6f86d8" : "#2453D4",
                border: "none",
                borderRadius: 8,
                padding: 14,
                cursor: submitting ? "default" : "pointer",
                boxShadow: "0 8px 20px rgba(36,83,212,.28)",
              }}
            >
              {submitting ? "Submitting…" : "Book a demo"}
            </button>
            <div style={{ font: "400 12px/18px var(--font-inter)", color: "#94a3b8", textAlign: "center" }}>
              We reply within one business day. Your details are used only to schedule your demo.
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
