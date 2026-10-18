import Link from "next/link";
import { notFound } from "next/navigation";
import { pillars } from "./Pillars";

interface PillarDetailProps {
  slug: string;
}

const sectionLabel =
  "text-[10px] font-semibold uppercase tracking-wider text-slate-400";

export default function PillarDetail({ slug }: PillarDetailProps) {
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) notFound();

  return (
    <section
      className="relative overflow-hidden bg-[#F8FAFD] px-4 pb-20 pt-6 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('/pattern.svg')", backgroundRepeat: "repeat" }}
    >
      {/* Light fade so the pattern stays behind the content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#F8FAFD]/60 via-[#F8FAFD]/30 to-[#F8FAFD]/60"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Pillar tabs */}
        <nav aria-label="Advisory pillars" className="flex justify-center overflow-x-auto pb-1">
          <ul className="inline-flex gap-1 rounded-full border border-ink-100 bg-white/70 p-1 backdrop-blur-[14px]">
            {pillars.map((p) => {
              const active = p.slug === pillar.slug;
              return (
                <li key={p.slug}>
                  <Link
                    href={`/services/${p.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`block whitespace-nowrap rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                      active
                        ? "bg-blue-pulse text-white"
                        : "text-slate-600 hover:bg-white hover:text-[#0F1B2D]"
                    }`}
                  >
                    {p.tabLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Title */}
        <header className="mt-14 border-b border-ink-100 pb-8">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-pulse">
            <span aria-hidden="true" className="h-px w-8 bg-blue-pulse" />
            Pillar {pillar.number}
          </p>
          <h1 className="mt-4 max-w-md text-3xl font-bold leading-tight tracking-tight text-[#0F1B2D] sm:text-4xl">
            {pillar.title}
          </h1>
        </header>

        {/* Challenge / How we help */}
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className={sectionLabel}>The challenge</h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-caption">
              {pillar.challenge}
            </p>
          </div>
          <div>
            <h2 className={sectionLabel}>How we help</h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-caption">
              {pillar.help}
            </p>
          </div>
        </div>

        {/* Capabilities + outcomes */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.7fr_1fr]">
          <div>
            <h2 className={sectionLabel}>Selected capabilities</h2>
            <ul className="mt-4 grid sm:grid-cols-2 sm:gap-x-8">
              {pillar.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-b border-ink-100 py-3 text-xs leading-snug text-slate-700"
                >
                  <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-pulse" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl bg-linear-to-b from-ink-900 to-[#1A2736] p-5 shadow-[0px_16px_40px_-20px_#121A2399]">
            <h2 className="text-[10px] font-semibold uppercase tracking-wider text-blue-pulse">
              Typical outcomes
            </h2>
            <ul className="mt-4">
              {pillar.outcomes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 border-t border-white/10 py-2.5 text-[10px] font-medium uppercase leading-snug tracking-wider text-slate-200 first:border-t-0"
                >
                  <span aria-hidden="true" className="mt-1.5 h-px w-2.5 shrink-0 bg-blue-pulse" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#0F1B2D] transition-colors hover:bg-slate-100"
            >
              Discuss this pillar
              <span aria-hidden="true">→</span>
            </Link>
          </aside>
        </div>

        {/* CTA banner */}
        <div
          className="mx-auto mt-20 flex max-w-4xl flex-col items-start justify-between gap-6 rounded-3xl p-8 text-white shadow-[0px_24px_50px_-24px_#0078FF99] sm:flex-row sm:items-center sm:p-10"
          style={{
            background:
              "linear-gradient(138.71deg, #3393FF 4.61%, #0078FF 56.57%, #005BC2 99.56%)",
          }}
        >
          <h2 className="max-w-xs text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Tell us the decision
            <br/>
             you are trying to make.
          </h2>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F1B2D] shadow-[0px_8px_20px_-8px_#00000040] transition-colors hover:bg-slate-100"
          >
            Schedule a Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
