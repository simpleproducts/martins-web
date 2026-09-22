import IntroCarousel from '@/components/IntroCarousel'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'

/**
 * The long introduction: the writing holds the left column, a hand-navigated
 * carousel of studio images holds the right.
 */
export default function Intro({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-[110rem] px-gutter">
        <div className="rule-inverse grid grid-cols-12 gap-y-8 border-t pt-8">
          <p
            data-reveal
            style={reveal(0)}
            className="eyebrow col-span-12 text-vermilion-light lg:col-span-3"
          >
            {dict.intro.label}
          </p>
          <h2
            data-reveal
            style={reveal(100)}
            className="text-balance-pretty col-span-12 font-display text-heading font-extralight tracking-[-0.02em] text-paper-light lg:col-span-9"
          >
            {dict.intro.heading}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-16 lg:mt-24">
          {/* The writing */}
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-6 text-[1.0625rem] leading-[1.8] font-light text-paper-light/70">
              {dict.intro.body.map((paragraph, i) => (
                <p key={i} data-reveal style={reveal(i * 90)} className="text-balance-pretty">
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="rule-inverse mt-14 grid grid-cols-1 gap-px border-t sm:grid-cols-2">
              {dict.intro.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  data-reveal
                  style={reveal(120 + i * 80)}
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

          {/* The carousel */}
          <div
            data-reveal
            style={reveal(160, '2.5rem')}
            className="col-span-12 sm:col-span-10 sm:col-start-2 lg:col-span-5 lg:col-start-8"
          >
            <IntroCarousel dict={dict} />
          </div>
        </div>
      </div>
    </section>
  )
}
