import Link from "next/link";
import Image from "next/image";
import ScrambleText from "@/components/animations/ScrambleText";

const indexLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/akcessible", label: "LinkedIn" },
  { href: "https://www.instagram.com/akcesssible", label: "Instagram" },
];

const labelClass = "text-[11px] uppercase tracking-[0.2em] text-white/40";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-16 md:py-24">
        <div className="grid gap-x-12 gap-y-16 lg:grid-cols-12">
          {/* Left: keep-scrolling pill + get in touch */}
          <div className="lg:col-span-7">
            <Link
              href="/about"
              className="flex items-center justify-between rounded-[40px] bg-white/[0.06] px-8 py-6 transition-colors hover:bg-white/[0.1]"
            >
              <span className="block">
                <span className="block text-xl">Keep scrolling</span>
                <span className={`mt-1 block ${labelClass}`}>to learn more</span>
              </span>
              <span className="block text-right">
                <span className="block text-xl">About</span>
                <span className={`mt-1 block ${labelClass}`}>next page</span>
              </span>
            </Link>

            <div className="mt-14">
              <ScrambleText as="p" text="GET IN TOUCH" className={labelClass} />
              <div className="mt-6 flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-2xl leading-tight md:text-3xl">
                  We would love to hear from you.
                  <br />
                  Let&apos;s work together.
                </p>
                <Link
                  href="/contact"
                  className="shrink-0 whitespace-nowrap rounded-full border border-white/30 px-7 py-3.5 text-[11px] uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-black"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>

          {/* Right: index + socials / business inquiries */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-5 lg:col-start-8">
            <div>
              <ScrambleText as="p" text="INDEX" className={labelClass} />
              <ul className="mt-6 space-y-3">
                {indexLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/90 transition-colors hover:text-white/60"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ScrambleText as="p" text="SOCIALS" className={labelClass} />
              <ul className="mt-6 space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/90 transition-colors hover:text-white/60"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <ScrambleText
                as="p"
                text="BUSINESS INQUIRIES"
                className={`mt-10 ${labelClass}`}
              />
              <div className="mt-6 space-y-2">
                <a
                  href="mailto:contact@akcesssible.com"
                  className="block text-white/90 transition-colors hover:text-white/60"
                >
                  contact@akcesssible.com
                </a>
                <a
                  href="tel:+255765777202"
                  className="block text-white/90 transition-colors hover:text-white/60"
                >
                  +25576 577 72 02
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="mt-20 flex flex-col gap-10 md:mt-28 lg:flex-row lg:items-end lg:justify-between">
          <Image
            src="/at_logo.svg"
            alt="Akcessible Technologies"
            width={1307}
            height={215}
            unoptimized
            className="h-auto w-full brightness-0 invert lg:max-w-[58%]"
          />
          <p className="text-sm text-white/60">
            &copy; 2026 Akcessible Technologies Limited. All rights reserved.
          </p>
        </div>

        <div className="mt-12 flex gap-12 text-sm text-white/50">
          <Link href="/legal/terms" className="transition-colors hover:text-white">
            Terms of use
          </Link>
          <Link
            href="/legal/privacy-policy"
            className="transition-colors hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
