import type { IconName } from "@/Components/ui";

export interface Pillar {
  title: string;
  description: string;
  focusAreas: string[];
  href: string;
  linkLabel: string;
  icon: IconName;
  defaultOpen?: boolean;
}

export const pillars: Pillar[] = [
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