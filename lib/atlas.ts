/* ===========================================================================
   adMYTT Product Atlas — structured content for the interactive /product
   explorer. Sanitized, fictional records only. No fabricated metrics appear
   in marketing copy; numbers live inside clearly-labelled demo product states.
   =========================================================================== */
import type { BadgeTone } from "@/lib/theme";
import type { MockRow, MockMetric } from "@/components/product/ProductMock";

export type CanvasSpec = {
  title: string;
  subtitle?: string;
  headTag?: string;
  headTone?: BadgeTone;
  metrics?: MockMetric[];
  rows: MockRow[];
  aiNote?: string;
};

export type WorkflowContext = {
  sees: string;
  act: string[];
  forward: string;
  ai: string;
  approval: string;
};

export type Workflow = { id: string; num: string; label: string; canvas: CanvasSpec; context: WorkflowContext };

/* ------------------------------ Workflows ------------------------------ */
export const workflows: Workflow[] = [
  {
    id: "today",
    num: "01",
    label: "Today",
    canvas: {
      title: "Today",
      subtitle: "Aisha Khan · 1 May",
      headTag: "11 items",
      headTone: "info",
      rows: [
        { ab: "MN", accent: "#B91C1C", lead: "Follow-up · Meera Nair", sub: "Offer decision · 1 day overdue", tag: "Overdue", tone: "bad" },
        { ab: "AK", accent: "#B45309", lead: "Document request · Arjun Kapoor", sub: "2 documents missing", mid: "Due today", tag: "Action", tone: "warn" },
        { ab: "PS", accent: "#4F46E5", lead: "Counselling · Priya Sharma", sub: "Intro call", mid: "4:00 PM", tag: "Scheduled", tone: "info" },
        { ab: "RS", lead: "Application deadline · Surrey", sub: "MSc Data Science", mid: "In 8 days", tag: "Upcoming", tone: "plain" },
      ],
      aiNote: "Moved 3 overdue items to the top and drafted a reminder for Meera Nair to review.",
    },
    context: {
      sees: "A single prioritised agenda for the day — overdue and due-today follow-ups, appointments, deadlines and missing-document alerts, filtered by branch and owner.",
      act: ["Open any item straight to the student record", "Complete, reschedule or reassign a task", "Send a prepared follow-up after review"],
      forward: "Completed actions, notes and new reminders attach to the student record and update the owner's reporting.",
      ai: "Ranks the day by urgency and drafts follow-ups, but never sends or closes anything itself.",
      approval: "The counsellor decides what to action; nothing is sent or completed without them.",
    },
  },
  {
    id: "leads",
    num: "02",
    label: "Leads",
    canvas: {
      title: "Leads",
      subtitle: "1,677 total · this intake",
      metrics: [
        { v: "8", l: "Hot · no contact 48h", c: "#B45309" },
        { v: "47", l: "Unassigned", c: "#B91C1C" },
        { v: "31%", l: "Conversion", c: "#047857" },
      ],
      rows: [
        { ab: "MK", accent: "#047857", lead: "Manjot Kaur", sub: "Australia · Website form", mid: "Score 82", tag: "Hot", tone: "good" },
        { ab: "RS", accent: "#4F46E5", lead: "Ravi Singh", sub: "Canada · WhatsApp", mid: "Score 67", tag: "New", tone: "info" },
        { ab: "AS", accent: "#B91C1C", lead: "Amit Sharma", sub: "Australia · QR code", mid: "Score 34", tag: "At risk", tone: "bad" },
      ],
      aiNote: "Scored every new enquiry and flagged 8 high-intent leads with no contact in 48 hours.",
    },
    context: {
      sees: "Every enquiry from web forms, WhatsApp, email, QR and walk-ins in one pipeline, with source, country, owner, stage and AI score.",
      act: ["Assign or bulk-assign by branch and rule", "Filter, save views and export", "Move a lead to the next stage"],
      forward: "An owned lead becomes the start of a student record, carrying its source and score into counselling.",
      ai: "Scores intent and surfaces high-value leads that have gone quiet so none sit unowned.",
      approval: "Routing rules and assignments are configured and confirmed by your team.",
    },
  },
  {
    id: "counselling",
    num: "03",
    label: "Counselling",
    canvas: {
      title: "Counselling",
      subtitle: "Priya Sharma · #STU-2041",
      headTag: "Session 3",
      headTone: "violet",
      rows: [
        { accent: "#4F46E5", lead: "Last session", sub: "Discussed UK vs Canada", tag: "Logged", tone: "info" },
        { accent: "#B45309", lead: "Concern raised", sub: "Tuition affordability", tag: "Open", tone: "warn" },
        { accent: "#047857", lead: "Recommendation", sub: "2 UK programmes shortlisted", tag: "Shared", tone: "good" },
        { accent: "#4F46E5", lead: "Reminder", sub: "Follow-up · Fri 11:00 AM", tag: "Set", tone: "info" },
      ],
      aiNote: "Summarised the previous session and suggested the next follow-up time.",
    },
    context: {
      sees: "The full counselling history on the record — every session, concern, recommendation and reminder in context.",
      act: ["Log a session and capture recommendations", "Set the next action and reminder", "Share a shortlist with the student"],
      forward: "Recommendations and the agreed shortlist flow into Course selection and Applications.",
      ai: "Summarises past sessions and suggests follow-up timing so no conversation goes cold.",
      approval: "The counsellor writes and confirms every note and recommendation.",
    },
  },
  {
    id: "course",
    num: "04",
    label: "Course selection",
    canvas: {
      title: "Course Finder",
      subtitle: "MSc Data Science · UK · Sep 2026",
      headTag: "4 shortlisted",
      headTone: "violet",
      rows: [
        { ab: "LE", accent: "#047857", lead: "University of Leeds", sub: "MSc Data Science · Sep 2026", mid: "£24,500/yr", tag: "Top match", tone: "good" },
        { ab: "GL", accent: "#4F46E5", lead: "University of Glasgow", sub: "MSc Analytics · Sep 2026", mid: "£23,000/yr", tag: "Shortlisted", tone: "info" },
        { ab: "SU", accent: "#7C3AED", lead: "University of Surrey", sub: "MSc Data Science · Jan 2027", mid: "£21,800/yr", tag: "Backup", tone: "violet" },
        { lead: "Entry requirement", sub: "IELTS 6.5 · profile meets", tag: "Met", tone: "good" },
      ],
      aiNote: "Matched the student profile to 4 programmes and checked entry requirements against it.",
    },
    context: {
      sees: "A filterable catalogue by country, intake, fees and entry criteria, with a comparison view and the working shortlist.",
      act: ["Filter and compare programmes", "Add or remove shortlist items", "Share the shortlist with the student"],
      forward: "The confirmed shortlist becomes the set of applications to prepare.",
      ai: "Suggests matches for the profile and checks entry requirements before shortlisting.",
      approval: "The counsellor and student agree the final shortlist.",
    },
  },
  {
    id: "applications",
    num: "05",
    label: "Applications",
    canvas: {
      title: "Applications",
      subtitle: "Priya Sharma · 3 active",
      metrics: [
        { v: "12", l: "Ready to submit", c: "#047857" },
        { v: "9", l: "Awaiting docs", c: "#B45309" },
        { v: "14", l: "In review", c: "#1D4ED8" },
      ],
      rows: [
        { ab: "LE", lead: "University of Leeds", sub: "Submitted 12 May", mid: "In review", tag: "Tracked", tone: "info" },
        { ab: "GL", accent: "#047857", lead: "University of Glasgow", sub: "Offer received", tag: "Offer", tone: "good" },
        { ab: "SU", accent: "#B45309", lead: "University of Surrey", sub: "Draft — 1 field missing", mid: "Due 30 Jun", tag: "Action", tone: "warn" },
      ],
      aiNote: "Flagged the Surrey application: one required field is missing before the intake deadline.",
    },
    context: {
      sees: "Every application with institution, programme, intake, owner, status and deadline — from draft to offer.",
      act: ["Update status and assign an owner", "Resolve missing fields", "Track deadlines per intake"],
      forward: "An accepted offer moves the record toward documents, finance and visa filing.",
      ai: "Detects incomplete applications and approaching intake deadlines before they slip.",
      approval: "Admissions officers submit and accept; the AI only flags.",
    },
  },
  {
    id: "documents",
    num: "06",
    label: "Documents",
    canvas: {
      title: "Documents",
      subtitle: "Priya Sharma · #STU-2041",
      headTag: "9 of 12 ready",
      headTone: "good",
      rows: [
        { accent: "#047857", lead: "Passport", sub: "Verified · v2", tag: "Verified", tone: "good" },
        { accent: "#1D4ED8", lead: "IELTS scorecard", sub: "Uploaded", tag: "In review", tone: "info" },
        { accent: "#B91C1C", lead: "Statement of purpose", sub: "Not uploaded", tag: "Missing", tone: "bad" },
        { accent: "#B91C1C", lead: "Bank statement", sub: "Rejected — illegible", tag: "Rejected", tone: "bad" },
      ],
      aiNote: "Detected a rejected bank statement blocking the visa filing and alerted the counsellor.",
    },
    context: {
      sees: "A readiness checklist per application — what is verified, in review, missing or rejected, with versioned uploads.",
      act: ["Upload and re-upload versions", "Mark verified or request a re-submit", "See the reason for any rejection"],
      forward: "A complete, verified document set unblocks offers and visa filing.",
      ai: "Spots missing and rejected documents that block the next step and raises them early.",
      approval: "Staff verify or reject each file; storage stays workspace-scoped and private.",
    },
  },
  {
    id: "finance",
    num: "07",
    label: "Finance",
    canvas: {
      title: "Finance",
      subtitle: "Invoice INV-2041 · Priya Sharma",
      metrics: [
        { v: "₹45,000", l: "Invoiced" },
        { v: "₹30,000", l: "Paid", c: "#047857" },
        { v: "₹15,000", l: "Balance", c: "#B45309" },
      ],
      rows: [
        { accent: "#4F46E5", lead: "Service fee", sub: "INV-2041", mid: "₹45,000", tag: "Invoiced", tone: "info" },
        { accent: "#047857", lead: "Razorpay payment", sub: "UPI · auto-reconciled", mid: "₹30,000", tag: "Received", tone: "good" },
        { accent: "#B45309", lead: "Balance due", sub: "Reminder scheduled", mid: "₹15,000", tag: "Due", tone: "warn" },
      ],
      aiNote: "Reconciled the Razorpay payment and surfaced the remaining balance for follow-up.",
    },
    context: {
      sees: "Fees, receipts, balances and invoices on the student record, with Razorpay payment status.",
      act: ["Generate proformas, invoices and receipts", "Record and reconcile payments", "Schedule a balance reminder"],
      forward: "A settled balance and issued receipt sit on the record through enrolment.",
      ai: "Matches incoming payments and surfaces outstanding balances for follow-up.",
      approval: "Finance issues documents and confirms reconciliations.",
    },
  },
  {
    id: "study-visa",
    num: "08",
    label: "Study visa",
    canvas: {
      title: "Study visa",
      subtitle: "Priya Sharma · UK Student · #STU-2041",
      headTag: "Ready to file",
      headTone: "good",
      rows: [
        { accent: "#047857", lead: "CAS from Leeds", sub: "Received", tag: "Verified", tone: "good" },
        { accent: "#047857", lead: "Financial documents", sub: "28-day statement", tag: "Verified", tone: "good" },
        { accent: "#4F46E5", lead: "Biometrics · 5 Jul", sub: "Appointment booked", tag: "Booked", tone: "info" },
        { accent: "#B45309", lead: "Online application", sub: "Awaiting submission", tag: "Owner: Vikram", tone: "warn" },
      ],
      aiNote: "Checked the UK checklist and confirmed all blocking documents are now verified.",
    },
    context: {
      sees: "A country-specific checklist and filing stage for the study-visa case, with CAS, financial and biometric status.",
      act: ["Work the checklist to filing", "Book appointments and record payments", "Record the decision and outcome"],
      forward: "A filed visa and recorded decision move the student toward enrolment.",
      ai: "Validates the checklist and flags any item still blocking submission.",
      approval: "The visa officer files and records every decision.",
    },
  },
  {
    id: "visitor-visa",
    num: "09",
    label: "Visitor visa",
    canvas: {
      title: "Visitor visa",
      subtitle: "Ramesh Iyer · Canada · family visit",
      headTag: "Filed",
      headTone: "violet",
      rows: [
        { accent: "#4F46E5", lead: "Travellers", sub: "Applicant + 2 (spouse, child)", tag: "Linked", tone: "info" },
        { accent: "#047857", lead: "Host / sponsor", sub: "Sister · Toronto", tag: "Verified", tone: "good" },
        { accent: "#4F46E5", lead: "Biometrics · 9 Jul", sub: "VFS appointment", tag: "Booked", tone: "info" },
        { accent: "#7C3AED", lead: "Application — visitor", sub: "Awaiting decision", tag: "Filed", tone: "violet" },
      ],
      aiNote: "Tracked all three travellers and flagged the upcoming biometrics appointment.",
    },
    context: {
      sees: "A separate visitor-visa case with applicants and accompanying travellers, host or sponsor details and its own checklist.",
      act: ["Add travellers and host details", "Book appointments and record payments", "File and record the outcome"],
      forward: "The recorded outcome closes the case and updates reporting.",
      ai: "Watches appointments and pending actions across travellers in the case.",
      approval: "The visa officer owns filing and the recorded decision.",
    },
  },
  {
    id: "enrolment",
    num: "10",
    label: "Enrolment",
    canvas: {
      title: "Enrolment",
      subtitle: "Priya Sharma · Fall 2026",
      headTag: "Confirmed",
      headTone: "good",
      rows: [
        { accent: "#047857", lead: "Institution", sub: "University of Leeds", tag: "Confirmed", tone: "good" },
        { accent: "#4F46E5", lead: "Programme", sub: "MSc Data Science", mid: "Sep 2026", tag: "Enrolled", tone: "info" },
        { accent: "#047857", lead: "Deposit", sub: "Paid · receipt issued", tag: "Paid", tone: "good" },
        { accent: "#7C3AED", lead: "Outcome", sub: "Counted in conversion report", tag: "Closed", tone: "violet" },
      ],
      aiNote: "Closed the journey and rolled the outcome into the conversion report.",
    },
    context: {
      sees: "The confirmed enrolment on the record — institution, programme, intake, deposit and final outcome.",
      act: ["Confirm enrolment", "Issue the final receipt", "Record the outcome"],
      forward: "The outcome rolls up to owner reporting and closes one complete journey.",
      ai: "Confirms the loop is closed and updates conversion reporting.",
      approval: "The owning team confirms the final enrolment.",
    },
  },
  {
    id: "academy",
    num: "11",
    label: "Academy",
    canvas: {
      title: "Academy",
      subtitle: "IELTS Evening · Batch 12",
      metrics: [
        { v: "34", l: "Enrolled", c: "#4F46E5" },
        { v: "3", l: "Fees due", c: "#B45309" },
        { v: "92%", l: "Attendance", c: "#047857" },
      ],
      rows: [
        { ab: "NB", accent: "#047857", lead: "Nisha Bose", sub: "IELTS Evening", mid: "Present 11/12", tag: "Active", tone: "good" },
        { ab: "TP", accent: "#B45309", lead: "Tarun Patel", sub: "IELTS Evening", mid: "Fee due ₹4,000", tag: "Due", tone: "warn" },
        { ab: "QR", accent: "#7C3AED", lead: "New enquiry", sub: "QR code · campus fair", tag: "Captured", tone: "violet" },
      ],
      aiNote: "Surfaced 3 learners with outstanding fees and prepared reminders.",
    },
    context: {
      sees: "An optional training workspace — course enquiries, batches, enrolment, attendance, fees and learner outcomes.",
      act: ["Capture enquiries from QR and campaigns", "Manage batches and attendance", "Collect fees and issue certificates"],
      forward: "Learner outcomes and fees feed the same reporting as the core CRM.",
      ai: "Flags outstanding fees and prepares reminders for the batch.",
      approval: "Academy managers run batches and confirm fee actions.",
    },
  },
  {
    id: "reports",
    num: "12",
    label: "Reports",
    canvas: {
      title: "Reports & automation",
      subtitle: "All branches · this intake",
      metrics: [
        { v: "31%", l: "Conversion", c: "#047857" },
        { v: "4", l: "Apps at risk", c: "#B45309" },
        { v: "58", l: "Visas filed", c: "#1D4ED8" },
      ],
      rows: [
        { accent: "#4F46E5", lead: "New website lead → auto-assign by branch", sub: "Automation rule", tag: "On", tone: "good" },
        { accent: "#4F46E5", lead: "Document rejected → notify counsellor", sub: "Automation rule", tag: "On", tone: "good" },
        { accent: "#7C3AED", lead: "Weekly conversion report → founders", sub: "Scheduled", tag: "On", tone: "good" },
      ],
      aiNote: "Highlighted 4 applications at risk this week across branches.",
    },
    context: {
      sees: "Live dashboards for conversion, revenue, risk and workload by branch, plus the automation rules in force.",
      act: ["Filter reports by branch and intake", "Enable or adjust automation rules", "Export for owner review"],
      forward: "Outcomes and risk signals roll up so the business runs on live numbers.",
      ai: "Surfaces risk and outstanding work daily and routes it to the right person.",
      approval: "Owners configure automations; routing is rule-based and auditable.",
    },
  },
];

