"use client";

import { useEffect, useState } from "react";

interface ProgressRailProps {
  total: number;
  containerSelector?: string;
}

export function ProgressRail({ total, containerSelector = ".snap-deck" }: ProgressRailProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const slides = Array.from(
      container.querySelectorAll<HTMLElement>('section[id^="slide-"]')
    );
    if (!slides.length) return;

    // IntersectionObserver con root en el container y rootMargin que solo cuenta
    // un slide como "activo" cuando ocupa la zona central del viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        // Tomar el slide con mayor intersection ratio
        const active = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!active) return;
        const id = active.target.id;
        const idx = parseInt(id.replace("slide-", ""), 10) - 1;
        if (!Number.isNaN(idx)) setActive(idx);
      },
      {
        root: container,
        threshold: [0.3, 0.5, 0.7, 0.9],
      }
    );

    slides.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [containerSelector, total]);

  const goTo = (i: number) => {
    const target = document.getElementById(`slide-${String(i + 1).padStart(2, "0")}`);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2.5 pointer-events-auto">
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          className="group relative w-2.5 h-2.5 flex items-center justify-center"
          aria-label={`Ir a slide ${i + 1}`}
        >
          <span
            className={`block rounded-full transition-all duration-300 ${
              i === active
                ? "w-2.5 h-2.5 bg-terracotta"
                : "w-1.5 h-1.5 bg-line group-hover:bg-muted"
            }`}
          />
          <span className="absolute right-5 label-mono text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {String(i + 1).padStart(2, "0")}
          </span>
        </button>
      ))}
    </div>
  );
}
