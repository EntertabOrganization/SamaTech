import { Trans } from "@/lib/i18n/LanguageProvider";
import type { ReactNode } from "react";
import { Icon } from "@/Components/website/ui";
import { CloudIcon } from "../ShareComponents/Icons";
import {type ShowcaseItem} from "@/Components/website/home/shared/Showcase";

/** The white card shown for each differentiator (in the panel on desktop, stacked on mobile). */
function TextCard({ children }: { children: ReactNode }) {
  return (
    <p className="mx-auto w-full rounded-card bg-white px-6 py-10 text-center text-xs leading-relaxed text-ink-500 shadow-[0px_12px_30px_-12px_#121A2338] lg:max-w-68">
      <Trans>{children}</Trans>
    </p>
  );
}

export const differentiators: ShowcaseItem[] = [
  {
    id: "senior-led",
    title: "Senior-Led Advisory",
    icon: <Icon name="close" strokeWidth={1.8} />,
    visual: (
      <TextCard><Trans>
        Every engagement is led directly by experienced partners who remain
        involved from problem diagnosis through executive alignment and
        delivery oversight.
      </Trans></TextCard>
    ),
  },
  {
    id: "integrated",
    title: "Integrated Expertise",
    icon: <Icon name="network" strokeWidth={1.8} />,
    visual: (
      <TextCard><Trans>
        We bring together enterprise strategy, analytics, artificial
        intelligence, risk, technology, and cross-border market expertise
        within a single advisory model.
      </Trans></TextCard>
    ),
  },
  {
    id: "evidence",
    title: "Evidence-Based Recommendations",
    icon: <Icon name="search" strokeWidth={1.8} />,
    visual: (
      <TextCard><Trans>
        Our recommendations combine structured problem-solving, quantitative
        analysis, executive judgment, and an understanding of organizational
        realities.
      </Trans></TextCard>
    ),
  },
  {
    id: "implementation",
    title: "Implementation-Ready Design",
    icon: <CloudIcon/>,
    visual: (
      <TextCard><Trans>
        We develop strategies, operating models, governance structures, and
        decision frameworks designed for execution.
      </Trans></TextCard>
    ),
  },
  {
    id: "global",
    title: "Global Capabilities, Local Relevance.",
    icon: <Icon name="globe" strokeWidth={1.8} />,
    visual: (
      <TextCard><Trans>
        We combine nearly two decades of direct U.S. market experience with
        deep knowledge of Saudi Arabia, bringing global expertise, technology,
        and business access to solutions aligned with the Kingdom&apos;s
        commercial, regulatory, and operating realities.
      </Trans></TextCard>
    ),
  },
];
