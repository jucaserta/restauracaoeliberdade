'use client'

import { useEffect } from 'react'
// AOS has no TypeScript types; ignoring for compatibility
import AOS from 'aos'
import 'aos/dist/aos.css'
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useInitAnimations = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    requestAnimationFrame(() => {
      // AOS Init
      AOS.init({
        mirror: false,
        once: true,
        delay: 0,
        duration: 1500,
        offset: 0,
      })

      // Lenis Init
      const lenis = new Lenis({
        autoRaf: false,
        duration: 1.5,
      })

      lenis.on('scroll', () => {
        AOS.refresh()
        ScrollTrigger.update()
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)

      // CTA arrow animation logic
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target
            if (entry.isIntersecting) {
              el.classList.add('animate')
            } else {
              el.classList.remove('animate')
            }
          })
        },
        { threshold: 0.3 }
      )

      const arrows = document.querySelectorAll('.d2c_arrow_left, .d2c_arrow_right')
      arrows.forEach((arrow) => observer.observe(arrow))
    })
  }, [])
}
