'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    year: '2012',
    title: 'A single bouquet',
    text: 'Flora began as a small floral studio in Bengaluru — one woman, one van, and an obsession with getting every stem right. Our first wedding had 40 guests and a hand-tied jasmine mandap.',
    image: '/images/gallery-bride.png',
  },
  {
    year: '2016',
    title: 'From flowers to full stories',
    text: 'Couples kept asking us to do more than the flowers. So we grew — into design, planning, and production. By 2016 we were orchestrating complete weddings from invitation to send-off.',
    image: '/images/gallery-mandap.png',
  },
  {
    year: '2020',
    title: 'Destination dreams',
    text: 'Palaces in Udaipur, beaches in Goa, coffee estates in Coorg. We built a network of extraordinary venues and local artisans across the country, taking love stories on the road.',
    image: '/images/venue-palace.png',
  },
  {
    year: 'Today',
    title: 'Three hundred stories told',
    text: 'Over 300 weddings later, our promise is unchanged: your wedding should feel like it could belong to no one else. We are still listening first, and building worlds second.',
    image: '/images/gallery-celebration.png',
  },
]

export function StorySlides() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]

  return (
    <section className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-xs uppercase tracking-[0.35em] text-primary-foreground/60">
          Our Story
        </p>
        <h2 className="mt-4 font-serif text-4xl font-medium text-primary-foreground text-balance md:text-5xl">
          A decade of love, chapter by chapter
        </h2>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>

          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -32 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-6xl font-semibold italic text-accent">{slide.year}</p>
                <h3 className="mt-4 font-serif text-3xl font-medium text-primary-foreground">
                  {slide.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/80 text-pretty md:text-base">
                  {slide.text}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
                aria-label="Previous chapter"
                className="rounded-full border border-primary-foreground/25 p-3 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => setIndex((i) => (i + 1) % slides.length)}
                aria-label="Next chapter"
                className="rounded-full border border-primary-foreground/25 p-3 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <ChevronRight className="size-4" />
              </button>
              <div className="flex gap-2">
                {slides.map((s, i) => (
                  <button
                    key={s.year}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Chapter ${s.year}`}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? 'w-6 bg-accent' : 'w-2 bg-primary-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
