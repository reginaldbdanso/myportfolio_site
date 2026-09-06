import { profile } from "@/content/profile";
import { Document, Github, Linkedin, Mail, XLogo } from "./icons";

type Props = { className?: string; size?: "sm" | "md" };

/** Renders only the links you've actually filled in on `profile.links`. */
export default function SocialLinks({ className = "", size = "md" }: Props) {
  const dimensions = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const glyph = size === "sm" ? "h-4 w-4" : "h-[1.125rem] w-[1.125rem]";

  const entries = [
    { href: profile.links.github, label: "GitHub", Icon: Github },
    { href: profile.links.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: profile.links.x, label: "X", Icon: XLogo },
    { href: profile.links.resume, label: "Résumé", Icon: Document },
    { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
  ].filter((entry) => Boolean(entry.href));

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {entries.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className={`inline-flex ${dimensions} items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent-dim hover:text-accent`}
          >
            <Icon className={glyph} />
          </a>
        </li>
      ))}
    </ul>
  );
}
