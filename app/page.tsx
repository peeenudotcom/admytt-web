import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import JourneyRail from "@/components/home/JourneyRail";
import { Problem, Platform, Integrations, SecuritySection, Migration, Evidence } from "@/components/home/StaticSections";
import AICommandCentre from "@/components/home/AICommandCentre";
import TeamTabs from "@/components/home/TeamTabs";
import Pricing from "@/components/home/Pricing";
import Faq from "@/components/home/Faq";
import DemoSection from "@/components/home/DemoSection";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "adMYTT — Run your education consultancy from first enquiry to visa outcome",
  description:
    "adMYTT is a secure, multi-tenant CRM for education consultancies. Bring leads, counselling, applications, documents, payments, visas, partners, and team operations into one workspace.",
  alternates: { canonical: "/" },
};

// FAQ structured data — only for the FAQs actually rendered on the page.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" style={{ position: "relative", background: "#F6F8FC" }}>
        <Hero />
        <JourneyRail />
        <Problem />
        <Platform />
        <AICommandCentre />
        <TeamTabs />
        <Integrations />
        <SecuritySection />
        <Migration />
        <Evidence />
        <Pricing />
        <Faq />
        <DemoSection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </>
  );
}
