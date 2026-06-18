"use client"

import { motion } from "framer-motion"
import { FileText, PenTool, UserCheck, BadgeCheck } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Application",
    description:
      "Complete the online application with required academic documents and personal details.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Entrance Test",
    description:
      "Appear in entrance test covering English, Science, and General Knowledge.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Interview",
    description:
      "Shortlisted candidates attend a personal interview with the admission committee.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Confirmation",
    description:
      "Selected candidates receive offer letters and complete enrollment process.",
  },
]

export function AdmissionsTimeline() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold rounded-full text-xs sm:text-sm font-medium mb-4">
            Admissions Process
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            Your Path to Enrollment
          </h2>

          <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed">
            Follow these simple steps to begin your nursing journey at MIKINHS.
          </p>
        </motion.div>

        {/* TIMELINE GRID */}
        <div className="relative">

          {/* LINE (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-white/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >

                <div className="text-center">

                  {/* ICON */}
                  <div className="relative mx-auto w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gold flex items-center justify-center mb-5 sm:mb-6">

                    <item.icon className="h-6 sm:h-8 w-6 sm:w-8 text-gold-foreground" />

                    <div className="absolute -top-2 -right-2 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white text-primary flex items-center justify-center text-xs sm:text-sm font-bold">
                      {item.step}
                    </div>

                  </div>

                  {/* CONTENT */}
                  <h3 className="font-serif text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold/90 text-black font-semibold px-6 sm:px-8"
          >
            <Link href="https://mikhan.edu.pk/apply.php" target="_blank">
              Start Your Application
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}