import type { CSSProperties } from 'react'

/** Stagger helper: `style={reveal(120)}` delays a reveal by 120ms. */
export function reveal(delayMs: number, offsetY?: string): CSSProperties {
  return {
    '--reveal-delay': `${delayMs}ms`,
    ...(offsetY ? { '--reveal-y': offsetY } : {}),
  } as CSSProperties
}
