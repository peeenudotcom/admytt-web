import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import { T, F, MONO } from "@/lib/theme";
import { site } from "@/lib/site";
import AtlasHero from "@/components/product/atlas/AtlasHero";
import WorkflowExplorer from "@/components/product/atlas/WorkflowExplorer";
import RecordAnatomy from "@/components/product/atlas/RecordAnatomy";
import RoleExplorer from "@/components/product/atlas/RoleExplorer";
import AIDecisionFlow from "@/components/product/atlas/AIDecisionFlow";
import PlatformMap from "@/components/product/atlas/PlatformMap";
import TechnicalFoundation from "@/components/product/atlas/TechnicalFoundation";

const title = "Inside adMYTT — explore the product";
const description =
  "An interactive tour of the adMYTT platform: explore twelve connected workflows, the anatomy of one student record, what each role sees, how AI surfaces the next action under human control, the system map, and the technical foundation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product" },
  openGraph: { title, description, url: "/product", type: "website", siteName: site.name },
  twitter: { card: "summary_large_image", title, description },
};

function Section({ id, bg = "#fff", eyebrow, heading, lead, children }: { id?: string; bg?: string; eyebrow: string; heading: string; lead?: string; children: React.ReactNode }) {
  return (
    <section id={id} style={{ background: bg, padding: "78px 0", borderTop: `1px solid ${T.border}`, scrollMarginTop: 70 }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ maxWidth: 760, marginBottom: 36 }}>
          <div style={{ font: `700 11px ${MONO}`, letterSpacing: ".08em", color: T.primary, marginBottom: 12, textTransform: "uppercase" }}>{eyebrow}</div>
          <h2 data-h2 style={{ font: `800 34px/42px ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: lead ? 12 : 0 }}>{heading}</h2>
          {lead && <p style={{ font: `400 17px/27px ${F}`, color: T.muted }}>{lead}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section style={{ background: "linear-gradient(135deg,#4F46E5 0%,#0F172A 100%)", padding: "82px 0", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", bottom: -100, left: -60, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,#4F46E5 0%,transparent 70%)", opacity: 0.4 }} />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 28px", position: "relative", textAlign: "center" }}>
        <h2 data-h2 style={{ font: `800 34px/42px ${F}`, letterSpacing: "-.02em", color: "#fff", marginBottom: 16 }}>Now see adMYTT using your own operating model.</h2>
        <p style={{ font: `400 18px/28px ${F}`, color: "#c2cbe6", marginBottom: 30 }}>
          We will configure a walkthrough around your branches, team roles, lead stages and student journey.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/book-a-demo" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: "#4F46E5", padding: "15px 28px", borderRadius: 9, boxShadow: "0 10px 24px rgba(79,70,229,.3)" }}>
            Book a product walkthrough <ArrowRight size={16} />
          </Link>
          <Link href="/security" style={{ display: "inline-flex", alignItems: "center", gap: 8, font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.2)", padding: "15px 26px", borderRadius: 9 }}>
            <ShieldCheck size={16} /> View security architecture
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProductPage() {
  return (
    <PageShell>
      <AtlasHero />

      <Section
        id="workflow-explorer"
        bg="#fff"
        eyebrow="Workflow explorer"
        heading="Follow the work through twelve connected workspaces."
        lead="Select a workflow to change the product canvas. Each one shows what the team sees, what they can act on, what moves forward, where AI assists, and who keeps approval."
      >
        <WorkflowExplorer />
      </Section>

      <Section
        id="record"
        bg={T.bg}
        eyebrow="Anatomy of a student record"
        heading="One record carries the context forward."
        lead="Every team works from the same student history while permissions determine what each person can view and change. Open a layer to see what it holds and who can reach it."
      >
        <RecordAnatomy />
      </Section>

      <Section
        id="role-explorer"
        bg="#fff"
        eyebrow="Explore by role"
        heading="The same platform, focused for every role."
        lead="Switch roles to see each person's daily workspace, their priority information and actions, what stays restricted, and the reports they rely on."
      >
        <RoleExplorer />
      </Section>

      <Section
        id="ai"
        bg={T.bg}
        eyebrow="AI decision flow"
        heading="AI finds the work. Your team makes the decision."
        lead="Pick a situation to trace it from a workspace signal to a recorded outcome. The suggestion is always reviewed by a person before anything happens."
      >
        <AIDecisionFlow />
      </Section>

      <Section
        id="map"
        bg="#fff"
        eyebrow="Platform map"
        heading="Every module connects to one student record."
        lead="Six groups of capability, all reading from and writing to the same source of truth."
      >
        <PlatformMap />
      </Section>

      <Section
        id="security"
        bg={T.bg}
        eyebrow="Technical foundation"
        heading="Built on isolation, role-based access and an audit trail."
        lead="The controls we operate, as a specification. We describe only what genuinely exists, and do not claim SOC 2, ISO 27001 or other certifications unless formally verified."
      >
        <TechnicalFoundation />
      </Section>

      <FinalCta />
    </PageShell>
  );
}
