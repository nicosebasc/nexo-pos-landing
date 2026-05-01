'use client'

import { useEffect } from 'react'

export default function ClientAnimations() {
  useEffect(() => {
    // Nav scroll
    const nav = document.getElementById('mainNav')
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Mobile menu toggle
    const toggle = nav?.querySelector('.nav__toggle') as HTMLElement | null
    const drawer = document.getElementById('navDrawer')

    const closeMenu = () => {
      nav?.classList.remove('nav--open')
      toggle?.setAttribute('aria-expanded', 'false')
      drawer?.setAttribute('aria-hidden', 'true')
    }
    const handleToggle = (e: Event) => {
      e.stopPropagation()
      const open = nav?.classList.toggle('nav--open') ?? false
      toggle?.setAttribute('aria-expanded', open ? 'true' : 'false')
      drawer?.setAttribute('aria-hidden', open ? 'false' : 'true')
    }
    const handleDocClick = (e: MouseEvent) => {
      if (nav && !nav.contains(e.target as Node)) closeMenu()
    }
    const handleDrawerClick = (e: Event) => {
      if ((e.target as HTMLElement).closest('a')) closeMenu()
    }

    toggle?.addEventListener('click', handleToggle)
    drawer?.addEventListener('click', handleDrawerClick)
    document.addEventListener('click', handleDocClick)

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
      toggle?.removeEventListener('click', handleToggle)
      drawer?.removeEventListener('click', handleDrawerClick)
      document.removeEventListener('click', handleDocClick)
      revealObs.disconnect()
      countObs.disconnect()
    }
  }, [])

  return null
}
