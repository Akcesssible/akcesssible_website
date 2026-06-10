import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-3 md:px-16">
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
