import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#000000] border-t border-[var(--divider)]">
      <div className="container-main relative">
        {/* 2-column grid with responsive columns (264px max, scales down) */}
        <div
          className="relative grid py-12"
          style={{ gridTemplateColumns: 'repeat(2, minmax(0, 264px))' }}
        >
          {/* Column 1: Logo */}
          <div className="px-4">
            <Link href="/" className="inline-block">
              <img
                src="/profound-isotype.svg"
                alt="Profound"
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Column 2: Social */}
          <div className="px-4">
            <h3 className="text-body-sm text-[var(--text-primary)] font-normal mb-6">
              Social
            </h3>
            <nav className="flex flex-col gap-4">
              <Link
                href="https://twitter.com/profound"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-[var(--text-secondary)] font-normal hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[var(--text-secondary)]"
                >
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
                Twitter
              </Link>
              <Link
                href="https://linkedin.com/company/profound"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-sm text-[var(--text-secondary)] font-normal hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[var(--text-secondary)]"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    fill="currentColor"
                  />
                </svg>
                LinkedIn
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar - divider spans full width, content constrained to 2 columns */}
      <div className="border-t border-[var(--divider)] pt-6 pb-16">
        <div className="container-main relative">
          <div
            className="relative grid"
            style={{ gridTemplateColumns: 'repeat(2, minmax(0, 264px))' }}
          >
            <div className="col-span-2 flex items-center justify-between px-4">
              {/* Copyright */}
              <div className="text-body-sm font-normal" style={{ color: '#464646' }}>
                © 2025 Profound
              </div>
              
              {/* System Status */}
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#28FDB0]" />
                <span className="text-body-sm font-normal" style={{ color: '#28FDB0' }}>
                  All systems normal
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

