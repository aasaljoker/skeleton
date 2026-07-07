'use client'

import { useState } from 'react'
import { PageHero } from '@/components/page-hero'
import { FadeIn } from '@/components/motion-primitives'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

const venueList = [
  {
    title: 'Heritage Palace',
    city: 'Udaipur, Rajasthan',
    category: 'palace',
    image: '/images/venue-palace.png',
    description: 'A majestic 400-year-old palace rising from the waters of Lake Pichola. Offer your guests the ultimate royal experience with grand courtrooms, intricate marble carvings, and lakeside sunset views.',
    capacity: '200 - 800 guests',
    features: ['Royal courtyards', 'Lakeside dining', 'Heritage suite lodging', 'Private jetty access']
  },
  {
    title: 'Coastal Beach Retreat',
    city: 'South Goa, Goa',
    category: 'beach',
    image: '/images/venue-beach.png',
    description: 'A pristine private sandy cove lined with swaying palms. Exchange vows with your toes in the sand at golden hour, followed by an elegant open-air tropical reception beneath the stars.',
    capacity: '100 - 450 guests',
    features: ['Beachfront ceremony site', 'Oceanfront pavilion', 'Eco-luxury lodging', 'Sunset cocktail lawns']
  },
  {
    title: 'Coffee Estate Garden',
    city: 'Coorg, Karnataka',
    category: 'garden',
    image: '/images/venue-garden.png',
    description: 'Lush green misty lawns nestled amidst sprawling private coffee plantations. A magical forest-like backdrop with cool mountain air, vibrant flower canopies, and organic dining.',
    capacity: '50 - 300 guests',
    features: ['Ancient tree canopy', 'Organic farm-to-table catering', 'Misty mountain viewpoints', 'Glamping luxury cottages']
  }
]

export default function VenuesPage() {
  const [filter, setFilter] = useState<'all' | 'palace' | 'beach' | 'garden'>('all')

  const filteredVenues = venueList.filter(
    (v) => filter === 'all' || v.category === filter
  )

  return (
    <main>
      <PageHero
        eyebrow="Venues"
        title="Backdrops worthy of your vows"
        description="From royal heritage palaces and tropical shores to misty gardens, we curate and design backdrops that set the perfect tone for your story."
        image="/images/venue-palace.png"
        imageAlt="Grand heritage palace wedding venue"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-border pb-8">
            {(['all', 'palace', 'beach', 'garden'] as const).map((cat) => (
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
                {cat === 'all' ? 'All Venues' : `${cat}s`}
              </button>
            ))}
          </div>

          {/* Venues Grid */}
          <div className="mt-16 flex flex-col gap-24">
            {filteredVenues.map((venue, index) => (
              <FadeIn
                key={venue.title}
                className="flex flex-col gap-10 md:flex-row md:items-center md:even:flex-row-reverse"
                delay={index * 0.1}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg md:w-1/2">
                  <img
                    src={venue.image}
                    alt={venue.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 rounded-full bg-background/90 px-4 py-2 text-[10px] font-medium uppercase tracking-wider text-primary shadow-sm backdrop-blur-sm">
                    {venue.category}
                  </div>
                </div>

                {/* Info Content */}
                <div className="flex flex-col md:w-1/2">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-medium">
                    <MapPin className="size-4 text-accent" />
                    {venue.city}
                  </div>
                  <h2 className="mt-3 font-serif text-3xl font-medium text-foreground md:text-4xl">
                    {venue.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {venue.description}
                  </p>
                  
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="text-xs uppercase tracking-wider text-foreground/75 font-semibold">
                      Ideal Capacity: <span className="font-normal text-muted-foreground">{venue.capacity}</span>
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-4">
                      {venue.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="size-1.5 rounded-full bg-accent" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary"
                    >
                      Inquire About Venue
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bottom Card CTA */}
          <div className="mt-28 rounded-2xl bg-secondary p-8 text-center shadow-md md:p-16">
            <h3 className="font-serif text-3xl font-medium text-secondary-foreground md:text-4xl">
              Have a specific location in mind?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-secondary-foreground/80 md:text-base">
              Whether it is a historic fort, a private family estate, or a vineyard, we scout and design weddings in non-traditional locations across the country.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-lg transition-transform hover:scale-105 inline-block"
              >
                Scout with Us
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
