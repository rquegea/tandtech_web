"use client"

import { useState } from "react"

export default function Header() {
  const [currentLanguage, setCurrentLanguage] = useState("EN")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "EN" ? "ES" : "EN")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="relative z-20 flex items-center justify-between p-4 sm:p-6">
      {/* Logo */}
      <div className="flex items-center">
        <svg
          fill="currentColor"
          viewBox="0 0 147 70"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="size-8 sm:size-10 translate-x-[-0.5px] text-white"
        >
          <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z"></path>
          <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z"></path>
        </svg>
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
      <nav className="hidden md:flex items-center space-x-2">
        <a
          href="/work"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          WORK
        </a>
        <a
          href="/about"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          ABOUT
        </a>
        <a
          href="/careers"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          CAREERS
        </a>
        <a
          href="/contact"
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          CONTACT
        </a>
      </nav>

      {/* Desktop Language Selector */}
      <div className="hidden md:flex items-center">
        <button
          onClick={toggleLanguage}
          className="text-white/80 hover:text-white text-xs font-light px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200 flex items-center space-x-1"
        >
          <span className={currentLanguage === "ES" ? "text-white" : "text-white/50"}>ES</span>
          <span className="text-white/30">/</span>
          <span className={currentLanguage === "EN" ? "text-white" : "text-white/50"}>EN</span>
        </button>
      </div>

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
            <div className="border-t border-white/10 pt-2 mt-2">
              <button
                onClick={toggleLanguage}
                className="text-white/80 hover:text-white text-sm font-light py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-200 flex items-center space-x-2 w-full"
              >
                <span>Language:</span>
                <span className={currentLanguage === "ES" ? "text-white" : "text-white/50"}>ES</span>
                <span className="text-white/30">/</span>
                <span className={currentLanguage === "EN" ? "text-white" : "text-white/50"}>EN</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
