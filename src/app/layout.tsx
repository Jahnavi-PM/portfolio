import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

// Uses Vercel's production domain automatically when deployed; falls back to a
// local/placeholder URL otherwise. Set NEXT_PUBLIC_SITE_URL to pin a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jahnavi Kotana — Associate Product Manager",
    template: "%s — Jahnavi Kotana",
  },
  description:
    "Associate Product Manager with 3+ years in B2B SaaS across Fintech, EdTech, Payments and Analytics. Turning customer problems into scalable products — from discovery to launch.",
  keywords: [
    "Jahnavi Kotana",
    "Associate Product Manager",
    "Product Manager",
    "Product Analyst",
    "B2B SaaS",
    "Fintech",
    "EdTech",
    "Product Analytics",
    "Product Discovery",
    "Product Execution",
  ],
  authors: [{ name: "Jahnavi Kotana" }],
  creator: "Jahnavi Kotana",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Jahnavi Kotana — Associate Product Manager",
    description:
      "Building customer-centric products through discovery, data and execution. 3+ years in B2B SaaS across Fintech, EdTech, Payments and Analytics.",
    siteName: "Jahnavi Kotana",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahnavi Kotana — Associate Product Manager",
    description:
      "Building customer-centric products through discovery, data and execution.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jahnavi Kotana",
  jobTitle: "Associate Product Manager",
  email: `mailto:${profile.email}`,
  url: siteUrl,
  knowsAbout: [
    "Product Management",
    "Product Discovery",
    "Product Analytics",
    "B2B SaaS",
    "Fintech",
    "EdTech",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "JNTU - Gurajada Vizianagaram",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
