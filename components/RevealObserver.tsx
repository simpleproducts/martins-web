'use client'

import { useEffect } from 'react'

/**
 * One observer for the whole page. Any server-rendered element carrying a
 * `data-reveal` attribute is released (`data-visible="true"`) the first time it
 * enters the viewport, so sections stay server components and ship no JS of
 * their own.
 */
export default function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (nodes.length === 0) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.setAttribute('data-visible', 'true'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.setAttribute('data-visible', 'true')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return null
}
