
import SectionHeader from "../shared/SectionHeader";
import Showcase from "../shared/Showcase";
import { commitments } from "./commitments";

export default function WhySamatechs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-50 2xl:px-85 lg:py-20">
      <div className="mx-auto px-8">
        <SectionHeader
          as="h1"
          eyebrow="Why SAMATECHS"
          title="Five commitments behind every engagement"
          className="max-w-130"
        />

        <Showcase
          items={commitments}
          label="Our commitments"
          variant="soft"
          tabsClassName="mt-12"
        />
      </div>
    </section>
  );
}
