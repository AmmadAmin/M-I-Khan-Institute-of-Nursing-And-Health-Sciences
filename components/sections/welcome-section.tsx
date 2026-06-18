"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function WelcomeSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="welcome.jpg"
                alt="MIKINHS Campus"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:-right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl"
            >
              <p className="font-serif text-3xl font-bold">05+</p>
              <p className="text-sm text-white/80">Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Welcome to MIKINHS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Nurturing Compassionate Healthcare Leaders
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              M I Khan Institute of Nursing and Health Sciences has been a beacon of excellence 
              in nursing education since 2022. Our mission is to produce competent, compassionate, 
              and ethical healthcare professionals who can meet the evolving needs of the healthcare sector.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With state-of-the-art facilities, expert faculty, and partnerships with leading hospitals, 
              we provide our students with the knowledge, skills, and clinical experience needed to 
              excel in their nursing careers both nationally and internationally.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
