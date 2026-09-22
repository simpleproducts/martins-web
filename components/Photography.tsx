'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/lib/i18n'
import { PHOTOGRAPHY, SITE } from '@/lib/site'

/** How much scrolling each frame is worth, as a share of the viewport. */
const SLIDE_SCROLL = 0.85

/**
 * The scroll takes over here: the section is tall, the frame inside it is
 * pinned to the viewport, and scrolling moves through the photographs instead
 * of moving the page. Each photograph carries one small line at its foot; the
 * last frame is not a photograph at all but the photographer's own words.
 */
export default function Photography({ dict }: { dict: Dictionary }) {
  const t = dict.photography
  const total = PHOTOGRAPHY.length + 1 // the closing statement is the last frame
  const section = useRef<HTMLElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const el = section.current
      if (!el) return
      const travel = el.offsetHeight - window.innerHeight
      if (travel <= 0) return
      const progress = (window.scrollY - el.offsetTop) / travel
      const next = Math.min(total - 1, Math.max(0, Math.floor(progress * total)))
      setIndex((current) => (current === next ? current : next))
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [total])

  /** Jump the page to the scroll position that shows a given frame. */
  const goTo = (i: number) => {
    const el = section.current
    if (!el) return
    const travel = el.offsetHeight - window.innerHeight
    window.scrollTo({ top: el.offsetTop + (travel * (i + 0.5)) / total, behavior: 'smooth' })
  }

  return (
    <section
      ref={section}
      id="photography"
      aria-label={t.label}
      aria-roledescription="carousel"
      style={{ height: `${total * SLIDE_SCROLL * 100}svh` }}
      className="relative"
    >
      <div className="void-ground sticky top-0 h-svh w-full overflow-hidden">
        {PHOTOGRAPHY.map((photo, i) => {
          const active = i === index
          return (
            <figure
              key={i}
              aria-hidden={active ? undefined : true}
              className={`absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-ink ${
                active ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'
              }`}
            >
              <Image
                src={photo.src}
                alt={active ? t.imageAlt : ''}
                fill
                sizes="100vw"
                style={{ objectPosition: photo.focus }}
                className="object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/70 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-20 px-gutter text-center lg:bottom-24">
                <span className="eyebrow text-paper-light/75">{t.captions[i]}</span>
              </figcaption>
            </figure>
          )
        })}

        {/* The last frame: no photograph, only the line under all of them. */}
        <div
          aria-hidden={index === total - 1 ? undefined : true}
          className={`absolute inset-0 flex items-center justify-center px-gutter transition-opacity duration-[1200ms] ease-ink ${
            index === total - 1 ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <blockquote className="max-w-[52rem] text-center">
            <span aria-hidden="true" className="mx-auto mb-10 block h-px w-16 bg-vermilion" />
            <p className="text-balance-pretty font-display text-[clamp(1.5rem,3vw,2.6rem)] leading-[1.3] font-extralight tracking-[-0.02em] text-paper-light italic">
              {t.statement}
            </p>
            <footer className="eyebrow mt-10 text-paper-light/45">{SITE.name}</footer>
          </blockquote>
        </div>

        {/* Hairline indicators, low on the frame. */}
        <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center gap-2 lg:bottom-10 lg:gap-3">
          {Array.from({ length: total }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${t.goTo} ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              className="group/dot px-1 py-3"
            >
              <span
                className={`block h-px w-8 transition-colors duration-700 lg:w-12 ${
                  i === index ? 'bg-vermilion' : 'bg-paper-light/30 group-hover/dot:bg-paper-light/70'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
