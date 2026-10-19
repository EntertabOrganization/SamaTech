import type { ReactNode, SVGProps } from "react";
import linkdin from '../../../../public/images/Linkdin.png'
import twitter from '../../../../public/images/x.png'
import instagram from '../../../../public/images/instgram.png'
import Image from "next/image";

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

export const LinkedInIcon = () => (
  <Image
    src={linkdin}
    alt="Line chart"
    width={24}
    height={24}
  />
);

export const XIcon = (p: IconProps) => (
  <Image
    src={twitter}
    alt="Line chart"
    width={24}
    height={24}
  />
);

export const InstagramIcon = (p: IconProps) => (
  <Image
    src={instagram}
    alt="Line chart"
    width={24}
    height={24}
  />
);
