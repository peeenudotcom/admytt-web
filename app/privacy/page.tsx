import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { LegalLayout } from "@/components/ui";
import LegalNotice, { LegalSection, P, UL } from "@/components/LegalNotice";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How adMYTT collects, uses, and protects personal data on its marketing website and CRM.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <LegalLayout title="Privacy Policy" updated="27 June 2026">
        <LegalNotice />
        <P>
          This policy explains how adMYTT handles personal data across its marketing website (admytt.com) and secure
          application (app.admytt.com). It distinguishes between data we process as a controller (e.g. a demo request you
          submit) and data our customers process within their own isolated workspaces, for which they are the controller
          and adMYTT acts as a processor.
        </P>
        <LegalSection heading="Information we collect">
          <UL items={[
            "Demo and contact requests: name, company, work email, phone, team size, branches, current system, and any optional message you provide.",
            "Marketing analytics: privacy-aware, aggregated usage data (page, referrer, and UTM attribution). We never send form-message contents or sensitive CRM data to analytics.",
            "Customer workspace data: records your team enters into the CRM, processed on your instructions under your workspace.",
          ]} />
        </LegalSection>
        <LegalSection heading="How we use information">
          <UL items={[
            "To respond to demo and sales enquiries and schedule walkthroughs.",
            "To operate, secure, and improve the website and product.",
            "To send service communications you have agreed to receive. You can opt out at any time.",
          ]} />
        </LegalSection>
        <LegalSection heading="Legal bases and consent">
          <P>Where required, we rely on your consent (which you can withdraw), the performance of a contract, and our legitimate interests in operating the business. Consent for contact is explicit and never pre-ticked.</P>
        </LegalSection>
        <LegalSection heading="Data sharing">
          <P>We do not sell personal data. We share data only with service providers necessary to operate adMYTT (for example, hosting, email delivery, and payment processing), under appropriate agreements. See the Data Processing page for subprocessors.</P>
        </LegalSection>
        <LegalSection heading="Retention and your rights">
          <P>We keep personal data only as long as needed for the purposes above or as required by law. Subject to applicable law, you may request access, correction, deletion, or export of your personal data.</P>
        </LegalSection>
        <LegalSection heading="Contact">
          <P>For privacy questions or requests, contact {site.demoEmail}. Registered company name and address will be confirmed before launch.</P>
        </LegalSection>
      </LegalLayout>
    </PageShell>
  );
}
