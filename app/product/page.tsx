import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import { T, F } from "@/lib/theme";
import { site } from "@/lib/site";
import ProductHero from "@/components/product/ProductHero";
import RecordFlow from "@/components/product/RecordFlow";
import ProductAICentre from "@/components/product/ProductAICentre";
import { ModuleGroup, type ModuleSpec } from "@/components/product/ModuleBlock";
import { ProductMock } from "@/components/product/ProductMock";
import { Integrations, SecuritySection } from "@/components/home/StaticSections";
import LiveToday from "@/components/product/LiveToday";
import LiveLeadsFull from "@/components/product/LiveLeadsFull";
import LiveDocuments from "@/components/product/LiveDocuments";
import LiveVisaOps from "@/components/product/LiveVisaOps";
import LiveAcademy from "@/components/product/LiveAcademy";

const title = "Product — the complete adMYTT platform";
const description =
  "See how adMYTT runs an education consultancy from one connected student record: leads, daily work, counselling, course finder, applications, documents, study and visitor visas, finance, partners, academy and an AI Command Centre that keeps your team in control.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product" },
  openGraph: { title, description, url: "/product", type: "website", siteName: site.name },
  twitter: { card: "summary_large_image", title, description },
};

const DEMO = { href: "/book-a-demo", hrefLabel: "See it in a live demo" };

/* ----- Workflow groups ----- */
const runTheDay: ModuleSpec[] = [
  {
    id: "today",
    name: "Today Workspace",
    title: "Start every day knowing exactly what needs attention.",
    body: "A daily agenda, not a wall of charts. Overdue and due-today follow-ups, counselling appointments, application deadlines, missing-document alerts and assigned tasks — each one click from the student record.",
    capabilities: ["Overdue and due-today follow-ups, prioritised", "Counselling appointments and application deadlines", "Missing-document alerts and assigned tasks", "One click from any item to the student record"],
    frameUrl: "app.admytt.com/today",
    scrollHeight: 360,
    layout: "split",
    screen: <LiveToday />,
    ...DEMO,
  },
  {
    id: "leads",
    name: "Leads & Pipeline",
    title: "Turn every enquiry into an owned next step.",
    body: "Lead management is the entry point to the whole CRM. Capture from every channel, score intent, filter by country, source, stage, owner and intake, and move enquiries forward — nothing sits unowned.",
    capabilities: ["Capture from web, WhatsApp, email and walk-ins", "AI scoring and saved views", "Auto-assignment by branch and rule", "Bulk assignment and export"],
    frameUrl: "app.admytt.com/leads",
    scrollHeight: 440,
    layout: "stacked",
    screen: <LiveLeadsFull />,
    ...DEMO,
  },
];

const guideShortlist: ModuleSpec[] = [
  {
    id: "counselling",
    name: "Counselling",
    title: "Keep every conversation, and always know the next step.",
    body: "Each student record carries its full counselling history, so anyone can pick up the conversation. Reminders and next actions follow the student, and recommendations are captured in context.",
    capabilities: ["Full conversation history on each record", "Reminders and next actions that follow the student", "Course recommendations captured in context", "A prioritised follow-up list per counsellor"],
    frameUrl: "app.admytt.com/counselling",
    layout: "split",
    reverse: true,
    screen: (
      <ProductMock
        title="My follow-ups"
        subtitle="Aisha Khan · today"
        headTag="14 today"
        headTone="info"
        rows={[
          { ab: "PS", lead: "Priya Sharma", sub: "Intro call · UK · Fall 2026", mid: "4:00 PM", tag: "Due", tone: "warn" },
          { ab: "AK", lead: "Arjun Kapoor", sub: "Send shortlist", mid: "Today", tag: "Next", tone: "info" },
          { ab: "MN", lead: "Meera Nair", sub: "Offer decision", mid: "Overdue", tag: "Overdue", tone: "bad" },
          { ab: "RS", lead: "Rohan Shah", sub: "Logged: UK vs Canada", mid: "Fri 11:00", tag: "Scheduled", tone: "good" },
        ]}
      />
    ),
    ...DEMO,
  },
  {
    id: "course-finder",
    name: "Course Finder",
    title: "Match students to the right programmes in minutes.",
    body: "Filter the catalogue by country, intake, fees and entry criteria, compare options side by side, and build a shortlist you can share with the student — with entry-requirement checks against their profile.",
    capabilities: ["Filter by country, intake, fees and entry criteria", "Compare deadlines and requirements side by side", "Shortlist in seconds and share with the student", "Entry-requirement checks against the profile"],
    frameUrl: "app.admytt.com/course-finder",
    layout: "split",
    screen: (
      <ProductMock
        title="Course Finder"
        subtitle="MSc Data Science · UK · Sep 2026"
        headTag="4 shortlisted"
        headTone="violet"
        rows={[
          { ab: "LE", accent: "#0F9F6E", lead: "University of Leeds", sub: "MSc Data Science · Sep 2026", mid: "£24,500/yr", tag: "Top match", tone: "good" },
          { ab: "GL", accent: "#4F46E5", lead: "University of Glasgow", sub: "MSc Analytics · Sep 2026", mid: "£23,000/yr", tag: "Shortlisted", tone: "info" },
          { ab: "SU", accent: "#7C3AED", lead: "University of Surrey", sub: "MSc Data Science · Jan 2027", mid: "£21,800/yr", tag: "Backup", tone: "violet" },
          { lead: "Entry requirement", sub: "IELTS 6.5 · profile meets", tag: "Met", tone: "good" },
        ]}
      />
    ),
    ...DEMO,
  },
];

