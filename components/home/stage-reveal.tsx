'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function StageReveal() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] })
  const leftCurtain = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '-100%'])
  const rightCurtain = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])
  const scale = useTransform(scrollYProgress, [0.1, 0.9], [1.15, 1])

  return (
    <section ref={ref} className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-accent">
          The Curtain Rises
        </p>
        <h2 className="mt-4 text-center font-serif text-4xl font-medium text-balance md:text-5xl">
          Where your celebration takes the stage
        </h2>

        <div className="relative mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-lg shadow-2xl">
          <motion.img
            style={{ scale }}
            src="/images/stage-reveal.png"
            alt="Grand wedding stage revealed as curtains open"
            className="h-full w-full object-cover"
          />
          <motion.div
            style={{ 
              x: leftCurtain,
              background: 'repeating-linear-gradient(to right, #2c0114 0px, #4d0b29 12px, #8e1d52 28px, #b83370 42px, #8e1d52 56px, #4d0b29 72px, #2c0114 80px)'
            }}
            className="absolute inset-y-0 left-0 w-1/2 shadow-[5px_0_15px_rgba(0,0,0,0.4)] z-10"
            aria-hidden="true"
          >
            {/* Elegant gold fringe trim on the opening right edge */}
            <div className="absolute inset-y-0 right-0 w-2.5 bg-gradient-to-b from-[#d4af37] via-[#f3e5ab] to-[#aa771c] border-l border-white/25 shadow-sm" />
          </motion.div>
          
          <motion.div
            style={{ 
              x: rightCurtain,
              background: 'repeating-linear-gradient(to right, #2c0114 0px, #4d0b29 12px, #8e1d52 28px, #b83370 42px, #8e1d52 56px, #4d0b29 72px, #2c0114 80px)'
            }}
            className="absolute inset-y-0 right-0 w-1/2 shadow-[-5px_0_15px_rgba(0,0,0,0.4)] z-10"
            aria-hidden="true"
          >
            {/* Elegant gold fringe trim on the opening left edge */}
            <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-b from-[#d4af37] via-[#f3e5ab] to-[#aa771c] border-r border-white/25 shadow-sm" />
          </motion.div>
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-muted-foreground text-pretty md:text-base">
          Scroll and watch the stage open — just as it will on your day. Every reveal,
          every light cue, every petal drop is choreographed to perfection.
        </p>
      </div>
    </section>
  )
}
