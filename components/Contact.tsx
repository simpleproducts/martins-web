import BrushStroke from '@/components/BrushStroke'
import ContactForm from '@/components/ContactForm'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'
import { SITE } from '@/lib/site'

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="contact"
      className="relative scroll-mt-[var(--header-h)] overflow-hidden pt-24 pb-28 lg:pt-36 lg:pb-40"
    >
      <BrushStroke
        className="animate-ink-drift pointer-events-none absolute -right-[6%] top-[8%] h-[70%] w-[38vw] max-w-[26rem] rotate-[8deg] opacity-25 mix-blend-multiply lg:opacity-35"
        seed={23}
      />

      <div className="relative mx-auto max-w-[110rem] px-gutter">
        <div className="rule grid grid-cols-12 gap-y-8 border-t pt-8">
          <p data-reveal style={reveal(0)} className="eyebrow col-span-12 text-ink-faint lg:col-span-3">
            {dict.contact.label}
          </p>
          <h2
            data-reveal
            style={reveal(100)}
            className="text-balance-pretty col-span-12 font-display text-heading font-extralight tracking-[-0.02em] lg:col-span-9"
          >
            {dict.contact.heading}
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-16 lg:mt-24">
          {/* Direct details */}
          <div className="col-span-12 lg:col-span-5">
            <p
              data-reveal
              style={reveal(0)}
              className="text-balance-pretty max-w-[40ch] text-lede font-light text-ink-soft"
            >
              {dict.contact.lede}
            </p>

            <div data-reveal style={reveal(120)} className="mt-12">
              <p className="eyebrow text-ink-faint">{dict.contact.directLabel}</p>
              <a
                href={`mailto:${SITE.email}`}
                className="link-rule mt-3 block font-display text-[clamp(1.3rem,2.4vw,2rem)] font-light tracking-[-0.015em] break-all"
              >
                {SITE.email}
              </a>
            </div>

            <dl className="rule mt-12 grid grid-cols-1 gap-y-8 border-t pt-8 sm:grid-cols-2">
              <div data-reveal style={reveal(160)}>
                <dt className="eyebrow text-ink-faint">{dict.contact.studioLabel}</dt>
                <dd className="mt-3 text-[1.0625rem] leading-relaxed font-light text-ink-soft">
                  {dict.contact.studioValue}
                  <br />
                  <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="link-rule mt-1 inline-block">
                    {SITE.phone}
                  </a>
                </dd>
              </div>

              <div data-reveal style={reveal(220)}>
                <dt className="eyebrow text-ink-faint">{dict.contact.socialsLabel}</dt>
                <dd className="mt-3 flex flex-col items-start gap-2">
                  {SITE.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-rule text-[1.0625rem] font-light text-ink-soft"
                    >
                      {social.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div
            data-reveal
            style={reveal(120, '2rem')}
            className="col-span-12 lg:col-span-6 lg:col-start-7"
          >
            <ContactForm dict={dict} />
          </div>
        </div>
      </div>
    </section>
  )
}
