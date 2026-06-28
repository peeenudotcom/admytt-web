import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { T, F } from "@/lib/theme";
import { AppFrame, type FloatChip } from "@/components/product/AppFrame";
import LiveLeads from "@/components/product/LiveLeads";
import LiveDocuments from "@/components/product/LiveDocuments";
import LiveVisa from "@/components/product/LiveVisa";

type Block = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  href: string;
  url: string;
  screen: React.ReactNode;
  chips: FloatChip[];
};

const blocks: Block[] = [
  {
    eyebrow: "Leads & pipeline",
    title: "Capture every enquiry and call the right lead first",
    body: "Enquiries land from web, WhatsApp, and referrals, get auto-assigned, and are scored so counsellors work the highest-intent students first.",
    points: ["Multi-channel capture & auto-assignment", "AI lead scoring and case health", "Saved views for each counsellor"],
    href: "/product#leads",
    url: "app.admytt.com/leads",
    screen: <LiveLeads />,
    chips: [
      { dot: T.primary, text: "Auto-assigned · Aisha Khan", style: { top: 30, left: -18, animation: "adfloat 5s ease-in-out infinite" } },
      { dot: T.success, text: "Score 82 · high intent", style: { bottom: 26, right: -14, animation: "adfloat2 6s ease-in-out infinite" } },
    ],
  },
  {
    eyebrow: "Documents",
    title: "Know exactly what's missing on every file",
    body: "A readiness checklist per application shows what's verified, in review, missing, or rejected — so nothing blocks an offer or a visa filing.",
    points: ["Per-application readiness checklist", "Versioned uploads with review status", "Private, workspace-scoped storage"],
    href: "/product#documents",
    url: "app.admytt.com/documents",
    screen: <LiveDocuments />,
    chips: [
      { dot: T.success, text: "SoP verified", style: { top: 28, right: -14, animation: "adfloat2 5.5s ease-in-out infinite" } },
      { dot: "#F59E0B", text: "1 doc pending", style: { bottom: 30, left: -16, animation: "adfloat 6s ease-in-out infinite" } },
    ],
  },
  {
    eyebrow: "Visa & enrolment",
    title: "Take every case from CAS to a recorded outcome",
    body: "Country-specific checklists, filing stages, and clear ownership move each visa case forward, with outcomes recorded against the student record.",
    points: ["Country checklists and filing stages", "Owner and decision on every case", "Outcomes roll up to reporting"],
    href: "/product#visa",
    url: "app.admytt.com/visas",
    screen: <LiveVisa />,
    chips: [
      { dot: T.success, text: "Ready to file", style: { top: 30, left: -16, animation: "adfloat 5s ease-in-out infinite" } },
      { dot: T.primary, text: "Biometrics booked", style: { bottom: 28, right: -14, animation: "adfloat2 6s ease-in-out infinite" } },
    ],
  },
];

export default function ValueBlocks() {
  return (
    <section style={{ background: T.surface, padding: "84px 0", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 28px", display: "flex", flexDirection: "column", gap: 80 }}>
        {blocks.map((b, i) => {
          const reverse = i % 2 === 1;
          return (
            <div key={b.eyebrow} style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 52, alignItems: "center" }} data-ai="1">
              <div style={{ order: reverse ? 2 : 1 }}>
                <div style={{ font: `700 13px ${F}`, color: T.primary, marginBottom: 12 }}>{b.eyebrow}</div>
                <h2 data-h2 style={{ font: `800 32px/40px ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: 14 }}>{b.title}</h2>
                <p style={{ font: `400 16.5px/26px ${F}`, color: T.muted, marginBottom: 20 }}>{b.body}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
                  {b.points.map((p) => (
                    <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, font: `500 15px/22px ${F}`, color: T.text }}>
                      <span style={{ color: T.primary, fontWeight: 800, marginTop: 1 }}>✓</span> {p}
                    </div>
                  ))}
                </div>
                <Link href={b.href} style={{ display: "inline-flex", alignItems: "center", gap: 7, font: `700 14.5px ${F}`, color: T.primary, textDecoration: "none" }}>
                  Explore {b.eyebrow.toLowerCase()} <ArrowRight size={15} />
                </Link>
              </div>
              <div style={{ order: reverse ? 1 : 2 }}>
                <AppFrame url={b.url} chips={b.chips}>{b.screen}</AppFrame>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
