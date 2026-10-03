import Link from "next/link";
import Logo from "../../public/horizontal-logo-white 1.svg";
import Image from "next/image";
import BrandFooter from "../../public/images/footer-vector.png"

interface FooterLink {
  label: string;
  href: string;
}

const siteLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const focusAreas: string[] = [
  "Executive Strategy & Performance",
  "Risk, Governance & Decision Intelligence",
  "Digital Transformation & Cross-Border Growth",
];

const contactDetails: string[] = [
  "[Insert Address Here]",
  "[Insert Contact Email Here]",
  "[Insert Phone Number Here]",
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

const iconProps = {
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

const socials: { label: string; href: string; icon: React.ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <path d="M4 4l16 16M20 4L4 20" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5v.01" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@samatechs.com",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
];

const columnTitle =
  "text-[11px] font-semibold uppercase tracking-wider text-[#3393FF]";
const columnLink =
  "text-sm text-slate-300 transition-colors hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#0E1823] to-[#1A2736] text-slate-300">
      {/* Faint brand rays, bottom-left */}
      <div
  aria-hidden="true"
  className="pointer-events-none absolute -bottom-40 -left-25 h-105 w-110 opacity-5"
>
  <Image
    src={BrandFooter}
    alt=""
    fill
    priority
    quality={100}
    className="object-contain object-bottom-left"
  />
</div>

      <div className="relative mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1.3fr] lg:gap-12">
          {/* Brand */}
          <div>
            <Image
              src={Logo}
              alt="Samatechs logo"
              width={200}
              height={40}
            />
            <p className="mt-4 max-w-68 text-sm leading-relaxed text-slate-400">
              A Saudi-led strategic advisory and analytics firm. Partner-led,
              evidence-based, built for execution.
            </p>
            <ul className="mt-5 flex gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-white/15 text-slate-300 transition-colors hover:border-white/40 hover:text-white"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <nav aria-label="Site">
            <h3 className={columnTitle}>Site</h3>
            <ul className="mt-4 space-y-3">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={columnLink}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Focus */}
          <div>
            <h3 className={columnTitle}>Focus</h3>
            <ul className="mt-4 space-y-3">
              {focusAreas.map((item) => (
                <li key={item} className="max-w-[14rem] text-sm leading-snug text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={columnTitle}>Get in touch</h3>
            <ul className="mt-4 space-y-3">
              {contactDetails.map((item) => (
                <li key={item} className="text-sm text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Samatechs. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
