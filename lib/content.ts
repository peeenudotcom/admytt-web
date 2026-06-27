/* ===========================================================================
   Structured content for the adMYTT marketing site.
   All copy is ported from the approved v2 design and the master build brief.
   Kept as plain data objects (per the brief: "Use structured content objects
   for repeated features, FAQs, plans, and navigation.")
   No fabricated metrics, testimonials, logos, or certifications.
   =========================================================================== */

import type { CSSProperties } from "react";

export type BadgeKind = "good" | "warn" | "bad" | "info" | "navy" | "plain";

/** Pill/badge style for a given semantic kind. */
export function badgeStyle(kind: BadgeKind | ""): CSSProperties | undefined {
  if (!kind) return { display: "none" };
  const map: Record<BadgeKind, CSSProperties> = {
    good: { background: "#E6F6EF", color: "#0F9F6E" },
    warn: { background: "#FCEFDD", color: "#D97706" },
    bad: { background: "#FBE9E9", color: "#CB0000" },
    info: { background: "#EAF0FF", color: "#2453D4" },
    navy: { background: "#EEF0FF", color: "#212177" },
    plain: { background: "#F1F5FB", color: "#475569" },
  };
  return {
    font: "700 10.5px Inter",
    borderRadius: 999,
    padding: "4px 10px",
    whiteSpace: "nowrap",
    flexShrink: 0,
    ...(map[kind as BadgeKind] || map.plain),
  };
}

/* ---- Hero capability proof (no unverified metrics) ---- */
export const capabilityProof = [
  {
    title: "Multi-tenant by design",
    desc: "Each company operates in its own isolated workspace — records never cross customers.",
  },
  {
    title: "Built for education work",
    desc: "Enquiry, counselling, applications, documents, and visa stages are first-class — not custom fields.",
  },
  {
    title: "One student record",
    desc: "Every team works from the same record, so context is never lost between people or tools.",
  },
  {
    title: "Your data stays yours",
    desc: "Export your records at any time. Role-based access keeps each person scoped to their work.",
  },
];

/* ---- Student Journey stages ---- */
export type Row = { l: string; v: string; tag: string; s: BadgeKind | "" };
export type Stage = {
  label: string;
  outcome: string;
  head: string;
  bullets: string[];
  rows: Row[];
};

