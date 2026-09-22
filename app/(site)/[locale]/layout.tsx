import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Raleway } from 'next/font/google'
import { DEFAULT_LOCALE, LOCALES, getDictionary, isLocale, localeHref, type Locale } from '@/lib/i18n'
import { SITE } from '@/lib/site'
import '@/app/globals.css'

/**
 * Raleway throughout, used across its full weight range: extra-light at
 * display sizes for the editorial air, medium for small-caps labels.
 */
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['200', '300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}

  const dict = getDictionary(locale)
  const canonical = localeHref(locale)

  return {
    metadataBase: new URL(SITE.url),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, localeHref(l)])),
        'x-default': localeHref(DEFAULT_LOCALE),
      },
    },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale,
      title: dict.meta.title,
      description: dict.meta.description,
      url: canonical,
      images: [{ url: '/artwork/placeholder.jpg', width: 1638, height: 2048, alt: dict.meta.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.title,
      description: dict.meta.description,
      images: ['/artwork/placeholder.jpg'],
    },
    icons: { icon: '/favicon.svg' },
  }
}

export const viewport = {
  themeColor: '#e7d6bb',
  colorScheme: 'light' as const,
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html lang={locale satisfies Locale} className={raleway.variable}>
      <body className="paper-ground grain min-h-dvh antialiased">{children}</body>
    </html>
  )
}
