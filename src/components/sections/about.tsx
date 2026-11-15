import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { aboutText, approachSteps } from "@/lib/data";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[0.5fr_1fr] lg:gap-16">
        <SectionHeading eyebrow="About" title="From customer success to product." />

        <div>
          <Reveal>
            <p className="text-lg leading-relaxed text-ink-soft">{aboutText}</p>
          </Reveal>

          {/* Slim 5-step approach */}
          <Reveal delay={0.1}>
            <div className="mt-10">
              <p className="eyebrow mb-4 text-accent">How I work</p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                {approachSteps.map((step, i) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-sm font-medium text-ink">
                      <span className="font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </span>
                    {i < approachSteps.length - 1 && (
                      <span className="text-faint" aria-hidden>
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
