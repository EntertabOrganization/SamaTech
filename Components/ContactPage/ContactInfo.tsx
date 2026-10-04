import type { ReactNode } from "react";
import SectionHeader  from "@/Components/home/shared/SectionHeader";
import MicroLabel  from "@/Components/ContactPage/MicroLabel";
import Image from "next/image";
import contactImg from '../../public/images/Group 2.png'
import Link from "next/link";

/* ---------- Local icons (not in the icon set yet) ---------- */

const svgProps = {
  width: 14,
  height: 14,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const PinIcon = () => (
  <svg {...svgProps}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
const MailIcon = () => (
  <svg {...svgProps}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const PhoneIcon = () => (
  <svg {...svgProps}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
const ClockIcon = () => (
  <svg {...svgProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

/* ---------- Data ---------- */

const details: Array<{ label: string; value: string; icon: ReactNode }> = [
  { label: "Address", value: "[Insert Address Here]", icon: <PinIcon /> },
  { label: "Email", value: "[Insert Contact Email Here]", icon: <MailIcon /> },
  { label: "Phone", value: "[Insert Phone Number Here]", icon: <PhoneIcon /> },
  { label: "Response time", value: "Within one business day", icon: <ClockIcon /> },
];

// The design shows five icons. These are the same four as the footer;
// add the fifth network here.
const socials: Array<{ label: string; href: string; icon: ReactNode }> = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg {...svgProps}>
        <path d="M4 4l16 16M20 4L4 20" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg {...svgProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5v.01" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@samatechs.com",
    icon: <MailIcon />,
  },
];

/* ---------- Component ---------- */

export default function ContactInfo() {
  return (
    <div>
      <Image src={contactImg} alt=''/>

      <SectionHeader
        as="h1"
        className="mt-8"
        eyebrow="Contact"
        title="Start a confidential conversation"
        intro="Whether you are evaluating a strategic initiative, entering a new market, strengthening governance, or exploring AI-enabled transformation, we welcome a confidential conversation about your objectives and challenges."
      />

      <dl className="mt-8 divide-y divide-ink-100 border-y border-ink-100">
        {details.map((item) => (
          <div key={item.label} className="flex items-center gap-3 py-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-blue-pulse">
              {item.icon}
            </span>
            <div>
              <dt className="text-[9px] font-medium uppercase tracking-wider text-ink-300">
                {item.label}
              </dt>
              <dd className="mt-0.5 text-xs font-medium text-ink-900">{item.value}</dd>
            </div>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <MicroLabel>Follow Samatechs</MicroLabel>
        <ul className="mt-3 flex gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-500 transition-colors hover:border-[#9CC3F5] hover:text-blue-pulse"
              >
                {s.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
