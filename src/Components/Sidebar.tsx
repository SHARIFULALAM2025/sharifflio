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
    <aside
      className="fixed z-50 flex items-center justify-center bg-[#0b1120]/80 backdrop-blur-md bottom-0 left-0 right-0 h-16 w-full flex-row md:bottom-auto md:left-0 md:top-0 md:right-auto md:h-screen md:w-16 md:flex-col"
    >
      <nav
        className="flex items-center flex-row justify-center gap-1 md:flex-col md:gap-0"
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          const linkClassName = isActive
            ? `group relative flex items-center justify-center
                transition-all duration-300
                bg-gradient-to-r from-indigo-600 to-violet-600 text-white
                /* Mobile size */
                h-12 w-12 rounded-xl
                /* Desktop size */
                md:h-12 md:w-16 md:rounded-none
              `
            : `
                group relative flex items-center justify-center
                transition-all duration-300
                text-white/80 hover:bg-white/5 hover:text-white
                /* Mobile size */
                h-12 w-12 rounded-xl
                /* Desktop size */
                md:h-12 md:w-16 md:rounded-none
              `

          return (
            <Link key={item.href} href={item.href} className={linkClassName}>
              <motion.div
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Icon className="h-5 w-5" />
              </motion.div>

              {/* Tooltip - only visible on desktop */}
              <span
                suppressHydrationWarning
                className="
                  absolute left-full top-0 hidden h-12 items-center
                  whitespace-nowrap bg-gradient-to-r from-violet-600 to-indigo-600
                  px-3 text-base text-white opacity-0 translate-x-2
                  transition-all duration-200 ease-out
                  group-hover:opacity-100 group-hover:translate-x-0
                  md:flex
                "
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
