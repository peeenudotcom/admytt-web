"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Workflow, Users, ShieldCheck } from "lucide-react";
import { T, F, MONO } from "@/lib/theme";
import { AppFrame } from "@/components/product/AppFrame";
import { ProductMock } from "@/components/product/ProductMock";
import { workflows } from "@/lib/atlas";

const TOUR = ["today", "leads", "documents", "study-visa", "reports"];
const tourWf = TOUR.map((id) => workflows.find((w) => w.id === id)!);

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

export default function AtlasHero() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceRef = useRef(false);

  useEffect(() => {
    reduceRef.current = !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceRef.current || paused) return;
    const t = setInterval(() => setI((p) => (p + 1) % tourWf.length), 2800);
    return () => clearInterval(t);
  }, [paused]);

  const wf = tourWf[i];

  return (
    <section style={{ background: "linear-gradient(180deg,#FFFFFF 0%, #F5F7FB 100%)", borderBottom: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "26px 28px 12px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: T.indigoBg, border: `1px solid ${T.indigoBorder}`, color: T.primary, borderRadius: 999, padding: "5px 13px", font: `700 12px ${F}`, marginBottom: 16 }}>
          <Sparkles size={13} /> Inside adMYTT
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6 }}>
          <h1 data-h1 style={{ font: `800 44px/50px ${F}`, letterSpacing: "-.025em", color: T.text, maxWidth: 880 }}>
            Explore the operating system behind every <span className="hl">student journey</span>.
          </h1>
          <p style={{ font: `400 18px/28px ${F}`, color: T.muted, maxWidth: 720, marginTop: 10 }}>
            See how enquiries become owned work, student records move across teams, and AI helps surface the next action without taking control away from your staff.
          </p>
        </div>

        {/* Mode controls */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 11, marginTop: 22 }}>
          <button onClick={() => scrollToId("workflow-explorer")} style={{ display: "inline-flex", alignItems: "center", gap: 9, cursor: "pointer", font: `700 14.5px ${F}`, color: "#fff", background: T.text, border: `1px solid ${T.text}`, padding: "12px 20px", borderRadius: 10 }}>
            <Workflow size={16} /> Explore by workflow
          </button>
          <button onClick={() => scrollToId("role-explorer")} style={{ display: "inline-flex", alignItems: "center", gap: 9, cursor: "pointer", font: `700 14.5px ${F}`, color: T.text, background: "#fff", border: `1px solid ${T.border}`, padding: "12px 20px", borderRadius: 10 }}>
            <Users size={16} /> Explore by role
          </button>
        </div>
      </div>

      {/* Interactive product canvas */}
      <div
        style={{ maxWidth: 1240, margin: "20px auto 0", padding: "0 28px 30px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, font: `700 11px ${MONO}`, letterSpacing: ".05em", color: T.success }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: T.green, animation: "adpulse 1.6s infinite" }} /> LIVE TOUR
          </span>
          <span style={{ font: `500 12.5px ${F}`, color: T.subtle }}>A self-guided pass through the workspace — hover to pause, or jump in below.</span>
          <div role="tablist" aria-label="Tour steps" style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
            {tourWf.map((w, idx) => (
              <button
                key={w.id}
                role="tab"
                aria-selected={idx === i}
                aria-label={w.label}
                onClick={() => setI(idx)}
                style={{ width: 24, height: 24, padding: 0, border: "none", background: "transparent", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
              >
                <span aria-hidden style={{ display: "block", width: idx === i ? 22 : 9, height: 9, borderRadius: 999, background: idx === i ? T.primary : "#CBD5E1", transition: "width .2s, background .2s" }} />
              </button>
            ))}
          </div>
        </div>
        <div key={wf.id} style={{ animation: reduceRef.current ? "none" : "adfade .4s ease both" }}>
          <AppFrame url={`app.admytt.com/${wf.id}`} chips={[]} scrollHeight={360}>
            <ProductMock {...wf.canvas} minHeight={360} />
          </AppFrame>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 14, flexWrap: "wrap", font: `600 12.5px ${F}`, color: T.muted }}>
          {["Workspace-isolated data", "Guided migration", "Human-controlled AI"].map((t) => (
            <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 7 }}><ShieldCheck size={13} color={T.success} /> {t}</span>
          ))}
          <span style={{ marginLeft: "auto", font: `500 11px ${MONO}`, color: T.subtle }}>sanitized demo data</span>
        </div>
      </div>
    </section>
  );
}
