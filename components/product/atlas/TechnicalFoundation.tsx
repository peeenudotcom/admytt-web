import { T, F, MONO } from "@/lib/theme";
import { techSpecs } from "@/lib/atlas";

/* Product-spec style listing — not promotional cards. */
export default function TechnicalFoundation() {
  return (
    <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 16, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: `1px solid ${T.border}`, background: T.creamBar }}>
        <span style={{ font: `700 11px ${MONO}`, letterSpacing: ".06em", color: T.subtle }}>PLATFORM SPECIFICATION</span>
        <span style={{ font: `600 11px ${MONO}`, color: T.subtle }}>{techSpecs.filter((s) => s.status === "Available").length} available · {techSpecs.filter((s) => s.status === "Planned").length} planned</span>
      </div>
      <div>
        {techSpecs.map((s, i) => (
          <div key={s.label} style={{ display: "grid", gridTemplateColumns: "220px 1fr 110px", gap: 16, alignItems: "center", padding: "15px 20px", borderTop: i ? `1px solid ${T.borderSubtle}` : "none" }} data-caps="1">
            <span style={{ font: `700 13.5px ${F}`, color: T.text }}>{s.label}</span>
            <span style={{ font: `400 13px/19px ${F}`, color: T.muted }}>{s.desc}</span>
            <span style={{ justifySelf: "start", font: `700 10px ${MONO}`, letterSpacing: ".04em", borderRadius: 999, padding: "4px 10px", ...(s.status === "Available" ? { background: "#E4F7EC", color: "#0F7B43" } : { background: T.surface2, color: T.subtle }) }}>{s.status === "Available" ? "● AVAILABLE" : "○ PLANNED"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
