import type { ReactNode } from "react";
import { cn } from "@/Components/ui";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  /** Paragraph under the title. */
  intro?: ReactNode;
  /** Heading level, so each page keeps a single h1. */
  as?: "h1" | "h2";
  /** light = for light backgrounds, dark = for dark backgrounds. */
  tone?: "light" | "dark";
  className?: string;
}

const tones = {
  light: {
    eyebrow: "text-blue-sovereign",
    line: "bg-blue-pulse",
    title: "text-ink-900",
    intro: "text-ink-500",
  },
  dark: {
    eyebrow: "text-blue-precision",
    line: "bg-blue-precision",
    title: "text-white",
    intro: "text-white",
  },
};

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  as: Heading = "h2",
  tone = "light",
  className,
}: SectionHeaderProps) {
  const t = tones[tone];

  return (
    <div className={cn("max-w-md", className)}>
      <p
        className={cn(
          "flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider",
          t.eyebrow,
        )}
      >
        <span aria-hidden="true" className={cn("h-px w-8", t.line)} />
        {eyebrow}
      </p>
      <Heading
        className={cn(
          "mt-4 text-3xl font-bold font-heading leading-tight tracking-tight sm:text-4xl",
          t.title,
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p className={cn("mt-5 text-sm font-medium leading-relaxed", t.intro)}>
          {intro}
        </p>
      )}
    </div>
  );
}
