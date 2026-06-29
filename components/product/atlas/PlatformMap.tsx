import { Database } from "lucide-react";
import { T, F, MONO } from "@/lib/theme";
import { platformGroups } from "@/lib/atlas";

/* A compact system map: six module groups feeding one central student record. */
function GroupCard({ g }: { g: (typeof platformGroups)[number] }) {
  return (
    <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 13, padding: "16px 16px 14px" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
        <span style={{ font: `800 14px ${F}`, color: T.text, letterSpacing: "-.01em" }}>{g.label}</span>
        <span style={{ font: `500 11px ${F}`, color: T.subtle }}>{g.blurb}</span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
        {g.modules.map((m) => (
          <span key={m} style={{ font: `600 11px ${F}`, color: T.muted, background: T.surface2, border: `1px solid ${T.border}`, borderRadius: 7, padding: "4px 9px" }}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export default function PlatformMap() {
  const top = platformGroups.slice(0, 3);
  const bottom = platformGroups.slice(3, 6);
  return (
    <div>
      <div data-atlas-map="1">{top.map((g) => <GroupCard key={g.id} g={g} />)}</div>

      {/* Central hub */}
      <div style={{ display: "flex", justifyContent: "center", position: "relative", margin: "18px 0" }}>
        <div aria-hidden style={{ position: "absolute", top: -18, bottom: -18, width: 2, background: `linear-gradient(${T.indigoBorder}, ${T.primary}, ${T.indigoBorder})` }} />
        <div style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 11, background: T.text, color: "#fff", borderRadius: 14, padding: "14px 22px", boxShadow: "0 20px 40px -22px rgba(15,23,42,.6)" }}>
          <span style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(124,58,237,.25)", color: "#C4B5FD", display: "flex", alignItems: "center", justifyContent: "center" }}><Database size={18} /></span>
          <div>
            <div style={{ font: `800 15px ${F}` }}>One student record</div>
            <div style={{ font: `500 10.5px ${MONO}`, color: "#9fb0e0", letterSpacing: ".03em" }}>every group reads &amp; writes here</div>
          </div>
        </div>
      </div>

      <div data-atlas-map="1">{bottom.map((g) => <GroupCard key={g.id} g={g} />)}</div>
    </div>
  );
}
