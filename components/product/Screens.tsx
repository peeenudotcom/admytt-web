import {
  Users, MessageSquare, GraduationCap, FileText, Clock,
  Sparkles, Search, Plus, ArrowRight, ShieldCheck, Bell, Flame, Stamp,
} from "lucide-react";
import { T, F, pill, type BadgeTone } from "@/lib/theme";

function badge(tone: BadgeTone) {
  return pill(tone);
}

/* A swap point for real, sanitized screenshots: if `src` is provided we render
   the image instead of the recreated mock. Drop PNGs in /public/screens/. */
export function BrowserFrame({ url, src, alt, children }: { url: string; src?: string; alt?: string; children?: React.ReactNode }) {
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
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt || ""} style={{ display: "block", width: "100%", height: "auto" }} />
      ) : (
        children
      )}
    </div>
  );
}

/* ----------------------------- Dashboard ----------------------------- */
const metrics = [
  { icon: Users, label: "New Leads", value: "442", delta: "+12.4%", up: true, c: T.primary },
  { icon: MessageSquare, label: "Active Counselling", value: "606", delta: "+8.6%", up: true, c: T.blue },
  { icon: GraduationCap, label: "Applications", value: "184", delta: "+5.2%", up: true, c: T.violet },
  { icon: FileText, label: "Visas Filed", value: "57", delta: "+3.1%", up: true, c: "#0EA5E9" },
  { icon: Clock, label: "Pending Follow-ups", value: "23", delta: "-2.3%", up: false, c: "#F97316" },
];

function Metric({ m }: { m: (typeof metrics)[number] }) {
  const Icon = m.icon;
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, font: `700 9px ${F}`, letterSpacing: ".06em", color: T.success }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green }} /> LIVE
        </span>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: `${m.c}14`, color: m.c, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon size={14} /></span>
      </div>
      <div style={{ font: `800 26px ${F}`, color: T.text, letterSpacing: "-.02em" }}>{m.value}</div>
      <div style={{ font: `500 11px ${F}`, color: T.muted, marginTop: 4 }}>{m.label}</div>
      <div style={{ display: "inline-block", marginTop: 8, font: `700 10px ${F}`, color: m.up ? T.success : T.danger, background: m.up ? T.successBg : T.dangerBg, borderRadius: 6, padding: "2px 7px" }}>{m.delta}</div>
    </div>
  );
}

