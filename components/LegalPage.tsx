import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { reveal } from '@/lib/reveal'
import RevealObserver from '@/components/RevealObserver'
import { localeHref, type Dictionary, type Locale } from '@/lib/i18n'

type Document = Dictionary['legal']['impressum']

/**
 * Both legal pages are the same shape: a title, a line of introduction and a
 * run of headed blocks. Everything here is placeholder copy — see `legal` in
 * the dictionaries.
 */
export default function LegalPage({
  locale,
  dict,
  document,
}: {
  locale: Locale
  dict: Dictionary
  document: Document
}) {
  return (
    <>
      <Header locale={locale} dict={dict} />

      <main id="main" className="relative">
        <div className="mx-auto max-w-[110rem] px-gutter pt-[calc(var(--header-h)+5rem)] pb-28 lg:pb-40">
          <div className="rule-inverse grid grid-cols-12 gap-y-8 border-t pt-8">
            <p
              data-reveal
              style={reveal(0)}
              className="eyebrow col-span-12 text-vermilion-light lg:col-span-3"
            >
              {dict.footer.legalLabel}
            </p>
            <div className="col-span-12 lg:col-span-9">
              <h1
                data-reveal
                style={reveal(80)}
                className="font-display text-heading font-extralight tracking-[-0.02em] text-paper-light"
              >
                {document.title}
              </h1>
              <p
                data-reveal
                style={reveal(160)}
                className="text-balance-pretty mt-6 max-w-[52ch] text-lede font-light text-paper-light/70"
              >
                {document.intro}
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-12 lg:mt-24">
            <div className="col-span-12 lg:col-span-7 lg:col-start-4">
              {document.blocks.map((block, i) => (
                <section
                  key={block.heading}
                  data-reveal
                  style={reveal(i * 60)}
                  className="rule-inverse border-t py-8 first:border-t-0 first:pt-0"
                >
                  <h2 className="eyebrow text-paper-light/45">{block.heading}</h2>
                  <div className="mt-4 space-y-2 text-[1.0625rem] leading-[1.75] font-light text-paper-light/75">
                    {block.lines.map((line, j) => (
                      <p key={j} className="text-balance-pretty">
                        {line}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <p className="rule-inverse mt-6 border-t pt-8 text-sm leading-relaxed font-light text-paper-light/40">
                {dict.legal.disclaimer}
              </p>

              <a href={localeHref(locale)} className="link-rule eyebrow mt-12 inline-flex text-vermilion-light">
                {dict.legal.backToSite}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer locale={locale} dict={dict} />
      <RevealObserver />
    </>
  )
}
