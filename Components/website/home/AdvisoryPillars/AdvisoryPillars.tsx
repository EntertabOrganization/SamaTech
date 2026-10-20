import Image from "next/image";
import brandVector from "@/public/images/Vector.png";
import PillarBackGround from "@/public/images/AdvisoryPillarBackGround.png";
import { pillars } from "./Data";
import PillarCard from "./Pillarcard";

const BACKGROUND_IMAGE = PillarBackGround;

const OVERLAY =
  "linear-gradient(140.34deg, rgba(18, 26, 35, 0.9) 0%, rgba(18, 26, 35, 0.78) 46%, rgba(18, 26, 35, 0.95) 100%)";

const GLOWS = [
  "radial-gradient(60% 55% at 58% 30%, #0078ff47 0%, rgba(0, 120, 255, 0) 70%)",
  "radial-gradient(40% 40% at 0% 0%, rgba(0, 91, 194, 0.22) 0%, rgba(0, 91, 194, 0) 70%)",
  "radial-gradient(40% 50% at 100% 100%, rgba(51, 147, 255, 0.12) 0%, rgba(51, 147, 255, 0) 70%)",
].join(", ");

export default function AdvisoryPillars() {
  return (
    <section
      className="relative overflow-hidden bg-[#0A1521] px-4 py-20 sm:px-6 lg:px-50 2xl:px-85"
      style={BACKGROUND_IMAGE ? undefined : { backgroundImage: GLOWS }}
    >
      {/* Background group from the design: the photo, then the dark gradient on top of it */}
      {BACKGROUND_IMAGE && (
        <Image
          src={BACKGROUND_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="pointer-events-none object-cover"
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: OVERLAY }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url(${brandVector.src})`,
          backgroundRepeat: "repeat",
          backgroundSize: "300px auto",
        }}
      />

      <div className="relative mx-auto flex flex-col gap-[56px]">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end lg:gap-[64px]">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-blue-precision">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-blue-precision font-body"
              />
              Advisory Pillars
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl font-heading">
              Three Integrated
              <br />
              Advisory Pillars
            </h2>
          </div>
          <p className="2xl:max-w-[588px] lg:max-w-[390px] text-sm leading-relaxed font-medium font-body text-white lg:justify-self-end">
            We combine strategy, decision intelligence, technology, and
            cross-border expertise to help organizations navigate complexity
            from diagnosis through execution.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-[24px] md:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