export const stages: Stage[] = [
  {
    label: "Enquiry",
    outcome: "Capture, assign, score, and prioritise every enquiry the moment it arrives.",
    head: "New enquiry",
    bullets: [
      "Web, WhatsApp, and walk-in capture",
      "Auto-assignment by branch and counsellor",
      "Lead scoring surfaces high-intent students",
    ],
    rows: [
      { l: "Source", v: "Website form", tag: "Captured", s: "info" },
      { l: "Programme interest", v: "MSc Data Science · UK", tag: "", s: "plain" },
      { l: "Lead score", v: "82 — high intent", tag: "Priority", s: "good" },
      { l: "Assigned to", v: "Aisha Khan", tag: "", s: "plain" },
      { l: "Next action", v: "Intro call · today 4:00 PM", tag: "Due", s: "warn" },
    ],
  },
  {
    label: "Counselling",
    outcome: "Preserve every conversation and always schedule the next action.",
    head: "Session 3",
    bullets: [
      "Full conversation history on the record",
      "Next action and reminder never missed",
      "Recommendations captured in context",
    ],
    rows: [
      { l: "Last session", v: "Discussed UK vs. Canada", tag: "Logged", s: "navy" },
      { l: "Concern raised", v: "Tuition affordability", tag: "", s: "plain" },
      { l: "Recommendation", v: "2 UK programmes shortlisted", tag: "", s: "plain" },
      { l: "Reminder", v: "Follow-up · Fri 11:00 AM", tag: "Set", s: "info" },
    ],
  },
  {
    label: "Course selection",
    outcome: "Match students to the right programmes, intakes, and institutions.",
    head: "Shortlist · 4",
    bullets: [
      "Course Finder filters by country and intake",
      "Compare fees, deadlines, and entry criteria",
      "Shortlist shared with the student",
    ],
    rows: [
      { l: "University of Leeds", v: "MSc Data Science · Sep 2026", tag: "Top pick", s: "good" },
      { l: "University of Glasgow", v: "MSc Analytics · Sep 2026", tag: "Shortlisted", s: "navy" },
      { l: "University of Surrey", v: "MSc Data Science · Jan 2027", tag: "Backup", s: "plain" },
      { l: "Entry requirement", v: "IELTS 6.5 · met", tag: "OK", s: "good" },
    ],
  },
  {
    label: "Application",
    outcome: "Track institutions, programmes, intakes, and status in one view.",
    head: "3 active",
    bullets: [
      "Every application with owner and deadline",
      "Status from draft to offer",
      "Nothing slips past an intake date",
    ],
    rows: [
      { l: "University of Leeds", v: "Submitted · 12 May", tag: "In review", s: "info" },
      { l: "University of Glasgow", v: "Offer received", tag: "Offer", s: "good" },
      { l: "University of Surrey", v: "Draft — 1 field missing", tag: "Action", s: "warn" },
      { l: "Earliest deadline", v: "30 June 2026", tag: "8 days", s: "warn" },
    ],
  },
  {
    label: "Documents",
    outcome: "See exactly what is missing, rejected, verified, and versioned.",
    head: "9 of 12 ready",
    bullets: [
      "Readiness checklist per application",
      "Versioned uploads with review status",
      "Rejections flagged with a reason",
    ],
    rows: [
      { l: "Passport", v: "Verified · v2", tag: "Verified", s: "good" },
      { l: "IELTS scorecard", v: "Uploaded", tag: "In review", s: "info" },
      { l: "Statement of purpose", v: "Not uploaded", tag: "Missing", s: "bad" },
      { l: "Bank statement", v: "Rejected — illegible", tag: "Rejected", s: "bad" },
    ],
  },
  {
    label: "Finance",
    outcome: "Connect student operations with fees, receipts, balances, and invoices.",
    head: "Invoice INV-2041",
    bullets: [
      "Fees, receipts, and balances on the record",
      "Razorpay payments reconciled",
      "Proformas and invoices in a click",
    ],
    rows: [
      { l: "Service fee", v: "₹45,000", tag: "Invoiced", s: "navy" },
      { l: "Paid", v: "₹30,000 · 2 receipts", tag: "Received", s: "good" },
      { l: "Balance", v: "₹15,000", tag: "Due", s: "warn" },
      { l: "Receipt", v: "RCPT-1183 issued", tag: "Sent", s: "info" },
    ],
  },
  {
    label: "Visa",
    outcome: "Manage country checklists, filing stages, and decisions with clear ownership.",
    head: "UK Student · Priority",
    bullets: [
      "Country-specific visa checklists",
      "Filing stage and ownership tracked",
      "Outcomes recorded against the record",
    ],
    rows: [
      { l: "CAS", v: "Received from Leeds", tag: "Verified", s: "good" },
      { l: "Financial documents", v: "Bank statement pending", tag: "Blocked", s: "bad" },
      { l: "Biometrics", v: "Appointment · 5 July", tag: "Booked", s: "info" },
      { l: "Decision", v: "Awaiting submission", tag: "In progress", s: "warn" },
    ],
  },
  {
    label: "Enrollment",
    outcome: "Confirm the enrolment and close the loop with a measurable outcome.",
    head: "Fall 2026",
    bullets: [
      "Final enrolment confirmed on the record",
      "Outcome rolls up to owner reporting",
      "One complete journey, end to end",
    ],
    rows: [
      { l: "Institution", v: "University of Leeds", tag: "Confirmed", s: "good" },
      { l: "Programme", v: "MSc Data Science", tag: "", s: "plain" },
      { l: "Status", v: "Enrolled · Sep 2026", tag: "Enrolled", s: "good" },
      { l: "Outcome", v: "Counted in conversion report", tag: "Closed", s: "navy" },
    ],
  },
];

