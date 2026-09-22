/**
 * Locale list and URL helpers, kept free of the dictionaries so the proxy can
 * negotiate a language without pulling every translation into its bundle.
 */
export const LOCALES = ['en', 'es', 'fr', 'de'] as const
export type Locale = (typeof LOCALES)[number]

/** English renders at "/" — every other locale gets a path prefix. */
export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
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

/** Public href for a standalone page (the legal pages) within a locale. */
export function pageHref(locale: Locale, slug: string): string {
  return locale === DEFAULT_LOCALE ? `/${slug}` : `/${locale}/${slug}`
}
