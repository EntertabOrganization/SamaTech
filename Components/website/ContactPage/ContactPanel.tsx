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
    <div className="rounded-3xl border border-ink-100 bg-white p-5 shadow-[0px_30px_60px_-30px_#0B3C8A40] ">
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
                "rounded-full py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-pulse focus-visible:ring-offset-2",
                selected ? "bg-blue-pulse text-white" : "text-slate-600 hover:text-[#0F1B2D]",
              )}
            >
              <Trans>{t.label}</Trans>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${uid}-panel-message`}
        aria-labelledby={`${uid}-tab-message`}
        hidden={tab !== "message"}
        className="mt-5"
      >
        <MessageForm />
      </div>
      <div
        role="tabpanel"
        id={`${uid}-panel-booking`}
        aria-labelledby={`${uid}-tab-booking`}
        hidden={tab !== "booking"}
        className="mt-5"
      >
        <BookingForm />
      </div>
    </div>
  );
}
