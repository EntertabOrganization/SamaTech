"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { cn } from "@/Components/website/ui";
import  MicroLabel  from "@/Components/website/ContactPage/MicroLabel";
import {
  ApiError,
  bookConsultation,
  getBookedTimes,
  getWeeklyAvailability,
  type ConsultationInput,
  type DayAvailability,
} from "@/lib/api";
import Calendar from "./Calendar";
import { Field, FormStatus, MailIcon, SubmitButton, TextArea, TextInput } from "./fields";
import { useFormSubmit } from "./useFormSubmit";

/** Slots are offered on the backend's consultation clock (CONSULTATION_TIME_ZONE). */
const CONSULTATION_TIME_ZONE = "Asia/Riyadh";

const toISODate = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

const longDate = (d: Date, language: string) =>
  d.toLocaleDateString(language === "ar" ? "ar-SA-u-ca-gregory" : "en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/** Today's date (YYYY-MM-DD) and minutes since midnight on the consultation clock. */
function consultationNow() {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-CA", {
      timeZone: CONSULTATION_TIME_ZONE,
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
      .formatToParts(new Date())
      .map((p) => [p.type, p.value]),
  );
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
}

/** "09:30" / "02:30 PM" -> minutes since midnight. */
function slotMinutes(label: string): number {
  const match = label.trim().match(/^(\d{1,2}):(\d{2})\s?(AM|PM)?$/i);
  if (!match) return 0;
  let hours = Number(match[1]) % (match[3] ? 12 : 24);
  if (match[3]?.toUpperCase() === "PM") hours += 12;
  return hours * 60 + Number(match[2]);
}

export default function BookingForm() {
  const { t: translateText, language } = useLanguage();

  const [availability, setAvailability] = useState<DayAvailability[] | null>(null);
  const [availabilityFailed, setAvailabilityFailed] = useState(false);
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [booked, setBooked] = useState<string[] | null>(null);
  const [bookedFailed, setBookedFailed] = useState(false);
  const latestDate = useRef<string | null>(null);
  const ready = Boolean(date && time);

  useEffect(() => {
    let active = true;
    getWeeklyAvailability()
      .then((days) => active && setAvailability(days))
      .catch(() => active && setAvailabilityFailed(true));
    return () => {
      active = false;
    };
  }, []);

  const loadBooked = (day: string) => {
    latestDate.current = day;
    setBooked(null);
    setBookedFailed(false);
    getBookedTimes(day)
      .then((times) => latestDate.current === day && setBooked(times))
      .catch(() => latestDate.current === day && setBookedFailed(true));
  };

  const { status, errorMessage, submit } = useFormSubmit(async (input: ConsultationInput) => {
    try {
      return await bookConsultation(input);
    } catch (error) {
      // The slot was taken or passed meanwhile: refresh the day so it shows as unavailable.
      if (error instanceof ApiError && error.status === 409) {
        setTime(null);
        loadBooked(input.date);
      }
      throw error;
    }
  });

  const onSelectDate = (next: Date) => {
    setDate(next);
    setTime(null); // a new day means a new list of times
    loadBooked(toISODate(next));
  };

  const availableWeekdays = (availability ?? [])
    .filter((day) => day.timeSlots.length > 0)
    .map((day) => day.dayOfWeek);

  const now = consultationNow();
  const slots = date
    ? (availability?.find((day) => day.dayOfWeek === date.getDay())?.timeSlots ?? []).map((slot) => ({
        time: slot,
        available:
          !booked?.includes(slot) && !(toISODate(date) === now.date && slotMinutes(slot) <= now.minutes),
      }))
    : [];

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!date || !time) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const text = (field: string) => String(data.get(field) ?? "").trim();

    const ok = await submit({
      name: text("name"),
      email: text("email"),
      company: text("organization") || undefined,
      notes: text("topic") || undefined,
      date: toISODate(date),
      time,
    });

    if (ok) {
      form.reset();
      setDate(null);
      setTime(null);
      setBooked(null);
      latestDate.current = null;
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

      <Calendar value={date} onChange={onSelectDate} availableWeekdays={availableWeekdays} />

      <div aria-live="polite">
        {availabilityFailed ? (
          <p role="alert" className="text-[11px] text-[#B42318]"><Trans>
            We couldn&apos;t load the available times. Please refresh the page, or send us a message instead.
          </Trans></p>
        ) : !availability ? (
          <p className="text-[11px] text-slate-400"><Trans>Loading available times…</Trans></p>
        ) : date ? (
          <>
            <MicroLabel tone="default">{longDate(date, language)}</MicroLabel>
            {bookedFailed ? (
              <p role="alert" className="mt-2.5 text-[11px] text-[#B42318]"><Trans>
                We couldn&apos;t load the available times. Please refresh the page, or send us a message instead.
              </Trans></p>
            ) : !booked ? (
              <p className="mt-2.5 text-[11px] text-slate-400"><Trans>Loading available times…</Trans></p>
            ) : !slots.some((slot) => slot.available) ? (
              <p className="mt-2.5 text-[11px] text-slate-400"><Trans>
                No times are left on this day. Please choose another date.
              </Trans></p>
            ) : null}
            {booked && <div className="mt-2.5 grid grid-cols-4 gap-2">
              {slots.map((slot) => {
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
            </div>}
          </>
        ) : (
          <p className="text-[11px] text-slate-400"><Trans>Pick a date to see the available times.</Trans></p>
        )}
      </div>

      <div className="grid gap-3 border-t border-ink-100 pt-4 sm:grid-cols-2">
        <Field label="Name" required>
          <TextInput name="name" required maxLength={200} autoComplete="name" placeholder={translateText("Full name")} />
        </Field>
        <Field label="Email" required>
          <TextInput
            name="email"
            type="email"
            maxLength={254}
            required
            autoComplete="email"
            placeholder={translateText("name@mail.com")}
            icon={<MailIcon />}
          />
        </Field>
        <Field label="Organization" className="sm:col-span-2">
          <TextInput name="organization" maxLength={200} autoComplete="organization" placeholder={translateText("Organization")} />
        </Field>
        <Field label="What would you like to discuss?" className="sm:col-span-2">
          <TextArea
            name="topic"
            maxLength={5000}
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
        errorMessage={errorMessage}
      />

      <p className="text-[10px] leading-relaxed text-slate-400"><Trans>
        A partner will confirm by email, usually within one business day.
      </Trans></p>
    </form>
  );
}
