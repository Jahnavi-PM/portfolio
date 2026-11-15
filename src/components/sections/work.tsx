"use client";

import { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { projects, type Project } from "@/lib/projects";

export function Work() {
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <Section id="work" tone="muted">
      <SectionHeading
        eyebrow="Selected Work"
        title="Products I've helped build."
        description="A selection of products and experiences I've worked on across Fintech, EdTech, B2B SaaS and Analytics."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 0.05}>
            <button
              type="button"
              onClick={() => setActive(p)}
              className="group flex h-full w-full flex-col rounded-2xl border border-line bg-surface p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-card"
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="font-medium text-accent">{p.company}</span>
                <span className="text-faint">·</span>
                <span className="text-muted">{p.domain}</span>
              </div>

              <h3 className="mt-3 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                {p.name}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.description}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                <span className="font-medium text-ink">My role: </span>
                {p.contribution}
              </p>

              <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                {p.impact && (
                  <p className="text-xs font-medium leading-snug text-accent-ink">
                    {p.impact}
                  </p>
                )}
                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-muted transition-colors group-hover:text-accent">
                  <Plus className="h-3.5 w-3.5" aria-hidden /> Details
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </Section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-lg rounded-t-2xl border border-line bg-surface p-6 shadow-lift sm:rounded-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-ink"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-xs">
          <span className="font-medium text-accent">{project.company}</span>
          <span className="text-faint">·</span>
          <span className="text-muted">{project.domain}</span>
        </div>
        <h3 className="mt-2 pr-8 text-xl font-semibold leading-snug text-ink">
          {project.name}
        </h3>

        <dl className="mt-6 space-y-5">
          <DetailRow label="The problem" value={project.problem} />
          <DetailRow label="What I worked on" value={project.work} />
          <DetailRow label="The outcome" value={project.outcome} accent />
        </dl>

        {project.impact && (
          <div className="mt-6 rounded-xl border border-accent/20 bg-accent-soft px-4 py-3">
            <p className="text-sm font-medium text-accent-ink">{project.impact}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <span
        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
          accent ? "bg-accent" : "bg-line-strong"
        }`}
      />
      <div>
        <dt className="eyebrow text-faint">{label}</dt>
        <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{value}</dd>
      </div>
    </div>
  );
}
