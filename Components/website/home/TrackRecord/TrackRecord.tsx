import { Trans } from "@/lib/i18n/LanguageProvider";
// import { Icon } from "@/components/ui";

import Image from "next/image";
import { Icon } from "../../ui";
import BrandFooter from "@/public/images/footer-vector.png"

const experiences: string[] = [
  "Defining enterprise strategies and governance structures",
  "Designing analytics-driven performance frameworks",
  "Developing AI and data-science applications across multiple sectors",
  "Strengthening executive risk and decision-intelligence capabilities",
  "Supporting cross-border market entry and strategic partnerships",
];

export default function TrackRecord() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#0E1823] to-[#1A2736] px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
      {/* Faint brand rays, bottom-right, partly cropped */}
       <div
  aria-hidden="true"
  className="pointer-events-none absolute -right-20 -bottom-30 h-105 w-110 opacity-5"
>
  <Image
    src={BrandFooter}
    alt=""
    fill
    loading="eager"
    sizes="440px"
    quality={100}
    className="object-contain object-bottom-left"
  />
</div>

      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-precision">
            <span aria-hidden="true" className="h-px w-8 bg-blue-precision" /><Trans>
            Track record
          </Trans></p>
          <h2 className="mt-4 max-w-xs text-h1 font-heading font-bold leading-tight tracking-tight text-white sm:text-4xl"><Trans>
            Experience Our Partners Bring
          </Trans></h2>
          <p className="mt-4 text-body font-medium text-blue-haze"><Trans>
            The experience of our partners includes
          </Trans></p>
        </div>

        <ul className="flex flex-col max-w-110">
          {experiences.map((item, i) => (
            <li
              key={item}
              className={`flex gap-3 py-4 text-sm leading-snug text-slate-200 ${
                i === 0 ? "pt-0" : "border-t border-white/10"
              }`}
            >
              <Icon name="check-circle" className="mt-0.5 shrink-0 text-blue-precision" />
              <Trans>{item}</Trans>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
