'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  FaHome,
  FaUser,
  FaThLarge,
  FaTrophy,
  FaNewspaper,
  FaEnvelope,
} from 'react-icons/fa'

const navItems = [
  { href: '/', icon: FaHome, label: 'Home' },
  { href: '/about', icon: FaUser, label: 'About' },
  { href: '/services', icon: FaThLarge, label: 'Services' },
  { href: '/projects', icon: FaTrophy, label: 'Projects' },
  { href: '/article', icon: FaNewspaper, label: 'Article' },
  { href: '/contact', icon: FaEnvelope, label: 'Contact' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-16 flex-col items-center justify-center bg-[#0b1120]/80 backdrop-blur-md">
      <nav className="flex flex-col items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          const linkClassName = isActive
            ? 'group relative flex h-12 w-16 items-center justify-center transition-all duration-300 bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
            : 'group relative flex h-12 w-16 items-center justify-center transition-all duration-300 text-white/80 hover:bg-white/5 hover:text-white'

          return (
            <Link key={item.href} href={item.href} className={linkClassName}>
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Icon className="h-5 w-5" />
              </motion.div>

              {/* Tooltip */}
              <span
                suppressHydrationWarning
                className="absolute left-full top-0 flex h-12 items-center whitespace-nowrap bg-gradient-to-r from-violet-600 to-indigo-600 px-3 text-base text-white opacity-0 translate-x-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0"
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
