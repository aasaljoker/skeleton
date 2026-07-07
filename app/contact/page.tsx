'use client'

import { useState } from 'react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { FadeIn } from '@/components/motion-primitives'
import { ChevronDown, Mail, Phone, MapPin, Clock } from 'lucide-react'

const faqs = [
  {
    question: 'How far in advance should we book Flora?',
    answer: 'We typically recommend booking 8 to 12 months in advance, especially for weddings during peak seasons (October through March). Because we only orchestrate a limited number of celebrations each year to maintain our bespoke standard, our dates tend to secure quickly.'
  },
  {
    question: 'Do you travel for destination weddings?',
    answer: 'Yes, absolutely. We design and coordinate weddings across India and internationally. Our core planning team travel to your chosen destination to coordinate with local agencies, supervise production, and direct operations on-site.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our planning fee is typically a flat design commission based on the scale, complexity, and number of events. We build custom quotes after our initial consultation, ensuring budget stewardship is prioritized from the very beginning.'
  },
  {
    question: 'Do you work with outside decorators and florists?',
    answer: 'We provide comprehensive design and coordination. While we design every tablescape, stage, and installation in-house through our studio, we work with select local structural fabricators and flower farms to produce the physical sets.'
  }
]

export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title="Let's begin your story"
        description="Whether you have your date locked or are just starting to dream, let's connect. Tell us a little about yourselves and the celebration you have in mind."
        image="/images/gallery-couple.png"
        imageAlt="Bride and groom at sunset wedding"
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold">Studio Coordinates</p>
                <h2 className="mt-4 font-serif text-3xl font-medium text-foreground">
                  Our door is always open
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We invite you to schedule a visit to our design workshop. Let's look over fabric swatches, color maps, and sketches together.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary shadow-sm">
                    <MapPin className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-foreground">Studio Address</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      No. 42, Lavender Lane, Indira Nagar,<br />
                      Bengaluru, Karnataka 560038
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary shadow-sm">
                    <Phone className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-foreground">Phone</h3>
                    <p className="mt-1 text-sm text-muted-foreground">+91 80 4912 3000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary shadow-sm">
                    <Mail className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-foreground">Email</h3>
                    <p className="mt-1 text-sm text-muted-foreground">hello@floraplanners.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary shadow-sm">
                    <Clock className="size-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-foreground">Studio Hours</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Tuesday – Saturday: 10:00 AM – 6:00 PM<br />
                      By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-10">
                <p className="text-xs uppercase tracking-wider text-accent font-semibold mb-6">Wedding Inquiry Form</p>
                <ContactForm showBudget={true} />
              </div>
            </div>

          </div>

          {/* Bottom: FAQs */}
          <div className="mt-32 border-t border-border pt-24">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.35em] text-accent">Frequenty Asked Questions</p>
              <h2 className="mt-4 font-serif text-4xl font-medium text-foreground md:text-5xl">
                Curiosities Answered
              </h2>
            </div>

            <div className="mx-auto mt-16 max-w-3xl flex flex-col gap-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <div
                    key={faq.question}
                    className="rounded-xl border border-border bg-card p-6 shadow-sm transition-colors duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between text-left font-serif text-lg font-medium text-foreground cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`size-5 text-accent transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-48 mt-4 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
