import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "aurora" | "glass" | "success" | "warning";
}

export function Badge({ children, className, variant = "glass" }: BadgeProps) {
  const variants = {
    aurora: "bg-aurora text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full",
    glass: "glass text-text-secondary text-[11px] font-medium border-white/5 px-2.5 py-1 rounded-full",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 border text-[11px] font-bold px-2.5 py-1 rounded-full",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/20 border text-[11px] font-bold px-2.5 py-1 rounded-full",
  };

  return (
    <span className={cn(variants[variant], className)}>
      {children}
    </span>
  );
}
