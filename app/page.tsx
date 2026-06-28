import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroAnyimmi from "@/components/home/HeroAnyimmi";
import JourneyRail from "@/components/home/JourneyRail";
import AiOps from "@/components/home/AiOps";
import { SecuritySection } from "@/components/home/StaticSections";
import Pricing from "@/components/home/Pricing";
import Faq from "@/components/home/Faq";
import DemoSection from "@/components/home/DemoSection";
import { ProductScene } from "@/components/product/ProductScene";
import LiveToday from "@/components/product/LiveToday";
import LiveLeadsFull from "@/components/product/LiveLeadsFull";
import LiveDocuments from "@/components/product/LiveDocuments";
import LiveVisaOps from "@/components/product/LiveVisaOps";
import LiveAcademy from "@/components/product/LiveAcademy";
import { faqs } from "@/lib/content";
import { T, F } from "@/lib/theme";

export const metadata: Metadata = {
  title: "adMYTT — The operating system for education consultancies",
  description:
    "Manage every student journey from first enquiry to final visa decision. adMYTT brings leads, counselling, applications, documents, follow-ups, visas, academy and team performance into one secure platform built for education consultancies.",
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

const proof = [
  { title: "Multi-tenant by design", desc: "Each company operates in its own isolated workspace — records never cross customers." },
  { title: "Built for education & immigration", desc: "Enquiry, counselling, applications, documents, and visa stages are first-class — not custom fields." },
  { title: "One student record", desc: "Every team works from the same record, so context is never lost between people or tools." },
  { title: "Your data stays yours", desc: "Export your records at any time. Role-based access keeps each person scoped to their work." },
];

function TrustStrip() {
  return (
    <section style={{ background: T.bg, padding: "56px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 26 }} data-trust="1">
        {proof.map((p) => (
          <div key={p.title}>
            <div style={{ font: `700 15px ${F}`, color: T.text, marginBottom: 6 }}>{p.title}</div>
            <div style={{ font: `400 13.5px/20px ${F}`, color: T.muted }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header overHero />
      <main id="main" style={{ position: "relative", background: T.surface }}>
        <HeroAnyimmi />
        <TrustStrip />

        {/* Today */}
        <ProductScene
          eyebrow="Today workspace"
          title="Start every day knowing exactly what needs attention."
          body="A daily agenda, not a wall of charts. Overdue and due-today follow-ups, counselling appointments, application deadlines, missing-document alerts and assigned tasks — filtered by priority and branch, each one click from the student record."
          points={["Overdue & due-today, prioritised", "Counselling appointments & deadlines", "One-click to the student record"]}
          frameUrl="app.admytt.com/today"
          chips={[
            { dot: "#DC2626", text: "3 overdue", style: { top: 26, left: -16, animation: "adfloat 5s ease-in-out infinite" } },
            { dot: "#EA580C", text: "8 due today", style: { bottom: 30, right: -14, animation: "adfloat2 6s ease-in-out infinite" } },
          ]}
        >
          <LiveToday />
        </ProductScene>

        {/* Leads — largest visual */}
        <ProductScene
          layout="stacked"
          bg={T.bg}
          eyebrow="Leads & pipeline"
          title="Turn every enquiry into an owned next step."
          body="Lead management is the entry point to the whole CRM. Capture from every channel, score intent, filter by country, source, stage, owner and intake, and move enquiries forward with bulk assignment and export — nothing sits unowned."
          points={["AI scoring & saved views", "Owner, stage & next follow-up on every lead", "Bulk assign & export"]}
          cta={{ label: "Explore lead management", href: "/product#leads" }}
          frameUrl="app.admytt.com/leads"
          chips={[
            { dot: T.primary, text: "Auto-assigned by branch rule", style: { top: 30, left: -8, animation: "adfloat 5s ease-in-out infinite" } },
            { dot: T.success, text: "AI score 91 · hot", style: { bottom: 34, right: -8, animation: "adfloat2 6s ease-in-out infinite" } },
          ]}
        >
          <LiveLeadsFull />
        </ProductScene>

        {/* Documents & applications */}
        <ProductScene
          reverse
          eyebrow="Documents & applications"
          title="Know exactly what's missing on every file."
          body="A readiness checklist per application shows what's verified, in review, missing, or rejected — so nothing blocks an offer or a visa filing. Applications, intakes and deadlines stay attached to the same record."
          points={["Per-application readiness checklist", "Versioned uploads with review status", "Private, workspace-scoped storage"]}
          cta={{ label: "Explore documents", href: "/product#documents" }}
          frameUrl="app.admytt.com/documents"
          chips={[
            { dot: T.success, text: "SoP verified", style: { top: 26, right: -14, animation: "adfloat2 5.5s ease-in-out infinite" } },
            { dot: "#EA580C", text: "1 doc pending", style: { bottom: 30, left: -16, animation: "adfloat 6s ease-in-out infinite" } },
          ]}
        >
          <LiveDocuments />
        </ProductScene>

        {/* Visa Operations */}
        <ProductScene
          layout="stacked"
          bg={T.bg}
          eyebrow="Visa Operations"
          title="Run visitor visa cases without scattered checklists."
          body="Study visa and visitor visa are separate, first-class workflows. Track applicants and accompanying travellers, sponsor or host details, country-specific checklists, appointments, payments, ownership and the final outcome — all in one place."
          points={["Study Visa & Visitor Visa, side by side", "Country checklists, appointments & payments", "Owner, next action & recorded outcome"]}
          cta={{ label: "Explore visa operations", href: "/product#visa" }}
          frameUrl="app.admytt.com/visas"
          chips={[
            { dot: T.violet, text: "Filed · awaiting decision", style: { top: 30, right: -10, animation: "adfloat2 6s ease-in-out infinite" } },
          ]}
        >
          <LiveVisaOps />
        </ProductScene>

        {/* Connected student record */}
        <JourneyRail />

        {/* Academy (add-on) */}
        <ProductScene
          layout="stacked"
          eyebrow="Academy"
          badge="Optional module"
          title="Run enquiries, batches, fees and learner outcomes in one academy workspace."
          body="An optional expansion for consultancies that also train. Capture course enquiries from QR and campaigns, manage courses and batches, track enrolment and attendance, collect fees, issue certificates and record learner outcomes — without leaving adMYTT."
          points={["QR & campaign lead capture", "Batches, enrolment & attendance", "Fees, dues, certificates & outcomes"]}
          cta={{ label: "Explore Academy", href: "/solutions#academies" }}
          frameUrl="app.admytt.com/academy"
          chips={[
            { dot: "#7C3AED", text: "QR lead capture", style: { top: 28, left: -10, animation: "adfloat 5.5s ease-in-out infinite" } },
          ]}
        >
          <LiveAcademy />
        </ProductScene>

        {/* AI Command Centre */}
        <AiOps />

        <SecuritySection />
        <Pricing />
        <Faq />
        <DemoSection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
