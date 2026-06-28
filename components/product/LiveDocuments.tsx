"use client";

import { FileText, Check } from "lucide-react";
import { T, F, MONO, warmBadge } from "@/lib/theme";
import { useReveal, easeOut } from "@/lib/useReveal";

/* Live Documents scene (cream): a readiness bar fills and pending/missing files
   flip to "verified" one by one — the document-readiness cascade. */

type Doc = { name: string; sub: string; from: [string, "warn" | "info" | "bad" | "violet"]; at: number };
const docs: Doc[] = [
  { name: "Passport", sub: "v2 · uploaded", from: ["", "info"], at: -1 }, // already verified
  { name: "Offer letter — Leeds", sub: "signed", from: ["", "info"], at: -1 },
  { name: "IELTS scorecard", sub: "band 6.5", from: ["IN REVIEW", "info"], at: 0.35 },
  { name: "Statement of purpose", sub: "draft 3", from: ["MISSING", "bad"], at: 0.55 },
  { name: "Bank statement", sub: "6 months", from: ["UPLOADED", "warn"], at: 0.75 },
  { name: "Medical certificate", sub: "panel clinic", from: ["PENDING", "violet"], at: 0.9 },
];

export default function LiveDocuments() {
  const { ref, p } = useReveal(2200);
  const verifiedCount = 2 + docs.filter((d) => d.at >= 0 && p >= d.at).length;
  const ready = Math.round((verifiedCount / docs.length) * 100);
  const barW = easeOut(p) * 100;

  return (
    <div ref={ref} style={{ background: T.cream, padding: 18, minHeight: 360 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <span style={{ font: `800 17px ${F}`, color: T.ink }}>Documents</span>
        <span style={{ font: `500 10px ${MONO}`, color: T.inkMuted }}>Priya Sharma · #STU-2041</span>
        <span style={{ marginLeft: "auto", ...warmBadge(verifiedCount === docs.length ? "good" : "warn") }}>{verifiedCount} OF {docs.length} READY</span>
      </div>
      <div style={{ height: 6, borderRadius: 999, background: "#EAE4D6", overflow: "hidden", marginBottom: 16 }}>
        <div style={{ height: "100%", width: `${barW}%`, background: `linear-gradient(90deg, ${T.violet}, #0F7B43)`, borderRadius: 999, transition: "none" }} />
      </div>
      <div style={{ background: "#fff", border: `1px solid ${T.creamBorder}`, borderRadius: 14, padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
        {docs.map((d) => {
          const verified = d.at < 0 || p >= d.at;
          return (
            <div key={d.name} style={{ display: "flex", alignItems: "center", gap: 12, border: `1px solid ${T.creamBorder}`, borderRadius: 10, padding: "11px 13px", background: verified ? "#F4FAF5" : "#fff", transition: "background .3s" }}>
              <span style={{ width: 30, height: 30, borderRadius: 8, background: verified ? "#E4F7EC" : "#EFEBE2", color: verified ? "#0F7B43" : T.inkMuted, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {verified ? <Check size={15} /> : <FileText size={14} />}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ font: `700 12.5px ${F}`, color: T.ink }}>{d.name}</div>
                <div style={{ font: `500 9.5px ${MONO}`, color: T.inkMuted }}>{d.sub}</div>
              </div>
              <span style={{ ...warmBadge(verified ? "good" : d.from[1]) }}>{verified ? "VERIFIED" : d.from[0]}</span>
            </div>
          );
        })}
      </div>
      <div style={{ font: `500 9.5px ${MONO}`, color: T.inkMuted, marginTop: 10 }}>readiness {ready}% · workspace-scoped storage</div>
    </div>
  );
}
