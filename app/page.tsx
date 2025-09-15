// app/page.tsx

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header";
import HeroContent from "@/components/hero-content";
import ShaderBackground from "@/components/shader-background";
import SplashScreen from "@/components/SplashScreen";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";

export default function HomePage() {
  // Estado que controla si estamos en la fase de splash o de contenido
  const [isSplashActive, setIsSplashActive] = useState(true);

  useEffect(() => {
    // Cambiamos el estado después de 1.5 segundos
    const timer = setTimeout(() => {
      setIsSplashActive(false);
    }, 150); // <-- AQUÍ ESTÁ EL TIEMPO: 1500ms = 1.5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <ShaderBackground>
          {/* Le pasamos el estado actual al Header */}
          <Header isSplashActive={isSplashActive} />
          
          <div className="relative flex-1">
            <AnimatePresence>
              {isSplashActive && (
                <motion.div
                  key="splash-screen"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <SplashScreen />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!isSplashActive && (
                <motion.div
                  key="hero-content"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                  className="w-full h-full"
                >
                  <HeroContent />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ShaderBackground>
      </div>

      {/* El resto del contenido solo se renderiza cuando el splash ha terminado */}
      {!isSplashActive && (
        <>
          <AboutSection />
          <ProjectsSection />
        </>
      )}
    </>
  );
}