import { Hero } from '@/components/home/hero'
import { StageReveal } from '@/components/home/stage-reveal'
import { StorySection, WordCinema } from '@/components/home/story-section'
import { ServicesPreview } from '@/components/home/services-preview'
import { Testimonials } from '@/components/home/testimonials'
import { ContactForm } from '@/components/contact-form'
import { FadeIn } from '@/components/motion-primitives'
import { FloatingRings } from '@/components/home/floating-rings'
import { InteractiveInvite } from '@/components/home/interactive-invite'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <StageReveal />
      <StorySection />
      <WordCinema />
      <ServicesPreview />
      
      {/* 3D Rings Section */}
      <section className="bg-primary/5 py-24 md:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">The Symbol</p>
            <h2 className="mt-4 font-serif text-4xl font-medium text-balance md:text-5xl">
              A promise forged in gold
            </h2>
          </FadeIn>
          <div className="relative mt-12 h-[60vh] min-h-[400px] w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#5E4E42]/5">
            <FloatingRings className="h-full w-full absolute inset-0" />
          </div>
        </div>
      </section>

      {/* 3D Invite Section */}
      <section className="bg-secondary py-24 md:py-32 relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6 items-center">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">Your Invitation</p>
            <h2 className="mt-4 font-serif text-4xl font-medium text-balance md:text-5xl text-secondary-foreground">
              Interact with your story
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-secondary-foreground/80 text-pretty md:text-base">
              Drag and rotate to explore the physical feel of our bespoke invitations. 
              We design every detail to set the perfect tone for your celebration.
            </p>
          </FadeIn>
          <div className="relative h-[530px] w-full">
            <InteractiveInvite className="h-full w-full absolute inset-0 cursor-grab active:cursor-grabbing" />
          </div>
        </div>
      </section>

      <Testimonials />
      
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:px-6">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.35em] text-accent">Get in Touch</p>
            <h2 className="mt-4 font-serif text-4xl font-medium text-balance md:text-5xl">
              Let&apos;s begin your story
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty md:text-base">
              Tell us a little about the two of you, and we&apos;ll come back with ideas,
              venues, and a plan that feels unmistakably yours.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
