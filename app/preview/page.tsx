import type { Metadata } from "next";
import Link from "next/link";
import {
  Users, MessageSquare, GraduationCap, FileText, Clock,
  Sparkles, Search, Plus, ArrowRight, ShieldCheck, Bell,
} from "lucide-react";

export const metadata: Metadata = { title: "Preview — new direction", robots: { index: false } };

/* Real product tokens (from tarahut-ams) */
const T = {
  bg: "#F8FAFC", surface: "#FFFFFF", surface2: "#F1F5F9", border: "#E2E8F0",
  text: "#0F172A", muted: "#475569", subtle: "#94A3B8",
  primary: "#4F46E5", primary500: "#6366F1", violet: "#7C3AED", blue: "#2563EB",
  green: "#10B981", success: "#047857", danger: "#B91C1C", warning: "#B45309",
};
const F = "var(--font-inter), system-ui, sans-serif";

export default function PreviewPage() {
  return (
    <div style={{ background: T.surface, fontFamily: F, color: T.text }}>
      <PreviewHeader />
      <Hero />
      <AISection />
      <div style={{ background: T.surface2, borderTop: `1px solid ${T.border}`, padding: "20px 28px", textAlign: "center", font: `500 13px ${F}`, color: T.subtle }}>
        Preview of the rebuilt hero + AI section only — your real brand (indigo/violet · Inter · slate). Product visuals are faithful recreations; swap in sanitized screenshots before launch.
      </div>
    </div>
  );
}

/* ----------------------------- Header ----------------------------- */
function PreviewHeader() {
  const nav = ["Product", "Solutions", "AI", "Security", "Pricing"];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.85)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", height: 66, display: "flex", alignItems: "center", gap: 30 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-wordmark.png" alt="adMYTT" height={24} width={90} style={{ height: 24, width: "auto" }} />
        <nav style={{ display: "flex", gap: 26, marginLeft: 6 }}>
          {nav.map((n) => (
            <span key={n} style={{ font: `600 14.5px ${F}`, color: T.muted }}>{n}</span>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ font: `600 14.5px ${F}`, color: T.text }}>Log in</span>
          <span style={{ font: `700 14.5px ${F}`, color: "#fff", background: `linear-gradient(135deg,${T.primary},${T.blue})`, padding: "10px 18px", borderRadius: 10, boxShadow: "0 6px 18px -4px rgba(79,70,229,.5)" }}>Book a demo</span>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------ Hero ------------------------------ */
function Hero() {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: T.surface, paddingTop: 72 }}>
      {/* soft glow */}
      <div style={{ position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)", width: 900, height: 520, background: "radial-gradient(closest-side, rgba(124,58,237,.16), rgba(79,70,229,.10), transparent)", filter: "blur(10px)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 28px", position: "relative", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EEF2FF", border: "1px solid #E0E7FF", color: T.primary, borderRadius: 999, padding: "6px 14px", font: `700 12.5px ${F}`, marginBottom: 22 }}>
          <Sparkles size={14} /> AI-enabled CRM for study-abroad & immigration teams
        </div>
        <h1 style={{ font: `800 60px/66px ${F}`, letterSpacing: "-.025em", color: T.text, margin: "0 auto 22px", maxWidth: 880 }}>
          Run your consultancy from first enquiry to visa outcome.
        </h1>
        <p style={{ font: `400 19px/30px ${F}`, color: T.muted, maxWidth: 620, margin: "0 auto 30px" }}>
          Leads, counselling, applications, documents, payments, and visas in one workspace — with an AI command centre that tells your team what to do next.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 18 }}>
          <Link href="/book-a-demo" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: `linear-gradient(135deg,${T.primary},${T.blue})`, padding: "14px 26px", borderRadius: 11, boxShadow: "0 12px 30px -8px rgba(79,70,229,.5)" }}>
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

      {/* framed product visual */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px 0", position: "relative" }}>
        <BrowserFrame url="app.admytt.com/dashboard">
          <DashboardMock />
        </BrowserFrame>
      </div>
      <div style={{ height: 80, background: `linear-gradient(${T.surface}, ${T.bg})` }} />
    </section>
  );
}

