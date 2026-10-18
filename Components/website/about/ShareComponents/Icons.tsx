import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Same defaults as the ui icon set: 24x24 grid, color from `currentColor`. */
function Svg({ children, ...props }: IconProps & { children: ReactNode }) {
  return (
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
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Not in the ui icon set yet. Used by "Implementation-Ready Design". */
export const CloudIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 18h10a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 7 8.5 4.8 4.8 0 0 0 7 18z" />
  </Svg>
);

export const LinkedInIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" />
  </Svg>
);

export const XIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 4l16 16M20 4L4 20" />
  </Svg>
);

export const InstagramIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5v.01" />
  </Svg>
);
