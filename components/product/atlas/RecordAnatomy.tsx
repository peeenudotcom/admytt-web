"use client";

import { useRef, useState } from "react";
import { Lock } from "lucide-react";
import { T, F, MONO } from "@/lib/theme";
import { recordLayers } from "@/lib/atlas";

export default function RecordAnatomy() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  const move = (next: number) => {
    const i = (next + recordLayers.length) % recordLayers.length;
    setActive(i);
    listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[i]?.focus();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); move(active + 1); }
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); move(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); move(0); }
    else if (e.key === "End") { e.preventDefault(); move(recordLayers.length - 1); }
  };

  const layer = recordLayers[active];

  return (
    <div data-atlas-record="1">
      {/* Exploded stack */}
      <div ref={listRef} role="tablist" aria-orientation="vertical" aria-label="Student record layers" onKeyDown={onKey} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {recordLayers.map((l, i) => {
          const on = i === active;
          return (
            <button
              key={l.id}
              role="tab"
              id={`rl-tab-${l.id}`}
              aria-selected={on}
              aria-controls="rl-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: 12, textAlign: "left", cursor: "pointer",
                background: on ? "#fff" : "#FCFDFF",
                border: `1px solid ${on ? T.primary : T.border}`,
                boxShadow: on ? "0 14px 30px -18px rgba(79,70,229,.45)" : "0 1px 2px rgba(15,23,42,.03)",
                borderRadius: 11, padding: "12px 14px",
                transform: on ? "translateX(10px)" : "none",
                transition: "transform .2s ease, border-color .2s ease, box-shadow .2s ease, background .2s ease",
              }}
            >
              <span style={{ width: 30, height: 30, flexShrink: 0, borderRadius: 8, background: on ? T.primary : T.surface2, color: on ? "#fff" : T.subtle, display: "flex", alignItems: "center", justifyContent: "center", font: `700 11px ${MONO}` }}>{l.ab}</span>
              <span style={{ font: `${on ? 700 : 600} 14px ${F}`, color: on ? T.text : T.muted }}>{l.label}</span>
              <span aria-hidden style={{ marginLeft: "auto", font: `700 10px ${MONO}`, color: on ? T.primary : "#CBD5E1" }}>{String(i + 1).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      {/* Layer detail */}
      <aside id="rl-panel" role="tabpanel" aria-labelledby={`rl-tab-${layer.id}`} tabIndex={0} style={{ position: "sticky", top: 84, background: T.text, borderRadius: 16, padding: 22, overflow: "hidden" }}>
        <div key={layer.id} style={{ animation: "adfade .3s ease both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
            <span style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(124,58,237,.22)", color: "#C4B5FD", display: "flex", alignItems: "center", justifyContent: "center", font: `700 11px ${MONO}` }}>{layer.ab}</span>
            <span style={{ font: `800 17px ${F}`, color: "#fff", letterSpacing: "-.01em" }}>{layer.label}</span>
          </div>
          <div style={{ font: `600 10px ${MONO}`, letterSpacing: ".06em", color: "#7e8ed4", margin: "12px 0 8px" }}>ON THE RECORD</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,.08)" }}>
            {layer.fields.map((f) => (
              <div key={f.k} style={{ display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,.04)", padding: "10px 13px" }}>
                <span style={{ font: `500 11.5px ${MONO}`, color: "#8b93c9", width: 96, flexShrink: 0 }}>{f.k}</span>
                <span style={{ font: `600 12.5px ${F}`, color: "#eef1fb" }}>{f.v}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 9, marginTop: 14, background: "rgba(95,208,166,.1)", border: "1px solid rgba(95,208,166,.22)", borderRadius: 10, padding: "10px 12px" }}>
            <Lock size={13} color="#5fd0a6" style={{ marginTop: 1, flexShrink: 0 }} />
            <span style={{ font: `500 12px/18px ${F}`, color: "#bfe9d6" }}>{layer.permission}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
