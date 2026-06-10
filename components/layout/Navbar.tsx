"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      // Reveal when scrolling up (toward the top) or near the very top;
      // hide when scrolling down past a small threshold.
      const scrollingDown = y > lastY.current;
      setHidden(scrollingDown && y > 80);
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
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
            width={1676}
            height={248}
            priority
            unoptimized
            className="h-7 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-tight text-[#1a1a1a] transition-opacity hover:opacity-60"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden rounded-full border border-[#1e2939] px-4 py-1.5 text-sm tracking-tight text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white md:inline-block"
        >
          Get in Touch
        </Link>
      </nav>
    </header>
  );
}
