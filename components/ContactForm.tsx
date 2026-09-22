'use client'

import { useId, useState } from 'react'
import type { Dictionary } from '@/lib/i18n'

type FieldName = 'name' | 'email' | 'subject' | 'message'
type Errors = Partial<Record<FieldName, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/**
 * Presentation-complete contact form. Validation and states are real; the
 * submit handler is deliberately a stub — wire it to a mail provider
 * (Formspree, Resend, a route handler) by replacing `deliver()` below.
 */
export default function ContactForm({ dict }: { dict: Dictionary }) {
  const t = dict.contact.form
  const uid = useId()
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const validate = (state = values): Errors => {
    const next: Errors = {}
    if (!state.name.trim()) next.name = t.errorRequired
    if (!state.email.trim()) next.email = t.errorRequired
    else if (!EMAIL_RE.test(state.email.trim())) next.email = t.errorEmail
    if (!state.message.trim()) next.message = t.errorRequired
    return next
  }

  const update = (field: FieldName, value: string) => {
    const next = { ...values, [field]: value }
    setValues(next)
    if (touched[field]) setErrors(validate(next))
  }

  const blur = (field: FieldName) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    setErrors(validate())
  }

  async function deliver(payload: Record<FieldName, string>) {
    // TODO: replace with a real transport. Kept as a delay so the sending and
    // success states are exercised exactly as they will be in production.
    await new Promise((resolve) => setTimeout(resolve, 900))
    if (process.env.NODE_ENV === 'development') console.info('[contact] payload', payload)
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate()
    setErrors(found)
    setTouched({ name: true, email: true, subject: true, message: true })

    const firstBad = (['name', 'email', 'subject', 'message'] as const).find((f) => found[f])
    if (firstBad) {
      document.getElementById(`${uid}-${firstBad}`)?.focus()
      return
    }

    setStatus('sending')
    await deliver(values)
    setStatus('sent')
  }

  const reset = () => {
    setValues({ name: '', email: '', subject: '', message: '' })
    setErrors({})
    setTouched({})
    setStatus('idle')
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="rule flex min-h-[22rem] flex-col justify-center border-t pt-10 lg:min-h-[28rem]"
      >
        <span aria-hidden="true" className="mb-6 block h-px w-16 bg-vermilion" />
        <p className="text-balance-pretty font-display text-[clamp(1.35rem,2.4vw,1.9rem)] leading-[1.3] font-light">
          {t.success}
        </p>
        <p className="eyebrow mt-5 text-ink-faint">{t.successNote}</p>
        <button type="button" onClick={reset} className="link-rule eyebrow mt-10 self-start py-1">
          {t.reset}
        </button>
      </div>
    )
  }

  const fields: Array<{
    name: FieldName
    label: string
    placeholder: string
    type: 'text' | 'email' | 'textarea'
    required: boolean
    autoComplete?: string
  }> = [
    { name: 'name', label: t.name, placeholder: t.namePlaceholder, type: 'text', required: true, autoComplete: 'name' },
    { name: 'email', label: t.email, placeholder: t.emailPlaceholder, type: 'email', required: true, autoComplete: 'email' },
    { name: 'subject', label: t.subject, placeholder: t.subjectPlaceholder, type: 'text', required: false },
    { name: 'message', label: t.message, placeholder: t.messagePlaceholder, type: 'textarea', required: true },
  ]

  return (
    <form noValidate onSubmit={onSubmit} className="rule border-t pt-10">
      <div className="space-y-9">
        {fields.map((field) => {
          const id = `${uid}-${field.name}`
          const error = touched[field.name] ? errors[field.name] : undefined
          const shared = {
            id,
            name: field.name,
            value: values[field.name],
            placeholder: field.placeholder,
            'aria-invalid': error ? (true as const) : undefined,
            'aria-describedby': error ? `${id}-error` : undefined,
            onBlur: () => blur(field.name),
            className: [
              'w-full border-0 border-b bg-transparent pt-2 pb-3 font-light text-ink',
              'placeholder:text-ink-faint/85 focus:outline-none',
              'transition-colors duration-400',
              error
                ? 'border-vermilion'
                : 'border-ink/20 hover:border-ink/40 focus:border-ink',
            ].join(' '),
          }

          return (
            <div key={field.name}>
              <label htmlFor={id} className="eyebrow flex items-baseline gap-2 text-ink-faint">
                {field.label}
                {field.required ? (
                  <span aria-hidden="true" className="text-vermilion-deep">
                    *
                  </span>
                ) : null}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  {...shared}
                  rows={4}
                  onChange={(e) => update(field.name, e.target.value)}
                  className={`${shared.className} resize-y`}
                />
              ) : (
                <input
                  {...shared}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  onChange={(e) => update(field.name, e.target.value)}
                />
              )}

              {error ? (
                <p id={`${id}-error`} className="mt-2 text-xs tracking-wide text-vermilion-deep">
                  {error}
                </p>
              ) : null}
            </div>
          )
        })}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group mt-12 inline-flex items-center gap-3 bg-ink px-8 py-4 text-bone transition-colors duration-500 hover:bg-vermilion disabled:cursor-wait disabled:opacity-70"
      >
        <span className="eyebrow">{status === 'sending' ? t.sending : t.submit}</span>
        <svg viewBox="0 0 22 8" aria-hidden="true" className="h-2 w-5">
          <path
            d="M0 4h20M16 1l4 3-4 3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="transition-transform duration-500 group-hover:translate-x-1"
          />
        </svg>
      </button>
    </form>
  )
}
