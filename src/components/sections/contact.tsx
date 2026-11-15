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
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              {...(c.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              {...(c.download ? { download: true } : {})}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-navy-line bg-navy-2 p-6 text-center transition-all hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent-soft transition-colors group-hover:bg-accent group-hover:text-white">
                <c.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-white/40">
                  {c.label}
                </span>
                <span className="mt-0.5 inline-flex items-center gap-1 text-sm font-medium text-white">
                  {c.value}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-white/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