/* ------------------------------ Roles ------------------------------ */
export type Role = {
  id: string;
  label: string;
  ab: string;
  summary: string;
  workspace: string; // workflow id used as the role's canvas
  priority: string[];
  actions: string[];
  restricted: string[];
  reports: string[];
};

export const roles: Role[] = [
  {
    id: "founder",
    label: "Founder",
    ab: "FO",
    summary: "Runs the whole consultancy on live numbers across every branch and team.",
    workspace: "reports",
    priority: ["Conversion and revenue by branch", "Applications and visas at risk", "Team workload and outstanding work"],
    actions: ["Configure branches, roles and automations", "Drill into any branch, team or record", "Export and schedule owner reports"],
    restricted: ["Day-to-day record edits stay with the owning team", "Actions are audited, including support access"],
    reports: ["Network conversion funnel", "Revenue and outstanding balance", "Risk and SLA across branches"],
  },
  {
    id: "counsellor",
    label: "Counsellor",
    ab: "CO",
    summary: "Knows whom to contact, what to discuss and what to do next, all day.",
    workspace: "today",
    priority: ["Today's prioritised follow-ups", "Assigned leads and conversations", "Reminders and appointments"],
    actions: ["Log sessions and recommendations", "Set reminders and share shortlists", "Send prepared follow-ups after review"],
    restricted: ["Sees assigned leads, not the whole pipeline", "No access to finance or other branches"],
    reports: ["My follow-up completion", "My pipeline and conversion", "Overdue and at-risk leads"],
  },
  {
    id: "admissions",
    label: "Admissions officer",
    ab: "AD",
    summary: "Moves every application forward without losing context.",
    workspace: "applications",
    priority: ["Applications by status and intake", "Missing fields and documents", "Deadlines approaching"],
    actions: ["Submit and update applications", "Request and verify documents", "Assign owners and track offers"],
    restricted: ["Scoped to assigned applications", "No finance or visa-decision authority"],
    reports: ["Applications by stage", "Offer rate and time-to-offer", "Document readiness"],
  },
  {
    id: "visa",
    label: "Visa officer",
    ab: "VI",
    summary: "Runs study and visitor visa work with clear ownership.",
    workspace: "study-visa",
    priority: ["Cases by filing stage", "Blocking documents and appointments", "Decisions to record"],
    actions: ["Work country checklists to filing", "Book appointments and record payments", "File and record outcomes"],
    restricted: ["Sees visa cases for assigned students", "No edit access to finance reconciliations"],
    reports: ["Cases by stage and country", "Approval rate", "Awaiting-action queue"],
  },
  {
    id: "finance",
    label: "Finance team",
    ab: "FI",
    summary: "Connects student operations with financial status.",
    workspace: "finance",
    priority: ["Outstanding balances", "Payments to reconcile", "Refunds pending"],
    actions: ["Issue invoices, proformas and receipts", "Reconcile Razorpay payments", "Schedule balance reminders"],
    restricted: ["No access to counselling notes or visa decisions", "Edits limited to financial records"],
    reports: ["Collected vs outstanding", "Receipts issued", "Aged balances by branch"],
  },
  {
    id: "academy",
    label: "Academy manager",
    ab: "AC",
    summary: "Runs training operations alongside the core CRM.",
    workspace: "academy",
    priority: ["Batches and attendance", "Outstanding academy fees", "New course enquiries"],
    actions: ["Manage courses, batches and enrolment", "Record attendance and outcomes", "Collect fees and issue certificates"],
    restricted: ["Scoped to the Academy module", "No access to visa or core finance records"],
    reports: ["Enrolment and attendance", "Fees collected and due", "Learner outcomes"],
  },
];

