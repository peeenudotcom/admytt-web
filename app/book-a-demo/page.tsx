import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Book a 30-minute adMYTT walkthrough on a workspace set up for your operating model — enquiry to enrolment on one connected record, plus a clear migration plan.",
  alternates: { canonical: "/book-a-demo" },
};

const steps = [
  { n: "1", title: "You tell us how you operate", desc: "Branches, teams, and the stages you run today." },
  { n: "2", title: "We walk the live product", desc: "Enquiry to enrolment on one connected record." },
  { n: "3", title: "You get a migration plan", desc: "A clear path to move your data across." },
];

const reassurance = [
  "We reply within one business day",
  "No slides — a walkthrough on your real workflow",
  "Your details are used only to schedule your demo",
];

export default function BookADemoPage() {
  return (
    <PageShell>
      <section style={{ background: "linear-gradient(135deg,#4F46E5 0%,#0F172A 100%)", padding: "72px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,#4F46E5 0%,transparent 70%)", opacity: 0.4 }} />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} data-demoform="1">
          <div style={{ paddingTop: 8 }}>
            <h1 data-h2 style={{ font: "800 40px/47px var(--font-inter)", letterSpacing: "-.02em", color: "#fff", marginBottom: 18 }}>See how adMYTT fits the way your consultancy works.</h1>
            <p style={{ font: "400 18px/28px var(--font-inter)", color: "#c2cbe6", marginBottom: 30 }}>Book a 30-minute walkthrough on a workspace set up for your operating model. No slides — just the product, on your real workflow.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 30 }}>
              {steps.map((s) => (
                <div key={s.n} style={{ display: "flex", alignItems: "flex-start", gap: 13 }}>
                  <span style={{ width: 28, height: 28, flexShrink: 0, borderRadius: 8, background: "rgba(255,255,255,.1)", color: "#5fd0a6", display: "flex", alignItems: "center", justifyContent: "center", font: "700 13px var(--font-inter)" }}>{s.n}</span>
                  <div>
                    <div style={{ font: "700 15px var(--font-inter)", color: "#fff" }}>{s.title}</div>
                    <div style={{ font: "400 14px/21px var(--font-inter)", color: "#aab4d6" }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {reassurance.map((r) => (
                <div key={r} style={{ display: "flex", alignItems: "center", gap: 9, font: "500 14px var(--font-inter)", color: "#c2cbe6" }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#5fd0a6" }} />
                  {r}
                </div>
              ))}
            </div>
          </div>
          <DemoForm />
        </div>
      </section>
    </PageShell>
  );
}
