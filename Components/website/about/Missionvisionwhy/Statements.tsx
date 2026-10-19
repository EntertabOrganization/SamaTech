import type { ReactNode } from "react";
import Mission from '@/public/images/Mission.png'
import Vision from '@/public/images/Vision.png'
import Image from "next/image";

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
  <Image
    src={Mission}
    alt="Line chart"
    width={24}
    height={24}
  />
);

const VisionIcon = () => (
  <Image
    src={Vision}
    alt="Line chart"
    width={24}
    height={24}
  />
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
    text: "To be the trusted strategic advisory partner for organizations operating in complex, high-stakes, and cross-border environments, known for clarity of thought, quantitative rigor, and executive-level impact.",
    icon: <VisionIcon />,
    tone: "blue",
  },
];
