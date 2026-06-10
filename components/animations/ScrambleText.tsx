"use client";

import { useRef, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrambleTextPlugin, useGSAP);

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
  /**
   * "scroll" (default) scrambles when the element enters the viewport.
   * "load" scrambles immediately on mount (used for above-the-fold hero text).
   */
  trigger?: "load" | "scroll";
};

/**
 * Scrambles its text into place — on load or when it scrolls into view (via
 * IntersectionObserver, so it fires exactly when the element appears). Renders
 * the real text on the server (SEO + no-JS) and honors prefers-reduced-motion.
 * Load-triggered instances are hidden pre-JS via the `data-scramble` hook so the
 * text scrambles in cleanly instead of flashing.
 */
export default function ScrambleText({
  text,
  as: Tag = "span",
  className,
  chars = "upperCase",
  duration = 1,
  delay = 0,
  trigger = "scroll",
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const scramble = () =>
        gsap.to(el, {
          duration,
          delay,
          ease: "none",
          scrambleText: { text, chars, speed: 0.4 },
        });

      if (trigger === "load") {
        gsap.set(el, { opacity: 1 });
        scramble();
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          observer.disconnect();
          scramble();
        },
        { threshold: 0.6 },
      );

      observer.observe(el);
      return () => observer.disconnect();
    },
    { scope: ref },
  );

  return (
    <Tag
      ref={ref}
      className={className}
      {...(trigger === "load" ? { "data-scramble": "" } : {})}
    >
      {text}
    </Tag>
  );
}
