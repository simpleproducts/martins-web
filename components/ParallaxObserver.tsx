'use client'

import { useEffect } from 'react'

/**
 * Gentle scroll parallax for anything marked `data-parallax="<strength>"`.
 * Strength is a multiplier in viewport-height units; 0.08 moves an element by
 * 8% of the viewport across its full travel. Only elements currently on screen
 * are written to, and the whole thing is skipped under reduced motion.
 */
export default function ParallaxObserver() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    if (nodes.length === 0) return

    const visible = new Set<HTMLElement>()
    let frame = 0

    const paint = () => {
      frame = 0
      const vh = window.innerHeight
      visible.forEach((node) => {
        const rect = node.getBoundingClientRect()
        // -1 above the fold, 0 centred, 1 below.
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh
        const strength = parseFloat(node.dataset.parallax || '0.08')
        node.style.setProperty('--parallax-y', `${(progress * strength * vh).toFixed(2)}px`)
      })
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(paint)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const node = entry.target as HTMLElement
          if (entry.isIntersecting) visible.add(node)
          else visible.delete(node)
        })
        onScroll()
      },
      { rootMargin: '20% 0px 20% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    paint()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      nodes.forEach((node) => node.style.removeProperty('--parallax-y'))
    }
  }, [])

  return null
}
