'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import type { Dictionary } from '@/lib/i18n'
import { useSwipe } from '@/lib/useSwipe'
import { ARTWORK } from '@/lib/site'

const pad = (n: number) => String(n).padStart(2, '0')

/** How far a card sits from the centre, and how small it gets, per depth. */
const SHIFT = [0, 44, 74] // percent of the card's own width
const SCALE = [1, 0.82, 0.66]
const TILT = [0, 2.5, 4] // degrees, away from the centre
const OPACITY = [1, 0.5, 0.2]
const DEPTH = SHIFT.length - 1 // cards deeper than this are parked and hidden

type Piece = Dictionary['works']['pieces'][number]

export default function WorksCarousel({ dict }: { dict: Dictionary }) {
  const pieces = dict.works.pieces as readonly Piece[]
  const total = pieces.length
  const [index, setIndex] = useState(0)

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total],
  )

  const swipe = useSwipe({ onSwipe: go })

  /** Signed distance from the active card, taking the shorter way round. */
  const distance = (i: number) => {
    let d = i - index
    if (d > total / 2) d -= total
    if (d < -total / 2) d += total
    return d
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      go(-1)
    } else if (event.key === 'ArrowRight') {
      event.preventDefault()
      go(1)
    }
  }

  const active = pieces[index]

  return (
    <div className="relative mx-auto grid w-full max-w-[110rem] grid-cols-12 items-center gap-x-8 gap-y-12 px-gutter">
      {/* The stack. Cards fan out to the left and right of the active one. */}
      <div className="col-span-12 lg:col-span-7">
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label={dict.works.heading}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={swipe.onPointerDown}
          ref={swipe.wheelRef}
          className="relative h-[clamp(22rem,58vh,34rem)] cursor-grab touch-pan-y select-none active:cursor-grabbing lg:h-[min(64vh,38rem)]"
        >
          {pieces.map((piece, i) => {
            const d = distance(i)
            const depth = Math.min(Math.abs(d), DEPTH)
            const side = Math.sign(d)
            const beyond = Math.abs(d) > DEPTH
            const isActive = d === 0

            return (
              <button
                key={piece.title}
                type="button"
                tabIndex={isActive ? -1 : 0}
                aria-hidden={beyond ? true : undefined}
                aria-label={piece.title}
                aria-current={isActive ? 'true' : undefined}
                onClick={() => {
                  // A swipe that started on a side card would otherwise fire
                  // that card's click too, jumping twice.
                  if (swipe.consumeDrag()) return
                  if (!isActive) setIndex(i)
                }}
                style={{
                  transform: `translate3d(calc(-50% + ${side * SHIFT[depth]}%), 0, 0) scale(${
                    SCALE[depth]
                  }) rotate(${side * TILT[depth]}deg)`,
                  opacity: beyond ? 0 : OPACITY[depth],
                  zIndex: 30 - depth,
                }}
                className={[
                  'absolute top-0 left-1/2 h-full w-[68%] sm:w-[60%] lg:w-[54%]',
                  'transition-[transform,opacity,filter] duration-700 ease-ink',
                  isActive ? 'cursor-default' : 'cursor-pointer',
                  beyond ? 'pointer-events-none' : '',
                  !isActive && !beyond ? 'brightness-[0.55] hover:brightness-75' : '',
                ].join(' ')}
              >
                <span className="plate plate-inverse relative block h-full w-full p-3 sm:p-4">
                  <Image
                    src={ARTWORK[i % ARTWORK.length].src}
                    alt={isActive ? `${piece.title} — ${piece.medium}` : ''}
                    fill
                    draggable={false}
                    sizes="(min-width: 1024px) 40vw, 68vw"
                    className="object-contain p-3 sm:p-4"
                  />
                  <span
                    aria-hidden="true"
                    className="rule-inverse pointer-events-none absolute inset-3 border sm:inset-4"
                  />
                </span>
              </button>
            )
          })}
        </div>

        {/* Controls sit under the stack so they never cover the artwork. */}
        <div className="mt-8 flex items-center justify-center gap-6 lg:mt-10">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={dict.works.prev}
            className="rule-inverse group flex h-11 w-11 items-center justify-center border text-paper-light/70 transition-colors duration-500 hover:border-vermilion hover:text-vermilion-light"
          >
            <svg viewBox="0 0 22 8" aria-hidden="true" className="h-2 w-5 rotate-180">
              <path d="M0 4h20M16 1l4 3-4 3" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>

          <div className="flex items-center gap-2.5">
            {pieces.map((piece, i) => (
              <button
                key={piece.title}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={piece.title}
                aria-current={i === index ? 'true' : undefined}
                className="group p-2"
              >
                <span
                  className={`block h-px w-6 transition-colors duration-500 ${
                    i === index
                      ? 'bg-vermilion'
                      : 'bg-paper-light/30 group-hover:bg-paper-light/70'
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label={dict.works.next}
            className="rule-inverse group flex h-11 w-11 items-center justify-center border text-paper-light/70 transition-colors duration-500 hover:border-vermilion hover:text-vermilion-light"
          >
            <svg viewBox="0 0 22 8" aria-hidden="true" className="h-2 w-5">
              <path d="M0 4h20M16 1l4 3-4 3" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Meta beside the stack — re-keyed so it fades in with each new card. */}
      <div aria-live="polite" className="col-span-12 lg:col-span-4 lg:col-start-9">
        <div key={index} className="animate-slide-in">
          <p className="eyebrow flex items-center gap-4 text-vermilion-light">
            <span aria-hidden="true" className="h-px w-8 bg-vermilion" />
            {dict.works.piece} {pad(index + 1)} {dict.works.of} {pad(total)}
          </p>

          <h3 className="text-balance-pretty mt-5 font-display text-[clamp(1.8rem,3.3vw,2.75rem)] leading-[1.1] font-light tracking-[-0.02em] text-paper-light">
            {active.title}
          </h3>

          <p className="rule-inverse mt-5 border-t pt-5 text-sm font-light tracking-wide text-paper-light/60">
            <span className="text-paper-light/85">{active.year}</span>
            <span aria-hidden="true" className="mx-3 opacity-40">
              /
            </span>
            {active.medium}
          </p>

          <p className="text-balance-pretty mt-6 max-w-[38ch] text-[1.0625rem] leading-[1.7] font-light text-paper-light/70">
            {active.caption}
          </p>
        </div>
      </div>
    </div>
  )
}
