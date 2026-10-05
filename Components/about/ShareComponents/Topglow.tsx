import { cn } from "../../../lib/cn";

interface TopGlowProps {
  /** 6-digit hex, e.g. "#CFE2FF". The gradient fades it to transparent. */
  color?: string;
  className?: string;
}

/** First child of a `relative overflow-hidden` section. */
export default function TopGlow({ color = "#CFE2FF", className }: TopGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 -top-65 h-130 w-240 max-w-[160vw] -translate-x-1/2",
        className,
      )}
      style={{
        background: `radial-gradient(closest-side, ${color} 0%, ${color}00 100%)`,
      }}
    />
  );
}
