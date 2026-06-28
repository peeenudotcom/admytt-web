import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { T, F, ctaGradient, ctaShadow } from "@/lib/theme";
import { BrowserFrame } from "@/components/product/Screens";
import LiveDashboard from "@/components/product/LiveDashboard";

export default function HeroNew() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: T.surface, paddingTop: 72 }}>
      <div style={{ position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)", width: 900, height: 520, background: "radial-gradient(closest-side, rgba(124,58,237,.16), rgba(79,70,229,.10), transparent)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 28px", position: "relative", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.indigoBg, border: `1px solid ${T.indigoBorder}`, color: T.primary, borderRadius: 999, padding: "6px 14px", font: `700 12.5px ${F}`, marginBottom: 22 }}>
          <Sparkles size={14} /> AI-enabled CRM for study-abroad &amp; immigration teams
        </div>
        <h1 data-h1 style={{ font: `800 60px/66px ${F}`, letterSpacing: "-.025em", color: T.text, margin: "0 auto 22px", maxWidth: 880 }}>
          Run your consultancy from first enquiry to visa outcome.
        </h1>
        <p style={{ font: `400 19px/30px ${F}`, color: T.muted, maxWidth: 660, margin: "0 auto 30px" }}>
          Leads, counselling, applications, documents, and visas in one workspace — with an AI command centre so your team always knows what to do next.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 18 }}>
          <Link href="/book-a-demo" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: ctaGradient, padding: "14px 26px", borderRadius: 11, boxShadow: ctaShadow }}>
            Book a demo <ArrowRight size={17} />
          </Link>
          <Link href="/product" style={{ font: `700 15.5px ${F}`, color: T.text, textDecoration: "none", background: "#fff", border: `1px solid ${T.border}`, padding: "14px 24px", borderRadius: 11 }}>
            See the product
          </Link>
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", font: `500 13.5px ${F}`, color: T.subtle, marginBottom: 50 }}>
          {["Workspace-isolated data", "Guided migration", "Live in days"].map((t) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green }} /> {t}
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px", position: "relative" }}>
        {/* Swap to a sanitized screenshot by passing src="/screens/dashboard.png" */}
        <BrowserFrame url="app.admytt.com/dashboard">
          <LiveDashboard />
        </BrowserFrame>
      </div>
      <div style={{ height: 80, background: `linear-gradient(${T.surface}, ${T.bg})` }} />
    </section>
  );
}
