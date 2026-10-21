import { Trans } from "@/lib/i18n/LanguageProvider";
import type { ShowcaseItem } from "@/Components/website/home/shared/ShowcaseTabs";
import SectionHeader from "@/Components/website/home/shared/SectionHeader";
import Showcase from "@/Components/website/home/shared/Showcase";
import { FigmaIcon } from "@/Components/website/home/shared/primitives";
import { cn } from "@/Components/website/ui";
import StrategyIcon from "@/public/figma/cap-strategy.svg";
import IntelligenceIcon from "@/public/figma/cap-intelligence.svg";
import TechnologyIcon from "@/public/figma/cap-technology.svg";
import GrowthIcon from "@/public/figma/cap-growth.svg";
import GrowthIconSmall from "@/public/figma/cap-growth-19.svg";
import DecisionSupportIcon from "@/public/figma/cap-decision-support.svg";

/* ---------- Visuals (one per capability) ---------- */

const caption = "text-eyebrow font-bold uppercase leading-[19.8px] tracking-eyebrow text-ink-300";
const columnCaption = "pb-4 text-[11px] font-bold uppercase leading-[14.3px] tracking-[0.14em] text-ink-300";

/** 1) Strategy: strategy board */
function StrategyVisual() {
  const columns = [
    { heading: "Direction", primary: "Enterprise direction", secondary: "Portfolio choices" },
    { heading: "Performance", primary: "KPI architecture", secondary: "Accountability" },
    { heading: "Operating model", primary: "Structure", secondary: "Decision rights" },
  ];
  return (
    <div className="flex flex-col gap-4">
      <p className={caption}><Trans>Strategy board</Trans></p>
      <div className="grid grid-cols-3 gap-3">
        {columns.map((c) => (
          <div key={c.heading} className="flex flex-col gap-2">
            <p className={columnCaption}><Trans>{c.heading}</Trans></p>
            <div className="rounded-tooltip bg-white px-3.25 py-2.75 text-[12.5px] font-bold leading-[20.63px] text-ink-900 drop-shadow-[0px_2px_4px_rgba(18,26,35,0.06)]">
              <Trans>{c.primary}</Trans>
            </div>
            <div className="rounded-tooltip bg-white/60 px-3.25 py-2.75 text-[12.5px] font-semibold leading-[20.63px] text-ink-300">
              <Trans>{c.secondary}</Trans>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** 2) Decision intelligence: executive dashboard */
function IntelligenceVisual() {
  const bars = [
    { label: "Q1", height: 35.94 },
    { label: "Q2", height: 52.11 },
    { label: "Q3", height: null },
    { label: "Q4", height: 64.69 },
  ];
  return (
    <div className="flex flex-col gap-4.5 rounded-card bg-white p-7 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)]">
      <div className="flex items-center justify-between">
        <p className="font-heading text-[15px] font-bold leading-[1.65] text-ink-900"><Trans>Executive dashboard</Trans></p>
        <span className="text-[11px] font-bold uppercase leading-[18.15px] tracking-[0.14em] text-ink-300"><Trans>Live</Trans></span>
      </div>
      <span id="executive-dashboard-chart" className="sr-only"><Trans>Bar chart: Q3 is the highest quarter</Trans></span>
      <div className="flex h-29.5 items-end gap-3.5" role="img" aria-labelledby="executive-dashboard-chart">
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
      <p className="flex items-center gap-3 rounded-input bg-blue-mist px-4 py-3.25 text-[13px] font-semibold leading-[21.45px] text-ink-900">
        <span className="text-blue-sovereign">
          <FigmaIcon src={DecisionSupportIcon} size={18} />
        </span>
        <Trans>Executive decision support</Trans>
      </p>
    </div>
  );
}

/** 3) Technology: AI-enabled capabilities in the middle, the rest fading out around it */
function TechnologyVisual() {
  const items: { label: string; tier: 0 | 1 | 2 }[] = [
    { label: "Digital strategy", tier: 2 },
    { label: "Automation", tier: 1 },
    { label: "AI-enabled capabilities", tier: 0 },
    { label: "Product design", tier: 1 },
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
          <li key={item.label} className={cn("flex items-center gap-3.5 rounded-card px-5.5 py-4", tiers[item.tier])}>
            <span
              className={cn(
                "flex size-7.5 shrink-0 items-center justify-center rounded-tooltip",
                center ? "bg-blue-mist" : "bg-ink-50",
              )}
            >
              <span className={cn("size-2 rounded-full", center ? "bg-blue-sovereign" : "bg-ink-200")} />
            </span>
            <span className={cn("text-[15px] leading-[1.65]", center ? "font-bold text-ink-900" : "font-semibold text-ink-300")}>
              <Trans>{item.label}</Trans>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** 4) Growth: cross-border expansion */
function GrowthVisual() {
  const branches = ["Partnerships", "Localization", "Market entry"];
  return (
    <div className="flex flex-col items-center gap-4.5">
      <div className="flex items-center gap-3.5 rounded-card bg-white px-6.5 py-4.5 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)]">
        <span className="flex size-9 items-center justify-center rounded-input bg-blue-mist text-blue-sovereign">
          <FigmaIcon src={GrowthIconSmall} size={19} />
        </span>
        <span className="font-heading text-body font-bold leading-[26.4px] text-ink-900">
          <Trans>Cross-border expansion</Trans>
        </span>
      </div>
      <span aria-hidden="true" className="h-5.5 w-0.5 rounded-[2px] bg-gradient-mark" />
      <div className="grid w-full grid-cols-3 gap-2.5">
        {branches.map((b) => (
          <div
            key={b}
            className="rounded-input bg-white/66 px-3 py-4 text-center text-[12.5px] font-semibold leading-[20.63px] text-ink-500 shadow-xs"
          >
            <Trans>{b}</Trans>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Data ---------- */

const capabilities: ShowcaseItem[] = [
  {
    id: "strategy",
    title: "Strategy",
    description:
      "Enterprise direction, performance, operating models, and transformation.",
    icon: <FigmaIcon src={StrategyIcon} size={20} />,
    visual: <StrategyVisual />,
  },
  {
    id: "decision-intelligence",
    title: "Decision Intelligence",
    description:
      "Analytics and insight that turn fragmented data into timely executive decisions.",
    icon: <FigmaIcon src={IntelligenceIcon} size={20} />,
    visual: <IntelligenceVisual />,
  },
  {
    id: "technology",
    title: "Technology",
    description:
      "Digital strategy, automation, and AI-enabled capabilities built around business outcomes.",
    icon: <FigmaIcon src={TechnologyIcon} size={20} />,
    visual: <TechnologyVisual />,
  },
  {
    id: "growth",
    title: "Growth",
    description:
      "Cross-border expansion, partnerships, and market entry supported end to end.",
    icon: <FigmaIcon src={GrowthIcon} size={20} />,
    visual: <GrowthVisual />,
  },
];

/* ---------- Section ---------- */

export default function ServicesCapabilities() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-mist px-4 sm:px-6 lg:px-8">
      {/* Figma "Gradient": brand glow centred on the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(0,120,255,0.28)_0%,rgba(0,120,255,0)_70%)]"
      />

      <div className="relative mx-auto flex max-w-310 flex-col pb-18 pt-16 sm:px-8 lg:pt-22">
        <SectionHeader
          as="h1"
          size="lg"
          eyebrow="Services & capabilities"
          title={<><Trans>An Integrated</Trans><br /><Trans>Advisory Model</Trans></>}
        />
        <p className="mt-5.5 max-w-[697px] text-base font-medium leading-[1.55] text-ink-500 lg:text-lead">
          <Trans>
            Our three client-facing advisory pillars draw on four cross-cutting
            areas of expertise, depending on the client&apos;s needs:
          </Trans>
        </p>

        <div className="mt-5.5 lg:pt-7.5">
          <Showcase
            items={capabilities}
            label="Cross-cutting areas of expertise"
            variant="capabilities"
          />
        </div>
      </div>
    </section>
  );
}
