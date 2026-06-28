"use client";

import { useEffect, useRef, useState } from "react";
import {
  LayoutGrid, CalendarDays, Users, Columns3, MessageSquare, GraduationCap,
  FileText, Mail, Stamp, Plane, Clock, CheckSquare, Search, Plus, Bell, Sparkles, ChevronDown,
} from "lucide-react";
import { T, F } from "@/lib/theme";
import { easeOut } from "@/lib/useReveal";

/* Faithful recreation of the real adMYTT dashboard (white theme), animated:
   the 5 live metric cards count up, the AI Ops Command Center numbers tick in.
   Anonymised demo data. Mirrors the real app layout — not an invented UI. */

const nav: [string, typeof Users, boolean][] = [
  ["Dashboard", LayoutGrid, true],
  ["Today", CalendarDays, false],
  ["Leads", Users, false],
  ["Pipeline", Columns3, false],
  ["Counselling", MessageSquare, false],
  ["Admissions", GraduationCap, false],
  ["Documents", FileText, false],
  ["Communications", Mail, false],
  ["Visas", Stamp, false],
  ["Visitor Visa", Plane, false],
  ["Follow-ups", Clock, false],
  ["Tasks", CheckSquare, false],
];

const metrics: { icon: typeof Users; label: string; target: number; delta: string; up: boolean; c: string; spark: string; live: "ok" | "alert" }[] = [
  { icon: Users, label: "New Leads", target: 442, delta: "+12.4%", up: true, c: "#7C3AED", spark: "0,14 8,10 16,12 24,6 32,9 40,4", live: "ok" },
  { icon: MessageSquare, label: "Active Counselling", target: 606, delta: "+8.6%", up: true, c: "#2563EB", spark: "0,12 8,13 16,8 24,10 32,5 40,7", live: "ok" },
  { icon: GraduationCap, label: "Applications", target: 184, delta: "+5.2%", up: true, c: "#0F9F6E", spark: "0,13 8,9 16,11 24,7 32,8 40,5", live: "ok" },
  { icon: FileText, label: "Visas Filed", target: 57, delta: "+3.1%", up: true, c: "#EA580C", spark: "0,11 8,12 16,7 24,9 32,6 40,8", live: "ok" },
  { icon: Clock, label: "Pending Follow-ups", target: 23, delta: "-2.3%", up: false, c: "#DC2626", spark: "0,6 8,8 16,7 24,10 32,9 40,12", live: "alert" },
];

const aiStats: [string, number, string][] = [
  ["PRIORITY ALERTS", 3, "High-impact items"],
  ["DUE TODAY", 8, "Tasks & follow-ups"],
  ["OVERDUE", 2, "Require action"],
  ["NEW THIS WEEK", 12, "Leads & applications"],
];

