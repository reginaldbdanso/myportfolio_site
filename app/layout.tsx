import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description = profile.tagline;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    profile.name,
    "software engineer",
    "AI automation",
    "Next.js developer",
    "full-stack developer",
    profile.location,
  ],
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  openGraph: {
    type: "profile",
    title,
    description,
    url: profile.siteUrl,
    siteName: profile.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#06070a",
  colorScheme: "dark",
};

/** Structured data so search engines read this as a person, not a blog post. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: `${profile.role}, ${profile.specialism}`,
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  address: { "@type": "PostalAddress", addressCountry: profile.location },
  sameAs: [profile.links.github, profile.links.linkedin, profile.links.x].filter(Boolean),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="grain antialiased">
        {/*
          Marks the document as JavaScript-capable before any content paints.
          The scroll-reveal styles hang off `.js`, so if this never runs — JS
          disabled, or a script error — the page renders fully visible rather
          than blank below the fold.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
