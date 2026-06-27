import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { LegalLayout } from "@/components/ui";
import LegalNotice, { LegalSection, P, UL } from "@/components/LegalNotice";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms governing use of the adMYTT website and CRM.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PageShell>
      <LegalLayout title="Terms of Service" updated="27 June 2026">
        <LegalNotice />
        <P>These terms govern your access to and use of the adMYTT website and CRM. By creating an account or using the service, you agree to these terms.</P>
        <LegalSection heading="Accounts and workspaces">
          <P>Each customer operates within an isolated workspace. You are responsible for the accuracy of the data you enter, for managing your team&apos;s access, and for keeping credentials secure.</P>
        </LegalSection>
        <LegalSection heading="Acceptable use">
          <UL items={[
            "Use adMYTT only for lawful education-consultancy operations.",
            "Do not attempt to access another customer&apos;s workspace or data.",
            "Do not upload unlawful content or use the service to send unsolicited messages in breach of applicable law.",
          ]} />
        </LegalSection>
        <LegalSection heading="Subscriptions, billing, and cancellation">
          <UL items={[
            "Fees, seats, and limits are as shown on the Pricing page or your order. Prices are exclusive of applicable taxes.",
            "Monthly plans renew monthly; annual plans are committed for 12 months.",
            "You can cancel at any time. Your data remains exportable before access closes, per the data retention policy.",
          ]} />
        </LegalSection>
        <LegalSection heading="Data ownership">
          <P>Your data stays yours. adMYTT processes customer data on your instructions as described in the Data Processing page and Privacy Policy.</P>
        </LegalSection>
        <LegalSection heading="Service availability and changes">
          <P>We aim to keep the service available and will give reasonable notice of material changes. Planned integrations and features marked “Coming soon” are not guaranteed and should not be relied upon until released.</P>
        </LegalSection>
        <LegalSection heading="Liability and governing law">
          <P>Limitations of liability, warranties, and the governing law and jurisdiction will be specified in the final, legally reviewed version of these terms before launch.</P>
        </LegalSection>
        <LegalSection heading="Contact">
          <P>Questions about these terms: {site.demoEmail}.</P>
        </LegalSection>
      </LegalLayout>
    </PageShell>
  );
}
