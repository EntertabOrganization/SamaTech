import Image from "next/image";
import ovelayBackground from '@/public/images/overlayBackGround.png'

/**
 * Photo for the card, as a path inside /public, e.g. "/images/hero-visual.jpg".
 * Leave it empty until the image is added: the card then shows the striped placeholder.
 */
const IMAGE = ovelayBackground;

interface HeroVisualProps {
  caption?: string;
  location?: string;
}

/** Stand-in for the photo while there is none. */
function Placeholder() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(0,0,0,0.22) 100%)",
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.10) 0 26px, rgba(0,0,0,0.10) 26px 52px)",
            "linear-gradient(90deg, #8E8799 0%, #6F677A 38%, #3B3748 68%, #0C0B14 100%)",
          ].join(", "),
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-3/5"
        style={{
          background:
            "repeating-linear-gradient(90deg, transparent 0 9px, rgba(0,0,0,0.38) 9px 13px)",
          maskImage: "linear-gradient(90deg, transparent 0%, #000 70%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 70%)",
        }}
      />
    </>
  );
}

/**
 * The card under the hero buttons. Layers, bottom to top (same as the Figma group):
 * photo -> "Background" gradient -> inner "Overlay+Shadow" ring -> caption.
 * Design size: 1176 x 440, radius 28px.
 */
export default function HeroVisual({
  caption = "From ambiguity to disciplined action.",
  location = "Riyadh · KSA",
}: HeroVisualProps) {
  return (
    <figure className="relative mt-12 aspect-[1176/440] min-h-[220px] w-full overflow-hidden rounded-[28px] bg-[#FFFFFF01] shadow-[0px_20px_48px_0px_#121A231A] sm:mt-14">
      {IMAGE ? (
        <Image
          src={IMAGE}
          alt=""
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      ) : (
        <Placeholder />
      )}

      {/* Figma "Background": darkens the bottom so the caption stays readable */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 26, 35, 0.06) 0%, rgba(18, 26, 35, 0) 40%, rgba(18, 26, 35, 0.56) 100%)",
        }}
      />

      {/* Figma inner "Overlay+Shadow": a 1px light ring just inside the edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[28px] bg-[#FFFFFF01] shadow-[inset_0px_0px_0px_1px_#FFFFFF1A]"
      />

      <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-6">
        <span className="max-w-[12rem] text-left text-lg font-semibold leading-tight text-white sm:text-xl">
          {caption}
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
          {location}
        </span>
      </figcaption>
    </figure>
  );
}
