import Image from 'next/image'
import BrushStroke from '@/components/BrushStroke'
import ContactForm from '@/components/ContactForm'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'
import { PORTRAIT, SITE } from '@/lib/site'

/**
 * The one light block on the page, and the last: paper after a long run of ink,
 * so the page has an ending rather than a stop. A square plate, two lines, the
 * two direct channels, then the form itself — no dialog, nothing to open.
 * `data-ground="light"` is what the header watches to flip its own colours.
 */
export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="contact"
      data-ground="light"
      className="paper-ground grain relative overflow-hidden pt-24 pb-28 text-ink lg:pt-36 lg:pb-40"
    >
      <BrushStroke
        className="animate-ink-drift pointer-events-none absolute top-[6%] -right-[14%] h-[64%] w-[34vw] max-w-[22rem] rotate-[10deg] opacity-15 mix-blend-multiply lg:-right-[8%] lg:opacity-20"
        seed={23}
      />

      <div className="relative mx-auto max-w-[110rem] px-gutter">
        <p data-reveal style={reveal(0)} className="eyebrow text-center text-vermilion-deep">
          {dict.contact.label}
        </p>

        {/* Square plate, centred, at the top of the block. */}
        <figure
          data-reveal
          style={reveal(80, '2.5rem')}
          className="plate relative mx-auto mt-10 aspect-square w-full max-w-[30rem] shadow-none lg:mt-14"
        >
          <Image
            src={PORTRAIT.src}
            alt={dict.meta.imageAlt}
            fill
            sizes="(min-width: 640px) 30rem, 92vw"
            style={{ objectPosition: PORTRAIT.focus }}
            className="object-cover"
          />
        </figure>

        <h2
          data-reveal
          style={reveal(120)}
          className="text-balance-pretty mx-auto mt-14 max-w-[22ch] text-center font-display text-heading font-extralight tracking-[-0.02em] lg:mt-16"
        >
          {dict.contact.heading}
        </h2>

        {/* Two lines, and no more than two. */}
        <div className="mx-auto mt-8 max-w-[52ch] space-y-2 text-center">
          {dict.contact.introLines.map((line, i) => (
            <p
              key={i}
              data-reveal
              style={reveal(180 + i * 80)}
              className="text-balance-pretty text-lede font-light text-ink-soft"
            >
              {line}
            </p>
          ))}
        </div>

        {/* The two direct channels. */}
        <dl className="rule mx-auto mt-14 grid max-w-[52rem] grid-cols-1 gap-y-9 border-t pt-12 text-center sm:grid-cols-2 sm:gap-x-8 lg:mt-18">
          <div data-reveal style={reveal(0)}>
            <dt className="eyebrow text-ink-faint">{dict.contact.emailLabel}</dt>
            <dd className="mt-4">
              <a
                href={`mailto:${SITE.email}`}
                className="link-rule font-display text-[clamp(1.05rem,1.6vw,1.35rem)] font-light break-all hover:text-vermilion-deep"
              >
                {SITE.email}
              </a>
            </dd>
          </div>

          <div data-reveal style={reveal(90)}>
            <dt className="eyebrow text-ink-faint">{dict.contact.phoneLabel}</dt>
            <dd className="mt-4">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="link-rule font-display text-[clamp(1.05rem,1.6vw,1.35rem)] font-light hover:text-vermilion-deep"
              >
                {SITE.phone}
              </a>
            </dd>
          </div>
        </dl>

        {/* The form, in the page rather than behind a button. */}
        <div data-reveal style={reveal(60)} className="mx-auto mt-16 max-w-[46rem] text-left lg:mt-20">
          <p className="eyebrow text-ink-faint">{dict.contact.messageLabel}</p>
          <ContactForm dict={dict} />
        </div>
      </div>
    </section>
  )
}
