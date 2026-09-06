/**
 * ============================================================================
 *  EDIT THIS FILE — it is the single source of truth for the whole site.
 *  No other file needs changing to update your name, bio, projects or links.
 * ============================================================================
 *
 *  ⚠️  VERIFY BEFORE YOU DEPLOY
 *  Entries marked `verified: false` were drafted from repository names only —
 *  nobody has checked that they describe what the project actually does.
 *  Read each one, rewrite the description, then flip it to `verified: true`.
 *
 *  Unverified projects still render (so the page looks complete while you
 *  work through them) but carry a visible amber "Draft" badge. Once you've
 *  cleaned them all up, set `showUnverified` to false to guarantee nothing
 *  unchecked can ever reach the live site again.
 */

export const showUnverified = true;

export const profile = {
  name: "Reginald B. Danso",
  shortName: "Reginald",
  initials: "RD",

  // The one line at the top of the page. Keep it under ~60 characters.
  role: "Software Engineer",
  specialism: "AI & Automation",

  // The headline pitch. One sentence. What you do, for whom, to what end.
  tagline:
    "I build web applications and the AI-assisted tooling that makes them faster to ship and cheaper to run.",

  // 2–3 short paragraphs. Written to be edited — make it sound like you.
  bio: [
    "I'm a software engineer working across the stack, with a bias toward the parts that remove human effort: agents that review code, scripts that consolidate the spreadsheet nobody wants to open, integrations that quietly move data between systems that were never meant to talk.",
    "Most of my work starts the same way — someone is doing something by hand that a machine should be doing. I design the API, wire the interface, and automate the loop in between.",
    "I trained through the ALX Software Engineering programme and have been shipping production web work since — REST APIs, dashboards, content platforms and payment flows, mostly in TypeScript, React/Next.js and Node.",
  ],

  // ⚠️ VERIFY: inferred from your repositories (bestwinegh, flexsitesgh, PaystackGhanaPortal).
  location: "Ghana",

  // Set to false when you're not taking on work — the hero badge reads from this.
  availableForWork: true,
  availabilityNote: "Open to freelance & full-time roles",

  email: "reginaldbdanso@gmail.com",

  links: {
    github: "https://github.com/reginaldbdanso",
    // ⚠️ TODO: replace with your real LinkedIn URL, or set to "" to hide the link.
    linkedin: "",
    // ⚠️ TODO: optional. e.g. "https://x.com/yourhandle". Empty string hides it.
    x: "",
    // ⚠️ TODO: optional. Put a PDF at public/reginald-danso-cv.pdf, then set:
    // resume: "/reginald-danso-cv.pdf",
    resume: "",
  },

  // Used for <title>, Open Graph and the sitemap. Update after your first deploy.
  siteUrl: "https://reginaldbdanso.vercel.app",
} as const;

/* -------------------------------------------------------------------------- */
/*  What I do                                                                  */
/* -------------------------------------------------------------------------- */

