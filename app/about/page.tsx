import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Akcessible Technologies Limited — our story, mission, vision, leadership, and company registration details.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight">About Us</h1>
      <p className="mt-4 text-lg text-foreground/70">
        Akcessible Technologies Limited is a Tanzanian technology company
        building digital platforms in mobility and business software.
      </p>

      <section className="mt-12 space-y-3">
        <h2 className="text-2xl font-semibold">Our Story</h2>
        <p className="text-foreground/70">
          Founded in Dar es Salaam in 2026, Akcessible Technologies builds
          products designed for the realities of African markets — accessible,
          reliable, and locally relevant.
        </p>
      </section>

      <section className="mt-10 grid gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Mission</h2>
          <p className="text-foreground/70">
            To build accessible digital platforms that solve everyday problems
            across the continent.
          </p>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Vision</h2>
          <p className="text-foreground/70">
            A connected Africa powered by software built by and for its people.
          </p>
        </div>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Leadership</h2>
        <ul className="space-y-2 text-foreground/70">
          <li>Kevin Justus Msemakweli — Co-Founder</li>
          <li>Danford Christopher Mwamasage — Co-Founder</li>
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="text-2xl font-semibold">Company Details</h2>
        <dl className="grid gap-2 text-foreground/70 sm:grid-cols-2">
          <div>
            <dt className="font-medium text-foreground">Legal name</dt>
            <dd>Akcessible Technologies Limited</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Founded</dt>
            <dd>5 May 2026</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Headquarters</dt>
            <dd>Dar es Salaam, Tanzania</dd>
          </div>
          <div>
            <dt className="font-medium text-foreground">Contact</dt>
            <dd>info@akcesssible.com</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
