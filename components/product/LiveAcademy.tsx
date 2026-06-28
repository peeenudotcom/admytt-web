"use client";

import { useState } from "react";
import { QrCode, GraduationCap, CalendarCheck, Wallet } from "lucide-react";
import { T, F, MONO, warmBadge } from "@/lib/theme";

/* Academy — optional expansion module. Tabs: Enquiries | Batches | Attendance | Fees. */

type Tab = "enquiries" | "batches" | "attendance" | "fees";

function Row({ left, sub, right, tone }: { left: string; sub: string; right: string; tone: "good" | "warn" | "info" | "bad" | "violet" }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, padding: "11px 13px" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: `700 12px ${F}`, color: T.text }}>{left}</div>
        <div style={{ font: `500 9.5px ${MONO}`, color: T.subtle }}>{sub}</div>
      </div>
      <span style={{ ...warmBadge(tone) }}>{right}</span>
    </div>
  );
}

export default function LiveAcademy() {
  const [tab, setTab] = useState<Tab>("enquiries");
  const tabs: [Tab, string, typeof QrCode][] = [
    ["enquiries", "Enquiries", QrCode],
    ["batches", "Batches", GraduationCap],
    ["attendance", "Attendance", CalendarCheck],
    ["fees", "Fees", Wallet],
  ];
  const seg = (on: boolean): React.CSSProperties => ({ font: `700 11.5px ${F}`, border: "none", borderRadius: 8, padding: "7px 14px", cursor: "pointer", background: on ? "#fff" : "transparent", color: on ? T.text : T.muted, boxShadow: on ? "0 1px 3px rgba(15,23,42,.12)" : "none", display: "inline-flex", alignItems: "center", gap: 6 });

  return (
    <div style={{ background: "#F8FAFC", padding: 18, minHeight: 380 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <div style={{ display: "inline-flex", background: "#EEF1F6", border: `1px solid ${T.border}`, borderRadius: 10, padding: 4, flexWrap: "wrap" }}>
          {tabs.map(([t, label, Icon]) => (
            <button key={t} onClick={() => setTab(t)} style={seg(tab === t)} aria-pressed={tab === t}><Icon size={13} /> {label}</button>
          ))}
        </div>
        <span style={{ marginLeft: "auto", ...warmBadge("violet") }}>ACADEMY · ADD-ON</span>
      </div>

      {tab === "enquiries" && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
            {[["38", "New enquiries", T.primary], ["12", "QR / campus", "#7C3AED"], ["9", "Converted", "#0F9F6E"]].map(([v, l, c]) => (
              <div key={l} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "11px 14px" }}>
                <div style={{ font: `800 20px ${F}`, color: c }}>{v}</div>
                <div style={{ font: `500 10.5px ${F}`, color: T.muted }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            <Row left="Sneha P. · IELTS coaching" sub="QR · campus fair" right="NEW" tone="info" />
            <Row left="Mohit R. · PTE evening batch" sub="Instagram campaign" right="FOLLOW-UP" tone="warn" />
            <Row left="Anita K. · Spoken English" sub="Walk-in" right="ENROLLED" tone="good" />
          </div>
        </>
      )}

      {tab === "batches" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
          <Row left="IELTS · Morning" sub="batch IELTS-AM-14 · starts 24 Jun · 18/20 seats" right="ENROLLING" tone="info" />
          <Row left="PTE · Evening" sub="batch PTE-EV-07 · starts 1 Jul · 12/20 seats" right="ENROLLING" tone="info" />
          <Row left="Spoken English · Weekend" sub="batch SE-WK-03 · running · 20/20 seats" right="FULL" tone="good" />
          <Row left="IELTS · Crash course" sub="batch IELTS-CR-02 · completed" right="ENDED" tone="violet" />
        </div>
      )}

      {tab === "attendance" && (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, padding: "11px 14px", marginBottom: 12 }}>
            <span style={{ font: `700 12px ${F}`, color: T.text }}>IELTS · Morning</span>
            <span style={{ font: `500 10px ${MONO}`, color: T.subtle }}>session · 24 Jun</span>
            <span style={{ marginLeft: "auto", ...warmBadge("good") }}>16 PRESENT</span>
            <span style={{ ...warmBadge("bad") }}>2 ABSENT</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
            {[["Aditi R.", true], ["Rohan M.", true], ["Sana K.", false], ["Dev P.", true]].map(([n, present]) => (
              <div key={n as string} style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: `1px solid ${T.border}`, borderRadius: 9, padding: "9px 12px" }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: present ? "#0F9F6E" : "#DC2626" }} />
                <span style={{ flex: 1, font: `600 12px ${F}`, color: T.text }}>{n}</span>
                <span style={{ ...warmBadge(present ? "good" : "bad") }}>{present ? "PRESENT" : "ABSENT"}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {tab === "fees" && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 12 }}>
            {[["₹4.2L", "Collected", "#0F9F6E"], ["₹86k", "Outstanding", "#EA580C"], ["7", "Certificates due", "#7C3AED"]].map(([v, l, c]) => (
              <div key={l} style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "11px 14px" }}>
                <div style={{ font: `800 19px ${F}`, color: c }}>{v}</div>
                <div style={{ font: `500 10.5px ${F}`, color: T.muted }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            <Row left="Aditi R. · IELTS Morning" sub="₹18,000 · 2 instalments" right="PAID" tone="good" />
            <Row left="Rohan M. · PTE Evening" sub="₹6,000 due · reminder sent" right="DUE" tone="warn" />
            <Row left="Sana K. · Spoken English" sub="₹12,000 · receipt RCPT-3391" right="PAID" tone="good" />
          </div>
        </>
      )}
    </div>
  );
}
