"use client";

import Link from "next/link";
import { useScene } from "@/lib/useScene";
import { track } from "@/lib/analytics";
import { onDark, pillDark } from "./sceneStyles";

const HERO_DURATIONS = [1100, 700, 450, 800, 1600, 800, 950, 850, 850, 850, 1600];

// Simulated-cursor keyframes per step.
const CURSOR = [
  { o: 0, l: "85%", t: "250px", s: 1 },
  { o: 1, l: "80%", t: "58px", s: 1 },
  { o: 1, l: "80%", t: "58px", s: 0.8 },
  { o: 1, l: "55%", t: "150px", s: 1 },
  { o: 1, l: "55%", t: "150px", s: 1 },
  { o: 1, l: "48%", t: "300px", s: 0.8 },
  { o: 0, l: "48%", t: "300px", s: 1 },
  { o: 0, l: "48%", t: "300px", s: 1 },
  { o: 0, l: "48%", t: "300px", s: 1 },
  { o: 0, l: "48%", t: "300px", s: 1 },
  { o: 0, l: "48%", t: "300px", s: 1 },
];

export default function Hero() {
  const { step: hs, playing, sceneRef, progRef, toggle, replay, onEnter, onLeave } = useScene({
    durations: HERO_DURATIONS,
    reducedFinalStep: 10,
  });

  const C = CURSOR[hs] || CURSOR[10];
  const showForm = hs >= 3 && hs <= 5;

  return (
    <section id="top" style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 120% at 80% -10%,#EEF2FF 0%,#F8FAFC 55%)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "64px 28px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.02fr .98fr", gap: 48, alignItems: "center" }} data-hero="1">
          {/* ---- Copy ---- */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#fff", border: "1px solid #E1E8F4", borderRadius: 999, padding: "6px 13px 6px 8px", font: "600 12.5px var(--font-inter)", color: "#334155", marginBottom: 24 }}>
              <span style={{ background: "#EEF2FF", color: "#4F46E5", borderRadius: 999, padding: "2px 8px", font: "700 11px var(--font-inter)" }}>CRM</span>
              Built for education consultancies, not adapted for them
            </div>
            <h1 data-h1 style={{ font: "800 53px/60px var(--font-inter)", letterSpacing: "-.02em", color: "#0F172A", marginBottom: 20 }}>
              Run your education consultancy from first enquiry to visa outcome.
            </h1>
            <p style={{ font: "400 18.5px/29px var(--font-inter)", color: "#475569", maxWidth: 540, marginBottom: 30 }}>
              Bring leads, counselling, applications, documents, payments, visas, partners, and team operations into one secure CRM built for education businesses.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 18 }}>
              <Link href="#demo" onClick={() => track("hero_demo_clicked", { location: "hero" })} style={{ font: "700 15.5px var(--font-inter)", color: "#fff", textDecoration: "none", background: "#4F46E5", padding: "15px 28px", borderRadius: 8, boxShadow: "0 10px 24px rgba(79,70,229,.3)" }}>
                Book a demo
              </Link>
              <Link href="/product" style={{ font: "700 15.5px var(--font-inter)", color: "#0F172A", textDecoration: "none", background: "#fff", border: "1px solid #DCE3EE", padding: "15px 26px", borderRadius: 8 }}>
                See the product
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap", font: "500 13.5px var(--font-inter)", color: "#64748B" }}>
              {["Workspace-isolated data", "Guided data migration", "Demo on your real workflow"].map((t) => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#0F9F6E" }} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ---- Live product scene ---- */}
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: "18px -40px -30px 0", background: "linear-gradient(135deg,#4F46E5,#4F46E5)", borderRadius: 18, opacity: 0.1, transform: "rotate(2deg)" }} />
            <div
              ref={sceneRef}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              onFocusCapture={onEnter}
              onBlurCapture={onLeave}
              style={{ position: "relative", background: "#fff", border: "1px solid #E4EAF3", borderRadius: 14, boxShadow: "0 30px 70px -24px rgba(11,18,48,.35)", overflow: "hidden" }}
            >
              <div style={{ height: 40, background: "#0F172A", display: "flex", alignItems: "center", gap: 7, padding: "0 12px" }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#B91C1C" }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E6A100" }} />
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#0F9F6E" }} />
                <span style={{ marginLeft: 10, font: "600 11px var(--font-inter)", color: "#9aa6c4" }}>app.admytt.com / leads</span>
                <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={pillDark}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0F9F6E", animation: "adpulse 1.6s infinite" }} />
                    Live demo
                  </span>
                  <button aria-pressed={playing} aria-label={playing ? "Pause hero demo" : "Play hero demo"} onClick={toggle} style={onDark}>{playing ? "❚❚" : "▶"}</button>
                  <button aria-label="Replay hero demo" onClick={replay} style={onDark}>↻</button>
                </div>
              </div>
              <div style={{ height: 3, background: "#EEF2F8" }}>
                <div ref={progRef} style={{ height: "100%", width: 0, background: "#4F46E5", transition: "width .12s linear" }} />
              </div>
              <div style={{ display: "flex", minHeight: 360, position: "relative" }}>
                <div data-hsb="1" style={{ width: 56, background: "#161a52", display: "flex", flexDirection: "column", alignItems: "center", gap: 7, padding: "14px 0", flexShrink: 0 }}>
                  <span style={{ width: 26, height: 26, borderRadius: 7, background: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", font: "700 12px var(--font-inter)", color: "#fff" }}>a</span>
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,.16)" }} />
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,.07)" }} />
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,.07)" }} />
                  <span style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,.07)" }} />
                </div>
                <div style={{ flex: 1, padding: "16px 18px", position: "relative", minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <div style={{ font: "700 14px var(--font-inter)", color: "#0F172A" }}>Leads · Today&apos;s work</div>
                      <div style={{ display: "inline-block", marginTop: 4, font: "600 9.5px var(--font-inter)", color: "#64748B", background: "#F1F5FB", borderRadius: 5, padding: "2px 7px" }}>Demo data</div>
                    </div>
                    <button style={{ font: "700 10.5px var(--font-inter)", color: "#fff", background: hs === 2 ? "#4338CA" : "#4F46E5", border: "none", borderRadius: 7, padding: "5px 11px", cursor: "pointer", transform: `scale(${hs === 2 ? 0.92 : 1})`, transition: "transform .15s,background .15s" }}>+ Add lead</button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 9, marginBottom: 12 }}>
                    <div style={{ background: "#F8FAFC", border: "1px solid #EAEFF7", borderRadius: 9, padding: 10 }}>
                      <div style={{ font: "800 21px var(--font-inter)", color: "#0F172A" }}>{hs >= 6 ? "129" : "128"}</div>
                      <div style={{ font: "500 10.5px var(--font-inter)", color: "#64748B" }}>Open leads</div>
                    </div>
                    <div style={{ background: "#F8FAFC", border: "1px solid #EAEFF7", borderRadius: 9, padding: 10 }}>
                      <div style={{ font: "800 21px var(--font-inter)", color: "#4F46E5" }}>37</div>
                      <div style={{ font: "500 10.5px var(--font-inter)", color: "#64748B" }}>Applications</div>
                    </div>
                    <div style={{ background: "#F8FAFC", border: "1px solid #EAEFF7", borderRadius: 9, padding: 10 }}>
                      <div style={{ font: "800 21px var(--font-inter)", color: "#B91C1C" }}>6</div>
                      <div style={{ font: "500 10.5px var(--font-inter)", color: "#64748B" }}>Visas due</div>
                    </div>
                  </div>
                  <div style={{ font: "700 10.5px var(--font-inter)", color: "#94a3b8", marginBottom: 8, textTransform: "uppercase", letterSpacing: ".04em" }}>Pipeline</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <div style={{ overflow: "hidden", transition: "max-height .45s ease,opacity .4s,margin .4s", maxHeight: hs >= 6 ? 150 : 0, opacity: hs >= 6 ? 1 : 0, marginBottom: hs >= 6 ? 8 : 0 }}>
                      <div style={{ background: "#fff", border: "1px solid #9bbcf5", borderRadius: 9, padding: "10px 11px", boxShadow: "0 0 0 3px rgba(79,70,229,.12)" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#E6F6EF", color: "#0F9F6E", font: "700 12px var(--font-inter)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>RM</span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ font: "600 12.5px var(--font-inter)", color: "#0F172A" }}>Rahul Mehta</div>
                            <div style={{ font: "500 10.5px var(--font-inter)", color: "#94a3b8" }}>Undergraduate · Canada</div>
                          </div>
                          <span style={{ font: "600 10px var(--font-inter)", color: "#4F46E5", background: "#EEF2FF", borderRadius: 999, padding: "3px 9px", flexShrink: 0 }}>New enquiry</span>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 8, paddingLeft: 40 }}>
                          {hs >= 7 && <span style={{ font: "600 10px var(--font-inter)", color: "#4F46E5", background: "#EEF2FF", borderRadius: 999, padding: "3px 8px" }}>Owner · Aisha Khan</span>}
                          {hs >= 8 && <span style={{ font: "600 10px var(--font-inter)", color: "#0F9F6E", background: "#E6F6EF", borderRadius: 999, padding: "3px 8px" }}>Score 82 · high intent</span>}
                          {hs >= 9 && <span style={{ font: "600 10px var(--font-inter)", color: "#D97706", background: "#FCEFDD", borderRadius: 999, padding: "3px 8px" }}>Follow-up · today 4:00 PM</span>}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: "1px solid #EAEFF7", borderRadius: 9, padding: "9px 11px" }}>
                      <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#EEF2FF", color: "#4F46E5", font: "700 12px var(--font-inter)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>PS</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ font: "600 12.5px var(--font-inter)", color: "#0F172A" }}>Priya Sharma</div>
                        <div style={{ font: "500 10.5px var(--font-inter)", color: "#94a3b8" }}>MSc Data Science · UK</div>
                      </div>
                      <span style={{ font: "600 10px var(--font-inter)", color: "#0F9F6E", background: "#E6F6EF", borderRadius: 999, padding: "3px 9px", flexShrink: 0 }}>Offer</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, background: "#fff", border: "1px solid #EAEFF7", borderRadius: 9, padding: "9px 11px" }}>
                      <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#FBE9E9", color: "#B91C1C", font: "700 12px var(--font-inter)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>AK</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ font: "600 12.5px var(--font-inter)", color: "#0F172A" }}>Arjun Kapoor</div>
                        <div style={{ font: "500 10.5px var(--font-inter)", color: "#94a3b8" }}>BBA · Canada</div>
                      </div>
                      <span style={{ font: "600 10px var(--font-inter)", color: "#D97706", background: "#FCEFDD", borderRadius: 999, padding: "3px 9px", flexShrink: 0 }}>Docs due</span>
                    </div>
                  </div>

                  {showForm && (
                    <div style={{ position: "absolute", left: 14, right: 14, top: 72, background: "#fff", border: "1px solid #DCE3EE", borderRadius: 11, boxShadow: "0 24px 50px -18px rgba(11,18,48,.42)", padding: "15px 16px", zIndex: 6 }}>
                      <div style={{ font: "700 13px var(--font-inter)", color: "#0F172A", marginBottom: 11 }}>New lead</div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                        <div>
                          <div style={{ font: "600 9.5px var(--font-inter)", color: "#94a3b8", marginBottom: 3 }}>Full name</div>
                          <div style={{ height: 30, border: "1px solid #E4EAF3", borderRadius: 7, display: "flex", alignItems: "center", padding: "0 10px", font: "600 12px var(--font-inter)", color: "#0F172A" }}>{hs >= 4 ? "Rahul Mehta" : ""}</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
                          <div>
                            <div style={{ font: "600 9.5px var(--font-inter)", color: "#94a3b8", marginBottom: 3 }}>Destination</div>
                            <div style={{ height: 30, border: "1px solid #E4EAF3", borderRadius: 7, display: "flex", alignItems: "center", padding: "0 10px", font: "600 12px var(--font-inter)", color: "#0F172A" }}>{hs >= 4 ? "Canada" : ""}</div>
                          </div>
                          <div>
                            <div style={{ font: "600 9.5px var(--font-inter)", color: "#94a3b8", marginBottom: 3 }}>Source</div>
                            <div style={{ height: 30, border: "1px solid #E4EAF3", borderRadius: 7, display: "flex", alignItems: "center", padding: "0 10px", font: "600 12px var(--font-inter)", color: "#0F172A" }}>{hs >= 4 ? "Website form" : ""}</div>
                          </div>
                        </div>
                        <button style={{ font: "700 11px var(--font-inter)", color: "#fff", background: hs === 5 ? "#4338CA" : "#4F46E5", border: "none", borderRadius: 7, padding: "9px 0", width: "100%", cursor: "pointer", transform: `scale(${hs === 5 ? 0.96 : 1})`, transition: "transform .15s" }}>Create lead</button>
                      </div>
                    </div>
                  )}

                  {hs >= 10 && (
                    <div style={{ position: "absolute", left: 14, right: 14, bottom: 12, background: "#0F172A", borderRadius: 10, padding: "11px 14px", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 16px 34px -14px rgba(11,18,48,.5)", zIndex: 7 }}>
                      <span style={{ width: 22, height: 22, borderRadius: "50%", background: "#0F9F6E", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", font: "700 12px var(--font-inter)", flexShrink: 0 }}>✓</span>
                      <span style={{ font: "600 12px var(--font-inter)", color: "#fff" }}>Lead captured, assigned, and prioritised</span>
                    </div>
                  )}
                </div>
              </div>
              <div style={{ position: "absolute", zIndex: 9, left: C.l, top: C.t, opacity: C.o, transform: `scale(${C.s})`, transition: "left .55s cubic-bezier(.5,0,.2,1),top .55s cubic-bezier(.5,0,.2,1),opacity .3s,transform .18s", pointerEvents: "none" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 3l13 6.5-5.4 1.6L9.6 18z" fill="#0F172A" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: -22, left: -26, background: "#fff", border: "1px solid #E4EAF3", borderRadius: 11, boxShadow: "0 16px 34px -12px rgba(11,18,48,.28)", padding: "11px 14px", display: "flex", alignItems: "center", gap: 10 }} data-float="1">
              <span style={{ width: 34, height: 34, borderRadius: 9, background: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", font: "700 14px var(--font-inter)", color: "#fff" }}>AI</span>
              <div>
                <div style={{ font: "700 12px var(--font-inter)", color: "#0F172A" }}>Auto-assigned to Aisha Khan</div>
                <div style={{ font: "500 11px var(--font-inter)", color: "#94a3b8" }}>Routed by branch rule</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Capability proof ---- */}
      <CapabilityProof />
    </section>
  );
}

function CapabilityProof() {
  const items = [
    { title: "Multi-tenant by design", desc: "Each company operates in its own isolated workspace — records never cross customers." },
    { title: "Built for education work", desc: "Enquiry, counselling, applications, documents, and visa stages are first-class — not custom fields." },
    { title: "One student record", desc: "Every team works from the same record, so context is never lost between people or tools." },
    { title: "Your data stays yours", desc: "Export your records at any time. Role-based access keeps each person scoped to their work." },
  ];
  return (
    <div style={{ maxWidth: 1240, margin: "60px auto 0", padding: "0 28px" }}>
      <div style={{ borderTop: "1px solid #E4EAF3", padding: "30px 0 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }} data-trust="1">
        {items.map((it) => (
          <div key={it.title}>
            <div style={{ font: "700 15px var(--font-inter)", color: "#0F172A", marginBottom: 5 }}>{it.title}</div>
            <div style={{ font: "400 13.5px/20px var(--font-inter)", color: "#64748B" }}>{it.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