/* --------------------- Anatomy of a student record --------------------- */
export type RecordLayer = { id: string; ab: string; label: string; fields: { k: string; v: string }[]; permission: string };

export const recordLayers: RecordLayer[] = [
  { id: "profile", ab: "PR", label: "Profile & preferences", fields: [{ k: "Student", v: "Priya Sharma · #STU-2041" }, { k: "Destination", v: "United Kingdom" }, { k: "Intake", v: "Fall 2026" }, { k: "Owner", v: "Aisha Khan" }], permission: "All assigned staff can view; counsellors and admins can edit." },
  { id: "comms", ab: "CM", label: "Communication history", fields: [{ k: "Channels", v: "Email · WhatsApp" }, { k: "Last contact", v: "Today · 2h ago" }, { k: "Threads", v: "12 messages" }], permission: "Visible to the owner and admins; messages are timestamped." },
  { id: "counselling", ab: "CN", label: "Counselling notes", fields: [{ k: "Sessions", v: "3 logged" }, { k: "Concern", v: "Tuition affordability" }, { k: "Next", v: "Follow-up · Fri 11:00" }], permission: "Counsellors and admins; hidden from finance and academy roles." },
  { id: "shortlist", ab: "SL", label: "Course shortlist", fields: [{ k: "Programmes", v: "4 shortlisted" }, { k: "Top match", v: "Leeds · MSc Data Science" }, { k: "Entry", v: "IELTS 6.5 · met" }], permission: "Counsellors and admissions; shareable with the student." },
  { id: "applications", ab: "AP", label: "Applications", fields: [{ k: "Active", v: "3 applications" }, { k: "Offers", v: "1 received" }, { k: "Deadline", v: "30 Jun 2026" }], permission: "Admissions owns; visible to the counsellor and admins." },
  { id: "documents", ab: "DC", label: "Documents", fields: [{ k: "Readiness", v: "9 of 12" }, { k: "Rejected", v: "Bank statement" }, { k: "Storage", v: "Workspace-private" }], permission: "Assigned staff upload and verify; storage is workspace-scoped." },
  { id: "payments", ab: "PY", label: "Payments", fields: [{ k: "Invoiced", v: "₹45,000" }, { k: "Paid", v: "₹30,000 · Razorpay" }, { k: "Balance", v: "₹15,000" }], permission: "Finance edits; counsellors see status only." },
  { id: "visa", ab: "VS", label: "Visa case", fields: [{ k: "Type", v: "UK Student" }, { k: "Stage", v: "Ready to file" }, { k: "Biometrics", v: "5 Jul" }], permission: "Visa officers own; decisions are recorded and audited." },
  { id: "tasks", ab: "TK", label: "Tasks & follow-ups", fields: [{ k: "Open", v: "2 tasks" }, { k: "Overdue", v: "0" }, { k: "Next", v: "Reminder · Fri 11:00" }], permission: "Owner and collaborators; appears on each person's Today." },
  { id: "audit", ab: "AU", label: "Audit history", fields: [{ k: "Last change", v: "Document verified · 1h ago" }, { k: "By", v: "Aisha Khan" }, { k: "Entries", v: "Immutable log" }], permission: "Admins review; important actions are recorded automatically." },
];