const applyPrepare: ModuleSpec[] = [
  {
    id: "admissions",
    name: "Admissions & Applications",
    title: "Move every application forward without losing context.",
    body: "Track institutions, programmes, intakes and status from draft through to offer. Owners and deadlines are visible on every file, and nothing slips past an intake date.",
    capabilities: ["Track institutions, programmes, intakes and status", "Status from draft to submitted to offer", "Deadline alerts before intake dates bite", "Owner and progress visible on every file"],
    frameUrl: "app.admytt.com/applications",
    layout: "split",
    reverse: true,
    screen: (
      <ProductMock
        title="Applications"
        subtitle="37 active · this intake"
        metrics={[
          { v: "12", l: "Ready to submit", c: T.success },
          { v: "9", l: "Awaiting docs", c: T.warning },
          { v: "14", l: "In review", c: T.info },
        ]}
        rows={[
          { ab: "PS", lead: "Priya Sharma — Leeds", sub: "MSc Data Science", mid: "Submitted 12 May", tag: "In review", tone: "info" },
          { ab: "AK", lead: "Arjun Kapoor — Glasgow", sub: "MSc Analytics", mid: "Offer received", tag: "Offer", tone: "good" },
          { ab: "RS", lead: "Rohan Shah — Surrey", sub: "Draft — 1 field missing", mid: "Due 30 Jun", tag: "Action", tone: "warn" },
        ]}
      />
    ),
    ...DEMO,
  },
  {
    id: "documents",
    name: "Document Management",
    title: "Know exactly what's missing on every file.",
    body: "A readiness checklist per application shows what's verified, in review, missing or rejected — so nothing blocks an offer or a visa filing. Uploads are versioned and stored privately.",
    capabilities: ["Per-application readiness checklist", "Versioned uploads with review status", "Rejections flagged with a clear reason", "Private, workspace-scoped storage"],
    frameUrl: "app.admytt.com/documents",
    scrollHeight: 360,
    layout: "split",
    screen: <LiveDocuments />,
    ...DEMO,
  },
];

const fileVisas: ModuleSpec[] = [
  {
    id: "visa",
    name: "Study Visa",
    title: "File study visas with clear ownership and fewer misses.",
    body: "Study visa is a first-class workflow. Track CAS, financial and biometric requirements against country-specific checklists, with appointments, payments, ownership and the final outcome all on the record.",
    capabilities: ["Country-specific checklists and filing stages", "CAS, financial and biometric tracking per case", "Appointments, payments and ownership in one place", "Outcomes recorded against the student record"],
    frameUrl: "app.admytt.com/visas",
    scrollHeight: 440,
    layout: "stacked",
    screen: <LiveVisaOps defaultTab="study" />,
    ...DEMO,
  },
  {
    id: "visitor-visa",
    name: "Visitor Visa",
    title: "Run visitor visa cases without scattered checklists.",
    body: "Visitor visa is tracked separately from study visa, with its own checklist. Capture applicants and accompanying travellers, sponsor or host details, appointments and payments, and record the outcome.",
    capabilities: ["Applicants and accompanying travellers in one case", "Sponsor or host details captured and verified", "Country-specific checklists, appointments and payments", "Owner, next action and recorded outcome"],
    frameUrl: "app.admytt.com/visitor-visa",
    layout: "split",
    reverse: true,
    screen: (
      <ProductMock
        title="Visitor visa · Canada"
        subtitle="Host: Sunil Patel · 2 travellers"
        headTag="Filed"
        headTone="violet"
        rows={[
          { accent: "#0F9F6E", lead: "Invitation letter", sub: "Host: Sunil Patel", tag: "Verified", tone: "good" },
          { accent: "#0F9F6E", lead: "Financial proof", sub: "6-month statement", tag: "Verified", tone: "good" },
          { accent: "#4F46E5", lead: "Biometrics · 9 Jul", sub: "VFS appointment", tag: "Booked", tone: "info" },
          { accent: "#7C3AED", lead: "Application — visitor", sub: "Awaiting decision", tag: "Filed", tone: "violet" },
        ]}
      />
    ),
    ...DEMO,
  },
];

