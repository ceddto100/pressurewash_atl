import Link from "next/link";
import { business } from "../lib/business";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#top" className="text-lg font-semibold text-slate-900">
          {business.name}
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#quote"
            className="button-secondary hidden sm:inline-flex"
          >
            Get a Quote
          </a>
          <a
            href={`tel:${business.phone}`}
            className="button-primary"
            aria-label={`Call or text ${business.phoneDisplay}`}
          >
            Call/Text Now
          </a>
        </div>
      </div>
    </header>
  );
}
