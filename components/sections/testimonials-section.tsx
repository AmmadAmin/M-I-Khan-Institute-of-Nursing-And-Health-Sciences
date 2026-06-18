"use client"

import { useState, useCallback, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Iqra",
    role: "BSN Student - 3rd Semester",
    image: "/iqra-3rd-semester.png",
    quote:
      "The supportive faculty and practical learning environment have helped me build confidence in clinical skills.",
    workplace: "BSN Program",
  },
  {
    name: "Muhammad Amaan",
    role: "BSN Student - 3rd Semester",
    image: "/m-aman-3rd-semester.jpeg",
    quote:
      "Clinical exposure and interactive classes made learning meaningful and engaging.",
    workplace: "BSN Program",
  },
  {
    name: "Hammad Amin",
    role: "BSN Student - 2nd Batch",
    image: "/hammad-amin-first-semester.jpeg",
    quote:
      "From day one, I felt supported. Faculty guidance is exceptional.",
    workplace: "BSN Program",
  },
  {
    name: "Muhammad Yasir",
    role: "BSN Student - 1st Semester",
    image: "/batch2-std.jpeg",
    quote:
      "Modern learning environment motivated me to continue my nursing journey here.",
    workplace: "BSN Program",
  },
  {
    name: "Kulsoom Zahid",
    role: "LHV Student",
    image: "/lhv-std.jpeg",
    quote:
      "The LHV program builds strong practical and community healthcare skills.",
    workplace: "LHV Program",
  },
  {
    name: "Arzoo",
    role: "CNA Student",
    image: "/cna-std1.jpg",
    quote:
      "CNA training combines theory with real clinical experience effectively.",
    workplace: "CNA Program",
  },
  {
    name: "Amna Ali",
    role: "CMW Student",
    image: "/cmw-std.jpeg",
    quote:
      "CMW program builds confidence for maternal healthcare roles.",
    workplace: "CMW Program",
  },
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-flex px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-medium">
            Student Testimonials
          </span>

          <h2 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our Students Say
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground">
            Real feedback from students across different nursing programs.
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">

              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-2 sm:px-4"
                >
                  <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-md sm:shadow-lg">

                    <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">

                      {/* IMAGE */}
                      <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80px, 128px"
                        />
                      </div>

                      {/* TEXT */}
                      <div className="flex-1 text-center md:text-left">

                        <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-gold mx-auto md:mx-0 mb-3" />

                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground italic">
                          “{t.quote}”
                        </p>

                        <div className="mt-5">
                          <p className="font-serif text-base sm:text-lg font-semibold">
                            {t.name}
                          </p>
                          <p className="text-primary text-sm">
                            {t.role}
                          </p>
                          <p className="text-muted-foreground text-xs sm:text-sm">
                            {t.workplace}
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* CONTROLS */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">

            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full h-10 w-10 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* DOTS */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`transition-all rounded-full ${
                    i === selectedIndex
                      ? "bg-primary w-6 sm:w-8 h-2"
                      : "bg-muted-foreground/30 w-2 h-2 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full h-10 w-10 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}