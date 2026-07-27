'use client'

import { useState, useEffect } from 'react'


const roles = [
  'Full Stack Developer',
  'Performance Optimizer',
  'MERN Stack Developer',
]

export const TypewriterText=() =>{
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 40 : 90
    const pauseTime = 1200

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1))

        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1))

        if (displayedText.length === 0) {
          setIsDeleting(false)
         
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, roleIndex])

  return (
    <>
      {displayedText}
      <span className="animate-pulse">|</span>
    </>
  )
}