/* ------------------------------ AI decision flow ------------------------------ */
export type AIExample = {
  id: string;
  label: string;
  signal: string;
  analysis: string;
  suggestion: string;
  review: string;
  outcome: string;
};

export const aiExamples: AIExample[] = [
  {
    id: "lead",
    label: "High-intent lead, no follow-up",
    signal: "Lead scored 82 from a website form, no contact in 48 hours.",
    analysis: "High intent and going cold, against the branch follow-up SLA.",
    suggestion: "Prioritise on the owner's Today and prepare a first-contact message.",
    review: "Counsellor edits and sends, reschedules, or dismisses.",
    outcome: "Contact attempt and any reply are logged to the record.",
  },
  {
    id: "doc",
    label: "Missing financial document",
    signal: "Bank statement rejected as illegible on an active application.",
    analysis: "A blocking document for the visa filing is not yet valid.",
    suggestion: "Alert the counsellor and draft a re-upload request to the student.",
    review: "Staff confirm the request and verify the new upload.",
    outcome: "Document status and reviewer are recorded on the record.",
  },
  {
    id: "deadline",
    label: "Application deadline approaching",
    signal: "An application is in draft with one missing field, intake in 8 days.",
    analysis: "At risk of missing the intake without action.",
    suggestion: "Flag the application and surface the exact missing field.",
    review: "Admissions completes the field and submits.",
    outcome: "Submission and timestamp are saved to the application.",
  },
  {
    id: "visitor",
    label: "Visitor visa awaiting action",
    signal: "A filed visitor-visa case has a biometrics appointment in 2 days.",
    analysis: "An upcoming appointment needs confirmation across travellers.",
    suggestion: "Surface the case and prepare a reminder for the applicants.",
    review: "Visa officer confirms and sends the reminder.",
    outcome: "Appointment status is updated on the case.",
  },
  {
    id: "fee",
    label: "Outstanding academy fee",
    signal: "A learner has a ₹4,000 fee due for the current batch.",
    analysis: "An overdue balance against an active enrolment.",
    suggestion: "Surface the due fee and prepare a payment reminder.",
    review: "Academy manager approves and sends the reminder.",
    outcome: "Reminder and any payment are recorded against the learner.",
  },
];

