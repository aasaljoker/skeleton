'use client'

import { PageHero } from '@/components/page-hero'
import { FadeIn } from '@/components/motion-primitives'
import { services } from '@/lib/services-data'
import { Check } from 'lucide-react'
import Link from 'next/link'

const processSteps = [
  {
    step: '01',
    title: 'Listen & Understand',
    description: 'We begin with conversations about your memories, family traditions, and favorite spaces. We focus on who you are, long before we talk about flower stems or fabrics.'
  },
  {
    step: '02',
    title: 'Design & Visualize',
    description: 'Our in-house design studio sketches your stage, creates materials boards, and provides custom 3D visualizations so you can see exactly how the venue will be transformed.'
  },
  {
    step: '03',
    title: 'Plan & Curate',
    description: 'We build your vendor team from our trusted network, manage contract negotiations, design the seating arrangements, and map out the logistics down to the minute.'
  },
  {
    step: '04',
    title: 'Execute & Orchestrate',
    description: 'On your wedding week, our production house moves in to construct the sets. Our senior planning team handles the cues, leaving you to live completely in your moment.'
  }
]

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Services"
        title="We manage everything. You make the memories."
        description="From full-scale event production to delicate design consultations, we tailor our wedding services around the unique scale and story of your love."
        image="/images/gallery-cake.png"
        imageAlt="Elegant floral detailing on a multi-tiered wedding cake"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          
          {/* Services List */}
          <div className="flex flex-col gap-24">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <FadeIn
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-32 flex flex-col gap-10 md:flex-row md:items-center md:even:flex-row-reverse"
                  delay={index * 0.1}
                >
                  {/* Service Image */}
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-lg md:w-1/2 bg-secondary">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Service Details */}
                  <div className="flex flex-col md:w-1/2">
                    <div className="flex size-12 items-center justify-center rounded-full bg-secondary text-primary shadow-sm">
                      <IconComponent className="size-6 text-accent" />
                    </div>
                    <h2 className="mt-6 font-serif text-3xl font-medium text-foreground md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-accent font-medium">
                      {service.excerpt}
                    </p>
                    <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-border pt-6">
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {service.slug === 'full-planning' && [
                          'Vendor curation & contracts',
                          'Budget allocation model',
                          'Master timelines & schedules',
                          'On-site event orchestration'
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check className="size-4 text-primary" />
                            {item}
                          </div>
                        ))}
                        {service.slug === 'decor-design' && [
                          'Custom stage & mandap sketches',
                          'Custom drapery & fabric selection',
                          'Tablescapes & floral centerpieces',
                          'Precision lighting direction'
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check className="size-4 text-primary" />
                            {item}
                          </div>
                        ))}
                        {service.slug === 'venue-scouting' && [
                          'Heritage castle & palaces',
                          'Bespoke beachfront pavilions',
                          'Exclusive garden estates',
                          'Contract terms negotiation'
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check className="size-4 text-primary" />
                            {item}
                          </div>
                        ))}
                        {service.slug === 'photography' && [
                          'Editorial bridal portraits',
                          'Cinematic wedding trailers',
                          'Drone aerial coverage',
                          'Art-directed photo albums'
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check className="size-4 text-primary" />
                            {item}
                          </div>
                        ))}
                        {service.slug === 'catering' && [
                          'Gourmet menu development',
                          'Exclusive culinary tastings',
                          'Live interactive counters',
                          'Artisanal wedding cake design'
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check className="size-4 text-primary" />
                            {item}
                          </div>
                        ))}
                        {service.slug === 'entertainment' && [
                          'Choreographers for sangeet',
                          'Live bands & DJ line-ups',
                          'Sound & stage engineering',
                          'Grand celebratory fireworks'
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Check className="size-4 text-primary" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          {/* Process Section */}
          <div className="mt-32 border-t border-border pt-24">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-accent">How We Work</p>
              <h2 className="mt-4 font-serif text-4xl font-medium text-foreground md:text-5xl">
                The Flora Journey
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
                We follow a rigorous, proven method to build your custom celebration from the ground up, keeping you stress-free.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl border border-border p-8 bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="font-serif text-4xl font-semibold italic text-accent/40">{step.step}</p>
                  <h3 className="mt-4 font-serif text-xl font-medium text-foreground">{step.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Bottom Section */}
          <div className="mt-28 rounded-2xl bg-secondary p-8 text-center shadow-md md:p-16">
            <h3 className="font-serif text-3xl font-medium text-secondary-foreground md:text-4xl">
              Ready to write your first chapter?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-secondary-foreground/80 md:text-base">
              Connect with our creative director, Lakshmi, for a personal consultation to explore themes, budgets, and concepts for your celebration.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-lg transition-transform hover:scale-105 inline-block"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
