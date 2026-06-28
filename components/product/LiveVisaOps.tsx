"use client";

import { useState } from "react";
import { Stamp, Plane, Check } from "lucide-react";
import { T, F, MONO, warmBadge } from "@/lib/theme";

/* Visa Operations — Study Visa / Visitor Visa segmented control. Visitor visa is
   a first-class workflow, not buried inside study visa. */

function Field({ label, value, tone }: { label: string; value: string; tone?: "good" | "warn" | "info" | "bad" }) {
  return (
    <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, padding: "10px 12px" }}>
      <div style={{ font: `600 8.5px ${MONO}`, letterSpacing: ".04em", color: T.inkMuted, marginBottom: 4 }}>{label.toUpperCase()}</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
        <span style={{ font: `600 12px ${F}`, color: T.text }}>{value}</span>
        {tone && <span style={{ width: 7, height: 7, borderRadius: "50%", background: tone === "good" ? "#0F9F6E" : tone === "warn" ? "#EA580C" : tone === "bad" ? "#DC2626" : T.primary }} />}
      </div>
    </div>
  );
}

function Check_({ label, done }: { label: string; done: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", border: `1px solid ${T.border}`, borderRadius: 9, background: done ? "#F4FAF5" : "#fff" }}>
      <span style={{ width: 20, height: 20, borderRadius: 6, background: done ? "#E4F7EC" : "#F1F5F9", color: done ? "#0F7B43" : T.subtle, display: "flex", alignItems: "center", justifyContent: "center" }}><Check size={12} /></span>
      <span style={{ font: `600 11.5px ${F}`, color: T.text }}>{label}</span>
    </div>
  );
}

const studyChecks: [string, boolean][] = [["CAS from Leeds", true], ["Financial documents", true], ["TB test", true], ["Biometrics", true], ["Online application", false], ["Submit to UKVI", false]];
const visitorChecks: [string, boolean][] = [["Invitation letter", true], ["Financial documents", true], ["Travel insurance", false], ["Cover letter", true], ["Appointment booked", true], ["Submit application", false]];

export default function LiveVisaOps() {
  const [tab, setTab] = useState<"study" | "visitor">("visitor");

  const seg = (on: boolean): React.CSSProperties => ({ font: `700 12.5px ${F}`, border: "none", borderRadius: 8, padding: "8px 18px", cursor: "pointer", background: on ? "#fff" : "transparent", color: on ? T.text : T.muted, boxShadow: on ? "0 1px 3px rgba(15,23,42,.12)" : "none", display: "inline-flex", alignItems: "center", gap: 7 });

  return (
    <div style={{ background: "#F8FAFC", padding: 18, minHeight: 420 }}>
      {/* segmented control */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ display: "inline-flex", background: "#EEF1F6", border: `1px solid ${T.border}`, borderRadius: 10, padding: 4 }}>
          <button onClick={() => setTab("study")} style={seg(tab === "study")} aria-pressed={tab === "study"}><Stamp size={14} /> Study Visa</button>
          <button onClick={() => setTab("visitor")} style={seg(tab === "visitor")} aria-pressed={tab === "visitor"}><Plane size={14} /> Visitor Visa</button>
        </div>
        <span style={{ marginLeft: "auto", ...warmBadge(tab === "visitor" ? "info" : "violet") }}>{tab === "visitor" ? "FAMILY VISIT · CANADA" : "STUDENT · UK"}</span>
      </div>

      {tab === "study" ? (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "13px 16px", marginBottom: 12 }}>
            <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#EEF2FF", color: T.primary, display: "flex", alignItems: "center", justifyContent: "center", font: `700 12px ${F}` }}>PS</span>
            <div style={{ flex: 1 }}>
              <div style={{ font: `700 13px ${F}`, color: T.text }}>Priya Sharma · UK Student visa</div>
              <div style={{ font: `500 10px ${MONO}`, color: T.subtle }}>#STU-2041 · owner Aisha Khan</div>
            </div>
            <span style={{ ...warmBadge("warn") }}>READY TO FILE</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
            <Field label="CAS" value="Received · Leeds" tone="good" />
            <Field label="Financials" value="Verified" tone="good" />
            <Field label="Biometrics" value="5 July · booked" tone="info" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 9 }}>
            {studyChecks.map(([l, d]) => <Check_ key={l} label={l} done={d} />)}
          </div>
        </>
      ) : (
        <>
          {/* visitor header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "13px 16px", marginBottom: 12 }}>
            <span style={{ width: 34, height: 34, borderRadius: "50%", background: "#F0EBFB", color: T.violet, display: "flex", alignItems: "center", justifyContent: "center", font: `700 12px ${F}` }}>RI</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ font: `700 13px ${F}`, color: T.text }}>Ramesh Iyer <span style={{ font: `500 10px ${MONO}`, color: T.subtle }}>+2 travellers (spouse, child)</span></div>
              <div style={{ font: `500 10px ${MONO}`, color: T.subtle }}>#VV-1188 · Canada · family visit · 12–26 Aug</div>
            </div>
            <span style={{ ...warmBadge("info") }}>FILED · AWAITING DECISION</span>
          </div>
          {/* fields */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
            <Field label="Sponsor / host" value="Sister · Toronto" tone="good" />
            <Field label="Invitation letter" value="Received" tone="good" />
            <Field label="Financial documents" value="Verified" tone="good" />
            <Field label="Travel insurance" value="Pending" tone="warn" />
            <Field label="Appointment" value="8 Aug · biometrics" tone="info" />
            <Field label="Payment" value="Paid · ₹8,000" tone="good" />
          </div>
          {/* checklist + footer */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 9, marginBottom: 12 }}>
            {visitorChecks.map(([l, d]) => <Check_ key={l} label={l} done={d} />)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, padding: "11px 14px" }}>
            <span style={{ font: `500 10.5px ${MONO}`, color: T.inkMuted }}>OWNER</span>
            <span style={{ font: `600 12px ${F}`, color: T.text }}>Vikram S.</span>
            <span style={{ marginLeft: 16, font: `500 10.5px ${MONO}`, color: T.inkMuted }}>NEXT</span>
            <span style={{ font: `600 12px ${F}`, color: T.text }}>Submit application</span>
            <span style={{ marginLeft: "auto", ...warmBadge("info") }}>OUTCOME: PENDING</span>
          </div>
        </>
      )}
    </div>
  );
}
