"use client";

import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import { useId, useState } from "react";
import { cn } from "@/Components/website/ui";
import ChevronIcon from "@/public/figma/chevron-down.svg";
import CheckIcon from "@/public/figma/check-blue.svg";

interface FocusDisclosureProps {
  items: string[];
  defaultOpen?: boolean;
}

/** "Selected areas of focus" toggle + list. The only part of the card that needs state. */
export default function FocusDisclosure({
  items,
  defaultOpen = false,
}: FocusDisclosureProps) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const panelId = useId();

  // mt-auto pins the toggle to the bottom of shorter (closed) cards
  return (
    <div className="mt-auto">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between gap-3 border-t border-ink-100 pt-4 text-start text-body-small font-bold text-white"
      >
        <Trans>Selected areas of focus</Trans>
        {/* The Figma icons are drawn upside down and flipped back with -scale-y-100 */}
        <Image
          src={ChevronIcon}
          alt=""
          width={16}
          height={16}
          className={cn(
            "shrink-0 -scale-y-100 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        id={panelId}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <ul className="flex flex-col gap-2.5 overflow-hidden">
          {items.map((item, index) => (
            <li
              key={item}
              className={cn(
                "flex gap-2.5 text-body-small font-medium leading-[1.6] text-white",
                index === 0 && "mt-6.5",
              )}
            >
              <Image src={CheckIcon} alt="" width={14} height={14} className="mb-1.25 mt-0.5 size-3.5 shrink-0 -scale-y-100" />
              <Trans>{item}</Trans>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
