import { Mail, Phone } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/lib/data";

export function Contact() {
  const rows = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/jahnavi-kotana",
      href: profile.linkedin,
      external: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    },
  ];

  return (
    <Section id="contact" tone="muted">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left — heading */}
        <Reveal>
          <div>
            <p className="eyebrow text-muted">Contact</p>
            <h2 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
              Open to product roles and always up for a good{" "}
              <span className="italic text-accent">product conversation</span>.
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
              Reach out — I like these conversations and usually reply fast.
            </p>
          </div>
        </Reveal>

        {/* Right — contact card */}
        <Reveal delay={0.1} className="min-w-0">
          <div className="w-full divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface shadow-soft">
            {rows.map((r) => (
              <a
                key={r.label}
                href={r.href}
                {...(r.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 px-5 py-5 transition-colors hover:bg-surface-2"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-strong bg-surface text-ink transition-colors group-hover:border-accent/40 group-hover:text-accent">
                  <r.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="eyebrow block text-faint">{r.label}</span>
                  <span className="mt-1 block break-words text-sm font-medium text-ink sm:text-base">
                    {r.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
