import type { ReactNode } from "react";
// Relative import on purpose, so it doesn't depend on the @/Components vs @/components casing.
import { cn } from "../../lib/cn";

interface MicroLabelProps {
  children: ReactNode;
  /** muted = slate-400, default = slate-500 */
  tone?: "muted" | "default";
  className?: string;
}

/** Tiny uppercase caption used above diagrams, panels and lists. */
export default function MicroLabel({
  children,
  tone = "muted",
  className,
}: MicroLabelProps) {
  return (
    <p
      className={cn(
        "text-[9px] font-medium uppercase tracking-wider",
        tone === "muted" ? "text-slate-400" : "text-slate-500",
        className,
      )}
    >
      {children}
    </p>
  );
}
