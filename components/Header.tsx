"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MagneticLogo from "./MagneticLogo";
import { primaryNav, site } from "@/lib/site";
import { track } from "@/lib/analytics";

const navLink: React.CSSProperties = {
  font: "600 14.5px var(--font-inter)",
  color: "#334155",
  textDecoration: "none",
};

export default function Header({ overHero = false }: { overHero?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // When the header overlays a dark hero, stay transparent at the top and turn
  // solid once the user scrolls past it.
  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const dark = overHero && !scrolled;

  // Lock background scroll + restore focus to the trigger when the menu closes.
  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  // Close on Escape + trap focus inside the open menu (WCAG 2.4.3 / 2.1.2).
  useEffect(() => {
    if (!menuOpen) return;
    const getFocusable = () =>
      panelRef.current
        ? Array.from(
            panelRef.current.querySelectorAll<HTMLElement>(
              'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])'
            )
          )
        : [];
    // Move focus into the panel when it opens.
    getFocusable()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (e.key === "Tab") {
        const items = getFocusable();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: dark ? "#0A0A0F" : "rgba(255,255,255,.86)",
        backdropFilter: dark ? "none" : "blur(14px)",
        WebkitBackdropFilter: dark ? "none" : "blur(14px)",
        borderBottom: `1px solid ${dark ? "transparent" : "#E4EAF3"}`,
        transition: "background .25s, border-color .25s",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 28px", height: 70, display: "flex", alignItems: "center", gap: 32 }}>
        <Link href="/" aria-label="adMYTT home" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
          <MagneticLogo height={26} white={dark} />
        </Link>

        <nav aria-label="Primary" style={{ display: "flex", alignItems: "center", gap: 26, marginLeft: 8 }} data-desk="1">
          {primaryNav.map((n) => (
            <Link key={n.label} href={n.href} style={{ ...navLink, color: dark ? "#CBD5E1" : "#334155" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 16 }} data-desk="1">
          <a href={site.appUrl} style={{ font: "600 14.5px var(--font-inter)", color: dark ? "#fff" : "#0F172A", textDecoration: "none" }}>
            Log in
          </a>
          <Link
            href="/book-a-demo"
            onClick={() => track("nav_cta_clicked", { location: "header" })}
            style={{
              font: "700 14.5px var(--font-inter)",
              color: "#fff",
              textDecoration: "none",
              background: "#4F46E5",
              padding: "11px 20px",
              borderRadius: 8,
              boxShadow: "0 6px 16px rgba(79,70,229,.28)",
            }}
          >
            Book a demo
          </Link>
        </div>

        <button
          ref={triggerRef}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          style={{
            marginLeft: "auto",
            display: "none",
            background: dark ? "rgba(255,255,255,.08)" : "#fff",
            border: `1px solid ${dark ? "rgba(255,255,255,.2)" : "#DCE3EE"}`,
            borderRadius: 8,
            width: 42,
            height: 42,
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          data-mob="1"
        >
          <span style={{ display: "block", width: 18, height: 2, background: dark ? "#fff" : "#0F172A", boxShadow: dark ? "0 -6px 0 #fff,0 6px 0 #fff" : "0 -6px 0 #0F172A,0 6px 0 #0F172A" }} />
        </button>
      </div>

      {menuOpen && (
        <div role="dialog" aria-modal="true" aria-label="Menu" style={{ position: "fixed", inset: 0, zIndex: 70, background: "rgba(11,18,48,.4)" }} onClick={closeMenu}>
          <div
            ref={panelRef}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "min(86vw,340px)",
              height: "100%",
              background: "#fff",
              padding: 24,
              display: "flex",
              flexDirection: "column",
              gap: 6,
              boxShadow: "-12px 0 40px rgba(11,18,48,.2)",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-wordmark.png" alt="adMYTT" height={24} width={90} style={{ height: 24, width: "auto" }} />
              <button
                aria-label="Close menu"
                onClick={closeMenu}
                style={{ background: "#F1F5FB", border: "none", width: 38, height: 38, borderRadius: 8, fontSize: 20, color: "#0F172A", cursor: "pointer" }}
              >
                ×
              </button>
            </div>
            {primaryNav.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={closeMenu}
                style={{ font: "600 16px var(--font-inter)", color: "#0F172A", textDecoration: "none", padding: "13px 8px", borderBottom: "1px solid #EEF2F8" }}
              >
                {n.label}
              </Link>
            ))}
            <Link href="/book-a-demo" onClick={closeMenu} style={{ marginTop: 18, font: "600 15px var(--font-inter)", color: "#fff", textDecoration: "none", background: "#4F46E5", padding: 14, borderRadius: 8, textAlign: "center" }}>
              Book a demo
            </Link>
            <Link href="/product" onClick={closeMenu} style={{ font: "600 15px var(--font-inter)", color: "#0F172A", textDecoration: "none", border: "1px solid #DCE3EE", padding: 14, borderRadius: 8, textAlign: "center" }}>
              See the product
            </Link>
            <a href={site.appUrl} style={{ font: "600 15px var(--font-inter)", color: "#64748B", textDecoration: "none", padding: 12, textAlign: "center" }}>
              Log in
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
