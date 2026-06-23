"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const slides = [
  { image: "/welcome.jpg" },
  { image: "/hero-2.jpeg" },
  { image: "/hero-3.jpg" },
  { image: "/4cgpa.jpg" },
]

export function HeroSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const startX = useRef<number | null>(null)
  const endX = useRef<number | null>(null)

  // AUTO PLAY (pause on hover / touch)
  useEffect(() => {
    if (paused) return

    const id = setInterval(() => {
      setIndex((p) => (p === slides.length - 1 ? 0 : p + 1))
    }, 6000)

    return () => clearInterval(id)
  }, [paused])

  const next = () => setIndex((p) => (p === slides.length - 1 ? 0 : p + 1))
  const prev = () => setIndex((p) => (p === 0 ? slides.length - 1 : p - 1))

  // SWIPE SUPPORT
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    endX.current = e.changedTouches[0].clientX

    if (!startX.current || !endX.current) return

    const diff = startX.current - endX.current

    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }

    startX.current = null
    endX.current = null
  }

  return (
    <section
      className="relative w-full min-h-[75vh] md:min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[index].image})`,
            }}
          />
        </AnimatePresence>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-5 lg:left-8 top-1/2 -translate-y-1/2 z-50
        h-10 w-10 sm:h-12 sm:w-12 rounded-full
        bg-black/40 hover:bg-black/60 backdrop-blur-md
        flex items-center justify-center transition active:scale-95"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-5 lg:right-8 top-1/2 -translate-y-1/2 z-50
        h-10 w-10 sm:h-12 sm:w-12 rounded-full
        bg-black/40 hover:bg-black/60 backdrop-blur-md
        flex items-center justify-center transition active:scale-95"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* CONTENT */}
      <div
        className="relative z-20 w-full"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif font-bold text-white
            text-2xl sm:text-4xl md:text-5xl lg:text-6xl
            leading-snug md:leading-tight mb-4 md:mb-6"
          >
            Shaping the Future of{" "}
            <span className="text-gold">Nursing Excellence</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-white/90
            text-sm sm:text-base md:text-lg lg:text-xl
            max-w-2xl mx-auto mb-6 md:mb-8"
          >
            M I Khan Institute of Nursing and Health Sciences empowers students
            through modern education, clinical training, and professional growth.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            {/* GOLD BUTTON */}
            <Button
              asChild
              size="lg"
              className="bg-gold text-black hover:bg-gold/90 w-full sm:w-auto px-6 py-5"
            >
              <Link href="https://mikhan.edu.pk/apply.php" target="_blank">
                Apply for Admission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* WHITE OUTLINE BUTTON */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-white/20 backdrop-blur-md w-full sm:w-auto px-6 py-5"
            >
              <Link href="/programs">
                <Play className="mr-2 h-4 w-4" />
                Explore Programs
              </Link>
            </Button>
          </motion.div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all rounded-full h-2
                ${i === index ? "w-8 bg-gold" : "w-2 bg-white/40"}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}