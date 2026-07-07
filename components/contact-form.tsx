'use client'

import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'

const priceRanges = ['Under ₹10 Lakh', '₹10–25 Lakh', '₹25–50 Lakh', '₹50 Lakh+']

export function ContactForm({ showBudget = false }: { showBudget?: boolean }) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-border bg-card p-10 text-center"
            role="status"
          >
            <Heart className="size-10 text-accent" aria-hidden="true" />
            <p className="mt-4 font-serif text-2xl font-medium text-card-foreground">
              We can&apos;t wait to hear your story
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Thank you for reaching out. Our team will be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -12 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Your Names
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Priya & Aditya"
                  className="rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Tentative Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>
              {showBudget ? (
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  >
                    {priceRanges.map((range) => (
                      <option key={range}>{range}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <label htmlFor="location" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Preferred Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    placeholder="e.g. Goa, Udaipur"
                    className="rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Tell Us Your Story
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How did you meet? What do you dream your day looks like?"
                className="resize-none rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 self-start rounded-full bg-accent px-10 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground shadow-lg"
            >
              Get in Touch
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
