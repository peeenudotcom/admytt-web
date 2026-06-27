"use client";

import { useScene } from "@/lib/useScene";
import { aiActions } from "@/lib/content";
import { onDark, pillDark } from "./sceneStyles";

const AI_DURATIONS = [1300, 500, 550, 550, 650, 700, 1500, 800, 1500];

const fade = (on: boolean): React.CSSProperties => ({ opacity: on ? 1 : 0, transform: `translateY(${on ? 0 : 8}px)`, transition: "opacity .35s,transform .35s" });

const alertBase: React.CSSProperties = { background: "#FCEFDD", borderLeft: "3px solid #D97706", borderRadius: 8, padding: "13px 15px", transition: "box-shadow .3s,border-color .3s" };
const alertSel: React.CSSProperties = { background: "#FCEFDD", border: "1px solid #E9B872", borderLeft: "3px solid #D97706", borderRadius: 8, padding: "13px 15px", boxShadow: "0 0 0 3px rgba(217,119,6,.16)", transition: "box-shadow .3s,border-color .3s" };

export default function AICommandCentre() {
  const { step: as, playing, sceneRef, progRef, toggle, replay, onEnter, onLeave } = useScene({
    durations: AI_DURATIONS,
    reducedFinalStep: 8,
  });

  const scanning = as < 2;
  const a1 = as >= 2;
  const selected = as >= 5;
  const drafting = as === 6;
  const draftReady = as >= 7;
  const showStatement = as >= 8;

  return (
    <section id="ai" style={{ background: "linear-gradient(160deg,#0F172A 0%,#161a52 100%)", padding: "92px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,#4F46E5 0%,transparent 70%)", opacity: 0.4 }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} data-ai="1">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 999, padding: "6px 14px", font: "700 12px var(--font-inter)", color: "#cdd6ee", marginBottom: 20 }}>AI Command Centre</div>
            <h2 data-h2 style={{ font: "800 38px/45px var(--font-inter)", letterSpacing: "-.02em", color: "#fff", marginBottom: 16 }}>AI that does the work, not the talking</h2>
            <p style={{ font: "400 18px/28px var(--font-inter)", color: "#b7c0dd", marginBottom: 26 }}>Every suggestion maps to a real product action your team can review and act on. adMYTT never makes final admission, financial, legal, or visa decisions.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 11 }}>
              {aiActions.map((act) => (
                <div key={act} style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 9, padding: "11px 13px", font: "600 13.5px var(--font-inter)", color: "#e7ebf7" }}>
                  <span style={{ color: "#5fd0a6" }}>●</span>
                  {act}
                </div>
              ))}
            </div>
          </div>

          <div ref={sceneRef} onMouseEnter={onEnter} onMouseLeave={onLeave} onFocusCapture={onEnter} onBlurCapture={onLeave} style={{ background: "#fff", borderRadius: 14, overflow: "hidden", boxShadow: "0 30px 70px -28px rgba(0,0,0,.6)" }}>
            <div style={{ background: "#161a52", padding: "12px 16px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 30, height: 30, borderRadius: 8, background: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center", font: "700 13px var(--font-inter)", color: "#fff", flexShrink: 0 }}>AI</span>
              <div style={{ font: "700 13px var(--font-inter)", color: "#fff", flex: 1, minWidth: 0 }}>Operational briefing</div>
              <span style={pillDark}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0F9F6E", animation: "adpulse 1.6s infinite" }} />
                Live demo
              </span>
              <button aria-pressed={playing} aria-label={playing ? "Pause AI demo" : "Play AI demo"} onClick={toggle} style={onDark}>{playing ? "❚❚" : "▶"}</button>
              <button aria-label="Replay AI demo" onClick={replay} style={onDark}>↻</button>
            </div>
            <div style={{ height: 3, background: "#0d1340" }}>
              <div ref={progRef} style={{ height: "100%", width: 0, background: "#4F46E5", transition: "width .12s linear" }} />
            </div>
            <div style={{ padding: "16px 18px", minHeight: 316 }}>
              {scanning ? (
                <div style={{ display: "flex", flexDirection: "column", gap: 11, padding: "26px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, font: "600 13.5px var(--font-inter)", color: "#475569" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4F46E5", animation: "adpulse 1s infinite" }} />
                    Scanning today&apos;s work…
                  </div>
                  <div style={{ height: 6, borderRadius: 999, background: "#EEF2F8", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "32%", background: "#4F46E5", borderRadius: 999, animation: "adscan 1.1s infinite" }} />
                  </div>
                  <div style={{ font: "500 11.5px var(--font-inter)", color: "#94a3b8" }}>Reviewing 128 leads · 37 applications · 6 visa cases — demo data</div>
                </div>
              ) : (
                a1 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={selected ? alertSel : alertBase}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                        <div style={{ font: "700 13px var(--font-inter)", color: "#0F172A" }}>3 leads at risk of going cold</div>
                        {selected && <span style={{ font: "700 9.5px var(--font-inter)", color: "#fff", background: "#D97706", borderRadius: 999, padding: "2px 8px", flexShrink: 0 }}>Selected</span>}
                      </div>
                      <div style={{ font: "500 12px var(--font-inter)", color: "#64748B", marginTop: 3 }}>No contact in 5+ days. AI can draft follow-ups for your review.</div>
                    </div>
                    <div style={fade(as >= 3)}>
                      <div style={{ background: "#FBE9E9", borderLeft: "3px solid #B91C1C", borderRadius: 8, padding: "13px 15px" }}>
                        <div style={{ font: "700 13px var(--font-inter)", color: "#0F172A" }}>Priya Sharma — missing financial document</div>
                        <div style={{ font: "500 12px var(--font-inter)", color: "#64748B", marginTop: 3 }}>Visa filing blocked until the bank statement is verified.</div>
                      </div>
                    </div>
                    <div style={fade(as >= 4)}>
                      <div style={{ background: "#E6F6EF", borderLeft: "3px solid #0F9F6E", borderRadius: 8, padding: "13px 15px" }}>
                        <div style={{ font: "700 13px var(--font-inter)", color: "#0F172A" }}>Application risk: low across 37 files</div>
                        <div style={{ font: "500 12px var(--font-inter)", color: "#64748B", marginTop: 3 }}>2 deadlines this week — owners notified.</div>
                      </div>
                    </div>
                    <div style={{ overflow: "hidden", transition: "max-height .5s ease,opacity .4s", maxHeight: as >= 6 ? 230 : 0, opacity: as >= 6 ? 1 : 0 }}>
                      <div style={{ border: "1px solid #E4EAF3", borderRadius: 9, padding: "13px 14px", background: "#F8FAFE" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                          <span style={{ width: 22, height: 22, borderRadius: 6, background: "#4F46E5", color: "#fff", font: "700 10px var(--font-inter)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>AI</span>
                          <span style={{ font: "700 12px var(--font-inter)", color: "#0F172A" }}>Drafting follow-up</span>
                          {draftReady && <span style={{ marginLeft: "auto", font: "700 9.5px var(--font-inter)", color: "#0F9F6E", background: "#E6F6EF", borderRadius: 999, padding: "2px 8px" }}>Ready for counsellor review</span>}
                        </div>
                        {drafting && (
                          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            <div style={{ height: 9, borderRadius: 5, background: "#E7EDF6", width: "92%", overflow: "hidden", position: "relative" }}>
                              <div style={{ position: "absolute", inset: 0, width: "40%", background: "linear-gradient(90deg,transparent,#cdd9ef,transparent)", animation: "adscan 1s infinite" }} />
                            </div>
                            <div style={{ height: 9, borderRadius: 5, background: "#E7EDF6", width: "78%" }} />
                            <div style={{ height: 9, borderRadius: 5, background: "#E7EDF6", width: "64%" }} />
                          </div>
                        )}
                        {draftReady && (
                          <>
                            <div style={{ font: "500 12px/18px var(--font-inter)", color: "#334155", background: "#fff", border: "1px solid #EAEFF7", borderRadius: 7, padding: "10px 11px" }}>
                              Hi Rahul, following up on your enquiry about studying in Canada. I&apos;d love to share two programmes that match your profile and walk you through next steps — are you free for a quick call tomorrow?
                            </div>
                            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                              <button style={{ font: "700 11.5px var(--font-inter)", color: "#fff", background: "#4F46E5", border: "none", borderRadius: 7, padding: "8px 14px", cursor: "pointer" }}>Review draft</button>
                              <button style={{ font: "700 11.5px var(--font-inter)", color: "#475569", background: "#fff", border: "1px solid #DCE3EE", borderRadius: 7, padding: "8px 14px", cursor: "pointer" }}>Edit</button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    {showStatement && (
                      <div style={{ display: "flex", alignItems: "center", gap: 9, background: "#EEF2FF", borderRadius: 8, padding: "11px 13px", font: "700 12.5px var(--font-inter)", color: "#4F46E5" }}>
                        <span style={{ color: "#4F46E5" }}>◆</span>AI suggests. Your team decides.
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
