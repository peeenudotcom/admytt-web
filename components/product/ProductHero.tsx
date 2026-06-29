import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { T, F, ctaGradient, ctaShadow } from "@/lib/theme";
import LiveRealDashboard from "@/components/product/LiveRealDashboard";

/* Product-page hero: brand light canvas, the connected dashboard framed below
   as the authentic product screen (anonymised demo data). */
export default function ProductHero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 110% at 78% -10%,#EEF2FF 0%,#F8FAFC 52%)", borderBottom: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "64px 28px 0" }}>
        <div style={{ maxWidth: 780 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.indigoBg, border: `1px solid ${T.indigoBorder}`, color: T.primary, borderRadius: 999, padding: "6px 14px", font: `700 12.5px ${F}`, marginBottom: 20 }}>
            <Sparkles size={14} /> AI-powered CRM for education consultancies
          </div>
          <h1 data-h1 style={{ font: `800 52px/58px ${F}`, letterSpacing: "-.025em", color: T.text, marginBottom: 20 }}>
            Run every student journey from one <span className="hl">connected workspace</span>.
          </h1>
          <p style={{ font: `400 18.5px/29px ${F}`, color: T.muted, maxWidth: 720, marginBottom: 26 }}>
            adMYTT brings leads, daily work, counselling, applications, documents, finance, study and visitor visas, partners and academy operations into one secure platform. Its AI Command Centre identifies priorities while your team remains in control.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 22 }}>
            <Link href="/book-a-demo" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: ctaGradient, padding: "14px 26px", borderRadius: 10, boxShadow: ctaShadow }}>
              Book a product demo <ArrowRight size={17} />
            </Link>
            <Link href="#workflows" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: T.text, textDecoration: "none", background: "#fff", border: `1px solid ${T.border}`, padding: "14px 24px", borderRadius: 10 }}>
              Explore the workflows
            </Link>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", font: `600 13px ${F}`, color: T.muted }}>
            {["Workspace-isolated data", "Guided migration", "Human-controlled AI"].map((t) => (
              <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green }} /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* connected dashboard, framed */}
      <div style={{ maxWidth: 1180, margin: "44px auto 0", padding: "0 28px 64px", position: "relative" }}>
        <div className="app-frame" style={{ position: "relative", background: "#fff", overflow: "hidden", boxShadow: "0 50px 110px -42px rgba(15,23,42,.55)" }}>
          <div style={{ height: 40, background: T.creamBar, borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", gap: 7, padding: "0 14px" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0584F" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0A93F" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#54A85B" }} />
            <span style={{ margin: "0 auto", display: "inline-flex", alignItems: "center", gap: 7, background: "#fff", border: `1px solid ${T.border}`, borderRadius: 7, padding: "4px 16px", font: `500 11px ${F}`, color: T.subtle }}>
              <ShieldCheck size={11} /> app.admytt.com/dashboard
            </span>
          </div>
          <div className="app-scroll" style={{ maxHeight: 500 }}>
            <LiveRealDashboard />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 14, font: `500 12px ${F}`, color: T.subtle }}>A real adMYTT workspace, shown with anonymised demo data.</div>
      </div>
    </section>
  );
}
