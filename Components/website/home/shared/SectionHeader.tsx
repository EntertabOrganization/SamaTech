import { Trans } from "@/lib/i18n/LanguageProvider";
import type { ReactNode } from "react";
import { cn } from "../../../../lib/cn";

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
    line: "bg-blue-pulse",
    title: "text-ink-900",
    intro: "text-ink-500",
  },
  dark: {
    eyebrow: "text-blue-pulse",
    line: "bg-blue-pulse",
    title: "text-white",
    intro: "text-white",
  },
};

const sizes = {
  md: "mt-[17px] text-3xl leading-h1 tracking-[-0.01em] sm:text-4xl lg:text-h1",
  lg: "mt-5.5 text-4xl leading-display-2 tracking-[-0.02em] sm:text-5xl lg:text-display-2",
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
    <div className={cn( className)}>
      <p
        className={cn(
          "flex items-center gap-3.5 text-eyebrow font-bold uppercase leading-[1.2] tracking-eyebrow",
          t.eyebrow,
        )}
      >
        <span aria-hidden="true" className={cn("h-px w-10", t.line)} />
        <Trans>{eyebrow}</Trans>
      </p>
      <Heading
        className={cn(
          "font-bold font-heading lg:whitespace-pre-line",
          sizes[size],
          t.title,
        )}
      >
        <Trans>{title}</Trans>
      </Heading>
      {intro && (
        <p className={cn("mt-5 text-base font-medium leading-[1.55] lg:text-lead", t.intro)}>
          <Trans>{intro}</Trans>
        </p>
      )}
      <Trans>{children}</Trans>
    </div>
  );
}
