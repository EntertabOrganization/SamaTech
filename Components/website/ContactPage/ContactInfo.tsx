"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import type { ReactNode } from "react";
import SectionHeader  from "@/Components/website/home/shared/SectionHeader";
import MicroLabel  from "@/Components/website/ContactPage/MicroLabel";
import Image from "next/image";
import contactImg from '@/public/images/Group 2.png'
import Link from "next/link";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  { label: "Email", value: "info@samatechs.com", icon: <MailIcon /> },
  { label: "Phone", value: "+966 559447225", icon: <PhoneIcon /> },
  { label: "Response time", value: "Within one business day", icon: <ClockIcon /> },
];

// The design shows five icons. These are the same four as the footer;
// add the fifth network here.
const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/samatechs",
    icon: (
      <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4" />
    ),
  },
  {
    label: "X",
    href: "https://x.com/samatechs_?s=11&t=s6yTAHsZWSPlFLERGjMrMQ",
    icon: (
      <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/samatechs/",
    icon: (
      <FontAwesomeIcon icon={faInstagram} className="h-4 w-4" />
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61592819443552",
    icon: (
      <FontAwesomeIcon icon={faFacebook} className="h-4 w-4" />
    ),
  },
  {
    label: "Snapchat",
    href: "https://www.snapchat.com/add/samatechs",
    icon: (
      <FontAwesomeIcon icon={faSnapchat} className="h-4 w-4" />
    ),
  },
];

/* ---------- Component ---------- */

export default function ContactInfo() {
  const { t: translateText } = useLanguage();

  return (
    <div>
      <Image src={contactImg} alt="" loading="eager" className="max-h-[220px] max-w-full" />

      <SectionHeader
        as="h1"
        className="mt-8 max-w-95"
        eyebrow="Contact"
        title="Start a confidential conversation"
        intro="Whether you are evaluating a strategic initiative, entering a new market, strengthening governance, or exploring AI-enabled transformation, we welcome a confidential conversation about your objectives and challenges."
      />

      <dl className="mt-8 divide-y divide-ink-100 border-y border-ink-100">
        {details.map((item) => (
          <div key={item.label} className="flex items-center gap-3 py-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[12px] bg-white text-blue-sovereign">
              <Trans>{item.icon}</Trans>
            </span>
            <div>
              <dt className="text-[9px] font-medium uppercase tracking-wider text-ink-300">
                <Trans>{item.label}</Trans>
              </dt>
              <dd className="mt-0.5 text-xs font-medium text-ink-900"><Trans>{item.value}</Trans></dd>
            </div>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <MicroLabel><Trans>Follow SAMATECHS</Trans></MicroLabel>
        <ul className="mt-3 flex gap-2">
          {socials.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                aria-label={translateText(s.label)}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-500 transition-colors hover:border-[#9CC3F5] hover:text-blue-pulse"
              >
                <Trans>{s.icon}</Trans>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
