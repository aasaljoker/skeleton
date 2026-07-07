import {
  Flower2,
  MapPin,
  Camera,
  Sparkles,
  UtensilsCrossed,
  Music,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  title: string
  excerpt: string
  description: string
  image: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    slug: 'full-planning',
    title: 'Full Wedding Planning',
    excerpt: 'End-to-end planning from the proposal toast to the farewell brunch.',
    description:
      'Our signature service. We manage every vendor, timeline, and detail so you can be a guest at your own wedding. Includes budget stewardship, design direction, and day-of orchestration by our senior team.',
    image: '/images/gallery-mandap.png',
    icon: Flower2,
  },
  {
    slug: 'venue-scouting',
    title: 'Venue Scouting',
    excerpt: 'Palaces, beaches, gardens — we find the backdrop your story deserves.',
    description:
      'With an insider network across heritage palaces, coastal resorts, and hidden gardens, we shortlist venues that match your vision and guest count, then negotiate terms on your behalf.',
    image: '/images/venue-palace.png',
    icon: MapPin,
  },
  {
    slug: 'decor-design',
    title: 'Decor & Design',
    excerpt: 'Bespoke stages, mandaps, and tablescapes designed from scratch.',
    description:
      'Our in-house design studio sketches every stage, arch, and centerpiece uniquely for you. From flower sourcing to lighting design, the aesthetic is cohesive down to the napkin fold.',
    image: '/images/gallery-decor.png',
    icon: Sparkles,
  },
  {
    slug: 'photography',
    title: 'Photography & Film',
    excerpt: 'Cinematic films and editorial photography that age beautifully.',
    description:
      'We pair you with photographers and filmmakers whose style matches yours, then art-direct the shot list so no moment — grand or quiet — goes uncaptured.',
    image: '/images/gallery-couple.png',
    icon: Camera,
  },
  {
    slug: 'catering',
    title: 'Catering & Cake',
    excerpt: 'Menus that travel from street-food nostalgia to fine dining.',
    description:
      'Tastings, custom menus, live counters, and show-stopping cakes. We coordinate dietary needs across hundreds of guests without a single missed plate.',
    image: '/images/gallery-cake.png',
    icon: UtensilsCrossed,
  },
  {
    slug: 'entertainment',
    title: 'Music & Entertainment',
    excerpt: 'From sangeet choreography to symphonies and firework finales.',
    description:
      'Bands, DJs, classical ensembles, choreographers, and pyrotechnics — sequenced into a flow that keeps the dance floor full and the goosebumps coming.',
    image: '/images/gallery-celebration.png',
    icon: Music,
  },
]
