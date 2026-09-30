import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-paper)]/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-medium tracking-tight"
        >
          Samuel Monday
        </Link>
        <ul className="flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[var(--color-ink-muted)] underline-offset-4 transition-colors hover:text-[var(--color-ink)] hover:underline focus-visible:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
