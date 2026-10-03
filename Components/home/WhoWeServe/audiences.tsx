import { Icon } from "@/Components/ui";
import type { ShowcaseItem } from "@/Components/home/shared/ShowcaseTabs";
import { ExecutiveDiagram, GrowthDiagram, PublicDiagram } from "./diagrams";

// Not in the icon set yet (no "building"/"columns" icon), so it stays local.
const InstitutionIcon = () => (
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
    <path d="M3 10l9-6 9 6" />
    <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8" />
    <path d="M3 21h18" />
  </svg>
);

export const audiences: ShowcaseItem[] = [
  {
    id: "executive",
    title: "Executive and Governance Leaders",
    description:
      "Boards, CEOs, executive leadership teams, strategy offices, risk leaders, and transformation offices.",
    icon: <Icon name="users" strokeWidth={1.8} />,
    visual: <ExecutiveDiagram />,
  },
  {
    id: "public",
    title: "Public and Institutional Organizations",
    description:
      "Government entities, regulators, public institutions, and mission-driven organizations delivering complex programs.",
    icon: <InstitutionIcon />,
    visual: <PublicDiagram />,
  },
  {
    id: "growth",
    title: "Growth and Innovation Organizations",
    description:
      "Scaling companies, investors, and innovation teams expanding into new markets or building new capabilities.",
    icon: <Icon name="trending-up" strokeWidth={1.8} />,
    visual: <GrowthDiagram />,
  },
];
