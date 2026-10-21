import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import AnalyticBg from "@/public/figma/rigor-bg.png";
import type { ShowcaseItem } from "@/Components/website/home/shared/ShowcaseTabs";
import SectionHeader from "@/Components/website/home/shared/SectionHeader";
import Showcase from "@/Components/website/home/shared/Showcase";
import { FigmaIcon } from "@/Components/website/home/shared/primitives";
import { cn } from "@/Components/website/ui";
import DiagnoseIcon from "@/public/figma/how-diagnose.svg";
import ArchitectIcon from "@/public/figma/why-integrated.svg";
import DeliveryIcon from "@/public/figma/why-implementation.svg";
import ChevronIcon from "@/public/figma/chevron-down-20.svg";
import SearchIcon from "@/public/figma/how-search.svg";
import AccountabilityIcon from "@/public/figma/how-accountability.svg";
import CheckIcon from "@/public/figma/check-14.svg";
import PendingIcon from "@/public/figma/pending-14.svg";
import CorrectionIcon from "@/public/figma/how-correction.svg";
import GaugeIcon from "@/public/figma/rigor-gauge.svg";

/* ---------- Visuals ---------- */

const caption = "text-eyebrow font-bold uppercase leading-[19.8px] tracking-eyebrow text-ink-300";

/** 1) Diagnose: inputs narrowed to one problem */
function DiagnoseVisual() {
  const inputs = [
    "Structured assessment",
    "Stakeholder engagement",
    "Quantitative analysis",
    "Operational data",
  ];
  return (
    <div className="flex flex-col items-center gap-3.5">
      <p className={caption}><Trans>Inputs narrowed to one problem</Trans></p>
      <div className="grid w-full grid-cols-2 gap-2">
        {inputs.map((item) => (
          <span
            key={item}
            className="rounded-full bg-white/66 px-3.5 py-2.75 text-center text-[12.5px] font-semibold leading-[20.63px] text-ink-300"
          >
            <Trans>{item}</Trans>
          </span>
        ))}
      </div>
      <Image src={ChevronIcon} alt="" width={20} height={20} className="-scale-y-100" />
      <div className="flex w-[365px] max-w-full items-center gap-3.5 rounded-card bg-white px-5.5 py-4.5 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)]">
        <span className="flex size-9 items-center justify-center rounded-input bg-blue-mist text-blue-sovereign">
          <FigmaIcon src={SearchIcon} size={19} />
        </span>
        <span className="font-heading text-[15px] font-bold leading-[1.3] text-ink-900"><Trans>Root cause defined</Trans></span>
      </div>
    </div>
  );
}

