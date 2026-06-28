"use client";

import { useEffect, useRef, useState } from "react";
import { Flame } from "lucide-react";
import { T, F, pill } from "@/lib/theme";
import { easeOut } from "@/lib/useReveal";

/* Live Leads scene: stats count up, then a new enquiry slides in at the top of
   the table, gets auto-assigned to a counsellor, and receives an AI score —
   the signature "lead arrives → assigned → scored" workflow. */

const existing: [string, string, string, string, string, string, "good" | "info" | "bad"][] = [
  ["RS", "Ravi S.", "Canada", "Website", "New", "67", "info"],
  ["PD", "Pooja D.", "UK", "WhatsApp", "Hot", "91", "good"],
  ["AS", "Amit S.", "Australia", "Referral", "Risk", "34", "bad"],
];

export default function LiveLeads() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const reduced = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setP(1); return; }
    let raf = 0, start = 0, ran = false;
    const DUR = 2400;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / DUR, 1);
      setP(t);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting && !ran) { ran = true; start = 0; raf = requestAnimationFrame(tick); }
    }, { threshold: 0.35 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  const e = easeOut(p);
  const total = (1656 + Math.round(21 * e)).toLocaleString(); // 1656 → 1677
  const arrive = Math.max(0, Math.min(1, (p - 0.18) / 0.18)); // row slides in
  const assigned = p > 0.5;
  const scored = p > 0.7;
  const scoreVal = scored ? Math.round(82 * Math.min(1, (p - 0.7) / 0.2)) : 0;

  const stats: [string, string, string][] = [
    [total, "Total leads", T.primary],
    [String(Math.round(8 * e)), "Hot", "#F97316"],
    [String(Math.round(47 * e)), "No contact 48h", T.danger],
    [String(Math.round(4 * e)), "Converted", T.success],
  ];

  return (
    <div ref={ref} style={{ background: T.bg, padding: 18, minHeight: 360 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ font: `800 17px ${F}`, color: T.text }}>Leads</span>
        <span style={{ ...pill("violet") }}>{total} total</span>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, background: T.violet, color: "#fff", borderRadius: 9, padding: "7px 12px", font: `700 11px ${F}` }}><Flame size={12} /> AI Lead Scoring</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 14 }}>
        {stats.map(([v, l, c]) => (
          <div key={l} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "12px 14px" }}>
            <div style={{ font: `800 20px ${F}`, color: c, fontVariantNumeric: "tabular-nums" }}>{v}</div>
            <div style={{ font: `500 11px ${F}`, color: T.muted }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr .9fr .7fr", padding: "10px 14px", borderBottom: `1px solid ${T.border}`, font: `700 9.5px ${F}`, letterSpacing: ".04em", color: T.subtle, textTransform: "uppercase" }}>
          <span>Lead</span><span>Country</span><span>Source</span><span>Stage</span><span>AI score</span>
        </div>

        {/* arriving lead */}
        <div style={{ maxHeight: arrive * 52, opacity: arrive, overflow: "hidden", transition: "none", borderTop: arrive > 0 ? `1px solid ${T.borderSubtle}` : "none", background: scored ? "#FFF7ED" : "#F5F3FF" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr .9fr .7fr", alignItems: "center", padding: "11px 14px", font: `500 12px ${F}`, color: T.text }}>
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ width: 26, height: 26, borderRadius: "50%", background: T.violetBg, color: T.violet, display: "flex", alignItems: "center", justifyContent: "center", font: `700 10px ${F}` }}>MK</span>
              <span>
                <span style={{ display: "block", fontWeight: 600 }}>Manjot K.</span>
                <span style={{ font: `500 9.5px ${F}`, color: assigned ? T.success : T.subtle }}>{assigned ? "Assigned · Aisha Khan" : "new enquiry · just now"}</span>
              </span>
            </span>
            <span style={{ color: T.muted }}>Australia</span>
            <span><span style={{ ...pill("plain") }}>Website</span></span>
            <span><span style={{ ...pill(assigned ? "info" : "violet") }}>{assigned ? "Assigned" : "New"}</span></span>
            <span>{scored ? <span style={{ ...pill("good") }}>{scoreVal} Hot</span> : <span style={{ font: `600 11px ${F}`, color: T.subtle }}>—</span>}</span>
          </div>
        </div>

        {existing.map(([ab, name, country, source, stage, score, tone]) => (
          <div key={name} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr .9fr .7fr", alignItems: "center", padding: "11px 14px", borderTop: `1px solid ${T.borderSubtle}`, font: `500 12px ${F}`, color: T.text }}>
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ width: 26, height: 26, borderRadius: "50%", background: T.indigoBg, color: T.primary, display: "flex", alignItems: "center", justifyContent: "center", font: `700 10px ${F}` }}>{ab}</span>
              {name}
            </span>
            <span style={{ color: T.muted }}>{country}</span>
            <span><span style={{ ...pill("plain") }}>{source}</span></span>
            <span><span style={{ ...pill("info") }}>{stage}</span></span>
            <span><span style={{ ...pill(tone) }}>{score}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
