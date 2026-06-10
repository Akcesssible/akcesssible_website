import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Akcessible Technologies Limited — building digital platforms across mobility and business software in Tanzania and Africa.",
  path: "",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl border-t border-black/10 px-6 py-16">
        <h2 className="text-2xl font-bold tracking-tight">What we build</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/products/drift"
            className="group rounded-2xl border border-black/10 p-8 transition-colors hover:bg-foreground/5"
          >
            <h3 className="text-xl font-semibold">Drift</h3>
            <p className="mt-2 text-foreground/70">
              A smart urban mobility platform connecting riders with reliable
              transport through seamless booking, cashless payments, and
              real-time tracking.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold group-hover:underline">
              Learn more →
            </span>
          </Link>
          <div className="rounded-2xl border border-dashed border-black/10 p-8">
            <h3 className="text-xl font-semibold text-foreground/60">
              More coming soon
            </h3>
            <p className="mt-2 text-foreground/50">
              We are expanding into business software for the African market.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
