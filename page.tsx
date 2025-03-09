"use client"

import { motion } from "framer-motion"
import { Instagram, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff6ea]">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#fff6ea]/80 backdrop-blur-sm border-b border-[#d6a104]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link href="/quienes-somos" className="text-[#d6a104] hover:text-[#d6a104]/80 transition-colors">
                Quiénes Somos
              </Link>
              <Link href="/catalogo" className="text-[#d6a104] hover:text-[#d6a104]/80 transition-colors">
                Catálogo
              </Link>
              <Link href="/galeria" className="text-[#d6a104] hover:text-[#d6a104]/80 transition-colors">
                Galería
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.instagram.com/360visionexperience/"
                target="_blank"
                className="text-[#d6a104] hover:text-[#d6a104]/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@360visionexperience"
                target="_blank"
                className="text-[#d6a104] hover:text-[#d6a104]/80 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-1.162-1.264-1.314-2.705-1.390-3.338h.003c-.075-.633-.075-1.197-.075-1.197h-3.764v13.578c0 .714-.266 1.378-.766 1.878s-1.164.766-1.878.766-1.378-.266-1.878-.766-.766-1.164-.766-1.878 266-1.378.766-1.878 1.164-.766 1.878-.766c.246 0 .49.031.728.094v-3.788c-.24-.032-.481-.048-.728-.047-1.562 0-3.052.609-4.152 1.709s-1.709 2.59-1.709 4.152.609 3.052 1.709 4.152 2.59 1.709 4.152 1.709 3.052-.609 4.152-1.709 1.709-2.59 1.709-4.152V8.338c1.139.772 2.476 1.197 3.841 1.197v-3.786c-.021 0-.041.003-.062.003-.323 0-1.522-.052-2.638-.59z" />
                </svg>
                <span className="sr-only">TikTok</span>
              </Link>
              <Link
                href="https://wa.me/34651533976"
                target="_blank"
                className="text-[#d6a104] hover:text-[#d6a104]/80 transition-colors flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="hidden sm:inline">+34 651 53 39 76</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[400px] aspect-square mb-12"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-wOmouZEi3WUonadaTwTYUNShcgMTJT.jpeg"
              alt="360 Vision Experience Logo"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-[#d6a104] mb-6"
          >
            Creamos Experiencias Únicas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#d6a104]/80 max-w-2xl mb-12"
          >
            Transformamos tus eventos en momentos inolvidables con espectáculos y planificación personalizada que
            superará todas tus expectativas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contacto"
              className="bg-[#d6a104] text-white px-8 py-3 rounded-full hover:bg-[#d6a104]/90 transition-colors"
            >
              Comienza Tu Experiencia
            </Link>
          </motion.div>
        </div>
      </main>

      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(circle at 50% 50%, #d6a104 0%, transparent 70%)`,
          }}
        />
      </div>
    </div>
  )
}

