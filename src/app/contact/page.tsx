'use client'

import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi'
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
  FaArrowRight,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { fireSuccessToast } from '@/Components/SuccessAlert'
import { useRouter } from 'next/navigation'

type Inputs = {
  subject: string
  email: string
  message: string
  fullName: string
  phone: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
const router=useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit = async (data: Inputs) => {
    setIsSubmitting(true)
    setStatus('idle')

    try {
      await emailjs.send(
        'service_eq6ro9i',
        'template_y1ut9sl',
        {
          subject: data.subject,
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        },
        'i5XgpyNRK4OoyQk0O'
      )

      fireSuccessToast(
        "Email Submitted Successfully!", "Please wait a moment, we will process it shortly"
      )
      router.push("/")
      reset()
    } catch (error) {
      console.error(error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="min-h-screen bg-[var(--background)] px-4 py-16 pb-28 text-[var(--foreground)] md:pl-20 md:pr-6 md:pb-16 lg:px-10 lg:pl-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary)] bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Let&apos;s craft something innovative together! Whether it&apos;s a
            project, collaboration, or just a chat — I&apos;m all ears.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="mb-6 text-center text-xl font-semibold text-[var(--foreground)]">
              Contact Information
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500">
                  <HiLocationMarker className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Location
                  </p>
                  <p className="font-medium text-[var(--foreground)]">
                    Uttara, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                  <HiPhone className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Phone
                  </p>
                  <p className="font-medium text-[var(--foreground)]">
                    +880 1829197321
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-green-500">
                  <HiMail className="text-xl text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
                    Email
                  </p>
                  <p className="font-medium text-[var(--foreground)]">
                    sharifullinkdin2025@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid place-content-center">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/sharifulalam-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 hover:text-white"
                >
                  <FaLinkedinIn size={16} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61577170528426"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 hover:text-white"
                >
                  <FaFacebookF size={16} />
                </a>
                <a
                  href="https://github.com/SHARIFULALAM2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 hover:text-white"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://leetcode.com/u/SHARIFUL_ALAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted)] transition-all duration-300 hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 hover:text-white"
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
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-fuchsia-600 opacity-30 blur" />

            <div className="relative rounded-2xl border border-violet-500/30 bg-[#1a1035] p-6 shadow-xl sm:p-8">
              <h2 className="mb-6 text-xl font-semibold text-white">
                Send Me a Email
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Subject */}
                <div>
                  <label className="mb-1.5 block text-sm text-violet-200/80">
                    Subject:
                  </label>
                  <input
                    type="text"
                    {...register('subject', {
                      required: 'Subject is required',
                    })}
                    placeholder="Write here subject...."
                    className="w-full rounded-lg border border-violet-500/20 bg-violet-950/50 px-4 py-2.5 text-white placeholder:text-violet-300/40 transition-all focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400/50"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-sm text-violet-200/80">
                    Your Email:
                  </label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    placeholder="Write your valid email..."
                    className="w-full rounded-lg border border-violet-500/20 bg-violet-950/50 px-4 py-2.5 text-white placeholder:text-violet-300/40 transition-all focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400/50"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-sm text-violet-200/80">
                    Message:
                  </label>
                  <textarea
                    rows={5}
                    {...register('message', {
                      required: 'Message is required',
                      validate: (value) => {
                        const wordCount = value
                          .trim()
                          .split(/\s+/)
                          .filter(Boolean).length
                        return (
                          wordCount <= 500 || 'Message cannot exceed 500 words'
                        )
                      },
                    })}
                    placeholder="Tell me about your project or just say hi..."
                    className="w-full resize-none rounded-lg border border-violet-500/20 bg-violet-950/50 px-4 py-2.5 text-white placeholder:text-violet-300/40 transition-all focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400/50"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Full Name + Phone */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm text-violet-200/80">
                      Full Name:
                    </label>
                    <input
                      type="text"
                      {...register('fullName', {
                        required: 'Full name is required',
                      })}
                      placeholder="Write here name...."
                      className="w-full rounded-lg border border-violet-500/20 bg-violet-950/50 px-4 py-2.5 text-white placeholder:text-violet-300/40 transition-all focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400/50"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm text-violet-200/80">
                      Phone Number:
                    </label>
                    <input
                      type="tel"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9+\-\s()]{7,20}$/,
                          message: 'Please enter a valid phone number',
                        },
                      })}
                      placeholder="Write here number...."
                      className="w-full rounded-lg border border-violet-500/20 bg-violet-950/50 px-4 py-2.5 text-white placeholder:text-violet-300/40 transition-all focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400/50"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className="text-sm text-green-400">
                    Message sent successfully! I will get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-400">
                    Failed to send message. Please try again later.
                  </p>
                )}

                {/* Submit Button */}
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--primary)] to-fuchsia-500 px-8 py-3 font-medium text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Email'}
                    {!isSubmitting && <FaArrowRight />}
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
