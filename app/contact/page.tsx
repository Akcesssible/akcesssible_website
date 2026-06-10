import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Akcessible Technologies Limited. We are based in Dar es Salaam, Tanzania and respond within 1 business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="mt-4 text-lg text-foreground/70">
        Get in touch with Akcessible Technologies Limited. We are based in Dar es
        Salaam, Tanzania and respond within 1 business day.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-black/10 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
            Email
          </h2>
          <a
            href="mailto:info@akcesssible.com"
            className="mt-2 block text-lg font-medium hover:underline"
          >
            info@akcesssible.com
          </a>
        </div>
        <div className="rounded-2xl border border-black/10 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
            Location
          </h2>
          <p className="mt-2 text-lg font-medium">Dar es Salaam, Tanzania</p>
        </div>
      </div>
    </div>
  );
}
