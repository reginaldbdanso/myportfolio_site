"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/content/profile";

/**
 * The hero portrait.
 *
 * Drop your photo at `public/images/portrait.jpg` and it appears here. Until
 * then — or if the file is ever missing — this falls back to an initials
 * monogram so the page never renders a broken image.
 */
export default function Portrait() {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
      {/* Ambient glow sitting behind the subject. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10 opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(52% 46% at 52% 34%, rgba(91,157,255,0.20), transparent 70%)",
        }}
      />

      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-surface">
        {failed ? (
          <Monogram />
        ) : (
          <Image
            src="/images/portrait.jpg"
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 30rem, 90vw"
            onError={() => setFailed(true)}
            className="object-cover object-[50%_18%]"
          />
        )}

        {/* Fades the photo's black backdrop into the page background. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(6,7,10,0.85) 0%, rgba(6,7,10,0.18) 18%, transparent 34%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.07]"
        />
      </div>
    </div>
  );
}

function Monogram() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-surface-2 to-ink">
      <span className="font-mono text-6xl font-semibold tracking-tight text-accent">
        {profile.initials}
      </span>
      <p className="max-w-[16rem] px-6 text-center text-xs leading-relaxed text-faint">
        Add your photo at{" "}
        <code className="text-muted">public/images/portrait.jpg</code>
      </p>
    </div>
  );
}
