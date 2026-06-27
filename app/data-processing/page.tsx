import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { LegalLayout } from "@/components/ui";
import LegalNotice, { LegalSection, P, UL } from "@/components/LegalNotice";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Processing & subprocessors",
  description: "How adMYTT processes customer data as a processor, and the categories of subprocessors used to deliver the service.",
  alternates: { canonical: "/data-processing" },
};

const subprocessors = [
  { name: "Cloud hosting & database", purpose: "Hosting the application and storing workspace data", region: "To be confirmed before launch" },
  { name: "Object storage", purpose: "Private storage of uploaded documents", region: "To be confirmed before launch" },
  { name: "Email delivery", purpose: "Transactional and notification emails", region: "To be confirmed before launch" },
  { name: "Payment processing (Razorpay)", purpose: "Collecting fees and reconciling payments", region: "India" },
];

export default function DataProcessingPage() {
  return (
    <PageShell>
      <LegalLayout title="Data Processing & subprocessors" updated="27 June 2026">
        <LegalNotice />
        <P>
          When you use adMYTT, your company is the controller of the personal data in your workspace and adMYTT acts as a
          processor, handling that data only on your documented instructions. This page summarises how we process customer
          data and the categories of subprocessors involved in delivering the service.
        </P>
        <LegalSection heading="Roles">
          <UL items={[
            "Customer (controller): determines what data is entered into its workspace and why.",
            "adMYTT (processor): hosts and processes that data to provide the service, under contract.",
            "Subprocessors: vetted third parties that support specific parts of the service.",
          ]} />
        </LegalSection>
        <LegalSection heading="Processing principles">
          <UL items={[
            "Each customer&apos;s data is isolated to its own workspace.",
            "Access is role-based and important actions are recorded in audit logs.",
            "Platform support access is reason-bound, time-limited, and audited.",
            "Customer data is processed only to deliver and support the service, not for advertising.",
          ]} />
        </LegalSection>
        <LegalSection heading="Subprocessors">
          <P>The following categories of subprocessors support the service. Specific providers and processing regions are confirmed and published before launch and updated when they change.</P>
          <div style={{ border: "1px solid #E9EEF6", borderRadius: 10, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1.6fr 1fr", background: "#F1F5FB", font: "700 12.5px var(--font-inter)", color: "#475569" }}>
              <div style={{ padding: "11px 14px" }}>Category</div>
              <div style={{ padding: "11px 14px" }}>Purpose</div>
              <div style={{ padding: "11px 14px" }}>Region</div>
            </div>
            {subprocessors.map((s) => (
              <div key={s.name} style={{ display: "grid", gridTemplateColumns: "1.2fr 1.6fr 1fr", borderTop: "1px solid #EEF2F8", font: "400 13.5px/20px var(--font-inter)", color: "#334155" }}>
                <div style={{ padding: "12px 14px", fontWeight: 600, color: "#0F172A" }}>{s.name}</div>
                <div style={{ padding: "12px 14px" }}>{s.purpose}</div>
                <div style={{ padding: "12px 14px" }}>{s.region}</div>
              </div>
            ))}
          </div>
        </LegalSection>
        <LegalSection heading="Data export and deletion">
          <P>Your data remains exportable. On termination, you can export your records before access closes, per the data retention policy, which will be finalised before launch.</P>
        </LegalSection>
        <LegalSection heading="Contact">
          <P>Data-processing questions or a copy of the data-processing agreement: {site.demoEmail}.</P>
        </LegalSection>
      </LegalLayout>
    </PageShell>
  );
}
