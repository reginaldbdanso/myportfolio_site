import { profile, stack } from "@/content/profile";
import Reveal from "./Reveal";

export default function About() {
  const facts = [
    { label: "Based in", value: profile.location },
    { label: "Focus", value: profile.specialism },
    { label: "Availability", value: profile.availabilityNote },
  ];

  return (
    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
      <Reveal>
        <div className="space-y-5">
          {profile.bio.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "text-lg leading-relaxed text-fg"
                  : "leading-relaxed text-muted"
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div className="rounded-2xl border border-line bg-surface p-6 sm:p-7">
          <dl className="space-y-4">
            {facts.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-baseline justify-between gap-6 border-b border-line pb-4 last:border-0 last:pb-0"
              >
                <dt className="eyebrow">{label}</dt>
                <dd className="text-right text-sm font-medium text-fg">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 space-y-5">
            <p className="eyebrow">Toolkit</p>
            {stack.map(({ group, items }) => (
              <div key={group}>
                <p className="text-xs font-medium text-faint">{group}</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-line bg-ink/60 px-2 py-1 font-mono text-[0.6875rem] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
