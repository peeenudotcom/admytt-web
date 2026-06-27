import Link from "next/link";
import { site } from "@/lib/site";

const col = (title: string, links: { label: string; href: string }[]) => ({ title, links });

const columns = [
  col("Product", [
    { label: "Lead management", href: "/product#leads" },
    { label: "Admissions", href: "/product#admissions" },
    { label: "Documents & visa", href: "/product#visa" },
    { label: "AI Command Centre", href: "/ai" },
  ]),
  col("Company", [
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
  ]),
  col("Get started", [
    { label: "Book a demo", href: "/book-a-demo" },
    { label: "See the product", href: "/product" },
    { label: "Log in", href: site.appUrl },
  ]),
];

const linkStyle: React.CSSProperties = { color: "#9aa6c4", textDecoration: "none" };

export default function Footer() {
  return (
    <footer style={{ background: "#070d22", padding: "64px 0 36px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 36, paddingBottom: 44, borderBottom: "1px solid rgba(255,255,255,.08)" }} data-foot="1">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-wordmark-white.png" alt="adMYTT" height={24} width={90} style={{ height: 24, width: "auto", marginBottom: 16 }} />
            <p style={{ font: "400 14px/22px var(--font-inter)", color: "#8e9bc9", maxWidth: 300 }}>
              The AI-enabled CRM and operating platform for education consultancies — from first enquiry to visa outcome.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title}>
              <div style={{ font: "700 13px var(--font-manrope)", color: "#fff", marginBottom: 14 }}>{c.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, font: "400 13.5px var(--font-inter)" }}>
                {c.links.map((l) =>
                  l.href.startsWith("http") ? (
                    <a key={l.label} href={l.href} style={linkStyle}>
                      {l.label}
                    </a>
                  ) : (
                    <Link key={l.label} href={l.href} style={linkStyle}>
                      {l.label}
                    </Link>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14, paddingTop: 24, font: "400 12.5px var(--font-inter)", color: "#6b779c" }} data-footbot="1">
          <div>© 2026 adMYTT. All rights reserved.</div>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy" style={{ ...linkStyle, color: "#6b779c" }}>Privacy</Link>
            <Link href="/terms" style={{ ...linkStyle, color: "#6b779c" }}>Terms</Link>
            <Link href="/data-processing" style={{ ...linkStyle, color: "#6b779c" }}>Data processing</Link>
            <a href="https://status.admytt.com" style={{ ...linkStyle, color: "#6b779c" }}>Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
