import type { CSSProperties } from "react";

/** Control-button / live-pill styles for dark and light scene chromes. */
export const onDark: CSSProperties = {
  width: 28,
  height: 28,
  borderRadius: 7,
  border: "1px solid rgba(255,255,255,.22)",
  background: "rgba(255,255,255,.1)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  font: "600 11px var(--font-inter)",
};
export const onLight: CSSProperties = {
  width: 30,
  height: 30,
  borderRadius: 7,
  border: "1px solid #E4EAF3",
  background: "#fff",
  color: "#0F172A",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  font: "600 12px var(--font-inter)",
};
export const pillDark: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  font: "700 10px var(--font-inter)",
  color: "#bfe6d3",
  background: "rgba(15,159,110,.18)",
  border: "1px solid rgba(15,159,110,.32)",
  borderRadius: 999,
  padding: "3px 9px",
};
export const pillLight: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  font: "700 10px var(--font-inter)",
  color: "#0F9F6E",
  background: "#E6F6EF",
  border: "1px solid #BFE6D3",
  borderRadius: 999,
  padding: "3px 9px",
};
