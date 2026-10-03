import type { ReactNode } from "react";
import { Icon, cn } from "@/Components/ui";

interface ChecklistCardProps {
  title: string;
  /** Shown at the end of the title row, e.g. <Icon name="shield" solid />. */
  icon?: ReactNode;
  items: string[];
  /** Anything below the list, e.g. a <Badge />. */
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
        "w-full rounded-2xl border border-ink-100 bg-white p-4 shadow-[0px_8px_20px_-10px_#121A2330]",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold text-[#0F1B2D]">{title}</p>
        {icon && <span className="text-blue-pulse">{icon}</span>}
      </div>

      <ul className="mt-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 border-t border-ink-100 py-2 text-[11px] text-slate-600 first:border-t-0"
          >
            <Icon name="check-circle" size={14} className="shrink-0 text-blue-pulse" />
            {item}
          </li>
        ))}
      </ul>

      {footer && <div className="mt-2">{footer}</div>}
    </div>
  );
}
