import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { T, F, ctaGradient, ctaShadow } from "@/lib/theme";

/* Dark, anyimmi-style hero: a cream product frame floating on a near-black grid
   canvas, with floating status chips at the corners and a live auto-scrolling
   "Recent activity" feed. Monospace technical detailing. CSS-only motion. */

const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";
const CREAM = "#F7F4EE";
const CREAM_BORDER = "#E7E2D6";
const INK = "#1C1917";
const INK_MUTED = "#6B6357";

const activity: [string, string, string, string, string][] = [
  ["09:41:22", "Lead scored", "Manjot K.", "82 · high intent", T.primary],
  ["09:38:02", "SOP drafted", "Priya S.", "3,842 tok", T.violet],
  ["09:30:11", "Doc verified", "Priya S. · passport", "ok", T.success],
  ["09:24:45", "Follow-up sent", "Arjun K.", "auto", T.primary],
  ["09:12:08", "Visa checklist", "Meera N. · UK", "ready", T.success],
  ["08:58:30", "Application filed", "Rahul M. · Leeds", "submitted", T.primary],
  ["08:42:17", "Payment matched", "INV-2041 · Razorpay", "₹30,000", T.success],
  ["08:31:55", "Risk flagged", "Amit S. · no contact", "48h", "#F97316"],
];

const reviewRows: [string, string, string, "warn" | "info" | "good" | "bad"][] = [
  ["Statement of purpose", "Priya S. · #STU-2041", "AWAITING REVIEW", "warn"],
  ["Visa application", "Rahul M. · UK Student", "READY TO FILE", "good"],
  ["Documents", "Arjun K. · 2 missing", "ACTION NEEDED", "bad"],
  ["Offer decision", "Meera N. · Glasgow", "ACCEPTED", "info"],
];

const tools: [string, string, string][] = [
  ["AI LEAD SCORING", "Score & prioritise", "free"],
  ["FOLLOW-UP", "Draft message", "auto"],
  ["DOC REQUEST", "Send checklist", "auto"],
  ["COURSE FINDER", "Shortlist", "free"],
  ["VISA CHECKLIST", "Country rules", "auto"],
  ["RECORD SUMMARY", "AI brief", "auto"],
];

function badge(tone: "warn" | "info" | "good" | "bad") {
  const m = {
    warn: { bg: "#FBF1DE", c: "#9A6700" },
    info: { bg: "#E8EBFF", c: T.primary },
    good: { bg: "#E4F7EC", c: "#0F7B43" },
    bad: { bg: "#FBE7E4", c: "#B42318" },
  }[tone];
  return { background: m.bg, color: m.c, font: `600 9px ${MONO}`, letterSpacing: ".04em", borderRadius: 5, padding: "3px 8px", whiteSpace: "nowrap" as const };
}

