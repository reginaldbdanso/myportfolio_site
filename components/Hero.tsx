import { profile } from "@/content/profile";
import Portrait from "./Portrait";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";
import { ArrowUpRight, Mail } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Faint grid, fading out toward the bottom of the hero. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #12151b 1px, transparent 1px), linear-gradient(to bottom, #12151b 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(90% 70% at 50% 0%, #000 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(90% 70% at 50% 0%, #000 20%, transparent 75%)",
        }}
      />

      <div className="shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          {profile.availableForWork ? (
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="text-xs font-medium text-muted">
                  {profile.availabilityNote}
                </span>
              </p>
            </Reveal>
          ) : null}

          <Reveal delay={60}>
            <h1 className="mt-6 text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal delay={110}>
            <p className="mt-4 font-mono text-sm tracking-wide text-accent">
              {profile.role}
              <span className="mx-2 text-faint">/</span>
              {profile.specialism}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={210}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent"
              >
                See my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent-dim hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <SocialLinks className="mt-8" size="sm" />
          </Reveal>
        </div>

        <Reveal delay={140}>
          <Portrait />
        </Reveal>
      </div>
    </section>
  );
}
