import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Works from '@/components/Works'
import Services from '@/components/Services'
import Photography from '@/components/Photography'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import RevealObserver from '@/components/RevealObserver'
import ParallaxObserver from '@/components/ParallaxObserver'
import { getDictionary, isLocale, localeHref } from '@/lib/i18n'
import { SITE } from '@/lib/site'

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  const dict = getDictionary(locale)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: new URL(localeHref(locale), SITE.url).toString(),
    jobTitle: dict.hero.eyebrow,
    email: `mailto:${SITE.email}`,
    address: { '@type': 'PostalAddress', addressLocality: SITE.city },
    sameAs: SITE.socials.map((s) => s.href),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header locale={locale} dict={dict} />
      <main id="main">
        <Hero dict={dict} />
        <Works dict={dict} />
        <Services dict={dict} />
        <Photography dict={dict} />
        <Contact dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
      <RevealObserver />
      <ParallaxObserver />
    </>
  )
}
