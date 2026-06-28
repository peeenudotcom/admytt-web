"use client";

import { Sparkles, FileText, ArrowRight } from "lucide-react";
import { T, F, MONO, warmBadge } from "@/lib/theme";
import { useReveal, stagger, easeOut } from "@/lib/useReveal";

/* Live AI Command scene (cream app theme): AI Ops counters tick up, an
   "analysing" shimmer resolves, and suggested-action + alert rows stream in. */

const aiStats: [string, number, string][] = [
  ["PRIORITY ALERTS", 3, "High-impact items"],
  ["DUE TODAY", 8, "Tasks & follow-ups"],
  ["OVERDUE", 2, "Need action now"],
  ["NEW THIS WEEK", 12, "Leads & applications"],
];
const actions: [string, string, string, string][] = [
  ["Call 8 hot leads", "high intent · no contact 48h", T.danger, "#FBE7E4"],
  ["Chase 5 pending SOPs", "applications blocked", "#9A6700", "#FBF1DE"],
  ["Send 12 follow-ups", "drafts ready to review", T.primary, "#E8EBFF"],
];
const alerts: [string, string, string, "warn" | "info" | "good" | "bad" | "violet"][] = [
  ["Priya Sharma — bank statement", "visa filing blocked", "DOCS", "bad"],
  ["Arjun Kapoor — CAS expiring", "action in 3 days", "VISA", "warn"],
  ["Meera Nair — offer decision", "overdue", "ADMISSIONS", "violet"],
];

export default function LiveAICommand() {
  const { ref, p } = useReveal(2000);
  const e = easeOut(p);

  return (
    <div ref={ref} style={{ background: T.cream, padding: 18, minHeight: 420 }}>
      {/* AI Ops dark strip with counters */}
      <div style={{ position: "relative", overflow: "hidden", background: `linear-gradient(135deg,${T.aiFrom} 0%,${T.aiTo} 100%)`, borderRadius: 16, padding: "16px 18px" }}>
        <div style={{ position: "absolute", top: -40, right: -30, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.55), transparent 70%)" }} />
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
          <span style={{ width: 38, height: 38, borderRadius: 11, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.16)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD" }}><Sparkles size={18} /></span>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ font: `800 15px ${F}`, color: "#fff" }}>AI Ops Command Center</span>
              <span style={{ font: `700 8.5px ${MONO}`, color: "#C4B5FD", background: "rgba(124,58,237,.3)", border: "1px solid rgba(196,181,253,.3)", borderRadius: 999, padding: "2px 7px" }}>BETA</span>
            </div>
            <div style={{ font: `400 11.5px ${F}`, color: "#A5B4FC" }}>AI-prioritised actions, alerts, and operational signals.</div>
          </div>
        </div>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
          {aiStats.map(([label, val, sub], i) => (
            <div key={label} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 11, padding: "10px 12px", opacity: Math.min(1, e * 1.4 - i * 0.04) }}>
              <div style={{ font: `700 8.5px ${MONO}`, letterSpacing: ".06em", color: "#A5B4FC", marginBottom: 5 }}>{label}</div>
              <div style={{ font: `800 22px ${F}`, color: "#fff", fontVariantNumeric: "tabular-nums" }}>{Math.round(val * e)}</div>
              <div style={{ font: `400 10px ${F}`, color: "#8B93C9", marginTop: 2 }}>{sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
        <div style={{ background: "#fff", border: `1px solid ${T.creamBorder}`, borderRadius: 14, padding: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 12 }}>
            <span style={{ font: `700 12.5px ${F}`, color: T.ink }}>AI Suggested Next Actions</span>
            {p < 0.5 && <span style={{ font: `600 9px ${MONO}`, color: T.violet, display: "inline-flex", alignItems: "center", gap: 4 }}><span style={{ width: 5, height: 5, borderRadius: "50%", background: T.violet, animation: "adpulse 1s infinite" }} /> analysing…</span>}
          </div>
          {actions.map(([t, s, c, bg], i) => {
            const r = stagger(p, i, actions.length);
            return (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, background: bg, marginBottom: 8, opacity: r, transform: `translateY(${(1 - r) * 8}px)`, position: "relative", overflow: "hidden" }}>
                {r > 0 && r < 1 && <span style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent)", animation: "adscan 1s linear infinite", pointerEvents: "none" }} />}
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                <div style={{ flex: 1 }}>
                  <div style={{ font: `700 12px ${F}`, color: T.ink }}>{t}</div>
                  <div style={{ font: `500 9.5px ${MONO}`, color: T.inkMuted }}>{s}</div>
                </div>
                <ArrowRight size={13} color={T.inkMuted} />
              </div>
            );
          })}
        </div>
        <div style={{ background: "#fff", border: `1px solid ${T.creamBorder}`, borderRadius: 14, padding: 16 }}>
          <div style={{ font: `700 12.5px ${F}`, color: T.ink, marginBottom: 12 }}>Urgent File Alerts</div>
          {alerts.map(([t, s, tag, tone], i) => {
            const r = stagger(p, i, alerts.length);
            return (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 10, border: `1px solid ${T.creamBorder}`, marginBottom: 8, opacity: r, transform: `translateY(${(1 - r) * 8}px)` }}>
                <span style={{ width: 26, height: 26, borderRadius: 8, background: "#EEE7FB", color: T.violet, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><FileText size={13} /></span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: `700 12px ${F}`, color: T.ink }}>{t}</div>
                  <div style={{ font: `500 9.5px ${MONO}`, color: T.inkMuted }}>{s}</div>
                </div>
                <span style={{ ...warmBadge(tone) }}>{tag}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
