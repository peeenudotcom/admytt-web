import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { PageHero, Band, SectionHeading, CtaBand } from "@/components/ui";
import { Integrations } from "@/components/home/StaticSections";
import { badgeStyle } from "@/lib/content";

export const metadata: Metadata = {
  title: "Product overview",
  description:
    "One connected platform for education consultancies: leads, counselling, admissions, documents, Course Finder, visa, Partner Hub, finance, and reporting — all on one student record.",
  alternates: { canonical: "/product" },
};

type ModuleDetail = {
  id: string;
  icon: string;
  bg: string;
  fg: string;
  title: string;
  outcome: string;
  capabilities: string[];
};

const modules: ModuleDetail[] = [
  { id: "leads", icon: "LP", bg: "#EAF0FF", fg: "#2453D4", title: "Lead & pipeline management", outcome: "Capture, qualify, and route every enquiry the moment it arrives.", capabilities: ["Capture from web forms, WhatsApp, email, and walk-ins", "Auto-assign by branch, counsellor, and rule", "Lead scoring that surfaces high-intent students", "A pipeline built around education stages, not generic deals"] },
  { id: "counselling", icon: "CF", bg: "#EEF0FF", fg: "#212177", title: "Counselling & follow-ups", outcome: "Keep every conversation and never miss the next action.", capabilities: ["Full conversation history on each record", "Reminders and next actions that follow the student", "Course recommendations captured in context", "Today's prioritised follow-up list per counsellor"] },
  { id: "admissions", icon: "AA", bg: "#E6F6EF", fg: "#0F9F6E", title: "Admissions & applications", outcome: "Move every application forward without losing context.", capabilities: ["Track institutions, programmes, intakes, and status", "Status from draft to submitted to offer", "Deadline alerts before intake dates bite", "Owner and progress visible on every file"] },
  { id: "documents", icon: "DM", bg: "#FBE9E9", fg: "#CB0000", title: "Document management", outcome: "See exactly what is missing, rejected, verified, and versioned.", capabilities: ["Readiness checklist per application", "Versioned uploads with review status", "Rejections flagged with a clear reason", "Private, workspace-scoped storage"] },
  { id: "course-finder", icon: "CF", bg: "#FCEFDD", fg: "#D97706", title: "Course Finder", outcome: "Match students to the right programmes, intakes, and institutions.", capabilities: ["Filter by country, intake, fees, and entry criteria", "Compare deadlines and requirements side by side", "Shortlist in seconds and share with the student", "Entry-requirement checks against the profile"] },
  { id: "visa", icon: "VV", bg: "#EAF0FF", fg: "#2453D4", title: "Visa & visitor visa", outcome: "Run visa work with clear ownership and fewer missed requirements.", capabilities: ["Country-specific checklists and filing stages", "Document status tracked to each case", "Ownership and decisions recorded", "Visitor-visa workflows alongside student visas"] },
  { id: "partner-hub", icon: "PH", bg: "#EEF0FF", fg: "#212177", title: "Partner Hub", outcome: "Scale a partner network without surrendering control.", capabilities: ["Onboard sub-agents with scoped access", "Clear lead ownership and compliance", "Agreements, resources, and courses in one place", "Commission tracking per partner"] },
  { id: "finance", icon: "FN", bg: "#E6F6EF", fg: "#0F9F6E", title: "Finance", outcome: "Connect student operations with financial status.", capabilities: ["Fees, receipts, balances, and invoices on the record", "Razorpay payments reconciled automatically", "Proformas and invoices generated in a click", "Outstanding balances surfaced for follow-up"] },
  { id: "reports", icon: "RA", bg: "#FCEFDD", fg: "#D97706", title: "Reports & automation", outcome: "Run the consultancy on live numbers and automated routing.", capabilities: ["Dashboards for conversion and revenue by branch", "Automated routing, notifications, and reminders", "Risk and outstanding-work surfaced daily", "Outcomes that roll up to owner reporting"] },
];

export default function ProductPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Product overview"
        title="One platform for the whole student journey"
        lead="adMYTT brings every team — counselling, admissions, documents, visa, finance, and partners — onto one student record, from first enquiry to confirmed enrolment. No re-keying, no lost context."
        secondary={{ label: "See pricing", href: "/pricing" }}
      />

      <Band bg="#fff" border={false}>
        <SectionHeading
          eyebrow="One connected record"
          title="The student record is the single source of truth"
          lead="Instead of stitching together spreadsheets, inboxes, and chat threads, every interaction attaches to one record that each team can trust."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }} data-platform="1">
          {["Enquiry & qualification", "Counselling & course selection", "Applications & documents", "Finance, visa & enrolment"].map((t, i) => (
            <div key={t} style={{ background: "#F6F8FC", border: "1px solid #E9EEF6", borderRadius: 12, padding: 22 }}>
              <span style={badgeStyle("info")}>{`Step ${i + 1}`}</span>
              <div style={{ font: "700 15.5px var(--font-manrope)", color: "#0B1230", margin: "13px 0 0" }}>{t}</div>
            </div>
          ))}
        </div>
      </Band>

      <Band bg="#F6F8FC">
        <SectionHeading eyebrow="The platform" title="Every product area, built for education work" lead="Each module is purpose-built around how education teams operate — not a generic CRM with custom fields bolted on." />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {modules.map((m) => (
            <div key={m.id} id={m.id} style={{ scrollMarginTop: 90, background: "#fff", border: "1px solid #E9EEF6", borderRadius: 14, padding: 30, display: "grid", gridTemplateColumns: ".7fr 1.3fr", gap: 28 }} data-teamview="1">
              <div>
                <span style={{ display: "flex", width: 46, height: 46, borderRadius: 11, alignItems: "center", justifyContent: "center", font: "700 18px var(--font-manrope)", background: m.bg, color: m.fg }}>{m.icon}</span>
                <h3 style={{ font: "700 21px/28px var(--font-manrope)", color: "#0B1230", margin: "16px 0 8px" }}>{m.title}</h3>
                <p style={{ font: "400 15px/23px var(--font-inter)", color: "#475569" }}>{m.outcome}</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignContent: "start" }}>
                {m.capabilities.map((c) => (
                  <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: 10, background: "#F6F8FC", border: "1px solid #EAEFF7", borderRadius: 10, padding: "12px 14px", font: "500 14px/20px var(--font-inter)", color: "#334155" }}>
                    <span style={{ color: "#2453D4", fontWeight: 700, marginTop: 1 }}>✓</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <Link href="/ai" style={{ font: "700 15px var(--font-manrope)", color: "#212177", textDecoration: "none" }}>See how the AI Command Centre assists each module →</Link>
        </div>
      </Band>

      <Integrations />

      <CtaBand />
    </PageShell>
  );
}
