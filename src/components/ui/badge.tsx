import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "accent" | "dark" | "outline";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
        tone === "default" && "bg-surface-2 text-ink-soft",
        tone === "accent" && "bg-accent-soft text-accent-ink",
        tone === "dark" && "bg-white/10 text-white/80",
        tone === "outline" && "border border-line-strong text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