export type Service = {
  title: string;
  body: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    title: "AI-assisted engineering",
    body: "Agents and tooling that sit inside the development loop rather than beside it — reviewing diffs, drafting tests, catching what a tired reviewer misses.",
    bullets: ["Code review agents", "LLM API integration", "Prompt & eval pipelines"],
  },
  {
    title: "Web applications, end to end",
    body: "From the database schema to the button someone actually clicks. Typed all the way through, deployed on infrastructure that doesn't need babysitting.",
    bullets: ["Next.js & React", "REST APIs in Node & Python", "PostgreSQL / MongoDB"],
  },
  {
    title: "Automation & integrations",
    body: "The unglamorous work that pays for itself in a fortnight: batch processing, scheduled jobs, and systems talking to each other without a human in the middle.",
    bullets: ["Data consolidation tools", "Payments & third-party APIs", "Scheduled jobs & webhooks"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Tech stack                                                                 */
/* -------------------------------------------------------------------------- */

export const stack: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Flask"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { group: "Tooling", items: ["Git", "Docker", "Vercel", "GitHub Actions"] },
];

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type ProjectCategory = "open-source" | "client";

export type Project = {
  slug: string;
  title: string;
  /** One or two sentences. What it does and why it mattered. */
  description: string;
  category: ProjectCategory;
  tags: string[];
  /** Public repository URL, or "" if the code is private. */
  repo?: string;
  /** Live deployment URL, or "" if there isn't one. */
  live?: string;
  /** Pinned to the top of the grid. Keep this to 2–3 projects. */
  featured?: boolean;
  /**
   * false = drafted from the repo name, NOT yet checked by you.
   * Hidden from the live site until you verify and flip this to true.
   */
  verified: boolean;
};

export const projects: Project[] = [
  /* ---- Open source: real public repositories on your GitHub ---- */
  {
    slug: "code-review-agent-bot",
    title: "Code Review Agent Bot",
    description:
      "⚠️ VERIFY — An automated agent that reviews pull requests and leaves inline feedback, so routine review notes are caught before a human opens the diff.",
    category: "open-source",
    tags: ["AI Agents", "Automation", "GitHub API"],
    repo: "https://github.com/reginaldbdanso/code-review-agent-bot",
    featured: true,
    verified: false,
  },
  {
    slug: "excel-file-consolidator",
    title: "Excel File Consolidator",
    description:
      "⚠️ VERIFY — A tool that merges many spreadsheets into one clean dataset, replacing an hour of manual copy-paste with a single run.",
    category: "open-source",
    tags: ["Python", "Automation", "Data"],
    repo: "https://github.com/reginaldbdanso/excelFileConsolidatorV2",
    featured: true,
    verified: false,
  },
  {
    slug: "polling-app",
    title: "Polling App",
    description:
      "⚠️ VERIFY — A full-stack polling application: users create polls, vote, and watch results update against a backing API.",
    category: "open-source",
    tags: ["Next.js", "React", "Full-stack"],
    repo: "https://github.com/reginaldbdanso/polling-app",
    featured: true,
    verified: false,
  },
  {
    slug: "way2go-task-man",
    title: "Way2Go Task Manager",
    description:
      "⚠️ VERIFY — A task management app covering the full CRUD lifecycle, with state handled on the client and persistence behind an API.",
    category: "open-source",
    tags: ["React", "TypeScript", "CRUD"],
    repo: "https://github.com/reginaldbdanso/way2go-task-man",
    verified: false,
  },
  {
    slug: "yanns-backend",
    title: "Yanns Tech Hub — Backend",
    description:
      "⚠️ VERIFY — The API layer behind an e-commerce storefront: catalogue, orders and authentication.",
    category: "open-source",
    tags: ["Node.js", "REST API", "E-commerce"],
    repo: "https://github.com/reginaldbdanso/yanns_backend",
    verified: false,
  },
  {
    slug: "paystack-ghana-portal",
    title: "Paystack Ghana Portal",
    description:
      "⚠️ VERIFY — A payments integration against Paystack, handling checkout and transaction verification for Ghanaian merchants.",
    category: "open-source",
    tags: ["Payments", "Paystack", "Integration"],
    repo: "https://github.com/reginaldbdanso/PaystackGhanaPortal",
    verified: false,
  },

  /* ---- Client & business work: private repos, so link the live site ---- */
  {
    slug: "yanns-tech-hub",
    title: "Yanns Tech Hub",
    description:
      "⚠️ VERIFY — Describe the brief, what you built, and the outcome. Add the live URL below.",
    category: "client",
    tags: ["Next.js", "E-commerce"],
    live: "", // ⚠️ TODO: add the live URL
    verified: false,
  },
  {
    slug: "chow-haven",
    title: "Chow Haven",
    description:
      "⚠️ VERIFY — Describe the brief, what you built, and the outcome. Add the live URL below.",
    category: "client",
    tags: ["Web", "Food & Beverage"],
    live: "", // ⚠️ TODO: add the live URL
    verified: false,
  },
  {
    slug: "flexsites-gh",
    title: "Flexsites GH",
    description:
      "⚠️ VERIFY — Describe the brief, what you built, and the outcome. Add the live URL below.",
    category: "client",
    tags: ["Web", "Small business"],
    live: "", // ⚠️ TODO: add the live URL
    verified: false,
  },

  /* ---- Blank template. Copy this block for each new project. ---- */
  {
    slug: "new-project",
    title: "Project name",
    description:
      "What it does, who it was for, and the result — one or two sentences. Lead with the outcome, not the tech.",
    category: "client",
    tags: ["Tag", "Tag"],
    repo: "",
    live: "",
    verified: false,
  },
];

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navSections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
] as const;
