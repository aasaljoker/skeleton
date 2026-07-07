import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { FloraLogo } from '@/components/ui/flora-logo'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/" className="inline-block mb-4">
              <FloraLogo size={56} />
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80 text-pretty">
              We&apos;ll tell your story. Bespoke weddings crafted with heart, from the first
              flower to the final dance.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
              Quick Links
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
              Get in Touch
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-primary-foreground/85">
              <li className="flex items-center gap-2">
                <Phone className="size-4" aria-hidden="true" />
                <a href="tel:+919876543210" className="hover:text-primary-foreground">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4" aria-hidden="true" />
                <a href="mailto:hello@floraweddings.in" className="hover:text-primary-foreground">
                  hello@floraweddings.in
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-primary-foreground/15 pt-6 text-center text-xs text-primary-foreground/60">
          {'© '}
          {new Date().getFullYear()}
          {' Flora Wedding Planners. All rights reserved.'}
        </div>
      </div>
    </footer>
  )
}
