import Link from "next/link";
import { securityPoints } from "@/lib/content";

/* ---- Security (homepage section) ---- */
export function SecuritySection() {
  return (
    <section id="security" style={{ background: "#fff", padding: "92px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: 48, alignItems: "start" }} data-sec="1">
          <div>
            <div style={{ font: "700 13px var(--font-inter)", color: "#4F46E5", marginBottom: 12 }}>Security &amp; trust</div>
            <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 14 }}>Each company gets its own <span className="hl">isolated workspace</span></h2>
            <p style={{ font: "400 17px/27px var(--font-inter)", color: "#475569", marginBottom: 24 }}>Customer records and documents are workspace-scoped. Access is role-based, sessions expire and can be revoked, and important actions are written to an audit log.</p>
            <Link href="/security" style={{ font: "700 15px var(--font-inter)", color: "#fff", textDecoration: "none", background: "#4F46E5", padding: "13px 22px", borderRadius: 8, display: "inline-block" }}>Read the security overview →</Link>
            <div style={{ font: "500 12.5px var(--font-inter)", color: "#94a3b8", marginTop: 16, maxWidth: 380 }}>We describe the controls we operate. We do not claim SOC 2, ISO 27001, or other certifications unless formally verified.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {securityPoints.map((s) => (
              <div key={s.title} className="card-hover" style={{ background: "#F8FAFC", borderRadius: 12, padding: 20 }}>
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
