import { NextResponse, type NextRequest } from 'next/server'
import { DEFAULT_LOCALE } from '@/lib/locales'
import { negotiateLocale } from '@/lib/negotiateLocale'

/**
 * Send a cold visitor to the language their browser asks for.
 *
 * Only the unprefixed paths are negotiated — they are the ones that would
 * otherwise always be English. `/es`, `/fr/impressum` and the rest are explicit
 * and are left exactly as requested.
 *
 * Nothing is stored: no cookie, no browser storage. The consequence is that a
 * choice is remembered only as long as the visitor stays on a prefixed URL, so
 * a request that came from our own pages — picking "English" in the switcher
 * lands here — is left alone rather than negotiated back again.
 */
const ROOT_PATHS = ['/', '/impressum', '/privacy']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!ROOT_PATHS.includes(pathname)) return NextResponse.next()

  // Client-side navigations and prefetches ask for the route they were told to
  // ask for; negotiating those would fight the app's own routing.
  if (request.headers.get('rsc') || request.headers.get('next-router-prefetch')) {
    return NextResponse.next()
  }

  if (cameFromUs(request)) return NextResponse.next()

  const locale = negotiateLocale(request.headers.get('accept-language'))
  if (locale === DEFAULT_LOCALE) return vary(NextResponse.next())

  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  return vary(NextResponse.redirect(url, 307))
}

/** The answer depends on the request's own headers, so no cache may reuse it. */
function vary(response: NextResponse) {
  response.headers.set('Vary', 'Accept-Language, Referer')
  response.headers.set('Cache-Control', 'no-store')
  return response
}

function cameFromUs(request: NextRequest) {
  const referer = request.headers.get('referer')
  if (!referer) return false
  try {
    return new URL(referer).host === (request.headers.get('host') ?? request.nextUrl.host)
  } catch {
    return false
  }
}

export const config = {
  matcher: ['/', '/impressum', '/privacy'],
}
