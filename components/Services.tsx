import { services } from "@/content/profile";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {services.map((service, index) => (
        <Reveal as="li" key={service.title} delay={index * 90} className="h-full">
          <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent-dim">
            <span className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {service.body}
            </p>
            <ul className="mt-5 space-y-2 border-t border-line pt-5">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-2.5 text-sm text-faint"
                >
                  <span
                    aria-hidden
                    className="h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
