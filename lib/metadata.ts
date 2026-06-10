import type { Metadata } from "next";

/**
 * Canonical site constants for Akcessible Technologies Limited.
 * Reused across page-level metadata and structured data.
 */
export const SITE = {
  name: "Akcessible Technologies",
  legalName: "Akcessible Technologies Limited",
  url: "https://akcesssible.com",
  defaultTitle: "Akcessible Technologies — Digital Platforms Built for Africa",
  description:
    "Akcessible Technologies Limited is a Tanzanian technology company building digital platforms in mobility and business software.",
  ogDescription:
    "Tanzanian technology company building platforms in mobility and business software.",
  email: "info@akcesssible.com",
  ogImage: "/og-image.png",
  locale: "en_TZ",
} as const;

/**
 * Build page-level metadata while inheriting the global defaults defined in
 * `app/layout.tsx`. Only the fields you pass are overridden.
 */
export function createMetadata({
  title,
  description,
  path = "",
  noIndex = false,
}: {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/about". Empty string for home. */
  path?: string;
  /** When true, sets robots to index: true, follow: false (used for legal pages). */
  noIndex?: boolean;
}): Metadata {
  const canonical = `${SITE.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    ...(noIndex ? { robots: { index: true, follow: false } } : {}),
    openGraph: {
      title,
      description,
      url: canonical,
    },
    twitter: {
      title,
      description,
    },
  };
}

/**
 * Organization structured data (JSON-LD) injected in the root layout.
 */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Akcessible Technologies Limited",
  url: "https://akcesssible.com",
  logo: "https://akcesssible.com/logo.png",
  foundingDate: "2026-05-05",
  foundingLocation: {
    "@type": "Place",
    name: "Dar es Salaam, Tanzania",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@akcesssible.com",
    contactType: "customer service",
    availableLanguage: ["English", "Swahili"],
  },
  sameAs: [
    "https://linkedin.com/company/akcessible",
    "https://twitter.com/akcessible",
  ],
  founders: [
    { "@type": "Person", name: "Kevin Justus Msemakweli" },
    { "@type": "Person", name: "Danford Christopher Mwamasage" },
  ],
} as const;
