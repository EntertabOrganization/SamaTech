import { Trans } from "@/lib/i18n/LanguageProvider";
import type { ReactNode } from "react";
import { type ShowcaseItem } from "@/Components/website/home/shared/Showcase";
import { FigmaIcon } from "@/Components/website/home/shared/primitives";
import SeniorIcon from "@/public/figma/diff-senior.svg";
import IntegratedIcon from "@/public/figma/why-integrated.svg";
import EvidenceIcon from "@/public/figma/diff-evidence.svg";
import ImplementationIcon from "@/public/figma/why-implementation.svg";
import GlobalIcon from "@/public/figma/why-global.svg";

/** The white card shown for each differentiator (in the panel on desktop, stacked on mobile). */
function TextCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full items-center justify-center rounded-card bg-white px-5.5 py-4.5 drop-shadow-[0px_20px_24px_rgba(18,26,35,0.1)] lg:h-94">
      <p className="max-w-[383px] text-center text-body font-medium leading-[1.65] text-ink-500">
        <Trans>{children}</Trans>
      </p>
    </div>
  );
}

export const differentiators: ShowcaseItem[] = [
  {
    id: "senior-led",
    title: "Senior-Led Advisory",
    icon: <FigmaIcon src={SeniorIcon} size={21} />,
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
    icon: <FigmaIcon src={IntegratedIcon} size={21} />,
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
    icon: <FigmaIcon src={EvidenceIcon} size={21} />,
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
    icon: <FigmaIcon src={ImplementationIcon} size={21} />,
    visual: (
      <TextCard><Trans>
        We develop strategies, operating models, governance structures, and
        decision frameworks designed for execution.
      </Trans></TextCard>
    ),
  },
  {
    id: "global",
    title: "Global Capabilities. Local Relevance.",
    icon: <FigmaIcon src={GlobalIcon} size={21} />,
    visual: (
      <TextCard><Trans>
        We combine nearly two decades of direct U.S. market experience with
        deep knowledge of Saudi Arabia, bringing global expertise, technology,
        and business access to solutions aligned with the Kingdom’s
        commercial, regulatory, and operating realities.
      </Trans></TextCard>
    ),
  },
];
