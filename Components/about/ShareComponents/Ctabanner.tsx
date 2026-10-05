import type { ReactNode } from "react";
import Link from "next/link";
// Relative imports on purpose, so they don't depend on the @/Components casing.
import Button from "../../ui/Button";
import { cn } from "../../../lib/cn";

interface CtaBannerProps {
  title: string;
  /** Optional paragraph under the title. */
  description?: ReactNode;
  /** Button text (the arrow is added). */
  label: string;
  href: string;
  /** Spacing and anything else, e.g. "mt-16". */
  className?: string;
}

export default function CtaBanner({
  title,
  description,
  label,
  href,
  className,
}: CtaBannerProps) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 rounded-3xl p-8 text-white shadow-brand sm:flex-row sm:items-center sm:p-10",
        className,
      )}
      style={{
        background:
          "linear-gradient(138.71deg, #3393FF 4.61%, #0078FF 56.57%, #005BC2 99.56%)",
      }}
    >
      <div>
        <h2 className="max-w-xs text-h2 font-heading font-bold leading-tight tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">
            {description}
          </p>
        )}
      </div>

      <Link href={href}>
        <Button size="lg">
          {label}
          <span aria-hidden="true">→</span>
        </Button>
      </Link>
    </div>
  );
}
