"use client";

import { SlideContainer } from "@/components/shared/slide-container";
import { offenders } from "@/data/offenders";
import { Reveal, RevealStack } from "@/components/ui/motion-primitives";
import { motion } from "motion/react";

interface Props { index: number; total: number; }

const itemMotion = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Slide09Offenders({ index, total }: Props) {
  return (
    <SlideContainer
      id={`slide-${String(index).padStart(2, "0")}`}
      index={index}
      total={total}
      eyebrow="Diagnóstico · Ofensores"
      background="cream"
    >
      <Reveal>
        <header className="mb-8 max-w-3xl">
          <h2 className="text-[clamp(36px,4.5vw,56px)] text-ink leading-[1.05]">
            Lo que <em>nos está costando</em>
          </h2>
          <p className="mt-3 text-base text-ink-soft leading-relaxed">
            Ocho ofensores identificados a partir de la operación de los últimos meses.
            Diagnóstico operativo, no atribución de culpa.
          </p>
        </header>
      </Reveal>

      <RevealStack className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 md:grid-flow-col gap-4">
        {offenders.map((o) => (
          <motion.div
            key={o.n}
            variants={itemMotion}
            className="flex gap-4 p-5 rounded-sm border border-line"
            style={{ background: "var(--terracotta-tint)" }}
          >
            <span
              className="font-display italic font-semibold text-[44px] leading-none text-rust shrink-0 tabular-nums"
              style={{ minWidth: "48px" }}
            >
              {String(o.n).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-sans font-semibold text-base text-ink leading-snug mb-1">
                {o.title}
              </h3>
              <p className="text-sm text-ink-soft leading-snug">{o.body}</p>
            </div>
          </motion.div>
        ))}
      </RevealStack>
    </SlideContainer>
  );
}