/** Per-stage live state change {i: row index, from, to}. */
export type StageChange = { i: number; from: { v: string; tag: string; s: BadgeKind | "" }; to: { v: string; tag: string; s: BadgeKind | "" } };
export const stageChanges: StageChange[] = [
  { i: 2, from: { v: "Scoring…", tag: "Pending", s: "plain" }, to: { v: "82 — high intent", tag: "Priority", s: "good" } },
  { i: 3, from: { v: "No follow-up set", tag: "", s: "plain" }, to: { v: "Follow-up · Fri 11:00 AM", tag: "Scheduled", s: "info" } },
  { i: 0, from: { v: "MSc Data Science · Sep 2026", tag: "Comparing", s: "plain" }, to: { v: "MSc Data Science · Sep 2026", tag: "Shortlisted", s: "good" } },
  { i: 0, from: { v: "Application drafted", tag: "Draft", s: "plain" }, to: { v: "Submitted · 12 May", tag: "Submitted", s: "good" } },
  { i: 2, from: { v: "Not uploaded", tag: "Missing", s: "bad" }, to: { v: "Uploaded just now", tag: "Uploaded", s: "good" } },
  { i: 2, from: { v: "₹15,000", tag: "Due", s: "warn" }, to: { v: "₹5,000 after receipt", tag: "Part-paid", s: "info" } },
  { i: 1, from: { v: "Bank statement pending", tag: "Blocked", s: "bad" }, to: { v: "Bank statement verified", tag: "Ready to file", s: "good" } },
  { i: 2, from: { v: "Offer accepted", tag: "Pending", s: "warn" }, to: { v: "Enrolled · Sep 2026", tag: "Confirmed", s: "good" } },
];

/* ---- Before / After ---- */
export const beforeItems = [
  "Leads scattered across inboxes, forms, and WhatsApp",
  "Application status lives in one person’s memory",
  "Documents chased over email, versions lost",
  "Fees and balances tracked in a separate sheet",
  "Owners can’t see conversion across branches",
];
export const afterItems = [
  "Every enquiry captured and assigned automatically",
  "One student record every team can trust",
  "Document readiness visible at a glance",
  "Fees, receipts, and balances on the record",
  "Live conversion and risk across the network",
];

/* ---- Platform modules ---- */
export type Module = { title: string; desc: string; icon: string; bg: string; fg: string; href: string };
export const platform: Module[] = [
  { title: "Lead & pipeline management", desc: "Capture from every channel, score intent, and move enquiries through a pipeline built for education.", icon: "LP", bg: "#EAF0FF", fg: "#2453D4", href: "/product#leads" },
  { title: "Counselling & follow-ups", desc: "Conversation history, reminders, and next actions so no student waits and no context is lost.", icon: "CF", bg: "#EEF0FF", fg: "#212177", href: "/product#counselling" },
  { title: "Admissions & applications", desc: "Track institutions, programmes, intakes, and status from draft through to offer.", icon: "AA", bg: "#E6F6EF", fg: "#0F9F6E", href: "/product#admissions" },
  { title: "Document management", desc: "Readiness checklists, versioned uploads, and clear missing, rejected, and verified states.", icon: "DM", bg: "#FBE9E9", fg: "#CB0000", href: "/product#documents" },
  { title: "Course Finder", desc: "Filter programmes by country, intake, fees, and entry criteria, then shortlist in seconds.", icon: "CF", bg: "#FCEFDD", fg: "#D97706", href: "/product#course-finder" },
  { title: "Visa & visitor visa", desc: "Country-specific checklists, filing stages, and outcome tracking with clear ownership.", icon: "VV", bg: "#EAF0FF", fg: "#2453D4", href: "/product#visa" },
  { title: "Partner Hub", desc: "Onboard sub-agents, control access, manage agreements, and track commissions.", icon: "PH", bg: "#EEF0FF", fg: "#212177", href: "/product#partner-hub" },
  { title: "Finance", desc: "Fees, receipts, balances, invoices, and Razorpay payments reconciled to the record.", icon: "FN", bg: "#E6F6EF", fg: "#0F9F6E", href: "/product#finance" },
  { title: "Reports & automation", desc: "Dashboards, conversion reporting, and automated routing, notifications, and communication.", icon: "RA", bg: "#FCEFDD", fg: "#D97706", href: "/product#reports" },
];

/* ---- AI actions ---- */
export const aiActions = [
  "Lead scoring",
  "Suggested next actions",
  "Missing-document alerts",
  "Student record summaries",
  "Follow-up message drafts",
  "Application risk signals",
];

