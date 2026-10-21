import type { ShowcaseItem } from "@/Components/website/home/shared/ShowcaseTabs";
import { FigmaIcon } from "../shared/primitives";
import ExecutiveIcon from "@/public/figma/serve-executive.svg";
import PublicIcon from "@/public/figma/serve-public.svg";
import GrowthIcon from "@/public/figma/serve-growth.svg";
import { ExecutiveDiagram, GrowthDiagram, PublicDiagram } from "./diagrams";

export const audiences: ShowcaseItem[] = [
  {
    id: "executive",
    title: "Executive and Governance Leaders",
    description:
      "Boards, CEOs, executive leadership teams, strategy offices, risk leaders, and transformation offices.",
    icon: <FigmaIcon src={ExecutiveIcon} size={21} />,
    visual: <ExecutiveDiagram />,
  },
  {
    id: "public",
    title: "Public and Institutional Organizations",
    description:
      "Government entities, regulators, public institutions, and mission-driven organizations delivering complex programs.",
    icon: <FigmaIcon src={PublicIcon} size={21} />,
    visual: <PublicDiagram />,
  },
  {
    id: "growth",
    title: "Growth and Innovation Organizations",
    description:
      "Scaling companies, investors, and innovation teams expanding into new markets or building new capabilities.",
    icon: <FigmaIcon src={GrowthIcon} size={21} />,
    visual: <GrowthDiagram />,
  },
];
