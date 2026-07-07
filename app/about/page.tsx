import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { StorySlides } from '@/components/about/story-slides'
import { FadeIn } from '@/components/motion-primitives'

export const metadata: Metadata = {
  title: 'About Us — Flora Wedding Planners',
  description:
    'Meet the founder and team behind Flora Wedding Planners, and read the story of how a small floral studio grew into a full-service wedding house.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Us"
        title="The people behind the petals"
        description="Flora is a family of designers, planners, and storytellers who believe weddings should feel like the couples they celebrate."
        image="/images/gallery-decor.png"
        imageAlt="Luxury wedding table decor with orchids and candles"
      />

      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:gap-20 md:px-6">
          <FadeIn className="w-full max-w-sm md:flex-1">
            <div className="relative">
              <div className="absolute -inset-3 rounded-lg border border-accent/40" aria-hidden="true" />
              <img
                src="/images/founder.png"
                alt="Portrait of Flora founder Lakshmi Menon"
                className="relative aspect-[4/5] w-full rounded-lg object-cover shadow-xl"
              />
            </div>
          </FadeIn>
          <div className="md:flex-1">
            <FadeIn delay={0.15}>
              <p className="text-xs uppercase tracking-[0.35em] text-accent">Our Founder</p>
              <h2 className="mt-4 font-serif text-4xl font-medium text-balance md:text-5xl">
                Lakshmi Menon
              </h2>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Founder & Creative Director
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground text-pretty md:text-base">
                Lakshmi started Flora with a florist&apos;s eye and a storyteller&apos;s heart.
                Trained in floral design in Bengaluru and event production in Mumbai, she has
                spent fourteen years turning couples&apos; memories — first meetings, family
                recipes, grandmothers&apos; sarees — into the fabric of their celebrations.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty md:text-base">
                &ldquo;A wedding is the one day your whole story stands in one room,&rdquo; she
                says. &ldquo;Our job is to make the room worthy of it.&rdquo;
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <StorySlides />
    </main>
  )
}
