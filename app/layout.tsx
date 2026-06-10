import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { organizationJsonLd } from "@/lib/metadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://akcesssible.com"),
  title: {
    template: "%s | Akcessible Technologies",
    default: "Akcessible Technologies — Digital Platforms Built for Africa",
  },
  description:
    "Akcessible Technologies Limited is a Tanzanian technology company building digital platforms in mobility and business software.",
  keywords: [
    "Akcessible Technologies",
    "Tanzania tech company",
    "Drift mobility",
    "African technology",
    "Dar es Salaam",
  ],
  authors: [
    { name: "Akcessible Technologies Limited", url: "https://akcesssible.com" },
  ],
  creator: "Akcessible Technologies Limited",
  publisher: "Akcessible Technologies Limited",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: "https://akcesssible.com",
    siteName: "Akcessible Technologies",
    title: "Akcessible Technologies — Digital Platforms Built for Africa",
    description:
      "Tanzanian technology company building platforms in mobility and business software.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akcessible Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akcessible Technologies — Digital Platforms Built for Africa",
    description:
      "Tanzanian technology company building platforms in mobility and business software.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`gsap ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {/* No-JS fallback: reveal-animated elements must stay visible */}
        <noscript>
          <style>{`[data-word],[data-hero-cta],[data-anim="reveal"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
