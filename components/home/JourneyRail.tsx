"use client";

import { useScene } from "@/lib/useScene";
import { track } from "@/lib/analytics";
import { stages, stageChanges, badgeStyle } from "@/lib/content";
import { onLight, pillLight } from "./sceneStyles";

const JOURNEY_DURATIONS = [2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000];

const baseRowStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 12, background: "#fff", border: "1px solid #EAEFF7", borderRadius: 9, padding: "12px 14px", transition: "background .35s,border-color .35s,box-shadow .35s" };
const hiRowStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 12, background: "#F2FAF6", border: "1px solid #BFE6D3", borderRadius: 9, padding: "12px 14px", boxShadow: "0 0 0 3px rgba(15,159,110,.12)", transition: "background .35s,border-color .35s,box-shadow .35s" };

export default function JourneyRail() {
  const { step: stage, playing, changed, sceneRef, progRef, toggle, replay, selectStage, onEnter, onLeave } = useScene({
    durations: JOURNEY_DURATIONS,
    mode: "journey",
  });

  const a = stages[stage];
  const chg = stageChanges[stage];

  return (
    <section id="platform" style={{ background: "#fff", borderTop: "1px solid #EEF2F8", padding: "92px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ maxWidth: 680, marginBottom: 40 }}>
          <div style={{ font: "700 13px var(--font-inter)", color: "#4F46E5", marginBottom: 12 }}>One connected operating flow</div>
          <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 14 }}>Follow <span className="hl">one student record</span> across every team</h2>
          <p style={{ font: "400 18px/28px var(--font-inter)", color: "#475569" }}>From the first enquiry to a confirmed enrolment, every stage stays on the same record. Select a stage to see exactly what your team works on.</p>
        </div>

        {/* stepper */}
        <div style={{ display: "flex", gap: 0, marginBottom: 30, overflowX: "auto", paddingBottom: 6 }} data-stepper="1">
          {stages.map((st, i) => {
            const on = i === stage;
            return (
              <button
                key={st.label}
                onClick={() => {
                  selectStage(i);
                  track("product_stage_viewed", { stage: st.label });
                }}
                style={{ display: "flex", alignItems: "center", gap: 9, background: on ? "#0F172A" : "#fff", border: `1px solid ${on ? "#0F172A" : "#E4EAF3"}`, color: on ? "#fff" : "#475569", borderRadius: 10, padding: "10px 14px", marginRight: 8, cursor: "pointer", flexShrink: 0, transition: "all .18s" }}
              >
                <span style={{ width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", font: "700 11px var(--font-inter)", background: on ? "#4F46E5" : "#EEF2F8", color: on ? "#fff" : "#64748B" }}>{i + 1}</span>
                <span style={{ font: "700 13px var(--font-inter)", whiteSpace: "nowrap" }}>{st.label}</span>
              </button>
            );
          })}
        </div>

        {/* control bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <span style={pillLight}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0F9F6E", animation: "adpulse 1.6s infinite" }} />
            Live product tour
          </span>
          <button aria-pressed={playing} aria-label={playing ? "Pause journey tour" : "Play journey tour"} onClick={() => { toggle(); track("product_tour_started"); }} style={onLight}>{playing ? "❚❚" : "▶"}</button>
          <button aria-label="Replay journey tour" onClick={replay} style={onLight}>↻</button>
          <div style={{ flex: 1, minWidth: 120, height: 5, borderRadius: 999, background: "#EEF2F8", overflow: "hidden" }}>
            <div ref={progRef} style={{ height: "100%", width: 0, background: "#4F46E5", transition: "width .12s linear" }} />
          </div>
          <span style={{ font: "700 12px var(--font-inter)", color: "#64748B", whiteSpace: "nowrap" }}>Stage {stage + 1} of 8</span>
        </div>

        <div ref={sceneRef} onMouseEnter={onEnter} onMouseLeave={onLeave} onFocusCapture={onEnter} onBlurCapture={onLeave} style={{ display: "grid", gridTemplateColumns: ".82fr 1.18fr", gap: 28, alignItems: "stretch" }} data-journey="1">
          {/* outcome */}
          <div style={{ background: "#0F172A", borderRadius: 14, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 360 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", borderRadius: 999, padding: "6px 13px", font: "700 12px var(--font-inter)", color: "#cdd6ee", marginBottom: 22 }}>Stage {stage + 1} of 8 · {a.label}</div>
              <p style={{ font: "700 26px/34px var(--font-inter)", color: "#fff", letterSpacing: "-.01em" }}>{a.outcome}</p>
            </div>
            <div style={{ marginTop: 26, display: "flex", flexDirection: "column", gap: 11 }}>
              {a.bullets.map((b) => (
                <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, font: "500 14px var(--font-inter)", color: "#c2cbe6" }}>
                  <span style={{ color: "#5fd0a6", fontWeight: 700, marginTop: 1 }}>✓</span>
                  {b}
                </div>
              ))}
            </div>
          </div>

          {/* product panel */}
          <div style={{ background: "#F8FAFC", border: "1px solid #E4EAF3", borderRadius: 14, overflow: "hidden", boxShadow: "0 24px 50px -28px rgba(11,18,48,.3)" }}>
            <div style={{ height: 48, background: "#fff", borderBottom: "1px solid #EEF2F8", display: "flex", alignItems: "center", gap: 11, padding: "0 18px" }}>
              <span style={{ width: 32, height: 32, borderRadius: "50%", background: "#EEF2FF", color: "#4F46E5", font: "700 12px var(--font-inter)", display: "flex", alignItems: "center", justifyContent: "center" }}>PS</span>
              <div>
                <div style={{ font: "700 13px var(--font-inter)", color: "#0F172A" }}>Priya Sharma</div>
                <div style={{ font: "500 11px var(--font-inter)", color: "#64748B" }}>UK · Fall 2026 · #STU-2041</div>
              </div>
              <span style={{ marginLeft: "auto", font: "700 11px var(--font-inter)", color: "#475569", background: "#F1F5FB", borderRadius: 7, padding: "5px 11px" }}>{a.head}</span>
            </div>
            <div style={{ padding: 18 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {a.rows.map((r, idx) => {
                  const isChg = chg && idx === chg.i;
                  const cell = isChg ? (changed ? chg.to : chg.from) : null;
                  const v = cell ? cell.v : r.v;
                  const tag = cell ? cell.tag : r.tag;
                  const s = cell ? cell.s : r.s;
                  const rowStyle = isChg && changed ? hiRowStyle : baseRowStyle;
                  return (
                    <div key={r.l} style={rowStyle}>
                      <span style={{ font: "500 13px var(--font-inter)", color: "#64748B", width: 150, flexShrink: 0 }}>{r.l}</span>
                      <span style={{ font: "600 13.5px var(--font-inter)", color: "#0F172A", flex: 1 }}>{v}</span>
                      <span style={badgeStyle(s)}>{tag}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
