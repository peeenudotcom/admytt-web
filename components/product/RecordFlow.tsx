import { Inbox, MessagesSquare, FileCheck2, Stamp } from "lucide-react";
import { T, F } from "@/lib/theme";

/* The four connected stages of one student record — a single source of truth
   that carries context forward instead of losing it between teams. */
const stages = [
  { icon: Inbox, label: "Capture and qualify", items: ["Enquiry captured from every channel", "Scored, assigned and owned"] },
  { icon: MessagesSquare, label: "Counsel and shortlist", items: ["Conversations kept on the record", "Course shortlist agreed with the student"] },
  { icon: FileCheck2, label: "Apply and prepare", items: ["Applications tracked to each intake", "Document readiness at a glance"] },
  { icon: Stamp, label: "File and record outcomes", items: ["Study and visitor visa filing", "Decisions and enrolment recorded"] },
];

export default function RecordFlow() {
  return (
    <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} data-record="1">
      {stages.map((s, i) => {
        const Icon = s.icon;
        return (
          <div key={s.label} style={{ position: "relative", background: "#fff", border: `1px solid ${T.border}`, borderRadius: 14, padding: "22px 20px" }}>
            {i < stages.length - 1 && (
              <span aria-hidden className="record-connector" style={{ position: "absolute", top: 44, right: -16, width: 16, height: 2, background: `linear-gradient(90deg, ${T.indigoBorder}, ${T.primary})` }} />
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{ width: 38, height: 38, borderRadius: 11, background: T.indigoBg, color: T.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={18} />
              </span>
              <span style={{ font: `700 11px ${F}`, letterSpacing: ".06em", color: T.subtle }}>STEP {i + 1}</span>
            </div>
            <div style={{ font: `700 16px ${F}`, color: T.text, marginBottom: 10, letterSpacing: "-.01em" }}>{s.label}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {s.items.map((it) => (
                <div key={it} style={{ display: "flex", alignItems: "flex-start", gap: 8, font: `400 12.5px/18px ${F}`, color: T.muted }}>
                  <span style={{ color: T.primary, fontWeight: 800, marginTop: 1 }}>✓</span> {it}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
