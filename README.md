# Reginald B. Danso — Portfolio

A statically exported [Next.js](https://nextjs.org) site. No server, no database,
no runtime cost — `next build` emits plain HTML/CSS/JS into `out/`.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript

---

## Before you deploy — 2 things

### 1. Add your photo (required)

The hero portrait is not in the repository. Save your headshot as:

```
public/images/portrait.jpg
```

Until you do, the hero shows an "RD" monogram placeholder instead — the site
still builds and deploys fine, it just won't have your face on it.
See [`public/images/README.md`](public/images/README.md) for sizing tips.

### 2. Check the project descriptions (important)

Every project in `content/profile.ts` is currently marked `verified: false`.
Those descriptions were **drafted from repository names alone** — nobody has
confirmed they describe what the code actually does. They render with an amber
**DRAFT** badge so they're impossible to miss.

For each project: rewrite the description, then set `verified: true`.
Once they're all done, set `showUnverified = false` at the top of the file so
nothing unchecked can ever reach the live site again.

Also still to fill in, all in `content/profile.ts`:

- `links.linkedin` — currently empty, so the LinkedIn icon is hidden
- `links.x` — optional
- `links.resume` — put a PDF in `public/` and point at it
- `location` — currently `"Ghana"`, inferred rather than confirmed
- `siteUrl` — update to your real domain after the first deploy (used for
  Open Graph tags and the sitemap)

---

## Editing the site

**`content/profile.ts` is the single source of truth.** Name, bio, projects,
services, tech stack, social links and navigation all live there. You should
not need to touch a component to change any of the site's words.

| I want to change...        | Edit                                            |
| -------------------------- | ----------------------------------------------- |
| Name, bio, email, links    | `content/profile.ts` → `profile`                 |
| Projects                   | `content/profile.ts` → `projects`                |
| "How I can help" cards     | `content/profile.ts` → `services`                |
| Tech stack lists           | `content/profile.ts` → `stack`                   |
| Nav items / section order  | `content/profile.ts` → `navSections`, `app/page.tsx` |
| Colours, fonts, spacing    | `app/globals.css` → the `@theme` block           |

### Adding a project

Copy the `new-project` block at the bottom of the `projects` array. Fields:

```ts
{
  slug: "unique-id",           // must be unique
  title: "Project name",
  description: "What it does and what it achieved.",
  category: "open-source",     // or "client" — drives the filter tabs
  tags: ["Next.js", "API"],
  repo: "https://github.com/...",  // omit or "" to hide the Code link
  live: "https://...",             // omit or "" to hide the Live link
  featured: true,              // pins it to the front of the grid
  verified: true,              // false shows the amber DRAFT badge
}
```

---

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # static site -> out/
npm start        # preview the built output
npm run lint
npm run typecheck
```

---

## Deploying to Vercel

Vercel detects Next.js automatically — no `vercel.json`, no build settings to
configure.

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with the GitHub
   account that owns this repository.
2. Import `reginaldbdanso/myportfolio_site`.
3. Leave every setting at its default and click **Deploy**.

Pushes to the default branch redeploy automatically; other branches get preview
URLs. To add a custom domain, use the project's **Settings → Domains**.

---

## Design notes

- **Dark only, on purpose.** The portrait is shot on a black backdrop, so a dark
  page lets it sit naturally instead of floating in an obvious black box. There
  is no light theme; adding one would mean rethinking how the photo is presented.
- **The site works without JavaScript.** Scroll animations are scoped to a `.js`
  class added at runtime, so with JS disabled everything renders visible rather
  than blank.
- **Motion is optional.** `prefers-reduced-motion` disables every transition.
- **Contrast meets WCAG AA** for normal text against all three surface colours.
