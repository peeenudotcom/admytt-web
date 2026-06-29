"use client";

import { useRef, useState } from "react";
import { Star, MousePointerClick, EyeOff, BarChart3 } from "lucide-react";
import { T, F, MONO } from "@/lib/theme";
import { AppFrame } from "@/components/product/AppFrame";
import { ProductMock } from "@/components/product/ProductMock";
import { roles, workflows } from "@/lib/atlas";

function FacetList({ icon, label, items, tone = "muted" }: { icon: React.ReactNode; label: string; items: string[]; tone?: "muted" | "danger" }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 7, font: `700 10px ${MONO}`, letterSpacing: ".06em", color: T.subtle, marginBottom: 8, textTransform: "uppercase" }}>{icon} {label}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {items.map((it) => (
          <div key={it} style={{ display: "flex", alignItems: "flex-start", gap: 8, font: `500 13px/19px ${F}`, color: tone === "danger" ? "#9a6a3a" : T.text }}>
            <span style={{ color: tone === "danger" ? "#B45309" : T.primary, fontWeight: 800, marginTop: 1 }}>{tone === "danger" ? "–" : "›"}</span> {it}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RoleExplorer() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);

  const move = (next: number) => {
    const i = (next + roles.length) % roles.length;
    setActive(i);
    tabsRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[i]?.focus();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); move(active + 1); }
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); move(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); move(0); }
    else if (e.key === "End") { e.preventDefault(); move(roles.length - 1); }
  };

  const role = roles[active];
  const canvas = workflows.find((w) => w.id === role.workspace)!.canvas;

  return (
    <div>
      {/* Role tabs */}
      <div ref={tabsRef} role="tablist" aria-label="Roles" onKeyDown={onKey} style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22 }}>
        {roles.map((r, i) => {
          const on = i === active;
          return (
            <button
              key={r.id}
              role="tab"
              id={`role-tab-${r.id}`}
              aria-selected={on}
              aria-controls="role-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer", background: on ? T.text : "#fff", border: `1px solid ${on ? T.text : T.border}`, color: on ? "#fff" : T.muted, borderRadius: 999, padding: "8px 14px", font: `700 13px ${F}`, transition: "background .15s, color .15s" }}
            >
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: on ? T.primary : T.surface2, color: on ? "#fff" : T.subtle, display: "flex", alignItems: "center", justifyContent: "center", font: `700 9.5px ${MONO}` }}>{r.ab}</span>
              {r.label}
            </button>
          );
        })}
      </div>

      <div id="role-panel" role="tabpanel" aria-labelledby={`role-tab-${role.id}`} tabIndex={0}>
        <div key={role.id} data-atlas-role="1" style={{ animation: "adfade .32s ease both" }}>
          {/* Workspace canvas */}
          <div style={{ minWidth: 0 }}>
            <div style={{ font: `500 14px/21px ${F}`, color: T.muted, marginBottom: 14 }}>
              <span style={{ font: `700 14px ${F}`, color: T.text }}>{role.label}.</span> {role.summary}
            </div>
            <AppFrame url={`app.admytt.com/${role.workspace}`} chips={[]} scrollHeight={360}>
              <ProductMock {...canvas} minHeight={360} />
            </AppFrame>
          </div>

          {/* Role facets */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <FacetList icon={<Star size={12} />} label="Priority information" items={role.priority} />
            <FacetList icon={<MousePointerClick size={12} />} label="Available actions" items={role.actions} />
            <FacetList icon={<EyeOff size={12} />} label="Restricted from this role" items={role.restricted} tone="danger" />
            <FacetList icon={<BarChart3 size={12} />} label="Relevant reports" items={role.reports} />
          </aside>
        </div>
      </div>
    </div>
  );
}
