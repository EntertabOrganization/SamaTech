import { cn } from "@/Components/website/ui";

interface PatternBackgroundProps {
  src?: string;
  size?: string;
  opacityClassName?: string;
  fade?: boolean;
  variant?: "light" | "dark";
  glow?: boolean;
}

export default function PatternBackground({
  src = "/images/Vector.png",
  size = "300px auto",
  opacityClassName,
  fade = true,
  variant = "light",
  glow = false,
}: PatternBackgroundProps) {
  const isDark = variant === "dark";

  return (
    <>
      {/* Pattern */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0",
          opacityClassName ?? (isDark ? "opacity-[0.04]" : "opacity-[0.04]")
        )}
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "repeat",
          backgroundSize: size,
        }}
      />

      {/* Blue glow (Figma: right side behind the cards) */}
      {isDark && glow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 72% 55%, rgba(0,120,255,0.20) 0%, rgba(0,91,194,0.08) 45%, transparent 75%)",
          }}
        />
      )}

      {/* Fade */}
      {fade && (
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 bg-linear-to-b via-transparent",
            isDark
              ? "from-[#020B18]/60 to-[#020B18]/70"
              : "from-[#F3F7FC]/50 to-[#F3F7FC]/50"
          )}
        />
      )}
    </>
  );
}