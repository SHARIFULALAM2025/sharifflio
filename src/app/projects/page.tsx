'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GiThunderball } from 'react-icons/gi'
import { LuExternalLink } from 'react-icons/lu'
import { MdQrCode2 } from 'react-icons/md'

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
    <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="mt-3 text-[var(--muted)] text-lg">
            Turning{' '}
            <span className="text-[var(--primary-light)] font-medium">
              ideas
            </span>{' '}
            into{' '}
            <span className="text-[var(--primary-light)] font-medium">
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
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-[var(--card)] border border-[var(--border)]">
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
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === tab.key
                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-violet-500/25'
                    : 'text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--card-hover)]'
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                {tab.label}
                <span
                  className={`ml-1 text-xs px-1.5 py-0.5 rounded-full ${
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
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-[var(--card)] border border-[var(--border)] hover:border-[var(--primary)]/40 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
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
                <div className="flex flex-col flex-1 p-5">
                  {/* Title + Featured */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/20 flex items-center justify-center text-[var(--primary-light)] font-bold text-sm shrink-0">
                        {project.title.charAt(0)}
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--foreground)] leading-tight">
                        {project.title}
                      </h3>
                    </div>

                    {project.featured && (
                      <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-violet-500/15 text-[var(--primary-light)] border border-violet-500/30">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--card-hover)] text-[var(--muted)] border border-[var(--border)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer actions */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--border)]">
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary-light)] hover:bg-[var(--card-hover)] transition-colors"
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
                          className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary-light)] hover:bg-[var(--card-hover)] transition-colors"
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
                          className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--primary-light)] hover:bg-[var(--card-hover)] transition-colors"
                          aria-label="Source code"
                        >
                          <MdQrCode2 size={16} />
                        </a>
                      )}
                    </div>

                    <a
                      href={`/projects/${project.id}`}
                      className="text-sm font-medium text-[var(--primary-light)] hover:text-[var(--primary)] transition-colors flex items-center gap-1"
                    >
                      View Details
                      <span className="transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
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
          <p className="text-[var(--muted)] mb-6">
            Loved what you see? Let’s build something amazing together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary-light)] shadow-lg shadow-violet-500/25 transition-all duration-300"
          >
            Start a Project
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
