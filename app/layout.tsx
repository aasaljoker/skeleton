import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import localFont from 'next/font/local'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
})

const classico = localFont({
  src: '../public/fonts/classico-webfont.woff2',
  variable: '--font-classico',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Flora Wedding Planners — We Tell Your Story',
  description:
    'Flora Wedding Planners crafts unforgettable weddings with bespoke design, breathtaking venues, and flawless planning. Your story, beautifully told.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fff5f6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${cormorant.variable} ${jost.variable} ${classico.variable}`}>
      <body className="antialiased font-sans">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
