import Link from "next/link";
import HeroVisual from "./HeroVisual";

const focusAreas: string[] = [
  "Strategy",
  "Decision Intelligence",
  "Cross-Border Growth",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F8FD] to-[#E4ECF7] px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
      {/* Soft blue glow behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-240px] h-[540px] w-[960px] max-w-[160vw] -translate-x-1/2 bg-[radial-gradient(closest-side,#BCD8FF_0%,rgba(188,216,255,0)_100%)]"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[#DCE4EE] bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-600 backdrop-blur-[14px]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="#0078FF" strokeWidth="2" />
            <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="#0078FF" strokeWidth="1.6" />
          </svg>
          Senior-led strategic advisory &amp; analytics
        </span>

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-[#0F1B2D] sm:text-5xl lg:text-6xl">
          Strategic Clarity.
          <span className="block text-[#005BC2]">Measurable Impact.</span>
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          SAMATECHS advises leadership teams on complex strategic, operational,
          risk, technology, and cross-border challenges—designing
          implementation-ready solutions that strengthen decision-making and
          deliver measurable results.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0078FF] px-6 py-2.5 text-sm font-medium text-white shadow-[0px_6px_16px_-6px_#0078FF99] transition-colors hover:bg-[#005BC2]"
          >
            Schedule a Consultation
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border border-[#DCE4EE] bg-white/70 px-6 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-white"
          >
            Explore Our Capabilities
          </Link>
        </div>

        {/* Focus areas */}
        <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
          {focusAreas.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#0078FF]" />
              {item}
            </li>
          ))}
        </ul>

        <HeroVisual />
      </div>
    </section>
  );
}
