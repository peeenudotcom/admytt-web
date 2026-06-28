import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { T, F } from "@/lib/theme";
import { AppFrame, type FloatChip } from "./AppFrame";

/* Reusable homepage product section: copy + a framed live product screen.
   layout "split" = text beside frame; "stacked" = centered text above a
   full-width frame (use for the largest / tabbed scenes). */
export function ProductScene({
  id,
  eyebrow,
  badge,
  title,
  body,
  points = [],
  cta,
  reverse = false,
  frameUrl,
  chips = [],
  layout = "split",
  bg = T.surface,
  children,
}: {
  id?: string;
  eyebrow: string;
  badge?: string;
  title: string;
  body: string;
  points?: string[];
  cta?: { label: string; href: string };
  reverse?: boolean;
  frameUrl: string;
  chips?: FloatChip[];
  layout?: "split" | "stacked";
  bg?: string;
  children: React.ReactNode;
}) {
  const Copy = (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ font: `700 13px ${F}`, color: T.primary }}>{eyebrow}</span>
        {badge && <span style={{ font: `700 9.5px ${F}`, letterSpacing: ".04em", color: T.violet, background: T.violetBg, border: `1px solid ${T.violetBorder}`, borderRadius: 999, padding: "3px 9px" }}>{badge}</span>}
      </div>
      <h2 data-h2 style={{ font: `800 ${layout === "stacked" ? "36px/44px" : "32px/40px"} ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: 14, maxWidth: layout === "stacked" ? 720 : undefined, ...(layout === "stacked" ? { marginLeft: "auto", marginRight: "auto" } : {}) }}>{title}</h2>
      <p style={{ font: `400 16.5px/26px ${F}`, color: T.muted, marginBottom: 20, maxWidth: layout === "stacked" ? 640 : undefined, ...(layout === "stacked" ? { marginLeft: "auto", marginRight: "auto" } : {}) }}>{body}</p>
      {points.length > 0 && (
        <div style={{ display: layout === "stacked" ? "flex" : "flex", flexWrap: "wrap", justifyContent: layout === "stacked" ? "center" : "flex-start", gap: layout === "stacked" ? "10px 22px" : 10, flexDirection: layout === "stacked" ? "row" : "column", marginBottom: 22 }}>
          {points.map((p) => (
            <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 9, font: `500 14.5px/22px ${F}`, color: T.text }}>
              <span style={{ color: T.primary, fontWeight: 800, marginTop: 1 }}>✓</span> {p}
            </div>
          ))}
        </div>
      )}
      {cta && (
        <Link href={cta.href} style={{ display: "inline-flex", alignItems: "center", gap: 7, font: `700 14.5px ${F}`, color: T.primary, textDecoration: "none" }}>
          {cta.label} <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );

  const Frame = <AppFrame url={frameUrl} chips={chips}>{children}</AppFrame>;

  return (
    <section id={id} style={{ background: bg, padding: "80px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        {layout === "stacked" ? (
          <>
            <div style={{ textAlign: "center", marginBottom: 36 }}>{Copy}</div>
            {Frame}
          </>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 52, alignItems: "center" }} data-ai="1">
            <div style={{ order: reverse ? 2 : 1 }}>{Copy}</div>
            <div style={{ order: reverse ? 1 : 2 }}>{Frame}</div>
          </div>
        )}
      </div>
    </section>
  );
}
