import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Akcessible Technologies Limited privacy policy — how we collect, use, and protect your personal data.",
  path: "/legal/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-foreground/70">
        This privacy policy explains how Akcessible Technologies Limited
        collects, uses, and protects your personal data.
      </p>

      <div className="mt-10 space-y-8 text-foreground/70">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Information we collect
          </h2>
          <p>
            We collect information you provide directly to us and data generated
            through your use of our platforms.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            How we use your data
          </h2>
          <p>
            We use your data to operate, maintain, and improve our products and
            to communicate with you.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            For privacy questions, contact us at{" "}
            <a href="mailto:info@akcesssible.com" className="underline">
              info@akcesssible.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