export const aiRouteSteps = ["Workspace signal", "AI analysis", "Suggested action", "Staff review", "Recorded outcome"] as const;

/* ------------------------------ Platform map ------------------------------ */
export type MapGroup = { id: string; label: string; blurb: string; modules: string[] };
export const platformGroups: MapGroup[] = [
  { id: "acquire", label: "Acquire", blurb: "Bring enquiries in", modules: ["Leads", "Website forms", "QR capture", "Communications"] },
  { id: "guide", label: "Guide", blurb: "Help students decide", modules: ["Today", "Counselling", "Course Finder"] },
  { id: "deliver", label: "Deliver", blurb: "Get the work done", modules: ["Applications", "Documents", "Finance"] },
  { id: "outcomes", label: "Outcomes", blurb: "Close the journey", modules: ["Study visa", "Visitor visa", "Enrolment"] },
  { id: "scale", label: "Scale", blurb: "Grow the network", modules: ["Partner Hub", "Academy", "Branches"] },
  { id: "operate", label: "Operate", blurb: "Run the business", modules: ["Reports", "Automations", "Integrations", "AI Command Centre"] },
];

/* ------------------------------ Technical foundation ------------------------------ */
export type TechSpec = { label: string; desc: string; status: "Available" | "Planned" };
export const techSpecs: TechSpec[] = [
  { label: "Isolated workspaces", desc: "Each company's records and documents are scoped to its own workspace and never cross customers.", status: "Available" },
  { label: "Role-based access", desc: "Permissions scope each person to their work — down to assigned leads and records.", status: "Available" },
  { label: "Private document storage", desc: "Files are stored privately, with access scoped to the workspace.", status: "Available" },
  { label: "Secure sessions", desc: "Browser sessions are hashed, expiring and revocable.", status: "Available" },
  { label: "Audit logs", desc: "Important actions are recorded and reviewable; support access is reason-bound and time-limited.", status: "Available" },
  { label: "Imports & exports", desc: "Guided import maps spreadsheets or another CRM; your data stays exportable.", status: "Available" },
  { label: "Email · WhatsApp · forms", desc: "Two-way email, WhatsApp in context, and website forms straight into the pipeline.", status: "Available" },
  { label: "Razorpay payments", desc: "Collect fees and reconcile payments against the record.", status: "Available" },
  { label: "Lead assignment & notifications", desc: "Auto-route by branch and rule, with alerts for owners and teams.", status: "Available" },
  { label: "API & webhooks", desc: "Programmatic access to build your own connections.", status: "Planned" },
];
