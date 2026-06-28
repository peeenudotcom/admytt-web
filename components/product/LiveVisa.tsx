"use client";

import { Stamp } from "lucide-react";
import { T, F, MONO, warmBadge } from "@/lib/theme";
import { useReveal, stagger, easeOut } from "@/lib/useReveal";

/* Live Visa scene (cream): case stats count up and checklist steps clear to
   "ready", ending on a "ready to file" state. */

const rows: [string, string, "good" | "info" | "warn"][] = [
  ["CAS received from Leeds", "VERIFIED", "good"],
  ["Financial documents", "VERIFIED", "good"],
  ["Biometrics · 5 July", "BOOKED", "info"],
  ["Application — UK Student", "READY TO FILE", "good"],
];

export default function LiveVisa() {
  const { ref, p } = useReveal(1900);
  const e = easeOut(p);
  const stats: [string, string, string][] = [
    [String(Math.round(21 * e)), "DOCS COMPLETE", "#0F7B43"],
    [String(Math.round(6 * e)), "AWAITING FIN.", "#9A6700"],
    [String(Math.round(11 * e)), "FILED", T.primary],
  ];

  return (
    <div ref={ref} style={{ background: T.cream, padding: 18, minHeight: 360 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: "#EEE7FB", color: T.violet, display: "flex", alignItems: "center", justifyContent: "center" }}><Stamp size={15} /></span>
        <span style={{ font: `800 16px ${F}`, color: T.ink }}>Visa case · UK Student</span>
        <span style={{ marginLeft: "auto", ...warmBadge("violet") }}>PRIORITY</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 14 }}>
        {stats.map(([v, l, c]) => (
          <div key={l} style={{ background: "#fff", border: `1px solid ${T.creamBorder}`, borderRadius: 12, padding: "11px 13px" }}>
            <div style={{ font: `800 20px ${F}`, color: c, fontVariantNumeric: "tabular-nums" }}>{v}</div>
            <div style={{ font: `600 8.5px ${MONO}`, color: T.inkMuted, letterSpacing: ".05em", marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "#fff", border: `1px solid ${T.creamBorder}`, borderRadius: 14, padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
        {rows.map(([label, tag, tone], i) => {
          const r = stagger(p, i, rows.length);
          return (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, border: `1px solid ${T.creamBorder}`, borderRadius: 10, padding: "12px 13px", opacity: r, transform: `translateY(${(1 - r) * 6}px)` }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: tone === "good" ? "#0F7B43" : tone === "warn" ? "#9A6700" : T.primary }} />
              <span style={{ flex: 1, font: `600 12.5px ${F}`, color: T.ink }}>{label}</span>
              <span style={{ ...warmBadge(tone) }}>{tag}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
