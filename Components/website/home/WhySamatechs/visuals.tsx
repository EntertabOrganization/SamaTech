"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import type { StaticImageData } from "next/image";
import { cn } from "@/Components/website/ui";
import { FigmaIcon } from "../shared/primitives";
import ChecklistCard from "../shared/ChecklistCard";
import PartnerIcon from "@/public/figma/why-partner.svg";
import UserIcon from "@/public/figma/why-user.svg";
import StrategyIcon from "@/public/figma/why-strategy.svg";
import AnalyticsIcon from "@/public/figma/why-analytics.svg";
import ModelIcon from "@/public/figma/why-model.svg";
import RiskIcon from "@/public/figma/why-risk.svg";
import GrowthIcon from "@/public/figma/why-growth.svg";
import InsightIcon from "@/public/figma/why-insight.svg";
import CheckIcon from "@/public/figma/why-check.svg";
import PendingIcon from "@/public/figma/why-pending.svg";
import GlobeIcon from "@/public/figma/why-global.svg";

const caption = "text-eyebrow font-bold uppercase leading-[19.8px] tracking-eyebrow text-ink-300";

/** 1) Senior-led advisory: engagement team */
export function TeamVisual() {
  const support = [
    { title: "Senior advisor", box: "bg-white/70", text: "text-ink-500" },
    { title: "Analyst", box: "bg-white/45", text: "text-ink-300" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <p className={cn(caption, "pb-1.5")}><Trans>Engagement team</Trans></p>

      <div className="flex items-center gap-3.5 rounded-card bg-white px-5.5 py-5 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)]">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-input bg-blue-mist text-blue-sovereign">
          <FigmaIcon src={PartnerIcon} size={20} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-heading text-body font-bold leading-[26.4px] text-ink-900">
            <Trans>Managing partner</Trans>
          </span>
          <span className="block text-[13px] font-medium leading-[21.45px] text-ink-500">
            <Trans>Diagnosis through delivery oversight</Trans>
          </span>
        </span>
        <span className="text-[11px] font-bold uppercase leading-[18.15px] tracking-[0.14em] text-blue-pulse">
          <Trans>Lead</Trans>
        </span>
      </div>

      <span aria-hidden="true" className="ms-10.5 h-4.5 w-px bg-ink-200" />

      {support.map((member) => (
        <div
          key={member.title}
          className={cn("flex items-center gap-3.5 rounded-card px-5.5 py-4", member.box)}
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-input bg-ink-50 text-ink-300">
            <FigmaIcon src={UserIcon} size={16} />
          </span>
          <span className={cn("text-body-small font-semibold leading-[1.65]", member.text)}>
            <Trans>{member.title}</Trans>
          </span>
        </div>
      ))}
    </div>
  );
}

/** 2) Integrated expertise: the integrated model in the middle, disciplines fading out around it */
export function ExpertiseVisual() {
  const items: { title: string; icon: StaticImageData; tier: 0 | 1 | 2 }[] = [
    { title: "Enterprise strategy", icon: StrategyIcon, tier: 2 },
    { title: "Analytics & AI", icon: AnalyticsIcon, tier: 1 },
    { title: "Integrated advisory model", icon: ModelIcon, tier: 0 },
    { title: "Risk & governance", icon: RiskIcon, tier: 1 },
    { title: "Cross-border growth", icon: GrowthIcon, tier: 2 },
  ];
  const tiers = {
    0: "w-full bg-white drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)]",
    1: "w-[92%] bg-white/66 opacity-78 shadow-xs",
    2: "w-[84%] bg-white/38 opacity-50",
  };

  return (
    <ul className="flex flex-col items-center gap-2.5">
      {items.map((item) => {
        const center = item.tier === 0;
        return (
          <li
            key={item.title}
            className={cn("flex items-center gap-3.5 rounded-card px-5.5 py-4", tiers[item.tier])}
          >
            <span
              className={cn(
                "flex size-7.5 shrink-0 items-center justify-center rounded-tooltip",
                center ? "bg-blue-mist text-blue-sovereign" : "bg-ink-50 text-ink-300",
              )}
            >
              <FigmaIcon src={item.icon} size={16} />
            </span>
            <span
              className={cn(
                "text-[15px] leading-[1.65]",
                center ? "font-bold text-ink-900" : "font-semibold text-ink-300",
              )}
            >
              <Trans>{item.title}</Trans>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** 3) Evidence-based recommendations: root-cause chart */
export function EvidenceVisual() {
  const { t: translateText } = useLanguage();

  const bars = [
    { label: "A", height: 45.69 },
    { label: "B", height: 64.39 },
    { label: "C", height: null },
    { label: "D", height: 39.45 },
    { label: "E", height: 27 },
  ];

  return (
    <div className="flex flex-col gap-5.5 rounded-card bg-white p-7 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)]">
      <div className="flex items-center justify-between">
        <p className="font-heading text-[15px] font-bold leading-[1.65] text-ink-900">
          <Trans>Root-cause contribution</Trans>
        </p>
        <span className="text-[11px] font-bold uppercase leading-[18.15px] tracking-[0.14em] text-ink-300">
          <Trans>Modelled</Trans>
        </span>
      </div>
      <div
        className="flex h-33 items-end gap-3"
        role="img"
        aria-label={translateText("Bar chart: cause C contributes most")}
      >
        {bars.map((b) => (
          <div key={b.label} className="flex h-full flex-1 flex-col items-center gap-2.5">
            <div className="flex w-full flex-1 items-end">
              <div
                className={cn(
                  "w-full rounded-b-[4px] rounded-t-tooltip",
                  b.height === null ? "h-full bg-gradient-mark" : "bg-blue-haze",
                )}
                style={b.height === null ? undefined : { height: b.height }}
              />
            </div>
            <span
              className={cn(
                "text-[11px] font-bold leading-[18.15px]",
                b.height === null ? "text-ink-900" : "text-ink-300",
              )}
            >
              {b.label}
            </span>
          </div>
        ))}
      </div>
      <p className="flex items-center gap-3 rounded-input bg-blue-mist px-4 py-3.5 text-[13px] font-semibold leading-[21.45px] text-ink-900">
        <span className="text-blue-sovereign">
          <FigmaIcon src={InsightIcon} size={18} />
        </span>
        <Trans>Primary driver isolated, not assumed</Trans>
      </p>
    </div>
  );
}

/** 4) Implementation-ready design: milestone timeline */
export function DeliveryVisual() {
  const milestones = [
    { title: "Operating model defined", subtitle: "Owners, decision rights, cadence", done: true },
    { title: "Success metrics baselined", subtitle: "Targets agreed with the executive team", done: true },
    { title: "Delivery oversight in place", subtitle: "Course correction at each gate", done: false },
  ];

  return (
    <ol className="flex flex-col">
      {milestones.map((m, i) => (
        <li key={m.title} className="flex h-[93.38px] items-start gap-4.5">
          <div className="flex h-full w-8 shrink-0 flex-col items-center">
            <span
              className={cn(
                "flex size-8 items-center justify-center rounded-full",
                m.done
                  ? "bg-blue-sovereign text-white drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)]"
                  : "bg-white text-blue-pulse drop-shadow-[0px_1px_1px_rgba(18,26,35,0.06)]",
              )}
            >
              <FigmaIcon src={m.done ? CheckIcon : PendingIcon} size={15} />
            </span>
            {i < milestones.length - 1 && (
              <span aria-hidden="true" className="w-0.5 flex-1 bg-ink-200" />
            )}
          </div>
          <div className="flex h-full flex-1 flex-col pb-3">
            <div
              className={cn(
                "flex flex-1 flex-col gap-1 rounded-card px-5 pb-4 pt-3.75",
                m.done ? "bg-white drop-shadow-[0px_2px_4px_rgba(18,26,35,0.06)]" : "bg-white/60",
              )}
            >
              <p
                className={cn(
                  "font-heading text-[15px] font-bold leading-[1.65]",
                  m.done ? "text-ink-900" : "text-ink-500",
                )}
              >
                <Trans>{m.title}</Trans>
              </p>
              <p className="text-[12.5px] font-medium leading-[20.63px] text-ink-500">
                <Trans>{m.subtitle}</Trans>
              </p>
            </div>
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
      icon={<FigmaIcon src={GlobeIcon} size={20} />}
      items={["Regulation", "Stakeholders", "Market norms"]}
    />
  );
}
