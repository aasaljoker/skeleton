'use client'

import { useState } from 'react'
import { PageHero } from '@/components/page-hero'
import { FadeIn } from '@/components/motion-primitives'
import { X } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/gallery-mandap.png',
    alt: 'Traditional floral mandap design',
    category: 'decor',
    title: 'Heritage Mandap under Orchid Arches',
    location: 'Udaipur Palace'
  },
  {
    src: '/images/gallery-decor.png',
    alt: 'Luxury wedding reception dining table decor',
    category: 'decor',
    title: 'Candlelight Reception Tablescape',
    location: 'Palace Gardens'
  },
  {
    src: '/images/gallery-couple.png',
    alt: 'Bride and groom walking in garden',
    category: 'couples',
    title: 'Lakshmi & Arjun',
    location: 'Coorg Estates'
  },
  {
    src: '/images/gallery-bride.png',
    alt: 'Close-up of bride wearing traditional jewelry',
    category: 'couples',
    title: 'The Portrait of a Bride',
    location: 'Bengaluru Temple'
  },
  {
    src: '/images/gallery-celebration.png',
    alt: 'Guests celebrating at sangeet night with sparklers',
    category: 'celebration',
    title: 'The Grand Sangeet Finale',
    location: 'Goa Coastal Lawns'
  },
  {
    src: '/images/gallery-cake.png',
    alt: 'Multi-tiered wedding cake with rose petals',
    category: 'details',
    title: 'Botanical Cake Details',
    location: 'Udaipur Courtyard'
  },
  {
    src: '/images/stage-reveal.png',
    alt: 'Grand stage design with floral backdrop and lighting',
    category: 'decor',
    title: 'The Curtain Rises Stage Reveal',
    location: 'Udaipur Palace Stage'
  }
]

export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'decor' | 'couples' | 'celebration' | 'details'>('all')
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const filteredImages = galleryImages.filter(
    (img) => filter === 'all' || img.category === filter
  )

  const openLightbox = (src: string) => {
    const idx = galleryImages.findIndex((img) => img.src === src)
    if (idx !== -1) setActiveImageIndex(idx)
  }

  const closeLightbox = () => {
    setActiveImageIndex(null)
  }

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (activeImageIndex !== null) {
      setActiveImageIndex((activeImageIndex + 1) % galleryImages.length)
    }
  }

  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Visualizing forever"
        description="Browse through the frames of actual weddings designed, curated, and styled by Flora. Every detail is a testament to the couples who trusted us with their story."
        image="/images/gallery-decor.png"
        imageAlt="Ornate floral centerpieces on a long wedding table"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-8">
            {(['all', 'couples', 'decor', 'celebration', 'details'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {cat === 'all'
                  ? 'All Frames'
                  : cat === 'decor'
                  ? 'Decor & Styling'
                  : cat === 'couples'
                  ? 'Couples'
                  : cat === 'celebration'
                  ? 'Celebrations'
                  : 'Details & Catering'}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredImages.map((img, index) => (
              <FadeIn
                key={img.src}
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md bg-secondary"
                delay={index * 0.05}
              >
                <div 
                  onClick={() => openLightbox(img.src)}
                  className="aspect-[4/5] w-full overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 text-white" />
                  <div className="absolute bottom-0 inset-x-0 p-6 text-white translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-10">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">{img.location}</p>
                    <h3 className="mt-1 font-serif text-lg font-medium">{img.title}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Lightbox Modal */}
          {activeImageIndex !== null && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-fade-in"
              onClick={closeLightbox}
            >
              <button
                type="button"
                className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                <X className="size-8" />
              </button>

              <button
                type="button"
                className="absolute left-6 text-3xl font-light text-white/60 hover:text-white/100 p-4 transition-colors select-none"
                onClick={showPrev}
                aria-label="Previous image"
              >
                &#10094;
              </button>

              <div className="max-h-[80vh] max-w-[90vw] flex flex-col items-center justify-center">
                <img
                  src={galleryImages[activeImageIndex].src}
                  alt={galleryImages[activeImageIndex].alt}
                  className="max-h-[70vh] rounded-lg object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
                <div className="mt-6 text-center text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {galleryImages[activeImageIndex].location}
                  </p>
                  <h4 className="mt-1 font-serif text-xl font-medium">
                    {galleryImages[activeImageIndex].title}
                  </h4>
                </div>
              </div>

              <button
                type="button"
                className="absolute right-6 text-3xl font-light text-white/60 hover:text-white/100 p-4 transition-colors select-none"
                onClick={showNext}
                aria-label="Next image"
              >
                &#10095;
              </button>
            </div>
          )}

        </div>
      </section>
    </main>
  )
}
