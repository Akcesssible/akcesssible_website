import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Reveal from "@/components/animations/Reveal";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Akcessible Technologies | Building Digital Products for Africa",
  description:
    "Akcessible Technologies Limited — building digital platforms across mobility and business software in Tanzania and Africa.",
  path: "",
});

// Products rendered as an editorial index. Entries without an `href` are
// roadmap items (rendered muted, non-clickable).
const PRODUCTS = [
  {
    n: "01",
    label: "Mobility",
    title: "Drift",
    blurb:
      "Smart urban mobility connecting riders with reliable transport — seamless booking, cashless payments, and real-time tracking.",
    href: "/products/drift",
  },
  {
    n: "02",
    label: "Coming soon",
    title: "Business software",
    blurb: "We are expanding into business software built for the African market.",
    href: null,
  },
] as const;

export default function HomePage() {
  return (
    <>
      <Hero />

      <Reveal
        as="section"
        stagger
        className="mx-auto max-w-6xl px-6 py-20 sm:py-28"
      >
        <div
          data-anim="reveal"
          className="flex items-baseline justify-between gap-4"
        >
          <h2 className="text-2xl font-bold tracking-tight">What we build</h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
            Products
          </span>
        </div>

        <ul className="mt-12 border-b border-foreground/10">
          {PRODUCTS.map((p) => {
            const body = (
              <>
                {/* Index row: number — hairline — category label */}
                <div className="flex items-center gap-4 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground/45">
                  <span>{p.n}</span>
                  <span
                    aria-hidden
                    className="h-px flex-1 bg-foreground/15 transition-colors duration-300 group-hover:bg-foreground/40"
                  />
                  <span>{p.label}</span>
                </div>

                <div className="mt-5 flex items-end justify-between gap-6">
                  <h3 className="text-4xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 sm:text-6xl">
                    {p.title}
                  </h3>
                  {p.href && (
                    <span
                      aria-hidden
                      className="mb-1 text-2xl transition-transform duration-300 group-hover:translate-x-1 sm:mb-2 sm:text-3xl"
                    >
                      →
                    </span>
                  )}
                </div>

                <p className="mt-4 max-w-xl text-foreground/60">{p.blurb}</p>
              </>
            );

            return (
              <li
                key={p.n}
                data-anim="reveal"
                className="border-t border-foreground/10"
              >
                {p.href ? (
                  <Link href={p.href} className="group block py-10 sm:py-14">
                    {body}
                  </Link>
                ) : (
                  <div className="py-10 opacity-55 sm:py-14">{body}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </>
  );
}
