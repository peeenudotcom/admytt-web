"use client";

import { useState } from "react";
import { teams, badgeStyle } from "@/lib/content";

export default function TeamTabs() {
  const [active, setActive] = useState(0);
  const t = teams[active];

  return (
    <section id="teams" style={{ background: "#fff", padding: "92px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ maxWidth: 680, marginBottom: 34 }}>
          <div style={{ font: "700 13px var(--font-inter)", color: "#4F46E5", marginBottom: 12 }}>Built for each team</div>
          <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 14 }}>One platform, reorganised around each role</h2>
          <p style={{ font: "400 18px/28px var(--font-inter)", color: "#475569" }}>Owners, counsellors, admissions, visa, finance, and partner teams each see the workflow, screen, and outcomes that match their job.</p>
        </div>

        <div role="tablist" aria-label="Teams" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 26 }} data-teamtabs="1">
          {teams.map((tm, i) => {
            const on = i === active;
            return (
              <button
                key={tm.label}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                style={{ font: "700 14px var(--font-inter)", background: on ? "#4F46E5" : "#fff", color: on ? "#fff" : "#475569", border: `1px solid ${on ? "#4F46E5" : "#E4EAF3"}`, borderRadius: 9, padding: "10px 18px", cursor: "pointer", transition: "all .15s" }}
              >
                {tm.label}
              </button>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "center", background: "#F8FAFC", border: "1px solid #E9EEF6", borderRadius: 16, padding: 36 }} data-teamview="1">
          <div>
            <h3 style={{ font: "700 25px/32px var(--font-inter)", color: "#0F172A", marginBottom: 14 }}>{t.headline}</h3>
            <p style={{ font: "400 16px/25px var(--font-inter)", color: "#475569", marginBottom: 22 }}>{t.intro}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {t.points.map((p) => (
                <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 11, font: "500 15px/22px var(--font-inter)", color: "#334155" }}>
                  <span style={{ color: "#4F46E5", fontWeight: 700, marginTop: 1 }}>✓</span>
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "#fff", border: "1px solid #E4EAF3", borderRadius: 12, overflow: "hidden", boxShadow: "0 22px 46px -28px rgba(11,18,48,.3)" }}>
            <div style={{ background: "#0F172A", padding: "12px 16px", font: "700 12.5px var(--font-inter)", color: "#fff" }}>{t.panelTitle}</div>
            <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 9 }}>
              {t.rows.map((r) => (
                <div key={r.l} style={{ display: "flex", alignItems: "center", gap: 12, border: "1px solid #EAEFF7", borderRadius: 9, padding: "11px 13px" }}>
                  <span style={{ font: "500 13px var(--font-inter)", color: "#64748B", flex: 1 }}>{r.l}</span>
                  <span style={badgeStyle(r.s)}>{r.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
