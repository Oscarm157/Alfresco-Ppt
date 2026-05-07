interface PlaceholderProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "text-[10px] px-2 py-0.5",
  md: "text-xs px-2.5 py-1",
  lg: "text-sm px-3 py-1.5",
};

export function Placeholder({ label = "POR LLENAR", size = "md", className = "" }: PlaceholderProps) {
  return (
    <span
      className={`inline-flex items-center font-mono uppercase tracking-[0.15em] font-medium text-rust border border-dashed border-gold rounded-sm ${sizeMap[size]} ${className}`}
      style={{ background: "var(--gold-tint)" }}
    >
      {label}
    </span>
  );
}
