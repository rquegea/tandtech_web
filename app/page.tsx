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
  const [isSplashActive, setIsSplashActive] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashActive(false);
    }, 1500); // Duración de 1.5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ShaderBackground>
        {/* El Header es el primer hijo del flex container */}
        <Header isSplashActive={isSplashActive} />
        
        {/* Este div es el segundo hijo y crece para ocupar el espacio restante */}
        <div className="relative flex-1">
          <AnimatePresence mode="wait">
            {isSplashActive ? (
              // FASE 1: Muestra el Splash Screen
              <motion.div
                key="splash"
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                <SplashScreen />
              </motion.div>
            ) : (
              // FASE 2: Muestra el Hero Content
              <motion.div
                key="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.3 } }}
                className="w-full h-full"
              >
                <HeroContent />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ShaderBackground>

      {/* El resto de la página solo se renderiza cuando el splash ha terminado */}
      {!isSplashActive && (
        <>
          <AboutSection />
          <ProjectsSection />
        </>
      )}
    </>
  );
}