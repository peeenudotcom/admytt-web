import { Sparkles, ShieldCheck } from "lucide-react";
import { T, F } from "@/lib/theme";
import { BrowserFrame } from "@/components/product/Screens";
import LiveAICommand from "@/components/product/LiveAICommand";

export default function AiOps() {
  return (
    <section id="ai" style={{ background: T.bg, padding: "84px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px", display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 48, alignItems: "center" }} data-ai="1">
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.violetBg, border: `1px solid ${T.violetBorder}`, color: T.violet, borderRadius: 999, padding: "6px 13px", font: `700 12px ${F}`, marginBottom: 18 }}>
            <Sparkles size={13} /> AI Ops Command Center
          </div>
          <h2 data-h2 style={{ font: `800 38px/45px ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: 16 }}>
            Your team opens the app and already knows what to do.
          </h2>
          <p style={{ font: `400 17px/27px ${F}`, color: T.muted, marginBottom: 22 }}>
            adMYTT scores leads, surfaces urgent files, flags missing documents, and drafts follow-ups — each tied to a real action your team reviews and approves.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 24 }}>
            {[
              "Prioritised next actions, not a blank inbox",
              "Urgent visa & document alerts before deadlines bite",
              "Follow-up drafts ready for one-click review",
            ].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10, font: `500 15px/22px ${F}`, color: T.text }}>
                <span style={{ color: T.violet, fontWeight: 800, marginTop: 1 }}>✓</span> {t}
              </div>
            ))}
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: T.violetBg, borderRadius: 10, padding: "11px 14px", font: `700 13px ${F}`, color: T.violet }}>
            <ShieldCheck size={16} /> AI suggests. Your team decides.
          </div>
        </div>
        <BrowserFrame url="app.admytt.com/dashboard">
          <LiveAICommand />
        </BrowserFrame>
      </div>
    </section>
  );
}
