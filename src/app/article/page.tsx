'use client'

import { motion } from 'framer-motion'

export default function ArticleComingSoon() {
  return (
    <section className="relative min-h-screen w-full bg-[var(--background)] overflow-hidden flex items-center justify-center">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1e293b]/40 via-transparent to-transparent pointer-events-none" />

      {/* Top-left badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 z-10"
      >
        <span className="inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-medium bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)]">
          Article
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* COMING */}
          <h1 className="text-[clamp(4rem,15vw,9rem)] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-slate-200 via-slate-300 to-slate-500">
            COMING
          </h1>

          {/* SOON - with the geometric cut style */}
          <div className="relative -mt-4 sm:-mt-6 md:-mt-8">
            <h1 className="text-[clamp(4.5rem,16vw,10rem)] font-black tracking-tighter leading-none text-[var(--background)] relative z-10">
              <span className="relative inline-block">
                {/* Background shape that creates the cut effect */}
                <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 rounded-sm" />
                <span className="relative px-2 sm:px-4 text-slate-900">
                  SOON
                </span>
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Optional subtle subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-[var(--muted)] text-sm sm:text-base tracking-wide"
        >
          Something exciting is on the way
        </motion.p>
      </div>

      {/* Decorative bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
    </section>
  )
}
