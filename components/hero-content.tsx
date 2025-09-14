"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const carouselItems = [
  { name: "MOET & CHANDON" },
  { name: "PRIME" },
  { name: "GULLÓN" },
  { name: "BARCELÓ" },
  { name: "LOTUS" },
]

const verticalVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
}

export default function HeroContent() {
  const [carouselIndex, setCarouselIndex] = useState(0)

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length)
    }, 4000)

    return () => clearInterval(carouselInterval)
  }, [])

  const getVisibleItems = () => {
    const extendedItems = []
    for (let i = -3; i <= 3; i++) {
      const index = (carouselIndex + i + carouselItems.length) % carouselItems.length
      extendedItems.push({
        ...carouselItems[index],
        position: i,
        isActive: i === 0,
      })
    }
    return extendedItems
  }

  const getItemStyles = (position: number) => {
    const distance = Math.abs(position)
    if (distance === 0) {
      return { opacity: 1, scale: 1, fontSize: 1 }
    }
    if (distance === 1) {
      return { opacity: 0.6, scale: 0.75, fontSize: 0.8 }
    }
    if (distance === 2) {
      return { opacity: 0.4, scale: 0.55, fontSize: 0.65 }
    }
    return { opacity: 0.2, scale: 0.4, fontSize: 0.5 }
  }

  return (
    <main className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Mobile layout - stacked vertically */}
        <div className="flex flex-col items-center text-center gap-8 md:hidden">
          <div>
            <h1 className="text-3xl sm:text-4xl tracking-tight font-light text-white leading-tight">
              Making <span className="font-medium italic instrument">brands</span> visible
            </h1>
          </div>

          <div className="relative h-64 flex items-center justify-center overflow-hidden">
            {getVisibleItems().map((item, index) => {
              const { opacity, scale, fontSize } = getItemStyles(item.position)

              return (
                <div
                  key={`${item.name}-${index}`}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateY(${item.position * 32}px) scale(${scale})`,
                    opacity,
                    zIndex: item.isActive ? 10 : 5 - Math.abs(item.position),
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {item.isActive ? (
                      <motion.div
                        key={item.name}
                        variants={verticalVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <span
                          className="block font-light tracking-tight leading-none whitespace-nowrap text-white text-center"
                          style={{
                            fontSize: `${fontSize * 1.5}rem`,
                          }}
                        >
                          {item.name}
                        </span>
                      </motion.div>
                    ) : (
                      <span
                        className="block font-light tracking-tight leading-none whitespace-nowrap text-white text-center"
                        style={{
                          fontSize: `${fontSize * 1.2}rem`,
                        }}
                      >
                        {item.name}
                      </span>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>

        {/* Desktop layout - side by side */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex-shrink-0">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight font-light text-white leading-none">
              Making <span className="font-medium italic instrument">brands</span> visible
            </h1>
          </div>

          <div className="relative h-80 lg:h-96 xl:h-[32rem] flex items-center justify-start overflow-hidden min-w-[350px]">
            {getVisibleItems().map((item, index) => {
              const { opacity, scale, fontSize } = getItemStyles(item.position)

              return (
                <div
                  key={`${item.name}-${index}`}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateY(${item.position * 48}px) scale(${scale})`,
                    opacity,
                    zIndex: item.isActive ? 10 : 5 - Math.abs(item.position),
                  }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {item.isActive ? (
                      <motion.div
                        key={item.name}
                        variants={verticalVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <span
                          className="block font-light tracking-tight leading-none whitespace-nowrap text-white"
                          style={{
                            fontSize: `${fontSize * 3.5}rem`,
                          }}
                        >
                          {item.name}
                        </span>
                      </motion.div>
                    ) : (
                      <span
                        className="block font-light tracking-tight leading-none whitespace-nowrap text-white"
                        style={{
                          fontSize: `${fontSize * 2.5}rem`,
                        }}
                      >
                        {item.name}
                      </span>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
