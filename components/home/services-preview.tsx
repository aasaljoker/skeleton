'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/services-data'
import { FadeIn } from '@/components/motion-primitives'
import { useRef, useState } from 'react'

export function ServicesPreview() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-background py-24 md:py-32" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <FadeIn>
          <p className="text-xs uppercase tracking-[0.35em] text-accent">What We Do</p>
          <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-md font-serif text-4xl font-medium text-balance md:text-5xl">
              Services crafted around your story
            </h2>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary"
            >
              All services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        <div className="mt-20 flex flex-col items-start gap-12 lg:flex-row lg:gap-24">
          {/* Sticky Image Container */}
          <div className="sticky top-24 hidden aspect-square w-full flex-1 overflow-hidden rounded-lg lg:block">
            {services.map((service, i) => (
              <motion.img
                key={service.slug}
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>

          {/* Scrolling List */}
          <div className="flex w-full flex-1 flex-col gap-16 lg:py-32">
            {services.map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={i}
                onInView={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, onInView }: { service: any; index: number; onInView: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      onViewportEnter={onInView}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col border-b border-border pb-12 last:border-0"
    >
      <div className="mb-8 block aspect-video w-full overflow-hidden rounded-lg lg:hidden">
         <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
      </div>
      <service.icon className="size-8 text-accent" aria-hidden="true" />
      <h3 className="mt-6 font-serif text-3xl font-medium text-card-foreground">
        {service.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
        {service.description}
      </p>
      <Link href={`/services#${service.slug}`} className="group mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
        Learn more
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}
