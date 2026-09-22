'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import type { Dictionary } from '@/lib/i18n'
import { STUDIO_GALLERY } from '@/lib/site'

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * The carousel that fills the right half of the hero. It never advances on its
 * own: arrows, the hairline strip, arrow keys and a swipe all move it, nothing
 * else does. Images fill the frame edge to edge, so the controls sit on top of
 * the picture over a soft scrim rather than underneath it.
 */
export default function HeroCarousel({ dict }: { dict: Dictionary }) {
  const t = dict.intro
  const total = STUDIO_GALLERY.length
  const [index, setIndex] = useState(0)
  const drag = useRef({ x: 0, active: false })

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total],
  )

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={t.galleryLabel}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault()
          go(-1)
        } else if (event.key === 'ArrowRight') {
          event.preventDefault()
          go(1)
        }
      }}
      onPointerDown={(event) => {
        drag.current = { x: event.clientX, active: true }
      }}
      onPointerUp={(event) => {
        if (!drag.current.active) return
        const travel = event.clientX - drag.current.x
        drag.current.active = false
        if (Math.abs(travel) > 48) go(travel < 0 ? 1 : -1)
      }}
      onPointerCancel={() => {
        drag.current.active = false
      }}
      className="relative h-full w-full touch-pan-y overflow-hidden bg-ink-deep select-none"
    >
      <div
        className="flex h-full w-full transition-transform duration-[900ms] ease-ink"
        style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
      >
        {STUDIO_GALLERY.map((image, i) => (
          <div
            key={i}
            aria-hidden={i === index ? undefined : true}
            className="relative h-full w-full shrink-0"
          >
            <Image
              src={image.src}
              alt={i === index ? dict.meta.imageAlt : ''}
              fill
              preload={i === 0}
              sizes="(min-width: 1024px) 50vw, 100vw"
              style={{ objectPosition: image.focus }}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Scrim: only as much as the controls need to stay legible. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-4 px-gutter pb-7 lg:pb-9">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t.prev}
          className="rule-inverse flex h-11 w-11 shrink-0 items-center justify-center border text-paper-light/70 transition-colors duration-500 hover:border-vermilion hover:text-vermilion-light"
        >
          <svg viewBox="0 0 22 8" aria-hidden="true" className="h-2 w-5 rotate-180">
            <path d="M0 4h20M16 1l4 3-4 3" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t.next}
          className="rule-inverse flex h-11 w-11 shrink-0 items-center justify-center border text-paper-light/70 transition-colors duration-500 hover:border-vermilion hover:text-vermilion-light"
        >
          <svg viewBox="0 0 22 8" aria-hidden="true" className="h-2 w-5">
            <path d="M0 4h20M16 1l4 3-4 3" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>

        <div className="flex flex-1 items-center gap-2.5">
          {STUDIO_GALLERY.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t.galleryLabel} ${pad(i + 1)}`}
              aria-current={i === index ? 'true' : undefined}
              className="group py-2"
            >
              <span
                className={`block h-px w-6 transition-colors duration-500 ${
                  i === index ? 'bg-vermilion' : 'bg-paper-light/35 group-hover:bg-paper-light/70'
                }`}
              />
            </button>
          ))}
        </div>

        <p aria-live="polite" className="eyebrow shrink-0 text-paper-light/60">
          <span className="text-vermilion-light">{pad(index + 1)}</span> {t.counterOf} {pad(total)}
        </p>
      </div>
    </div>
  )
}
