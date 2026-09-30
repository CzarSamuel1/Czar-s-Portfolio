import type { MDXComponents } from "mdx/types";

// Applies to every .mdx file rendered in the app (case studies).
// Keep this mapped to the same type tokens as the rest of the site —
// case studies should feel like part of the portfolio, not a separate doc site.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="mt-16 font-[family-name:var(--font-display)] text-[var(--font-size-xl)] font-semibold tracking-tight first:mt-0"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="mt-10 font-[family-name:var(--font-display)] text-[var(--font-size-lg)] font-semibold tracking-tight"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="mt-4 max-w-2xl text-[var(--font-size-base)] leading-relaxed text-[var(--color-ink-muted)]"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-[var(--font-size-base)] text-[var(--color-ink-muted)]"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote
        className="mt-6 max-w-2xl bg-[var(--color-note)] px-6 py-4 font-[family-name:var(--font-display)] text-[var(--font-size-lg)] tracking-tight shadow-[0_6px_14px_rgba(20,19,18,0.12)] [transform:rotate(-0.8deg)]"
        {...props}
      />
    ),
    ...components,
  };
}
