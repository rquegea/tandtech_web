"use client"

import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
    }, 600) // empieza a desvanecerse a los 0.6s

    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 1200) // se elimina del DOM a ~1.2s

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`splash-screen fixed inset-0 z-[15] flex items-end justify-center pb-10 sm:pb-12 bg-transparent ${
        isFading ? "fade-out" : ""
      }`}
      aria-label="Pantalla de bienvenida"
      role="dialog"
      aria-modal="true"
    >
      <h1 className="text-white text-6xl sm:text-7xl md:text-8xl tracking-wider uppercase">MAKING BRANDS VISIBLE</h1>
    </div>
  )
}
