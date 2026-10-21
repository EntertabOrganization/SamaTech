import { Trans } from "@/lib/i18n/LanguageProvider";
import type { ReactNode } from "react";
import { cn } from "@/Components/website/ui";
import { FigmaIcon } from "./primitives";
import CheckIcon from "@/public/figma/check-13.svg";

interface ChecklistCardProps {
  title: string;
  /** Shown at the end of the title row. */
  icon?: ReactNode;
  items: string[];
  /** Anything below the list, e.g. a pill. */
  footer?: ReactNode;
  className?: string;
}

export default function ChecklistCard({
  title,
  icon,
  items,
  footer,
  className,
}: ChecklistCardProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-4.5 rounded-card bg-white p-7 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-heading text-[15px] font-bold leading-[1.65] text-ink-900"><Trans>{title}</Trans></p>
        {icon && <span className="text-blue-sovereign"><Trans>{icon}</Trans></span>}
      </div>

      <ul className="flex flex-col gap-0.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 border-t border-ink-100 py-3.25 text-body-small font-semibold leading-[1.65] text-ink-700"
          >
            <span className="flex size-6.5 shrink-0 items-center justify-center rounded-tooltip bg-blue-mist text-blue-sovereign">
              <FigmaIcon src={CheckIcon} size={13} />
            </span>
            <Trans>{item}</Trans>
          </li>
        ))}
      </ul>

      {footer && <div><Trans>{footer}</Trans></div>}
    </div>
  );
}
