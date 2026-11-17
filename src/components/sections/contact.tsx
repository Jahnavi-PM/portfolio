import { Mail, Download, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { LinkedInIcon } from "@/components/ui/icons";
import { profile } from "@/lib/data";

export function Contact() {
  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "Connect with me",
      href: profile.linkedin,
      external: true,
    },
    {
      icon: Download,
      label: "Resume",
      value: "Download PDF",
      href: profile.resumePath,
      download: true,
    },
  ];

  return (
    <Section id="contact" tone="dark">
      <SectionHeading
        align="center"
        tone="dark"
        eyebrow="Contact"
        title="Let's build products that make a difference."
        description="I'm always interested in connecting with product professionals, hiring teams and organizations building meaningful products."
      />

      <Reveal delay={0.1}>
        <div className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:mt-12">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(c.download ? { download: true } : {})}
              className="group flex items-center gap-3 rounded-2xl border border-navy-line bg-navy-2 px-4 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-white/[0.04] sm:gap-4 sm:px-5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.07] text-accent-soft transition-colors group-hover:bg-accent group-hover:text-white sm:h-11 sm:w-11">
                <c.icon className="h-5 w-5" aria-hidden />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/40">
                  {c.label}
                </span>
                <span className="mt-0.5 block break-words text-sm font-medium text-white sm:text-[0.95rem]">
                  {c.value}
                </span>
              </span>

              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-soft"
                aria-hidden
              />
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
