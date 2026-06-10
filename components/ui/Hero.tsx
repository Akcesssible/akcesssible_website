"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HEADLINE = "Digital platforms built for Africa.";
const WORDS = HEADLINE.split(" ");

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.fromTo(
        "[data-word]",
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.08 },
      ).fromTo(
        "[data-hero-cta]",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.7",
      );
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative isolate overflow-hidden bg-white">
      {/* Subtle film-grain overlay (design layer: div.grain @ 2% opacity) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(/grain.svg)",
          backgroundSize: "300px 300px",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1312px] flex-col justify-end px-6 pb-16 pt-32 sm:px-8 lg:pb-24">
        <div className="flex flex-col items-stretch gap-8 lg:flex-row lg:items-end lg:gap-6">
          <h1 className="max-w-[997px] font-normal leading-[0.96] tracking-[-0.067em] text-black text-[clamp(2.75rem,10.5vw,148px)]">
            {WORDS.map((word, i) => (
              <span key={`${word}-${i}`}>
                <span data-word className="inline-block">
                  {word}
                </span>
                {i < WORDS.length - 1 ? " " : ""}
              </span>
            ))}
          </h1>

          <Link
            href="/products"
            data-hero-cta
            className="flex flex-1 items-center justify-center rounded-[56px] bg-[#3b82f6] p-6 text-center text-white transition-colors hover:bg-[#2f73e8]"
          >
            <span className="whitespace-nowrap font-normal leading-[0.96] tracking-[-0.0625em] text-[clamp(1.25rem,3vw,32px)]">
              discover products
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
