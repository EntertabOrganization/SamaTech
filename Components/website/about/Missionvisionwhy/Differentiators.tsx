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

const FaceScanIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 8V5a2 2 0 0 1 2-2h3" />
    <path d="M16 3h3a2 2 0 0 1 2 2v3" />
    <path d="M21 16v3a2 2 0 0 1-2 2h-3" />
    <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
    <circle cx="12" cy="10" r="2.5" />
    <path d="M7.5 17c0-2.2 2-3.5 4.5-3.5s4.5 1.3 4.5 3.5" />
  </svg>
);
const OrgChartIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="9" width="6" height="6" rx="1.2" />
    <rect x="15" y="3" width="6" height="6" rx="1.2" />
    <rect x="15" y="15" width="6" height="6" rx="1.2" />
    <path d="M8 12h3.5" />
    <path d="M11.5 6v12" />
    <path d="M11.5 6H15" />
    <path d="M11.5 18H15" />
  </svg>
);
const SearchIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="M20.5 20.5L16 16" />
  </svg>
);
const GaugeIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 18a9 9 0 1 1 18 0" />
    <path d="M12 18l4.5-5.5" />
    <path d="M4 18h2" />
    <path d="M18 18h2" />
    <path d="M12 7.5v1.5" />
  </svg>
);
const GlobeIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3z" />
  </svg>
);

export const differentiators: ShowcaseItem[] = [
  {
    id: "senior-led",
    title: "Senior-Led Advisory",
    icon: <FaceScanIcon />,
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
    icon: <OrgChartIcon/>,
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
    icon: <SearchIcon />,
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
    icon: <GaugeIcon/>,
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
    icon: <GlobeIcon />,
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
