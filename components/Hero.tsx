import Image from 'next/image'
import BrushStroke from '@/components/BrushStroke'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'
import { PORTRAIT, SITE } from '@/lib/site'

const [FIRST, LAST] = SITE.name.split(' ')

/**
 * An introduction, not a pitch: the name and a short note hold the left half,
 * the drawing owns the right half edge to edge. Deliberately free of buttons —
 * the nav is the only way out of here.
 */
export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="home"
      className="relative grid min-h-[100svh] grid-cols-1 lg:min-h-dvh lg:grid-cols-2"
    >
      {/* Introduction: centred vertically in the left half, ranged left. */}
      <div className="relative order-2 flex items-center overflow-hidden px-gutter pt-16 pb-24 lg:order-1 lg:min-h-dvh lg:pt-[var(--header-h)] lg:pb-0">
        <BrushStroke
          className="animate-ink-drift pointer-events-none absolute -top-[10%] left-[-14%] h-[120%] w-[26vw] max-w-[18rem] opacity-20 mix-blend-screen"
          seed={11}
        />

        <div className="relative w-full max-w-[38rem] lg:ml-auto lg:pr-[clamp(2rem,4vw,5rem)]">
          <p
            data-reveal
            style={reveal(80)}
            className="eyebrow flex items-center gap-4 text-paper-light/55"
          >
            <span aria-hidden="true" className="h-px w-10 bg-vermilion" />
            {dict.hero.eyebrow}
          </p>

          <h1 className="mt-7 font-display tracking-[-0.03em] text-paper-light">
            <span className="block overflow-hidden">
              <span
                data-reveal="mask"
                style={reveal(180)}
                className="block text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] font-extralight"
              >
                {FIRST}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                data-reveal="mask"
                style={reveal(320)}
                className="block text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.92] font-extralight text-paper-light/55"
              >
                {LAST}
              </span>
            </span>
          </h1>

          <span
            aria-hidden="true"
            data-reveal
            style={reveal(440)}
            className="mt-9 block h-px w-16 bg-vermilion"
          />

          <p
            data-reveal
            style={reveal(520)}
            className="text-balance-pretty mt-9 max-w-[38ch] text-lede font-light text-paper-light/70"
          >
            {dict.hero.lede}
          </p>

          <p
            data-reveal
            style={reveal(640)}
            className="eyebrow mt-10 flex items-center gap-4 text-paper-light/40"
          >
            {dict.hero.since}
            <span
              aria-hidden="true"
              className="animate-scroll-pulse hidden h-8 w-px bg-vermilion/70 lg:block"
            />
          </p>
        </div>
      </div>

      {/* Plate: bleeds to the top, right and bottom edges of the page. The
          artwork is contained rather than cropped, so it is always shown whole. */}
      <div className="relative order-1 h-[58svh] bg-ink-deep lg:order-2 lg:h-auto lg:min-h-dvh">
        <Image
          src={PORTRAIT.src}
          alt={dict.meta.imageAlt}
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain object-center"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/70"
        />
      </div>
    </section>
  )
}
