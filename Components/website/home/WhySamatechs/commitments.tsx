import { Icon } from "@/Components/website/ui";
import {
  DeliveryVisual,
  EvidenceVisual,
  ExpertiseVisual,
  GlobalVisual,
  TeamVisual,
} from "./visuals";
import { ShowcaseItem } from "../shared/ShowcaseTabs";

// Cloud icon: not in the icon set yet, so it stays local.

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

export const commitments: ShowcaseItem[] = [
  {
    id: "senior-led",
    title: "Senior-Led Advisory",
    description:
      "Every engagement is led directly by experienced partners who remain involved from problem diagnosis through execution alignment and delivery oversight.",
    icon: <FaceScanIcon />,
    visual: <TeamVisual />,
  },
  {
    id: "integrated",
    title: "Integrated Expertise",
    description:
      "Strategy, risk, technology, and cross-border perspectives work as one team, so recommendations hold up across the whole organization.",
    icon: <OrgChartIcon />,
    visual: <ExpertiseVisual />,
  },
  {
    id: "evidence",
    title: "Evidence-Based Recommendations",
    description:
      "Every recommendation is grounded in rigorous analysis and data, with the reasoning shown so leadership can challenge it and decide with confidence.",
    icon: <SearchIcon/>,
    visual: <EvidenceVisual />,
  },
  {
    id: "implementation",
    title: "Implementation-Ready Design",
    description:
      "Solutions are designed with delivery in mind, with owners, milestones, and governance defined before the engagement closes.",
    icon: <GaugeIcon />,
    visual: <DeliveryVisual />,
  },
  {
    id: "global",
    title: "Global Capabilities, Local Relevance.",
    description:
      "International experience is applied with a clear understanding of regional context, regulation, and stakeholders.",
    icon: <GlobeIcon />,
    visual: <GlobalVisual />,
  },
];
