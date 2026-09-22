'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Wordmark from '@/components/Wordmark'
import {
  LOCALES,
  LOCALE_META,
  SECTIONS,
  localeHref,
  sectionHref,
  type Dictionary,
  type Locale,
  type SectionId,
} from '@/lib/i18n'

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false)
  const [onDark, setOnDark] = useState(false)
  const [active, setActive] = useState<SectionId>('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLElement>(null)

  const labels: Record<SectionId, string> = {
    home: dict.nav.home,
    about: dict.nav.about,
    works: dict.nav.works,
    contact: dict.nav.contact,
  }

  /* Scroll state: shrink the bar, invert it over the dark gallery, and track
     which section owns the viewport. One rAF-throttled listener does all three. */
  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      const headerPx = headerRef.current?.offsetHeight ?? 72

      setScrolled(window.scrollY > 24)

      const works = document.getElementById('works')
      if (works) {
        const rect = works.getBoundingClientRect()
        setOnDark(rect.top <= headerPx * 0.6 && rect.bottom >= headerPx * 0.6)
      }

      // The active section is the last one whose top has passed the header.
      let current: SectionId = 'home'
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top - headerPx - 8 <= 0) current = id
      }
      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  /* Lock the page behind the mobile overlay, and close everything on Escape. */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setMenuOpen(false)
      setLangOpen(false)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [])

  /* Keep the reader where they are when they change language. */
  const switchLocale = useCallback((event: React.MouseEvent<HTMLAnchorElement>, next: Locale) => {
    event.preventDefault()
    const hash = window.location.hash
    window.location.href = `${localeHref(next)}${hash && hash !== '#home' ? hash : ''}`
  }, [])

  const inverse = onDark && !menuOpen

  return (
    <>
      <a
        href="#main"
        className="eyebrow sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-bone focus:no-underline"
      >
        {dict.nav.skipToContent}
      </a>

      <header
        ref={headerRef}
        className={[
          'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter,color] duration-700',
          inverse ? 'text-paper-light' : 'text-ink',
          scrolled && !inverse ? 'bg-paper/92 shadow-[0_1px_0_0_rgba(23,19,15,0.14)] backdrop-blur-md' : '',
          scrolled && inverse ? 'bg-ink/85 shadow-[0_1px_0_0_rgba(250,243,231,0.14)] backdrop-blur-md' : '',
        ].join(' ')}
      >
        <div className="mx-auto flex h-[var(--header-h)] max-w-[110rem] items-center justify-between px-gutter">
          <a
            href={sectionHref(locale, 'home')}
            className="group -my-1 py-1"
            aria-label={`${dict.nav.home} — Georg Martin`}
          >
            <Wordmark compact className="transition-opacity duration-500 group-hover:opacity-60" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={sectionHref(locale, id)}
                data-active={active === id}
                aria-current={active === id ? 'true' : undefined}
                className="link-rule eyebrow py-1 transition-opacity duration-500 data-[active=false]:opacity-65 hover:opacity-100"
              >
                {labels[id]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div ref={langRef} className="relative hidden md:block">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                aria-label={dict.nav.language}
                className={[
                  'eyebrow flex items-center gap-2 border px-3 py-2 transition-colors duration-500',
                  inverse
                    ? 'rule-inverse hover:bg-paper-light/10'
                    : 'rule hover:bg-ink/5',
                ].join(' ')}
              >
                {LOCALE_META[locale].short}
                <svg
                  viewBox="0 0 10 6"
                  className={`h-[5px] w-[9px] transition-transform duration-500 ${langOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                >
                  <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>

              <div
                role="listbox"
                aria-label={dict.nav.language}
                className={[
                  'absolute right-0 top-[calc(100%+0.5rem)] min-w-[11rem] origin-top-right border p-1 transition-all duration-400',
                  inverse ? 'rule-inverse bg-ink/95 text-paper-light' : 'rule bg-bone/95 text-ink',
                  'backdrop-blur-md',
                  langOpen
                    ? 'pointer-events-auto scale-100 opacity-100'
                    : 'pointer-events-none scale-95 opacity-0',
                ].join(' ')}
              >
                {LOCALES.map((l) => (
                  <a
                    key={l}
                    href={localeHref(l)}
                    hrefLang={l}
                    role="option"
                    aria-selected={l === locale}
                    onClick={(e) => switchLocale(e, l)}
                    className={[
                      'flex items-center justify-between gap-6 px-3 py-2 text-sm transition-colors duration-300',
                      l === locale
                        ? 'text-vermilion'
                        : inverse
                          ? 'hover:bg-paper-light/10'
                          : 'hover:bg-ink/5',
                    ].join(' ')}
                  >
                    <span className="font-display font-normal tracking-wide">{LOCALE_META[l].name}</span>
                    <span className="eyebrow opacity-60">{LOCALE_META[l].short}</span>
                  </a>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={dict.nav.openMenu}
              aria-expanded={menuOpen}
              className="group -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
            >
              <span className="flex w-6 flex-col gap-[6px]">
                <span className="h-px w-full bg-current transition-transform duration-500 group-hover:translate-x-1" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-2/3 bg-current transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={[
          'ink-ground grain fixed inset-0 z-[60] flex flex-col md:hidden',
          'transition-[opacity,visibility] duration-600',
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-[var(--header-h)] items-center justify-between px-gutter text-paper-light">
          <Wordmark compact />
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label={dict.nav.closeMenu}
            className="-mr-2 flex h-11 w-11 items-center justify-center"
            tabIndex={menuOpen ? 0 : -1}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
              <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
          </button>
        </div>

        <nav
          aria-label="Primary mobile"
          className="relative z-10 flex flex-1 flex-col justify-center gap-2 px-gutter"
        >
          {SECTIONS.map((id, i) => (
            <a
              key={id}
              href={sectionHref(locale, id)}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              style={{ transitionDelay: menuOpen ? `${120 + i * 70}ms` : '0ms' }}
              className={[
                'font-display text-[clamp(2.5rem,12vw,4.25rem)] font-extralight leading-[1.1] text-paper-light transition-all duration-700',
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
              ].join(' ')}
            >
              <span className="eyebrow mr-4 align-super text-[0.55rem] text-vermilion-light">
                0{i + 1}
              </span>
              {labels[id]}
            </a>
          ))}
        </nav>

        <div className="rule-inverse relative z-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t px-gutter py-6 text-paper-light">
          <span className="eyebrow opacity-50">{dict.nav.language}</span>
          {LOCALES.map((l) => (
            <a
              key={l}
              href={localeHref(l)}
              hrefLang={l}
              tabIndex={menuOpen ? 0 : -1}
              onClick={(e) => switchLocale(e, l)}
              className={`eyebrow transition-opacity duration-300 ${
                l === locale ? 'text-vermilion-light' : 'opacity-70 hover:opacity-100'
              }`}
            >
              {LOCALE_META[l].short}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
