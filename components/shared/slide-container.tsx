import type { ReactNode } from "react";
import { Eyebrow } from "./eyebrow";
import { SlideNumber } from "./slide-number";

interface SlideContainerProps {
  id: string;
  index: number;
  total: number;
  eyebrow?: string;
  children: ReactNode;
  centered?: boolean;
  className?: string;
  background?: "cream" | "paper";
}

export function SlideContainer({
  id,
  index,
  total,
  eyebrow,
  children,
  centered = false,
  className = "",
  background = "cream",
}: SlideContainerProps) {
  const bgClass = background === "paper" ? "bg-paper" : "bg-cream";
  return (
    <section
      id={id}
      className={`snap-slide ${bgClass} ${className}`}
      aria-label={eyebrow}
    >
      <div className="absolute top-6 left-8 z-20">
        <Eyebrow>{eyebrow ?? "Mesa de ayuda · Alfresco · v1.1"}</Eyebrow>
      </div>
      <SlideNumber current={index} total={total} />
      <div
        className={`flex-1 w-full max-w-[1480px] mx-auto px-8 sm:px-12 md:px-16 pt-24 pb-20 ${
          centered ? "flex flex-col justify-center" : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
}
