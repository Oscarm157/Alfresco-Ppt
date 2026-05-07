"use client";

import { useEffect } from "react";

interface KeyboardNavProps {
  total: number;
  containerSelector?: string;
}

export function KeyboardNav({ total, containerSelector = ".snap-deck" }: KeyboardNavProps) {
  useEffect(() => {
    const container = document.querySelector<HTMLElement>(containerSelector);
    if (!container) return;

    const currentIdx = () =>
      Math.round(container.scrollTop / window.innerHeight);

    const goTo = (i: number) => {
      const clamped = Math.max(0, Math.min(total - 1, i));
      const target = document.getElementById(`slide-${String(clamped + 1).padStart(2, "0")}`);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      const key = e.key;
      if (key === "ArrowDown" || key === "ArrowRight" || key === "PageDown" || key === " ") {
        e.preventDefault();
        goTo(currentIdx() + 1);
      } else if (key === "ArrowUp" || key === "ArrowLeft" || key === "PageUp") {
        e.preventDefault();
        goTo(currentIdx() - 1);
      } else if (key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [containerSelector, total]);

  return null;
}
