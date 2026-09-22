'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import ContactForm from '@/components/ContactForm'
import type { Dictionary } from '@/lib/i18n'

/**
 * The "Message" channel. A native <dialog> so focus trapping, Esc and the
 * inert backdrop come from the platform rather than from us; the form inside
 * is remounted on every open so a previous send does not linger.
 */
export default function ContactDialog({ dict }: { dict: Dictionary }) {
  const ref = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  const close = useCallback(() => ref.current?.close(), [])

  useEffect(() => {
    if (!open) return
    // The page must not scroll behind the sheet.
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true)
          ref.current?.showModal()
        }}
        className="link-rule font-display text-[clamp(1.05rem,1.6vw,1.35rem)] font-light"
      >
        {dict.contact.messageCta}
      </button>

      <dialog
        ref={ref}
        aria-label={dict.contact.messageLabel}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // Clicks that land on the dialog box itself are outside the sheet.
          if (event.target === ref.current) close()
        }}
        className="m-auto w-[min(46rem,calc(100vw-2rem))] max-w-none bg-paper p-0 text-ink backdrop:bg-ink/75"
      >
        <div className="paper-ground max-h-[85svh] overflow-y-auto px-6 py-10 text-left sm:px-12 sm:py-14">
          <div className="flex items-start justify-between gap-8">
            <p className="eyebrow text-ink-faint">{dict.contact.messageLabel}</p>
            <button
              type="button"
              onClick={close}
              className="link-rule eyebrow -mt-1 py-1 text-ink-soft"
            >
              {dict.contact.closeForm}
            </button>
          </div>

          {open ? <ContactForm dict={dict} /> : null}
        </div>
      </dialog>
    </>
  )
}
