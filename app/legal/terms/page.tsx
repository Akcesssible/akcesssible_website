import type { Metadata } from "next";
import Reveal from "@/components/animations/Reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Akcessible Technologies Limited terms of service governing use of our platforms and products.",
  path: "/legal/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Reveal stagger>
        <h1 data-anim="reveal" className="text-4xl font-bold tracking-tight">
          Terms of Service
        </h1>
        <p data-anim="reveal" className="mt-4 text-foreground/70">
          These terms of service govern your use of the platforms and products
          provided by Akcessible Technologies Limited.
        </p>
      </Reveal>

      <div className="mt-10 space-y-8 text-foreground/70">
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">
            Acceptance of terms
          </h2>
          <p>
            By accessing or using our products, you agree to be bound by these
            terms.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Use of service</h2>
          <p>
            You agree to use our platforms in compliance with applicable laws and
            these terms.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:contact@akcesssible.com" className="underline">
              contact@akcesssible.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