/* --------------------------- AI section --------------------------- */
function AISection() {
  return (
    <section style={{ background: T.bg, padding: "84px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px", display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 48, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F5F3FF", border: "1px solid #EDE9FE", color: T.violet, borderRadius: 999, padding: "6px 13px", font: `700 12px ${F}`, marginBottom: 18 }}>
            <Sparkles size={13} /> AI Ops Command Center
          </div>
          <h2 style={{ font: `800 38px/45px ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: 16 }}>
            Your team opens the app and already knows what to do.
          </h2>
          <p style={{ font: `400 17px/27px ${F}`, color: T.muted, marginBottom: 22 }}>
            adMYTT scores leads, surfaces urgent files, flags missing documents, and drafts follow-ups — each tied to a real action your team reviews and approves.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 24 }}>
            {[
              "Prioritised next actions, not a blank inbox",
              "Urgent visa & document alerts before deadlines bite",
              "Follow-up drafts ready for one-click review",
            ].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10, font: `500 15px/22px ${F}`, color: T.text }}>
                <span style={{ color: T.violet, fontWeight: 800, marginTop: 1 }}>✓</span> {t}
              </div>
            ))}
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#F5F3FF", borderRadius: 10, padding: "11px 14px", font: `700 13px ${F}`, color: T.violet }}>
            <ShieldCheck size={16} /> AI suggests. Your team decides.
          </div>
        </div>

        <BrowserFrame url="app.admytt.com/dashboard">
          <AICommandMock />
        </BrowserFrame>
      </div>
    </section>
  );
}

/* --------------------------- Primitives --------------------------- */
function BrowserFrame({ url, children }: { url: string; children: React.ReactNode }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 16, boxShadow: "0 40px 80px -32px rgba(15,23,42,.35)", overflow: "hidden" }}>
      <div style={{ height: 40, background: "#fff", borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", gap: 7, padding: "0 14px" }}>
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF5F57" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FEBC2E" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28C840" }} />
        <span style={{ margin: "0 auto", display: "inline-flex", alignItems: "center", gap: 7, background: T.surface2, borderRadius: 7, padding: "4px 14px", font: `500 11.5px ${F}`, color: T.subtle }}>
          <ShieldCheck size={11} /> {url}
        </span>
      </div>
      {children}
    </div>
  );
}

const metrics = [
  { icon: Users, label: "New Leads", value: "442", delta: "+12.4%", up: true, c: T.primary },
  { icon: MessageSquare, label: "Active Counselling", value: "606", delta: "+8.6%", up: true, c: T.blue },
  { icon: GraduationCap, label: "Applications", value: "184", delta: "+5.2%", up: true, c: T.violet },
  { icon: FileText, label: "Visas Filed", value: "57", delta: "+3.1%", up: true, c: "#0EA5E9" },
  { icon: Clock, label: "Pending Follow-ups", value: "23", delta: "-2.3%", up: false, c: "#F97316" },
];

function MetricCard({ m }: { m: (typeof metrics)[number] }) {
  const Icon = m.icon;
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, font: `700 9px ${F}`, letterSpacing: ".06em", color: T.success }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green }} /> LIVE
        </span>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: `${m.c}14`, color: m.c, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon size={14} />
        </span>
      </div>
      <div style={{ font: `800 26px ${F}`, color: T.text, letterSpacing: "-.02em" }}>{m.value}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
        <span style={{ font: `500 11px ${F}`, color: T.muted }}>{m.label}</span>
      </div>
      <div style={{ display: "inline-block", marginTop: 8, font: `700 10px ${F}`, color: m.up ? T.success : T.danger, background: m.up ? "#ECFDF5" : "#FEF2F2", borderRadius: 6, padding: "2px 7px" }}>{m.delta}</div>
    </div>
  );
}

function DashboardMock() {
  return (
    <div style={{ display: "flex", background: T.bg, minHeight: 470 }}>
      {/* sidebar */}
      <div style={{ width: 168, background: "#fff", borderRight: `1px solid ${T.border}`, padding: "16px 12px", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-wordmark.png" alt="" height={18} width={68} style={{ height: 18, width: "auto", marginBottom: 18, marginLeft: 6 }} />
        <div style={{ font: `700 9px ${F}`, letterSpacing: ".08em", color: T.subtle, margin: "0 0 8px 8px" }}>CORE CRM</div>
        {[
          ["Dashboard", true], ["Today", false], ["Leads", false], ["Pipeline", false],
          ["Counselling", false], ["Admissions", false], ["Documents", false], ["Visas", false],
        ].map(([label, active]) => (
          <div key={label as string} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 10px", borderRadius: 8, marginBottom: 2, background: active ? "#EEF2FF" : "transparent", color: active ? T.primary : T.muted, font: `${active ? 700 : 500} 12.5px ${F}` }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: active ? T.primary : T.border }} /> {label}
          </div>
        ))}
      </div>
      {/* main */}
      <div style={{ flex: 1, padding: "16px 18px", minWidth: 0 }}>
        {/* topbar */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${T.border}`, borderRadius: 9, padding: "7px 11px", font: `600 11.5px ${F}`, color: T.text }}>🌐 Global Workspace</span>
          <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 7, border: `1px solid ${T.border}`, borderRadius: 9, padding: "7px 11px", font: `500 11.5px ${F}`, color: T.subtle, maxWidth: 320 }}>
            <Search size={13} /> Search leads, cases, tasks…
          </span>
          <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, background: T.violet, color: "#fff", borderRadius: 9, padding: "7px 12px", font: `700 11.5px ${F}` }}>
            <Plus size={13} /> Quick Action
          </span>
          <span style={{ width: 30, height: 30, borderRadius: 9, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: T.muted }}><Bell size={14} /></span>
          <span style={{ width: 30, height: 30, borderRadius: "50%", background: T.primary, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: `700 11px ${F}` }}>AK</span>
        </div>
        <div style={{ font: `800 22px ${F}`, color: T.text, letterSpacing: "-.01em" }}>Good morning, Aisha 👋</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span style={{ font: `400 12.5px ${F}`, color: T.muted }}>Here&apos;s what&apos;s happening with your study-abroad operations today.</span>
          <span style={{ font: `600 9px ${F}`, color: T.subtle, background: T.surface2, borderRadius: 5, padding: "2px 7px" }}>Demo data</span>
        </div>
        {/* metric cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10, marginBottom: 16 }}>
          {metrics.map((m) => <MetricCard key={m.label} m={m} />)}
        </div>
        {/* AI ops strip */}
        <AIOpsStrip compact />
      </div>
    </div>
  );
}

