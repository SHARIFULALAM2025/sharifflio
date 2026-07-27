'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GiThunderball } from 'react-icons/gi'
import { LuExternalLink } from 'react-icons/lu'
import { MdQrCode2 } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'


// ---------- Types ----------
type ProjectCategory = 'all' | 'fullstack' | 'frontend'

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: 'fullstack' | 'frontend'
  featured?: boolean
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  codeUrl?: string
}

// ---------- Dummy data ----------
const projects: Project[] = [
  {
    id: '1',
    title: 'DocEye',
    description:
      'The DocEye project is a Full Stack initiative. The project is actively being developed, and I am contributing as a Full Stack Developer to enhance its features.',
    image: '/projects/doceye.png',
    category: 'fullstack',
    featured: true,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Hero UI', '+18'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '2',
    title: 'Car Cleanify',
    description:
      'The Car Cleanify project is a Full Stack initiative. This project has been successfully completed, showcasing the full scope of my work as a Full Stack Developer.',
    image: '/projects/car-cleanify.png',
    category: 'fullstack',
    featured: true,
    tech: ['Typescript', 'Tailwind', 'Redux', 'AntD', '+7'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: '3',
    title: 'WizCraft Academy',
    description:
      'The WizCraft Academy project is a Full Stack initiative. This project has been successfully completed, showcasing the full scope of my work as a Full Stack Developer.',
    image: '/projects/wizcraft.png',
    category: 'fullstack',
    tech: ['React', 'Tailwind', 'Express.js', 'MongoDB', '+1'],
    liveUrl: '#',
    githubUrl: '#',
  },
  // Add remaining projects here
]

// ---------- Animation variants ----------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.25 },
  },
}

// ---------- Component ----------
export default function Project() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  const counts = {
    all: projects.length,
    fullstack: projects.filter((p) => p.category === 'fullstack').length,
    frontend: projects.filter((p) => p.category === 'frontend').length,
  }

  return (
    <section className="min-h-screen bg-[var(--background)] px-4 py-16 pb-28 text-[var(--foreground)] md:pl-20 md:pr-6 md:pb-16 lg:px-10 lg:pl-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-3 text-lg text-[var(--muted)]">
            Turning{' '}
            <span className="font-medium text-[var(--primary-light)]">
              ideas
            </span>{' '}
            into{' '}
            <span className="font-medium text-[var(--primary-light)]">
              reality
            </span>
            , one line of code at a time.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mb-12 flex justify-center"
        >
          <div className="flex w-full max-w-md flex-col gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 sm:max-w-none sm:w-auto sm:flex-row sm:rounded-full sm:p-1.5">
            {(
              [
                { key: 'all', label: 'All', icon: '🌐' },
                { key: 'fullstack', label: 'Full Stack', icon: '⚙️' },
                { key: 'frontend', label: 'Frontend', icon: '</>' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`relative flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeFilter === tab.key
                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-violet-500/25'
                    : 'text-[var(--muted)] hover:bg-[var(--card-hover)] hover:text-[var(--foreground)]'
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                {tab.label}
                <span
                  className={`ml-1 rounded-full px-1.5 py-0.5 text-xs ${
                    activeFilter === tab.key
                      ? 'bg-white/20 text-white'
                      : 'bg-[var(--border)] text-[var(--muted)]'
                  }`}
                >
                  {counts[tab.key]}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all duration-300 hover:border-[var(--primary)]/40 hover:shadow-xl hover:shadow-violet-500/10"
              >
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Title + Featured */}
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/20 text-sm font-bold text-[var(--primary-light)]">
                        {project.title.charAt(0)}
                      </div>
                      <h3 className="text-lg font-semibold leading-tight text-[var(--foreground)]">
                        {project.title}
                      </h3>
                    </div>

                    {project.featured && (
                      <span className="shrink-0 rounded-full border border-violet-500/30 bg-violet-500/15 px-2.5 py-1 text-xs font-medium text-[var(--primary-light)]">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[var(--border)] bg-[var(--card-hover)] px-2.5 py-1 text-xs text-[var(--muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer actions */}
                  <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--card-hover)] hover:text-[var(--primary-light)]"
                          aria-label="Live demo"
                        >
                          <LuExternalLink size={16} />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--card-hover)] hover:text-[var(--primary-light)]"
                          aria-label="GitHub"
                        >
                          <GiThunderball size={16} />
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--card-hover)] hover:text-[var(--primary-light)]"
                          aria-label="Source code"
                        >
                          <MdQrCode2 size={16} />
                        </a>
                      )}
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-1 text-sm font-medium text-[var(--primary-light)] transition-colors hover:text-[var(--primary)]"
                    >
                      View Details
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-[var(--muted)]">
            Loved what you see? Let’s build something amazing together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-3.5 font-medium text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:bg-[var(--primary-light)]"
          >
            Start a Project
            <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
