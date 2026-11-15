import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" tone="muted">
      <SectionHeading
        eyebrow="Skills & expertise"
        title="What I bring to a product team."
        description="A toolkit spanning product management, analytics, technical execution and the domains I've worked in."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={(i % 3) * 0.05}
            className="rounded-2xl border border-line bg-surface p-6 shadow-soft"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <h3 className="text-base font-semibold text-ink">{group.title}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line bg-bg px-2.5 py-1.5 text-xs font-medium text-ink-soft"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
