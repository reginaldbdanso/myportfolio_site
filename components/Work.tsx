"use client";

import { useMemo, useState } from "react";
import {
  projects as allProjects,
  showUnverified,
  type ProjectCategory,
} from "@/content/profile";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

type Filter = "all" | ProjectCategory;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "open-source", label: "Open source" },
  { id: "client", label: "Client work" },
];

export default function Work() {
  const [filter, setFilter] = useState<Filter>("all");

  // Featured first, then the rest in the order they appear in the data file.
  const visible = useMemo(() => {
    return allProjects
      .filter((project) => showUnverified || project.verified)
      .filter((project) => filter === "all" || project.category === filter)
      .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
  }, [filter]);

  return (
    <>
      <Reveal>
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map(({ id, label }) => {
            const selected = filter === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(id)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  selected
                    ? "border-accent-dim bg-accent/10 text-accent"
                    : "border-line bg-surface text-muted hover:border-accent-dim hover:text-fg"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {visible.length === 0 ? (
        <p className="mt-10 rounded-2xl border border-dashed border-line bg-surface p-8 text-sm text-muted">
          No projects to show yet. Add them in{" "}
          <code className="text-fg">content/profile.ts</code>.
        </p>
      ) : (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, index) => (
            <Reveal
              as="li"
              key={project.slug}
              delay={Math.min(index, 5) * 70}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      )}
    </>
  );
}
