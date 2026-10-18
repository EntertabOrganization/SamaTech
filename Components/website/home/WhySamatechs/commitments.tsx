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
const DeliveryIcon = () => (
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
    <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7 8.5 4.8 4.8 0 0 0 7 18z" />
  </svg>
);

export const commitments: ShowcaseItem[] = [
  {
    id: "senior-led",
    title: "Senior-Led Advisory",
    description:
      "Every engagement is led directly by experienced partners who remain involved from problem diagnosis through execution alignment and delivery oversight.",
    icon: <Icon name="close" strokeWidth={1.8} />,
    visual: <TeamVisual />,
  },
  {
    id: "integrated",
    title: "Integrated Expertise",
    description:
      "Strategy, risk, technology, and cross-border perspectives work as one team, so recommendations hold up across the whole organization.",
    icon: <Icon name="network" strokeWidth={1.8} />,
    visual: <ExpertiseVisual />,
  },
  {
    id: "evidence",
    title: "Evidence-Based Recommendations",
    description:
      "Every recommendation is grounded in rigorous analysis and data, with the reasoning shown so leadership can challenge it and decide with confidence.",
    icon: <Icon name="search" strokeWidth={1.8} />,
    visual: <EvidenceVisual />,
  },
  {
    id: "implementation",
    title: "Implementation-Ready Design",
    description:
      "Solutions are designed with delivery in mind, with owners, milestones, and governance defined before the engagement closes.",
    icon: <DeliveryIcon />,
    visual: <DeliveryVisual />,
  },
  {
    id: "global",
    title: "Global Capabilities, Local Relevance.",
    description:
      "International experience is applied with a clear understanding of regional context, regulation, and stakeholders.",
    icon: <Icon name="globe" strokeWidth={1.8} />,
    visual: <GlobalVisual />,
  },
];