export default function LiveRealDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const reduced = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setP(1); return; }
    let raf = 0, start = 0, ran = false;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / 1400, 1);
      setP(t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((e) => {
      if (e[0].isIntersecting && !ran) { ran = true; start = 0; raf = requestAnimationFrame(tick); }
    }, { threshold: 0.35 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  const e = easeOut(p);

  return (
    <div ref={ref} style={{ display: "flex", background: "#F8FAFC", height: 560, overflow: "hidden" }}>
      {/* sidebar */}
      <div style={{ width: 184, background: "#fff", borderRight: `1px solid ${T.border}`, padding: "14px 12px", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-wordmark.png" alt="" height={18} width={68} style={{ height: 18, width: "auto", margin: "2px 0 14px 6px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 8, border: `1px solid ${T.border}`, borderRadius: 9, padding: "8px 9px", marginBottom: 14 }}>
          <span style={{ width: 22, height: 22, borderRadius: 6, background: "#EEF2FF", color: T.primary, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 800 }}>BF</span>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ font: `700 10.5px ${F}`, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Bright Futures…</div>
            <div style={{ font: `500 8.5px ${F}`, color: T.subtle }}>Demo workspace</div>
          </div>
          <ChevronDown size={12} color={T.subtle} />
        </div>
        <div style={{ font: `700 8.5px ${F}`, letterSpacing: ".08em", color: T.subtle, margin: "0 0 6px 8px" }}>CORE CRM</div>
        {nav.map(([label, Icon, on]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 9, padding: "7px 9px", borderRadius: 8, marginBottom: 1, background: on ? "#EEF2FF" : "transparent", color: on ? T.primary : "#475569", font: `${on ? 700 : 500} 11.5px ${F}` }}>
            <Icon size={14} /> {label}
          </div>
        ))}
      </div>

      {/* main */}
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {/* top bar */}
        <div style={{ height: 50, borderBottom: `1px solid ${T.border}`, background: "#fff", display: "flex", alignItems: "center", gap: 10, padding: "0 16px", flexShrink: 0 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${T.border}`, borderRadius: 9, padding: "7px 10px", font: `600 11px ${F}`, color: T.text }}>🌐 Global Workspace <ChevronDown size={11} /></span>
          <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 7, border: `1px solid ${T.border}`, borderRadius: 9, padding: "7px 11px", font: `500 11px ${F}`, color: T.subtle, maxWidth: 300 }}>
            <Search size={13} /> Search leads, cases, tasks… <span style={{ marginLeft: "auto", font: `600 9px ${F}`, color: T.subtle, border: `1px solid ${T.border}`, borderRadius: 4, padding: "1px 5px" }}>⌘K</span>
          </span>
          <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${T.border}`, borderRadius: 9, padding: "6px 10px", font: `600 10.5px ${F}`, color: T.text }}><CalendarDays size={12} /> This Month</span>
          <span style={{ position: "relative", width: 32, height: 32, borderRadius: 9, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: "#475569" }}>
            <Bell size={14} />
            <span style={{ position: "absolute", top: -5, right: -5, background: "#DC2626", color: "#fff", font: `700 7px ${F}`, borderRadius: 999, padding: "1px 4px" }}>9+</span>
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: T.violet, color: "#fff", borderRadius: 9, padding: "7px 12px", font: `700 11px ${F}` }}><Plus size={13} /> Quick Action</span>
          <span style={{ width: 30, height: 30, borderRadius: "50%", background: T.primary, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: `700 11px ${F}` }}>AK</span>
        </div>

        <div style={{ padding: "16px 18px", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
            <div>
              <div style={{ font: `800 21px ${F}`, color: T.text, letterSpacing: "-.01em" }}>Good morning, Aisha 👋</div>
              <div style={{ font: `400 12.5px ${F}`, color: T.muted, marginTop: 2 }}>Here&apos;s what&apos;s happening with your study-abroad operations today.</div>
            </div>
            <span style={{ font: `600 11px ${F}`, color: T.text, border: `1px solid ${T.border}`, borderRadius: 9, padding: "8px 13px", whiteSpace: "nowrap" }}>Customize Dashboard</span>
          </div>

          {/* 5 metric cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 11, marginBottom: 14 }}>
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.label} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: "13px 14px", boxShadow: "0 1px 3px rgba(15,23,42,.04)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, font: `700 8.5px ${F}`, letterSpacing: ".05em", color: m.live === "alert" ? "#DC2626" : "#0F9F6E" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: m.live === "alert" ? "#DC2626" : "#10B981", animation: "adpulse 1.6s infinite" }} /> LIVE
                    </span>
                    <span style={{ width: 26, height: 26, borderRadius: 8, background: `${m.c}14`, color: m.c, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon size={14} /></span>
                  </div>
                  <div style={{ font: `800 27px ${F}`, color: T.text, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" }}>{Math.round(m.target * e).toLocaleString()}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 4 }}>
                    <div>
                      <div style={{ font: `500 10px ${F}`, color: T.muted }}>{m.label}</div>
                      <div style={{ display: "inline-block", marginTop: 6, font: `700 9.5px ${F}`, color: m.up ? "#0F9F6E" : "#DC2626", background: m.up ? "#ECFDF5" : "#FEF2F2", borderRadius: 6, padding: "2px 6px" }}>{m.delta}</div>
                    </div>
                    <svg width="42" height="18" viewBox="0 0 40 18" style={{ opacity: e }}>
                      <polyline points={m.spark} fill="none" stroke={m.c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* AI Ops Command Center */}
          <div style={{ position: "relative", overflow: "hidden", background: `linear-gradient(135deg,${T.aiFrom} 0%,${T.aiTo} 100%)`, borderRadius: 16, padding: "16px 18px", marginBottom: 14 }}>
            <div style={{ position: "absolute", top: -50, right: -30, width: 240, height: 240, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.5), transparent 70%)" }} />
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11, flexShrink: 0, maxWidth: 230 }}>
                <span style={{ width: 38, height: 38, borderRadius: 11, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.16)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD" }}><Sparkles size={18} /></span>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <span style={{ font: `800 14px ${F}`, color: "#fff" }}>AI Ops Command Center</span>
                    <span style={{ font: `700 8px ${F}`, color: "#C4B5FD", background: "rgba(124,58,237,.3)", border: "1px solid rgba(196,181,253,.3)", borderRadius: 999, padding: "2px 6px" }}>BETA</span>
                  </div>
                  <div style={{ font: `400 10.5px ${F}`, color: "#A5B4FC", marginTop: 2 }}>AI-prioritised actions, alerts, and operational signals.</div>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, flex: 1 }}>
                {aiStats.map(([label, val, sub]) => (
                  <div key={label} style={{ borderLeft: "1px solid rgba(255,255,255,.12)", paddingLeft: 12 }}>
                    <div style={{ font: `700 8px ${F}`, letterSpacing: ".05em", color: "#A5B4FC", marginBottom: 3 }}>{label}</div>
                    <div style={{ font: `800 22px ${F}`, color: "#fff", fontVariantNumeric: "tabular-nums" }}>{Math.round(val * e)}</div>
                    <div style={{ font: `400 9px ${F}`, color: "#8B93C9", marginTop: 1 }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* cropped lower row: pipeline / trend / agenda */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.1fr .8fr", gap: 12 }}>
            <Panel title="Application Pipeline">
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: `conic-gradient(#7C3AED 0 32%, #2563EB 0 55%, #0F9F6E 0 78%, #EA580C 0 92%, #DC2626 0 100%)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ width: 42, height: 42, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: `800 13px ${F}`, color: T.text }}>184</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {[["Document Pending", "#7C3AED"], ["In Progress", "#2563EB"], ["Submitted", "#0F9F6E"], ["Approved", "#EA580C"]].map(([l, c]) => (
                    <div key={l} style={{ display: "flex", alignItems: "center", gap: 6, font: `500 9.5px ${F}`, color: T.muted }}>
                      <span style={{ width: 7, height: 7, borderRadius: "50%", background: c }} /> {l}
                    </div>
                  ))}
                </div>
              </div>
            </Panel>
            <Panel title="Applications Trend">
              <svg width="100%" height="56" viewBox="0 0 200 56" preserveAspectRatio="none">
                <polyline points="0,46 30,40 60,42 90,30 120,33 150,20 200,24" fill="none" stroke="#7C3AED" strokeWidth="2" />
                <polyline points="0,50 30,48 60,44 90,46 120,38 150,40 200,34" fill="none" stroke="#2563EB" strokeWidth="2" />
              </svg>
            </Panel>
            <Panel title="Today's Agenda">
              <div style={{ font: `600 11px ${F}`, color: T.text }}>3 follow-ups</div>
              <div style={{ font: `400 9.5px ${F}`, color: T.muted, marginTop: 2 }}>Next · 4:00 PM</div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: 14, boxShadow: "0 1px 3px rgba(15,23,42,.04)" }}>
      <div style={{ font: `700 11px ${F}`, color: T.text, marginBottom: 10 }}>{title}</div>
      {children}
    </div>
  );
}
