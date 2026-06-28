"use client";

import { Clock, MessageSquare, FileText, AlertTriangle, CheckSquare, ChevronRight, GraduationCap } from "lucide-react";
import { T, F, MONO, warmBadge } from "@/lib/theme";
import { useReveal, stagger } from "@/lib/useReveal";

/* "Today" workspace — an actionable daily agenda (not a KPI row): overdue and
   due-today follow-ups, counselling appointments, deadlines, missing-doc alerts
   and tasks, with priority/branch filters and one-click record access. */

type Row = { icon: typeof Clock; title: string; sub: string; tag: string; tone: "bad" | "warn" | "info" | "good" | "violet"; iconC: string };

const queue: { group: string; count: number; tone: "bad" | "warn"; rows: Row[] }[] = [
  {
    group: "Overdue", count: 3, tone: "bad",
    rows: [
      { icon: Clock, title: "Follow-up · Meera Nair", sub: "offer decision · 1 day overdue", tag: "OVERDUE", tone: "bad", iconC: "#DC2626" },
      { icon: FileText, title: "Document request · Arjun Kapoor", sub: "2 documents missing", tag: "MISSING", tone: "bad", iconC: "#DC2626" },
      { icon: CheckSquare, title: "Task · verify CAS — Rahul M.", sub: "assigned to you", tag: "OVERDUE", tone: "bad", iconC: "#DC2626" },
    ],
  },
  {
    group: "Due today", count: 8, tone: "warn",
    rows: [
      { icon: Clock, title: "Follow-up · Priya Sharma", sub: "intro call · 4:00 PM", tag: "4:00 PM", tone: "warn", iconC: "#EA580C" },
      { icon: GraduationCap, title: "Application deadline · UCL", sub: "Aditi R. · submit today", tag: "DEADLINE", tone: "warn", iconC: "#EA580C" },
      { icon: AlertTriangle, title: "Missing document · Karan V.", sub: "bank statement blocks visa", tag: "ALERT", tone: "bad", iconC: "#DC2626" },
      { icon: CheckSquare, title: "Send shortlist · Neha G.", sub: "course finder · 3 picks", tag: "TASK", tone: "info", iconC: T.primary },
    ],
  },
];

const schedule: [string, string, string, string][] = [
  ["10:00", "Priya Sharma", "Counselling session", "#7C3AED"],
  ["11:30", "Arjun Kapoor", "Document review", "#2563EB"],
  ["14:00", "Meera Nair", "Offer decision call", "#EA580C"],
  ["16:00", "Rahul Mehta", "Visa preparation", "#0F9F6E"],
];

export default function LiveToday() {
  const { ref, p } = useReveal(1700);

  return (
    <div ref={ref} style={{ background: "#F8FAFC", padding: 18, minHeight: 460 }}>
      {/* filter bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <span style={{ font: `800 17px ${F}`, color: T.text, marginRight: 4 }}>Today</span>
        {[["Priority", "High"], ["Branch", "All"], ["Owner", "Me"]].map(([k, v]) => (
          <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 6, border: `1px solid ${T.border}`, background: "#fff", borderRadius: 8, padding: "6px 10px", font: `600 10.5px ${F}`, color: T.muted }}>
            {k}: <span style={{ color: T.text }}>{v}</span> <ChevronRight size={11} style={{ transform: "rotate(90deg)" }} />
          </span>
        ))}
        <span style={{ marginLeft: "auto", font: `600 10.5px ${MONO}`, color: T.subtle }}>11 items · 1 May</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 14 }}>
        {/* priority queue */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {queue.map((g, gi) => (
            <div key={g.group}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: g.tone === "bad" ? "#DC2626" : "#EA580C" }} />
                <span style={{ font: `700 9.5px ${MONO}`, letterSpacing: ".06em", color: T.inkMuted, textTransform: "uppercase" }}>{g.group} · {g.count}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {g.rows.map((r, ri) => {
                  const rv = stagger(p, gi * 4 + ri, 8);
                  const Icon = r.icon;
                  return (
                    <div key={r.title} style={{ display: "flex", alignItems: "center", gap: 11, background: "#fff", border: `1px solid ${T.border}`, borderRadius: 10, padding: "10px 12px", opacity: rv, transform: `translateY(${(1 - rv) * 8}px)` }}>
                      <span style={{ width: 28, height: 28, borderRadius: 8, background: `${r.iconC}14`, color: r.iconC, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon size={14} /></span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ font: `700 12px ${F}`, color: T.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.title}</div>
                        <div style={{ font: `500 10px ${F}`, color: T.muted }}>{r.sub}</div>
                      </div>
                      <span style={{ ...warmBadge(r.tone) }}>{r.tag}</span>
                      <ChevronRight size={14} color={T.subtle} />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* schedule */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <MessageSquare size={13} color={T.violet} />
            <span style={{ font: `700 9.5px ${MONO}`, letterSpacing: ".06em", color: T.inkMuted }}>TODAY&apos;S SCHEDULE</span>
          </div>
          <div style={{ background: "#fff", border: `1px solid ${T.border}`, borderRadius: 12, padding: "6px 0" }}>
            {schedule.map(([time, name, kind, c], i) => {
              const rv = stagger(p, i, schedule.length);
              return (
                <div key={time} style={{ display: "flex", gap: 11, padding: "11px 14px", borderTop: i ? `1px solid ${T.borderSubtle}` : "none", opacity: rv, transform: `translateX(${(1 - rv) * 8}px)` }}>
                  <span style={{ font: `700 10px ${MONO}`, color: T.inkMuted, paddingTop: 1, width: 34, flexShrink: 0 }}>{time}</span>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: c, marginTop: 4, flexShrink: 0 }} />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ font: `700 12px ${F}`, color: T.text }}>{name}</div>
                    <div style={{ font: `500 10px ${F}`, color: T.muted }}>{kind}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
