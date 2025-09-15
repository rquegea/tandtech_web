// components/header.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  isSplashActive: boolean;
}

export default function Header({ isSplashActive }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-20 flex items-center w-full px-8 md:px-12 lg:px-16 py-6">
      {/* Elemento izquierdo (logo o texto) */}
      <div className="flex items-center flex-shrink-0">
        <AnimatePresence initial={false} mode="wait">
          {isSplashActive ? (
            <motion.span
              key="splash-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-white/90 text-sm font-light"
            >
              Making <span className="italic instrument">brands</span> visible
            </motion.span>
          ) : (
            <motion.a
              href="/"
              key="logo-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <img
                src="/trucoytrufa300.png"
                alt="Logo"
                className="h-16 sm:h-18 w-auto"
                decoding="async"
              />
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* Espaciador invisible */}
      <div className="flex-grow" />

      {/* Elemento derecho (menú de navegación) */}
      {/* AÑADIMOS 'flex items-center' AQUÍ PARA ALINEAR TODO VERTICALMENTE */}
      <div className="flex items-center flex-shrink-0">
        <button onClick={toggleMobileMenu} className="md:hidden text-white p-2" aria-label="Toggle mobile menu">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/work" className="text-white/80 hover:text-white text-xs tracking-wider font-light transition-colors">WORK</a>
          <a href="/about" className="text-white/80 hover:text-white text-xs tracking-wider font-light transition-colors">ABOUT</a>
          <a href="/careers" className="text-white/80 hover:text-white text-xs tracking-wider font-light transition-colors">CAREERS</a>
          <a href="/contact" className="text-white/80 hover:text-white text-xs tracking-wider font-light transition-colors">CONTACT</a>
        </nav>
      </div>

      {/* Menú desplegable para móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col p-4 space-y-2">
            <a href="/work" className="text-white/80 hover:text-white text-sm font-light py-3 px-4 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>WORK</a>
            <a href="/about" className="text-white/80 hover:text-white text-sm font-light py-3 px-4 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</a>
            <a href="/careers" className="text-white/80 hover:text-white text-sm font-light py-3 px-4 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>CAREERS</a>
            <a href="/contact" className="text-white/80 hover:text-white text-sm font-light py-3 px-4 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</a>
          </nav>
        </div>
      )}
    </header>
  );
}