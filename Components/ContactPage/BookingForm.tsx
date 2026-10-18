"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useState, type FormEvent } from "react";
import { cn } from "@/Components/ui";
import  MicroLabel  from "@/Components/ContactPage/MicroLabel";
import Calendar from "./Calendar";
import { Field, FormStatus, MailIcon, SubmitButton, TextArea, TextInput } from "./fields";
import { useFormSubmit } from "./useFormSubmit";

// Replace with real backend.
const SLOTS: Array<{ time: string; available: boolean }> = [
  { time: "09:00", available: true },
  { time: "09:30", available: true },
  { time: "10:00", available: true },
  { time: "10:30", available: false },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "12:00", available: true },
  { time: "13:00", available: true },
  { time: "14:00", available: true },
  { time: "14:30", available: true },
  { time: "15:00", available: true },
  { time: "15:30", available: false },
  { time: "16:00", available: true },
];

const toISODate = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const longDate = (d: Date, language: string) =>
  d.toLocaleDateString(language === "ar" ? "ar-SA-u-ca-gregory" : "en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BookingForm() {
  const { t: translateText, language } = useLanguage();

  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const { status, submit } = useFormSubmit("/api/booking");
  const ready = Boolean(date && time);

  const onSelectDate = (next: Date) => {
    setDate(next);
    setTime(null); // a new day means a new list of times
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!date || !time) return;

    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());
    const ok = await submit({
      ...fields,
      date: toISODate(date),
      time,
      timezone: "UTC+3",
    });

    if (ok) {
      form.reset();
      setDate(null);
      setTime(null);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <h2 className="text-lead font-bold font-heading text-ink-900"><Trans>Choose a 45-minute slot</Trans></h2>
        <p className="mt-1 text-caption font-medium text-ink-300"><Trans>
          Sunday to Thursday · all times Arabia Standard Time (UTC+3)
        </Trans></p>
      </div>

      <Calendar value={date} onChange={onSelectDate} />

      <div aria-live="polite">
        {date ? (
          <>
            <MicroLabel tone="default">{longDate(date, language)}</MicroLabel>
            <div className="mt-2.5 grid grid-cols-4 gap-2">
              {SLOTS.map((slot) => {
                const selected = time === slot.time;
                return (
                  <button
                    key={slot.time}
                    type="button"
                    disabled={!slot.available}
                    aria-pressed={selected}
                    onClick={() => setTime(slot.time)}
                    className={cn(
                      "h-7 rounded-full border text-[11px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-pulse",
                      selected
                        ? "border-blue-pulse bg-[#E3ECF9] text-blue-sovereign"
                        : slot.available
                          ? "border-ink-100 bg-white text-[#0F1B2D] hover:border-[#9CC3F5]"
                          : "cursor-not-allowed border-transparent text-slate-300 line-through",
                    )}
                  >
                    <Trans>{slot.time}</Trans>
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <p className="text-[11px] text-slate-400"><Trans>Pick a date to see the available times.</Trans></p>
        )}
      </div>

      <div className="grid gap-3 border-t border-ink-100 pt-4 sm:grid-cols-2">
        <Field label="Name" required>
          <TextInput name="name" required autoComplete="name" placeholder={translateText("Full name")} />
        </Field>
        <Field label="Email" required>
          <TextInput
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={translateText("name@mail.com")}
            icon={<MailIcon />}
          />
        </Field>
        <Field label="Organization" className="sm:col-span-2">
          <TextInput name="organization" autoComplete="organization" placeholder={translateText("Organization")} />
        </Field>
        <Field label="What would you like to discuss?" className="sm:col-span-2">
          <TextArea
            name="topic"
            rows={3}
            placeholder={translateText("A sentence on the decision in front of you")}
          />
        </Field>
      </div>

      <SubmitButton loading={status === "submitting"} disabled={!ready}><Trans>
        Confirm appointment
      </Trans></SubmitButton>

      <FormStatus
        status={status}
        successMessage="Request received. A partner will confirm your slot by email."
      />

      <p className="text-[10px] leading-relaxed text-slate-400"><Trans>
        A partner will confirm by email, usually within one business day.
      </Trans></p>
    </form>
  );
}
