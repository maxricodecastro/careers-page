import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const navItems = [
    { label: "Platform", href: "/platform" },
    { label: "Resources", href: "/resources" },
    { label: "Solutions", href: "/solutions" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Pricing", href: "/pricing" },
    { label: "Careers", href: "/careers", active: true },
  ];

  return (
    <header className="sticky top-0 z-50 flex min-h-[56px] items-center border-b border-[var(--divider)] bg-[var(--bg-header)] backdrop-blur-sm px-4">
      <div className="container-main flex w-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-[var(--text-primary)]" />
          <span className="text-small font-semibold text-[var(--text-primary)]">
            Profound
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => {
            const hasChevron = index < 3; // Platform, Resources, Solutions
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1 px-3 text-small font-semibold transition-colors ${
                  item.active
                    ? "text-[var(--text-primary)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                }`}
              >
                {item.label}
                {hasChevron && <ChevronDown className="h-3 w-3" />}
              </Link>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-small font-semibold text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            Log in
          </Link>
          <Link href="/contact-sales" className="btn-primary font-semibold">
            Get a Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
