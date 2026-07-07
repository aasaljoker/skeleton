'use client'

import { useState, useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

export function InteractiveInvite({ className }: { className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  
  // Motion values for drag tracking
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)

  // Map drag distance to 3D rotation angles
  const rotateY = useTransform(dragX, [-200, 200], [-45, 45])
  const rotateX = useTransform(dragY, [-200, 200], [45, -45])

  // Apply spring physics for buttery smooth motion and automatic return on release
  const springRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 })
  const springRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 })

  const [isFlipped, setIsFlipped] = useState(false)

  // Flip toggle
  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-8 ${className ?? ''}`}>
      {/* CSS 3D Perspective container */}
      <div className="relative h-[480px] w-[340px] [perspective:1200px] cursor-grab active:cursor-grabbing">
        <motion.div
          ref={cardRef}
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Springs back on release
          dragElastic={0.6}
          style={{
            x: dragX,
            y: dragY,
            rotateX: springRotateX,
            rotateY: springRotateY,
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 85, damping: 18 }}
          className="relative h-full w-full rounded-2xl shadow-2xl transition-shadow duration-300 hover:shadow-[0_30px_60px_rgba(142,29,82,0.18)]"
        >
          {/* Front Side: Generated Image Card */}
          <div 
            className="absolute inset-0 h-full w-full rounded-2xl bg-white border border-border overflow-hidden [backface-visibility:hidden]"
            style={{ transform: 'rotateY(0deg)' }}
          >
            <img 
              src="/images/wedding_invitation_mockup.png" 
              alt="Luxury wedding invitation mockup" 
              className="h-full w-full object-cover pointer-events-none select-none"
            />
            {/* Glossy light effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/20 pointer-events-none" />
          </div>

          {/* Back Side: Elegant brand card */}
          <div 
            className="absolute inset-0 h-full w-full rounded-2xl bg-secondary border border-border p-6 flex flex-col items-center justify-center [backface-visibility:hidden]"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div className="border border-primary/20 rounded-xl h-full w-full flex flex-col items-center justify-center p-6 bg-white/95 text-center shadow-inner">
              {/* Brand Vine logo */}
              <div className="size-16 rounded-full bg-secondary flex items-center justify-center overflow-hidden shadow-sm">
                <img src="/images/flora-brand-logo.png" alt="Flora Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-serif text-3xl text-primary mt-6">Flora.</h3>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">Bespoke Wedding House</p>
              <div className="w-12 h-[1px] bg-accent/40 my-6" />
              <p className="text-xs text-foreground/80 italic leading-relaxed">
                "We craft every detail of your invites from the scratch, setting the perfect tone for your story."
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={handleFlip}
        className="rounded-full bg-secondary border border-primary/20 px-6 py-2.5 text-[10px] font-sans uppercase tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer shadow-sm"
      >
        {isFlipped ? 'Show Front Cover' : 'Show Back Details'}
      </button>
    </div>
  )
}
