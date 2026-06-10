"use client";

import { useRef, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, useGSAP);

type ScrambleTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Characters used while scrambling. */
  chars?: string;
  /** Tween duration in seconds. */
  duration?: number;
  /** Start delay in seconds. */
  delay?: number;
};

/**
 * Scrambles its text into place when it scrolls into view. Renders the real
 * text on the server (SEO + no-JS) and honors prefers-reduced-motion.
 */
export default function ScrambleText({
  text,
  as: Tag = "span",
  className,
  chars = "upperCase",
  duration = 1,
  delay = 0,
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to(el, {
        duration,
        delay,
        ease: "none",
        scrambleText: { text, chars, speed: 0.4 },
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {text}
    </Tag>
  );
}
