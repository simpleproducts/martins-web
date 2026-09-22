import WorksCarousel from '@/components/WorksCarousel'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'

export default function Works({ dict }: { dict: Dictionary }) {
  return (
    <section id="works" className="ink-ground grain relative">
      {/* Intro */}
      <div className="mx-auto max-w-[110rem] px-gutter pt-28 pb-16 lg:pt-44 lg:pb-24">
        <div className="rule-inverse grid grid-cols-12 gap-y-8 border-t pt-8">
          <p
            data-reveal
            style={reveal(0)}
            className="eyebrow col-span-12 text-paper-light/50 lg:col-span-3"
          >
            {dict.works.label}
          </p>
          <div className="col-span-12 lg:col-span-9">
            <h2
              data-reveal
              style={reveal(100)}
              className="font-display text-heading font-extralight tracking-[-0.02em] text-paper-light"
            >
              {dict.works.heading}
            </h2>
            <p
              data-reveal
              style={reveal(220)}
              className="text-balance-pretty mt-6 max-w-[46ch] text-lede font-light text-paper-light/60"
            >
              {dict.works.lede}
            </p>
          </div>
        </div>
      </div>

      {/* The stack carousel: one card in front, the rest fanned left and right. */}
      <div data-reveal style={reveal(0, '3rem')} className="pb-24 lg:pb-36">
        <WorksCarousel dict={dict} />
      </div>

      {/* Soft hand-off back to paper. */}
      <div
        aria-hidden="true"
        className="pointer-events-none h-32 bg-gradient-to-b from-transparent to-paper lg:h-48"
      />
    </section>
  )
}
