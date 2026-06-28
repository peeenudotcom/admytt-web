import DemoForm from "@/components/DemoForm";

const steps = [
  { n: "1", title: "You tell us how you operate", desc: "Branches, teams, and the stages you run today." },
  { n: "2", title: "We walk the live product", desc: "Enquiry to enrolment on one connected record." },
  { n: "3", title: "You get a migration plan", desc: "A clear path to move your data across." },
];

export default function DemoSection() {
  return (
    <section id="demo" style={{ background: "#0A0A0F", padding: "92px 0", position: "relative", overflow: "hidden" }}>
      {/* same dark grid + violet glow as the hero, so the page bookends */}
      <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)", backgroundSize: "44px 44px", maskImage: "radial-gradient(120% 90% at 50% 100%, #000 35%, transparent 80%)", WebkitMaskImage: "radial-gradient(120% 90% at 50% 100%, #000 35%, transparent 80%)" }} />
      <div aria-hidden style={{ position: "absolute", bottom: -180, left: "50%", transform: "translateX(-50%)", width: 1000, height: 520, background: "radial-gradient(closest-side, rgba(124,58,237,.28), rgba(79,70,229,.14), transparent)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }} data-demoform="1">
        <div style={{ paddingTop: 8 }}>
          <h2 data-h2 style={{ font: "800 40px/47px var(--font-inter)", letterSpacing: "-.02em", color: "#fff", marginBottom: 18 }}>See how adMYTT fits the way your consultancy works.</h2>
          <p style={{ font: "400 18px/28px var(--font-inter)", color: "#c2cbe6", marginBottom: 30 }}>Book a 30-minute walkthrough on a workspace set up for your operating model. No slides — just the product, on your real workflow.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
        </div>
        <DemoForm />
      </div>
    </section>
  );
}
