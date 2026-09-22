import Image from 'next/image'
import Signature from '@/components/Signature'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'
import { PORTRAIT, SITE } from '@/lib/site'

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="relative py-28 lg:py-44">
      <div className="mx-auto max-w-[110rem] px-gutter">
        {/* Section head */}
        <div className="rule grid grid-cols-12 gap-y-8 border-t pt-8">
          <p data-reveal style={reveal(0)} className="eyebrow col-span-12 text-ink-faint lg:col-span-3">
            {dict.about.label}
          </p>
          <h2
            data-reveal
            style={reveal(100)}
            className="text-balance-pretty col-span-12 font-display text-heading font-extralight tracking-[-0.02em] lg:col-span-9"
          >
            {dict.about.heading}
          </h2>
        </div>

        {/* Body */}
        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-14 lg:mt-24">
          <figure
            data-reveal
            style={reveal(120, '2.5rem')}
            className="col-span-12 sm:col-span-8 sm:col-start-3 lg:col-span-5 lg:col-start-1"
          >
            <div className="plate relative aspect-[3/4] w-full">
              <Image
                src={PORTRAIT.src}
                alt={dict.meta.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 66vw, 92vw"
                style={{ objectPosition: '46% 38%' }}
                className="object-cover"
              />
            </div>
            <figcaption className="eyebrow mt-4 flex items-center gap-3 text-ink-faint">
              <span aria-hidden="true" className="h-px w-6 bg-vermilion" />
              {SITE.city}
            </figcaption>
          </figure>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p
              data-reveal
              style={reveal(0)}
              className="text-balance-pretty font-display text-[clamp(1.35rem,2.3vw,2rem)] leading-[1.3] font-light italic"
            >
              {dict.about.lede}
            </p>

            <div className="mt-8 space-y-6 text-[1.0625rem] leading-[1.75] font-light text-ink-soft">
              {dict.about.body.map((paragraph, i) => (
                <p key={i} data-reveal style={reveal(80 + i * 90)}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Studio facts */}
            <dl className="rule mt-12 grid grid-cols-1 gap-px border-t sm:grid-cols-2">
              {dict.about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  data-reveal
                  style={reveal(120 + i * 80)}
                  className="rule border-b py-5 sm:odd:pr-8 sm:even:pl-8 sm:even:border-l sm:even:-ml-px"
                >
                  <dt className="eyebrow text-ink-faint">{fact.label}</dt>
                  <dd className="mt-2 font-display text-[1.05rem] leading-snug font-normal">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Pull quote */}
        <figure
          data-reveal
          style={reveal(60)}
          className="relative mt-24 grid grid-cols-12 lg:mt-36"
        >
          <blockquote className="col-span-12 lg:col-span-10 lg:col-start-2">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-[0.3em] left-0 font-display text-[clamp(7rem,18vw,16rem)] leading-none font-light text-vermilion/15 select-none lg:left-[-0.1em]"
            >
              &ldquo;
            </span>
            <p className="text-balance-pretty relative font-display text-[clamp(1.5rem,3.6vw,2.9rem)] leading-[1.2] font-extralight tracking-[-0.02em]">
              {dict.about.quote}
            </p>
          </blockquote>
          <figcaption className="col-span-12 mt-10 flex items-center gap-5 lg:col-span-10 lg:col-start-2">
            <Signature className="h-9 w-36 text-ink-soft" />
            <span className="eyebrow text-ink-faint">{SITE.name}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
