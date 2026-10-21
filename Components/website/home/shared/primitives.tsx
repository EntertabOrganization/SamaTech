import { Trans } from "@/lib/i18n/LanguageProvider";
import type { ReactNode } from "react";
import type { StaticImageData } from "next/image";
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

/**
 * A Figma icon export used as a mask, so it takes the parent's text color (`bg-current`).
 * Figma draws these icons upside down and flips them back; `flip` (on by default) does the same.
 */
export function FigmaIcon({
  src,
  size,
  flip = true,
  className,
}: {
  src: StaticImageData;
  size: number;
  flip?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block shrink-0 bg-current", flip && "-scale-y-100", className)}
      style={{
        width: size,
        height: size,
        maskImage: `url(${src.src})`,
        maskSize: "100% 100%",
        WebkitMaskImage: `url(${src.src})`,
        WebkitMaskSize: "100% 100%",
      }}
    />
  );
}

/** Tiny uppercase caption used above diagrams and panels. */
export function MicroLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-bold uppercase leading-[18.15px] tracking-[0.14em] text-ink-300",
        className,
      )}
    >
      <Trans>{children}</Trans>
    </p>
  );
}
