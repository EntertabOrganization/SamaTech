import { Trans } from "@/lib/i18n/LanguageProvider";
import Image from "next/image";
import BrandFooter from "@/public/images/footer-vector.png";
import CheckIcon from "@/public/figma/check-circle-20.svg";

const experiences: string[] = [
  "Defining enterprise strategies and governance structures",
  "Designing analytics-driven performance frameworks",
  "Developing AI and data-science applications across multiple sectors",
  "Strengthening executive risk and decision-intelligence capabilities",
  "Supporting cross-border market entry and strategic partnerships",
];

export default function TrackRecord() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy px-4 py-16 sm:px-6 lg:px-8 lg:py-26">
      {/* Faint brand rays, right edge, partly cropped */}
      <Image
        src={BrandFooter}
        alt=""
        aria-hidden="true"
        sizes="420px"
        className="pointer-events-none absolute -right-26.5 top-[286.57px] h-[411.42px] w-105 max-w-none opacity-5"
      />

      <div className="relative mx-auto grid max-w-310 gap-10 sm:px-8 lg:min-h-[457px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-18">
        <div>
          <p className="flex items-center gap-3.5 text-eyebrow font-bold uppercase leading-[1.2] tracking-eyebrow text-blue-precision">
            <span aria-hidden="true" className="h-px w-10 bg-blue-precision" />
            <Trans>Track record</Trans>
          </p>
          <h2 className="mt-[17px] font-heading text-3xl font-bold leading-h1 tracking-[-0.01em] text-white sm:text-4xl lg:text-h1">
            <Trans>Experience Our Partners Bring</Trans>
          </h2>
          <p className="mt-5 text-body font-medium leading-[1.65] text-blue-haze">
            <Trans>The experience of our partners includes</Trans>:
          </p>
        </div>

        <ul className="flex flex-col self-start">
          {experiences.map((item) => (
            <li
              key={item}
              className="flex gap-4.5 border-b border-white/14 py-5.5 text-base font-medium leading-[1.45] text-white lg:text-lead"
            >
              <Image src={CheckIcon} alt="" width={20} height={20} className="mb-1.25 mt-px size-5 shrink-0 -scale-y-100" />
              <Trans>{item}</Trans>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
