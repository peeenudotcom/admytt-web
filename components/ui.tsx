import Link from "next/link";
import { site } from "@/lib/site";

/** Page hero used on supporting pages — eyebrow, H1, lead, and CTAs. */
export function PageHero({
  eyebrow,
  title,
  lead,
  primary = { label: "Book a demo", href: "/book-a-demo" },
  secondary,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section style={{ background: "radial-gradient(120% 120% at 80% -10%,#F0F4FE 0%,#F6F8FC 55%)", borderBottom: "1px solid #EEF2F8" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 28px 64px" }}>
        <div style={{ maxWidth: 760 }}>
          <div style={{ font: "700 13px var(--font-inter)", color: "#2453D4", marginBottom: 14 }}>{eyebrow}</div>
          <h1 data-h1 style={{ font: "800 48px/56px var(--font-manrope)", letterSpacing: "-.02em", color: "#0B1230", marginBottom: 18 }}>{title}</h1>
          <p style={{ font: "400 18.5px/29px var(--font-inter)", color: "#475569", marginBottom: 30 }}>{lead}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href={primary.href} style={{ font: "700 15.5px var(--font-manrope)", color: "#fff", textDecoration: "none", background: "#2453D4", padding: "15px 28px", borderRadius: 8, boxShadow: "0 10px 24px rgba(36,83,212,.3)" }}>{primary.label}</Link>
            {secondary && (
              <Link href={secondary.href} style={{ font: "700 15.5px var(--font-manrope)", color: "#0B1230", textDecoration: "none", background: "#fff", border: "1px solid #DCE3EE", padding: "15px 26px", borderRadius: 8 }}>{secondary.label}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section wrapper — constrained band with optional white/canvas background. */
export function Band({
  children,
  bg = "#fff",
  id,
  border = true,
}: {
  children: React.ReactNode;
  bg?: string;
  id?: string;
  border?: boolean;
}) {
  return (
    <section id={id} style={{ background: bg, padding: "80px 0", borderTop: border ? "1px solid #EEF2F8" : undefined }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <div style={{ maxWidth: 680, marginBottom: 40 }}>
      {eyebrow && <div style={{ font: "700 13px var(--font-inter)", color: "#2453D4", marginBottom: 12 }}>{eyebrow}</div>}
      <h2 data-h2 style={{ font: "800 36px/44px var(--font-manrope)", letterSpacing: "-.02em", color: "#0B1230", marginBottom: 14 }}>{title}</h2>
      {lead && <p style={{ font: "400 18px/28px var(--font-inter)", color: "#475569" }}>{lead}</p>}
    </div>
  );
}

/** Feature list with check marks. */
export function CheckList({ items, color = "#2453D4" }: { items: string[]; color?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((p) => (
        <div key={p} style={{ display: "flex", alignItems: "flex-start", gap: 11, font: "500 15px/22px var(--font-inter)", color: "#334155" }}>
          <span style={{ color, fontWeight: 700, marginTop: 1 }}>✓</span>
          {p}
        </div>
      ))}
    </div>
  );
}

/** Final conversion band reused across pages — single dominant CTA. */
export function CtaBand({
  title = "See how adMYTT fits the way your consultancy works.",
  body = "Book a 30-minute walkthrough on a workspace set up for your operating model — no slides, just the product on your real workflow.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section style={{ background: "linear-gradient(135deg,#212177 0%,#0B1230 100%)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: -100, left: -60, width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,#2453D4 0%,transparent 70%)", opacity: 0.4 }} />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 28px", position: "relative", textAlign: "center" }}>
        <h2 data-h2 style={{ font: "800 36px/44px var(--font-manrope)", letterSpacing: "-.02em", color: "#fff", marginBottom: 16 }}>{title}</h2>
        <p style={{ font: "400 18px/28px var(--font-inter)", color: "#c2cbe6", marginBottom: 30 }}>{body}</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/book-a-demo" style={{ font: "700 15.5px var(--font-manrope)", color: "#fff", textDecoration: "none", background: "#2453D4", padding: "15px 28px", borderRadius: 8, boxShadow: "0 10px 24px rgba(36,83,212,.3)" }}>Book a demo</Link>
          <a href={site.appUrl} style={{ font: "700 15.5px var(--font-manrope)", color: "#fff", textDecoration: "none", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.2)", padding: "15px 26px", borderRadius: 8 }}>Log in</a>
        </div>
      </div>
    </section>
  );
}

/** Simple prose container for legal pages. */
export function LegalLayout({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <section style={{ background: "#fff", padding: "64px 0 80px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 28px" }}>
        <h1 data-h1 style={{ font: "800 40px/48px var(--font-manrope)", letterSpacing: "-.02em", color: "#0B1230", marginBottom: 8 }}>{title}</h1>
        <div style={{ font: "500 13.5px var(--font-inter)", color: "#94a3b8", marginBottom: 32 }}>Last updated {updated}</div>
        <div style={{ font: "400 16px/26px var(--font-inter)", color: "#334155" }}>{children}</div>
      </div>
    </section>
  );
}
