"use client";

import { useId, useState } from "react";
import { Icon, cn } from "@/Components/ui";

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

  return (
    <div className="border-t border-ink-100 pt-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-3 py-3 text-left text-xs font-medium text-ink-100 transition-colors hover:text-white"
      >
        Selected areas of focus
        <Icon
          name="chevron-down"
          size={14}
          strokeWidth={2}
          className={cn(
            "shrink-0 transition-transform duration-200",
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
        <ul className="overflow-hidden">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 pb-2.5 text-xs leading-snug text-slate-400"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-pulse"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
