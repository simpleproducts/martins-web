import Image from 'next/image'
import BrushStroke from '@/components/BrushStroke'
import { reveal } from '@/lib/reveal'
import { sectionHref, type Dictionary, type Locale } from '@/lib/i18n'
import { PORTRAIT, SITE } from '@/lib/site'

const [FIRST, LAST] = SITE.name.split(' ')

export default function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-[calc(var(--header-h)+1.5rem)] pb-10 lg:h-dvh lg:min-h-[44rem] lg:justify-center lg:pb-12"
    >
      {/* The stroke sits behind the type, bleeding off the top of the page. */}
      <BrushStroke
        className="animate-ink-drift pointer-events-none absolute -top-[18%] left-[52%] h-[120%] w-[30vw] max-w-[20rem] opacity-70 mix-blend-multiply sm:left-[58%] lg:left-[34%] lg:w-[15vw] lg:opacity-60"
        seed={11}
      />

      <div className="relative mx-auto grid w-full max-w-[110rem] grid-cols-12 items-center gap-y-10 px-gutter">
        {/* Type block */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-6">
          <p
            data-reveal
            style={reveal(80)}
            className="eyebrow flex items-center gap-4 text-ink-soft"
          >
            <span aria-hidden="true" className="h-px w-10 bg-vermilion" />
            {dict.hero.eyebrow}
          </p>

          <h1 className="mt-5 font-display tracking-[-0.03em]">
            <span className="block overflow-hidden">
              <span
                data-reveal="mask"
                style={reveal(180)}
                className="block text-display font-extralight"
              >
                {FIRST}
              </span>
            </span>
            <span className="block overflow-hidden pl-[0.08em]">
              <span
                data-reveal="mask"
                style={reveal(320)}
                className="block text-display font-extralight text-ink-soft"
              >
                {LAST}
              </span>
            </span>
          </h1>

          <p
            data-reveal
            style={reveal(520)}
            className="text-balance-pretty mt-7 max-w-[34ch] text-lede font-light text-ink-soft"
          >
            {dict.hero.lede}
          </p>

          <div data-reveal style={reveal(640)} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={sectionHref(locale, 'works')}
              className="group relative inline-flex items-center gap-3 bg-ink px-7 py-4 text-bone transition-colors duration-500 hover:bg-vermilion"
            >
              <span className="eyebrow">{dict.hero.primaryCta}</span>
              <svg viewBox="0 0 22 8" aria-hidden="true" className="h-2 w-5">
                <path
                  d="M0 4h20M16 1l4 3-4 3"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </svg>
            </a>
            <a href={sectionHref(locale, 'contact')} className="link-rule eyebrow py-1 text-ink-soft">
              {dict.hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* Artwork plate — overlaps the type column and bleeds off the right edge. */}
        <div className="col-span-12 lg:col-span-5 lg:-mr-gutter xl:col-span-6">
          <figure
            data-reveal
            style={reveal(260, '3rem')}
            className="plate relative ml-auto aspect-[4/5] w-full max-w-[32rem] lg:aspect-auto lg:h-[min(62vh,34rem)] lg:max-w-none lg:translate-y-3"
          >
            <Image
              src={PORTRAIT.src}
              alt={dict.meta.imageAlt}
              fill
              priority
              sizes="(min-width: 1280px) 46vw, (min-width: 1024px) 40vw, 92vw"
              style={{ objectPosition: PORTRAIT.focus }}
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent mix-blend-multiply"
            />
          </figure>
        </div>
      </div>

      {/* Baseline: scroll cue on the left, studio note on the right. */}
      <div
        data-reveal
        style={reveal(820)}
        className="relative mx-auto mt-12 flex w-full max-w-[110rem] items-end justify-between px-gutter lg:mt-10"
      >
        <a
          href={sectionHref(locale, 'about')}
          className="group flex items-center gap-4 text-ink-soft"
          aria-label={dict.hero.scroll}
        >
          <span aria-hidden="true" className="relative block h-12 w-px bg-ink/20">
            <span className="animate-scroll-pulse absolute inset-0 block bg-vermilion" />
          </span>
          <span className="eyebrow transition-opacity duration-500 group-hover:opacity-60">
            {dict.hero.scroll}
          </span>
        </a>
        <p className="eyebrow hidden text-ink-faint sm:block">{dict.hero.since}</p>
      </div>
    </section>
  )
}
