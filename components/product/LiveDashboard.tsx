"use client";

import { useEffect, useRef, useState } from "react";
import { Users, MessageSquare, GraduationCap, FileText, Clock, Sparkles, Search, Plus, Bell } from "lucide-react";
import { T, F } from "@/lib/theme";

/* A self-running, animated product scene for the hero — metrics count up, the
   AI Ops numbers tick in, a "LIVE" dot pulses, and a cursor moves to and presses
   "Quick Action". Runs once when scrolled into view; respects reduced motion. */

const metrics = [
  { icon: Users, label: "New Leads", target: 442, delta: "+12.4%", up: true, c: T.primary },
  { icon: MessageSquare, label: "Active Counselling", target: 606, delta: "+8.6%", up: true, c: T.blue },
  { icon: GraduationCap, label: "Applications", target: 184, delta: "+5.2%", up: true, c: T.violet },
  { icon: FileText, label: "Visas Filed", target: 57, delta: "+3.1%", up: true, c: "#0EA5E9" },
  { icon: Clock, label: "Pending Follow-ups", target: 23, delta: "-2.3%", up: false, c: "#F97316" },
];
const aiStats: [string, number, string][] = [
  ["PRIORITY ALERTS", 3, "High-impact items"],
  ["DUE TODAY", 8, "Tasks & follow-ups"],
  ["OVERDUE", 2, "Need action now"],
  ["NEW THIS WEEK", 12, "Leads & applications"],
];
const sidebar = ["Dashboard", "Today", "Leads", "Pipeline", "Counselling", "Admissions", "Documents", "Visas"];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function LiveDashboard() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0); // animation progress 0..1
  const [press, setPress] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) {
      setP(1);
      return;
    }
    let raf = 0, start = 0, ran = false;
    const DUR = 1400;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / DUR, 1);
      setP(t);
      setPress(t > 0.62 && t < 0.78);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !ran) {
          ran = true;
          start = 0;
          raf = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    if (rootRef.current) io.observe(rootRef.current);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const e = easeOut(p);
  const num = (target: number) => Math.round(target * e).toLocaleString();
  // cursor path: rest → towards Quick Action (top-right of main area)
  const cx = 30 + e * 56; // %
  const cy = 250 - e * 196; // px
  const cursorOpacity = p > 0.08 && p < 0.95 ? 1 : 0;

  return (
    <div ref={rootRef} style={{ position: "relative", display: "flex", background: T.bg, minHeight: 470 }}>
      {/* sidebar */}
      <div style={{ width: 168, background: "#fff", borderRight: `1px solid ${T.border}`, padding: "16px 12px", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo-wordmark.png" alt="" height={18} width={68} style={{ height: 18, width: "auto", marginBottom: 18, marginLeft: 6 }} />
        <div style={{ font: `700 9px ${F}`, letterSpacing: ".08em", color: T.subtle, margin: "0 0 8px 8px" }}>CORE CRM</div>
        {sidebar.map((label) => {
          const on = label === "Dashboard";
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 10px", borderRadius: 8, marginBottom: 2, background: on ? T.indigoBg : "transparent", color: on ? T.primary : T.muted, font: `${on ? 700 : 500} 12.5px ${F}` }}>
              <span style={{ width: 7, height: 7, borderRadius: 2, background: on ? T.primary : T.border }} /> {label}
            </div>
          );
        })}
      </div>

      {/* main */}
      <div style={{ flex: 1, padding: "16px 18px", minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${T.border}`, borderRadius: 9, padding: "7px 11px", font: `600 11.5px ${F}`, color: T.text }}>🌐 Global Workspace</span>
          <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 7, border: `1px solid ${T.border}`, borderRadius: 9, padding: "7px 11px", font: `500 11.5px ${F}`, color: T.subtle, maxWidth: 320 }}>
            <Search size={13} /> Search leads, cases, tasks…
          </span>
          <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, background: T.violet, color: "#fff", borderRadius: 9, padding: "7px 12px", font: `700 11.5px ${F}`, transform: `scale(${press ? 0.94 : 1})`, boxShadow: press ? "0 0 0 4px rgba(124,58,237,.25)" : "none", transition: "transform .12s, box-shadow .12s" }}>
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

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10, marginBottom: 16 }}>
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 14, padding: 14, boxShadow: "0 1px 3px rgba(0,0,0,.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 5, font: `700 9px ${F}`, letterSpacing: ".06em", color: T.success }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green, animation: "adpulse 1.6s infinite" }} /> LIVE
                  </span>
                  <span style={{ width: 26, height: 26, borderRadius: 8, background: `${m.c}14`, color: m.c, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon size={14} /></span>
                </div>
                <div style={{ font: `800 26px ${F}`, color: T.text, letterSpacing: "-.02em", fontVariantNumeric: "tabular-nums" }}>{num(m.target)}</div>
                <div style={{ font: `500 11px ${F}`, color: T.muted, marginTop: 4 }}>{m.label}</div>
                <div style={{ display: "inline-block", marginTop: 8, font: `700 10px ${F}`, color: m.up ? T.success : T.danger, background: m.up ? T.successBg : T.dangerBg, borderRadius: 6, padding: "2px 7px", opacity: e }}>{m.delta}</div>
              </div>
            );
          })}
        </div>

        {/* AI Ops strip */}
        <div style={{ position: "relative", overflow: "hidden", background: `linear-gradient(135deg,${T.aiFrom} 0%,${T.aiTo} 100%)`, borderRadius: 16, padding: "16px 18px" }}>
          <div style={{ position: "absolute", top: -40, right: -30, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,.55), transparent 70%)" }} />
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <span style={{ width: 38, height: 38, borderRadius: 11, background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.16)", display: "flex", alignItems: "center", justifyContent: "center", color: "#C4B5FD" }}><Sparkles size={18} /></span>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ font: `800 15px ${F}`, color: "#fff" }}>AI Ops Command Center</span>
                <span style={{ font: `700 8.5px ${F}`, color: "#C4B5FD", background: "rgba(124,58,237,.3)", border: "1px solid rgba(196,181,253,.3)", borderRadius: 999, padding: "2px 7px" }}>BETA</span>
              </div>
              <div style={{ font: `400 11.5px ${F}`, color: "#A5B4FC" }}>AI-prioritised actions, alerts, and operational signals.</div>
            </div>
          </div>
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
            {aiStats.map(([label, val, sub], i) => (
              <div key={label} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 11, padding: "10px 12px", opacity: Math.min(1, Math.max(0, (e - i * 0.05) * 1.4)) }}>
                <div style={{ font: `700 8.5px ${F}`, letterSpacing: ".06em", color: "#A5B4FC", marginBottom: 5 }}>{label}</div>
                <div style={{ font: `800 22px ${F}`, color: "#fff", fontVariantNumeric: "tabular-nums" }}>{Math.round(val * e)}</div>
                <div style={{ font: `400 10px ${F}`, color: "#8B93C9", marginTop: 2 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* simulated cursor */}
      <div style={{ position: "absolute", left: `${cx}%`, top: cy, opacity: cursorOpacity, transform: `scale(${press ? 0.85 : 1})`, transition: "opacity .25s, transform .12s", pointerEvents: "none", zIndex: 8 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l13 6.5-5.4 1.6L9.6 18z" fill="#0F172A" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" /></svg>
      </div>
    </div>
  );
}
