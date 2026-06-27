import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { PageHero, Band, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with adMYTT — sales, support, security, and partnerships.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { title: "Book a demo", desc: "The fastest way to evaluate adMYTT on your own workflow.", action: { label: "Book a demo", href: "/book-a-demo" } },
  { title: "Sales enquiries", desc: "Questions about plans, Pro pricing, or migration.", action: { label: site.demoEmail, href: `mailto:${site.demoEmail}` } },
  { title: "Existing customers", desc: "Already using adMYTT? Reach support from inside your workspace.", action: { label: "Log in", href: site.appUrl } },
  { title: "Security & privacy", desc: "Report a concern or request documentation for a review.", action: { label: site.demoEmail, href: `mailto:${site.demoEmail}` } },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to the adMYTT team"
        lead="Whether you're evaluating adMYTT, already a customer, or reviewing our security, here's how to reach the right people."
        secondary={{ label: "See pricing", href: "/pricing" }}
      />

      <Band bg="#fff" border={false}>
        <SectionHeading title="How to reach us" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 18 }} data-platform="1">
          {channels.map((c) => (
            <div key={c.title} style={{ background: "#F8FAFC", border: "1px solid #E9EEF6", borderRadius: 13, padding: 26 }}>
              <div style={{ font: "700 18px var(--font-inter)", color: "#0F172A", marginBottom: 8 }}>{c.title}</div>
              <div style={{ font: "400 15px/23px var(--font-inter)", color: "#64748B", marginBottom: 16 }}>{c.desc}</div>
              {c.action.href.startsWith("/") ? (
                <Link href={c.action.href} style={{ font: "700 14.5px var(--font-inter)", color: "#4F46E5", textDecoration: "none" }}>{c.action.label} →</Link>
              ) : (
                <a href={c.action.href} style={{ font: "700 14.5px var(--font-inter)", color: "#4F46E5", textDecoration: "none" }}>{c.action.label} →</a>
              )}
            </div>
          ))}
        </div>
        <div style={{ marginTop: 22, font: "500 13.5px/21px var(--font-inter)", color: "#94a3b8", maxWidth: 680 }}>
          Registered company details, address, and support hours are confirmed during onboarding. We don&apos;t publish unverified contact claims.
        </div>
      </Band>
    </PageShell>
  );
}
