interface EyebrowProps {
  children: React.ReactNode;
  color?: "terracotta" | "navy" | "gold" | "sage" | "muted";
  className?: string;
}

const colorMap = {
  terracotta: "text-terracotta",
  navy: "text-navy",
  gold: "text-gold",
  sage: "text-sage",
  muted: "text-muted",
};

export function Eyebrow({ children, color = "terracotta", className = "" }: EyebrowProps) {
  return (
    <span className={`eyebrow ${colorMap[color]} ${className}`}>{children}</span>
  );
}
