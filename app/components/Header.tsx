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
    <header className="sticky top-0 z-50 min-h-[56px] border-b border-[var(--divider)] bg-[var(--bg-header)] backdrop-blur-sm flex items-center">
      <div className="container-main relative w-full">
        {/* 4-column grid with fixed 264px columns */}
        <div
          className="relative grid items-center h-[56px]"
          style={{ gridTemplateColumns: 'repeat(4, 264px)' }}
        >
          {/* Logo - Column 1 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-[var(--text-primary)]" />
              <span className="text-small font-semibold text-[var(--text-primary)]">
                Profound
              </span>
            </Link>
          </div>

          {/* Navigation - Columns 2-3 */}
          <nav className="col-span-2 flex items-center justify-center gap-1">
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

          {/* Right side actions - Column 4 */}
          <div className="flex items-center justify-end gap-4">
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
      </div>
    </header>
  );
}
