interface SlideNumberProps {
  current: number;
  total: number;
}

export function SlideNumber({ current, total }: SlideNumberProps) {
  return (
    <div className="absolute bottom-6 right-8 z-20 label-mono tabular-nums text-ink-soft pointer-events-none">
      <span className="text-ink">{String(current).padStart(2, "0")}</span>
      <span className="mx-2 text-muted">/</span>
      <span>{String(total).padStart(2, "0")}</span>
    </div>
  );
}
