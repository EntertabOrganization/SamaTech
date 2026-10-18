import Image from "next/image";
import PartnerSocials from "./Partnersocials";
import type { Partner } from "./Data";

function initials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="py-10">
      <div className="grid items-center gap-5 md:grid-cols-[14rem_1fr] md:gap-8">
        <div className="relative aspect-[1.6/1] w-full max-w-56 overflow-hidden rounded-2xl bg-linear-to-br from-[#0A4FB0] to-[#05183A]">
          {partner.photo ? (
            <Image
              src={partner.photo}
              alt={`Portrait of ${partner.name}`}
              fill
              sizes="224px"
              className="object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="flex h-full w-full items-center justify-center text-3xl font-semibold text-white/80"
            >
              {initials(partner.name)}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-body font-heading font-bold text-ink-900">
            {partner.name}
          </h3>
          <p className="mt-1 text-body-small font-bold leading-snug text-blue-sovereign">
            {partner.role}
          </p>
          <p className="mt-2 text-caption font-medium text-ink-300">
            {partner.tagline}
          </p>
          <PartnerSocials partner={partner} />
        </div>
      </div>

      <p className="mt-6 text-body font-medium leading-relaxed text-ink-500 sm:text-xs">
        {partner.bio}
      </p>
    </article>
  );
}
