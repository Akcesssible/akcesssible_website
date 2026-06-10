"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
 * Reveals on viewport entry (fade + rise). Uses IntersectionObserver so the
 * animation starts exactly when the element appears — robust against font/layout
 * shifts that can throw off scroll-position-based triggers. In `stagger` mode its
 * descendants marked `data-anim="reveal"` animate in sequence. Honors
 * prefers-reduced-motion (handled in CSS + skipped here).
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
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const targets = stagger
        ? el.querySelectorAll<HTMLElement>('[data-anim="reveal"]')
        : el;

      gsap.set(targets, { opacity: 0, y: 40 });

      const observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((e) => e.isIntersecting)) return;
          observer.disconnect();
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay,
            stagger: stagger ? 0.12 : 0,
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
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
      {...(stagger ? {} : { "data-anim": "reveal" })}
    >
      {children}
    </Tag>
  );
}
