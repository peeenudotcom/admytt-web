"use client";

import { useRef, useState } from "react";
import { Eye, MousePointerClick, ArrowRightLeft, Sparkles, ShieldCheck } from "lucide-react";
import { T, F, MONO } from "@/lib/theme";
import { AppFrame } from "@/components/product/AppFrame";
import { ProductMock } from "@/components/product/ProductMock";
import { workflows } from "@/lib/atlas";

function Facet({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "13px 0", borderTop: `1px solid ${T.borderSubtle}` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, font: `700 10px ${MONO}`, letterSpacing: ".06em", color: T.subtle, marginBottom: 7, textTransform: "uppercase" }}>
        {icon} {label}
      </div>
      {children}
    </div>
  );
}

export default function WorkflowExplorer() {
  const [active, setActive] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const move = (next: number) => {
    const i = (next + workflows.length) % workflows.length;
    setActive(i);
    const btn = railRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[i];
    btn?.focus();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); move(active + 1); }
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); move(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); move(0); }
    else if (e.key === "End") { e.preventDefault(); move(workflows.length - 1); }
  };

  const wf = workflows[active];

  return (
    <div data-atlas-explorer="1">
      {/* Rail */}
      <div ref={railRef} role="tablist" aria-orientation="vertical" aria-label="Workflows" data-atlas-rail="1" onKeyDown={onKey}>
        {workflows.map((w, i) => {
          const on = i === active;
          return (
            <button
              key={w.id}
              role="tab"
              id={`wf-tab-${w.id}`}
              aria-selected={on}
              aria-controls="wf-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left", cursor: "pointer",
                background: on ? T.text : "#fff",
                border: `1px solid ${on ? T.text : T.border}`,
                color: on ? "#fff" : T.muted,
                borderRadius: 10, padding: "9px 11px", transition: "background .15s, color .15s, border-color .15s",
              }}
            >
              <span style={{ width: 22, height: 22, flexShrink: 0, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", font: `700 10px ${MONO}`, background: on ? T.primary : T.surface2, color: on ? "#fff" : T.subtle }}>{w.num}</span>
              <span style={{ font: `${on ? 700 : 600} 13px ${F}`, whiteSpace: "nowrap" }}>{w.label}</span>
            </button>
          );
        })}
      </div>

      {/* Canvas */}
      <div id="wf-panel" role="tabpanel" aria-labelledby={`wf-tab-${wf.id}`} tabIndex={0} style={{ minWidth: 0 }}>
        <div key={wf.id} style={{ animation: "adfade .32s ease both" }}>
          <AppFrame url={`app.admytt.com/${wf.id}`} chips={[]} scrollHeight={392}>
            <ProductMock {...wf.canvas} minHeight={392} />
          </AppFrame>
        </div>
      </div>

      {/* Context panel */}
      <aside aria-live="polite" style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: "18px 18px 6px" }}>
        <div key={wf.id} style={{ animation: "adfade .32s ease both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 4 }}>
            <span style={{ font: `700 10px ${MONO}`, color: T.primary }}>{wf.num}</span>
            <span style={{ font: `800 16px ${F}`, color: T.text, letterSpacing: "-.01em" }}>{wf.label}</span>
          </div>
          <Facet icon={<Eye size={12} />} label="What the team sees">
            <p style={{ font: `400 13px/19px ${F}`, color: T.muted }}>{wf.context.sees}</p>
          </Facet>
          <Facet icon={<MousePointerClick size={12} />} label="What they can act on">
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {wf.context.act.map((a) => (
                <div key={a} style={{ display: "flex", alignItems: "flex-start", gap: 8, font: `500 12.5px/18px ${F}`, color: T.text }}>
                  <span style={{ color: T.primary, fontWeight: 800, marginTop: 1 }}>›</span> {a}
                </div>
              ))}
            </div>
          </Facet>
          <Facet icon={<ArrowRightLeft size={12} />} label="What moves forward">
            <p style={{ font: `400 13px/19px ${F}`, color: T.muted }}>{wf.context.forward}</p>
          </Facet>
          <Facet icon={<Sparkles size={12} />} label="Where AI assists">
            <p style={{ font: `400 13px/19px ${F}`, color: "#5b3da8" }}>{wf.context.ai}</p>
          </Facet>
          <Facet icon={<ShieldCheck size={12} />} label="Who retains approval">
            <p style={{ font: `400 13px/19px ${F}`, color: T.muted }}>{wf.context.approval}</p>
          </Facet>
        </div>
      </aside>
    </div>
  );
}
