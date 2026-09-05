import { navSections, profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="shell flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm text-faint transition-colors hover:text-fg"
            >
              {section.label}
            </a>
          ))}
          <a
            href="#top"
            className="text-sm text-faint transition-colors hover:text-fg"
          >
            Back to top
          </a>
        </nav>
      </div>
    </footer>
  );
}
