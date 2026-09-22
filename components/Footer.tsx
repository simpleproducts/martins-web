import Wordmark from '@/components/Wordmark'
import {
  LOCALES,
  LOCALE_META,
  SECTIONS,
  localeHref,
  pageHref,
  sectionHref,
  type Dictionary,
  type Locale,
} from '@/lib/i18n'
import { SITE } from '@/lib/site'

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const labels: Record<(typeof SECTIONS)[number], string> = {
    home: dict.nav.home,
    works: dict.nav.works,
    services: dict.nav.services,
    contact: dict.nav.contact,
  }

  const legalPages = [
    { slug: 'impressum', label: dict.legal.impressum.title },
    { slug: 'privacy', label: dict.legal.privacy.title },
  ]

  return (
    <footer className="ink-ground grain relative text-paper-light">
      <div className="mx-auto max-w-[110rem] px-gutter py-16 lg:py-20">
        <div className="grid grid-cols-12 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <a href={sectionHref(locale, 'home')} className="inline-block">
              <Wordmark withSignature />
            </a>
            <p className="mt-6 max-w-[32ch] text-sm leading-relaxed font-light text-paper-light/60">
              {dict.footer.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="col-span-6 lg:col-span-2">
            <p className="eyebrow text-paper-light/55">{dict.nav.home}</p>
            <ul className="mt-5 space-y-2.5">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <a
                    href={sectionHref(locale, id)}
                    className="link-rule text-sm font-light text-paper-light/80"
                  >
                    {labels[id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow text-paper-light/55">{dict.contact.socialsLabel}</p>
            <ul className="mt-5 space-y-2.5">
              {SITE.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-rule text-sm font-light text-paper-light/80"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow text-paper-light/55">{dict.footer.legalLabel}</p>
            <ul className="mt-5 space-y-2.5">
              {legalPages.map((page) => (
                <li key={page.slug}>
                  <a
                    href={pageHref(locale, page.slug)}
                    className="link-rule text-sm font-light text-paper-light/80"
                  >
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-2">
            <p className="eyebrow text-paper-light/55">{dict.nav.language}</p>
            <ul className="mt-5 space-y-2.5">
              {LOCALES.map((l) => (
                <li key={l}>
                  <a
                    href={localeHref(l)}
                    hrefLang={l}
                    aria-current={l === locale ? 'true' : undefined}
                    className={`link-rule text-sm font-light ${
                      l === locale ? 'text-vermilion-light' : 'text-paper-light/80'
                    }`}
                  >
                    {LOCALE_META[l].name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-inverse mt-16 flex flex-col gap-4 border-t pt-6 text-xs tracking-wide text-paper-light/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {dict.footer.rights}
          </p>
          <p className="sm:text-right">{dict.footer.credit}</p>
          <a href={sectionHref(locale, 'home')} className="link-rule self-start sm:self-auto">
            {dict.footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  )
}
