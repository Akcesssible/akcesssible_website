import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Drift — Urban Mobility Platform",
  description:
    "Drift is a smart mobility platform connecting riders with reliable urban transport through seamless booking, cashless payments, and real-time tracking.",
  path: "/products/drift",
});

const features = [
  {
    title: "Seamless booking",
    description:
      "Request a ride in seconds with an interface built for everyday use.",
  },
  {
    title: "Cashless payments",
    description:
      "Pay securely through integrated mobile money and card options.",
  },
  {
    title: "Real-time tracking",
    description:
      "Follow your ride live from pickup to drop-off with accurate ETAs.",
  },
];

export default function DriftPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50">
        Urban Mobility Platform
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Drift</h1>
      <p className="mt-6 text-lg text-foreground/70">
        Drift is a smart mobility platform connecting riders with reliable urban
        transport through seamless booking, cashless payments, and real-time
        tracking.
      </p>

      <section className="mt-12 grid gap-6 sm:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-black/10 p-6"
          >
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p className="mt-2 text-sm text-foreground/70">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
