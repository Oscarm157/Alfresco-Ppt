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
    const onScroll = () => {
      const idx = Math.round(container.scrollTop / window.innerHeight);
      setActive(Math.max(0, Math.min(total - 1, idx)));
    };
    container.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => container.removeEventListener("scroll", onScroll);
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
