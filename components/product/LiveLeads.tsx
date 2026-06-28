"use client";

import { useEffect, useRef, useState } from "react";
import { Flame } from "lucide-react";
import { T, F, MONO, warmBadge } from "@/lib/theme";
import { easeOut } from "@/lib/useReveal";

/* Live Leads scene (cream app theme): stats count up, a new enquiry slides in at
   the top of the table, is auto-assigned to a counsellor, and gets an AI score. */

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
  const total = (1656 + Math.round(21 * e)).toLocaleString();
  const arrive = Math.max(0, Math.min(1, (p - 0.18) / 0.18));
  const assigned = p > 0.5;
  const scored = p > 0.7;
  const scoreVal = scored ? Math.round(82 * Math.min(1, (p - 0.7) / 0.2)) : 0;

  const stats: [string, string, string][] = [
    [total, "TOTAL", T.primary],
    [String(Math.round(8 * e)), "HOT", "#EA580C"],
    [String(Math.round(47 * e)), "NO CONTACT 48H", T.danger],
    [String(Math.round(4 * e)), "CONVERTED", "#0F7B43"],
  ];

  const cell: React.CSSProperties = { display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr .9fr .7fr", alignItems: "center", padding: "11px 14px" };

  return (
    <div ref={ref} style={{ background: T.cream, padding: 18, minHeight: 360 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ font: `800 17px ${F}`, color: T.ink }}>Leads</span>
        <span style={{ ...warmBadge("violet") }}>{total} total</span>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, background: T.violet, color: "#fff", borderRadius: 9, padding: "7px 12px", font: `700 11px ${F}` }}><Flame size={12} /> AI Lead Scoring</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 14 }}>
        {stats.map(([v, l, c]) => (
          <div key={l} style={{ background: "#fff", border: `1px solid ${T.creamBorder}`, borderRadius: 12, padding: "11px 13px" }}>
            <div style={{ font: `800 20px ${F}`, color: c, fontVariantNumeric: "tabular-nums" }}>{v}</div>
            <div style={{ font: `600 8.5px ${MONO}`, color: T.inkMuted, letterSpacing: ".05em", marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fff", border: `1px solid ${T.creamBorder}`, borderRadius: 14, overflow: "hidden" }}>
        <div style={{ ...cell, padding: "9px 14px", borderBottom: `1px solid ${T.creamBorder}`, font: `700 8.5px ${MONO}`, letterSpacing: ".06em", color: T.inkMuted }}>
          <span>LEAD</span><span>COUNTRY</span><span>SOURCE</span><span>STAGE</span><span>AI SCORE</span>
        </div>

        {/* arriving lead */}
        <div style={{ maxHeight: arrive * 52, opacity: arrive, overflow: "hidden", borderTop: arrive > 0 ? `1px solid ${T.creamBorder}` : "none", background: scored ? "#FBF3E7" : "#F3EEFB" }}>
          <div style={cell}>
            <span style={{ display: "flex", alignItems: "center", gap: 9, font: `500 12px ${F}`, color: T.ink }}>
              <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#EEE7FB", color: T.violet, display: "flex", alignItems: "center", justifyContent: "center", font: `700 10px ${F}` }}>MK</span>
              <span>
                <span style={{ display: "block", fontWeight: 600 }}>Manjot K.</span>
                <span style={{ font: `500 9px ${MONO}`, color: assigned ? "#0F7B43" : T.inkMuted }}>{assigned ? "assigned · Aisha Khan" : "new enquiry · just now"}</span>
              </span>
            </span>
            <span style={{ color: T.inkMuted, font: `500 12px ${F}` }}>Australia</span>
            <span><span style={{ ...warmBadge("info"), background: "#EFEBE2", color: T.inkMuted }}>WEBSITE</span></span>
            <span><span style={{ ...warmBadge(assigned ? "info" : "violet") }}>{assigned ? "ASSIGNED" : "NEW"}</span></span>
            <span>{scored ? <span style={{ ...warmBadge("good") }}>{scoreVal} HOT</span> : <span style={{ font: `600 11px ${MONO}`, color: T.inkMuted }}>—</span>}</span>
          </div>
        </div>

        {existing.map(([ab, name, country, source, stage, score, tone]) => (
          <div key={name} style={{ ...cell, borderTop: `1px solid ${T.creamBorder}` }}>
            <span style={{ display: "flex", alignItems: "center", gap: 9, font: `500 12px ${F}`, color: T.ink }}>
              <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#E8EBFF", color: T.primary, display: "flex", alignItems: "center", justifyContent: "center", font: `700 10px ${F}` }}>{ab}</span>
              {name}
            </span>
            <span style={{ color: T.inkMuted, font: `500 12px ${F}` }}>{country}</span>
            <span><span style={{ ...warmBadge("info"), background: "#EFEBE2", color: T.inkMuted }}>{source.toUpperCase()}</span></span>
            <span><span style={{ ...warmBadge("info") }}>{stage.toUpperCase()}</span></span>
            <span><span style={{ ...warmBadge(tone) }}>{score}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
