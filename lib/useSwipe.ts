'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type SwipeOptions = {
  /** Called once per gesture: 1 for a drag to the left (go forward), -1 back. */
  onSwipe: (direction: 1 | -1) => void
  /** Horizontal travel, in pixels, before a gesture counts as a swipe. */
  threshold?: number
  /** Report live travel in `offset` so a track can follow the finger. */
  follow?: boolean
}

/** Travel that marks a gesture as a drag rather than a click. */
const SLOP = 10

/** Quiet time, in ms, that ends a trackpad gesture. */
const WHEEL_IDLE = 150

/** Time, in ms, after a trackpad swipe fires before another can start. */
const MIN_GAP = 300

/**
 * Pointer-driven swiping, shared by every carousel.
 *
 * The move and release listeners live on the window rather than on the element,
 * so a gesture that wanders off the carousel — or off the page — still finishes,
 * and the click that follows a real drag can be swallowed with `consumeDrag()`.
 * Pointer capture would do the same job but re-targets the click to the
 * capturing element, which would break the arrows and dots inside the carousel.
 */
export function useSwipe({ onSwipe, threshold = 48, follow = false }: SwipeOptions) {
  const [offset, setOffset] = useState(0)
  const [dragging, setDragging] = useState(false)
  const start = useRef<{ x: number; y: number } | null>(null)
  const dragged = useRef(false)
  const detach = useRef<(() => void) | null>(null)

  useEffect(() => () => detach.current?.(), [])

  /**
   * Two-finger trackpad swipes arrive as horizontal wheel events. The listener
   * is attached natively because React's onWheel is passive: without
   * preventDefault() the browser claims a rightward swipe as "go back".
   *
   * One gesture moves one step. After it fires, the momentum tail macOS sends
   * once the fingers lift is ignored — momentum only ever slows down, so a
   * delta that climbs back up is a fresh swipe and unlocks straight away.
   */
  const wheelRef = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return
      const w = { travel: 0, locked: false, last: 0, firedAt: 0, floor: Infinity }

      const onWheel = (event: WheelEvent) => {
        const scale = event.deltaMode === 1 ? 16 : 1 // lines, from some mice
        const dx = event.deltaX * scale
        // Mostly vertical is a page scroll, not a swipe.
        if (Math.abs(dx) <= Math.abs(event.deltaY * scale)) return
        event.preventDefault()

        const now = event.timeStamp
        if (now - w.last > WHEEL_IDLE) {
          w.travel = 0
          w.locked = false
        }
        w.last = now

        if (w.locked) {
          w.floor = Math.min(w.floor, Math.abs(dx))
          const fresh = now - w.firedAt > MIN_GAP && Math.abs(dx) > w.floor * 2 + 4
          if (!fresh) return
          w.locked = false
          w.travel = 0
        }

        w.travel += dx
        if (Math.abs(w.travel) > threshold) {
          const direction = w.travel > 0 ? 1 : -1
          w.travel = 0
          w.locked = true
          w.firedAt = now
          w.floor = Infinity
          onSwipe(direction)
        }
      }

      node.addEventListener('wheel', onWheel, { passive: false })
      return () => node.removeEventListener('wheel', onWheel)
    },
    [onSwipe, threshold],
  )

  const onPointerDown = useCallback(
    (event: React.PointerEvent) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      detach.current?.()
      start.current = { x: event.clientX, y: event.clientY }
      dragged.current = false
      setDragging(true)

      const move = (e: PointerEvent) => {
        const from = start.current
        if (!from) return
        const dx = e.clientX - from.x
        if (Math.abs(dx) > SLOP) dragged.current = true
        if (follow && dragged.current) setOffset(dx)
      }

      const finish = (e: PointerEvent, cancelled: boolean) => {
        detach.current?.()
        const from = start.current
        start.current = null
        setDragging(false)
        if (follow) setOffset(0)
        if (!from || cancelled) return
        const dx = e.clientX - from.x
        const dy = e.clientY - from.y
        // A gesture that travelled further down than across is a scroll.
        if (Math.abs(dx) > threshold && Math.abs(dx) > Math.abs(dy)) onSwipe(dx < 0 ? 1 : -1)
      }

      const up = (e: PointerEvent) => finish(e, false)
      const cancel = (e: PointerEvent) => finish(e, true)

      window.addEventListener('pointermove', move)
      window.addEventListener('pointerup', up)
      window.addEventListener('pointercancel', cancel)
      detach.current = () => {
        window.removeEventListener('pointermove', move)
        window.removeEventListener('pointerup', up)
        window.removeEventListener('pointercancel', cancel)
        detach.current = null
      }
    },
    [follow, onSwipe, threshold],
  )

  /** True once per gesture that moved — call it from a click handler to ignore
      the click a swipe leaves behind. */
  const consumeDrag = useCallback(() => {
    const moved = dragged.current
    dragged.current = false
    return moved
  }, [])

  return { onPointerDown, wheelRef, offset, dragging, consumeDrag }
}
