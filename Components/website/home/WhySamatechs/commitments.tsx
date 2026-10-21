import { FigmaIcon } from "../shared/primitives";
import SeniorIcon from "@/public/figma/why-senior.svg";
import IntegratedIcon from "@/public/figma/why-integrated.svg";
import EvidenceIcon from "@/public/figma/why-evidence.svg";
import ImplementationIcon from "@/public/figma/why-implementation.svg";
import GlobalIcon from "@/public/figma/why-global.svg";
import {
  DeliveryVisual,
  EvidenceVisual,
  ExpertiseVisual,
  GlobalVisual,
  TeamVisual,
} from "./visuals";
import { ShowcaseItem } from "../shared/ShowcaseTabs";

export const commitments: ShowcaseItem[] = [
  {
    id: "senior-led",
    title: "Senior-Led Advisory",
    description:
      "Every engagement is led directly by experienced partners who remain involved from problem diagnosis through executive alignment and delivery oversight.",
    icon: <FigmaIcon src={SeniorIcon} size={21} />,
    visual: <TeamVisual />,
  },
  {
    id: "integrated",
    title: "Integrated Expertise",
    description:
      "Strategy, risk, technology, and cross-border perspectives work as one team, so recommendations hold up across the whole organization.",
    icon: <FigmaIcon src={IntegratedIcon} size={21} />,
    visual: <ExpertiseVisual />,
  },
  {
    id: "evidence",
    title: "Evidence-Based Recommendations",
    description:
      "Every recommendation is grounded in rigorous analysis and data, with the reasoning shown so leadership can challenge it and decide with confidence.",
    icon: <FigmaIcon src={EvidenceIcon} size={21} />,
    visual: <EvidenceVisual />,
  },
  {
    id: "implementation",
    title: "Implementation-Ready Design",
    description:
      "Solutions are designed with delivery in mind, with owners, milestones, and governance defined before the engagement closes.",
    icon: <FigmaIcon src={ImplementationIcon} size={21} />,
    visual: <DeliveryVisual />,
  },
  {
    id: "global",
    title: "Global Capabilities. Local Relevance.",
    description:
      "International experience is applied with a clear understanding of regional context, regulation, and stakeholders.",
    icon: <FigmaIcon src={GlobalIcon} size={21} />,
    visual: <GlobalVisual />,
  },
];
