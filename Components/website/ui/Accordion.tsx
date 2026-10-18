"use client";

import { Trans } from "@/lib/i18n/LanguageProvider";
import { useId, useState, type ReactNode } from "react";
import { cn } from "../../../lib/cn";
import { Minus, Plus } from "./Icons";

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /**
   * Id of the row open on first render.
   * Default: the first row. Pass `null` to start with everything closed.
   */
  defaultOpenId?: string | null;
  /** Heading level wrapping each trigger, to keep the page outline correct. */
  headingLevel?: 2 | 3 | 4 | 5;
  className?: string;
}

export function Accordion({
  items,
  defaultOpenId,
  headingLevel = 3,
  className,
}: AccordionProps) {
  const uid = useId().replace(/:/g, "");
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId === undefined ? (items[0]?.id ?? null) : defaultOpenId,
  );
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4" | "h5";

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item) => {
        const open = item.id === openId;
        const buttonId = `${uid}-trigger-${item.id}`;
        const panelId = `${uid}-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-card border bg-white transition-colors",
              open ? "border-[#9CC3F5]" : "border-ink-100",
            )}
          >
            <Heading>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-start text-sm font-medium text-[#0F1B2D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-pulse"
              >
                <Trans>{item.title}</Trans>
                <span className="shrink-0 text-blue-pulse">
                  {open ? <Minus /> : <Plus />}
                </span>
              </button>
            </Heading>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className={cn("overflow-hidden", !open && "invisible")}>
                <div className="px-5 pb-5 text-caption leading-relaxed text-ink-500">
                  <Trans>{item.content}</Trans>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
