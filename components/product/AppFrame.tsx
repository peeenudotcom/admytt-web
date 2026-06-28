import type { CSSProperties } from "react";
import { T, F, MONO } from "@/lib/theme";

export type FloatChip = { dot: string; text: string; style?: CSSProperties };

/* The unified "real app" product frame: cream interior, monospace browser bar
   with a firm-tier tag, deep shadow, and optional floating status chips that
   drift at the corners. Used for every product scene across the site. */
export function AppFrame({
  url,
  tag = "firm tier · 3 seats",
  chips = [],
  scrollHeight = 470,
  children,
}: {
  url: string;
  tag?: string;
  chips?: FloatChip[];
  /** Height of the internally-scrollable viewport — taller scenes scroll within. */
  scrollHeight?: number;
  children: React.ReactNode;
}) {
  return (
    <div style={{ position: "relative" }}>
      {chips.map((c, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            zIndex: 5,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#fff",
            borderRadius: 11,
            padding: "8px 12px",
            boxShadow: "0 16px 34px -12px rgba(15,23,42,.35)",
            font: `600 11.5px ${F}`,
            color: T.ink,
            ...c.style,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: c.dot, flexShrink: 0 }} />
          {c.text}
        </div>
      ))}

      <div className="app-frame" style={{ position: "relative", background: T.cream, overflow: "hidden", boxShadow: "0 50px 100px -40px rgba(15,23,42,.45)" }}>
        <div style={{ height: 40, background: T.creamBar, borderBottom: `1px solid ${T.creamBorder}`, display: "flex", alignItems: "center", gap: 7, padding: "0 14px" }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0584F" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0A93F" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#54A85B" }} />
          <span style={{ margin: "0 auto 0 16px", font: `500 11px ${MONO}`, color: T.inkMuted }}>{url}</span>
          <span style={{ marginLeft: "auto", font: `600 10px ${MONO}`, color: T.inkMuted, display: "inline-flex", alignItems: "center", gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.violet }} /> {tag}
          </span>
        </div>
        <div className="app-scroll" style={{ maxHeight: scrollHeight }}>{children}</div>
      </div>
    </div>
  );
}
