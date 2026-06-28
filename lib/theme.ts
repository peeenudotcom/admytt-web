/* ===========================================================================
   adMYTT marketing design tokens — mirror the real product (tarahut-ams).
   Indigo primary, violet AI accent, slate neutrals, Inter.
   =========================================================================== */
export const T = {
  bg: "#F8FAFC",
  surface: "#FFFFFF",
  surface2: "#F1F5F9",
  border: "#E2E8F0",
  borderSubtle: "#F1F5F9",
  text: "#0F172A",
  muted: "#475569",
  subtle: "#94A3B8",
  primary: "#4F46E5",
  primary500: "#6366F1",
  primary700: "#4338CA",
  indigoBg: "#EEF2FF",
  indigoBorder: "#E0E7FF",
  violet: "#7C3AED",
  violetBg: "#F5F3FF",
  violetBorder: "#EDE9FE",
  blue: "#2563EB",
  green: "#10B981",
  success: "#047857",
  successBg: "#ECFDF5",
  warning: "#B45309",
  warningBg: "#FFFBEB",
  danger: "#B91C1C",
  dangerBg: "#FEF2F2",
  info: "#1D4ED8",
  infoBg: "#EFF6FF",
  // dark AI panel gradient
  aiFrom: "#1E1B4B",
  aiTo: "#312E81",
  // warm "real app" surface (anyimmi-style product frames)
  cream: "#F7F4EE",
  creamBar: "#EFEBE2",
  creamBorder: "#E7E2D6",
  ink: "#1C1917",
  inkMuted: "#6B6357",
  canvas: "#0A0A0F",
} as const;

export const F = "var(--font-inter), system-ui, sans-serif";
export const MONO = "ui-monospace, SFMono-Regular, Menlo, monospace";

/** Warm, monospace status badge for the cream product frames. */
export function warmBadge(tone: "warn" | "info" | "good" | "bad" | "violet"): React.CSSProperties {
  const m = {
    warn: { background: "#FBF1DE", color: "#9A6700" },
    info: { background: "#E8EBFF", color: "#4F46E5" },
    good: { background: "#E4F7EC", color: "#0F7B43" },
    bad: { background: "#FBE7E4", color: "#B42318" },
    violet: { background: "#F0EBFB", color: "#7C3AED" },
  }[tone];
  return { font: `600 9px ${MONO}`, letterSpacing: ".04em", borderRadius: 5, padding: "3px 8px", whiteSpace: "nowrap", ...m };
}

/** Primary CTA gradient (indigo → blue), matching the product's btn-primary. */
export const ctaGradient = `linear-gradient(135deg,${T.primary},${T.blue})`;
export const ctaShadow = "0 12px 30px -8px rgba(79,70,229,.5)";

export type BadgeTone = "good" | "warn" | "bad" | "info" | "violet" | "plain";
export function pill(tone: BadgeTone): React.CSSProperties {
  const m: Record<BadgeTone, React.CSSProperties> = {
    good: { background: T.successBg, color: T.success },
    warn: { background: T.warningBg, color: T.warning },
    bad: { background: T.dangerBg, color: T.danger },
    info: { background: T.infoBg, color: T.info },
    violet: { background: T.violetBg, color: T.violet },
    plain: { background: T.surface2, color: T.muted },
  };
  return { font: `700 10.5px ${F}`, borderRadius: 999, padding: "4px 10px", whiteSpace: "nowrap", ...m[tone] };
}
