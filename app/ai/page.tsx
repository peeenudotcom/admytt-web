import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { PageHero, Band, SectionHeading, CtaBand } from "@/components/ui";
import AICommandCentre from "@/components/home/AICommandCentre";

export const metadata: Metadata = {
  title: "AI Command Centre",
  description:
    "AI that maps to real product actions: lead scoring, suggested next actions, missing-document alerts, record summaries, follow-up drafts, and risk signals. Your team keeps decision authority.",
  alternates: { canonical: "/ai" },
};

const behaviours = [
  { title: "Lead scoring", desc: "Surfaces high-intent enquiries so counsellors prioritise the right students first." },
  { title: "Suggested next actions", desc: "Recommends the next step on a record — a call, a reminder, a document request — for you to confirm." },
  { title: "Missing-document alerts", desc: "Flags applications and visa cases blocked by a missing or rejected document." },
  { title: "Student record summaries", desc: "Summarises a record's history so anyone picking it up has context in seconds." },
  { title: "Follow-up message drafts", desc: "Drafts follow-up messages for a counsellor to review, edit, and send — never sent automatically." },
  { title: "Application risk signals", desc: "Highlights applications at risk from deadlines or incomplete files, with owners notified." },
];

export default function AiPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="AI Command Centre"
        title="AI that does the work, not the talking"
        lead="Every suggestion maps to a real product action your team can review and act on. adMYTT never makes final admission, financial, legal, or visa decisions — your staff keep decision authority."
        secondary={{ label: "See the product", href: "/product" }}
      />

      <Band bg="#fff" border={false}>
        <SectionHeading eyebrow="What the AI actually does" title="Concrete behaviours, tied to product actions" lead="No vague claims. Each capability corresponds to something visible in the product that a person reviews." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} data-platform="1">
          {behaviours.map((b) => (
            <div key={b.title} style={{ background: "#F6F8FC", border: "1px solid #E9EEF6", borderRadius: 13, padding: 24 }}>
              <span style={{ display: "flex", width: 38, height: 38, borderRadius: 9, alignItems: "center", justifyContent: "center", font: "700 13px var(--font-manrope)", background: "#EEF0FF", color: "#212177" }}>AI</span>
              <div style={{ font: "700 16.5px var(--font-manrope)", color: "#0B1230", margin: "14px 0 7px" }}>{b.title}</div>
              <div style={{ font: "400 14.5px/22px var(--font-inter)", color: "#64748B" }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </Band>

      {/* The same live "Operational briefing" demo used on the homepage. */}
      <AICommandCentre />

      <Band bg="#fff">
        <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#EEF0FF", border: "1px solid #D8DCFB", borderRadius: 12, padding: "20px 24px", maxWidth: 760 }}>
          <span style={{ color: "#2453D4", font: "700 18px var(--font-manrope)" }}>◆</span>
          <div style={{ font: "600 16px/24px var(--font-inter)", color: "#212177" }}>
            AI suggests. Your team decides. Suggestions and drafts are always reviewable before anything reaches a student, an institution, or a payment.
          </div>
        </div>
      </Band>

      <CtaBand />
    </PageShell>
  );
}
