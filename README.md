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

A visitor who arrives without asking for a language gets the one their browser asks for.
`proxy.ts` reads `Accept-Language` on the unprefixed paths (`/`, `/impressum`, `/privacy`)
and sends anything it recognises to that language's prefix with a 307; English and
anything we do not speak stay where they are. `lib/negotiateLocale.ts` does the matching —
quality order, matched on the base tag, so `de-CH` finds German.

Nothing is stored — no cookie, no browser storage, which is what the privacy page
promises. The cost of that is memory: a choice sticks only while the visitor stays on a
prefixed URL. To stop the negotiation from overriding someone who has just picked English
in the switcher (which lands them back on `/`), a request that carries a same-host
`Referer` is left alone, as are RSC and prefetch requests. Because the answer depends on
the request's headers, those responses are sent `Vary: Accept-Language, Referer` and
`Cache-Control: no-store`; the pages themselves stay static.

If you would rather a choice be remembered across visits, that needs a preference cookie —
and the privacy copy would have to be corrected to say so.

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

The page runs hero/introduction → works → services → photography → contact, with anchors
`#home`, `#works`, `#services`, `#photography`, `#contact`.

Nav ids live in `SECTIONS` (`lib/i18n.ts`); the header nav, mobile menu, footer nav and
the scroll-spy all derive from that one list. `#photography` is deliberately **not** in
it — it is a scroll-driven break rather than a destination — and the introduction has no
entry of its own because it shares the hero.

| Section | Component | Notes |
| ------- | --------- | ----- |
| Hero + introduction | `Hero.tsx` + `HeroCarousel.tsx` | One section: the name, the lede and the long "about me" writing run down the left half; the carousel owns the right half and stays pinned there while the writing scrolls. It never advances on its own. |
| Works | `Works.tsx` + `WorksCarousel.tsx` | The stack carousel of recent pieces. |
| Services | `Services.tsx` | A vertical tablist: clicking a title swaps the description, its photographs and its facts in place. Events carries a four-step booking walk-through (`services.items.events.process`); Original Pieces swaps the photographs for a priced masonry (`ORIGINALS` in `lib/site.ts`, titles from `services.items.originals.pieces`), and each piece opens `PieceZoom.tsx` — a dialog with a magnifier that follows the cursor. |
| Photography | `Photography.tsx` | Full-bleed frames with one small caption each; the last frame is the photographer's statement rather than a picture. The section is a third of a screen taller than the viewport and the frame inside is pinned, so scrolling past holds the pictures full screen for a moment without trapping anyone. The scroll never changes the picture — swiping, the chevrons, the hairlines and the arrow keys do. |
| Contact | `Contact.tsx` + `ContactForm.tsx` | Square plate, two lines, the two direct channels, then the form inline. |

## Legal pages

`/impressum` and `/privacy` are their own routes (`app/(site)/[locale]/<slug>/page.tsx`),
sharing `components/LegalPage.tsx` — a title, an intro line and a run of headed blocks,
all from `legal` in the dictionaries. English lives at the root (`/impressum`), the other
locales under their prefix (`/es/impressum`), which `LEGAL_PAGES` in `next.config.ts`
sets up the same way as the home page. To add a third legal page: add the slug to
`LEGAL_PAGES`, add a `legal.<slug>` entry to every dictionary, copy a route file, and add
it to the footer's `legalPages` list.

The privacy copy states that the site gathers nothing — no analytics, no cookies, no
third-party requests. That is true of the code as it stands (`next/font` self-hosts the
typeface at build time), so anything you add later that phones home needs the copy
revisited.

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
| Prices and proportions | `ORIGINALS` in `lib/site.ts`. Prices are shown as written and never translated; `w` / `h` must match the real scan, since the zoom dialog sizes its frame from them so the magnifier maps cursor position straight onto the artwork. |
| Photo captions and the closing statement | `photography.captions` / `photography.statement` in each dictionary. The captions list must be the same length as `PHOTOGRAPHY`. |
| Legal copy | `legal` in each dictionary — Impressum and privacy policy, both placeholder. The studio address now lives there rather than in the footer, and a lawyer should read both before launch. |

## Design notes

- **Palette and type scale**: `app/globals.css`, in the `@theme` block. Printer's ink,
  warm cotton paper, one vermilion accent pulled from the artwork.
- **Dark by default**: ink is the page ground (`body`), white type sits on it and vermilion
  carries the links, indicators, arrows and selected states. Contact is the one light block,
  and the footer returns to ink under it. Light sections are marked `data-ground="light"`,
  which is what the header watches to flip its own colours — any new light section needs
  that attribute or the header will stay inverse over it.
- **Typeface**: Raleway (Google Fonts), loaded via `next/font` in the locale layout and used
  across its weight range — 200 at display sizes, 500 for the small-caps labels.
- **Motion**: two page-level client components drive the scroll work. `RevealObserver`
  releases any element carrying `data-reveal` when it first enters the viewport;
  `ParallaxObserver` moves anything carrying `data-parallax` (currently nothing does — it is
  kept for future use and early-returns when it finds no nodes). Both no-op under
  `prefers-reduced-motion`, so every section stays a server component.
- **Interactive pieces**: the client components are `Header`, `WorksCarousel`,
  `HeroCarousel`, `Services`, `PieceZoom`, `Photography` and `ContactForm`. Everything
  else stays a server component.
- **Swiping**: every carousel shares `lib/useSwipe.ts`. It listens for the release on the
  window rather than on the element, so a gesture that leaves the carousel still finishes,
  and it deliberately avoids pointer capture, which would re-target the click and break the
  arrows and dots sitting inside the carousel. `consumeDrag()` swallows the click a drag
  leaves behind; `follow: true` reports live travel so a track can move with the finger.
  Carousel images carry `draggable={false}`, or the browser's own image drag eats the
  gesture on desktop.
- **Texture**: `.paper-ground` / `.ink-ground` for the two grounds, `.void-ground` for the
  near-black the photography slideshow sits on, `.grain` for the noise overlay, `.plate` /
  `.plate-inverse` for a framed artwork.

## Deployment

Any Node host that runs `next start` (Vercel, Netlify, Render, a container). Two things a
static export (`output: 'export'`) cannot do: the rewrite that maps `/` onto the English
page, and the language negotiation in `proxy.ts`, which needs a server to read the request
headers. For a purely static bundle, drop the rewrite, delete `proxy.ts` and serve English
at `/en`.

`proxy.ts` is the Next 16 name for what used to be `middleware.ts`; it runs on the Node
runtime and cannot be moved to the edge runtime.
