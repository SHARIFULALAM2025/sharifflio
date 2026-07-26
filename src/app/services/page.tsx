'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  FaCode,
  FaPaintBrush,
  FaBolt,
  FaRocket,
  FaGlobe,
  FaCheckCircle,
} from 'react-icons/fa'

const services = [
  {
    icon: FaCode,
    title: 'Fullstack Web Development',
    description:
      'End-to-end solutions using MERN stack — from database design to pixel-perfect, responsive frontends.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX & Design Strategy',
    description:
      'Beautiful, intuitive interfaces that users love. I blend aesthetics with usability and conversion-focused design.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaBolt,
    title: 'Performance Optimization',
    description:
      'Lightning-fast load times, Core Web Vitals mastery, image optimization, and lazy loading — I make speed a feature.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: FaRocket,
    title: 'Next.js & Modern Frameworks',
    description:
      'SSR, SSG, ISR, App Router, Server Components — I leverage the latest tools to build future-proof applications.',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: FaGlobe,
    title: 'SEO & Accessibility',
    description:
      'Rank higher, reach more people. Semantic HTML, ARIA, schema markup, and mobile-first development by default.',
    color: 'from-rose-500 to-pink-500',
  },
]

const expectations = [
  'Pixel-Perfect UI/UX',
  'Blazing Fast Performance',
  'Clean & Scalable Code',
  'SEO & Accessibility First',
  'End-to-End Ownership',
]

const techStack = [
  'Next.js',
  'React.js',
  'Tailwind',
  'Ant Design',
  'Redux',
  'Typescript',
  'Express.js',
  'MongoDB',
  'Mongoose',
]

export default function ServicesPage() {
  return (
    <section className="min-h-screen px-4 py-16 pr-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <h1 className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-xl text-slate-400">
            I don’t just build websites, I craft{' '}
            <span className="text-violet-400">digital experiences</span> that
            convert, perform, and leave a lasting impression.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          {/* Left Column */}
          <div className="space-y-10">
            {/* What You Can Expect */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="mb-5 text-xl font-semibold text-white">
                What You Can Expect
              </h2>
              <ul className="space-y-3">
                {expectations.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-300"
                  >
                    <FaCheckCircle className="h-4 w-4 shrink-0 text-violet-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack Mastery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="mb-5 text-xl font-semibold text-white">
                Tech Stack Mastery
              </h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:opacity-90"
              >
                Start a Project Together →
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Services Cards */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-slate-700"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
