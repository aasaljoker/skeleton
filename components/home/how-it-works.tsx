'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Check, MessageSquare, Sparkles, Send, MapPin, Calendar, Users } from 'lucide-react'

// Step data
interface Step {
  id: number
  title: string
  subtext: string
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Share your requirements',
    subtext: 'Tell us your event date, budget, location, type of venue, guest count, etc.',
  },
  {
    id: 2,
    title: 'Get a personalised proposal',
    subtext: 'Get the best deals on venue, catering, and decor as per your preferences.',
  },
  {
    id: 3,
    title: 'Confirm and book',
    subtext: 'Pay a minimum amount & lock the deal within 7 days. Leave the rest to us.',
  },
]

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isDesktop) return
    if (latest < 0.33) {
      setActiveStep(1)
    } else if (latest < 0.66) {
      setActiveStep(2)
    } else {
      setActiveStep(3)
    }
  })

  useEffect(() => {
    if (isDesktop) return

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-step-id'))
          if (id) {
            setActiveStep(id)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    stepRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      stepRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [isDesktop])

  const handleStepClick = (stepId: number) => {
    if (isDesktop) {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const containerStart = rect.top + scrollTop
      const containerHeight = rect.height
      const viewportHeight = window.innerHeight

      const scrollRange = containerHeight - viewportHeight

      let targetProgress = 0.15
      if (stepId === 2) targetProgress = 0.50
      if (stepId === 3) targetProgress = 0.85

      window.scrollTo({
        top: containerStart + scrollRange * targetProgress,
        behavior: 'smooth'
      })
    } else {
      const stepElement = stepRefs[stepId - 1].current
      if (stepElement) {
        stepElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }
  }

  // Floating decoration leaves/flowers for the illustration panel background
  const renderFloralBackground = () => (
    <svg
      className="absolute inset-0 w-full h-full text-[#E5D3B3]/20 pointer-events-none transition-transform duration-1000 ease-out"
      style={{ transform: `rotate(${(activeStep - 1) * 30}deg)` }}
      viewBox="0 0 400 400"
      fill="currentColor"
    >
      <defs>
        <path
          id="leaf"
          d="M 0 0 C 20 -20, 40 -20, 40 0 C 40 20, 20 20, 0 0 Z"
        />
        <g id="flower">
          <circle cx="0" cy="0" r="8" className="fill-[#C5A880]/30" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <use
              key={angle}
              href="#leaf"
              transform={`rotate(${angle}) translate(12, 0) scale(0.6)`}
              className="fill-[#E5D3B3]/40"
            />
          ))}
        </g>
      </defs>
      {/* Intricate concentric floral frames */}
      <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="1" strokeDasharray="4,6" fill="none" />
      <circle cx="200" cy="200" r="145" stroke="currentColor" strokeWidth="0.75" fill="none" />
      <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" strokeDasharray="8,4" fill="none" />
      
      {/* Decorative floral elements around the ring */}
      <use href="#flower" x="200" y="45" />
      <use href="#flower" x="355" y="200" />
      <use href="#flower" x="200" y="355" />
      <use href="#flower" x="45" y="200" />
      
      <use href="#leaf" x="290" y="110" transform="rotate(45 290 110) scale(1.2)" />
      <use href="#leaf" x="290" y="290" transform="rotate(135 290 290) scale(1.2)" />
      <use href="#leaf" x="110" y="290" transform="rotate(225 110 290) scale(1.2)" />
      <use href="#leaf" x="110" y="110" transform="rotate(315 110 110) scale(1.2)" />
    </svg>
  )

  // Sub-illustration component for Step 1
  const renderStep1Illustration = () => (
    <motion.div
      key="step1"
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -15 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full h-full flex items-center justify-center p-6"
    >
      {/* Wrapper to hold both Phone and Hand */}
      <div className="relative">
        {/* Stylized Floating Smartphone Mockup */}
        <div className="relative w-[180px] h-[310px] bg-white rounded-[32px] shadow-2xl border-4 border-[#7A1D4B]/15 overflow-hidden flex flex-col z-10">
          {/* Phone Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-b-xl z-20" />
          
          {/* Chat Header */}
          <div className="bg-[#7A1D4B] text-white pt-5 pb-2 px-3 text-center border-b border-[#7A1D4B]/10 z-10">
            <p className="text-[10px] font-medium tracking-wider">FLORA CONCIERGE</p>
            <div className="flex items-center justify-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-[7px] text-white/70">Online Planner</span>
            </div>
          </div>

          {/* Chat Screen Messages Area */}
          <div className="flex-1 bg-[#FDFBF7] p-2.5 flex flex-col gap-2 overflow-y-auto text-[8.5px]">
            {/* Welcome Message (Incoming) */}
            <div className="self-start max-w-[85%] bg-white border border-[#E5D3B3] text-stone-700 rounded-2xl rounded-tl-none p-2 shadow-sm">
              <p>Welcome! Tell us about your dream wedding requirements ✨</p>
            </div>

            {/* User Message (Outgoing) */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="self-end max-w-[90%] bg-[#7A1D4B] text-white rounded-2xl rounded-tr-none p-2.5 shadow-md mt-1"
            >
              <p className="font-medium">I want my wedding in Goa. My budget is 60 Lakhs</p>
            </motion.div>

            {/* Typing indicator or quick labels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-1 flex flex-wrap gap-1"
            >
              <div className="bg-white border border-[#7A1D4B]/20 text-[#7A1D4B] rounded-full px-2 py-0.5 font-medium flex items-center gap-0.5 scale-90 origin-left">
                <MapPin className="w-2.5 h-2.5" /> Goa
              </div>
              <div className="bg-white border border-[#7A1D4B]/20 text-[#7A1D4B] rounded-full px-2 py-0.5 font-medium flex items-center gap-0.5 scale-90 origin-left">
                <Sparkles className="w-2.5 h-2.5" /> Luxury
              </div>
            </motion.div>
          </div>

          {/* Input Bar */}
          <div className="p-2 bg-white border-t border-stone-100 flex items-center gap-1.5">
            <div className="flex-1 bg-stone-50 rounded-full py-1 px-2.5 text-[8px] text-stone-400 border border-stone-100">
              Type message...
            </div>
            <div className="w-5 h-5 bg-[#7A1D4B] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#601438] transition-colors">
              <Send className="w-2.5 h-2.5" />
            </div>
          </div>
        </div>

        {/* Elegant Hand holding the phone from the bottom right */}
        <div className="absolute -bottom-10 -right-6 w-[200px] h-[220px] pointer-events-none z-30">
          <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sleeve (plum color to match brand) */}
            <path d="M130 220 L190 220 C190 170 165 135 135 125 L105 160 Z" fill="#7A1D4B" />
            {/* Gold watch or cuff line */}
            <path d="M135 125 L105 160" stroke="#C5A880" strokeWidth="4.5" strokeLinecap="round" />
            {/* Hand palm & fingers in soft skin tone */}
            <path d="M105 160 C90 145 78 125 72 105 C66 85 72 75 82 75 C92 75 98 95 105 110 C108 95 112 80 120 80 C128 80 130 95 128 110 C132 98 138 88 145 88 C152 88 152 100 148 112 C152 102 158 95 164 95 C170 95 170 108 164 120 C155 142 135 165 105 160 Z" fill="#FDF6EE" stroke="#E5D3B3" strokeWidth="2" strokeLinejoin="round" />
            {/* Thumb wrapping around screen */}
            <path d="M72 105 C58 105 48 110 44 120 C40 128 48 133 56 130 C64 127 68 120 72 105 Z" fill="#FDF6EE" stroke="#E5D3B3" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Floating Requirement Tags around phone */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="absolute top-12 left-[-16px] md:left-[-32px] bg-white shadow-lg border border-[#E5D3B3] rounded-2xl p-2 flex items-center gap-1.5 text-xs text-stone-700 font-sans z-20"
      >
        <div className="w-6 h-6 bg-[#FAF6F0] text-[#7A1D4B] rounded-lg flex items-center justify-center">
          <Calendar className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[8px] text-stone-400 font-bold uppercase tracking-wider">Date</p>
          <p className="text-[10px] font-semibold">Dec 2026</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
        className="absolute bottom-16 right-[-16px] md:right-[-32px] bg-white shadow-lg border border-[#E5D3B3] rounded-2xl p-2 flex items-center gap-1.5 text-xs text-stone-700 font-sans z-20"
      >
        <div className="w-6 h-6 bg-[#FAF6F0] text-[#7A1D4B] rounded-lg flex items-center justify-center">
          <Users className="w-3.5 h-3.5" />
        </div>
        <div>
          <p className="text-[8px] text-stone-400 font-bold uppercase tracking-wider">Guests</p>
          <p className="text-[10px] font-semibold">300 Guests</p>
        </div>
      </motion.div>
    </motion.div>
  )

  // Sub-illustration component for Step 2
  const renderStep2Illustration = () => {
    // Helper to render marigold flower SVGs
    const Marigold = ({ size = 28, className = '' }) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`${className} filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]`}
      >
        {/* Layered concentric petals of marigold */}
        {/* Outer petals: dark orange */}
        <g fill="#E65C00">
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <path
              key={angle}
              d="M 50 50 C 40 20, 60 20, 50 50"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </g>
        {/* Mid petals: bright orange */}
        <g fill="#FF8C00">
          {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle) => (
            <path
              key={angle}
              d="M 50 50 C 42 28, 58 28, 50 50"
              transform={`rotate(${angle} 50 50) scale(0.85) translate(8, 8)`}
            />
          ))}
        </g>
        {/* Inner petals: yellow */}
        <g fill="#FFD700">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <circle
              key={angle}
              cx="50"
              cy="38"
              r="10"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </g>
        {/* Center core */}
        <circle cx="50" cy="50" r="12" fill="#E6A100" />
        <circle cx="50" cy="50" r="6" fill="#A83E00" />
      </svg>
    )

    return (
      <motion.div
        key="step2"
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -15 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="relative w-full h-full flex items-center justify-center p-6"
      >
        {/* Elegantly tilted Wedding Invitation Card */}
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="relative w-[200px] h-[270px] bg-[#FAF6F0] rounded-xl shadow-2xl p-5 border border-[#E5D3B3] flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle gold invitation border */}
          <div className="absolute inset-2 border border-[#E5D3B3]/40 rounded-lg pointer-events-none" />
          <div className="absolute inset-2.5 border border-[#C5A880]/30 rounded-lg pointer-events-none" />

          {/* Invitation Top Header */}
          <div className="text-center mt-2">
            <span className="text-[7px] tracking-[0.3em] font-medium text-[#C5A880] uppercase">
              Save The Date
            </span>
            <div className="w-8 h-px bg-[#E5D3B3]/60 mx-auto mt-1" />
          </div>

          {/* Bride & Groom Names in rich serif script */}
          <div className="text-center my-auto">
            <h4 className="font-serif text-2xl md:text-3xl font-semibold text-[#7A1D4B] leading-none">
              Rahul
            </h4>
            <span className="font-serif text-sm italic text-[#C5A880] my-1.5 block">&</span>
            <h4 className="font-serif text-2xl md:text-3xl font-semibold text-[#7A1D4B] leading-none">
              Kajal
            </h4>
          </div>

          {/* Invitation details */}
          <div className="text-center mb-2 z-10">
            <p className="text-[7.5px] uppercase tracking-[0.2em] font-medium text-stone-500">
              Personalised Proposal
            </p>
            <p className="text-[6.5px] font-sans text-stone-400 mt-1">
              Venue: Beachfront Resort, Goa
            </p>
            <p className="text-[6.5px] font-sans text-stone-400">
              Catering, Decor & Lights Included
            </p>
          </div>

          {/* Marigolds draped on the card */}
          <Marigold size={34} className="absolute -top-1 -left-1" />
          <Marigold size={26} className="absolute top-4 -left-2" />
          <Marigold size={26} className="absolute -top-2 left-5" />

          <Marigold size={34} className="absolute -bottom-1 -right-1" />
          <Marigold size={26} className="absolute bottom-4 -right-2" />
          <Marigold size={26} className="absolute -bottom-2 right-5" />
        </motion.div>

        {/* Extra floating marigolds outside */}
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="absolute top-10 right-6"
        >
          <Marigold size={36} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
          className="absolute bottom-10 left-6"
        >
          <Marigold size={30} />
        </motion.div>
      </motion.div>
    )
  }

  // Sub-illustration component for Step 3
  const renderStep3Illustration = () => (
    <motion.div
      key="step3"
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -15 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full h-full flex items-center justify-center p-6"
    >
      {/* Traditional Indian Wedding Mandap Stage Setup */}
      <div className="relative w-[240px] h-[240px] flex items-end justify-center">
        {/* Mandap Floor Platform */}
        <div className="w-full h-5 bg-gradient-to-r from-[#C5A880]/70 via-[#E5D3B3] to-[#C5A880]/70 rounded-md relative z-10 border border-[#C5A880]/40 shadow-md">
          {/* Soft carpet top */}
          <div className="absolute inset-x-1 top-0 h-1 bg-[#7A1D4B]/70 rounded-t-sm" />
        </div>

        {/* Mandap Pillars (Left and Right Columns) */}
        {/* Left Pillars */}
        <div className="absolute bottom-5 left-8 w-2 h-32 bg-gradient-to-b from-[#E5D3B3] to-[#C5A880] border border-[#C5A880]/40 z-0">
          {/* Flower wraps on pillars */}
          <div className="absolute top-8 left-0 right-0 h-3 bg-rose-400/80 rounded-full" />
          <div className="absolute top-16 left-0 right-0 h-3 bg-amber-400/80 rounded-full" />
          <div className="absolute top-24 left-0 right-0 h-3 bg-rose-400/80 rounded-full" />
        </div>
        <div className="absolute bottom-5 left-12 w-2 h-32 bg-gradient-to-b from-[#E5D3B3] to-[#C5A880] border border-[#C5A880]/40 z-0 opacity-80">
          <div className="absolute top-12 left-0 right-0 h-3 bg-amber-400/80 rounded-full" />
          <div className="absolute top-20 left-0 right-0 h-3 bg-rose-400/80 rounded-full" />
        </div>

        {/* Right Pillars */}
        <div className="absolute bottom-5 right-8 w-2 h-32 bg-gradient-to-b from-[#E5D3B3] to-[#C5A880] border border-[#C5A880]/40 z-0">
          <div className="absolute top-8 left-0 right-0 h-3 bg-rose-400/80 rounded-full" />
          <div className="absolute top-16 left-0 right-0 h-3 bg-amber-400/80 rounded-full" />
          <div className="absolute top-24 left-0 right-0 h-3 bg-rose-400/80 rounded-full" />
        </div>
        <div className="absolute bottom-5 right-12 w-2 h-32 bg-gradient-to-b from-[#E5D3B3] to-[#C5A880] border border-[#C5A880]/40 z-0 opacity-80">
          <div className="absolute top-12 left-0 right-0 h-3 bg-amber-400/80 rounded-full" />
          <div className="absolute top-20 left-0 right-0 h-3 bg-rose-400/80 rounded-full" />
        </div>

        {/* Draped Arch Canopy at the top */}
        <div className="absolute bottom-32 w-[190px] h-12 z-10 flex items-start justify-center">
          {/* Main Gold Canopy Rod */}
          <div className="w-full h-3.5 bg-gradient-to-r from-[#C5A880] via-[#E5D3B3] to-[#C5A880] rounded-full border border-[#C5A880]/40 relative">
            {/* Elegant Floral Garland draping from rod */}
            <div className="absolute -bottom-2 inset-x-4 h-2 bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500 rounded-full" />
          </div>
          
          {/* Peach/Pink Drapery flowing from sides */}
          <svg className="absolute top-2.5 left-0 w-16 h-28 text-pink-400/60 fill-current" viewBox="0 0 100 200">
            <path d="M 0 0 Q 30 20, 40 80 Q 50 140, 15 200 L 0 200 Z" />
          </svg>
          <svg className="absolute top-2.5 right-0 w-16 h-28 text-pink-400/60 fill-current" viewBox="0 0 100 200">
            <path d="M 100 0 Q 70 20, 60 80 Q 50 140, 85 200 L 100 200 Z" />
          </svg>
        </div>

        {/* Royal Seating Inside Mandap (Chairs/Sofa) */}
        <div className="absolute bottom-5 inset-x-0 h-14 z-10 flex items-center justify-center gap-3">
          {/* Left royal chair */}
          <div className="w-8 h-12 bg-amber-50 border-2 border-[#C5A880] rounded-lg relative shadow-sm flex flex-col justify-end">
            <div className="absolute top-1 inset-x-1.5 bottom-4 bg-[#7A1D4B]/70 rounded-md" />
            <div className="h-2 bg-[#C5A880] rounded-b-sm" />
          </div>
          {/* Right royal chair */}
          <div className="w-8 h-12 bg-amber-50 border-2 border-[#C5A880] rounded-lg relative shadow-sm flex flex-col justify-end">
            <div className="absolute top-1 inset-x-1.5 bottom-4 bg-[#7A1D4B]/70 rounded-md" />
            <div className="h-2 bg-[#C5A880] rounded-b-sm" />
          </div>
        </div>

        {/* Small Hawan Kund (Fire altar) decoration in front */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-6 h-4 bg-stone-700 rounded-b-sm z-20 flex items-center justify-center">
          <div className="w-3 h-3 bg-amber-500 rounded-full animate-ping" />
        </div>

        {/* Floating large pink checkmark above Mandap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: -8 }}
          transition={{
            delay: 0.3,
            type: 'spring',
            stiffness: 150,
            damping: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 2.5
          }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-pink-400 to-[#7A1D4B] rounded-full shadow-2xl flex items-center justify-center text-white border-2 border-white z-30"
        >
          <Check className="w-8 h-8 stroke-[3.5]" />
        </motion.div>
      </div>
    </motion.div>
  )

  const renderIllustration = () => {
    switch (activeStep) {
      case 1:
        return renderStep1Illustration()
      case 2:
        return renderStep2Illustration()
      case 3:
        return renderStep3Illustration()
      default:
        return null
    }
  }

  return (
    <section 
      ref={containerRef}
      className="relative lg:h-[300vh] h-auto bg-[#FDFBF7] border-y border-[#E5D3B3]/25 font-sans"
    >
      {/* Decorative top border garland */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#E5D3B3] via-[#7A1D4B]/40 to-[#E5D3B3] z-20" />

      {/* Sticky Inner Wrapper */}
      <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-center py-24 md:py-32 lg:py-0 w-full overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 md:px-6 flex flex-col items-center w-full">
        {/* Centered Header */}
        <div className="text-center max-w-xl mb-16 md:mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#7A1D4B] tracking-tight leading-tight">
            How it works
          </h2>
          <p className="mt-3 text-xs md:text-sm font-semibold text-stone-500 uppercase tracking-[0.25em]">
            Book your wedding service in 3 easy steps
          </p>
          <div className="w-12 h-0.5 bg-[#C5A880] mx-auto mt-4" />
        </div>

        {/* Two Columns Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Stepper Menu */}
          <div className="relative flex flex-col gap-10">
            
            {/* Dashed vertical line linking steps */}
            <div className="absolute left-4 md:left-6 top-6 bottom-6 w-0.5 border-l-2 border-dashed border-[#E5D3B3] z-0 pointer-events-none -translate-x-1/2" />

            {/* Animated solid line overlay */}
            <motion.div
              className="absolute left-4 md:left-6 top-6 bottom-6 w-0.5 bg-[#7A1D4B] z-0 pointer-events-none -translate-x-1/2 origin-top"
              animate={isDesktop ? {} : { scaleY: (activeStep - 1) / (steps.length - 1) }}
              style={isDesktop ? { scaleY: scrollYProgress } : undefined}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {steps.map((step, index) => {
              const isActive = activeStep === step.id
              return (
                <div
                  key={step.id}
                  ref={stepRefs[index]}
                  data-step-id={step.id}
                  onClick={() => handleStepClick(step.id)}
                  className="group relative flex items-start gap-4 md:gap-6 cursor-pointer select-none z-10 transition-all duration-300"
                >
                  {/* Step Number Circle */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-semibold border-2 transition-all duration-500 shadow-sm ${
                      isActive
                        ? 'bg-[#7A1D4B] border-[#7A1D4B] text-white scale-110 shadow-md shadow-[#7A1D4B]/20'
                        : 'bg-white border-[#E5D3B3] text-[#C5A880] group-hover:border-[#7A1D4B]/50 group-hover:text-[#7A1D4B]'
                    }`}
                  >
                    {step.id}
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 pt-1 md:pt-2">
                    {/* Step Title */}
                    <h3
                      className={`font-serif leading-tight transition-all duration-300 ${
                        isActive
                          ? 'text-lg md:text-2xl font-bold text-[#7A1D4B]'
                          : 'text-base md:text-xl font-medium text-[#C5A880] group-hover:text-[#7A1D4B]/80'
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Subtext (Expanded when active) */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{
                            height: 'auto',
                            opacity: 1,
                            marginTop: 8,
                            transition: { height: { duration: 0.3 }, opacity: { duration: 0.25, delay: 0.05 } }
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            marginTop: 0,
                            transition: { height: { duration: 0.25 }, opacity: { duration: 0.15 } }
                          }}
                          className="overflow-hidden"
                        >
                          <p className="text-stone-600 text-xs md:text-sm leading-relaxed max-w-md font-sans">
                            {step.subtext}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Side: Illustration Panel */}
          <div className="flex justify-center items-center">
            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full bg-white/40 border border-[#E5D3B3]/40 shadow-xl flex items-center justify-center overflow-hidden">
              {/* Subtle gold floral background pattern frame */}
              {renderFloralBackground()}
              
              {/* Central Dynamic Illustration area */}
              <div className="relative z-10 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full flex items-center justify-center overflow-visible">
                <AnimatePresence mode="wait">
                  {renderIllustration()}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Center CTA Button at the bottom */}
        <div className="mt-16 md:mt-24 text-center">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-[#7A1D4B] hover:bg-[#601438] px-8 py-4.5 text-xs font-semibold uppercase tracking-[0.25em] text-white shadow-xl hover:shadow-[#7A1D4B]/20 transition-all duration-300 font-sans"
          >
            Start my wedding planning
          </motion.a>
        </div>
      </div>
    </div>
  </section>
)
}
