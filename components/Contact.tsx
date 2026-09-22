import Image from 'next/image'
import BrushStroke from '@/components/BrushStroke'
import ContactDialog from '@/components/ContactDialog'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'
import { PORTRAIT, SITE } from '@/lib/site'

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="relative overflow-hidden pt-24 pb-28 lg:pt-36 lg:pb-40">
      <BrushStroke
        className="animate-ink-drift pointer-events-none absolute -right-[14%] top-[6%] h-[64%] w-[34vw] max-w-[22rem] rotate-[10deg] opacity-15 mix-blend-multiply lg:-right-[8%] lg:opacity-20"
        seed={23}
      />

      <div className="relative mx-auto max-w-[110rem] px-gutter text-center">
        <p data-reveal style={reveal(0)} className="eyebrow text-ink-faint">
          {dict.contact.label}
        </p>

        <p
          data-reveal
          style={reveal(80)}
          className="text-balance-pretty mx-auto mt-6 max-w-[46ch] text-lede font-light text-ink-soft"
        >
          {dict.contact.lede}
        </p>

        {/* Square plate, centred on the page. */}
        <figure
          data-reveal
          style={reveal(160, '2.5rem')}
          className="plate relative mx-auto mt-14 aspect-square w-full max-w-[30rem] lg:mt-20"
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

        {/* The three channels, side by side. */}
        <dl className="rule mx-auto mt-16 grid max-w-[64rem] grid-cols-1 gap-y-10 border-t pt-12 sm:grid-cols-3 sm:gap-x-8 lg:mt-20">
          <div data-reveal style={reveal(0)}>
            <dt className="eyebrow text-ink-faint">{dict.contact.emailLabel}</dt>
            <dd className="mt-4">
              <a
                href={`mailto:${SITE.email}`}
                className="link-rule font-display text-[clamp(1.05rem,1.6vw,1.35rem)] font-light break-all"
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
                className="link-rule font-display text-[clamp(1.05rem,1.6vw,1.35rem)] font-light"
              >
                {SITE.phone}
              </a>
            </dd>
          </div>

          <div data-reveal style={reveal(180)}>
            <dt className="eyebrow text-ink-faint">{dict.contact.messageLabel}</dt>
            <dd className="mt-4">
              <ContactDialog dict={dict} />
            </dd>
          </div>
        </dl>

        {/* The closing line, beneath everything. */}
        <h2
          data-reveal
          style={reveal(120)}
          className="text-balance-pretty mx-auto mt-20 max-w-[22ch] font-display text-heading font-extralight tracking-[-0.02em] lg:mt-28"
        >
          {dict.contact.heading}
        </h2>
      </div>
    </section>
  )
}
