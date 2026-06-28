import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroAnyimmi from "@/components/home/HeroAnyimmi";
import ValueBlocks from "@/components/home/ValueBlocks";
import JourneyRail from "@/components/home/JourneyRail";
import AiOps from "@/components/home/AiOps";
import { SecuritySection } from "@/components/home/StaticSections";
import Pricing from "@/components/home/Pricing";
import Faq from "@/components/home/Faq";
import DemoSection from "@/components/home/DemoSection";
import { faqs } from "@/lib/content";
import { T, F } from "@/lib/theme";

export const metadata: Metadata = {
  title: "adMYTT — Run your consultancy from first enquiry to visa outcome",
  description:
    "adMYTT is a secure, AI-enabled CRM for study-abroad and immigration consultancies. Leads, counselling, applications, documents, payments, and visas in one workspace.",
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
        <ValueBlocks />
        <JourneyRail />
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
