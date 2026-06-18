"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 bg-primary overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl sm:max-w-3xl mx-auto"
        >

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 sm:mb-6 leading-tight">
            Start Your Journey in Healthcare Today
          </h2>

          <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10">
            Take the first step toward a rewarding nursing career with hands-on training and expert guidance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

            {/* GOLD CTA */}
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-black font-semibold px-6 sm:px-8"
            >
              <Link href="https://mikhan.edu.pk/apply.php" target="_blank">
                Apply for Admission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* WHITE OUTLINE CTA */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-white bg-white/10 text-white
              hover:bg-white hover:text-black backdrop-blur-md px-6 sm:px-8"
            >
              <a href="tel:+923332810809" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" />
                Call Admissions
              </a>
            </Button>

          </div>

        </motion.div>

      </div>
    </section>
  )
}