
import SectionHeader from "../shared/SectionHeader";
import Showcase from "../shared/Showcase";
import { commitments } from "./commitments";

export default function WhySamatechs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          as="h1"
          eyebrow="Why SAMATECHS"
          title="Five commitments behind every engagement"
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
