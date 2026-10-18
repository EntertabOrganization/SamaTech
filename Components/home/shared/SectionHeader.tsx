import { Trans } from "@/lib/i18n/LanguageProvider";
import type { ReactNode } from "react";
import { cn } from "../../../lib/cn";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  as?: "h1" | "h2";
  size?: "md" | "lg";
  tone?: "light" | "dark";
  className?: string;
}

const tones = {
  light: {
    eyebrow: "text-blue-sovereign",
    line: "bg-blue-sovereign",
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

const sizes = {
  md: "text-3xl sm:text-4xl",
  lg: "text-4xl sm:text-5xl",
};

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  children,
  as: Heading = "h2",
  size = "md",
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
        <Trans>{eyebrow}</Trans>
      </p>
      <Heading
        className={cn(
          "mt-4 font-bold font-heading leading-tight tracking-tight",
          sizes[size],
          t.title,
        )}
      >
        <Trans>{title}</Trans>
      </Heading>
      {intro && (
        <p className={cn("mt-5 text-sm font-medium leading-relaxed", t.intro)}>
          <Trans>{intro}</Trans>
        </p>
      )}
      <Trans>{children}</Trans>
    </div>
  );
}
