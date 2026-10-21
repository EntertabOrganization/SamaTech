import SectionHeader from "../shared/SectionHeader";
import Showcase from "../shared/Showcase";
import { commitments } from "./commitments";

export default function WhySamatechs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto flex max-w-310 flex-col gap-13 sm:px-8">
        <SectionHeader
          eyebrow="Why SAMATECHS"
          title={"Five commitments behind\nevery engagement"}
        />

        <Showcase
          items={commitments}
          label="Our commitments"
          variant="soft"
        />
      </div>
    </section>
  );
}
