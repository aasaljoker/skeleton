'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, HeartHandshake, MapPin, ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/motion-primitives'
import Link from 'next/link'

interface AccordionItem {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  content: string
}

const pillars: AccordionItem[] = [
  {
    id: 'design',
    title: 'Bespoke Styling & Floral Artistry',
    icon: Sparkles,
    content: 'Our in-house design studio drafts custom mood boards, bespoke stages, and floral installations. From sourcing rare local blossoms to designing complex ambient lighting layouts, we create cohesive visual stories unique to your style.'
  },
  {
    id: 'orchestration',
    title: 'Seamless Orchestration & Coordination',
    icon: HeartHandshake,
    content: 'We manage every vendor contract, travel logistics for hundreds of guests, and complex multi-day schedules. On your wedding weekend, our senior production team handles execution behind the scenes, letting you be a guest at your own celebration.'
  },
  {
    id: 'venues',
    title: 'Heritage & Coastal Locations',
    icon: MapPin,
    content: 'With an exclusive partner network spanning Jaipur\'s majestic palaces, Goa\'s private beach estates, and Coorg\'s lush coffee plantations, we find the perfect canvas and manage all local permits and technical setup.'
  }
]

export function FloraIntro() {
  const [openId, setOpenId] = useState<string | null>('design')

  return (
    <section className="bg-background py-24 md:py-32 border-b border-border/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Vision & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeIn>
              <p className="text-xs uppercase tracking-[0.35em] text-accent font-sans">Our Philosophy</p>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
                Flora is a trusted, personalized wedding planning house
              </h2>
              <h3 className="mt-3 font-serif text-lg font-light text-muted-foreground italic leading-relaxed text-pretty">
                dedicated to creating the perfect wedding experience tailored to your unique love story.
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty md:text-base">
                We pride ourselves on our meticulous attention to detail and our passion for curating unforgettable celebrations. 
                Every aspect of your special day is handled with the utmost care, ensuring it is everything you have dreamed of and more.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-98"
                >
                  Start Planning Your Wedding
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Interactive Pillars Accordion */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="space-y-4">
                {pillars.map((pillar) => {
                  const isOpen = openId === pillar.id
                  const Icon = pillar.icon
                  
                  return (
                    <div
                      key={pillar.id}
                      className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                        isOpen 
                          ? 'border-accent bg-secondary/35 shadow-sm' 
                          : 'border-border bg-card hover:bg-secondary/10'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenId(isOpen ? null : pillar.id)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`flex size-10 items-center justify-center rounded-full transition-colors ${
                            isOpen ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'
                          }`}>
                            <Icon className="size-5" />
                          </div>
                          <h3 className="font-serif text-lg font-medium text-foreground md:text-xl">
                            {pillar.title}
                          </h3>
                        </div>
                        <ChevronDown className={`size-5 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-accent' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          >
                            <div className="border-t border-border/50 px-6 pb-6 pt-4">
                              <p className="text-sm leading-relaxed text-muted-foreground md:text-base text-pretty">
                                {pillar.content}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
