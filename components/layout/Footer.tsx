import Link from "next/link";

const footerSections = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/products", label: "Products & Services" },
      { href: "/products/drift", label: "Drift" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy-policy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-lg font-bold">Akcessible</p>
            <p className="mt-2 max-w-xs text-sm text-foreground/60">
              Digital platforms built for Africa. Based in Dar es Salaam,
              Tanzania.
            </p>
          </div>
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold">{section.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-foreground/60">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-black/10 pt-6 text-sm text-foreground/50">
          <p>
            &copy; {new Date().getFullYear()} Akcessible Technologies Limited.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
