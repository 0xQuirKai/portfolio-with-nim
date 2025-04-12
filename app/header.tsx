'use client'

import { useState } from 'react'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="mb-8 flex items-center justify-between px-4 py-2 relative">
      {/* Left Logo + Tagline */}
      <div className="flex items-center gap-2 whitespace-nowrap overflow-hidden">
        <Link
          href="/"
          className="font-medium text-black dark:text-white text-sm sm:text-base md:text-lg"
        >
          Khalil Tahraoui
        </Link>
        <span className="text-black dark:text-white">-</span>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500 text-xs sm:text-sm truncate"
          delay={0.5}
        >
          Engineering Robust Systems
        </TextEffect>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4">
        <Link href="/about" className="text-black dark:text-white">
          About
        </Link>
        <Link href="/solutions" className="text-black dark:text-white">
          Solutions
        </Link>
        <Link href="/blog" className="text-black dark:text-white">
          Blog
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-black dark:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-14 right-4 z-50 bg-white dark:bg-zinc-800 shadow-lg rounded-lg flex flex-col gap-2 p-4 md:hidden">
          <Link href="/about" className="text-black dark:text-white">
            About
          </Link>
          <Link href="/solutions" className="text-black dark:text-white">
            Solutions
          </Link>
          <Link href="/blog" className="text-black dark:text-white">
            Blog
          </Link>
        </div>
      )}
    </header>
  )
}
