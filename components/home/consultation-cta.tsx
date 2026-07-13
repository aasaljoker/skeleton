'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion-primitives'

export function ConsultationCta() {
  return (
    <section className="bg-background py-24 md:py-32 relative overflow-hidden border-t border-border/50">
      {/* Decorative floral outline or shape behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <FadeIn>
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-accent mb-6">
            <Calendar className="size-6" />
          </div>
          
          <p className="text-xs uppercase tracking-[0.35em] text-accent font-sans">Begin the Journey</p>
          
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Ready to Plan Your Flora Celebration?
          </h2>
          
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty">
            Let&apos;s discuss your vision, budget, and dates. Together with our network of premium partners, 
            we will bring your dream wedding to life.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-98"
            >
              Book Your Free Consultation
              <ArrowRight className="size-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <Link
              href="/services"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-border bg-card px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium text-muted-foreground transition-all hover:bg-secondary/40 hover:text-foreground active:scale-98"
            >
              Explore Our Services
            </Link>
          </div>

          <p className="mt-4 text-xs tracking-wider text-muted-foreground/60 uppercase">
            Let’s discuss your vision, budget & dates.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
