import { cn } from "@/lib/utils";

/**
 * Phones: a horizontal swipe row that snaps to each item (items need `shrink-0 snap-center w-[78%]`).
 * sm and up: items sit centred side by side.
 */
export function SwipeRow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div>
      <div
        className={cn(
          "flex w-[calc(100%+2.5rem)] -translate-x-5 snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "sm:w-full sm:translate-x-0 sm:snap-none sm:justify-center sm:overflow-visible sm:px-0",
          className,
        )}
      >
        {children}
      </div>
      <p className="hand text-xl text-[var(--color-ink-muted)] sm:hidden" aria-hidden="true">
        swipe →
      </p>
    </div>
  );
}
