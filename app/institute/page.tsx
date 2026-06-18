"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Building2,
  Users,
  ImageIcon,
  BadgeCheck,
  ArrowRight,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

const instituteSections = [
  {
    title: "Affiliations",
    description:
      "Explore our institutional affiliations, recognitions, and partnerships with regulatory bodies.",
    icon: BadgeCheck,
    href: "/institute/affiliations",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Facilities",
    description:
      "Discover our classrooms, laboratories, library, learning resources, and campus facilities.",
    icon: Building2,
    href: "/institute/facilities",
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Faculty",
    description:
      "Meet our experienced faculty members dedicated to excellence in nursing education.",
    icon: Users,
    href: "/institute/faculty",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Gallery",
    description:
      "Browse photos showcasing campus life, academic activities, events, and achievements.",
    icon: ImageIcon,
    href: "/institute/gallery",
    color: "bg-orange-500/10 text-orange-600",
  },
]

export default function InstitutePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-background">

        {/* HERO SECTION */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-6 text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Institute Information
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto"
            >
              Learn more about our institute through our affiliations,
              facilities, faculty, and campus gallery.
            </motion.p>

          </div>
        </section>

        {/* CARDS SECTION */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {instituteSections.map((section, index) => {
                const Icon = section.icon

                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={section.href}>
                      <div className="group p-8 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full">

                        {/* ICON */}
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${section.color}`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>

                        {/* TITLE */}
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {section.title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {section.description}
                        </p>

                        {/* BUTTON */}
                        <div className="flex items-center text-primary font-medium gap-2 group-hover:gap-3 transition-all">
                          Explore Section
                          <ArrowRight className="h-4 w-4" />
                        </div>

                      </div>
                    </Link>
                  </motion.div>
                )
              })}

            </div>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}