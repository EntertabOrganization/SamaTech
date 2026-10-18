import { InstagramIcon, LinkedInIcon, XIcon } from "@/Components/website/about/ShareComponents/Icons";
import type { Partner } from "./Data";
import Link from "next/link";

export default function PartnerSocials({ partner }: { partner: Partner }) {
  const items = [
    { label: `${partner.name} on LinkedIn`, href: partner.linkedin, Icon: LinkedInIcon },
    { label: `${partner.name} on X`, href: partner.x, Icon: XIcon },
    { label: `${partner.name} on Instagram`, href: partner.instagram, Icon: InstagramIcon },
  ];

  return (
    <ul className="mt-4 flex gap-3">
      {items.map(({ label, href, Icon }) => (
        <li key={label}>
          <Link
            href={href}
            aria-label={label}
            className="text-blue-pulse transition-colors hover:text-blue-sovereign"
          >
            <Icon width={18} height={18} strokeWidth={1.6} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
