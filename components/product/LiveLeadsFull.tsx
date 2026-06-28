"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Bookmark, Users, Download, Flame, ChevronDown } from "lucide-react";
import { T, F, MONO, warmBadge } from "@/lib/theme";
import { easeOut, useReveal, stagger } from "@/lib/useReveal";

/* Full Leads operational workspace: stats, search + saved views, filters, a rich
   table (lead+contact, source+campaign, counsellor, AI score, stage, next
   follow-up, last activity) and bulk actions. The CRM's entry point. */

type Lead = {
  ab: string; name: string; contact: string; country: string; source: string; campaign: string;
  owner: string; score: number; band: "good" | "info" | "bad"; stage: string; next: string; last: string; sel?: boolean;
};
const leads: Lead[] = [
  { ab: "MK", name: "Manjot Kaur", contact: "+61 4xx xxx 210", country: "Australia", source: "Website", campaign: "Spring intake", owner: "Aisha Khan", score: 82, band: "good", stage: "Counselling", next: "Today 4:00 PM", last: "2h ago", sel: true },
  { ab: "RS", name: "Ravi Singh", contact: "+1 6xx xxx 884", country: "Canada", source: "WhatsApp", campaign: "Diwali campaign", owner: "Vikram S.", score: 67, band: "info", stage: "New", next: "Tomorrow", last: "5h ago", sel: true },
  { ab: "PD", name: "Pooja Desai", contact: "+44 7xx xxx 119", country: "UK", source: "Referral", campaign: "—", owner: "Aisha Khan", score: 91, band: "good", stage: "Application", next: "Fri 11:00 AM", last: "1d ago" },
  { ab: "AS", name: "Amit Sharma", contact: "+61 4xx xxx 067", country: "Australia", source: "QR Code", campaign: "Campus fair", owner: "Unassigned", score: 34, band: "bad", stage: "At risk", next: "—", last: "4d ago" },
  { ab: "NG", name: "Neha Gupta", contact: "+1 4xx xxx 552", country: "USA", source: "Website", campaign: "Search", owner: "Vikram S.", score: 73, band: "info", stage: "Counselling", next: "Mon 10:00 AM", last: "3h ago" },
  { ab: "KV", name: "Karan Verma", contact: "+49 1xx xxx 431", country: "Germany", source: "Meta Ads", campaign: "Lookalike", owner: "Aisha Khan", score: 58, band: "info", stage: "Documents", next: "Today", last: "6h ago" },
];

const GRID = "26px 1.7fr 1.25fr 1fr 64px 1fr 1.05fr 0.7fr";

