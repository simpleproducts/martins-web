import en from '@/lib/dictionaries/en'
import es from '@/lib/dictionaries/es'
import fr from '@/lib/dictionaries/fr'
import de from '@/lib/dictionaries/de'
import type { Locale } from '@/lib/locales'

/** The routing side of i18n lives in `lib/locales` and is re-exported here, so
    components keep a single import and the proxy keeps a light one. */
export {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_META,
  isLocale,
  localeHref,
  pageHref,
  sectionHref,
  type Locale,
} from '@/lib/locales'

/** English is the source of truth for the copy shape. */
export type Dictionary = typeof en

const DICTIONARIES: Record<Locale, Dictionary> = { en, es, fr, de }

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}

/**
 * Nav order. The photography section is deliberately absent — it is a visual
 * break between Services and Contact rather than a destination — and the
 * introduction has no entry of its own because it shares the hero.
 */
export const SECTIONS = ['home', 'works', 'services', 'contact'] as const
export type SectionId = (typeof SECTIONS)[number]
