'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion-primitives'

const previewImages = [
  {
    src: '/images/gallery-couple.png',
    alt: 'Bride and groom walking in estate garden',
    category: 'Couples',
    title: 'Lakshmi & Arjun',
    location: 'Coorg Estates',
    gridClass: 'md:col-span-1 md:row-span-2 aspect-[3/4]'
  },
  {
    src: '/images/gallery-mandap.png',
    alt: 'Ornate floral mandap architecture',
    category: 'Decor',
    title: 'Heritage Mandap under Orchid Arches',
    location: 'Udaipur Palace',
    gridClass: 'md:col-span-1 md:row-span-1 aspect-square'
  },
  {
    src: '/images/gallery-bride.png',
    alt: 'Bride in traditional wedding jewelry',
    category: 'Couples',
    title: 'The Portrait of a Bride',
    location: 'Bengaluru Temple',
    gridClass: 'md:col-span-1 md:row-span-1 aspect-square'
  },
  {
    src: '/images/gallery-decor.png',
    alt: 'Luxury dinner tablescape lighting and details',
    category: 'Styling',
    title: 'Candlelight Reception Tablescape',
    location: 'Palace Gardens',
    gridClass: 'md:col-span-1 md:row-span-1 aspect-square'
  },
  {
    src: '/images/gallery-celebration.png',
    alt: 'Wedding sangeet sparkler celebration',
    category: 'Celebration',
    title: 'The Grand Sangeet Finale',
    location: 'Goa Coastal Lawns',
    gridClass: 'md:col-span-1 md:row-span-2 aspect-[3/4]'
  },
  {
    src: '/images/gallery-cake.png',
    alt: 'Intricate wedding cake details',
    category: 'Details',
    title: 'Botanical Cake Details',
    location: 'Udaipur Courtyard',
    gridClass: 'md:col-span-1 md:row-span-1 aspect-square'
  }
]

export function GalleryPreview() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <FadeIn className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-accent font-sans">Our Portfolio</p>
            <h2 className="mt-4 font-serif text-3xl font-medium md:text-4xl lg:text-5xl text-foreground text-balance">
              Moments of magic, captured in time
            </h2>
            <p className="mt-4 text-sm text-muted-foreground text-pretty">
              Get inspired by actual celebrations styled and coordinated by Flora. 
              From majestic temple arches to candlelit coastal tables, explore the textures of forever.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.15}>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium text-primary hover:text-accent transition-colors"
            >
              Explore Full Gallery
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {previewImages.map((img, index) => (
            <FadeIn
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl bg-background shadow-md ${img.gridClass}`}
              delay={index * 0.05}
            >
              <Link href="/gallery" className="block w-full h-full relative cursor-pointer">
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 z-10 rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-wider font-semibold text-foreground/80">
                  {img.category}
                </span>

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-85" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white z-10 flex flex-col justify-end">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                    {img.location}
                  </p>
                  <h3 className="mt-1 font-serif text-lg font-medium leading-snug text-white group-hover:text-accent-foreground transition-colors">
                    {img.title}
                  </h3>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
