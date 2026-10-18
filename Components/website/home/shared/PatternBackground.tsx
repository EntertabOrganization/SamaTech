import { cn } from "@/Components/website/ui";

interface PatternBackgroundProps {
  src?: string;
  size?: string;
  opacityClassName?: string;
  fade?: boolean;
}

export default function PatternBackground({
  src = "/images/Vector.png",
  size = "300px auto",
  opacityClassName = "opacity-[0.07]",
  fade = true,
}: PatternBackgroundProps) {
  return (
    <>
      <div
        aria-hidden="true"
        className={cn("pointer-events-none absolute inset-0", opacityClassName)}
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "repeat",
          backgroundSize: size,
        }}
      />
      {fade && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#F3F7FC]/50 via-transparent to-[#F3F7FC]/50"
        />
      )}
    </>
  );
}
