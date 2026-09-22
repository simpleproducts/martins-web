import en from '@/lib/dictionaries/en'
import es from '@/lib/dictionaries/es'
import fr from '@/lib/dictionaries/fr'
import de from '@/lib/dictionaries/de'

export const LOCALES = ['en', 'es', 'fr', 'de'] as const
export type Locale = (typeof LOCALES)[number]

/** English renders at "/" — every other locale gets a path prefix. */
export const DEFAULT_LOCALE: Locale = 'en'

/** English is the source of truth for the copy shape. */
export type Dictionary = typeof en

const DICTIONARIES: Record<Locale, Dictionary> = { en, es, fr, de }

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}

/** Endonyms, plus the short label used in the header switcher. */
export const LOCALE_META: Record<Locale, { name: string; short: string; htmlLang: string }> = {
  en: { name: 'English', short: 'EN', htmlLang: 'en' },
  es: { name: 'Español', short: 'ES', htmlLang: 'es' },
  fr: { name: 'Français', short: 'FR', htmlLang: 'fr' },
  de: { name: 'Deutsch', short: 'DE', htmlLang: 'de' },
}

/** Public href for a locale's home page. English has no prefix. */
export function localeHref(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}`
}

/** Public href for an in-page anchor within a locale. */
export function sectionHref(locale: Locale, section: string): string {
  const base = locale === DEFAULT_LOCALE ? '' : `/${locale}`
  return `${base}/#${section}`
}

/**
 * Nav order. The photography slideshow is deliberately absent: it carries no
 * text of any kind, so it gets no label — it is a visual break between
 * Services and Contact rather than a destination.
 */
export const SECTIONS = ['home', 'about', 'works', 'services', 'contact'] as const
export type SectionId = (typeof SECTIONS)[number]
