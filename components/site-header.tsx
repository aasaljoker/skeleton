'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FloraLogo } from '@/components/ui/flora-logo'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/venues', label: 'Venues' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/portal', label: 'Client Portal' },
  { href: '/contact', label: 'Contact Us' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border py-4 transition-all duration-300"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-1" aria-label="Flora Wedding Planners home">
          <FloraLogo size={44} />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.slice(0, 6).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-xs uppercase tracking-[0.2em] transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-foreground/70',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-105"
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'rounded-md px-3 py-3 text-sm uppercase tracking-[0.2em]',
                    pathname === link.href
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-foreground/70',
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
