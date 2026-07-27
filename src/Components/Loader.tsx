'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface LoaderProps {
  children: React.ReactNode
}

const Loader = ({ children }: LoaderProps) => {
  const [Loading, setLoading] = useState(true)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(time)
  }, [])

  useEffect(() => {
    if (!Loading) {
      const removeTime = setTimeout(() => {
        setShow(false)
      }, 700)
      return () => clearTimeout(removeTime)
    }
  }, [Loading])

  return (
    <>
      {show && (
        <div
          className={`fixed inset-0 z-[999] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 bg-[var(--background)] transition-opacity duration-700 ${
            Loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Spinner + Logo */}
          <div className="relative flex items-center justify-center h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 shrink-0">
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full animate-spin"
              style={{ animationDuration: '1.2s' }}
            >
              {/* Track — soft muted */}
              <circle
                cx={50}
                cy={50}
                r={45}
                fill="none"
                stroke="color-mix(in oklab, var(--primary) 25%, transparent)"
                strokeWidth={5}
              />
              {/* Progress arc — accent indigo */}
              <circle
                cx={50}
                cy={50}
                r={45}
                fill="none"
                stroke="var(--accent)"
                strokeWidth={5}
                strokeDasharray="70 212"
                strokeLinecap="round"
              />
            </svg>

            {/* Logo container */}
            <div className="relative h-9 w-9 xs:h-10 xs:w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full overflow-hidden flex items-center justify-center bg-[var(--card)] ring-2 ring-[var(--primary)]/40">
              <Image
                src="/image/profile.jpg"
                width={56}
                height={56}
                className="object-top w-full h-full"
                alt="logo image"
                priority
              />
            </div>
          </div>

          {/* Loading text */}
          <div className="flex items-center gap-1 text-xs xs:text-sm sm:text-base tracking-wide font-medium text-[var(--muted)]">
            <span>Loading</span>
            <span className="flex gap-0.5">
              <span className="animate-bounce [animation-delay:-0.3s] text-[var(--primary-light)]">
                .
              </span>
              <span className="animate-bounce [animation-delay:-0.15s] text-[var(--primary)]">
                .
              </span>
              <span className="animate-bounce text-[var(--accent)]">.</span>
            </span>
          </div>
        </div>
      )}
      {children}
    </>
  )
}

export default Loader