function Sidebar({ active }: { active: string }) {
  const items = ["Dashboard", "Today", "Leads", "Pipeline", "Counselling", "Admissions", "Documents", "Visas"];
  return (
    <div style={{ width: 168, background: "#fff", borderRight: `1px solid ${T.border}`, padding: "16px 12px", flexShrink: 0 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-wordmark.png" alt="" height={18} width={68} style={{ height: 18, width: "auto", marginBottom: 18, marginLeft: 6 }} />
      <div style={{ font: `700 9px ${F}`, letterSpacing: ".08em", color: T.subtle, margin: "0 0 8px 8px" }}>CORE CRM</div>
      {items.map((label) => {
        const on = label === active;
        return (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 10px", borderRadius: 8, marginBottom: 2, background: on ? T.indigoBg : "transparent", color: on ? T.primary : T.muted, font: `${on ? 700 : 500} 12.5px ${F}` }}>
            <span style={{ width: 7, height: 7, borderRadius: 2, background: on ? T.primary : T.border }} /> {label}
          </div>
        );
      })}
    </div>
  );
}

function TopBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${T.border}`, borderRadius: 9, padding: "7px 11px", font: `600 11.5px ${F}`, color: T.text }}>🌐 Global Workspace</span>
      <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 7, border: `1px solid ${T.border}`, borderRadius: 9, padding: "7px 11px", font: `500 11.5px ${F}`, color: T.subtle, maxWidth: 320 }}>
        <Search size={13} /> Search leads, cases, tasks…
      </span>
      <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, background: T.violet, color: "#fff", borderRadius: 9, padding: "7px 12px", font: `700 11.5px ${F}` }}><Plus size={13} /> Quick Action</span>
      <span style={{ width: 30, height: 30, borderRadius: 9, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: T.muted }}><Bell size={14} /></span>
      <span style={{ width: 30, height: 30, borderRadius: "50%", background: T.primary, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: `700 11px ${F}` }}>AK</span>
    </div>
  );
}

export function DashboardScreen() {
  return (
    <div style={{ display: "flex", background: T.bg, minHeight: 470 }}>
      <Sidebar active="Dashboard" />
      <div style={{ flex: 1, padding: "16px 18px", minWidth: 0 }}>
        <TopBar />
        <div style={{ font: `800 22px ${F}`, color: T.text, letterSpacing: "-.01em" }}>Good morning, Aisha 👋</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <span style={{ font: `400 12.5px ${F}`, color: T.muted }}>Here&apos;s what&apos;s happening with your study-abroad operations today.</span>
          <span style={{ font: `600 9px ${F}`, color: T.subtle, background: T.surface2, borderRadius: 5, padding: "2px 7px" }}>Demo data</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10, marginBottom: 16 }}>
          {metrics.map((m) => <Metric key={m.label} m={m} />)}
        </div>
        <AIOpsStrip compact />
      </div>
    </div>
  );
}

/* ----------------------------- AI Ops ----------------------------- */
export function AIOpsStrip({ compact = false }: { compact?: boolean }) {
  const stats = [
    ["PRIORITY ALERTS", "3", "High-impact items"],
    ["DUE TODAY", "8", "Tasks & follow-ups"],
    ["OVERDUE", "2", "Need action now"],
    ["NEW THIS WEEK", "12", "Leads & applications"],
  ];
  return (
    <div style={{ position: "relative", overflow: "hidden", background: `linear-gradient(135deg,${T.aiFrom} 0%,${T.aiTo} 100%)`, borderRadius: 16, padding: compact ? "16px 18px" : "22px 24px" }}>
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

export function AICommandScreen() {
  return (
    <div style={{ background: T.bg, padding: 18, minHeight: 420 }}>
      <AIOpsStrip />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
        <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: 16 }}>
          <div style={{ font: `700 13px ${F}`, color: T.text, marginBottom: 12 }}>AI Suggested Next Actions</div>
          {[
            ["Call 8 hot leads", "High intent · no contact 48h", T.danger, T.dangerBg],
            ["Chase 5 pending SOPs", "Applications blocked", T.warning, T.warningBg],
            ["Send 12 follow-ups", "Drafts ready to review", T.primary, T.indigoBg],
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
              <span style={{ width: 26, height: 26, borderRadius: 8, background: T.violetBg, color: T.violet, display: "flex", alignItems: "center", justifyContent: "center" }}><FileText size={13} /></span>
              <div style={{ flex: 1 }}>
                <div style={{ font: `700 12px ${F}`, color: T.text }}>{t}</div>
                <div style={{ font: `400 10.5px ${F}`, color: T.muted }}>{s}</div>
              </div>
              <span style={{ font: `700 9px ${F}`, color: T.violet, background: T.violetBg, borderRadius: 999, padding: "3px 8px" }}>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Value-block screens ----------------------------- */
export function LeadsScreen() {
  const rows = [
    ["MK", "Manjot K.", "Australia", "QR Code", "Assigned", "82", "good"],
    ["RS", "Ravi S.", "Canada", "Website", "New", "67", "info"],
    ["PD", "Pooja D.", "UK", "WhatsApp", "Hot", "91", "good"],
    ["AS", "Amit S.", "Australia", "Referral", "Risk", "34", "bad"],
  ] as const;
  return (
    <div style={{ background: T.bg, padding: 18, minHeight: 360 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ font: `800 17px ${F}`, color: T.text }}>Leads</span>
        <span style={{ ...badge("violet") }}>1,677 total</span>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, background: T.violet, color: "#fff", borderRadius: 9, padding: "7px 12px", font: `700 11px ${F}` }}><Flame size={12} /> AI Lead Scoring</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 14 }}>
        {[["1,677", "Total", T.primary], ["8", "Hot", "#F97316"], ["47", "No contact 48h", T.danger], ["4", "Converted", T.success]].map(([v, l, c]) => (
          <div key={l} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "12px 14px" }}>
            <div style={{ font: `800 20px ${F}`, color: c as string }}>{v}</div>
            <div style={{ font: `500 11px ${F}`, color: T.muted }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr .8fr .6fr", padding: "10px 14px", borderBottom: `1px solid ${T.border}`, font: `700 9.5px ${F}`, letterSpacing: ".04em", color: T.subtle, textTransform: "uppercase" }}>
          <span>Lead</span><span>Country</span><span>Source</span><span>Stage</span><span>AI score</span>
        </div>
        {rows.map(([ab, name, country, source, stage, score, tone]) => (
          <div key={name} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr .8fr .6fr", alignItems: "center", padding: "11px 14px", borderTop: `1px solid ${T.borderSubtle}`, font: `500 12px ${F}`, color: T.text }}>
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ width: 26, height: 26, borderRadius: "50%", background: T.indigoBg, color: T.primary, display: "flex", alignItems: "center", justifyContent: "center", font: `700 10px ${F}` }}>{ab}</span>
              {name}
            </span>
            <span style={{ color: T.muted }}>{country}</span>
            <span><span style={{ ...badge("plain") }}>{source}</span></span>
            <span><span style={{ ...badge("info") }}>{stage}</span></span>
            <span><span style={{ ...badge(tone) }}>{score}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DocumentsScreen() {
  const docs = [
    ["Passport", "Verified · v2", "good", "Verified"],
    ["IELTS scorecard", "Uploaded", "info", "In review"],
    ["Statement of purpose", "Not uploaded", "bad", "Missing"],
    ["Bank statement", "Rejected — illegible", "bad", "Rejected"],
    ["Offer letter", "Verified", "good", "Verified"],
  ] as const;
  return (
    <div style={{ background: T.bg, padding: 18, minHeight: 360 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ font: `800 17px ${F}`, color: T.text }}>Documents</span>
        <span style={{ ...badge("plain") }}>Priya Sharma · #STU-2041</span>
        <span style={{ marginLeft: "auto", ...badge("good") }}>9 of 12 ready</span>
      </div>
      <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: 14, display: "flex", flexDirection: "column", gap: 9 }}>
        {docs.map(([name, status, tone, tag]) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 12, border: `1px solid ${T.border}`, borderRadius: 10, padding: "12px 14px" }}>
            <span style={{ width: 30, height: 30, borderRadius: 8, background: T.surface2, color: T.muted, display: "flex", alignItems: "center", justifyContent: "center" }}><FileText size={14} /></span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: `700 12.5px ${F}`, color: T.text }}>{name}</div>
              <div style={{ font: `400 11px ${F}`, color: T.subtle }}>{status}</div>
            </div>
            <span style={{ ...badge(tone) }}>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VisaScreen() {
  const rows = [
    ["CAS received from Leeds", "Verified", "good"],
    ["Financial documents", "Verified", "good"],
    ["Biometrics · 5 July", "Booked", "info"],
    ["Application — UK Student", "Ready to file", "good"],
  ] as const;
  return (
    <div style={{ background: T.bg, padding: 18, minHeight: 360 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: T.violetBg, color: T.violet, display: "flex", alignItems: "center", justifyContent: "center" }}><Stamp size={15} /></span>
        <span style={{ font: `800 17px ${F}`, color: T.text }}>Visa case · UK Student</span>
        <span style={{ marginLeft: "auto", ...badge("violet") }}>Priority</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}>
        {[["21", "Docs complete", T.success], ["6", "Awaiting financials", T.warning], ["11", "Filed", T.info]].map(([v, l, c]) => (
          <div key={l} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "12px 14px" }}>
            <div style={{ font: `800 20px ${F}`, color: c as string }}>{v}</div>
            <div style={{ font: `500 11px ${F}`, color: T.muted }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: 14, display: "flex", flexDirection: "column", gap: 9 }}>
        {rows.map(([label, tag, tone]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, border: `1px solid ${T.border}`, borderRadius: 10, padding: "12px 14px" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: tone === "good" ? T.green : T.info }} />
            <span style={{ flex: 1, font: `600 12.5px ${F}`, color: T.text }}>{label}</span>
            <span style={{ ...badge(tone) }}>{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
