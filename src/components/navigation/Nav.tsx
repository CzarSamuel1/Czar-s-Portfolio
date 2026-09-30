"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "motion/react";
import { Ruler } from "@/components/canvas/Ruler";
import { cn } from "@/lib/utils";

const icon = {
  home: <path d="M3 11 12 3l9 8h-3v9h-5v-6h-2v6H6v-9H3z" />,
  about: <path d="M11 2h2v7.6l6.6-3.8 1 1.7L14 11.3l6.6 3.8-1 1.7-6.6-3.8V22h-2v-9.2l-6.6 3.8-1-1.7 6.6-3.8-6.6-3.8 1-1.7 6.6 3.8z" />,
  work: <path d="M6 2h12v5l-4.5 5 4.5 5v5H6v-5l4.5-5L6 7z" />,
};

const links = [
  { href: "/", label: "Home", icon: icon.home },
  { href: "/about", label: "About", icon: icon.about },
  { href: "/work", label: "Work", icon: icon.work },
];

// PLACEHOLDER hrefs — replace with real email / GitHub / LinkedIn
const socials = [
  { label: "EM", href: "mailto:hello@example.com" },
  { label: "GH", href: "#" },
  { label: "LI", href: "#" },
];

export function Nav() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)]">
      <nav
        aria-label="Primary"
        className="flex h-16 items-stretch justify-between border-t-4 border-t-[#2c2b29] bg-white pr-4 md:h-20 md:pr-6"
      >
        <div className="flex items-stretch">
          <Link href="/" aria-label="Home" className="flex items-center px-5 md:px-10">
            <svg width="44" height="24" viewBox="0 0 44 24" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden="true">
              <path d="M3 24a19 19 0 0 1 38 0M11 24a11 11 0 0 1 22 0" />
            </svg>
          </Link>
          <ul className="flex items-stretch">
            {links.map((l) => (
              <li key={l.href} className="flex">
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={cn(
                    "mono flex items-center gap-2 px-3 text-xs font-bold tracking-[0.12em] uppercase transition-colors md:px-7 md:text-sm",
                    isActive(l.href) ? "bg-[var(--color-sky)]" : "hover:bg-[var(--color-paper-muted)]",
                  )}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    {l.icon}
                  </svg>
                  <span className="hidden sm:inline">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="mono hidden size-11 place-items-center rounded-full bg-[var(--color-paper-muted)] text-xs font-bold transition-colors hover:bg-[var(--color-sky)] sm:grid"
            >
              {s.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="mono border-2 border-[var(--color-ink)] px-4 py-2.5 text-xs font-bold tracking-[0.12em] uppercase transition-colors hover:bg-[var(--color-ink)] hover:text-white md:px-5 md:text-sm"
          >
            Contact
          </Link>
        </div>
      </nav>
      <Ruler />
      {/* Reading progress, like a playhead along the bottom of the toolbar */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: scrollYProgress }}
        className="absolute inset-x-0 bottom-0 z-10 h-[3px] origin-left bg-[var(--color-sky)]"
      />
    </header>
  );
}
