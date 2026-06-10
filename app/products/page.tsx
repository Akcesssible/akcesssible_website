import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/animations/Reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Products & Services",
  description:
    "Explore Akcessible's digital products: Drift, our urban mobility platform connecting riders with reliable transport across Africa.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <Reveal stagger>
        <h1
          data-anim="reveal"
          className="text-4xl font-bold tracking-tight"
        >
          Products &amp; Services
        </h1>
        <p
          data-anim="reveal"
          className="mt-4 max-w-2xl text-lg text-foreground/70"
        >
          We build digital products designed for African markets. Here is what
          we are working on today.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Link
          href="/products/drift"
          className="group rounded-2xl border border-black/10 p-8 transition-colors hover:bg-foreground/5"
        >
          <h2 className="text-2xl font-semibold">Drift</h2>
          <p className="mt-2 text-foreground/70">
            Our urban mobility platform connecting riders with reliable
            transport across Africa — seamless booking, cashless payments, and
            real-time tracking.
          </p>
          <span className="mt-4 inline-block text-sm font-semibold group-hover:underline">
            View Drift →
          </span>
        </Link>

        <div className="rounded-2xl border border-dashed border-black/10 p-8">
          <h2 className="text-2xl font-semibold text-foreground/60">
            Business software
          </h2>
          <p className="mt-2 text-foreground/50">
            We are expanding into business software tools. More details coming
            soon.
          </p>
        </div>
      </div>
    </div>
  );
}
