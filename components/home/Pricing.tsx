"use client";

import Link from "next/link";
import { useState } from "react";
import { planData } from "@/lib/content";
import { track } from "@/lib/analytics";

const segBtn = (on: boolean): React.CSSProperties => ({
  font: "700 13.5px var(--font-inter)",
  border: "none",
  borderRadius: 7,
  padding: "9px 18px",
  cursor: "pointer",
  background: on ? "#fff" : "transparent",
  color: on ? "#0F172A" : "#64748B",
  boxShadow: on ? "0 1px 4px rgba(11,18,48,.12)" : "none",
});

export default function Pricing({ withHeading = true }: { withHeading?: boolean }) {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" style={{ background: "#fff", padding: "92px 0" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        {withHeading && (
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 30px" }}>
            <div style={{ font: "700 13px var(--font-inter)", color: "#4F46E5", marginBottom: 12 }}>Pricing</div>
            <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 14 }}>Transparent plans for teams of <span className="hl">every size</span></h2>
            <p style={{ font: "400 18px/28px var(--font-inter)", color: "#475569" }}>Book a demo or talk to sales. Seats and module limits are shown up front — no surprises at renewal.</p>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
          <div role="group" aria-label="Billing period" style={{ display: "inline-flex", background: "#F1F5FB", border: "1px solid #E4EAF3", borderRadius: 10, padding: 4 }}>
            <button aria-pressed={!annual} onClick={() => { setAnnual(false); track("pricing_viewed", { billing: "monthly" }); }} style={segBtn(!annual)}>Monthly</button>
            <button aria-pressed={annual} onClick={() => { setAnnual(true); track("pricing_viewed", { billing: "annual" }); }} style={segBtn(annual)}>Annual · save 20%</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18, alignItems: "start" }} data-pricing="1">
          {planData.map((p) => {
            const f = p.featured;
            const talk = p.m === "Talk to sales";
            const price = talk ? "Talk to sales" : annual ? p.a : p.m;
            const subColor = f ? "#aab4d6" : "#64748B";
            return (
              <div key={p.name} style={{ position: "relative", borderRadius: 14, padding: 30, ...(f ? { background: "#0F172A", border: "1px solid #0F172A", boxShadow: "0 30px 60px -30px rgba(11,18,48,.5)" } : { background: "#fff", border: "1px solid #E9EEF6" }) }}>
                {f && <div style={{ position: "absolute", top: -11, left: 24, background: "#B91C1C", color: "#fff", font: "700 11px var(--font-inter)", borderRadius: 999, padding: "4px 12px" }}>Most popular</div>}
                <div style={{ font: "700 17px var(--font-inter)", color: f ? "#fff" : "#0F172A", marginBottom: 6 }}>{p.name}</div>
                <div style={{ font: "400 13.5px/20px var(--font-inter)", color: subColor, marginBottom: 20, minHeight: 40 }}>{p.who}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 4 }}>
                  <span style={{ font: "800 38px var(--font-inter)", color: f ? "#fff" : "#0F172A" }}>{price}</span>
                  <span style={{ font: "500 14px var(--font-inter)", color: subColor }}>{talk ? "" : "/ seat / mo"}</span>
                </div>
                <div style={{ font: "500 12.5px var(--font-inter)", color: subColor, marginBottom: 22 }}>{talk ? "Custom pricing for your network" : annual ? "billed annually, per seat" : "billed monthly, per seat"}</div>
                <Link
                  href="/book-a-demo"
                  onClick={() => track("plan_selected", { plan: p.name })}
                  style={{ display: "block", textAlign: "center", textDecoration: "none", font: "700 14.5px var(--font-inter)", borderRadius: 8, padding: 13, ...(f ? { background: "#4F46E5", color: "#fff" } : talk ? { background: "#fff", color: "#4F46E5", border: "1px solid #DCE3EE" } : { background: "#4F46E5", color: "#fff" }) }}
                >
                  {talk ? "Talk to sales" : "Book a demo"}
                </Link>
                <div style={{ height: 1, background: f ? "rgba(255,255,255,.12)" : "#EEF2F8", margin: "22px 0" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {p.features.map((feat) => (
                    <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 9, font: "500 13.5px/20px var(--font-inter)", color: f ? "#dfe5f4" : "#334155" }}>
                      <span style={{ color: f ? "#5fd0a6" : "#0F9F6E", fontWeight: 700 }}>✓</span>
                      {feat}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "center", font: "500 13px var(--font-inter)", color: "#64748B", marginTop: 24 }}>
          Prices shown exclusive of applicable taxes. Annual billing is committed for 12 months. Cancel anytime; your data stays exportable.
        </div>
      </div>
    </section>
  );
}
