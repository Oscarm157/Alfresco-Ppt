"use client";

import { SlideContainer } from "@/components/shared/slide-container";
import { mitigations } from "@/data/mitigations";
import { Reveal, RevealStack } from "@/components/ui/motion-primitives";
import { motion } from "motion/react";

interface Props { index: number; total: number; }

const itemMotion = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Slide10Mitigations({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Plan · Mitigaciones"
      background="cream"
    >
      <Reveal>
        <header className="mb-8 max-w-3xl">
          <h2 className="text-[clamp(36px,4.5vw,56px)] text-ink leading-[1.05]">
            Cómo lo <em>arreglamos</em>
          </h2>
          <p className="mt-3 text-base text-ink-soft leading-relaxed">
            Cada ofensor del slide 09 tiene una mitigación concreta con owner y horizonte.
          </p>
        </header>
      </Reveal>

      <RevealStack className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 md:grid-flow-col gap-4">
        {mitigations.map((m) => (
          <motion.div
            key={m.n}
            variants={itemMotion}
            className="flex gap-4 p-5 rounded-sm border"
            style={{
              background: "var(--sage-tint)",
              borderColor: "rgba(107, 142, 111, 0.35)",
            }}
          >
            <span
              className="font-display italic font-semibold text-[44px] leading-none shrink-0 tabular-nums"
              style={{ minWidth: "48px", color: "var(--sage)" }}
            >
              {String(m.n).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-sans font-semibold text-base text-ink leading-snug mb-1">
                {m.title}
              </h3>
              <p className="text-sm text-ink-soft leading-snug">{m.body}</p>
            </div>
          </motion.div>
        ))}
      </RevealStack>
    </SlideContainer>
  );
}
