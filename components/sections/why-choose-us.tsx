"use client"

import { motion } from "framer-motion"
import {
  Users,
  FlaskConical,
  Stethoscope,
  Briefcase,
  BookOpen,
  Globe,
} from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Expert Faculty",
    description:
      "Learn from highly qualified professors and healthcare professionals with extensive experience.",
  },
  {
    icon: FlaskConical,
    title: "Modern Skills Labs",
    description:
      "Hands-on training in advanced simulation labs with updated medical equipment.",
  },
  {
    icon: Stethoscope,
    title: "Clinical Training",
    description:
      "Real hospital exposure at leading healthcare institutions in Karachi.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description:
      "Strong placement support with career guidance and job readiness programs.",
  },
  {
    icon: BookOpen,
    title: "Research Opportunities",
    description:
      "Encouraging academic research and publication opportunities for students.",
  },
  {
    icon: Globe,
    title: "Global Recognition",
    description:
      "Internationally aligned programs supporting global career pathways.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-medium">
            Why Choose Us
          </span>

          <h2 className="mt-4 font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
            Excellence in Healthcare Education
          </h2>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
            A learning environment designed to prepare students for real-world clinical and professional success.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="
                relative group
                p-6 sm:p-7 lg:p-8
                rounded-2xl
                bg-card
                border border-border
                min-h-50 sm:min-h-55
                flex flex-col
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div className="mb-5 h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-primary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>

              {/* TITLE */}
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* subtle background effect (safe for mobile) */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-primary/5 to-transparent pointer-events-none" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}