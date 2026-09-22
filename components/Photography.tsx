'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import type { Dictionary } from '@/lib/i18n'
import { PHOTOGRAPHY, SITE } from '@/lib/site'
import { useSwipe } from '@/lib/useSwipe'

/**
 * Photographs, full width and wordless but for one line each.
 *
 * The section is a little taller than the viewport and the frame inside it is
 * pinned, so scrolling past holds the pictures at full screen for a moment —
 * long enough to stop on them on purpose, short enough that nobody scrolling
 * to the contact details is trapped. The scroll never changes the picture:
 * swiping, the chevrons, the hairlines and the arrow keys do. The last frame
 * is not a photograph at all but the photographer's own words.
 */
export default function Photography({ dict }: { dict: Dictionary }) {
  const t = dict.photography
  const total = PHOTOGRAPHY.length + 1
  const [index, setIndex] = useState(0)

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total],
  )

  const swipe = useSwipe({ onSwipe: go })
  const statement = index === total - 1

  return (
    <section id="photography" aria-label={t.label} className="relative h-[132svh]">
      <div
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
        onPointerDown={swipe.onPointerDown}
        className="void-ground group/stage sticky top-0 h-svh w-full cursor-grab touch-pan-y overflow-hidden select-none active:cursor-grabbing"
      >
        {PHOTOGRAPHY.map((photo, i) => {
          const active = i === index
          return (
            <figure
              key={i}
              aria-hidden={active ? undefined : true}
              className={`absolute inset-0 transition-[opacity,transform] duration-[1100ms] ease-ink ${
                active ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'
              }`}
            >
              <Image
                src={photo.src}
                alt={active ? t.imageAlt : ''}
                fill
                draggable={false}
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
          aria-hidden={statement ? undefined : true}
          className={`absolute inset-0 flex items-center justify-center px-gutter transition-opacity duration-[1100ms] ease-ink ${
            statement ? 'opacity-100' : 'pointer-events-none opacity-0'
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

        {/* Edges: a wide invisible hit zone each side, with a chevron that only
            surfaces on hover or focus. */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={t.prev}
          className="absolute inset-y-0 left-0 z-20 flex w-[20%] items-center justify-start px-gutter text-paper-light/0 transition-colors duration-700 hover:text-paper-light/85 focus-visible:text-paper-light/85"
        >
          <svg viewBox="0 0 22 8" aria-hidden="true" className="h-3 w-8 rotate-180">
            <path d="M0 4h20M16 1l4 3-4 3" fill="none" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label={t.next}
          className="absolute inset-y-0 right-0 z-20 flex w-[20%] items-center justify-end px-gutter text-paper-light/0 transition-colors duration-700 hover:text-paper-light/85 focus-visible:text-paper-light/85"
        >
          <svg viewBox="0 0 22 8" aria-hidden="true" className="h-3 w-8">
            <path d="M0 4h20M16 1l4 3-4 3" fill="none" stroke="currentColor" strokeWidth="0.8" />
          </svg>
        </button>

        {/* Hairline indicators, low on the frame. */}
        <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center gap-2 lg:bottom-10 lg:gap-3">
          {Array.from({ length: total }, (_, i) => (
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
