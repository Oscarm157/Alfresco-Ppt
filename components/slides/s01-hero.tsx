"use client";

import { Slide } from "@/components/slide";
import { HeroWord, FadeStack, FadeItem } from "@/components/ui/motion-primitives";

export function S01Hero() {
  return (
    <Slide mode="dark" centered>
      {/* Spotlight + grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 spotlight-accent pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start gap-10">
        <FadeStack className="flex flex-col gap-3">
          <FadeItem>
            <span className="inline-flex items-center gap-2 text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
              Atisa · Gestión documental
            </span>
          </FadeItem>
          <FadeItem>
            <span className="text-sm sm:text-base text-muted">
              Presentación interna · {new Date().getFullYear()}
            </span>
          </FadeItem>
        </FadeStack>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal leading-[1.02] tracking-tight text-foreground">
          <HeroWord delay={0.1}>Alfresco</HeroWord>{" "}
          <HeroWord delay={0.35}>
            <em className="text-gradient-accent">en operación</em>
          </HeroWord>
        </h1>

        <p className="hero-fade-in-delayed-2 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
          Plataforma ECM corriendo en producción. Estado actual,
          adopción por área, próximos pasos.
        </p>

        <div className="hero-fade-in-delayed-3 flex items-center gap-3 text-xs font-mono text-muted-light tracking-wider uppercase">
          <span>→ Avanzar con</span>
          <kbd className="px-2 py-1 rounded bg-card-border/40 ring-1 ring-foreground/10 text-foreground/80">Espacio</kbd>
          <span>o</span>
          <kbd className="px-2 py-1 rounded bg-card-border/40 ring-1 ring-foreground/10 text-foreground/80">→</kbd>
        </div>
      </div>
    </Slide>
  );
}
