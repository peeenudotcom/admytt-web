import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { PageHero, Band, SectionHeading, CtaBand } from "@/components/ui";
import Pricing from "@/components/home/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent adMYTT pricing: Starter, Growth, and Pro plans with seats, module limits, billing frequency, taxes, and cancellation terms shown up front.",
  alternates: { canonical: "/pricing" },
};

const terms = [
  { title: "Billing & taxes", body: "Prices are shown per seat, per month, exclusive of applicable taxes. Monthly plans bill monthly; annual plans are committed for 12 months and billed annually." },
  { title: "Seats & limits", body: "Each plan includes a seat allowance and module set, shown on the plan. Add seats as your team grows; Pro is unlimited seats and branches." },
  { title: "Upgrades & downgrades", body: "Upgrade at any time and the change applies immediately. Downgrades take effect at the start of your next billing period." },
  { title: "Cancellation & data export", body: "Cancel anytime. Your data stays yours and remains exportable before access closes, per the data retention policy." },
  { title: "Migration & onboarding", body: "Guided import and workspace setup are part of onboarding. We'll scope any larger migration with you during your demo before you commit." },
  { title: "Trials", body: "We only advertise a free trial when the full signup and onboarding journey works end to end. Until then, the fastest way to evaluate adMYTT is a guided demo on your workflow." },
];

const pricingFaqs = [
  { q: "Is annual billing pre-selected?", a: "No. Monthly is selected by default, and the annual toggle clearly shows the 12-month commitment before you choose it." },
  { q: "What determines the Pro price?", a: "Pro is custom because it depends on seats, branches, partners, and academy needs. Talk to sales and we'll give you a clear, itemised quote." },
  { q: "Are there setup or migration fees?", a: "Guided import and standard onboarding are included. If your migration is unusually large, we'll scope and quote it transparently before you commit." },
  { q: "What happens at renewal?", a: "We show seats and limits up front, so renewals hold no surprises. You'll be notified ahead of an annual renewal." },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Transparent plans, shown up front"
        lead="Seats, module limits, billing frequency, taxes, and cancellation terms are all visible before you talk to us. No hidden renewal surprises."
        secondary={{ label: "Compare on a demo", href: "/book-a-demo" }}
      />

      <Pricing withHeading={false} />

      <Band bg="#F8FAFC">
        <SectionHeading title="What's included in the terms" lead="The details that matter when you're choosing a plan — stated plainly." />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} data-platform="1">
          {terms.map((t) => (
            <div key={t.title} style={{ background: "#fff", border: "1px solid #E9EEF6", borderRadius: 12, padding: 24 }}>
              <div style={{ font: "700 16px var(--font-inter)", color: "#0F172A", marginBottom: 8 }}>{t.title}</div>
              <div style={{ font: "400 14.5px/22px var(--font-inter)", color: "#64748B" }}>{t.body}</div>
            </div>
          ))}
        </div>
      </Band>

      <Band bg="#fff">
        <SectionHeading title="Pricing FAQ" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 880 }}>
          {pricingFaqs.map((f) => (
            <div key={f.q} style={{ background: "#F8FAFC", border: "1px solid #E9EEF6", borderRadius: 11, padding: "20px 22px" }}>
              <div style={{ font: "700 16px var(--font-inter)", color: "#0F172A", marginBottom: 8 }}>{f.q}</div>
              <div style={{ font: "400 15px/24px var(--font-inter)", color: "#475569" }}>{f.a}</div>
            </div>
          ))}
        </div>
      </Band>

      <CtaBand />
    </PageShell>
  );
}
