import type { ReactNode } from "react";

// Neither icon has an equivalent in the ui icon set yet, so both stay local.
const svgProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const MissionIcon = () => (
  <svg {...svgProps}>
    <path d="M12 3l8 4-8 4-8-4 8-4z" />
    <path d="M4 12l8 4 8-4" />
    <path d="M4 17l8 4 8-4" />
  </svg>
);

const VisionIcon = () => (
  <svg {...svgProps}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

export interface Statement {
  title: string;
  text: string;
  icon: ReactNode;
  tone: "white" | "blue";
}

export const statements: Statement[] = [
  {
    title: "Mission",
    text: "To help organizations define their most critical challenges, design rigorous, data-informed strategies, and guide leadership through disciplined execution to achieve sustainable and scalable impact.",
    icon: <MissionIcon />,
    tone: "white",
  },
  {
    title: "Vision",
    text: "To be the trusted strategic advisory partner for organizations operating in complex, high-stakes, and cross-border environments—known for clarity of thought, quantitative rigor, and executive-level impact.",
    icon: <VisionIcon />,
    tone: "blue",
  },
];
