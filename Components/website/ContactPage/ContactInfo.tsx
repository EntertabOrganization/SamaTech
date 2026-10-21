"use client";

import { Trans, useLanguage } from "@/lib/i18n/LanguageProvider";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import SectionHeader from "@/Components/website/home/shared/SectionHeader";
import ContactImage from "@/public/figma/faq-image.png";
import MailIcon from "@/public/figma/contact-mail.svg";
import PhoneIcon from "@/public/figma/contact-phone.svg";
import ClockIcon from "@/public/figma/contact-clock.svg";
import LinkedinIcon from "@/public/figma/contact-linkedin.svg";
import XIcon from "@/public/figma/contact-x.svg";
import InstagramIcon from "@/public/figma/contact-instagram.svg";
import FacebookIcon from "@/public/figma/contact-facebook.svg";
import SnapchatIcon from "@/public/figma/contact-snapchat.svg";

const IMAGE_OVERLAY =
  "linear-gradient(163.36deg, rgba(18, 26, 35, 0.9) 0%, rgba(18, 26, 35, 0.78) 46%, rgba(18, 26, 35, 0.95) 100%)";

const caption = "text-[13px] font-bold uppercase leading-[21.45px] tracking-[0.14em] text-ink-300";

/* ---------- Data ---------- */

/** `ltr`: email and phone keep Latin digits and left-to-right order in Arabic too. */
const details: Array<{ label: string; value: string; icon: StaticImageData; ltr?: boolean }> = [
  { label: "Email", value: "info@samatechs.com", icon: MailIcon, ltr: true },
  { label: "Phone", value: "+966 559447225", icon: PhoneIcon, ltr: true },
  { label: "Response time", value: "Within one business day", icon: ClockIcon },
];

const socials: { label: string; href: string; icon: StaticImageData }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/samatechs", icon: LinkedinIcon },
  { label: "X", href: "https://x.com/samatechs_?s=11&t=s6yTAHsZWSPlFLERGjMrMQ", icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com/samatechs/", icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592819443552", icon: FacebookIcon },
  { label: "Snapchat", href: "https://www.snapchat.com/add/samatechs", icon: SnapchatIcon },
];

/* ---------- Component ---------- */

export default function ContactInfo() {
  const { t: translateText } = useLanguage();

  return (
    <div className="flex flex-col gap-16.25">
      <div className="relative aspect-[611/220.23] w-full overflow-hidden rounded-3xl">
        <Image
          src={ContactImage}
          alt=""
          fill
          loading="eager"
          sizes="(min-width: 1024px) 611px, 100vw"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 opacity-50" style={{ background: IMAGE_OVERLAY }} />
      </div>

      <div className="flex flex-col">
        <SectionHeader
          as="h1"
          className="max-w-[625px] [&>h1]:mt-5.5 [&>h1]:tracking-[-0.02em] [&>p:last-child]:mt-5.5 [&>p:last-child]:text-ink-500"
          eyebrow="Contact"
          title={"Start a confidential\nconversation"}
          intro="Whether you are evaluating a strategic initiative, entering a new market, strengthening governance, or exploring AI-enabled transformation, we welcome a confidential conversation about your objectives and challenges."
        />

        <dl className="mt-9 flex flex-col gap-0.5 border-t border-ink-100 pt-6.5">
          {details.map((item) => (
            <div key={item.label} className="flex items-center gap-4 border-b border-ink-100 py-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-input border border-ink-100 bg-white">
                <Image src={item.icon} alt="" width={19} height={19} className="-scale-y-100" />
              </span>
              <div>
                <dt className={caption}>
                  <Trans>{item.label}</Trans>
                </dt>
                <dd className="text-body font-semibold leading-[1.65] text-ink-900">
                  {item.ltr ? <bdi dir="ltr" lang="en" translate="no">{item.value}</bdi> : <Trans>{item.value}</Trans>}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-8.25 flex flex-col gap-3.5">
          <p className={caption}><Trans>Follow SAMATECHS</Trans></p>
          <ul className="flex flex-wrap gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  aria-label={translateText(s.label)}
                  className="flex size-11 items-center justify-center rounded-full border border-ink-200 bg-white transition-colors hover:border-blue-pulse"
                >
                  <Image src={s.icon} alt="" width={19} height={19} className="-scale-y-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
