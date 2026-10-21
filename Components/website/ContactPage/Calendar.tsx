"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/Components/website/ui";
import PrevIcon from "@/public/figma/cal-prev.svg";
import NextIcon from "@/public/figma/cal-next.svg";

interface CalendarProps {
  value: Date | null;
  onChange: (date: Date) => void;
  /** `Date.getDay()` values that can be booked. Default: Sunday to Thursday. */
  availableWeekdays?: number[];
}

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const SUNDAY_TO_THURSDAY = [0, 1, 2, 3, 4];

const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

const sameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export default function Calendar({
  value,
  onChange,
  availableWeekdays = SUNDAY_TO_THURSDAY,
}: CalendarProps) {
  const { language } = useLanguage();

  // "Today" is read after mount, so the server and the browser can't disagree
  // about which days are in the past (different time zones).
 const initialToday = startOfDay(new Date());

const [today] = useState<Date>(initialToday);

const [view, setView] = useState<{ year: number; month: number }>({
  year: initialToday.getFullYear(),
  month: initialToday.getMonth(),
});

  if (!today || !view) {
    return (
      <div
        aria-hidden="true"
        className="h-97 rounded-input border border-ink-100 bg-white/60"
      />
    );
  }

  const first = new Date(view.year, view.month, 1);
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const cells: Array<Date | null> = [
    ...Array.from({ length: first.getDay() }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(view.year, view.month, i + 1)),
  ];

  const canGoPrev =
    view.year * 12 + view.month > today.getFullYear() * 12 + today.getMonth();

  const shift = (delta: number) => {
    const d = new Date(view.year, view.month + delta, 1);
    setView({ year: d.getFullYear(), month: d.getMonth() });
  };

  const isAvailable = (d: Date) => d >= today && availableWeekdays.includes(d.getDay());

  return (
    <div className="flex flex-col gap-4 rounded-input border border-ink-100 p-5">
      <div className="flex items-center justify-between">
        <MonthButton label="Previous month" icon={PrevIcon} disabled={!canGoPrev} onClick={() => shift(-1)} />
        <p aria-live="polite" className="font-heading text-body font-bold leading-[1.65] tracking-[-0.01em] text-ink-900">
          {first.toLocaleDateString(language === "ar" ? "ar-SA-u-ca-gregory" : "en-US", { month: "long", year: "numeric" })}
        </p>
        <MonthButton label="Next month" icon={NextIcon} onClick={() => shift(1)} />
      </div>

      <div className="grid grid-cols-7 gap-1.5 text-center">
        {WEEKDAYS.map((day) => (
          <span
            key={day}
            className="flex h-6 items-center justify-center text-[10.5px] font-bold uppercase tracking-[0.14em] text-ink-300"
          >
            <Trans>{day}</Trans>
          </span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1.5 text-center">

        {cells.map((date, i) => {
          if (!date) return <span key={`empty-${i}`} />;

          const available = isAvailable(date);
          const selected = value ? sameDay(date, value) : false;

          return (
            <button
              key={date.getDate()}
              type="button"
              disabled={!available}
              aria-pressed={selected}
              aria-label={date.toLocaleDateString(language === "ar" ? "ar-SA-u-ca-gregory" : "en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              onClick={() => onChange(date)}
              className={cn(
                "flex h-9.5 cursor-pointer items-center justify-center rounded-tooltip border text-[13.5px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-pulse",
                selected
                  ? "border-blue-pulse bg-blue-pulse font-bold text-white drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)]"
                  : available
                    ? "border-ink-100 bg-white font-semibold text-ink-700 hover:border-blue-pulse"
                    : "cursor-not-allowed border-transparent font-semibold text-ink-300 opacity-45",
              )}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MonthButton({
  label,
  icon,
  disabled,
  onClick,
}: {
  label: string;
  icon: typeof PrevIcon;
  disabled?: boolean;
  onClick: () => void;
}) {
  const { t: translateText, language } = useLanguage();
  return (
    <button
      type="button"
      aria-label={translateText(label)}
      disabled={disabled}
      onClick={onClick}
      className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-ink-200 bg-white transition-colors hover:border-blue-pulse disabled:cursor-not-allowed disabled:opacity-35"
    >
      <Image src={icon} alt="" width={14} height={14} className={cn("-scale-y-100", language === "ar" && "-scale-x-100")} />
    </button>
  );
}
