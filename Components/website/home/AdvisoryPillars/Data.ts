import type { StaticImageData } from "next/image";
import TargetIcon from "@/public/figma/pillar-target.svg";
import ShieldIcon from "@/public/figma/pillar-shield.svg";
import ChartIcon from "@/public/figma/pillar-chart.svg";

export interface Pillar {
  title: string;
  description: string;
  focusAreas: string[];
  href: string;
  linkLabel: string;
  icon: { src: StaticImageData; width: number; height: number };
  defaultOpen?: boolean;
}

export const pillars: Pillar[] = [
  {
    title: "Enterprise Strategy\n& Performance",
    description:
      "We help executive teams define strategic direction, translate priorities into measurable performance, and establish the operating models and governance structures required for disciplined execution.",
    focusAreas: [
      "Enterprise and business-unit strategy",
      "Operating model and transformation design",
      "Performance frameworks, KPIs, and OKRs",
      "Root-cause diagnostics and operational optimization",
      "Program governance and executive oversight",
    ],
    href: "/services",
    linkLabel: "Explore Enterprise Strategy & Performance",
    defaultOpen: true,
    icon: { src: TargetIcon, width: 32, height: 32 },
  },
  {
    title: "Risk, Governance &\nDecision Intelligence",
    description:
      "We help leadership teams strengthen governance, improve risk visibility, and transform fragmented data into timely, decision-relevant insight through analytics and artificial intelligence.",
    focusAreas: [
      "Enterprise risk and control frameworks",
      "Governance and compliance design",
      "Decision analytics and executive dashboards",
      "AI-enabled insight and reporting",
    ],
    href: "/services",
    linkLabel: "Explore Risk, Governance & Decision Intelligence",
    icon: { src: ShieldIcon, width: 32, height: 33.333 },
  },
  {
    title: "Digital Transformation\n& Cross-Border Growth",
    description:
      "We help organizations design technology-enabled growth strategies and navigate U.S.–GCC market expansion with greater commercial, regulatory, and execution confidence.",
    focusAreas: [
      "Digital transformation roadmaps",
      "U.S.–GCC market entry strategy",
      "Regulatory and commercial readiness",
      "Partner and stakeholder alignment",
    ],
    href: "/services",
    linkLabel: "Explore Digital Transformation & Cross-Border Growth",
    icon: { src: ChartIcon, width: 32, height: 27.077 },
  },
];