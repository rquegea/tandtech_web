"use client";

import type React from "react";
import { useRef } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

interface ShaderBackgroundProps {
  children: React.ReactNode;
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    // AÑADIMOS flex y flex-col aquí para que organice a sus hijos verticalmente
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden flex flex-col"
    >
      {/* --- Elementos visuales del fondo (no afectan al layout) --- */}
      <svg className="absolute inset-0 w-0 h-0 pointer-events-none">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix type="matrix" values="1 0 0 0 0.02 0 1 0 0 0.02 0 0 1 0 0.05 0 0 0 0.9 0" result="tint"/>
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="gooey"/>
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#000000", "#dc2626", "#ffffff", "#7f1d1d", "#991b1b"]}
        speed={0.3}
        style={{ backgroundColor: "#000000" }}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-60"
        colors={["#000000", "#ffffff", "#dc2626", "#000000"]}
        speed={0.2}
        wireframe
        style={{ backgroundColor: "transparent" }}
      />
      
      {/* Los hijos (Header, HeroContent, etc.) se renderizan DENTRO del contenedor flex */}
      {children}
    </div>
  );
}