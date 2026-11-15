import { Mail, ArrowDown, Download } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { LinkedInIcon } from "@/components/ui/icons";
import { highlights, heroStats, profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-texture mask-fade-b opacity-60" />
        <div className="absolute -left-40 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container-px mx-auto w-full max-w-4xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-xs font-medium text-ink-soft shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Associate Product Manager · Deepta AI
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]">
            Building customer-centric products through{" "}
            <span className="text-accent">discovery, data</span> and execution.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.heroIntro}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="mt-7 flex flex-wrap gap-2">
            {highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-line-strong bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-ink-soft"
              >
                {h}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#work" variant="primary" size="lg">
              Explore my work
              <ArrowDown className="h-4 w-4" aria-hidden />
            </ButtonLink>
            <ButtonLink
              href={profile.resumePath}
              download
              variant="secondary"
              size="lg"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download resume
            </ButtonLink>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-surface text-ink-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <Mail className="h-[18px] w-[18px]" aria-hidden />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Slim verified-impact strip */}
        <Reveal delay={0.25}>
          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-7">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-0.5 text-xs text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
