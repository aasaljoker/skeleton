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

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.63-.13-1.6.03-2.3l1.37-5.83a5.2 5.2 0 0 1-.38-2c0-1.88 1.1-3.3 2.45-3.3 1.16 0 1.72.87 1.72 1.9 0 1.16-.74 2.9-1.12 4.5-.32 1.35.68 2.46 2 2.46 2.4 0 4.25-2.54 4.25-6.2 0-3.24-2.33-5.5-5.65-5.5-3.85 0-6.1 2.9-6.1 5.87 0 1.17.45 2.42 1 3.1a.4.4 0 0 1 .1.37c-.1.43-.33 1.37-.38 1.58a.3.3 0 0 1-.4.2c-1.3-.6-2.12-2.5-2.12-4c0-3.26 2.37-6.26 6.83-6.26 3.6 0 6.38 2.56 6.38 5.97 0 3.57-2.25 6.45-5.37 6.45-1.05 0-2.04-.55-2.38-1.2l-.65 2.48c-.24.91-.88 2.06-1.32 2.77A12 12 0 1 0 12 0z" />
  </svg>
)

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
              <a
                href="https://www.instagram.com/floraweddings/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-105 transition-all"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href="https://www.facebook.com/floraweddings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-105 transition-all"
              >
                <Facebook className="size-5" />
              </a>
              <a
                href="https://pinterest.com/floraweddings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:scale-105 transition-all"
              >
                <PinterestIcon className="size-5" />
              </a>
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
