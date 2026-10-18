import type { ReactNode } from "react";
import { cn } from "@/Components/website/ui";

/** Small filled dot. Inherits color from the parent (`bg-current`). */
export function SmallDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("h-1.5 w-1.5 rounded-full bg-current", className)}
    />
  );
}

/** Tiny uppercase caption used above diagrams and panels. */
export function MicroLabel({
  children,
  tone = "muted",
  className,
}: {
  children: ReactNode;
  /** muted = slate-400, default = slate-500 */
  tone?: "muted" | "default";
  className?: string;
}) {
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
