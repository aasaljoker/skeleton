'use client'

import { motion } from 'framer-motion'

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
}: {
  eyebrow: string
  title: string
  description?: string
  image?: string
  imageAlt?: string
}) {
  return (
    <section className="relative flex min-h-[60svh] items-end overflow-hidden pb-16 pt-36">
      {image ? (
        <>
          <motion.img
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            src={image}
            alt={imageAlt ?? ''}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        </>
      ) : (
        <div className="absolute inset-0 bg-secondary" />
      )}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className={`text-xs uppercase tracking-[0.45em] ${image ? 'text-white/80' : 'text-accent'}`}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className={`mt-4 max-w-4xl font-serif text-4xl font-light leading-[1.1] text-balance md:text-6xl lg:text-7xl ${image ? 'text-white' : 'text-secondary-foreground'}`}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className={`mt-6 max-w-xl text-sm leading-relaxed text-pretty md:text-base ${image ? 'text-white/85' : 'text-secondary-foreground/80'}`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
