'use client'

import { TypewriterText } from '@/Components/TypewriterText'
import { motion } from 'framer-motion'
import {
  FaCode,
  FaServer,
  FaLayerGroup,
  FaSitemap,
  FaTools,
  FaUser,
  FaRoad,
  FaLightbulb,
  FaBriefcase,
  FaGraduationCap,
  FaBookOpen,
} from 'react-icons/fa'

const skillGroups = [
  {
    title: 'Frontend',
    icon: FaCode,
    color: 'from-pink-500 to-rose-500',
    skills: [
      'Next.js',
      'HTML5',
      'CSS3',
      'Javascript ES6',
      'React.js',
      'Tanstack Query',
      'Tailwind',
      'Ant Design',
      'ShadCn',
      'Next UI',
      'Redux',
      'Bootstrap',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    color: 'from-blue-500 to-cyan-500',
    skills: ['Express.js', 'MongoDB', 'PHP',"SQL","PostgreSQL","Laravel"],
  },
  {
    title: 'Full Stack',
    icon: FaLayerGroup,
    color: 'from-emerald-500 to-green-500',
    skills: ['Typescript'],
  },
  {
    title: 'DSA',
    icon: FaSitemap,
    color: 'from-orange-500 to-amber-500',
    skills: ['Tree', 'Graph', 'Queue', 'Stack', 'Linked List', 'C'],
  },
  {
    title: 'Tools',
    icon: FaTools,
    color: 'from-violet-500 to-purple-500',
    skills: [
      'Git',
      'ESLint',
      'Prettier',
      'Postman',
      'Figma',
      'Multer',
      'Cloudinary',
    ],
  },
]

const infoCards = [
  {
    title: 'Introduction',
    icon: FaUser,
    text: "Hey! I'm a passionate developer who loves turning ideas into reality. When I'm not coding, you'll find me exploring new tech, watching movies, or planning my next adventure.",
  },
  {
    title: 'My Journey',
    icon: FaRoad,
    text: 'Currently pursuing BSc in Computer Science & Engineering at Atish Dipankar University of Science & Technology. Active contributor in the web dev community. Always learning, always building.',
  },
  {
    title: 'Philosophy',
    icon: FaLightbulb,
    text: "I believe in user-first design, performance as a feature, and writing code that's clean, maintainable, and scalable. Every project is a chance to create something meaningful.",
  },
]

const timeline = {
  experience: [

    {
      title: 'Programming Hero',
      role: 'Full Stack Developer Intern',
      date: '01 Oct 2023 - 01 Jan 2024',
    },
  ],
  courses: [
    {
      title: 'Phitron',
      role: 'CSE Fundamentals with Phitron',
      date: ' Running',
    },
    {
      title: 'Hablu Programmer ',
      role: 'Frontend Developer',
      date: '24 Apr, 2025 - 17 Jun, 2025',
    },
    {
      title: 'Programming Hero',
      role: 'Full stack web development',
      date: '01 July, 2025 - 17 Dec, 2025',
    },
  ],
  education: [
    {
      title:
        'Atish Dipankar University of Science & Technology, Uttara ,Dhaka-Bangladesh',
      role: 'BSc in Computer Science and Engineering',
      date: 'Cumulative Grade Point Average (3.45/4.00) Expected Graduation: 2027',
    },
    {
      title: 'Govt. Suhrawardi College, Pirojpur',
      role: 'Group- Science',
      date: '2020',
    },
  ],
}

export default function AboutPage() {
  return (
    <section className="min-h-screen px-4 py-16 pr-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <h1 className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            About Me
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-3 text-lg bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent sm:text-xl md:text-2xl lg:text-3xl font-medium"
          >
            <TypewriterText />
          </motion.p>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            I transform ideas into pixel-perfect, high-performance web
            experiences. Passionate about clean code, modern architecture, and
            creating digital products that people love to use.
          </p>
        </motion.div>

        {/* Technical Arsenal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-2xl font-semibold text-white">
            Technical Arsenal
          </h2>

          <div className="space-y-4">
            {skillGroups.map((group) => {
              const Icon = group.icon
              return (
                <div
                  key={group.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${group.color}`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-1.5 text-sm text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Intro / Journey / Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 grid gap-5 sm:grid-cols-3"
        >
          {infoCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20 text-violet-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {card.text}
                </p>
              </div>
            )
          })}
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="mb-10 text-center text-2xl font-semibold text-white">
            Journey Timeline
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Experience */}
            <div>
              <div className="mb-5 flex items-center gap-2 text-violet-400">
                <FaBriefcase className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Experience</h3>
              </div>
              <div className="space-y-6 border-l border-slate-700 pl-5">
                {timeline.experience.map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full bg-violet-500" />
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-sm text-violet-300">{item.role}</p>
                    <p className="mt-1 text-xs bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <div className="mb-5 flex items-center gap-2 text-blue-400">
                <FaBookOpen className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Courses</h3>
              </div>
              <div className="space-y-6 border-l border-slate-700 pl-5">
                {timeline.courses.map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full bg-blue-500" />
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-sm text-blue-300">{item.role}</p>
                    <p className="mt-1 text-xs bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="mb-5 flex items-center gap-2 text-emerald-400">
                <FaGraduationCap className="h-5 w-5" />
                <h3 className="text-lg font-semibold">Education</h3>
              </div>
              <div className="space-y-6 border-l border-slate-700 pl-5">
                {timeline.education.map((item, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full bg-emerald-500" />
                    <h4 className="font-medium text-white">{item.title}</h4>
                    <p className="text-sm text-emerald-300">{item.role}</p>
                    <p className="mt-1 text-xs bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent ">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
