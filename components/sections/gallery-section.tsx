"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

const galleryImages = [
  { src: "/labss.jpg", alt: "Skills lab training", category: "Labs" },
  { src: "/welcome.jpg", alt: "Campus view", category: "Campus" },
  { src: "/events.jpg", alt: "College event", category: "Events" },
  { src: "/awards.jpeg", alt: "Award ceremony", category: "Events" },
  { src: "/labs.jpg", alt: "Simulation lab session", category: "Labs" },
  { src: "/facilities/library/librarylab-3.jpg", alt: "Library study area", category: "Library" },
  { src: "/students.jpg", alt: "Student group study", category: "Students" },
  { src: "/clinical.jpg", alt: "Clinical training session", category: "Clinical" },
  { src: "/cricket-events.jpg", alt: "Sports event", category: "Sports" },
  { src: "/exam.jpg", alt: "Examination hall", category: "Exams" },
  { src: "/practical.jpg", alt: "Practical nursing skills", category: "Clinical" },

  
]

export function GallerySection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
            Campus Gallery
          </span>

          <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Life at MIKINHS
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
            Explore campus life, clinical training, events, and faculty engagement.
          </p>
        </motion.div>

        {/* GRID (masonry) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5">

          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="mb-4 break-inside-avoid"
            >
              <button
                onClick={() => setLightboxImage(image.src)}
                className="group relative w-full overflow-hidden rounded-xl sm:rounded-2xl block"
              >

                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="
                    w-full h-auto object-cover
                    transition-transform duration-500
                    group-hover:scale-105
                  "
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 sm:h-10 sm:w-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* category badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
                  <span className="px-2 sm:px-3 py-1 bg-white/90 text-foreground rounded-full text-[10px] sm:text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.category}
                  </span>
                </div>

              </button>
            </motion.div>
          ))}

        </div>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-6xl max-h-[90vh]"
              >
                <Image
                  src={lightboxImage}
                  alt="Gallery preview"
                  width={1400}
                  height={1000}
                  className="rounded-xl object-contain max-h-[90vh] w-auto"
                />

                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute -top-10 right-0 text-white hover:text-gold transition-colors"
                  aria-label="Close gallery"
                >
                  <X className="h-8 w-8" />
                </button>

              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}