export default function LiveLeadsFull() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const { ref: rowsRef, p: rp } = useReveal(1800);

  useEffect(() => {
    const reduced = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setP(1); return; }
    let raf = 0, start = 0, ran = false;
    const tick = (ts: number) => { if (!start) start = ts; const t = Math.min((ts - start) / 1300, 1); setP(t); if (t < 1) raf = requestAnimationFrame(tick); };
    const io = new IntersectionObserver((e) => { if (e[0].isIntersecting && !ran) { ran = true; start = 0; raf = requestAnimationFrame(tick); } }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  const e = easeOut(p);
  const stats: [number, string, string][] = [
    [Math.round(1677 * e), "Total leads", T.text],
    [Math.round(24 * e), "New", T.primary],
    [Math.round(8 * e), "Hot", "#EA580C"],
    [Math.round(47 * e), "Overdue", "#DC2626"],
    [Math.round(4 * e), "Converted", "#0F9F6E"],
  ];

  return (
    <div ref={ref} style={{ background: "#F8FAFC", padding: 18 }}>
      {/* header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ font: `800 18px ${F}`, color: T.text }}>Leads</span>
        <span style={{ ...warmBadge("violet") }}>{(1656 + Math.round(21 * e)).toLocaleString()} total</span>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, background: T.violet, color: "#fff", borderRadius: 9, padding: "8px 13px", font: `700 11.5px ${F}` }}><Flame size={13} /> AI Lead Scoring</span>
      </div>

      {/* stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 10, marginBottom: 12 }}>
        {stats.map(([v, l, c]) => (
          <div key={l} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "11px 14px" }}>
            <div style={{ font: `800 21px ${F}`, color: c, fontVariantNumeric: "tabular-nums" }}>{v.toLocaleString()}</div>
            <div style={{ font: `500 10.5px ${F}`, color: T.muted }}>{l}</div>
          </div>
        ))}
      </div>

      {/* toolbar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, flexWrap: "wrap" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7, border: `1px solid ${T.border}`, background: "#fff", borderRadius: 9, padding: "8px 11px", font: `500 11px ${F}`, color: T.subtle, minWidth: 200 }}><Search size={13} /> Search name, phone, email…</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${T.border}`, background: "#fff", borderRadius: 9, padding: "8px 11px", font: `600 11px ${F}`, color: T.text }}><Bookmark size={12} color={T.primary} /> Saved views <ChevronDown size={11} /></span>
        {["Country", "Source", "Stage", "Owner", "Intake"].map((f) => (
          <span key={f} style={{ display: "inline-flex", alignItems: "center", gap: 5, border: `1px solid ${T.border}`, background: "#fff", borderRadius: 9, padding: "8px 10px", font: `600 11px ${F}`, color: T.muted }}>{f} <ChevronDown size={11} /></span>
        ))}
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${T.primary}`, color: T.primary, borderRadius: 9, padding: "8px 12px", font: `700 11px ${F}` }}><Users size={12} /> Bulk assign · 2</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${T.border}`, background: "#fff", color: T.text, borderRadius: 9, padding: "8px 12px", font: `700 11px ${F}` }}><Download size={12} /> Export</span>
      </div>

      {/* table */}
      <div ref={rowsRef} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: GRID, gap: 8, padding: "9px 14px", borderBottom: `1px solid ${T.border}`, font: `700 8.5px ${MONO}`, letterSpacing: ".05em", color: T.inkMuted }}>
          <span><span style={{ width: 13, height: 13, border: `1.5px solid ${T.subtle}`, borderRadius: 3, display: "inline-block" }} /></span>
          <span>LEAD</span><span>SOURCE / CAMPAIGN</span><span>COUNSELLOR</span><span>AI SCORE</span><span>STAGE</span><span>NEXT FOLLOW-UP</span><span>LAST</span>
        </div>
        {leads.map((l, i) => {
          const rv = stagger(rp, i, leads.length);
          return (
            <div key={l.name} style={{ display: "grid", gridTemplateColumns: GRID, gap: 8, alignItems: "center", padding: "11px 14px", borderTop: `1px solid ${T.borderSubtle}`, background: l.sel ? "#F5F7FF" : "#fff", opacity: rv, transform: `translateY(${(1 - rv) * 6}px)` }}>
              <span><span style={{ width: 13, height: 13, borderRadius: 3, display: "inline-flex", alignItems: "center", justifyContent: "center", border: `1.5px solid ${l.sel ? T.primary : T.subtle}`, background: l.sel ? T.primary : "#fff", color: "#fff", font: "700 9px sans-serif" }}>{l.sel ? "✓" : ""}</span></span>
              <span style={{ display: "flex", alignItems: "center", gap: 9, minWidth: 0 }}>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: "#EEF2FF", color: T.primary, display: "flex", alignItems: "center", justifyContent: "center", font: `700 10px ${F}`, flexShrink: 0 }}>{l.ab}</span>
                <span style={{ minWidth: 0 }}>
                  <span style={{ display: "block", font: `700 12px ${F}`, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{l.name}</span>
                  <span style={{ font: `500 9.5px ${MONO}`, color: T.subtle }}>{l.contact} · {l.country}</span>
                </span>
              </span>
              <span style={{ minWidth: 0 }}>
                <span style={{ display: "block", font: `600 11px ${F}`, color: T.text }}>{l.source}</span>
                <span style={{ font: `500 9.5px ${F}`, color: T.subtle }}>{l.campaign}</span>
              </span>
              <span style={{ font: `500 11px ${F}`, color: l.owner === "Unassigned" ? "#DC2626" : T.muted }}>{l.owner}</span>
              <span><span style={{ ...warmBadge(l.band) }}>{l.score}</span></span>
              <span><span style={{ ...warmBadge("info") }}>{l.stage.toUpperCase()}</span></span>
              <span style={{ font: `500 10.5px ${F}`, color: l.next === "—" ? T.subtle : T.text }}>{l.next}</span>
              <span style={{ font: `500 9.5px ${MONO}`, color: T.subtle }}>{l.last}</span>
            </div>
          );
        })}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderTop: `1px solid ${T.border}`, font: `500 10.5px ${F}`, color: T.subtle }}>
          <span>Showing 6 of 1,677 leads</span>
          <span style={{ font: `600 10.5px ${MONO}` }}>2 selected</span>
        </div>
      </div>
    </div>
  );
}
