// Decorative ruler: 100 units = 156px, like a design tool's top ruler.
const STEP = 156;
const LABELS = Array.from({ length: 16 }, (_, i) => i * 100);

export function Ruler() {
  return (
    <div
      aria-hidden="true"
      className="mono relative hidden h-10 overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-paper)] text-[11px] text-[#8b8780] md:block"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #cfcabd 1px, transparent 1px), linear-gradient(90deg, #cfcabd 1px, transparent 1px)",
        backgroundSize: `${STEP / 5}px 6px, ${STEP}px 12px`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "0 0",
      }}
    >
      {LABELS.map((n) => (
        <span
          key={n}
          className="absolute top-4"
          style={{ left: n === 0 ? 0 : (n / 100) * STEP - 12 }}
        >
          {n}
        </span>
      ))}
    </div>
  );
}
