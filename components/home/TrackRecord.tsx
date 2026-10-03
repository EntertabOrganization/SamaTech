// import { Icon } from "@/components/ui";

import Image from "next/image";
import { Icon } from "../ui";
import BrandFooter from "../../public/images/footer-vector.png"

const experiences: string[] = [
  "Defining enterprise strategies and governance structures",
  "Designing analytics-driven performance frameworks",
  "Developing AI and data-science applications across multiple sectors",
  "Strengthening executive risk and decision-intelligence capabilities",
  "Supporting cross-border market entry and strategic partnerships",
];

export default function TrackRecord() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#0E1823] to-[#1A2736] px-4 py-20 sm:px-6 lg:px-75">
      {/* Faint brand rays, bottom-right, partly cropped */}
       <div
  aria-hidden="true"
  className="pointer-events-none absolute -right-20 -bottom-30 h-105 w-110 opacity-5"
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

      <div className="relative mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-precision">
            <span aria-hidden="true" className="h-px w-8 bg-blue-precision" />
            Track record
          </p>
          <h2 className="mt-4 max-w-xs text-h1 font-heading font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Experience Our Partners Bring
          </h2>
          <p className="mt-4 text-body font-medium text-blue-haze">
            The experience of our partners includes
          </p>
        </div>

        <ul className="flex flex-col">
          {experiences.map((item, i) => (
            <li
              key={item}
              className={`flex gap-3 py-4 text-sm leading-snug text-slate-200 ${
                i === 0 ? "pt-0" : "border-t border-white/10"
              }`}
            >
              <Icon name="check-circle" className="mt-0.5 shrink-0 text-blue-precision" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
