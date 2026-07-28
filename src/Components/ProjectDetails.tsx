import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ProjectData } from './Type'
import { BsArrowLeft } from 'react-icons/bs'
import { BiGlobe } from 'react-icons/bi'
import { GiThunderBlade } from 'react-icons/gi'
import { MdQrCode2 } from 'react-icons/md'
import { CgArrowLeft } from 'react-icons/cg'
import { FiUser, FiCalendar, FiTag, FiCheckCircle } from 'react-icons/fi'

interface ProjectDetailsProps {
  singleData: ProjectData | undefined
}

const ProjectDetails = ({ singleData }: ProjectDetailsProps) => {
  if (!singleData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
        <div className="text-center">
          <p className="text-xl mb-4">Project not found</p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-5 py-2 rounded-full font-semibold hover:bg-[var(--primary-light)] transition"
          >
            <BsArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const {
    fullTitle,
    title,
    image,
    description,
    purpose,
    features,
    techStack,
    liveLink,
    githubClient,
    githubServer,
    category,
    role,
    status,
  } = singleData

  const builtWith = [...techStack.frontend, ...techStack.backend]

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-4 py-10 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-8 border border-[var(--border)]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl md:text-5xl font-extrabold  bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-[var(--muted)] font-bold text-sm md:text-base mt-1  bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              {fullTitle}
            </p>
            <span className="mt-3 inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white text-sm font-semibold px-4 py-1.5 rounded-xl capitalize">
              {category}
            </span>
          </div>
        </div>

        {/* Stat cards: Role / Status / Category */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <StatCard icon={<FiUser size={22} />} label="ROLE" value={role} />
          <StatCard
            icon={<FiCalendar size={22} />}
            label="STATUS"
            value={status}
          />
          <StatCard
            icon={<FiTag size={22} />}
            label="CATEGORY"
            value={category}
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[var(--primary-light)] transition"
          >
            <BiGlobe size={18} />
            View Live Demo
          </a>
          <a
            href={githubClient}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] font-semibold px-5 py-2.5 rounded-xl hover:bg-[var(--card-hover)] transition"
          >
            <GiThunderBlade size={18} />
            Frontend Code
          </a>
          {githubServer && githubServer.trim() !== '' && (
            <a
              href={githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[var(--card)] border border-[var(--border)] text-[var(--foreground)] font-semibold px-5 py-2.5 rounded-xl hover:bg-[var(--card-hover)] transition"
            >
              <MdQrCode2 size={18} />
              Backend Code
            </a>
          )}
        </div>

        {/* Built With */}
        <h2 className="text-3xl font-bold text-center mb-6">Built With</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {builtWith.map((tech, idx) => (
            <span
              key={idx}
              className="bg-[var(--card)] border border-[var(--border)] px-6 py-3 rounded-xl font-semibold text-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Overview */}
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Project Overview
          </h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">{purpose}</p>
          <p className="text-[var(--muted)] leading-relaxed">{description}</p>
        </div>

        {/* Key Features */}
        {features && features.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, idx) => {
                const [boldPart, ...rest] = feature.split(':')
                const restText = rest.join(':').trim()
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-[var(--card)] border border-[var(--border)] rounded-xl p-5"
                  >
                    <FiCheckCircle
                      size={20}
                      className="text-[var(--primary-light)] mt-1 flex-shrink-0"
                    />
                    <p className="text-[var(--muted)] leading-relaxed">
                      {restText ? (
                        <>
                          <span className="font-semibold text-[var(--foreground)]">
                            {boldPart}:
                          </span>{' '}
                          {restText}
                        </>
                      ) : (
                        feature
                      )}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Tech Stack breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-[var(--primary-light)]">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[var(--card-hover)] border border-[var(--border)] px-4 py-1.5 rounded-xl text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 text-[var(--accent)]">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-[var(--card-hover)] border border-[var(--border)] px-4 py-1.5 rounded-xl text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-2 bg-[var(--primary)] text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-[var(--primary-light)] transition"
          >
            <CgArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  icon: React.ReactNode
  label: string
  value: string
}

const StatCard = ({ icon, label, value }: StatCardProps) => {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl py-6 px-4 text-center flex flex-col items-center">
      <div className="text-[var(--primary-light)] mb-2">{icon}</div>
      <p className="text-[var(--primary-light)] text-xs font-semibold tracking-widest mb-2">
        {label}
      </p>
      <p className="text-xl font-bold capitalize">{value}</p>
    </div>
  )
}

export default ProjectDetails
