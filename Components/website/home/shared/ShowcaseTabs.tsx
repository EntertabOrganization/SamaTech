"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useId, useState, type ReactNode } from "react";
import { cn } from "../../../../lib/cn";
import MicroLabel from "../../ContactPage/MicroLabel";

export interface ShowcaseItem {
  id: string;
  title: string;
  /** Shown under the selected tab. Not used by the "plain" variant. */
  description?: string;
  icon: ReactNode;
  /** Rendered on the server and passed in as an element, so it can stay a server component. */
  visual: ReactNode;
}

/**
 * cards = list on the left, bordered glass panel on the right.
 * soft  = panel on the left, list on the right with divider rows.
 * plain = list on the left (title only), soft panel on the right with a text card.
 */
export type ShowcaseVariant = "cards" | "soft" | "plain";

interface ShowcaseTabsProps {
  items: ShowcaseItem[];
  /** Accessible name of the tab list. */
  label: string;
  variant?: ShowcaseVariant;
  className?: string;
}

const styles = {
  cards: {
    grid: "gap-14 lg:grid-cols-2",
    panelFirst: false,
    list: "flex flex-col justify-center gap-3 self-center",
    item: "rounded-2xl px-4 py-3.5 text-start transition-all",
    itemSelected: "border border-ink-100 bg-white shadow-[0px_6px_18px_-6px_#121A231F]",
    itemIdle: "border border-transparent bg-white/40 hover:bg-white/70",
    row: "gap-2.5",
    iconSelected: "text-blue-pulse",
    iconIdle: "text-slate-500",
    title: "text-sm font-semibold",
    titleSelected: "text-[#0F1B2D]",
    titleIdle: "text-slate-600",
    description: "mt-2 block ps-6.5 text-xs leading-relaxed text-slate-500",
    panel:
      "flex min-h-80 flex-col rounded-lg border border-[#3B9BFF] bg-white/60 p-6 backdrop-blur-[14px]",
    panelLabel: true,
    content: "flex flex-1 items-center justify-center pt-4",
  },
  soft: {
    grid: "items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]",
    panelFirst: true,
    list: "flex flex-col",
    item: "px-4 text-start transition-colors",
    itemSelected: "rounded-2xl bg-[#E3ECF9] py-4",
    itemIdle: "border-b border-ink-100 py-3.5 hover:bg-slate-50",
    row: "gap-3",
    iconSelected: "text-blue-pulse",
    iconIdle: "text-slate-500",
    title: "text-sm font-heading font-semibold",
    titleSelected: "text-ink-900",
    titleIdle: "text-ink-700",
    description: "mt-2 block ps-7 text-xs leading-relaxed text-ink-500",
    panel: "flex min-h-85 flex-col rounded-panel bg-ink-50 p-6",
    panelLabel: true,
    content: "flex flex-1 items-center pt-4",
  },
  plain: {
    grid: "items-center gap-8 lg:grid-cols-2",
    panelFirst: false,
    list: "flex flex-col",
    item: "px-4 py-3.5 text-start transition-colors",
    itemSelected: "rounded-2xl bg-[#E3ECF9]",
    itemIdle: "border-b border-ink-100 hover:bg-white/60",
    row: "gap-3",
    iconSelected: "text-blue-sovereign",
    iconIdle: "text-ink-500",
    title: "text-sm font-semibold",
    titleSelected: "text-[#0F1B2D]",
    titleIdle: "text-slate-600",
    description: "",
    panel: "flex min-h-80 flex-col rounded-panel bg-ink-50 p-12",
    panelLabel: false,
    content: "flex flex-1 items-center justify-center",
  },
} as const;

export default function ShowcaseTabs({
  items,
  label,
  variant = "cards",
  className,
}: ShowcaseTabsProps) {
  const { t: translateText } = useLanguage();

  const uid = useId().replace(/:/g, "");
  const [activeId, setActiveId] = useState<string>(items[0].id);
  const active = items.find((i) => i.id === activeId) ?? items[0];
  const s = styles[variant];

  const list = (
    <div
      role="tablist"
      aria-orientation="vertical"
      aria-label={translateText(label)}
      className={s.list}
    >
      {items.map((item) => {
        const selected = item.id === activeId;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            id={`${uid}-tab-${item.id}`}
            aria-selected={selected}
            aria-controls={`${uid}-panel`}
            onClick={() => setActiveId(item.id)}
            className={cn(s.item, selected ? s.itemSelected : s.itemIdle)}
          >
            <span className={cn("flex items-center", s.row)}>
              <span className={selected ? s.iconSelected : s.iconIdle}>
                <Trans>{item.icon}</Trans>
              </span>
              <span
                className={cn(s.title, selected ? s.titleSelected : s.titleIdle)}
              >
                <Trans>{item.title}</Trans>
              </span>
            </span>
            {selected && item.description && (
              <span className={s.description}><Trans>{item.description}</Trans></span>
            )}
          </button>
        );
      })}
    </div>
  );

  const panel = (
    <div
      id={`${uid}-panel`}
      role="tabpanel"
      aria-labelledby={`${uid}-tab-${active.id}`}
      className={s.panel}
    >
      {s.panelLabel && <MicroLabel><Trans>{active.title}</Trans></MicroLabel>}
      <div className={s.content}>
        <div className="w-full"><Trans>{active.visual}</Trans></div>
      </div>
    </div>
  );

  return (
    <div className={cn("hidden lg:grid", s.grid, className)}>
      {s.panelFirst ? (
        <>
          <Trans>{panel}</Trans>
          <Trans>{list}</Trans>
        </>
      ) : (
        <>
          <Trans>{list}</Trans>
          <Trans>{panel}</Trans>
        </>
      )}
    </div>
  );
}
