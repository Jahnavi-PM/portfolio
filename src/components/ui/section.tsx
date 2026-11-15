import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  tone?: "default" | "muted" | "dark";
  children: React.ReactNode;
};

export function Section({
  id,
  className,
  tone = "default",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 py-20 sm:py-28",
        tone === "muted" && "bg-surface-2",
        tone === "dark" && "bg-navy text-white",
        className
      )}
    >
      <div className="container-px mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
