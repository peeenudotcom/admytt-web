import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "adMYTT — CRM for education consultancies",
    template: "%s · adMYTT",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "education consultancy CRM",
    "study abroad CRM",
    "student application management software",
    "visa case management software",
    "overseas education lead management",
    "education partner portal",
  ],
  authors: [{ name: "adMYTT" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "adMYTT — CRM for education consultancies",
    description: site.description,
    url: site.domain,
  },
  twitter: {
    card: "summary_large_image",
    title: "adMYTT — CRM for education consultancies",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "adMYTT",
  url: site.domain,
  logo: `${site.domain}/logo-wordmark.png`,
  description: site.description,
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "adMYTT",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: site.description,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "INR",
    lowPrice: "2399",
    highPrice: "6999",
    offerCount: "3",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
      </body>
    </html>
  );
}
