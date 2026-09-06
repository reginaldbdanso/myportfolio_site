import { profile } from "@/content/profile";
import CopyEmail from "./CopyEmail";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(91,157,255,0.22), transparent 70%)",
          }}
        />

        <p className="eyebrow">Contact</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Got something you want built?
        </h2>
        <p className="mt-4 max-w-lg leading-relaxed text-muted">
          Tell me what the problem is and what it&apos;s costing you. If I&apos;m the
          right person for it, I&apos;ll say so — and if I&apos;m not, I&apos;ll tell
          you that too.
        </p>

        <div className="mt-9">
          <a
            id="contact-email"
            href={`mailto:${profile.email}`}
            className="inline-block break-all text-xl font-medium tracking-tight text-fg underline decoration-accent/40 decoration-2 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent sm:text-2xl"
          >
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(
              "Project enquiry",
            )}`}
            className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent"
          >
            Send an email
          </a>
          <CopyEmail />
          <SocialLinks size="sm" className="ml-1" />
        </div>
      </div>
    </Reveal>
  );
}
