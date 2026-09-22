'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/lib/i18n'
import { ORIGINALS } from '@/lib/site'

/** Magnification, and the diameter of the glass, in pixels. */
const ZOOM = 2.6
const LENS = 208

type Lens = { x: number; y: number; w: number; h: number }

/**
 * The original, full size, with a magnifier that follows the cursor — the
 * closest thing to leaning in at the studio. A native <dialog> so focus
 * trapping, Esc and the inert backdrop come from the platform.
 *
 * The frame is sized to the piece's own proportions, so the picture fills it
 * exactly and the glass can map cursor position straight onto the artwork. The
 * glass reads the source file rather than the optimised image: it is the same
 * picture at a size no srcset entry would cover.
 */
export default function PieceZoom({
  index,
  dict,
  onClose,
}: {
  index: number | null
  dict: Dictionary
  onClose: () => void
}) {
  const ref = useRef<HTMLDialogElement>(null)
  const [lens, setLens] = useState<Lens | null>(null)
  const fine = useRef(false)

  const t = dict.services
  const piece = index === null ? null : ORIGINALS[index]
  const copy = index === null ? null : t.items.originals.pieces[index]

  useEffect(() => {
    fine.current = window.matchMedia('(pointer: fine)').matches
  }, [])

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (index !== null && !dialog.open) dialog.showModal()
    if (index === null && dialog.open) dialog.close()
    setLens(null)
  }, [index])

  useEffect(() => {
    if (index === null) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [index])

  const track = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!fine.current) return
    const rect = event.currentTarget.getBoundingClientRect()
    setLens({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      w: rect.width,
      h: rect.height,
    })
  }

  return (
    <dialog
      ref={ref}
      aria-label={copy?.title ?? t.items.originals.title}
      onClose={onClose}
      onClick={(event) => {
        // Clicks that land on the dialog box itself are outside the sheet.
        if (event.target === ref.current) onClose()
      }}
      className="m-auto max-h-none w-[min(72rem,calc(100vw-2rem))] max-w-none bg-transparent p-0 text-paper-light backdrop:bg-ink/90 backdrop:backdrop-blur-sm"
    >
      {piece && copy ? (
        <div className="ink-ground grain relative px-5 py-6 sm:px-10 sm:py-10">
          <div className="rule-inverse flex items-start justify-between gap-8 border-b pb-5">
            <div>
              <h3 className="font-display text-[clamp(1.25rem,2.4vw,1.8rem)] leading-snug font-light text-paper-light">
                {copy.title}
              </h3>
              <p className="mt-2 text-sm font-light text-paper-light/55">{copy.medium}</p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-3">
              <span className="eyebrow text-vermilion-light">{piece.price}</span>
              <button
                type="button"
                onClick={() => ref.current?.close()}
                className="link-rule eyebrow py-1 text-paper-light/70"
              >
                {t.closePiece}
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div
              onPointerMove={track}
              onPointerLeave={() => setLens(null)}
              style={{
                aspectRatio: `${piece.w} / ${piece.h}`,
                width: `min(100%, calc(62svh * ${piece.w} / ${piece.h}))`,
              }}
              className="plate plate-inverse relative cursor-zoom-in select-none"
            >
              <Image
                src={piece.src}
                alt={copy.title}
                fill
                draggable={false}
                sizes="(min-width: 1024px) 60vw, 92vw"
                className="object-cover"
              />

              {lens ? (
                <span
                  aria-hidden="true"
                  style={{
                    left: lens.x - LENS / 2,
                    top: lens.y - LENS / 2,
                    width: LENS,
                    height: LENS,
                    backgroundImage: `url(${piece.src})`,
                    backgroundSize: `${lens.w * ZOOM}px ${lens.h * ZOOM}px`,
                    backgroundPosition: `${LENS / 2 - lens.x * ZOOM}px ${LENS / 2 - lens.y * ZOOM}px`,
                  }}
                  className="pointer-events-none absolute rounded-full border border-paper-light/50 bg-ink-deep shadow-[0_30px_70px_-25px_rgba(0,0,0,0.95)]"
                />
              ) : null}
            </div>
          </div>

          {/* The glass follows a cursor, so the line only belongs to devices
              that have one. */}
          <p className="eyebrow mt-6 hidden text-center text-paper-light/40 [@media(pointer:fine)]:block">
            {t.zoomHint}
          </p>
        </div>
      ) : null}
    </dialog>
  )
}
