'use client'

import { useEffect } from 'react'
import { FloraLogo } from '@/components/ui/flora-logo'

export default function PortalPage() {
  useEffect(() => {
    // Dynamically load the Visme script
    const script = document.createElement('script')
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden font-sans text-[#3D312A] pt-24 pb-12">
      {/* Background with ivory tint overlay matching original login-page/style.css */}
      <div 
        className="fixed inset-0 z-[-2] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url(/images/wedding_split_bg.jpg)' }}
      />
      <div className="fixed inset-0 z-[-1] bg-[#F5F3F1]/35 backdrop-blur-[4px]" />

      <div className="flex w-full flex-col items-center justify-center gap-8 px-4 md:px-8">
        
        {/* Header */}
        <header className="text-center flex flex-col items-center">
          <div className="mb-2">
            <FloraLogo size={80} />
          </div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-primary mt-3">
            Welcome to your wedding planning space
          </p>
        </header>

        {/* Visme Form Container */}
        <main className="flex w-full items-center justify-center">
          <div className="relative h-[500px] w-full max-w-[1200px] overflow-hidden rounded-[20px] border border-[#D4AF37]/35 bg-[#E3DBCF] shadow-[0_30px_60px_rgba(94,78,66,0.25),_0_10px_25px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[0_25px_50px_rgba(179,143,77,0.2),_0_8px_20px_rgba(0,0,0,0.06)]">
            <div 
              className="visme_d" 
              data-title="Website Subscription Form" 
              data-url="vm1z8193-website-subscription-form" 
              data-domain="forms" 
              data-full-page="false" 
              data-min-height="500px" 
              data-form-id="188260"
              style={{ width: '100%', minHeight: '470px', display: 'block' }}
            ></div>
            {/* Precision overlay mask to hide the "Powered by Visme" logo */}
            <div className="pointer-events-none absolute bottom-[55px] right-[20px] z-50 h-[45px] w-[290px] bg-[#E3DBCF]"></div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-sm text-[#8E7B6C]">
          <p>&copy; {new Date().getFullYear()} Flora Events Inc. All rights reserved. &bull; <a href="#" className="text-[#3D312A] hover:text-[#5E4E42] transition-colors">Privacy Policy</a> &bull; <a href="#" className="text-[#3D312A] hover:text-[#5E4E42] transition-colors">Terms of Service</a></p>
        </footer>
      </div>
    </div>
  )
}
