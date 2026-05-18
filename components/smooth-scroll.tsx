"use client"

import { useEffect } from 'react'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let lenisInstance: any = null

    const initLenis = async () => {
      const Lenis = (await import('lenis')).default
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })

      function raf(time: number) {
        lenisInstance?.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

      // Handle anchor link clicks for smooth scroll
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const anchor = target.closest('a')
        if (!anchor) return

        const href = anchor.getAttribute('href')
        if (!href || !href.startsWith('#')) return

        e.preventDefault()
        const id = href.slice(1)
        const el = document.getElementById(id)
        if (el) {
          lenisInstance?.scrollTo(el, { offset: -80 })
        }
      }

      document.addEventListener('click', handleAnchorClick)

      return () => {
        document.removeEventListener('click', handleAnchorClick)
      }
    }

    initLenis()

    return () => {
      lenisInstance?.destroy()
    }
  }, [])

  return <>{children}</>
}
