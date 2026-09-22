import { DEFAULT_LOCALE, LOCALES, type Locale } from '@/lib/locales'

/**
 * Pick the language the visitor's browser asks for.
 *
 * `Accept-Language: de-CH,de;q=0.9,en-GB;q=0.8` is read in quality order and
 * matched on the base tag, so `de-CH` still finds German and `en-GB` still
 * finds English. Anything we do not speak is skipped; English is the fallback.
 */
export function negotiateLocale(header: string | null | undefined): Locale {
  if (!header) return DEFAULT_LOCALE

  const ranked = header
    .split(',')
    .map((entry) => {
      const [tag, ...params] = entry.trim().split(';')
      const q = params.find((param) => param.trim().startsWith('q='))
      const quality = q ? Number.parseFloat(q.split('=')[1]) : 1
      return { tag: tag.trim().toLowerCase(), quality: Number.isFinite(quality) ? quality : 0 }
    })
    .filter((entry) => entry.tag.length > 0 && entry.quality > 0)
    // Sorting is stable, so equal qualities keep the browser's own order.
    .sort((a, b) => b.quality - a.quality)

  for (const { tag } of ranked) {
    if (tag === '*') return DEFAULT_LOCALE
    const base = tag.split('-')[0]
    const match = LOCALES.find((locale) => locale === base)
    if (match) return match
  }

  return DEFAULT_LOCALE
}
