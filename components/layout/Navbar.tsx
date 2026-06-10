"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  // Light treatment while over the homepage hero photo (top of the page);
  // reverts to the default dark treatment once scrolled past it.
  const [atTop, setAtTop] = useState(true);
  const headerRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const pathname = usePathname();
  const overHero = pathname === "/" && atTop;

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      // Reveal when scrolling up (toward the top) or near the very top;
      // hide when scrolling down past a small threshold.
      const scrollingDown = y > lastY.current;
      setHidden(scrollingDown && y > 80);
      // Still visually "over the hero" until most of the first screen is gone.
      setAtTop(y < window.innerHeight * 0.85);
      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On-load entrance: logo wipes in left-to-right, nav items fade in.
  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap
        .timeline({ defaults: { ease: "expo.out" } })
        .fromTo(
          "[data-logo]",
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.9 },
        )
        .fromTo(
          "[data-nav-item]",
          { opacity: 0, y: -8 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.5",
        );
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Progressive blur: no background color, blur fades from full (top) to none (bottom) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-28 backdrop-blur-md [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_0%,transparent_100%)]"
      />

      <nav className="relative mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-3 md:px-16">
        <Link
          href="/"
          aria-label="Akcessible Technologies — home"
          className="transition-opacity hover:opacity-70"
        >
          <Image
            src="/at_logo.svg"
            alt="Akcessible Technologies"
            width={1307}
            height={215}
            priority
            unoptimized
            data-logo
            className={`h-7 w-auto transition-[filter] duration-300 ${
              overHero ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-nav-item
              className={`text-sm tracking-tight transition-opacity hover:opacity-60 ${
                overHero ? "text-white" : "text-[#1a1a1a]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          data-nav-item
          className={`inline-block rounded-full border px-4 py-1.5 text-sm tracking-tight transition-colors ${
            overHero
              ? "border-white/70 text-white hover:bg-white hover:text-[#1a1a1a]"
              : "border-[#1e2939] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
          }`}
        >
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
