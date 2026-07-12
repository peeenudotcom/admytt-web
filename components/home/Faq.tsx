"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function Faq({ withHeading = true }: { withHeading?: boolean }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" style={{ background: "#F8FAFC", padding: "92px 0", borderTop: "1px solid #EEF2F8" }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "0 28px" }}>
        {withHeading && (
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ font: "700 13px var(--font-inter)", letterSpacing: ".08em", textTransform: "uppercase", color: "#4F46E5", marginBottom: 14 }}>Questions, answered honestly</div>
            <h2 data-h2 style={{ font: "800 48px/53px var(--font-inter)", letterSpacing: "-.025em", color: "#0F172A", marginBottom: 14 }}>Frequently <span className="hl">asked</span>.</h2>
            <p style={{ font: "400 17px/27px var(--font-inter)", color: "#475569" }}>
              If it isn&apos;t here, email <a href="mailto:info@admytt.com" style={{ color: "#4F46E5", fontWeight: 600, textDecoration: "none" }}>info@admytt.com</a> — we reply within one business day.
            </p>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }} data-faq="1">
          {faqs.map((f, i) => {
            const on = i === open;
            return (
              <div key={f.q} className="faq-item" style={{ borderRadius: 11, overflow: "hidden" }}>
                <button
                  onClick={() => setOpen(on ? -1 : i)}
                  aria-expanded={on}
                  style={{ width: "100%", display: "flex", alignItems: "center", gap: 16, background: "none", border: "none", padding: "19px 22px", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ font: "700 16.5px var(--font-inter)", color: "#0F172A", flex: 1 }}>{f.q}</span>
                  <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", font: "400 22px var(--font-inter)", background: on ? "#4F46E5" : "#F1F5FB", color: on ? "#fff" : "#64748B", transform: `rotate(${on ? 45 : 0}deg)`, transition: "all .2s" }}>+</span>
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
