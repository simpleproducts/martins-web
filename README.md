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

The page runs hero → introduction → works → services → photography → contact, with
anchors `#home`, `#about`, `#works`, `#services`, `#photography`, `#contact`.

Nav ids live in `SECTIONS` (`lib/i18n.ts`); the header nav, mobile menu, footer nav and
the scroll-spy all derive from that one list. `#photography` is deliberately **not** in
it: that section carries no text of any kind, so it gets no label — it is a visual break
rather than a destination.

| Section | Component | Notes |
| ------- | --------- | ----- |
| Hero | `Hero.tsx` | Name and lede left, artwork bleeding off the right edge. |
| Introduction | `Intro.tsx` + `IntroCarousel.tsx` | The long "about me" text, with a hand-navigated carousel beside it. It never advances on its own. |
| Works | `Works.tsx` + `WorksCarousel.tsx` | The stack carousel of recent pieces. |
| Services | `Services.tsx` | A vertical tablist: clicking a title swaps the description, its photographs and its facts in place. Events additionally carries a four-step booking walk-through (`services.items.events.process`). |
| Photography | `Photography.tsx` | Full-bleed, wordless slideshow. Every label in it is for assistive technology and never renders. |
| Contact | `Contact.tsx` + `ContactForm.tsx` | Square plate, two lines, the two direct channels, then the form inline. |

## What to replace before launch

| What | Where |
| ---- | ----- |
| Artwork | `public/artwork/placeholder.jpg` — one image is reused everywhere. Add real files and point `ARTWORK`, `PORTRAIT`, `STUDIO_GALLERY`, each `SERVICES[].media` and `PHOTOGRAPHY` in `lib/site.ts` at them. |
| Copy | `lib/dictionaries/*.ts` — every string, in all four languages. |
| Name, email, phone, address, socials | `lib/site.ts` and `contact.studioValue` in each dictionary (the address shows in the footer). |
| Production domain | `SITE.url` in `lib/site.ts` (drives canonical URLs, `hreflang` and Open Graph). |
| Signature mark | `components/Signature.tsx` — hand-drawn placeholder; swap for a traced scan. |
| Favicon | `public/favicon.svg` |
| Contact form delivery | `deliver()` in `components/ContactForm.tsx` — currently a timed stub. Validation, error, sending and success states are already real. The form sits inline at the end of the Contact section. |

## Design notes

- **Palette and type scale**: `app/globals.css`, in the `@theme` block. Printer's ink,
  warm cotton paper, one vermilion accent pulled from the artwork.
- **Dark by default**: ink is the page ground (`body`), white type sits on it and vermilion
  carries the links, indicators, arrows and selected states. Contact and the footer are the
  one light block, closing the page on paper. They are marked `data-ground="light"`, which
  is what the header watches to flip its own colours — any new light section needs that
  attribute or the header will stay inverse over it.
- **Typeface**: Raleway (Google Fonts), loaded via `next/font` in the locale layout and used
  across its weight range — 200 at display sizes, 500 for the small-caps labels.
- **Motion**: two page-level client components drive the scroll work. `RevealObserver`
  releases any element carrying `data-reveal` when it first enters the viewport;
  `ParallaxObserver` moves anything carrying `data-parallax` (currently nothing does — it is
  kept for future use and early-returns when it finds no nodes). Both no-op under
  `prefers-reduced-motion`, so every section stays a server component.
- **Interactive pieces**: the client components are `Header`, `WorksCarousel`,
  `IntroCarousel`, `Services`, `Photography` and `ContactForm`. Everything else stays a
  server component.
- **Texture**: `.paper-ground` / `.ink-ground` for the two grounds, `.void-ground` for the
  near-black the photography slideshow sits on, `.grain` for the noise overlay, `.plate` /
  `.plate-inverse` for a framed artwork.

## Deployment

Any Node host that runs `next start` (Vercel, Netlify, Render, a container). The rewrite that
maps `/` onto the English page is the one thing a static export (`output: 'export'`) cannot
do — if you need a purely static bundle, drop the rewrite and serve English at `/en`.
