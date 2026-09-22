import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LegalPage from '@/components/LegalPage'
import { DEFAULT_LOCALE, LOCALES, getDictionary, isLocale, pageHref } from '@/lib/i18n'
import { SITE } from '@/lib/site'

const SLUG = 'impressum'

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
  const doc = dict.legal.impressum

  return {
    metadataBase: new URL(SITE.url),
    title: `${doc.title} — ${SITE.name}`,
    description: doc.intro,
    alternates: {
      canonical: pageHref(locale, SLUG),
      languages: {
        ...Object.fromEntries(LOCALES.map((l) => [l, pageHref(l, SLUG)])),
        'x-default': pageHref(DEFAULT_LOCALE, SLUG),
      },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = getDictionary(locale)
  return <LegalPage locale={locale} dict={dict} document={dict.legal.impressum} />
}
