import Signature from '@/components/Signature'
import { SITE } from '@/lib/site'

/**
 * The lockup from the artwork: signature, spaced serif caps, hairline rule,
 * discipline underneath.
 */
export default function Wordmark({
  compact = false,
  withSignature = false,
  className = '',
}: {
  compact?: boolean
  withSignature?: boolean
  className?: string
}) {
  return (
    <span className={`inline-flex flex-col items-start leading-none ${className}`}>
      {withSignature ? (
        <Signature className="mb-2 h-6 w-28 opacity-80 sm:h-7 sm:w-32" />
      ) : null}
      <span
        className={`font-display font-medium uppercase ${
          compact ? 'text-[0.82rem] tracking-[0.24em]' : 'text-lg tracking-[0.28em] sm:text-xl'
        }`}
      >
        {SITE.wordmark.top}
      </span>
      <span
        aria-hidden="true"
        className={`rule my-1 w-full border-t ${compact ? 'my-[0.35em]' : 'my-2'}`}
      />
      <span
        className={`font-body uppercase ${
          compact
            ? 'text-[0.5rem] tracking-[0.42em]'
            : 'text-[0.6rem] tracking-[0.5em] sm:text-[0.7rem]'
        }`}
      >
        {SITE.wordmark.bottom}
      </span>
    </span>
  )
}
