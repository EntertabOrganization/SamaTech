"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import { Icon, cn } from "@/Components/website/ui";
import { MicroLabel, SmallDot } from "../shared/primitives";
import ChecklistCard from "../shared/ChecklistCard";
import FocusStack from "../shared/FocusStack";

/** 1) Senior-led advisory: engagement team */
export function TeamVisual() {
  const steps = [
    { title: "Managing partner", subtitle: "Responsible through delivery oversight", tag: "Lead" },
    { title: "Senior advisor", subtitle: "" },
    { title: "Analyst", subtitle: "" },
  ];

  return (
    <div>
      <MicroLabel tone="default"><Trans>Engagement team</Trans></MicroLabel>
      <ol className="mt-4 flex flex-col">
        {steps.map((s, i) => {
          const lead = i === 0;
          return (
            <li key={s.title} className="flex flex-col">
              {i > 0 && <span aria-hidden="true" className="ms-8 h-3 w-px bg-slate-300" />}
              <div
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4",
                  lead
                    ? "bg-white py-3 shadow-[0px_8px_20px_-8px_#121A2330]"
                    : "bg-white/50 py-2.5 opacity-70",
                )}
              >
                <span
                  className={cn(
                    "flex shrink-0 items-center justify-center rounded-lg",
                    lead
                      ? "h-8 w-8 bg-[#E3ECF9] text-blue-pulse"
                      : "h-6 w-6 bg-[#E9EEF5] text-slate-400",
                  )}
                >
                  {lead ? <Icon name="close" strokeWidth={1.8} /> : <SmallDot />}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={cn(
                      "block text-xs font-semibold",
                      lead ? "text-[#0F1B2D]" : "text-slate-500",
                    )}
                  >
                    <Trans>{s.title}</Trans>
                  </span>
                  {s.subtitle && (
                    <span className="mt-0.5 block text-[10px] leading-snug text-slate-400">
                      <Trans>{s.subtitle}</Trans>
                    </span>
                  )}
                </span>
                {s.tag && <span className="text-[10px] font-medium text-blue-pulse"><Trans>{s.tag}</Trans></span>}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** 2) Integrated expertise: a centered model with disciplines around it */
export function ExpertiseVisual() {
  return (
    <FocusStack
      items={[
        "Enterprise strategy",
        "Analytics & AI",
        "Integrated advisory model",
        "Risk & governance",
        "Cross-border growth",
      ]}
      icon={<Icon name="network" strokeWidth={1.8} />}
    />
  );
}

/** 3) Evidence-based recommendations: root-cause chart */
export function EvidenceVisual() {
  const { t: translateText } = useLanguage();

  const bars = [
    { label: "A", height: 38 },
    { label: "B", height: 52 },
    { label: "C", height: 100, highlight: true },
    { label: "D", height: 34 },
    { label: "E", height: 22 },
  ];

  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0px_8px_20px_-10px_#121A2330]">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold text-[#0F1B2D]"><Trans>Root-cause contribution</Trans></p>
        <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400"><Trans>
          Modeled
        </Trans></span>
      </div>
      <div
        className="mt-4 flex h-24 items-end gap-2"
        role="img"
        aria-label={translateText("Bar chart: cause C contributes most")}
      >
        {bars.map((b) => (
          <div key={b.label} className="flex h-full flex-1 flex-col justify-end">
            <div
              className="w-full rounded-t-md"
              style={{
                height: `${b.height}%`,
                background: b.highlight
                  ? "linear-gradient(180deg, #3393FF 0%, #0078FF 100%)"
                  : "#D7E4F7",
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-1.5 flex gap-2">
        {bars.map((b) => (
          <span key={b.label} className="flex-1 text-center text-[9px] text-slate-400">
            <Trans>{b.label}</Trans>
          </span>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-2 rounded-lg bg-[#EAF1FB] px-3 py-2 text-[10px] text-slate-600">
        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-blue-pulse" /><Trans>
        Primary driver isolated, not assumed.
      </Trans></p>
    </div>
  );
}

/** 4) Implementation-ready design: milestone timeline */
export function DeliveryVisual() {
  const milestones = [
    { title: "Operating model defined", subtitle: "Owners, decision rights, cadence", done: true },
    { title: "Success metrics baselined", subtitle: "Targets agreed with the executive team", done: true },
    { title: "Delivery oversight in place", subtitle: "Cadence in motion at each gate", done: false },
  ];

  return (
    <ol className="relative flex flex-col gap-3">
      <span aria-hidden="true" className="absolute bottom-6 start-2.75 top-6 w-px bg-[#C9D8EE]" />
      {milestones.map((m) => (
        <li key={m.title} className="relative flex items-center gap-3">
          <span
            className={cn(
              "z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
              m.done
                ? "bg-blue-pulse text-white"
                : "border border-[#C9D8EE] bg-white text-slate-300",
            )}
          >
            {m.done ? (
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            ) : (
              <SmallDot />
            )}
          </span>
          <div className="flex-1 rounded-2xl bg-white px-4 py-3 shadow-[0px_8px_20px_-10px_#121A2330]">
            <p className="text-xs font-semibold text-[#0F1B2D]"><Trans>{m.title}</Trans></p>
            <p className="mt-0.5 text-[10px] text-slate-400"><Trans>{m.subtitle}</Trans></p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** 5) Global capabilities, local relevance */
export function GlobalVisual() {
  return (
    <ChecklistCard
      title="Global practice, locally applied"
      icon={<Icon name="globe" strokeWidth={1.8} />}
      items={["Regulation", "Stakeholders", "Market norms"]}
    />
  );
}