/* ---- Teams ---- */
export type TeamRow = { l: string; tag: string; s: BadgeKind | "" };
export type Team = {
  label: string;
  headline: string;
  intro: string;
  points: string[];
  panelTitle: string;
  rows: TeamRow[];
};
export const teams: Team[] = [
  {
    label: "Owners",
    headline: "See the whole consultancy in one operating view",
    intro: "Visibility across teams, branches, pipelines, conversion, revenue, and risk — without chasing updates.",
    points: ["Conversion and revenue across every branch", "Outstanding work and risk surfaced daily", "Role-based access keeps data scoped"],
    panelTitle: "Owner dashboard · all branches",
    rows: [
      { l: "Pipeline value · this intake", tag: "₹1.4 Cr", s: "navy" },
      { l: "Conversion rate", tag: "31%", s: "good" },
      { l: "Applications at risk", tag: "4", s: "warn" },
      { l: "Visas filed this month", tag: "58", s: "info" },
    ],
  },
  {
    label: "Counsellors",
    headline: "Know whom to contact, what to discuss, and what to do next",
    intro: "Assigned leads, full conversation history, reminders, and recommendations in one place.",
    points: ["Today’s follow-ups, prioritised", "Conversation history on every record", "Course recommendations in context"],
    panelTitle: "My day · 14 follow-ups",
    rows: [
      { l: "Priya Sharma · intro call", tag: "4:00 PM", s: "warn" },
      { l: "Arjun Kapoor · send shortlist", tag: "Today", s: "info" },
      { l: "Meera Nair · offer decision", tag: "Overdue", s: "bad" },
      { l: "New leads assigned", tag: "5", s: "good" },
    ],
  },
  {
    label: "Admissions",
    headline: "Move every application forward without losing context",
    intro: "Structured applications, document readiness, deadlines, and progress in a single board.",
    points: ["Applications by status and intake", "Document readiness per file", "Deadline alerts before they bite"],
    panelTitle: "Applications · 37 active",
    rows: [
      { l: "Ready to submit", tag: "12", s: "good" },
      { l: "Awaiting documents", tag: "9", s: "warn" },
      { l: "In university review", tag: "14", s: "info" },
      { l: "Offers received", tag: "2", s: "good" },
    ],
  },
  {
    label: "Visa",
    headline: "Manage visa work with clear ownership and fewer misses",
    intro: "Country-specific workflows, checklists, document status, and outcome tracking.",
    points: ["Checklists by destination country", "Filing stage and owner per case", "Outcomes recorded for reporting"],
    panelTitle: "Visa cases · UK · Canada · Australia",
    rows: [
      { l: "Documents complete", tag: "21", s: "good" },
      { l: "Awaiting financials", tag: "6", s: "warn" },
      { l: "Filed · awaiting decision", tag: "11", s: "info" },
      { l: "Approved this month", tag: "17", s: "good" },
    ],
  },
  {
    label: "Finance",
    headline: "Connect student operations with financial status",
    intro: "Fee records, payment history, receipts, proformas, taxes, and balances — reconciled.",
    points: ["Fees and balances on each record", "Razorpay payments auto-matched", "Receipts and invoices on demand"],
    panelTitle: "Finance · this month",
    rows: [
      { l: "Collected", tag: "₹38.6 L", s: "good" },
      { l: "Outstanding balance", tag: "₹9.2 L", s: "warn" },
      { l: "Receipts issued", tag: "142", s: "info" },
      { l: "Refunds pending", tag: "1", s: "bad" },
    ],
  },
  {
    label: "Partner teams",
    headline: "Scale a partner network without surrendering control",
    intro: "Partner onboarding, lead ownership, agreements, resources, courses, and commissions.",
    points: ["Sub-agent onboarding and access control", "Clear lead ownership and compliance", "Commission tracking per partner"],
    panelTitle: "Partner Hub · 23 active partners",
    rows: [
      { l: "Leads from partners", tag: "186", s: "navy" },
      { l: "Pending agreements", tag: "3", s: "warn" },
      { l: "Commission payable", tag: "₹4.1 L", s: "info" },
      { l: "Top partner conversion", tag: "34%", s: "good" },
    ],
  },
];

