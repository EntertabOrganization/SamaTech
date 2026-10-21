import type { StaticImageData } from "next/image";
import MissionIcon from "@/public/figma/mission-icon.svg";
import VisionIcon from "@/public/figma/vision-icon.svg";

export interface Statement {
  title: string;
  text: string;
  icon: StaticImageData;
  tone: "white" | "blue";
}

export const statements: Statement[] = [
  {
    title: "Mission",
    text: "To help organizations define their most critical challenges, design rigorous, data-informed strategies, and guide leadership through disciplined execution to achieve sustainable and scalable impact.",
    icon: MissionIcon,
    tone: "white",
  },
  {
    title: "Vision",
    text: "To be the trusted strategic advisory partner for organizations operating in complex, high-stakes, and cross-border environments–known for clarity of thought, quantitative rigor, and executive-level impact.",
    icon: VisionIcon,
    tone: "blue",
  },
];
