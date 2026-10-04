"use client";

import { useState } from "react";
import { Icon, IconButton, cn } from "@/Components/ui";

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
  // "Today" is read after mount, so the server and the browser can't disagree
  // about which days are in the past (different time zones).
 const initialToday = startOfDay(new Date());

const [today, setToday] = useState<Date>(initialToday);

const [view, setView] = useState<{ year: number; month: number }>({
  year: initialToday.getFullYear(),
  month: initialToday.getMonth(),
});

  if (!today || !view) {
    return (
      <div
        aria-hidden="true"
        className="h-68 rounded-xl border border-ink-100 bg-white/60"
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
    <div className="rounded-xl border border-ink-100 bg-white p-3">
      <div className="flex items-center justify-between">
        <IconButton
          label="Previous month"
          size="sm"
          icon={<Icon name="chevron-down" size={12} className="rotate-90" />}
          disabled={!canGoPrev}
          onClick={() => shift(-1)}
        />
        <p aria-live="polite" className="text-xs font-semibold text-[#0F1B2D]">
          {first.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </p>
        <IconButton
          label="Next month"
          size="sm"
          icon={<Icon name="chevron-down" size={12} className="-rotate-90" />}
          onClick={() => shift(1)}
        />
      </div>

      <div className="mt-3 grid grid-cols-7 text-center">
        {WEEKDAYS.map((day) => (
          <span
            key={day}
            className="pb-2 text-[9px] font-medium uppercase tracking-wider text-slate-400"
          >
            {day}
          </span>
        ))}

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
              aria-label={date.toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              onClick={() => onChange(date)}
              className={cn(
                "mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-full text-[11px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078FF]",
                selected
                  ? "bg-[#0078FF] font-semibold text-white"
                  : available
                    ? "text-[#0F1B2D] hover:bg-[#E3ECF9]"
                    : "cursor-not-allowed text-slate-300",
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
