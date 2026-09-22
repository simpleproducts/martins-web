'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { reveal } from '@/lib/reveal'
import type { Dictionary } from '@/lib/i18n'
import { SERVICES } from '@/lib/site'

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * The services list. A vertical tablist: the titles stay put on the left, the
 * description and its photographs swap in place on the right — no navigation,
 * no page change, nothing collapses.
 */
export default function Services({ dict }: { dict: Dictionary }) {
  const [active, setActive] = useState(0)
  const tabs = useRef<Array<HTMLButtonElement | null>>([])

  /* Roving tabindex: arrow keys move between titles and select as they go. */
  const onKeyDown = (event: React.KeyboardEvent) => {
    const last = SERVICES.length - 1
    let next: number | null = null
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = active === last ? 0 : active + 1
    else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = active === 0 ? last : active - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last
    if (next === null) return
    event.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  const service = SERVICES[active]
  const copy = dict.services.items[service.id]

  return (
    <section id="services" className="relative py-28 lg:py-40">
      <div className="mx-auto max-w-[110rem] px-gutter">
        <div className="rule-inverse grid grid-cols-12 gap-y-8 border-t pt-8">
          <p
            data-reveal
            style={reveal(0)}
            className="eyebrow col-span-12 text-vermilion-light lg:col-span-3"
          >
            {dict.services.label}
          </p>
          <h2
            data-reveal
            style={reveal(100)}
            className="text-balance-pretty col-span-12 font-display text-heading font-extralight tracking-[-0.02em] text-paper-light lg:col-span-9"
          >
            {dict.services.heading}
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-12 items-start gap-x-8 gap-y-14 lg:mt-20">
          {/* The list */}
          <div
            data-reveal
            style={reveal(0)}
            role="tablist"
            aria-label={dict.services.label}
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="col-span-12 lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:col-span-5 lg:self-start"
          >
            <p className="eyebrow mb-6 text-paper-light/40">{dict.services.hint}</p>

            {SERVICES.map((item, i) => {
              const selected = i === active
              return (
                <button
                  key={item.id}
                  ref={(node) => {
                    tabs.current[i] = node
                  }}
                  type="button"
                  role="tab"
                  id={`service-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`service-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={[
                    'rule-inverse group flex w-full items-baseline gap-5 border-b py-6 text-left transition-colors duration-500',
                    selected ? 'border-vermilion' : 'hover:border-paper-light/50',
                  ].join(' ')}
                >
                  <span
                    className={`eyebrow shrink-0 text-[0.6rem] transition-colors duration-500 ${
                      selected ? 'text-vermilion-light' : 'text-paper-light/35'
                    }`}
                  >
                    {pad(i + 1)}
                  </span>
                  <span
                    className={`font-display text-[clamp(1.5rem,3.2vw,2.35rem)] leading-[1.15] font-extralight tracking-[-0.02em] transition-colors duration-500 ${
                      selected
                        ? 'text-vermilion-light'
                        : 'text-paper-light/60 group-hover:text-paper-light'
                    }`}
                  >
                    {dict.services.items[item.id].title}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`ml-auto h-px w-8 shrink-0 self-center transition-all duration-500 ${
                      selected
                        ? 'w-12 bg-vermilion'
                        : 'bg-paper-light/20 group-hover:w-12 group-hover:bg-paper-light/50'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* The panel — re-keyed so the copy and the photographs hand over together. */}
          <div
            data-reveal
            style={reveal(120, '2.5rem')}
            role="tabpanel"
            id={`service-panel-${service.id}`}
            aria-labelledby={`service-tab-${service.id}`}
            tabIndex={0}
            className="col-span-12 lg:col-span-6 lg:col-start-7"
          >
            <div key={service.id} className="animate-slide-in">
              <p className="text-balance-pretty font-display text-[clamp(1.3rem,2.2vw,1.8rem)] leading-[1.35] font-light italic text-paper-light">
                {copy.lede}
              </p>

              <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.75] font-light text-paper-light/65">
                {copy.body.map((paragraph, i) => (
                  <p key={i} className="text-balance-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Relevant photographs, swapped with the copy. */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
                <figure className="plate plate-inverse relative col-span-2 aspect-[16/10] w-full">
                  <Image
                    src={service.media[0].src}
                    alt={dict.meta.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    style={{ objectPosition: service.media[0].focus }}
                    className="object-cover"
                  />
                </figure>
                {service.media.slice(1).map((image, i) => (
                  <figure key={i} className="plate plate-inverse relative aspect-[4/5] w-full">
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 23vw, 46vw"
                      style={{ objectPosition: image.focus }}
                      className="object-cover"
                    />
                  </figure>
                ))}
              </div>

              {service.id === 'events' ? <EventsProcess dict={dict} /> : null}

              <dl className="rule-inverse mt-10 grid grid-cols-1 gap-px border-t sm:grid-cols-2">
                {copy.meta.map((fact, i) => (
                  <div
                    key={i}
                    className="rule-inverse border-b py-5 sm:odd:pr-8 sm:even:-ml-px sm:even:border-l sm:even:pl-8"
                  >
                    <dt className="eyebrow text-paper-light/40">{fact.label}</dt>
                    <dd className="mt-2 text-[1rem] leading-snug font-light text-paper-light/85">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Events is the one service with a booking walk-through: four steps and the
 * two kinds of event it covers. It lives inside the Events panel rather than
 * on a page of its own, so the list on the left never loses its place.
 */
function EventsProcess({ dict }: { dict: Dictionary }) {
  const t = dict.services.items.events.process

  return (
    <div className="rule-inverse mt-12 border-t pt-10">
      <h3 className="font-display text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.2] font-extralight tracking-[-0.02em] text-paper-light">
        {t.heading}
      </h3>
      <p className="text-balance-pretty mt-4 max-w-[52ch] text-[1.0625rem] leading-[1.75] font-light text-paper-light/65">
        {t.lede}
      </p>

      <ol className="mt-10 space-y-px">
        {t.steps.map((step, i) => (
          <li key={i} className="rule-inverse border-t pt-6 pb-7">
            <p className="eyebrow flex items-center gap-4 text-vermilion-light">
              {pad(i + 1)}
              <span aria-hidden="true" className="h-px w-6 bg-vermilion/60" />
            </p>
            <h4 className="mt-3 font-display text-[1.2rem] leading-snug font-light text-paper-light">
              {step.title}
            </h4>
            <p className="text-balance-pretty mt-3 max-w-[54ch] text-[1rem] leading-[1.75] font-light text-paper-light/60">
              {step.body}
            </p>
          </li>
        ))}
      </ol>

      <p className="eyebrow rule-inverse mt-8 border-t pt-8 text-paper-light/40">{t.groupsHeading}</p>

      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {t.groups.map((group, i) => (
          <div key={i}>
            <p className="font-display text-[1.1rem] leading-snug font-normal text-paper-light">
              {group.title}
            </p>
            <p className="text-balance-pretty mt-3 text-[0.98rem] leading-[1.7] font-light text-paper-light/60">
              {group.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
