"use client"

import { motion } from "framer-motion"
import { Award, Shield, Building2, Wallet } from "lucide-react"

const trustItems = [
  {
    icon: Award,
    title: "DUHS Affiliated",
    description: "Recognized by Dow University of Health Sciences",
  },
  {
    icon: Shield,
    title: "PNMC Recognized",
    description: "Pakistan Nursing & Midwifery Council approved",
  },
  {
    icon: Building2,
    title: "Clinical Partnerships",
    description: "Training at premier hospitals",
  },
  {
    icon: Wallet,
    title: "Scholarships Available",
    description: "Financial aid for deserving students",
  },
]

export function TrustBar() {
  return (
    <section className="py-6 sm:py-8 bg-muted border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                flex
                items-start
                sm:items-center
                gap-3
                sm:gap-4
                p-3
                sm:p-0
              "
            >
              {/* ICON */}
              <div
                className="
                  shrink-0
                  h-10 w-10
                  sm:h-12 sm:w-12
                  rounded-xl
                  bg-primary/10
                  flex items-center justify-center
                "
              >
                <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>

              {/* TEXT */}
              <div className="min-w-0">
                <h3
                  className="
                    font-semibold
                    text-foreground
                    text-sm
                    sm:text-base
                    leading-tight
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-xs
                    sm:text-sm
                    text-muted-foreground
                    leading-snug
                    wrap-break-word
                  "
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}