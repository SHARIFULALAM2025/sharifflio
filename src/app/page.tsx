'use client'

import { TypewriterText } from '@/Components/TypewriterText'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaDownload,
  FaLaptopCode,
  FaCode,
  FaUsers,
  FaRocket,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { FaArrowRight } from 'react-icons/fa'
const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/sharifulalam-dev',
    label: 'LinkedIn',
  },
  {
    icon: FaFacebookF,
    href: 'https://www.facebook.com/profile.php?id=61577170528426',
    label: 'Facebook',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/SHARIFULALAM2025',
    label: 'GitHub',
  },
  {
    icon: SiLeetcode,
    href: 'https://leetcode.com/u/SHARIFUL_ALAM',
    label: 'LeetCode',
  },
]

const stats = [
  {
    icon: FaLaptopCode,
    value: '2+',
    label: 'Years Experience',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: FaCode,
    value: '66+',
    label: 'Projects Completed',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FaUsers,
    value: '10+',
    label: 'Happy Clients',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: FaRocket,
    value: '15+',
    label: 'Tech Stack Mastery',
    color: 'from-orange-500 to-amber-500',
  },
]

export default function Home() {
  return (
    <div className="relative">
      {/* ===== First Screen ===== */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-24 md:pl-20 md:pb-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-violet-500/60 bg-slate-900/60 shadow-[0_0_40px_rgba(139,92,246,0.4)] h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-96 lg:w-96 lg:border-4">
            <Image
              src="https://i.ibb.co.com/Q3smQfRJ/Chat-GPT-Image-Aug-2-2026-03-47-10-PM.png"
              alt="SHARIFUL ALAM"
              fill
              sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
              className="object-top"
              priority
            />
          </div>

          {/* Social Icons */}
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-1 rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-1.5 backdrop-blur-sm">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-violet-600 hover:text-white"
                  title={item.label}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-7xl"
        >
          SHARIFUL ALAM
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-3 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl"
        >
          <TypewriterText />
        </motion.p>
      </section>

      {/* ===== Scroll Content ===== */}
      <section className="flex flex-col items-center px-4 pb-12 md:pl-20 md:pb-20">
        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/_Full StackDeveloper_Shariful_Alam.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition hover:opacity-90"
          >
            <FaDownload className="h-4 w-4" />
            Download Resume
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-violet-500/60 px-6 py-3 text-sm font-medium text-violet-300 transition hover:bg-violet-500/10"
          >
            Explore Projects
            <FaArrowRight />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur-sm transition hover:border-slate-700"
              >
                <div
                  className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color}`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="mt-1 text-center text-xs text-slate-400">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </motion.div>
      </section>
    </div>
  )
}
