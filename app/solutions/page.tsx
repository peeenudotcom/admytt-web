import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { PageHero, Band, SectionHeading, CheckList, CtaBand } from "@/components/ui";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "adMYTT reorganised around how you operate — study-abroad consultants, multi-branch agencies, visitor-visa teams, and training academies.",
  alternates: { canonical: "/solutions" },
};

type Solution = {
  id: string;
  audience: string;
  headline: string;
  intro: string;
  points: string[];
  panelTitle: string;
  panelRows: { l: string; v: string }[];
};

const solutions: Solution[] = [
  {
    id: "study-abroad",
    audience: "Study-abroad consultants",
    headline: "Run enquiry-to-enrolment without dropping a student",
    intro: "Capture enquiries from every channel, counsel with full context, manage applications and documents, and track visas to a confirmed enrolment — on one record.",
    points: ["One pipeline from enquiry to enrolment", "Course Finder and shortlists in counselling", "Document readiness tied to each application", "Country-specific visa checklists and filing"],
    panelTitle: "Study-abroad workspace",
    panelRows: [
      { l: "Active enquiries", v: "128 across 3 destinations" },
      { l: "Applications in flight", v: "37 · 12 ready to submit" },
      { l: "Visa cases", v: "11 filed · awaiting decision" },
    ],
  },
  {
    id: "multi-branch",
    audience: "Multi-branch agencies",
    headline: "See every branch from one operating view",
    intro: "Give each branch its own workflows and ownership while owners keep a live, network-wide view of pipeline, conversion, revenue, and risk.",
    points: ["Branch-level pipelines and assignment rules", "Network-wide conversion and revenue reporting", "Role-based access scoped per branch", "Outstanding work and risk surfaced daily"],
    panelTitle: "Owner dashboard · all branches",
    panelRows: [
      { l: "Pipeline value · this intake", v: "₹1.4 Cr" },
      { l: "Conversion rate", v: "31%" },
      { l: "Applications at risk", v: "4" },
    ],
  },
  {
    id: "visitor-visa",
    audience: "Visitor-visa teams",
    headline: "Manage visitor-visa work with clear ownership",
    intro: "Run visitor-visa cases alongside student visas with country checklists, document status, filing stages, and recorded outcomes — fewer missed requirements, clearer accountability.",
    points: ["Country-specific visitor-visa checklists", "Document status tracked per case", "Filing stage and owner on every case", "Outcomes recorded for reporting"],
    panelTitle: "Visitor-visa cases",
    panelRows: [
      { l: "Documents complete", v: "21" },
      { l: "Awaiting financials", v: "6" },
      { l: "Filed · awaiting decision", v: "9" },
    ],
  },
  {
    id: "academies",
    audience: "Training academies",
    headline: "Manage enrolment and delivery in one system",
    intro: "Bring leads, students, programmes, batches, and fees together so enrolment and day-to-day delivery run from one connected workspace.",
    points: ["Leads and students on one record", "Programmes and batches organised clearly", "Fees, receipts, and balances reconciled", "Role-based access for academy staff"],
    panelTitle: "Academy operations",
    panelRows: [
      { l: "Active programmes", v: "8" },
      { l: "Students enrolled", v: "214" },
      { l: "Fees collected · this month", v: "₹12.4 L" },
    ],
  },
];

export default function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Solutions"
        title="adMYTT, reorganised around how you operate"
        lead="The same connected platform, framed for your business model. Pick the operating model closest to yours and see exactly how the workflow fits."
        secondary={{ label: "Explore the product", href: "/product" }}
      />

      {solutions.map((s, idx) => (
        <Band key={s.id} id={s.id} bg={idx % 2 === 0 ? "#fff" : "#F6F8FC"} border={idx !== 0}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "center" }} data-teamview="1">
            <div>
              <div style={{ font: "700 13px var(--font-inter)", color: "#2453D4", marginBottom: 12 }}>{s.audience}</div>
              <SectionHeading title={s.headline} lead={s.intro} />
              <CheckList items={s.points} />
            </div>
            <div style={{ background: "#fff", border: "1px solid #E4EAF3", borderRadius: 12, overflow: "hidden", boxShadow: "0 22px 46px -28px rgba(11,18,48,.3)" }}>
              <div style={{ background: "#0B1230", padding: "12px 16px", font: "700 12.5px var(--font-manrope)", color: "#fff" }}>{s.panelTitle}</div>
              <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 9 }}>
                {s.panelRows.map((r) => (
                  <div key={r.l} style={{ display: "flex", alignItems: "center", gap: 12, border: "1px solid #EAEFF7", borderRadius: 9, padding: "12px 14px" }}>
                    <span style={{ font: "500 13px var(--font-inter)", color: "#64748B", flex: 1 }}>{r.l}</span>
                    <span style={{ font: "700 13px var(--font-inter)", color: "#0B1230" }}>{r.v}</span>
                  </div>
                ))}
                <div style={{ font: "600 9.5px var(--font-inter)", color: "#64748B", background: "#F1F5FB", borderRadius: 5, padding: "3px 8px", alignSelf: "flex-start" }}>Demo data</div>
              </div>
            </div>
          </div>
        </Band>
      ))}

      <CtaBand />
    </PageShell>
  );
}
