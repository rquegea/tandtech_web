"use client"

import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="relative z-20 flex items-center justify-between px-18 md:px-28 lg:px-36 py-6">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/trucoytrufa300.png" alt="Logo" className="h-16 sm:h-18 w-auto" decoding="async" />
      </div>

      {/* Mobile menu button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-white p-2" aria-label="Toggle mobile menu">
        <div className="w-6 h-6 flex flex-col justify-center space-y-1">
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </div>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <a
          href="/work"
          className="text-white/80 hover:text-white text-xs tracking-wider font-light transition-colors"
        >
          WORK
        </a>
        <a
          href="/about"
          className="text-white/80 hover:text-white text-xs tracking-wider font-light transition-colors"
        >
          ABOUT
        </a>
        <a
          href="/careers"
          className="text-white/80 hover:text-white text-xs tracking-wider font-light transition-colors"
        >
          CAREERS
        </a>
        <a
          href="/contact"
          className="text-white/80 hover:text-white text-xs tracking-wider font-light transition-colors"
        >
          CONTACT
        </a>
      </nav>

      

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col p-4 space-y-2">
            <a
              href="/work"
              className="text-white/80 hover:text-white text-sm font-light py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              WORK
            </a>
            <a
              href="/about"
              className="text-white/80 hover:text-white text-sm font-light py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="/careers"
              className="text-white/80 hover:text-white text-sm font-light py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CAREERS
            </a>
            <a
              href="/contact"
              className="text-white/80 hover:text-white text-sm font-light py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </a>
            
          </nav>
        </div>
      )}
    </header>
  )
}
