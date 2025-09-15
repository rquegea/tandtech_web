// app/layout.tsx

import type React from "react";
import type { Metadata } from "next";
// 1. Añade Lora a la importación
import { Figtree, Instrument_Serif, Lora, Cormorant_Garamond } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

// 2. Define la nueva fuente Lora
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
  display: "swap",
});

// Cormorant Garamond: serif de alta gama
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 3. Añade la variable de Lora a la etiqueta <html>
    <html lang="en" className={`${figtree.variable} ${GeistMono.variable} ${instrumentSerif.variable} ${lora.variable} ${cormorant.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}