"use client"

import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import ShaderBackground from "@/components/shader-background"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"

export default function ShaderShowcase() {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
      </ShaderBackground>
      <AboutSection />
      <ProjectsSection />
    </>
  )
}
