"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Icon, cn, type IconName } from "@/Components/ui";
import brandVector from "../../../public/images/Vector.png";


interface Pillar {
  title: string;
  description: string;
  focusAreas: string[];
  href: string;
  linkLabel: string;
  icon: IconName;
  defaultOpen?: boolean;
}

const pillars: Pillar[] = [
  {
    title: "Enterprise Strategy & Performance",
    description:
      "We help executive teams define strategic direction, translate priorities into measurable performance, and establish the operating models and governance structures required for disciplined execution.",
    focusAreas: [
      "Enterprise and business-unit strategy",
      "Operating model and transformation design",
      "Performance frameworks, KPIs, and OKRs",
      "Root-cause diagnostics and operational optimization",
      "Program governance and executive oversight",
    ],
    href: "/services/enterprise-strategy-performance",
    linkLabel: "Explore Enterprise Strategy & Performance",
    defaultOpen: true,
    icon: "target",
  },
  {
    title: "Risk, Governance & Decision Intelligence",
    description:
      "We help leadership teams strengthen governance, improve risk visibility, and transform fragmented data into timely, decision-relevant insight through analytics and artificial intelligence.",
    focusAreas: [
      "Enterprise risk and control frameworks",
      "Governance and compliance design",
      "Decision analytics and executive dashboards",
      "AI-enabled insight and reporting",
    ],
    href: "/services/risk-governance-decision-intelligence",
    linkLabel: "Explore Risk, Governance & Decision Intelligence",
    icon: "shield-check",
  },
  {
    title: "Digital Transformation & Cross-Border Growth",
    description:
      "We help organizations design technology-enabled growth strategies and navigate U.S.–GCC market expansion with greater commercial, regulatory, and execution confidence.",
    focusAreas: [
      "Digital transformation roadmaps",
      "U.S.–GCC market entry strategy",
      "Regulatory and commercial readiness",
      "Partner and stakeholder alignment",
    ],
    href: "/services/digital-transformation-cross-border-growth",
    linkLabel: "Explore Digital Transformation & Cross-Border Growth",
    icon: "line-chart",
  },
];

function PillarCard({ pillar }: { pillar: Pillar }) {
  const [open, setOpen] = useState<boolean>(pillar.defaultOpen ?? false);
  const panelId = useId();

  return (
    <article className="flex flex-col gap-6.5 rounded-3xl border bg-[#FFFFFF17] border-white/16 p-10 shadow-sm backdrop-blur-[14px]">
      <span className="flex h-11 w-11 items-center justify-center rounded-input bg-white/14 text-white">
        <Icon name={pillar.icon} size={22} strokeWidth={1.6} />
      </span>

      <h3 className="text-lg font-semibold font-heading leading-snug text-white">
        {pillar.title}
      </h3>
      <p className="mt-4 text-sm font-medium leading-relaxed font-body text-white">
        {pillar.description}
      </p>

      <div className="">
        <div className="border-t border-ink-100 pt-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="flex w-full items-center justify-between gap-3 py-3 text-left text-xs font-medium text-ink-100 transition-colors hover:text-white"
          >
            Selected areas of focus
            <Icon
              name="chevron-down"
              size={14}
              strokeWidth={2}
              className={cn(
                "shrink-0 transition-transform duration-200",
                open && "rotate-180",
              )}
            />
          </button>

          <div
            id={panelId}
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
          >
            <ul className="overflow-hidden">
              {pillar.focusAreas.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 pb-2.5 text-xs leading-snug text-slate-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-pulse"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href={pillar.href}
          className="group mt-2 flex items-start justify-between gap-3 border-t border-white/15 pt-4 text-xs font-medium text-blue-precision transition-colors hover:text-[#66ADFF]"
        >
          <span>{pillar.linkLabel}</span>
          <span
            aria-hidden="true"
            className="mt-0.5 transition-transform group-hover:translate-x-0.5"
          >
            {/* No chevron-right in the icon set: chevron-down rotated -90deg */}
            <Icon name="chevron-down" size={14} strokeWidth={2} className="-rotate-90" />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function AdvisoryPillars() {
  return (
    <section
      className="relative overflow-hidden bg-[#0A1521] px-4 py-20 sm:px-6 lg:px-8"
      style={{
        backgroundImage: [
          "radial-gradient(60% 55% at 58% 30%, #0078ff47 0%, rgba(0, 120, 255, 0) 70%)",
          "radial-gradient(40% 40% at 0% 0%, rgba(0, 91, 194, 0.22) 0%, rgba(0, 91, 194, 0) 70%)",
          "radial-gradient(40% 50% at 100% 100%, rgba(51, 147, 255, 0.12) 0%, rgba(51, 147, 255, 0) 70%)",
        ].join(", "),
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${brandVector.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px auto",
        }}
      />
      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-precision">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-blue-precision font-body"
              />
              Advisory Pillars
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl font-heading">
              Three Integrated
              <br />
              Advisory Pillars
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed font-medium font-body text-white lg:justify-self-end">
            We combine strategy, decision intelligence, technology, and
            cross-border expertise to help organizations navigate complexity
            from diagnosis through execution.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}

