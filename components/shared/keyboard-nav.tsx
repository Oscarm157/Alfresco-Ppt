"use client";

import { useEffect } from "react";

interface KeyboardNavProps {
  total: number;
}

function getSlides() {
  return Array.from(document.querySelectorAll<HTMLElement>('section[id^="slide-"]'));
}

function currentSlideIndex() {
  const slides = getSlides();
  if (!slides.length) return 0;
  const vh = window.innerHeight;
  // El slide actual es el primero cuya bottom está claramente dentro del viewport
  // (más allá del 30% del alto, así una slide a punto de salir no cuenta como actual).
  for (let i = 0; i < slides.length; i++) {
    const rect = slides[i].getBoundingClientRect();
    if (rect.bottom > vh * 0.3) {
      return i;
    }
  }
  return slides.length - 1;
}

export function KeyboardNav({ total }: KeyboardNavProps) {
  useEffect(() => {
    const goTo = (i: number) => {
      const clamped = Math.max(0, Math.min(total - 1, i));
      const target = document.getElementById(
        `slide-${String(clamped + 1).padStart(2, "0")}`
      );
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onKey = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;
      const key = e.key;
      if (
        key === "ArrowDown" ||
        key === "ArrowRight" ||
        key === "PageDown" ||
        key === " "
      ) {
        e.preventDefault();
        goTo(currentSlideIndex() + 1);
      } else if (
        key === "ArrowUp" ||
        key === "ArrowLeft" ||
        key === "PageUp"
      ) {
        e.preventDefault();
        goTo(currentSlideIndex() - 1);
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
  }, [total]);

  return null;
}
