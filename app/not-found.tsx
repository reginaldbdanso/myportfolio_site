import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-muted">
          The link may be out of date, or the page may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-fg px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-accent"
        >
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}
