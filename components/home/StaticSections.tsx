import Link from "next/link";
import {
  beforeItems,
  afterItems,
  platform,
  integrations,
  securityPoints,
  migration,
} from "@/lib/content";

/* ---- Problem / Before-after ---- */
export function Problem() {
  return (
    <section style={{ background: "#F8FAFC", padding: "92px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ maxWidth: 680, marginBottom: 40 }}>
          <div style={{ font: "700 13px var(--font-inter)", color: "#4F46E5", marginBottom: 12 }}>The cost of disconnected tools</div>
          <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 14 }}>When the student record lives in ten places, work falls through the gaps</h2>
          <p style={{ font: "400 18px/28px var(--font-inter)", color: "#475569" }}>Spreadsheets, inboxes, WhatsApp threads, shared drives, and individual memory each hold part of the truth — and no one holds all of it.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} data-ba="1">
          <div style={{ background: "#fff", border: "1px solid #E9DADA", borderRadius: 14, padding: 30 }}>
            <div style={{ font: "700 13px var(--font-inter)", color: "#B91C1C", marginBottom: 16 }}>Before adMYTT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {beforeItems.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 11, font: "500 15px/22px var(--font-inter)", color: "#475569" }}>
                  <span style={{ color: "#B91C1C", fontWeight: 700, marginTop: 1 }}>—</span>
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#0F172A", borderRadius: 14, padding: 30 }}>
            <div style={{ font: "700 13px var(--font-inter)", color: "#5fd0a6", marginBottom: 16 }}>With adMYTT</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
              {afterItems.map((a) => (
                <div key={a} style={{ display: "flex", alignItems: "flex-start", gap: 11, font: "500 15px/22px var(--font-inter)", color: "#dfe5f4" }}>
                  <span style={{ color: "#5fd0a6", fontWeight: 700, marginTop: 1 }}>✓</span>
                  {a}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Product platform ---- */
export function Platform() {
  return (
    <section style={{ background: "#fff", borderTop: "1px solid #EEF2F8", padding: "92px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ maxWidth: 680, marginBottom: 44 }}>
          <div style={{ font: "700 13px var(--font-inter)", color: "#4F46E5", marginBottom: 12 }}>The platform</div>
          <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 14 }}>Every part of the consultancy, in one workspace</h2>
          <p style={{ font: "400 18px/28px var(--font-inter)", color: "#475569" }}>Purpose-built modules for the way education teams actually operate — not a generic sales CRM with custom fields bolted on.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} data-platform="1">
          {platform.map((p) => (
            <Link key={p.title} href={p.href} style={{ textDecoration: "none", background: "#fff", border: "1px solid #E9EEF6", borderRadius: 13, padding: 24, display: "block" }}>
              <span style={{ display: "flex", width: 42, height: 42, borderRadius: 10, alignItems: "center", justifyContent: "center", font: "700 17px var(--font-inter)", background: p.bg, color: p.fg }}>{p.icon}</span>
              <div style={{ font: "700 17px var(--font-inter)", color: "#0F172A", margin: "15px 0 7px" }}>{p.title}</div>
              <div style={{ font: "400 14.5px/22px var(--font-inter)", color: "#64748B" }}>{p.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Integrations ---- */
export function Integrations() {
  return (
    <section style={{ background: "#F8FAFC", padding: "92px 0", borderTop: "1px solid #EEF2F8" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ maxWidth: 680, marginBottom: 40 }}>
          <div style={{ font: "700 13px var(--font-inter)", color: "#4F46E5", marginBottom: 12 }}>Automation &amp; integrations</div>
          <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 14 }}>Connect the channels your enquiries already arrive on</h2>
          <p style={{ font: "400 18px/28px var(--font-inter)", color: "#475569" }}>Capture, route, and respond automatically. Planned integrations are clearly marked and never mixed with active ones.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }} data-integ="1">
          {integrations.map((i) => (
            <div key={i.name} style={{ background: "#fff", border: "1px solid #E9EEF6", borderRadius: 11, padding: "18px 18px 16px", position: "relative" }}>
              <span style={{ width: 38, height: 38, borderRadius: 9, background: "#F1F5FB", display: "flex", alignItems: "center", justifyContent: "center", font: "700 14px var(--font-inter)", color: "#4F46E5" }}>{i.ab}</span>
              <div style={{ font: "700 14.5px var(--font-inter)", color: "#0F172A", margin: "12px 0 4px" }}>{i.name}</div>
              <div style={{ font: "400 12.5px/18px var(--font-inter)", color: "#94a3b8" }}>{i.desc}</div>
              <span style={{ position: "absolute", top: 16, right: 14, font: "700 9.5px var(--font-inter)", borderRadius: 999, padding: "3px 8px", ...(i.kind === "soon" ? { background: "#F1F5FB", color: "#94a3b8" } : { background: "#E6F6EF", color: "#0F9F6E" }) }}>{i.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Security (homepage section) ---- */
export function SecuritySection() {
  return (
    <section id="security" style={{ background: "#fff", padding: "92px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 48, alignItems: "start" }} data-sec="1">
          <div>
            <div style={{ font: "700 13px var(--font-inter)", color: "#4F46E5", marginBottom: 12 }}>Security &amp; trust</div>
            <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 14 }}>Each company gets its own isolated workspace</h2>
            <p style={{ font: "400 17px/27px var(--font-inter)", color: "#475569", marginBottom: 24 }}>Customer records and documents are workspace-scoped. Access is role-based, sessions expire and can be revoked, and important actions are written to an audit log.</p>
            <Link href="/security" style={{ font: "700 15px var(--font-inter)", color: "#fff", textDecoration: "none", background: "#4F46E5", padding: "13px 22px", borderRadius: 8, display: "inline-block" }}>Read the security overview →</Link>
            <div style={{ font: "500 12.5px var(--font-inter)", color: "#94a3b8", marginTop: 16, maxWidth: 380 }}>We describe the controls we operate. We do not claim SOC 2, ISO 27001, or other certifications unless formally verified.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {securityPoints.map((s) => (
              <div key={s.title} style={{ background: "#F8FAFC", border: "1px solid #E9EEF6", borderRadius: 12, padding: 20 }}>
                <span style={{ width: 34, height: 34, borderRadius: 9, background: "#EEF2FF", color: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", font: "700 13px var(--font-inter)" }}>{s.ab}</span>
                <div style={{ font: "700 15px var(--font-inter)", color: "#0F172A", margin: "13px 0 6px" }}>{s.title}</div>
                <div style={{ font: "400 13.5px/20px var(--font-inter)", color: "#64748B" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- Migration ---- */
export function Migration() {
  return (
    <section style={{ background: "#0F172A", padding: "88px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ maxWidth: 680, marginBottom: 40 }}>
          <div style={{ font: "700 13px var(--font-inter)", color: "#7e8ed4", marginBottom: 12 }}>Migration &amp; onboarding</div>
          <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#fff", marginBottom: 14 }}>Move your consultancy across in four steps</h2>
          <p style={{ font: "400 18px/28px var(--font-inter)", color: "#b7c0dd" }}>Bring your spreadsheets or existing CRM, configure your workspace, invite your team, and start operating.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} data-mig="1">
          {migration.map((m) => (
            <div key={m.n} style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 13, padding: 24 }}>
              <div style={{ font: "800 16px var(--font-inter)", color: "#5fd0a6", marginBottom: 14 }}>{m.n}</div>
              <div style={{ font: "700 17px var(--font-inter)", color: "#fff", marginBottom: 8 }}>{m.title}</div>
              <div style={{ font: "400 14px/21px var(--font-inter)", color: "#aab4d6" }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- What you can verify ---- */
export function Evidence() {
  const items = [
    { n: "01", bg: "#EEF2FF", fg: "#4F46E5", title: "One connected student record", desc: "Watch a single record move across every team without re-keying." },
    { n: "02", bg: "#EEF2FF", fg: "#4F46E5", title: "Workspace isolation, in the product", desc: "See exactly how access is scoped to your company and roles." },
    { n: "03", bg: "#E6F6EF", fg: "#0F9F6E", title: "A migration plan for your data", desc: "Bring a sample spreadsheet and see how import mapping works." },
  ];
  return (
    <section style={{ background: "#F8FAFC", padding: "92px 0", borderTop: "1px solid #EEF2F8" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ background: "#fff", border: "1px solid #E9EEF6", borderRadius: 16, padding: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} data-evid="1">
          <div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 20 }}>
              <span style={{ width: 7, height: 30, background: "#B91C1C", borderRadius: 1 }} />
              <span style={{ width: 5, height: 22, background: "#4F46E5", borderRadius: 1 }} />
              <span style={{ width: 4, height: 14, background: "#B91C1C", borderRadius: 1 }} />
            </div>
            <h2 data-h2 style={{ font: "800 32px/40px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 14 }}>See it on your own workflow before you decide</h2>
            <p style={{ font: "400 17px/27px var(--font-inter)", color: "#475569", marginBottom: 24 }}>We don&apos;t lead with claims we can&apos;t show. Book a demo and we&apos;ll walk through adMYTT on a workspace set up for your operating model — leads, applications, documents, and visas, end to end.</p>
            <Link href="/book-a-demo" style={{ font: "700 15px var(--font-inter)", color: "#fff", textDecoration: "none", background: "#4F46E5", padding: "14px 24px", borderRadius: 8, display: "inline-block" }}>Book a demo</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((it) => (
              <div key={it.n} style={{ display: "flex", alignItems: "flex-start", gap: 13, background: "#F8FAFC", border: "1px solid #EAEFF7", borderRadius: 11, padding: "16px 18px" }}>
                <span style={{ width: 30, height: 30, flexShrink: 0, borderRadius: 8, background: it.bg, color: it.fg, display: "flex", alignItems: "center", justifyContent: "center", font: "700 12px var(--font-inter)" }}>{it.n}</span>
                <div>
                  <div style={{ font: "700 14.5px var(--font-inter)", color: "#0F172A", marginBottom: 2 }}>{it.title}</div>
                  <div style={{ font: "400 13px/19px var(--font-inter)", color: "#64748B" }}>{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
