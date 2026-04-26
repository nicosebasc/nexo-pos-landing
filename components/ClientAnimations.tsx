'use client'

import { useEffect } from 'react'

export default function ClientAnimations() {
  useEffect(() => {
    // Nav scroll
    const nav = document.getElementById('mainNav')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Reveal on scroll
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el))

    // Counter animation
    function animCount(el: Element, target: number) {
      let start: number | null = null
      const dur = 1600
      const step = (ts: number) => {
        if (!start) start = ts
        const p = Math.min((ts - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = Math.round(eased * target).toLocaleString('es-CL')
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = parseInt((e.target as HTMLElement).dataset.count ?? '0')
            animCount(e.target, target)
            countObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    document.querySelectorAll('[data-count]').forEach((el) => countObs.observe(el))

    return () => {
      window.removeEventListener('scroll', onScroll)
      revealObs.disconnect()
      countObs.disconnect()
    }
  }, [])

  return null
}