const runBusiness: ModuleSpec[] = [
  {
    id: "finance",
    name: "Finance & Razorpay",
    title: "Connect student operations with their financial status.",
    body: "Fees, receipts, balances and invoices live on the student record. Razorpay payments are reconciled automatically, proformas and invoices generate in a click, and outstanding balances surface for follow-up.",
    capabilities: ["Fees, receipts, balances and invoices on the record", "Razorpay payments reconciled automatically", "Proformas and invoices generated in a click", "Outstanding balances surfaced for follow-up"],
    frameUrl: "app.admytt.com/finance",
    layout: "split",
    screen: (
      <ProductMock
        title="Finance"
        subtitle="Invoice INV-2041 · Priya Sharma"
        metrics={[
          { v: "₹45,000", l: "Invoiced" },
          { v: "₹30,000", l: "Paid", c: T.success },
          { v: "₹15,000", l: "Balance", c: T.warning },
        ]}
        rows={[
          { accent: "#4F46E5", lead: "Service fee", sub: "INV-2041", mid: "₹45,000", tag: "Invoiced", tone: "info" },
          { accent: "#0F9F6E", lead: "Razorpay payment", sub: "UPI · auto-reconciled", mid: "₹30,000", tag: "Received", tone: "good" },
          { accent: "#4F46E5", lead: "Receipt RCPT-1183", sub: "Issued to student", tag: "Sent", tone: "info" },
          { accent: "#B45309", lead: "Balance due", sub: "Reminder scheduled", mid: "₹15,000", tag: "Due", tone: "warn" },
        ]}
      />
    ),
    ...DEMO,
  },
  {
    id: "partner-hub",
    name: "Partner Hub",
    title: "Grow a partner network without surrendering control.",
    body: "Onboard sub-agents with scoped access, keep lead ownership and compliance clear, and hold agreements, resources and courses in one place — with commission tracked per partner.",
    capabilities: ["Onboard sub-agents with scoped access", "Clear lead ownership and compliance", "Agreements, resources and courses in one place", "Commission tracking per partner"],
    frameUrl: "app.admytt.com/partners",
    layout: "split",
    reverse: true,
    screen: (
      <ProductMock
        title="Partner Hub"
        subtitle="23 active partners"
        metrics={[
          { v: "186", l: "Partner leads", c: T.primary },
          { v: "3", l: "Pending agreements", c: T.warning },
          { v: "₹4.1L", l: "Commission payable", c: T.info },
        ]}
        rows={[
          { ab: "GE", lead: "Global Edu Partners", sub: "Delhi · 42 leads", mid: "34% conv.", tag: "Active", tone: "good" },
          { ab: "BO", lead: "Bright Overseas", sub: "Pune · 28 leads", tag: "Agreement", tone: "warn" },
          { ab: "SC", lead: "StudyConnect", sub: "Ahmedabad · 19 leads", mid: "21% conv.", tag: "Active", tone: "good" },
        ]}
      />
    ),
    ...DEMO,
  },
  {
    id: "academy",
    name: "Academy",
    title: "Run enquiries, batches, fees and outcomes in one workspace.",
    body: "An optional module for consultancies that also train. Capture course enquiries from QR and campaigns, manage courses and batches, track enrolment and attendance, collect fees, and record learner outcomes — without leaving adMYTT.",
    capabilities: ["QR and campaign lead capture", "Courses, batches, enrolment and attendance", "Fees, dues, certificates and outcomes", "An optional module — enable it when you need it"],
    frameUrl: "app.admytt.com/academy",
    scrollHeight: 440,
    layout: "stacked",
    screen: <LiveAcademy />,
    ...DEMO,
  },
  {
    id: "reports",
    name: "Reports & Automation",
    title: "Run the consultancy on live numbers and automatic routing.",
    body: "Dashboards report conversion and revenue by branch, while automation handles routing, notifications and reminders. Risk and outstanding work surface daily, and outcomes roll up to owner reporting.",
    capabilities: ["Dashboards for conversion and revenue by branch", "Automated routing, notifications and reminders", "Risk and outstanding work surfaced daily", "Outcomes that roll up to owner reporting"],
    frameUrl: "app.admytt.com/reports",
    layout: "split",
    screen: (
      <ProductMock
        title="Reports & automation"
        subtitle="All branches · this intake"
        metrics={[
          { v: "31%", l: "Conversion", c: T.success },
          { v: "4", l: "Applications at risk", c: T.warning },
          { v: "58", l: "Visas filed", c: T.info },
        ]}
        rows={[
          { accent: "#4F46E5", lead: "New website lead → auto-assign by branch", sub: "Automation rule", tag: "On", tone: "good" },
          { accent: "#4F46E5", lead: "Document rejected → notify counsellor", sub: "Automation rule", tag: "On", tone: "good" },
          { accent: "#4F46E5", lead: "Offer received → reminder to accept", sub: "Automation rule", tag: "On", tone: "good" },
          { accent: "#7C3AED", lead: "Weekly conversion report → owners", sub: "Scheduled", tag: "On", tone: "good" },
        ]}
      />
    ),
    ...DEMO,
  },
];

