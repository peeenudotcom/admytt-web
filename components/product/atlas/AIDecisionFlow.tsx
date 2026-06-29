"use client";

import { useRef, useState } from "react";
import { Radio, Sparkles, Lightbulb, UserCheck, CheckCircle2 } from "lucide-react";
import { T, F, MONO } from "@/lib/theme";
import { aiExamples, aiRouteSteps } from "@/lib/atlas";

const icons = [Radio, Sparkles, Lightbulb, UserCheck, CheckCircle2];

export default function AIDecisionFlow() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const move = (next: number) => {
    const i = (next + aiExamples.length) % aiExamples.length;
    setActive(i);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[i]?.focus();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); move(active + 1); }
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); move(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); move(0); }
    else if (e.key === "End") { e.preventDefault(); move(aiExamples.length - 1); }
  };

  const ex = aiExamples[active];
  const steps = [ex.signal, ex.analysis, ex.suggestion, ex.review, ex.outcome];

  return (
    <div>
      {/* Example picker */}
      <div ref={tabsRef} role="tablist" aria-label="AI examples" onKeyDown={onKey} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
        {aiExamples.map((e, i) => {
          const on = i === active;
          return (
            <button
              key={e.id}
              role="tab"
              aria-selected={on}
              aria-controls="ai-route"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              style={{ cursor: "pointer", background: on ? T.violet : "#fff", border: `1px solid ${on ? T.violet : T.border}`, color: on ? "#fff" : T.muted, borderRadius: 999, padding: "8px 14px", font: `700 12.5px ${F}`, transition: "background .15s, color .15s" }}
            >
              {e.label}
            </button>
          );
        })}
      </div>

      {/* Route */}
      <div id="ai-route" role="tabpanel" key={ex.id}>
        <div data-atlas-route="1" style={{ animation: "adfade .32s ease both" }}>
          {aiRouteSteps.map((stepLabel, i) => {
            const Icon = icons[i];
            const human = i === 3;
            const outcome = i === 4;
            return (
              <div key={stepLabel} style={{ position: "relative", display: "flex" }}>
                <div
                  style={{
                    flex: 1, margin: 5, borderRadius: 13, padding: "16px 15px",
                    background: human ? T.text : "#fff",
                    border: `1px solid ${human ? T.text : outcome ? "#BFE6D3" : T.border}`,
                    boxShadow: human ? "0 18px 36px -22px rgba(15,23,42,.6)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ width: 28, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: human ? "rgba(95,208,166,.16)" : outcome ? "#E4F7EC" : T.violetBg, color: human ? "#5fd0a6" : outcome ? "#0F7B43" : T.violet }}>
                      <Icon size={15} />
                    </span>
                    <span style={{ font: `700 9px ${MONO}`, letterSpacing: ".06em", color: human ? "#9fb0e0" : T.subtle, textTransform: "uppercase" }}>{`0${i + 1}`}</span>
                  </div>
                  <div style={{ font: `700 12.5px ${F}`, color: human ? "#fff" : T.text, marginBottom: 6 }}>{stepLabel}</div>
                  <div style={{ font: `400 12px/17px ${F}`, color: human ? "#c2cbe6" : T.muted }}>{steps[i]}</div>
                  {human && <div style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6, font: `700 9px ${MONO}`, letterSpacing: ".05em", color: "#5fd0a6", background: "rgba(95,208,166,.12)", borderRadius: 6, padding: "4px 7px" }}>HUMAN DECISION</div>}
                </div>
                {i < 4 && (
                  <span aria-hidden className="ai-route-arrow" style={{ position: "absolute", right: -7, top: "50%", transform: "translateY(-50%)", zIndex: 2, width: 18, height: 18, borderRadius: "50%", background: "#fff", border: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "center", font: `700 11px ${F}`, color: T.subtle }}>›</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 9, marginTop: 20, font: `500 13px/20px ${F}`, color: T.muted }}>
        <Sparkles size={15} color={T.violet} />
        Every suggestion is tied to a real record, is reviewable, and stays human-controlled. adMYTT never sends, files or deletes on its own.
      </div>
    </div>
  );
}
