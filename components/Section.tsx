import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  /** Adds a hairline rule above the section. */
  bordered?: boolean;
};

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  bordered = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-line" : ""} py-20 sm:py-28`}
    >
      <div className="shell">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {intro}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
