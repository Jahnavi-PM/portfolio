import { Award, GraduationCap } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { certifications, education } from "@/lib/data";

export function Credentials() {
  return (
    <Section id="credentials">
      <SectionHeading
        eyebrow="Certifications & education"
        title="Foundations."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
              <Award className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="text-base font-semibold text-ink">Certifications</h3>
          </div>
          <ul className="mt-5 space-y-4">
            {certifications.map((c) => (
              <li key={c.title} className="border-l-2 border-accent/30 pl-4">
                <p className="text-base font-medium text-ink">{c.title}</p>
                <p className="text-sm text-muted">{c.issuer}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={0.06}
          className="rounded-2xl border border-line bg-surface p-6 shadow-soft"
        >
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
              <GraduationCap className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="text-base font-semibold text-ink">Education</h3>
          </div>
          <ul className="mt-5 space-y-4">
            {education.map((e) => (
              <li key={e.degree} className="border-l-2 border-accent/30 pl-4">
                <p className="text-base font-medium text-ink">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
                <p className="mt-1 text-sm text-ink-soft">
                  {e.period} · {e.detail}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
