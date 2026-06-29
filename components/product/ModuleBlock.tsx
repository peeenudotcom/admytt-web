import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { T, F } from "@/lib/theme";
import { AppFrame, type FloatChip } from "./AppFrame";

export type ModuleSpec = {
  id: string;
  name: string;
  title: string;
  body: string;
  capabilities: string[];
  href: string;
  hrefLabel?: string;
  frameUrl: string;
  scrollHeight?: number;
  chips?: FloatChip[];
  layout?: "split" | "stacked";
  reverse?: boolean;
  screen: React.ReactNode;
};

/* One module: outcome headline, explanation, real capabilities, a framed
   product screen, and a link for deeper exploration. */
export default function ModuleBlock({ m }: { m: ModuleSpec }) {
  const stacked = m.layout === "stacked";

  const Copy = (
    <div className="modrow-copy" style={{ order: m.reverse ? 2 : 1, ...(stacked ? { textAlign: "center" as const, maxWidth: 680, margin: "0 auto" } : {}) }}>
      <div style={{ font: `700 13px ${F}`, color: T.primary, marginBottom: 10 }}>{m.name}</div>
      <h3 style={{ font: `800 ${stacked ? "30px/38px" : "27px/34px"} ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: 12 }}>{m.title}</h3>
      <p style={{ font: `400 16px/25px ${F}`, color: T.muted, marginBottom: 18, ...(stacked ? { marginLeft: "auto", marginRight: "auto", maxWidth: 620 } : {}) }}>{m.body}</p>
      <div style={{ display: "flex", flexDirection: stacked ? "row" : "column", flexWrap: "wrap", justifyContent: stacked ? "center" : "flex-start", gap: stacked ? "10px 20px" : 10, marginBottom: 20 }}>
        {m.capabilities.map((c) => (
          <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: 9, font: `500 14.5px/21px ${F}`, color: T.text }}>
            <span style={{ color: T.primary, fontWeight: 800, marginTop: 1 }}>✓</span> {c}
          </div>
        ))}
      </div>
      <Link href={m.href} style={{ display: "inline-flex", alignItems: "center", gap: 7, font: `700 14.5px ${F}`, color: T.primary, textDecoration: "none" }}>
        {m.hrefLabel || "Explore in a live demo"} <ArrowRight size={15} />
      </Link>
    </div>
  );

  const Frame = (
    <div className="modrow-frame" style={{ order: m.reverse ? 1 : 2, minWidth: 0 }}>
      <AppFrame url={m.frameUrl} chips={m.chips} scrollHeight={m.scrollHeight ?? 360}>
        {m.screen}
      </AppFrame>
    </div>
  );

  return (
    <div id={m.id} style={{ scrollMarginTop: 90 }}>
      {stacked ? (
        <>
          <div style={{ marginBottom: 32 }}>{Copy}</div>
          {Frame}
        </>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.12fr", gap: 48, alignItems: "center" }} data-modrow="1">
          {Copy}
          {Frame}
        </div>
      )}
    </div>
  );
}

/* A workflow group: heading + its modules, stacked with generous spacing. */
export function ModuleGroup({ label, blurb, modules }: { label: string; blurb?: string; modules: ModuleSpec[] }) {
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
        <span style={{ font: `800 12px ${F}`, letterSpacing: ".10em", color: T.primary, textTransform: "uppercase", whiteSpace: "nowrap" }}>{label}</span>
        <span style={{ flex: 1, height: 1, background: T.border }} />
        {blurb && <span style={{ font: `500 13px ${F}`, color: T.subtle, maxWidth: 360, textAlign: "right" }}>{blurb}</span>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 72 }}>
        {modules.map((m) => (
          <ModuleBlock key={m.id} m={m} />
        ))}
      </div>
    </div>
  );
}
