"use client";

import { useState } from "react";

/** Copies the address and confirms in place, so people without a mail app can still reach out. */
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="mono mt-4 border-2 border-[var(--color-ink)] px-4 py-2 text-xs font-bold tracking-[0.12em] uppercase transition-colors hover:bg-[var(--color-ink)] hover:text-white"
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
