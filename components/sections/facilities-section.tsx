"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import {
  FlaskConical,
  BookOpen,
  Monitor,
  Library,
  Microscope,
  Users,
} from "lucide-react"

const facilities = [
  {
    icon: FlaskConical,
    title: "Skills Lab",
    description:
      "State-of-the-art simulation labs with mannequins and medical equipment for hands-on practice.",
    direction: "horizontal",
    images: [
      "/facilities/skills/skilllab-1.jpg",
      "/facilities/skills/skilllab-2.jpg",
      "/facilities/skills/skilllab-3.jpg",
      "/facilities/skills/skilllab-4.jpg",
      "/facilities/skills/skilllab-5.jpg",
      "/facilities/skills/skilllab-6.jpg",
      "/facilities/skills/skilllab-7.jpg",
      "/facilities/skills/skilllab-8.jpg",
      "/facilities/skills/skilllab9.jpg",
      "/facilities/skills/skilllab10.jpg",
      "/facilities/skills/skilllab11.jpg",
    ],
  },
  {
    icon: Microscope,
    title: "Anatomy Lab",
    description:
      "Comprehensive anatomy laboratory with models and specimens for in-depth learning.",
    direction: "vertical",
    images: [
      "/facilities/anatomy/anatomy.jpg",
      "/facilities/anatomy/anatomy1.jpg",
      "/facilities/anatomy/anatomy2.jpg",
      "/facilities/anatomy/anatomy3.jpg",
      "/facilities/anatomy/anatomy4.jpg",
      "/facilities/anatomy/anatomy5.jpg",
      "/facilities/anatomy/anatomy6.jpg",
      "/facilities/anatomy/anatomy7.jpg",
      "/facilities/anatomy/anatomy8.jpg",
      "/facilities/anatomy/anatomy9.jpg",
      "/facilities/anatomy/anatomy10.jpg",
      "/facilities/anatomy/anatomy11.jpg",
      "/facilities/anatomy/anatomy12.jpg",
      "/facilities/anatomy/anatomy13.jpg",
      "/facilities/anatomy/anatomy14.jpg",
      "/facilities/anatomy/anatomy15.jpg",
      "/facilities/anatomy/anatomy16.jpg",
      "/facilities/anatomy/anatomy17.jpg",
      "/facilities/anatomy/anatomy18.jpg",
      "/facilities/anatomy/anatomy19.jpg",
      "/facilities/anatomy/anatomy20.jpg",
      "/facilities/anatomy/anatomy21.jpg",
      "/facilities/anatomy/anatomy22.jpg",
      "/facilities/anatomy/anatomy23.jpg",
      "/facilities/anatomy/anatomy24.jpg",
      "/facilities/anatomy/anatomy25.jpg",
      "/facilities/anatomy/anatomy26.jpg",
      
    ],
  },
  {
    icon: Monitor,
    title: "Computer Lab",
    description:
      "Modern computer facilities with educational software and online learning resources.",
    direction: "horizontal",
    images: [
      "/facilities/computer/complab1.jpg",
      "/facilities/computer/complab2.jpg",
      "/facilities/computer/complab3.jpg",
      "/facilities/computer/complab4.jpg",
      "/facilities/computer/complab5.jpg",
      "/facilities/computer/complab6.jpg",
      "/facilities/computer/complab7.jpg",
      "/facilities/computer/complab8.jpg",
      "/facilities/computer/complab9.jpg",
      "/facilities/computer/complab10.jpg",
      
    ],
  },
  {
    icon: Library,
    title: "Library",
    description:
      "Extensive collection of nursing textbooks, journals, and digital resources.",
    direction: "vertical",
    images: [
      "/facilities/library/librarylab-1.jpg",
      "/facilities/library/librarylab-2.jpg",
      "/facilities/library/librarylab-3.jpg",
      "/facilities/library/librarylab-4.jpg",
      "/facilities/library/librarylab-5.jpg",
      "/facilities/library/librarylab-6.jpg",
      "/facilities/library/librarylab-7.jpg",
      "/facilities/library/librarylab-8.jpg",
      "/facilities/library/librarylab-10.jpg",
      "/facilities/library/librarylab-11.jpg",
      "/facilities/library/librarylab-12.jpg",
      
    ],
  },
  {
    icon: BookOpen,
    title: "Science Lab",
    description:
      "Fully equipped laboratory for microbiology, biochemistry, and pharmacology practicals.",
    direction: "horizontal",
    images: [
      "/facilities/science/sciencelab-1.jpg",
      "/facilities/science/sciencelab-2.jpg",
      "/facilities/science/sciencelab-3.jpg",
      "/facilities/science/sciencelab-4.jpg",
      "/facilities/science/sciencelab-5.jpg",
    ]
  },
  {
    icon: Users,
    title: "Student Affairs",
    description:
      "Dedicated support services for student welfare, counseling, and career guidance.",
    direction: "vertical",
    images: [
      "/facilities/student-affairs/std-aff1.jpg",
      "/facilities/student-affairs/std-aff2.jpg",
      "/facilities/student-affairs/std-aff3.jpg",
      "/facilities/student-affairs/std-aff4.jpg",
    ],
  },
]

function FacilityCard({
  facility,
  index,
}: {
  facility: (typeof facilities)[0]
  index: number
}) {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === facility.images.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [facility.images.length])

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
      }}
      className="group relative h-80 overflow-hidden rounded-3xl"
    >
      {/* Animated Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={
            facility.direction === "vertical"
              ? { opacity: 0, y: 80 }
              : { opacity: 0, x: 80 }
          }
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          exit={
            facility.direction === "vertical"
              ? { opacity: 0, y: -80 }
              : { opacity: 0, x: -80 }
          }
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={facility.images[currentImage]}
            alt={facility.title}
            fill
            priority={currentImage === 0}
            className="object-cover transition-transform duration-6000 group-hover:scale-110"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
          <facility.icon className="h-6 w-6 text-white" />
        </div>

        <h3 className="mb-2 font-serif text-xl font-bold text-white">
          {facility.title}
        </h3>

        <p className="text-sm leading-relaxed text-white/85">
          {facility.description}
        </p>
      </div>
    </motion.div>
  )
}

export function FacilitiesSection() {
  return (
    <section className="bg-muted/50 py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            Campus Facilities
          </span>

          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            World-Class Learning Environment
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Our campus is equipped with modern facilities to provide you with
            the best learning experience.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard
              key={facility.title}
              facility={facility}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}