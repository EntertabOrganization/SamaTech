"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useId, useState, type KeyboardEvent } from "react";
import { cn } from "@/Components/website/ui";
import BookingForm from "./BookingForm";
import MessageForm from "./MessageForm";

type TabId = "message" | "booking";

const tabs: Array<{ id: TabId; label: string }> = [
  { id: "message", label: "Message" },
  { id: "booking", label: "Book a time" },
];

export default function ContactPanel() {
  const { t: translateText } = useLanguage();

  const uid = useId().replace(/:/g, "");
  const [tab, setTab] = useState<TabId>("message");

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const next: TabId = tab === "message" ? "booking" : "message";
    setTab(next);
    document.getElementById(`${uid}-tab-${next}`)?.focus();
  };

  return (
    <div className="flex flex-col gap-4.5 rounded-panel border border-ink-100 bg-white p-6 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)] sm:p-11">
      <div
        role="tablist"
        aria-label={translateText("How would you like to reach us?")}
        onKeyDown={onKeyDown}
        className="grid grid-cols-2 gap-1 rounded-full border border-ink-100 bg-ink-50 p-1"
      >
        {tabs.map((t) => {
          const selected = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`${uid}-tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setTab(t.id)}
              className={cn(
                "h-9.5 cursor-pointer rounded-full px-5 text-body-small font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-pulse focus-visible:ring-offset-2",
                selected
                  ? "bg-blue-pulse text-white drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)]"
                  : "text-ink-500 hover:text-ink-900",
              )}
            >
              <Trans>{t.label}</Trans>
            </button>
          );
        })}
      </div>
      <div aria-hidden="true" className="h-5.5 border-t border-ink-100" />

      <div
        role="tabpanel"
        id={`${uid}-panel-message`}
        aria-labelledby={`${uid}-tab-message`}
        hidden={tab !== "message"}
      >
        <MessageForm />
      </div>
      <div
        role="tabpanel"
        id={`${uid}-panel-booking`}
        aria-labelledby={`${uid}-tab-booking`}
        hidden={tab !== "booking"}
      >
        <BookingForm />
      </div>
    </div>
  );
}
