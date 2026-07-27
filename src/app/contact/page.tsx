'use client'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si' // or replace with your preferred icon

export default function Contact() {
  return (
    <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="mt-4 text-[var(--muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Let&apos;s craft something innovative together! Whether it&apos;s a
            project, collaboration, or just a chat — I&apos;m all ears.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Left - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=""
          >
            <h2 className="text-xl font-semibold text-center text-[var(--foreground)] mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shrink-0">
                  <HiLocationMarker className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
                    Location
                  </p>
                  <p className="text-[var(--foreground)] font-medium">
                    Uttara, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0">
                  <HiPhone className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
                    Phone
                  </p>
                  <p className="text-[var(--foreground)] font-medium">
                    +880 1829197321
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--card)] border border-[var(--border)]">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center shrink-0">
                  <HiMail className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--muted)] font-medium">
                    Email
                  </p>
                  <p className="text-[var(--foreground)] font-medium">
                    sharifullinkdin2025@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8 grid place-content-center items-center">
              <div className="flex text-center items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/sharifulalam-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 transition-all duration-300"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61577170528426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 transition-all duration-300"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="https://github.com/SHARIFULALAM2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 transition-all duration-300"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-white hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 transition-all duration-300"
                >
                  <SiLeetcode size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary)] to-fuchsia-600 rounded-2xl blur opacity-30" />

            <div className="relative bg-[#1a1035] border border-violet-500/30 rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-6">
                Send Me a Email
              </h2>

              <form className="space-y-5">
                {/* Name + Email */}

                <div>
                  <label className="block text-sm text-violet-200/80 mb-1.5">
                    Subject:
                  </label>
                  <input
                    type="text"
                    placeholder="write here subject...."
                    className="w-full px-4 py-2.5 rounded-lg bg-violet-950/50 border border-violet-500/20 text-white placeholder:text-violet-300/40 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm text-violet-200/80 mb-1.5">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    placeholder="write your valid email... "
                    className="w-full px-4 py-2.5 rounded-lg bg-violet-950/50 border border-violet-500/20 text-white placeholder:text-violet-300/40 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/50 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-violet-200/80 mb-1.5">
                    Message:
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full px-4 py-2.5 rounded-lg bg-violet-950/50 border border-violet-500/20 text-white placeholder:text-violet-300/40 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/50 transition-all resize-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm text-violet-200/80 mb-1.5">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      placeholder="write here name...."
                      className="w-full px-4 py-2.5 rounded-lg bg-violet-950/50 border border-violet-500/20 text-white placeholder:text-violet-300/40 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-violet-200/80 mb-1.5">
                      Phone Number:
                    </label>
                    <input
                      type="number"
                      placeholder="write here number...."
                      className="w-full px-4 py-2.5 rounded-lg bg-violet-950/50 border border-violet-500/20 text-white placeholder:text-violet-300/40 focus:outline-none focus:border-violet-400 focus:ring-1 focus:ring-violet-400/50 transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--primary)] to-fuchsia-500 text-white font-medium hover:opacity-90 shadow-lg shadow-violet-500/30 transition-all duration-300 flex items-center gap-2"
                  >
                    Send Message
                    <span>→</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
