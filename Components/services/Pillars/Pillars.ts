export interface Pillar {
  slug: string;
  number: string;
  /** Short label used in the top tab bar */
  tabLabel: string;
  title: string;
  challenge: string;
  help: string;
  capabilities: string[];
  outcomes: string[];
}

export const pillars: Pillar[] = [
  {
    slug: "enterprise-strategy-performance",
    number: "01",
    tabLabel: "Strategy & performance",
    title: "Enterprise Strategy & Performance",
    challenge:
      "Organizations often struggle to translate strategic ambition into measurable execution. Leadership teams face competing priorities, fragmented performance information, unclear accountability, and increasing pressure to deliver sustainable results.",
    help: "We help executive teams clarify strategic direction, define enterprise priorities, design operating models, and establish performance architectures that align organizational execution with long-term objectives. Our recommendations are grounded in quantitative analysis, governance discipline, and implementation feasibility.",
    capabilities: [
      "Enterprise and business-unit strategy",
      "Operating model design",
      "Strategic planning and prioritization",
      "Performance architecture",
      "KPI and OKR frameworks",
      "Executive dashboards",
      "Organizational and cost-structure analysis",
      "Transformation governance and executive oversight",
    ],
    outcomes: [
      "Clearer strategic priorities",
      "Stronger executive alignment",
      "Measurable accountability",
      "Better resource allocation",
      "More disciplined organizational performance",
    ],
  },
  {
    slug: "risk-governance-decision-intelligence",
    number: "02",
    tabLabel: "Risk & governance",
    title: "Risk, Governance & Decision Intelligence",
    challenge:
      "Leadership teams often make high-stakes decisions with fragmented data, unclear risk visibility, and governance that has not kept pace with the organization's complexity.",
    help: "We help leadership teams strengthen governance, improve risk visibility, and turn fragmented data into timely, decision-relevant insight through analytics and artificial intelligence.",
    capabilities: [
      "Enterprise risk and control frameworks",
      "Governance and compliance design",
      "Decision analytics and executive dashboards",
      "AI-enabled insight and reporting",
    ],
    outcomes: [
      "Clearer risk visibility",
      "Stronger governance",
      "Faster, better-informed decisions",
      "Greater executive confidence",
    ],
  },
  {
    slug: "digital-transformation-cross-border-growth",
    number: "03",
    tabLabel: "Digital & cross-border growth",
    title: "Digital Transformation & Cross-Border Growth",
    challenge:
      "Organizations expanding across borders or modernizing with technology often face unclear priorities, regulatory complexity, and execution risk.",
    help: "We help organizations design technology-enabled growth strategies and navigate U.S.-GCC market expansion with greater commercial, regulatory, and execution confidence.",
    capabilities: [
      "Digital transformation roadmaps",
      "U.S.-GCC market entry strategy",
      "Regulatory and commercial readiness",
      "Partner and stakeholder alignment",
    ],
    outcomes: [
      "Clearer growth priorities",
      "Faster, safer market entry",
      "Stronger partner alignment",
      "Technology tied to business outcomes",
    ],
  },
];