/* ---- Integrations ---- */
export type Integration = { name: string; ab: string; desc: string; tag: string; kind: "live" | "soon" };
export const integrations: Integration[] = [
  { name: "Email", ab: "@", desc: "Two-way email on the record", tag: "Active", kind: "live" },
  { name: "WhatsApp", ab: "W", desc: "Capture and reply in context", tag: "Active", kind: "live" },
  { name: "Website forms", ab: "WF", desc: "Enquiries straight into the pipeline", tag: "Active", kind: "live" },
  { name: "Razorpay", ab: "R", desc: "Collect fees and reconcile", tag: "Active", kind: "live" },
  { name: "Lead assignment", ab: "LA", desc: "Auto-route by branch and rule", tag: "Active", kind: "live" },
  { name: "Notifications", ab: "N", desc: "Alerts for owners and teams", tag: "Active", kind: "live" },
  { name: "Imports & exports", ab: "IE", desc: "Bring data in, take it out", tag: "Active", kind: "live" },
  { name: "API & webhooks", ab: "API", desc: "Build your own connections", tag: "Coming soon", kind: "soon" },
];

/* ---- Security ---- */
export type SecurityPoint = { ab: string; title: string; desc: string };
export const securityPoints: SecurityPoint[] = [
  { ab: "WS", title: "Isolated workspaces", desc: "Each company’s records and documents are scoped to its own workspace." },
  { ab: "RB", title: "Role-based access", desc: "Staff see only what their role allows — down to assigned leads." },
  { ab: "PD", title: "Private document storage", desc: "Files are stored privately and access is workspace-scoped." },
  { ab: "SE", title: "Secure sessions", desc: "Browser sessions are hashed, expiring, and revocable." },
  { ab: "AL", title: "Audit logs", desc: "Important actions are recorded and reviewable." },
  { ab: "SA", title: "Bounded support access", desc: "Platform support access is reason-bound, time-limited, and audited." },
];

/* ---- Migration ---- */
export const migration = [
  { n: "01", title: "Import existing data", desc: "Bring spreadsheets or another CRM with guided mapping and validation." },
  { n: "02", title: "Configure the workspace", desc: "Set branches, teams, pipelines, and roles to match how you operate." },
  { n: "03", title: "Invite the team", desc: "Add counsellors, admissions, finance, and partners with the right access." },
  { n: "04", title: "Launch operations", desc: "Start working from one shared, accountable student record." },
];

/* ---- Pricing ---- */
export type Plan = { name: string; who: string; m: string; a: string; featured: boolean; features: string[] };
export const planData: Plan[] = [
  {
    name: "Starter",
    who: "Single-branch consultancies getting organised.",
    m: "₹2,999",
    a: "₹2,399",
    featured: false,
    features: ["Up to 3 seats", "Leads, counselling & pipeline", "Applications & documents", "Course Finder", "Email support"],
  },
  {
    name: "Growth",
    who: "Growing teams running applications and visas at scale.",
    m: "₹6,999",
    a: "₹5,599",
    featured: true,
    features: ["Up to 12 seats", "Everything in Starter", "Visa & visitor visa workflows", "Finance & Razorpay", "AI Command Centre", "Priority support"],
  },
  {
    name: "Pro",
    who: "Multi-branch networks with partners and academies.",
    m: "Talk to sales",
    a: "Talk to sales",
    featured: false,
    features: ["Unlimited seats & branches", "Everything in Growth", "Partner Hub & commissions", "Academy management", "API & webhooks", "Onboarding manager"],
  },
];

/* ---- FAQ ---- */
export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  { q: "Is each company’s data kept separate?", a: "Yes. Every company operates in its own isolated workspace. Records and documents are scoped to that workspace and are never shared across customers." },
  { q: "Who can see our workspace?", a: "Only the people you invite. Access is role-based, and platform support access is reason-bound, time-limited, read-only, and recorded in an audit log." },
  { q: "Can staff access only their assigned leads?", a: "Yes. Roles and permissions let you limit counsellors to assigned leads while owners and admins keep the wider view." },
  { q: "Can we import spreadsheets or another CRM?", a: "Yes. Guided import maps your existing spreadsheets or CRM data into adMYTT, with validation before anything goes live." },
  { q: "Does adMYTT support multiple branches and partners?", a: "Yes. Multi-branch operations, sub-agents, and partners are first-class — with their own access, ownership, and commission tracking." },
  { q: "Can we export our data, and what happens if we cancel?", a: "Your data stays yours and remains exportable. If a subscription ends, you can export your records before access closes, per the data retention policy." },
];
