import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Experience" title="Where I've worked." />

      <div className="mt-12 space-y-4">
        {experience.map((job, i) => (
          <Reveal key={`${job.company}-${job.period}`} delay={i * 0.05}>
            <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-ink">{job.role}</h3>
                  {job.current && (
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-accent-ink">
                      Current
                    </span>
                  )}
                </div>
                <span className="font-mono text-xs tracking-wide text-muted">
                  {job.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-accent">
                {job.company}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
