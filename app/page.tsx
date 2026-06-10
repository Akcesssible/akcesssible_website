import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Home",
  description:
    "Akcessible Technologies Limited — building digital platforms across mobility and business software in Tanzania and Africa.",
  path: "",
});

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="py-24 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
          Dar es Salaam, Tanzania
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Digital platforms built for Africa.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-foreground/70">
          Akcessible Technologies Limited is a Tanzanian technology company
          building digital platforms across mobility and business software.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Explore Products
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
          >
            About Us
          </Link>
        </div>
      </section>

      <section className="border-t border-black/10 py-16">
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
    </div>
  );
}
