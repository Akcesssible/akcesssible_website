"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  /** Element to render as the wrapper. Defaults to a div. */
  as?: ElementType;
  className?: string;
  /** When true, staggers descendant elements marked with data-anim="reveal". */
  stagger?: boolean;
  /** Seconds to delay the start of the animation. */
  delay?: number;
};

/**
 * Scroll-triggered reveal. In single mode the wrapper itself fades + rises into
 * view; in `stagger` mode its descendants marked `data-anim="reveal"` animate in
 * sequence. Honors prefers-reduced-motion (handled in CSS + skipped here).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  stagger = false,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const el = ref.current;
      if (!el) return;

      const targets = stagger
        ? el.querySelectorAll<HTMLElement>('[data-anim="reveal"]')
        : el;

      gsap.fromTo(
        targets,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay,
          stagger: stagger ? 0.12 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag
      ref={ref}
      className={className}
      {...(stagger ? {} : { "data-anim": "reveal" })}
    >
      {children}
    </Tag>
  );
}