function Chip({ dot, children, style }: { dot: string; children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{ position: "absolute", display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", borderRadius: 11, padding: "9px 13px", boxShadow: "0 16px 34px -12px rgba(0,0,0,.5)", font: `600 12px ${F}`, color: INK, zIndex: 5, ...style }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: dot, flexShrink: 0 }} />
      {children}
    </div>
  );
}

export default function HeroAnyimmi() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "#0A0A0F", paddingTop: 64, paddingBottom: 90 }}>
      {/* grid + glow backdrop */}
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)", backgroundSize: "44px 44px", maskImage: "radial-gradient(120% 90% at 50% 0%, #000 35%, transparent 80%)", WebkitMaskImage: "radial-gradient(120% 90% at 50% 0%, #000 35%, transparent 80%)" }} />
      <div aria-hidden style={{ position: "absolute", top: -160, left: "50%", transform: "translateX(-50%)", width: 1000, height: 560, background: "radial-gradient(closest-side, rgba(124,58,237,.30), rgba(79,70,229,.16), transparent)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 28px", position: "relative", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(124,58,237,.14)", border: "1px solid rgba(124,58,237,.3)", color: "#C4B5FD", borderRadius: 999, padding: "6px 14px", font: `700 12.5px ${F}`, marginBottom: 22 }}>
          <Sparkles size={14} /> AI-enabled CRM for study-abroad &amp; immigration teams
        </div>
        <h1 data-h1 style={{ font: `800 60px/66px ${F}`, letterSpacing: "-.025em", color: "#fff", margin: "0 auto 22px", maxWidth: 880 }}>
          Run your consultancy from first enquiry to visa outcome.
        </h1>
        <p style={{ font: `400 19px/30px ${F}`, color: "#A7A3B3", maxWidth: 660, margin: "0 auto 30px" }}>
          Leads, counselling, applications, documents, and visas in one workspace — with an AI command centre so your team always knows what to do next.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 16 }}>
          <Link href="/book-a-demo" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: ctaGradient, padding: "14px 26px", borderRadius: 11, boxShadow: ctaShadow }}>
            Book a demo <ArrowRight size={17} />
          </Link>
          <Link href="/product" style={{ font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.18)", padding: "14px 24px", borderRadius: 11 }}>
            See the product
          </Link>
        </div>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", font: `500 13px ${F}`, color: "#6B6779" }}>
          {["Workspace-isolated data", "Guided migration", "Live in days"].map((t) => (
            <span key={t} style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green }} /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* floating product frame */}
      <div style={{ maxWidth: 1080, margin: "54px auto 0", padding: "0 28px", position: "relative" }}>
        {/* floating chips */}
        <Chip dot={T.primary} style={{ top: 44, left: 8, animation: "adfloat 5s ease-in-out infinite" }}>Lead score 82 · high intent</Chip>
        <Chip dot={T.success} style={{ top: 96, right: 6, animation: "adfloat2 6s ease-in-out infinite" }}>Visa ready to file</Chip>
        <Chip dot={T.success} style={{ bottom: 70, left: 4, animation: "adfloat 6s ease-in-out infinite" }}>Passport verified · v2</Chip>
        <Chip dot="#F59E0B" style={{ bottom: 26, right: 24, animation: "adfloat2 5s ease-in-out infinite" }}>Follow-up · today 4:00 PM</Chip>

        <div style={{ position: "relative", background: CREAM, border: `1px solid ${CREAM_BORDER}`, borderRadius: 16, boxShadow: "0 60px 120px -40px rgba(0,0,0,.8)", overflow: "hidden", height: 540 }}>
          {/* browser bar */}
          <div style={{ height: 42, background: "#EFEBE2", borderBottom: `1px solid ${CREAM_BORDER}`, display: "flex", alignItems: "center", gap: 7, padding: "0 14px" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0584F" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0A93F" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#54A85B" }} />
            <span style={{ margin: "0 auto 0 16px", font: `500 11px ${MONO}`, color: INK_MUTED }}>https://app.admytt.com/dashboard</span>
            <span style={{ marginLeft: "auto", font: `600 10px ${MONO}`, color: INK_MUTED, display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: T.violet }} /> firm tier · 3 seats</span>
          </div>

          {/* app body */}
          <div style={{ display: "grid", gridTemplateColumns: "1.55fr .95fr", height: 498 }}>
            {/* main */}
            <div style={{ padding: "18px 20px", borderRight: `1px solid ${CREAM_BORDER}` }}>
              <div style={{ font: `600 10.5px ${MONO}`, color: INK_MUTED, letterSpacing: ".04em", marginBottom: 6 }}>BRIGHT FUTURES EDUCATION · WORKSPACE=BFE_104</div>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 18 }}>
                <div style={{ font: `800 19px ${F}`, color: INK, letterSpacing: "-.01em", maxWidth: 280 }}>
                  Good morning, Aisha. <span style={{ color: INK_MUTED, fontWeight: 600 }}>8 students need attention.</span>
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  <div style={{ background: "#fff", border: `1px solid ${CREAM_BORDER}`, borderRadius: 10, padding: "9px 13px" }}>
                    <div style={{ font: `600 8.5px ${MONO}`, color: INK_MUTED, letterSpacing: ".05em" }}>OPEN LEADS</div>
                    <div style={{ font: `800 20px ${F}`, color: INK }}>442</div>
                    <div style={{ font: `500 9px ${MONO}`, color: T.success }}>+12% this month</div>
                  </div>
                  <div style={{ background: "#fff", border: `1px solid ${T.violet}`, borderRadius: 10, padding: "9px 13px", boxShadow: `0 0 0 3px ${T.violetBg}` }}>
                    <div style={{ font: `600 8.5px ${MONO}`, color: T.violet, letterSpacing: ".05em" }}>TIME SAVED · WK</div>
                    <div style={{ font: `800 20px ${F}`, color: INK }}>3.2h</div>
                    <div style={{ font: `500 9px ${MONO}`, color: INK_MUTED }}>vs 6h target</div>
                  </div>
                </div>
              </div>

              {/* tool grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 9, marginBottom: 18 }}>
                {tools.map(([t, sub, tag]) => (
                  <div key={t} style={{ background: "#fff", border: `1px solid ${CREAM_BORDER}`, borderRadius: 9, padding: "10px 11px" }}>
                    <div style={{ font: `600 8px ${MONO}`, color: INK_MUTED, letterSpacing: ".05em", marginBottom: 6 }}>{t}</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ font: `600 11.5px ${F}`, color: INK }}>{sub}</span>
                      <span style={{ font: `600 9px ${MONO}`, color: tag === "free" ? T.success : T.primary }}>{tag}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ font: `700 9.5px ${MONO}`, color: INK_MUTED, letterSpacing: ".06em", marginBottom: 9 }}>NEEDS REVIEW · 4</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {reviewRows.map(([title, sub, tag, tone]) => (
                  <div key={title} style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${CREAM_BORDER}`, borderRadius: 9, padding: "11px 13px" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ font: `700 12px ${F}`, color: INK }}>{title}</div>
                      <div style={{ font: `500 9.5px ${MONO}`, color: INK_MUTED }}>{sub}</div>
                    </div>
                    <span style={badge(tone)}>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* live activity feed (auto-scrolls) */}
            <div style={{ padding: "18px 0 0", position: "relative", overflow: "hidden" }}>
              <div style={{ font: `700 9.5px ${MONO}`, color: INK_MUTED, letterSpacing: ".06em", padding: "0 18px 12px", display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.success, animation: "adpulse 1.6s infinite" }} /> RECENT ACTIVITY · TODAY
              </div>
              <div style={{ position: "relative", height: 440, overflow: "hidden", maskImage: "linear-gradient(180deg, transparent, #000 8%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(180deg, transparent, #000 8%, #000 88%, transparent)" }}>
                <div style={{ display: "flex", flexDirection: "column", animation: "admarquee 22s linear infinite" }}>
                  {[...activity, ...activity].map(([ts, title, sub, meta, c], i) => (
                    <div key={i} style={{ display: "flex", gap: 10, padding: "10px 18px", alignItems: "flex-start" }}>
                      <span style={{ width: 7, height: 7, borderRadius: "50%", background: c, marginTop: 5, flexShrink: 0 }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ font: `500 9px ${MONO}`, color: INK_MUTED }}>{ts}</div>
                        <div style={{ font: `700 11.5px ${F}`, color: INK, marginTop: 1 }}>{title}</div>
                        <div style={{ font: `500 10px ${F}`, color: INK_MUTED }}>{sub}</div>
                      </div>
                      <span style={{ font: `600 9px ${MONO}`, color: INK_MUTED, marginTop: 14, whiteSpace: "nowrap" }}>{meta}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
