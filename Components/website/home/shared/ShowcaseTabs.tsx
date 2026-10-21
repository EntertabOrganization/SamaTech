"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useId, useState, type ReactNode } from "react";
import { cn } from "../../../../lib/cn";
import ContactMicroLabel from "../../ContactPage/MicroLabel";
import { MicroLabel } from "./primitives";

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
 * capabilities = panel on the left, list on the right with a white selected card.
 * steps = list on the left with a tinted selected card, soft panel on the right.
 */
export type ShowcaseVariant = "cards" | "soft" | "plain" | "capabilities" | "steps";

interface ShowcaseTabsProps {
  items: ShowcaseItem[];
  /** Accessible name of the tab list. */
  label: string;
  variant?: ShowcaseVariant;
  className?: string;
}

const styles = {
  steps: {
    grid: "min-h-[589px] items-center gap-12 lg:grid-cols-2",
    panelFirst: false,
    list: "flex flex-col gap-2",
    item: "rounded-card border-b px-6.5 py-6 text-start transition-colors",
    itemSelected: "border-transparent bg-blue-mist",
    itemIdle: "border-ink-100 hover:bg-ink-50",
    row: "gap-3.5",
    iconSelected: "text-blue-sovereign",
    iconIdle: "text-ink-500",
    title: "font-heading text-h4 font-semibold leading-h4 tracking-[-0.01em]",
    titleSelected: "text-ink-900",
    titleIdle: "text-ink-700",
    description: "mt-[9px] block max-w-[454.35px] ps-8.75 text-body-small font-medium leading-[1.65] text-ink-500",
    panel: "flex min-h-[460px] flex-col justify-center overflow-hidden rounded-panel bg-ink-50 py-8",
    panelLabel: true,
    content: "flex flex-col gap-3.5 p-12",
  },
  capabilities: {
    grid: "min-h-[475px] items-center gap-12 lg:grid-cols-2",
    panelFirst: true,
    list: "flex flex-col gap-1.5",
    item: "rounded-card border-b px-6 py-5 text-start transition-colors",
    itemSelected: "border-transparent bg-white",
    itemIdle: "border-ink-100 hover:bg-white/50",
    row: "gap-3.5",
    iconSelected: "text-blue-sovereign",
    iconIdle: "text-ink-500",
    title: "font-heading text-h4 font-semibold leading-h4 tracking-[-0.01em]",
    titleSelected: "text-ink-900",
    titleIdle: "text-ink-700",
    description: "mt-[7px] block max-w-[420.7px] ps-8.5 text-body-small font-medium leading-[1.65] text-ink-500",
    panel: "flex min-h-[398px] flex-col justify-center overflow-hidden rounded-panel bg-ink-50 py-8",
    panelLabel: true,
    content: "flex flex-col gap-3.5 p-11",
  },
  cards: {
    grid: "min-h-[670px] items-center gap-12 lg:grid-cols-2",
    panelFirst: false,
    list: "flex flex-col gap-2",
    item: "rounded-card border-b px-6.5 py-6 text-start transition-colors",
    itemSelected: "border-transparent bg-white",
    itemIdle: "border-ink-100 bg-[#F1F4F8] hover:bg-white/70",
    row: "gap-3.5",
    iconSelected: "text-blue-sovereign",
    iconIdle: "text-ink-500",
    title: "font-heading text-h4 font-semibold leading-h4 tracking-[-0.01em]",
    titleSelected: "text-ink-900",
    titleIdle: "text-ink-700",
    description: "mt-[9px] block max-w-[437.5px] ps-8.75 text-body-small font-medium leading-[1.65] text-ink-500",
    panel:
      "flex min-h-[466px] flex-col justify-center overflow-hidden rounded-input border border-blue-pulse bg-[#F1F4F8] py-8",
    panelLabel: true,
    content: "flex flex-col gap-3.5 p-12",
  },
  soft: {
    grid: "min-h-[656px] items-center gap-12 lg:grid-cols-2",
    panelFirst: true,
    list: "flex flex-col gap-2",
    item: "rounded-card border-b px-6.5 py-6 text-start transition-colors",
    itemSelected: "border-transparent bg-blue-mist",
    itemIdle: "border-ink-100 hover:bg-ink-50",
    row: "gap-3.5",
    iconSelected: "text-blue-sovereign",
    iconIdle: "text-ink-500",
    title: "font-heading text-h4 font-semibold leading-h4 tracking-[-0.01em]",
    titleSelected: "text-ink-900",
    titleIdle: "text-ink-700",
    description: "mt-[9px] block max-w-[437.5px] ps-8.75 text-body-small font-medium leading-[1.65] text-ink-500",
    panel: "flex min-h-[520px] flex-col justify-center overflow-hidden rounded-panel bg-ink-50 py-8",
    panelLabel: true,
    content: "flex flex-col gap-3.5 p-14",
  },
  plain: {
    grid: "min-h-[589px] items-center gap-12 lg:grid-cols-2",
    panelFirst: false,
    list: "flex flex-col gap-2",
    item: "rounded-card border-b px-6.5 py-6 text-start transition-colors",
    itemSelected: "border-transparent bg-blue-mist",
    itemIdle: "border-ink-100 hover:bg-ink-50",
    row: "gap-3.5",
    iconSelected: "text-blue-sovereign",
    iconIdle: "text-ink-500",
    title: "font-heading text-h4 font-semibold leading-h4 tracking-[-0.01em]",
    titleSelected: "text-ink-900",
    titleIdle: "text-ink-700",
    description: "",
    panel: "flex min-h-[483px] flex-col justify-center overflow-hidden rounded-panel bg-ink-50",
    panelLabel: false,
    content: "flex flex-1 items-center justify-center p-12",
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
      {variant !== "plain" ? (
        <div className={s.content}>
          <MicroLabel><Trans>{active.title}</Trans></MicroLabel>
          <div className="w-full"><Trans>{active.visual}</Trans></div>
        </div>
      ) : (
        <>
          {s.panelLabel && <ContactMicroLabel><Trans>{active.title}</Trans></ContactMicroLabel>}
          <div className={s.content}>
            <div className="w-full"><Trans>{active.visual}</Trans></div>
          </div>
        </>
      )}
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
