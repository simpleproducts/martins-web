# Georg Martin — Illustration

One-page portfolio site for a fashion illustrator. Next.js App Router, Tailwind CSS v4,
four languages, all content and imagery are **placeholders**.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Languages

English lives at the site root, the rest under a prefix:

| Locale | URL    |
| ------ | ------ |
| English | `/`   |
| Español | `/es` |
| Français | `/fr` |
| Deutsch | `/de` |

`/en` permanently redirects to `/` so each language has exactly one canonical URL.
The mapping is set up in `next.config.ts` (a `beforeFiles` rewrite from `/` to `/en`,
plus the redirect back).

### Adding a language

1. Copy `lib/dictionaries/en.ts` to `lib/dictionaries/<code>.ts` and translate the values.
   The file is typed as `Dictionary`, so a missing or misspelled key fails the build.
2. Add the code to `LOCALES` and an entry to `LOCALE_META` in `lib/i18n.ts`.
3. Nothing else — routing, `hreflang`, the header switcher and the footer list all read
   from `LOCALES`.

## Sections

`main`, `about`, `works`, `contact` — anchors are `#home`, `#about`, `#works`, `#contact`.
Section ids live in `SECTIONS` (`lib/i18n.ts`); the header nav, mobile menu, footer nav
and the scroll-spy all derive from that one list.

## What to replace before launch

| What | Where |
| ---- | ----- |
| Artwork | `public/artwork/placeholder.jpg` — one image is reused for every piece. Add real scans and point `ARTWORK` / `PORTRAIT` in `lib/site.ts` at them. |
| Copy | `lib/dictionaries/*.ts` — every string, in all four languages. |
| Name, email, phone, address, socials | `lib/site.ts` and `contact.studioValue` in each dictionary. |
| Production domain | `SITE.url` in `lib/site.ts` (drives canonical URLs, `hreflang` and Open Graph). |
| Signature mark | `components/Signature.tsx` — hand-drawn placeholder; swap for a traced scan. |
| Favicon | `public/favicon.svg` |
| Contact form delivery | `deliver()` in `components/ContactForm.tsx` — currently a timed stub. Validation, error, sending and success states are already real. |

## Design notes

- **Palette and type scale**: `app/globals.css`, in the `@theme` block. Warm cotton paper,
  printer's ink, one vermilion accent pulled from the artwork.
- **Typeface**: Raleway (Google Fonts), loaded via `next/font` in the locale layout and used
  across its weight range — 200 at display sizes, 500 for the small-caps labels.
- **Motion**: two small client components drive everything. `RevealObserver` releases any
  element carrying `data-reveal` when it first enters the viewport; `ParallaxObserver` moves
  anything carrying `data-parallax`. Both no-op under `prefers-reduced-motion`, which keeps
  every section a server component.
- **Texture**: `.paper-ground` / `.ink-ground` for the two grounds, `.grain` for the noise
  overlay, `.plate` for a framed artwork.

## Deployment

Any Node host that runs `next start` (Vercel, Netlify, Render, a container). The rewrite that
maps `/` onto the English page is the one thing a static export (`output: 'export'`) cannot
do — if you need a purely static bundle, drop the rewrite and serve English at `/en`.
