import { T, F, MONO, pill, type BadgeTone } from "@/lib/theme";

/* A lightweight but authentic adMYTT app screen, generated from a data spec.
   Used for modules that don't have a dedicated interactive scene. All data is
   sanitized and fictional; a "Demo data" marker keeps that explicit. */

export type MockRow = {
  ab?: string;
  accent?: string;
  lead: string;
  sub?: string;
  mid?: string;
  tag?: string;
  tone?: BadgeTone;
};

export type MockMetric = { v: string; l: string; c?: string };

export function ProductMock({
  title,
  subtitle,
  headTag,
  headTone = "violet",
  metrics = [],
  rows,
  note,
  aiNote,
  minHeight = 340,
}: {
  title: string;
  subtitle?: string;
  headTag?: string;
  headTone?: BadgeTone;
  metrics?: MockMetric[];
  rows: MockRow[];
  note?: string;
  aiNote?: string;
  minHeight?: number;
}) {
  return (
    <div style={{ background: T.bg, padding: 18, minHeight }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ font: `800 17px ${F}`, color: T.text, letterSpacing: "-.01em" }}>{title}</span>
            <span style={{ font: `600 8.5px ${MONO}`, letterSpacing: ".06em", color: T.subtle, background: T.surface2, borderRadius: 5, padding: "2px 7px" }}>DEMO DATA</span>
          </div>
          {subtitle && <div style={{ font: `400 12px ${F}`, color: T.subtle, marginTop: 3 }}>{subtitle}</div>}
        </div>
        {headTag && <span style={{ marginLeft: "auto", ...pill(headTone) }}>{headTag}</span>}
      </div>

      {metrics.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${metrics.length},1fr)`, gap: 10, marginBottom: 14 }}>
          {metrics.map((m) => (
            <div key={m.l} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "12px 14px" }}>
              <div style={{ font: `800 20px ${F}`, color: m.c || T.text, letterSpacing: "-.01em" }}>{m.v}</div>
              <div style={{ font: `500 11px ${F}`, color: T.muted, marginTop: 2 }}>{m.l}</div>
            </div>
          ))}
        </div>
      )}

      <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
        {rows.map((r) => (
          <div key={r.lead} style={{ display: "flex", alignItems: "center", gap: 12, border: `1px solid ${T.border}`, borderRadius: 10, padding: "11px 13px" }}>
            <span
              style={{
                width: 30,
                height: 30,
                flexShrink: 0,
                borderRadius: r.ab ? "50%" : 8,
                background: (r.accent ? `${r.accent}1a` : T.indigoBg),
                color: r.accent || T.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                font: `700 10.5px ${F}`,
              }}
            >
              {r.ab || "•"}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: `700 12.5px ${F}`, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.lead}</div>
              {r.sub && <div style={{ font: `400 11px ${F}`, color: T.subtle }}>{r.sub}</div>}
            </div>
            {r.mid && <span style={{ font: `600 11.5px ${F}`, color: T.muted, whiteSpace: "nowrap" }}>{r.mid}</span>}
            {r.tag && <span style={{ ...pill(r.tone || "plain") }}>{r.tag}</span>}
          </div>
        ))}
      </div>

      {aiNote && (
        <div style={{ display: "flex", alignItems: "flex-start", gap: 9, marginTop: 12, background: T.violetBg, border: `1px solid ${T.violetBorder}`, borderRadius: 10, padding: "10px 12px" }}>
          <span style={{ font: `700 9px ${MONO}`, letterSpacing: ".06em", color: T.violet, background: "#fff", borderRadius: 5, padding: "3px 6px", marginTop: 1, flexShrink: 0 }}>AI</span>
          <span style={{ font: `500 11.5px/17px ${F}`, color: "#5b3da8" }}>{aiNote}</span>
        </div>
      )}
      {note && <div style={{ font: `400 11px ${F}`, color: T.subtle, marginTop: 10 }}>{note}</div>}
    </div>
  );
}
