import PartnerCard from "./Partnercard";
import { disclaimer, partners } from "./Data";
import PatternBackground from "@/Components/home/shared/PatternBackground";
import SectionHeader from "@/Components/home/shared/SectionHeader";
import CtaBanner from "../ShareComponents/Ctabanner";

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFD] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <PatternBackground src="/pattern.svg" size="auto" opacityClassName="opacity-100" />

      <div className="relative mx-auto max-w-5xl">
        <header className="border-b border-ink-100 pb-6">
          <SectionHeader
            eyebrow="Our founders"
            title="Three managing partners, one advisory model"
          />
        </header>
        <div className="divide-y divide-ink-100">
          {partners.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
        </div>

        <p className="max-w-sm border-t border-ink-100 pt-6 text-[9px] leading-relaxed text-slate-400">
          {disclaimer}
        </p>

        <CtaBanner
          className="mt-16"
          title="Every engagement is led by a partner. Start there."
          label="Start a Confidential Conversation"
          href="/contact"
        />
      </div>
    </section>
  );
}
