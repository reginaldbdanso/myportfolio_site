import type { Project } from "@/content/profile";
import { ArrowUpRight, Github } from "./icons";

/** Removes the authoring cue from the data file so it never reaches the page. */
const clean = (text: string) => text.replace(/^⚠️\s*VERIFY\s*—\s*/u, "");

const categoryLabel: Record<Project["category"], string> = {
  "open-source": "Open source",
  client: "Client work",
};

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, category, tags, repo, live, verified } = project;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-dim hover:bg-surface-2">
      <div className="flex items-start justify-between gap-3">
        <span className="eyebrow">{categoryLabel[category]}</span>
        {!verified ? (
          <span
            title="Drafted automatically — check the wording, then set verified: true in content/profile.ts"
            className="shrink-0 rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-mono text-[0.625rem] uppercase tracking-wider text-amber-400"
          >
            Draft
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-semibold tracking-tight text-fg">{title}</h3>

      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
        {clean(description)}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-line bg-ink/60 px-2 py-1 font-mono text-[0.6875rem] text-faint"
          >
            {tag}
          </li>
        ))}
      </ul>

      {repo || live ? (
        <div className="mt-6 flex items-center gap-4 border-t border-line pt-5">
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          ) : null}
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              Live site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
