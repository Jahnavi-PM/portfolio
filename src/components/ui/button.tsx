import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_24px_-12px_rgba(15,118,110,0.6)] hover:bg-accent-strong hover:shadow-[0_12px_30px_-12px_rgba(15,118,110,0.7)] hover:-translate-y-0.5",
  secondary:
    "border border-line-strong bg-surface text-ink hover:border-ink/30 hover:-translate-y-0.5 hover:shadow-soft",
  ghost: "text-ink hover:bg-surface-2",
  dark: "bg-white text-navy hover:bg-white/90 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-[0.95rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
  download?: boolean;
};

export function ButtonLink({
  href,
  external,
  download,
  variant = "primary",
  size = "md",
  className,
  children,
}: ButtonAsLink) {
  const classes = cn(base, variants[variant], sizes[size], className);
  if (external || download) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