function FinalCta() {
  return (
    <section style={{ background: "linear-gradient(135deg,#4F46E5 0%,#0F172A 100%)", padding: "84px 0", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", bottom: -100, left: -60, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,#4F46E5 0%,transparent 70%)", opacity: 0.4 }} />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 28px", position: "relative", textAlign: "center" }}>
        <h2 data-h2 style={{ font: `800 36px/44px ${F}`, letterSpacing: "-.02em", color: "#fff", marginBottom: 16 }}>See adMYTT working with your consultancy&apos;s process.</h2>
        <p style={{ font: `400 18px/28px ${F}`, color: "#c2cbe6", marginBottom: 30 }}>
          Book a guided walkthrough using your branches, team roles, lead stages and student journey. You will see the live product and receive a practical migration plan.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/book-a-demo" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: "#4F46E5", padding: "15px 28px", borderRadius: 9, boxShadow: "0 10px 24px rgba(79,70,229,.3)" }}>
            Book a 30-minute demo <ArrowRight size={16} />
          </Link>
          <Link href="/security" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.2)", padding: "15px 26px", borderRadius: 9 }}>
            <ShieldCheck size={16} /> Read the security overview
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <PageShell>
      <ProductHero />

      {/* Connected record */}
      <section style={{ background: T.surface, padding: "84px 0", borderTop: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ maxWidth: 720, marginBottom: 40 }}>
            <div style={{ font: `700 13px ${F}`, color: T.primary, marginBottom: 12 }}>One student. One record.</div>
            <h2 data-h2 style={{ font: `800 36px/44px ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: 14 }}>Every team works from the same source of truth.</h2>
            <p style={{ font: `400 18px/28px ${F}`, color: T.muted }}>
              Each enquiry becomes a connected student record containing conversations, course choices, applications, documents, payments, visa activity and outcomes. Context moves forward with the student instead of being lost between teams and tools.
            </p>
          </div>
          <RecordFlow />
        </div>
      </section>

      {/* Product platform — workflow groups */}
      <section id="workflows" style={{ background: T.bg, padding: "84px 0", borderTop: `1px solid ${T.border}`, scrollMarginTop: 72 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <div style={{ maxWidth: 720, marginBottom: 8 }}>
            <div style={{ font: `700 13px ${F}`, color: T.primary, marginBottom: 12 }}>The platform</div>
            <h2 data-h2 style={{ font: `800 36px/44px ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: 14 }}>Everything your consultancy needs to move work forward.</h2>
            <p style={{ font: `400 18px/28px ${F}`, color: T.muted, marginBottom: 8 }}>
              Each workspace is designed around the way education consultancies operate, with AI assisting across every stage.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 64, marginTop: 48 }}>
            <ModuleGroup label="Run the day" blurb="Where your team starts every morning." modules={runTheDay} />
            <ModuleGroup label="Guide & shortlist" blurb="Help students choose with confidence." modules={guideShortlist} />
            <ModuleGroup label="Apply & prepare" blurb="Move applications forward, fully documented." modules={applyPrepare} />
            <ModuleGroup label="File visas" blurb="Study and visitor visas as first-class workflows." modules={fileVisas} />
            <ModuleGroup label="Run the business" blurb="Finance, partners, academy and reporting." modules={runBusiness} />
          </div>
        </div>
      </section>

      <ProductAICentre />
      <Integrations />
      <SecuritySection />
      <FinalCta />
    </PageShell>
  );
}
