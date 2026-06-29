import { Sparkles, ListChecks, AlertTriangle, Gauge, PenLine, UserCheck, ShieldOff } from "lucide-react";
import { T, F } from "@/lib/theme";
import { AICommandScreen } from "./Screens";

const capabilities = [
  { icon: ListChecks, title: "Prioritised next actions", desc: "A ranked worklist for each person, built from real activity — not a blank inbox." },
  { icon: AlertTriangle, title: "Urgent file alerts", desc: "Missing documents, expiring offers and approaching deadlines surfaced before they bite." },
  { icon: Gauge, title: "Lead scoring", desc: "High-intent enquiries identified so the team contacts the right students first." },
  { icon: PenLine, title: "Follow-up preparation", desc: "Draft follow-ups prepared in context, ready for a person to review and send." },
];

const guardrails = [
  { icon: UserCheck, title: "Human approval", desc: "Every suggestion is tied to a real record and waits for a person to act." },
  { icon: ShieldOff, title: "No autonomous destructive actions", desc: "adMYTT never deletes, sends or files on its own. The AI advises; your team decides." },
];

export default function ProductAICentre() {
  return (
    <section id="ai" style={{ background: T.surface, padding: "84px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ maxWidth: 720, marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.violetBg, border: `1px solid ${T.violetBorder}`, color: T.violet, borderRadius: 999, padding: "6px 13px", font: `700 12px ${F}`, marginBottom: 16 }}>
            <Sparkles size={13} /> AI Command Centre
          </div>
          <h2 data-h2 style={{ font: `800 36px/44px ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: 14 }}>
            AI that helps your team decide <span className="hl">what to do next</span>.
          </h2>
          <p style={{ font: `400 18px/28px ${F}`, color: T.muted }}>
            adMYTT analyses workspace activity to identify high-intent leads, overdue follow-ups, missing documents, approaching deadlines and stalled applications. Every suggested action is tied to a real record and remains under human control.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 40, alignItems: "start" }} data-aigrid="1">
          <div className="app-frame" style={{ background: "#fff", overflow: "hidden", boxShadow: "0 50px 100px -42px rgba(15,23,42,.45)" }}>
            <div style={{ height: 40, background: T.creamBar, borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", gap: 7, padding: "0 14px" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0584F" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E0A93F" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#54A85B" }} />
              <span style={{ margin: "0 auto 0 16px", font: `500 11px ${F}`, color: T.subtle }}>app.admytt.com/ai</span>
            </div>
            <AICommandScreen />
          </div>

          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} data-aicaps="1">
              {capabilities.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="card-hover" style={{ background: "#fff", borderRadius: 12, padding: 16 }}>
                    <span style={{ width: 32, height: 32, borderRadius: 9, background: T.indigoBg, color: T.primary, display: "flex", alignItems: "center", justifyContent: "center" }}><Icon size={15} /></span>
                    <div style={{ font: `700 14px ${F}`, color: T.text, margin: "11px 0 5px" }}>{c.title}</div>
                    <div style={{ font: `400 12.5px/18px ${F}`, color: T.muted }}>{c.desc}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 12, background: "#0F172A", borderRadius: 14, padding: "18px 20px" }}>
              <div style={{ font: `700 11px ${F}`, letterSpacing: ".06em", color: "#7e8ed4", marginBottom: 14 }}>HUMAN-CONTROLLED BY DESIGN</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {guardrails.map((g) => {
                  const Icon = g.icon;
                  return (
                    <div key={g.title} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <span style={{ width: 30, height: 30, flexShrink: 0, borderRadius: 9, background: "rgba(95,208,166,.14)", color: "#5fd0a6", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon size={15} /></span>
                      <div>
                        <div style={{ font: `700 13.5px ${F}`, color: "#fff", marginBottom: 3 }}>{g.title}</div>
                        <div style={{ font: `400 12.5px/18px ${F}`, color: "#aab4d6" }}>{g.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
