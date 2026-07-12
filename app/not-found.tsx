import Link from "next/link";
import PageShell from "@/components/PageShell";
import { T, F } from "@/lib/theme";

export default function NotFound() {
  return (
    <PageShell>
      <section style={{ background: "radial-gradient(120% 120% at 80% -10%,#EEF2FF 0%,#F8FAFC 55%)", minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "80px 28px", textAlign: "center" }}>
          <div style={{ font: `800 13px ${F}`, letterSpacing: ".08em", color: T.primary, marginBottom: 14 }}>ERROR 404</div>
          <h1 style={{ font: `800 44px/50px ${F}`, letterSpacing: "-.02em", color: T.text, marginBottom: 16 }}>
            This page took a <span className="hl">wrong turn</span>.
          </h1>
          <p style={{ font: `400 18px/28px ${F}`, color: T.muted, marginBottom: 30 }}>
            The link may be broken or the page may have moved. Let&apos;s get you back on track.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" style={{ font: `700 15.5px ${F}`, color: "#fff", textDecoration: "none", background: T.primary, padding: "14px 26px", borderRadius: 10, boxShadow: "0 10px 24px rgba(79,70,229,.3)" }}>
              Back to home
            </Link>
            <Link href="/product" style={{ font: `700 15.5px ${F}`, color: T.text, textDecoration: "none", background: "#fff", border: `1px solid ${T.border}`, padding: "14px 24px", borderRadius: 10 }}>
              Explore the product
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
