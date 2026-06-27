"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq({ withHeading = true }: { withHeading?: boolean }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ background: "#F6F8FC", padding: "92px 0", borderTop: "1px solid #EEF2F8" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 28px" }}>
        {withHeading && (
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ font: "700 13px var(--font-inter)", color: "#2453D4", marginBottom: 12 }}>Frequently asked</div>
            <h2 data-h2 style={{ font: "800 38px/45px var(--font-manrope)", letterSpacing: "-.02em", color: "#0B1230" }}>The questions buyers ask first</h2>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }} data-faq="1">
          {faqs.map((f, i) => {
            const on = i === open;
            return (
              <div key={f.q} style={{ background: "#fff", border: "1px solid #E9EEF6", borderRadius: 11, overflow: "hidden" }}>
                <button
                  onClick={() => setOpen(on ? -1 : i)}
                  aria-expanded={on}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 16, background: "none", border: "none", padding: "19px 22px", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ font: "700 16.5px var(--font-manrope)", color: "#0B1230", flex: 1 }}>{f.q}</span>
                  <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", font: "400 22px var(--font-inter)", background: on ? "#212177" : "#F1F5FB", color: on ? "#fff" : "#94a3b8", transform: `rotate(${on ? 45 : 0}deg)`, transition: "all .2s" }}>+</span>
                </button>
                {on && <div style={{ padding: "0 22px 20px", font: "400 15px/24px var(--font-inter)", color: "#475569" }}>{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
