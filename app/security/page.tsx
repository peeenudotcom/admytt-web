import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { PageHero, Band, SectionHeading, CtaBand } from "@/components/ui";
import { securityPoints } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security & trust",
  description:
    "How adMYTT protects customer data: isolated workspaces, role-based access, private document storage, secure sessions, audit logs, and bounded support access. Controls described accurately — no unverified certifications.",
  alternates: { canonical: "/security" },
};

const detailSections = [
  { id: "isolation", title: "Workspace data isolation", body: "Each customer company operates in its own isolated workspace. Customer records and documents are scoped to that workspace and are never shared across customers. There is no shared, cross-tenant view of records." },
  { id: "access", title: "Roles & permissions", body: "Access is role-based. You decide what each role can see and do — counsellors can be limited to assigned leads, while owners and admins keep the wider view. Permissions are enforced server-side, not just hidden in the interface." },
  { id: "sessions", title: "Authentication & sessions", body: "Browser sessions are hashed, expiring, and revocable. You can end active sessions, and sessions expire rather than persisting indefinitely." },
  { id: "storage", title: "Private document storage", body: "Uploaded files are stored privately and access is workspace-scoped. Documents are not served from public, guessable URLs." },
  { id: "audit", title: "Audit logs", body: "Important actions are recorded and reviewable, so you can see what happened on a record and who did it." },
  { id: "support", title: "Bounded support access", body: "Platform support access to a workspace is reason-bound, time-limited, and audited. Support does not hold standing access to your data." },
];

const securityFaqs = [
  { q: "Do you hold SOC 2, ISO 27001, or GDPR certification?", a: "We describe the controls we actually operate. We do not claim SOC 2, ISO 27001, GDPR certification, or other compliance unless it has been formally verified and documented. Where a control is in progress, we say so plainly." },
  { q: "Can we export our data and security evidence?", a: "Yes. Your data stays yours and remains exportable. Audit logs let you review important actions on your records." },
  { q: "Who at adMYTT can access our workspace?", a: "Only people you invite within your company, plus bounded platform support access that is reason-bound, time-limited, and audited." },
  { q: "How do we report a security concern?", a: `Email ${site.demoEmail} and ask for the security team, or use your in-product support channel. We will acknowledge and investigate reported issues.` },
];

export default function SecurityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Security & trust"
        title="Each company gets its own isolated workspace"
        lead="Customer records and documents are workspace-scoped. Access is role-based, sessions expire and can be revoked, and important actions are written to an audit log. Here is exactly what we operate — and what we don't claim."
        secondary={{ label: "Read the FAQ", href: "#security-faq" }}
      />

      <Band bg="#fff" border={false}>
        <SectionHeading eyebrow="Controls we operate" title="Protections, described accurately" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} data-platform="1">
          {securityPoints.map((s) => (
            <div key={s.title} style={{ background: "#F8FAFC", border: "1px solid #E9EEF6", borderRadius: 12, padding: 22 }}>
              <span style={{ width: 34, height: 34, borderRadius: 9, background: "#EEF2FF", color: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", font: "700 13px var(--font-inter)" }}>{s.ab}</span>
              <div style={{ font: "700 15px var(--font-inter)", color: "#0F172A", margin: "13px 0 6px" }}>{s.title}</div>
              <div style={{ font: "400 13.5px/20px var(--font-inter)", color: "#64748B" }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </Band>

      <Band bg="#F8FAFC">
        <SectionHeading title="How each control works" />
        <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 880 }}>
          {detailSections.map((d) => (
            <div key={d.id} id={d.id} style={{ scrollMarginTop: 90, background: "#fff", border: "1px solid #E9EEF6", borderRadius: 12, padding: "24px 26px" }}>
              <div style={{ font: "700 18px var(--font-inter)", color: "#0F172A", marginBottom: 8 }}>{d.title}</div>
              <div style={{ font: "400 15.5px/24px var(--font-inter)", color: "#475569" }}>{d.body}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 22, maxWidth: 880, font: "500 13.5px/21px var(--font-inter)", color: "#94a3b8" }}>
          We deliberately avoid phrases like “bank-level security” and “enterprise-grade” without defined controls. If you need specific documentation for a procurement review, ask during your demo.
        </div>
      </Band>

      <Band id="security-faq" bg="#fff">
        <SectionHeading title="Security FAQ" />
        <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 880 }}>
          {securityFaqs.map((f) => (
            <div key={f.q} style={{ background: "#F8FAFC", border: "1px solid #E9EEF6", borderRadius: 11, padding: "20px 22px" }}>
              <div style={{ font: "700 16px var(--font-inter)", color: "#0F172A", marginBottom: 8 }}>{f.q}</div>
              <div style={{ font: "400 15px/24px var(--font-inter)", color: "#475569" }}>{f.a}</div>
            </div>
          ))}
        </div>
      </Band>

      <CtaBand title="Run a security review with us." body="Book a demo and we'll walk your team through workspace isolation, roles, sessions, and audit logs in the product." />
    </PageShell>
  );
}
