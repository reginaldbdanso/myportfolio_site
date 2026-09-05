# Images

## `portrait.jpg` — required

The hero portrait. **This file is not in the repository yet** — add it here:

```
public/images/portrait.jpg
```

Until it exists, the hero shows an "RD" monogram placeholder instead of a
broken image, so the site is safe to deploy either way.

### Recommended

- **Format:** `.jpg` (keep the exact filename `portrait.jpg`, or update the
  `src` in `components/Portrait.tsx`)
- **Aspect:** portrait, roughly 4:5 or taller — it's cropped to 4:5 with the
  focal point near the top so the face stays in frame
- **Size:** ~1200px wide is plenty; compress to under ~300KB
  (try https://squoosh.app) — static export serves the file as-is, with no
  image optimisation in front of it
- **Backdrop:** a dark or black background works best; the page fades the
  bottom of the photo into the page colour