/** 2) Architect: designed for execution */
function ArchitectVisual() {
  const blocks = [
    { title: "Operating model", subtitle: "Structure and decision rights" },
    { title: "Governance", subtitle: "Oversight cadence" },
    { title: "Performance framework", subtitle: "KPIs and OKRs" },
    { title: "Success metrics", subtitle: "Agreed with the executive team" },
  ];
  return (
    <div className="flex flex-col gap-3.5">
      <p className={caption}><Trans>Designed for execution</Trans></p>
      <div className="grid grid-cols-2 gap-2.5">
        {blocks.map((b) => (
          <div key={b.title} className="flex flex-col gap-1 rounded-input bg-white/72 px-4 pb-4 pt-3.75">
            <p className="font-heading text-[13px] font-bold leading-[1.65] text-ink-900"><Trans>{b.title}</Trans></p>
            <p className="text-[11.5px] font-medium leading-[1.65] text-ink-300"><Trans>{b.subtitle}</Trans></p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 rounded-input bg-white px-4.5 py-3.5 text-[13px] font-semibold leading-[21.45px] text-ink-900 drop-shadow-[0px_2px_4px_rgba(18,26,35,0.06)]">
        <span className="text-blue-sovereign">
          <FigmaIcon src={AccountabilityIcon} size={18} />
        </span>
        <Trans>Clear accountability at every level</Trans>
      </div>
    </div>
  );
}

/** 3) Advise through delivery: gate-based oversight */
function DeliveryVisual() {
  const gates = [
    { label: "Gate 1", done: true },
    { label: "Gate 2", done: true },
    { label: "Gate 3", done: false },
    { label: "Gate 4", done: false },
  ];
  return (
    <div className="flex flex-col gap-5">
      <p className={caption}><Trans>Oversight through delivery</Trans></p>

      <ol className="flex">
        {gates.map((g, i) => {
          const next = gates[i + 1];
          return (
            <li key={g.label} className="flex flex-1 flex-col items-center gap-2.25">
              <div className="flex w-full items-center">
                {/* track: blue between completed gates, grey up to the next pending one */}
                <span aria-hidden="true" className="h-0.5 flex-1" />
                <span
                  className={cn(
                    "flex size-7.5 items-center justify-center rounded-full",
                    g.done
                      ? "bg-blue-sovereign text-white drop-shadow-[0px_12px_16px_rgba(0,120,255,0.24)]"
                      : "bg-white text-blue-pulse drop-shadow-[0px_1px_1px_rgba(18,26,35,0.06)]",
                  )}
                >
                  <FigmaIcon src={g.done ? CheckIcon : PendingIcon} size={14} />
                </span>
                <span
                  aria-hidden="true"
                  className={cn("h-0.5 flex-1", next && (g.done ? "bg-blue-sovereign" : "bg-ink-200"))}
                />
              </div>
              <span className={cn("text-[11.5px] font-bold leading-[1.65]", g.done ? "text-ink-900" : "text-ink-300")}>
                <Trans>{g.label}</Trans>
              </span>
            </li>
          );
        })}
      </ol>

      <div className="flex items-center gap-3 rounded-card bg-white px-5 py-4 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)]">
        <span className="flex size-8.5 shrink-0 items-center justify-center rounded-input bg-blue-mist text-blue-sovereign">
          <FigmaIcon src={CorrectionIcon} size={18} />
        </span>
        <span>
          <span className="block font-heading text-body-small font-bold leading-[1.65] text-ink-900"><Trans>Course correction at Gate 3</Trans></span>
          <span className="block text-eyebrow font-medium leading-[1.65] text-ink-500"><Trans>Client team retains ownership</Trans></span>
        </span>
      </div>
    </div>
  );
}

/* ---------- Data ---------- */

const steps: ShowcaseItem[] = [
  {
    id: "diagnose",
    title: "Diagnose",
    description:
      "We begin by clarifying the real problem. Through structured assessment, stakeholder engagement, and quantitative analysis, we define root causes, surface strategic trade-offs, and align leadership around the decisions that matter most.",
    icon: <FigmaIcon src={DiagnoseIcon} size={21} />,
    visual: <DiagnoseVisual />,
  },
  {
    id: "architect",
    title: "Architect",
    description:
      "We design the operating model, governance, and performance framework that turn the chosen direction into something an organization can run.",
    icon: <FigmaIcon src={ArchitectIcon} size={21} />,
    visual: <ArchitectVisual />,
  },
  {
    id: "advise",
    title: "Advise Through Delivery",
    description:
      "We stay involved through delivery with gate-based oversight, so course corrections happen early and ownership stays clear.",
    icon: <FigmaIcon src={DeliveryIcon} size={21} />,
    visual: <DeliveryVisual />,
  },
];

/* ---------- Section ---------- */

export default function HowWeWork() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
      <div className="mx-auto flex max-w-310 flex-col gap-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:gap-16">
          <SectionHeader
            eyebrow="How we work"
            title={"Diagnose, architect,\nadvise through delivery"}
            className="flex-1"
          />
          <p className="flex-1 text-body font-medium leading-[1.65] text-ink-500">
            <Trans>
              Every engagement follows the same discipline, regardless of pillar.
              The sequence is what keeps recommendations executable.
            </Trans>
          </p>
        </div>

        <div className="lg:pt-8">
          <Showcase items={steps} label="How we work" variant="steps" />
        </div>

        {/* Analytical Rigor band */}
        <div className="relative grid gap-6 overflow-hidden rounded-card md:gap-x-0 border border-blue-haze bg-blue-mist p-8 text-white md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:min-h-[213.95px] lg:px-15 lg:py-10">
          <div aria-hidden="true" className="pointer-events-none absolute -left-px top-[-218.54px] h-[1350px] w-[1176px] max-w-none">
            <Image src={AnalyticBg} alt="" fill sizes="1176px" />
          </div>

          <div className="relative flex flex-col gap-2.75">
            <div className="h-[49px]">
              <Image src={GaugeIcon} alt="" width={42} height={43.75} className="-mt-px -scale-y-100" />
            </div>
            <h3 className="font-heading text-h3 font-bold leading-h3 tracking-[-0.01em]"><Trans>Analytical Rigor</Trans></h3>
          </div>
          <p className="relative text-body font-medium leading-[1.65]">
            <Trans>
              Our advisory work is grounded in quantitative discipline and
              evidence-based decision frameworks. Depending on engagement scope,
              we incorporate predictive analytics, machine learning–informed
              insights, Monte Carlo simulation, risk quantification, Lean Six
              Sigma diagnostics, and executive dashboard architecture to
              strengthen decision quality in complex, high-accountability
              environments.
            </Trans>
          </p>
        </div>
      </div>
    </section>
  );
}
