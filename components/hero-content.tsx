"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const carouselItems = [
  { name: "MOET & CHANDON" },
  { name: "PRIME" },
  { name: "GULLÓN" },
  { name: "BARCELÓ" },
  { name: "LOTUS" },
]

const ITEM_HEIGHT = 64 // Corresponde a h-16 en Tailwind

export default function HeroContent() {
  const extendedCarouselItems = Array(5).fill(carouselItems).flat()

  const initialIndex = Math.floor(extendedCarouselItems.length / 2)
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1)
    }, 4000)
    return () => clearInterval(interval)
  }, [])
  
  const getItemStyle = (currentIndex: number) => {
    const distance = Math.abs(currentIndex - activeIndex)
    let opacity = 0
    let y = 0

    // Calculamos el desplazamiento vertical para el efecto "escalera"
    if (distance === 0) {
      opacity = 1; y = 0;
    } else if (distance === 1) {
      opacity = 0.5; y = currentIndex < activeIndex ? -ITEM_HEIGHT : ITEM_HEIGHT;
    } else if (distance === 2) {
      opacity = 0.3; y = currentIndex < activeIndex ? -ITEM_HEIGHT * 2 : ITEM_HEIGHT * 2;
    } else if (distance === 3) {
      opacity = 0.1; y = currentIndex < activeIndex ? -ITEM_HEIGHT * 3 : ITEM_HEIGHT * 3;
    }

    // Centramos el elemento activo y desplazamos los demás
    const finalY = y + (ITEM_HEIGHT * 3);

    return {
      opacity,
      transform: `translateY(${finalY}px)`,
      fontWeight: distance === 0 ? "600" : "300",
      fontSize: "2.25rem",
    }
  }

  return (
    <main className="absolute inset-0 z-10 flex w-full h-full">
      <div className="w-1/2 flex justify-end items-center pr-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-right tracking-tight font-light text-white leading-none">
          Making <span className="font-medium italic instrument">brands</span> visible
        </h1>
      </div>

      <div className="w-1/2 flex justify-start items-center pl-8">
        <div
          className="relative"
          style={{
            height: `${ITEM_HEIGHT * 7}px`,
            width: '100%',
            maxWidth: '500px'
          }}
        >
          {/* Ya no necesitamos motion.div aquí, la transición la maneja el CSS */}
          <div className="w-full h-full">
            {extendedCarouselItems.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-start absolute transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{
                  height: `${ITEM_HEIGHT}px`,
                  ...getItemStyle(index),
                }}
              >
                <span className="text-white whitespace-nowrap">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}