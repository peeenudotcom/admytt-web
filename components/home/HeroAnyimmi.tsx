import Link from "next/link";
import { Sparkles, ArrowRight, Play, ShieldCheck } from "lucide-react";
import { T, F, ctaGradient, ctaShadow } from "@/lib/theme";
import { site } from "@/lib/site";
import LiveRealDashboard from "@/components/product/LiveRealDashboard";

/* Dark, dramatic hero canvas with the REAL adMYTT dashboard (white) floating
   inside a browser frame — animated, anonymised demo data. Annotation chips
   describe real product features. */

function Chip({ dot, children, style }: { dot: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ position: "absolute", display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", borderRadius: 11, padding: "9px 13px", boxShadow: "0 18px 40px -14px rgba(0,0,0,.55)", font: `600 12px ${F}`, color: T.text, zIndex: 5, ...style }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: dot, flexShrink: 0 }} />
      {children}
    </div>
  );
}

export default function HeroAnyimmi() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: T.canvas, paddingTop: 64, paddingBottom: 90 }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)", backgroundSize: "44px 44px", maskImage: "radial-gradient(120% 90% at 50% 0%, #000 35%, transparent 80%)", WebkitMaskImage: "radial-gradient(120% 90% at 50% 0%, #000 35%, transparent 80%)" }} />
      <div aria-hidden style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 1000, height: 560, background: "radial-gradient(closest-side, rgba(124,58,237,.30), rgba(79,70,229,.16), transparent)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 28px", position: "relative", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,.14)", border: "1px solid rgba(124,58,237,.3)", color: "#C4B5FD", borderRadius: 999, padding: "6px 14px", font: `700 12.5px ${F}`, marginBottom: 22 }}>
          <Sparkles size={14} /> The operating system for education consultancies
        </div>
        <h1 data-h1 style={{ font: `800 58px/64px ${F}`, letterSpacing: "-.025em", color: "#fff", margin: "0 auto 22px", maxWidth: 900 }}>
          Manage every student journey, from first enquiry to final <span style={{ color: "#818CF8" }}>visa decision</span>.
        </h1>
        <p style={{ font: `400 19px/30px ${F}`, color: "#A7A3B3", maxWidth: 680, margin: "0 auto 30px" }}>
          adMYTT brings leads, counselling, applications, documents, follow-ups and team performance into one secure platform built specifically for education consultancies.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
          <a href={site.appUrl} style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: ctaGradient, padding: "14px 26px", borderRadius: 11, boxShadow: ctaShadow }}>
            Start Free for 14 Days <ArrowRight size={17} />
          </a>
          <Link href="/product" style={{ display: "inline-flex", alignItems: "center", gap: 9, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.18)", padding: "14px 24px", borderRadius: 11 }}>
            <Play size={15} /> Watch Product Tour
          </Link>
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", font: `500 13px ${F}`, color: "#8E8AA0" }}>
          {["No credit card required", "Guided data migration", "Setup support included"].map((t) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green }} /> {t}
            </span>
          ))}
        </div>
        <div style={{ marginTop: 22, font: `500 13.5px ${F}`, color: "#6B6779", display: "flex", alignItems: "center", justifyContent: "center", gap: 9 }}>
          <span style={{ display: "flex", gap: -6 }}>
            {["#7C3AED", "#2563EB", "#0F9F6E"].map((c, i) => (
              <span key={c} style={{ width: 18, height: 18, borderRadius: "50%", background: c, border: "2px solid #0A0A0F", marginLeft: i ? -6 : 0 }} />
            ))}
          </span>
          Trusted by consultancy teams managing thousands of student applications.
        </div>
      </div>

      {/* real dashboard, framed */}
      <div style={{ maxWidth: 1120, margin: "54px auto 0", padding: "0 28px", position: "relative" }}>
        <Chip dot={T.primary} style={{ top: 70, left: 4, animation: "adfloat 5s ease-in-out infinite" }}>Auto-assigned by branch rule</Chip>
        <Chip dot={T.success} style={{ bottom: 38, right: 18, animation: "adfloat2 6s ease-in-out infinite" }}>AI lead score 82 · high intent</Chip>

        <div className="app-frame" style={{ position: "relative", background: "#fff", overflow: "hidden", boxShadow: "0 60px 120px -40px rgba(0,0,0,.8)" }}>
          <div style={{ height: 40, background: "#F8FAFC", borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", gap: 7, padding: "0 14px" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
            <span style={{ margin: "0 auto", display: "inline-flex", alignItems: "center", gap: 7, background: "#fff", border: `1px solid ${T.border}`, borderRadius: 7, padding: "4px 16px", font: `500 11px ${F}`, color: T.subtle }}>
              <ShieldCheck size={11} /> app.admytt.com/dashboard
            </span>
          </div>
          <div className="app-scroll" style={{ maxHeight: 500 }}>
            <LiveRealDashboard />
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: 14, font: `500 12px ${F}`, color: "#6B6779" }}>A real adMYTT workspace, with anonymised demo data.</div>
      </div>
    </section>
  );
}
