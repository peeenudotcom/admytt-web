/** Central site configuration — canonical URLs, conversion destinations, contacts. */
export const site = {
  name: "adMYTT",
  domain: "https://admytt.com",
  appUrl: "https://app.admytt.com",
  demoEmail: "demo@admytt.com",
  description:
    "Run your education consultancy from first enquiry to visa outcome. adMYTT is a secure, multi-tenant CRM that brings leads, counselling, applications, documents, payments, visas, partners, and team operations into one workspace.",
  // Social image is generated at request time by app/opengraph-image.tsx.
} as const;

/** Primary navigation — single dominant CTA (Book a demo), per the brief. */
export const primaryNav = [
  { label: "Product", href: "/product" },
  { label: "Solutions", href: "/solutions" },
  { label: "AI", href: "/ai" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/#faq" },
] as const;
