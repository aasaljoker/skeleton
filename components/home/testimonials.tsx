'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { FadeIn } from '@/components/motion-primitives'

const testimonials = [
  {
    quote:
      'Flora turned our three-day wedding into a film we get to rewatch forever. Every guest still talks about the stage reveal.',
    name: 'Ananya & Rohan',
    detail: 'Palace Wedding, Udaipur',
  },
  {
    quote:
      'We planned everything from another continent and never once felt out of the loop. Flawless does not begin to cover it.',
    name: 'Meera & Daniel',
    detail: 'Beach Wedding, Goa',
  },
  {
    quote:
      'They listened to stories from our grandparents and wove them into the decor. It felt like the wedding knew us.',
    name: 'Kavya & Arjun',
    detail: 'Garden Wedding, Coorg',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const t = testimonials[index]

  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <FadeIn>
          <Quote className="mx-auto size-10 text-accent" aria-hidden="true" />
          <p className="mt-4 text-xs uppercase tracking-[0.35em] text-secondary-foreground/60">
            Kind Words
          </p>
        </FadeIn>

        <div className="relative mt-10 min-h-48">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-serif text-2xl font-medium leading-snug text-secondary-foreground text-balance md:text-3xl">
                {t.quote}
              </p>
              <footer className="mt-6">
                <p className="text-sm font-medium text-secondary-foreground">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-secondary-foreground/60">
                  {t.detail}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full border border-secondary-foreground/20 p-3 text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
          >
            <ChevronLeft className="size-4" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Testimonials">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-accent' : 'w-2 bg-secondary-foreground/30'
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full border border-secondary-foreground/20 p-3 text-secondary-foreground transition-colors hover:bg-secondary-foreground/10"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
