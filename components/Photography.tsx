'use client'

import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'
import type { Dictionary } from '@/lib/i18n'
import { PHOTOGRAPHY } from '@/lib/site'

/**
 * Wordless, edge to edge. The photographs run full-bleed and carry no title,
 * caption or counter — the only visible controls are two chevrons that surface
 * on hover and a row of hairlines along the bottom. Every label here is for
 * assistive technology and never renders on screen.
 */
export default function Photography({ dict }: { dict: Dictionary }) {
  const t = dict.photography
  const total = PHOTOGRAPHY.length
  const [index, setIndex] = useState(0)
  const drag = useRef({ x: 0, active: false })

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total],
  )

  return (
    <section
      id="photography"
      aria-label={t.label}
      aria-roledescription="carousel"
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
        if (Math.abs(travel) > 56) go(travel < 0 ? 1 : -1)
      }}
      onPointerCancel={() => {
        drag.current.active = false
      }}
      className="void-ground group/stage relative h-[72svh] w-full touch-pan-y overflow-hidden select-none lg:h-[92svh]"
    >
      <div
        className="flex h-full w-full transition-transform duration-[1100ms] ease-ink"
        style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
      >
        {PHOTOGRAPHY.map((photo, i) => (
          <div key={i} aria-hidden={i === index ? undefined : true} className="relative h-full w-full shrink-0">
            <Image
              src={photo.src}
              alt={i === index ? t.imageAlt : ''}
              fill
              sizes="100vw"
              style={{ objectPosition: photo.focus }}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Edges: a wide invisible hit zone each side, with a chevron that only
          surfaces on hover or focus. */}
      <button
        type="button"
        onClick={() => go(-1)}
        aria-label={t.prev}
        className="absolute inset-y-0 left-0 z-20 flex w-[22%] items-center justify-start px-gutter text-paper-light/0 transition-colors duration-700 hover:text-paper-light/85 focus-visible:text-paper-light/85"
      >
        <svg viewBox="0 0 22 8" aria-hidden="true" className="h-3 w-8 rotate-180">
          <path d="M0 4h20M16 1l4 3-4 3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => go(1)}
        aria-label={t.next}
        className="absolute inset-y-0 right-0 z-20 flex w-[22%] items-center justify-end px-gutter text-paper-light/0 transition-colors duration-700 hover:text-paper-light/85 focus-visible:text-paper-light/85"
      >
        <svg viewBox="0 0 22 8" aria-hidden="true" className="h-3 w-8">
          <path d="M0 4h20M16 1l4 3-4 3" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </button>

      {/* Hairline indicators, low on the frame. */}
      <div className="absolute inset-x-0 bottom-6 z-20 flex justify-center gap-2 lg:bottom-9 lg:gap-3">
        {PHOTOGRAPHY.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`${t.goTo} ${i + 1}`}
            aria-current={i === index ? 'true' : undefined}
            className="group/dot px-1 py-3"
          >
            <span
              className={`block h-px w-8 transition-colors duration-700 lg:w-12 ${
                i === index
                  ? 'bg-vermilion'
                  : 'bg-paper-light/30 group-hover/dot:bg-paper-light/70'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Just enough shading at the edges to keep the controls legible. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/35 via-transparent to-black/45"
      />
    </section>
  )
}
