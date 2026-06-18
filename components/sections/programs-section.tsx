"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Calendar, Award } from "lucide-react"

const programs = [
  {
    title: "BS Nursing (BSN)",
    slug: "bsn",
    image: "/bsn-program.jpg",
    duration: "4 Years",
    intake: "Fall & Spring",
    description:
      "A comprehensive undergraduate program preparing students for professional nursing practice.",
    features: ["Clinical Rotations", "Research Project", "NCLEX Preparation"],
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    slug: "cna",
    image: "/cna-program.jpg",
    duration: "24 Months",
    intake: "Rolling Admissions",
    description:
      "Entry-level certification for those starting their healthcare career.",
    features: ["Hands-on Training", "Job Placement", "Quick Certification"],
  },
  {
    title: "Lady Health Visitor (LHV)",
    slug: "lhv",
    image: "/lady-health-visitor.webp",
    duration: "2 Years",
    intake: "Fall",
    description:
      "Community health focused program for maternal and child health services.",
    features: ["Community Health", "Maternal Care", "Field Experience"],
  },
  {
    title: "Community Midwifery (CMW)",
    slug: "cmw",
    image: "/cmw-program.avif",
    duration: "18 Months",
    intake: "Fall & Spring",
    description:
      "Specialized training in midwifery and maternal health services.",
    features: ["Delivery Training", "Prenatal Care", "Community Practice"],
  },
]

export function ProgramsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold text-xs sm:text-sm font-medium mb-4">
            Our Programs
          </span>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Accredited Nursing Programs
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Choose from our PNMC-recognized programs designed to prepare you
            for a successful nursing career.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {programs.map((program, index) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group h-full"
            >
              <Link href={`/programs/${program.slug}`} className="block h-full">
                <div className="h-full flex flex-col bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/30">

                  {/* IMAGE */}
                  <div className="relative h-56 sm:h-60 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      priority={index === 0}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                    {/* BADGES */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 text-xs font-medium">
                        <Clock className="h-3 w-3" />
                        {program.duration}
                      </span>

                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 text-xs font-medium">
                        <Calendar className="h-3 w-3" />
                        {program.intake}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col flex-1 p-5 sm:p-6">

                    <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                      {program.description}
                    </p>

                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {program.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-muted text-xs text-muted-foreground"
                        >
                          <Award className="h-3 w-3" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* LINK */}
                    <div className="mt-auto inline-flex items-center text-primary font-medium text-sm group-hover:underline">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <Link href="/programs">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}