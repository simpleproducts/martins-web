import BrushStroke from '@/components/BrushStroke'
import HeroCarousel from '@/components/HeroCarousel'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'
import { SITE } from '@/lib/site'

const [FIRST, LAST] = SITE.name.split(' ')

/**
 * Hero and introduction in one: the name, the lede and the long "about me"
 * writing run down the left half, while the carousel holds the right half of
 * the screen and stays pinned there for as long as the writing scrolls past it.
 */
export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section id="home" className="relative grid grid-cols-1 lg:grid-cols-2">
      {/* The writing */}
      <div className="relative order-2 overflow-hidden px-gutter pt-20 pb-24 lg:order-1 lg:pt-[calc(var(--header-h)+5rem)] lg:pb-32">
        <BrushStroke
          className="animate-ink-drift pointer-events-none absolute -top-[4%] left-[-14%] h-[70%] w-[26vw] max-w-[18rem] opacity-20 mix-blend-screen"
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
                className="block text-[clamp(2.75rem,5.6vw,5rem)] leading-[0.92] font-extralight"
              >
                {FIRST}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                data-reveal="mask"
                style={reveal(320)}
                className="block text-[clamp(2.75rem,5.6vw,5rem)] leading-[0.92] font-extralight text-paper-light/55"
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

          <p data-reveal style={reveal(640)} className="eyebrow mt-8 text-paper-light/40">
            {dict.hero.since}
          </p>

          {/* The introduction, continuing in the same column. */}
          <div className="rule-inverse mt-16 border-t pt-8 lg:mt-24">
            <p data-reveal style={reveal(0)} className="eyebrow text-vermilion-light">
              {dict.intro.label}
            </p>

            <h2
              data-reveal
              style={reveal(90)}
              className="text-balance-pretty mt-6 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.18] font-extralight tracking-[-0.02em] text-paper-light"
            >
              {dict.intro.heading}
            </h2>

            <div className="mt-8 space-y-6 text-[1.0625rem] leading-[1.8] font-light text-paper-light/70">
              {dict.intro.body.map((paragraph, i) => (
                <p key={i} data-reveal style={reveal(i * 80)} className="text-balance-pretty">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="rule-inverse mt-12 grid grid-cols-1 gap-px border-t sm:grid-cols-2">
              {dict.intro.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  data-reveal
                  style={reveal(100 + i * 70)}
                  className="rule-inverse border-b py-5 sm:odd:pr-8 sm:even:-ml-px sm:even:border-l sm:even:pl-8"
                >
                  <dt className="eyebrow text-paper-light/45">{fact.label}</dt>
                  <dd className="mt-2 font-display text-[1.05rem] leading-snug font-light text-paper-light">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* The carousel: half the screen, pinned while the writing goes past. */}
      <div className="relative order-1 h-[62svh] lg:order-2 lg:h-auto">
        <div className="lg:sticky lg:top-0 lg:h-svh h-full">
          <HeroCarousel dict={dict} />
        </div>
      </div>
    </section>
  )
}