function AIOpsStrip({ compact = false }: { compact?: boolean }) {
  const stats = [
    ["PRIORITY ALERTS", "3", "High-impact items"],
    ["DUE TODAY", "8", "Tasks & follow-ups"],
    ["OVERDUE", "2", "Need action now"],
    ["NEW THIS WEEK", "12", "Leads & applications"],
  ];
  return (
    <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg,#1E1B4B 0%,#312E81 100%)", borderRadius: 16, padding: compact ? "16px 18px" : "22px 24px" }}>
      <div style={{ position: "absolute", top: -40, right: -30, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.55), transparent 70%)" }} />
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 12, marginBottom: compact ? 14 : 18 }}>
        <span style={{ width: 38, height: 38, borderRadius: 11, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.16)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD" }}><Sparkles size={18} /></span>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ font: `800 ${compact ? 15 : 18}px ${F}`, color: "#fff" }}>AI Ops Command Center</span>
            <span style={{ font: `700 8.5px ${F}`, color: "#C4B5FD", background: "rgba(124,58,237,.3)", border: "1px solid rgba(196,181,253,.3)", borderRadius: 999, padding: "2px 7px" }}>BETA</span>
          </div>
          <div style={{ font: `400 11.5px ${F}`, color: "#A5B4FC" }}>AI-prioritised actions, alerts, and operational signals.</div>
        </div>
      </div>
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
        {stats.map(([label, val, sub]) => (
          <div key={label} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 11, padding: compact ? "10px 12px" : "14px 16px" }}>
            <div style={{ font: `700 8.5px ${F}`, letterSpacing: ".06em", color: "#A5B4FC", marginBottom: 5 }}>{label}</div>
            <div style={{ font: `800 ${compact ? 22 : 28}px ${F}`, color: "#fff" }}>{val}</div>
            <div style={{ font: `400 10px ${F}`, color: "#8B93C9", marginTop: 2 }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AICommandMock() {
  return (
    <div style={{ background: T.bg, padding: 18, minHeight: 420 }}>
      <AIOpsStrip />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
        <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: 16 }}>
          <div style={{ font: `700 13px ${F}`, color: T.text, marginBottom: 12 }}>AI Suggested Next Actions</div>
          {[
            ["Call 8 hot leads", "High intent · no contact 48h", T.danger, "#FEF2F2"],
            ["Chase 5 pending SOPs", "Applications blocked", T.warning, "#FFFBEB"],
            ["Send 12 follow-ups", "Drafts ready to review", T.primary, "#EEF2FF"],
          ].map(([t, s, c, bg]) => (
            <div key={t as string} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, background: bg as string, marginBottom: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: c as string }} />
              <div style={{ flex: 1 }}>
                <div style={{ font: `700 12px ${F}`, color: T.text }}>{t}</div>
                <div style={{ font: `400 10.5px ${F}`, color: T.muted }}>{s}</div>
              </div>
              <ArrowRight size={13} color={T.subtle} />
            </div>
          ))}
        </div>
        <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: 16 }}>
          <div style={{ font: `700 13px ${F}`, color: T.text, marginBottom: 12 }}>Urgent File Alerts</div>
          {[
            ["Priya Sharma — bank statement", "Visa filing blocked", "Documents"],
            ["Arjun Kapoor — CAS expiring", "Action in 3 days", "Visas"],
            ["Meera Nair — offer decision", "Overdue", "Admissions"],
          ].map(([t, s, tag]) => (
            <div key={t as string} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, border: `1px solid ${T.border}`, marginBottom: 8 }}>
              <span style={{ width: 26, height: 26, borderRadius: 8, background: "#F5F3FF", color: T.violet, display: "flex", alignItems: "center", justifyContent: "center" }}><FileText size={13} /></span>
              <div style={{ flex: 1 }}>
                <div style={{ font: `700 12px ${F}`, color: T.text }}>{t}</div>
                <div style={{ font: `400 10.5px ${F}`, color: T.muted }}>{s}</div>
              </div>
              <span style={{ font: `700 9px ${F}`, color: T.violet, background: "#F5F3FF", borderRadius: 999, padding: "3px 8px" }}>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
