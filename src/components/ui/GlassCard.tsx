import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "violet" | "cyan" | "white";
}

export function GlassCard({ children, className, glowColor = "violet" }: GlassCardProps) {
  const glowStyles = {
    violet: "border-[rgba(139,92,246,0.15)] shadow-[0_0_50px_rgba(124,58,237,0.1)]",
    cyan: "border-[rgba(6,182,212,0.15)] shadow-[0_0_50px_rgba(6,182,212,0.1)]",
    white: "border-[rgba(255,255,255,0.1)] shadow-[0_0_50px_rgba(255,255,255,0.05)]",
  };

  return (
    <div className={cn(
      "glass rounded-[20px] transition-all duration-300",
      glowStyles[glowColor],
      className
    )}>
      {children}
    </div>
  );
}
