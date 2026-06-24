"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  HeartHandshake,
  Clock,
  Users,
  Baby,
  ShieldPlus,
  CheckCircle2,
  Stethoscope,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { CTASection } from "@/components/sections/cta-section"

const highlights = [
  "Community-Based Midwifery Training",
  "Maternal & Child Healthcare Focus",
  "Practical Clinical Experience",
  "Experienced Healthcare Faculty",
  "Hands-On Field Training",
  "Professional Development Opportunities",
]

export default function CMWPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
                Healthcare & Midwifery Program
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Community Midwifery (CMW)
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
                A specialized program focused on maternal, newborn, and
                community healthcare, preparing skilled midwives to provide
                safe, compassionate, and professional healthcare services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-20 lg:py-28 bg-background">
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
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/cmw-profile.jpg"
                    alt="Community Midwifery Program"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Program Overview
                </span>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Supporting Mothers & Communities
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The Community Midwifery (CMW) program equips students with the
                  knowledge and practical skills required to provide maternal,
                  neonatal, and reproductive healthcare services within
                  communities.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Students receive clinical and field training focused on safe
                  pregnancy care, childbirth assistance, postnatal care, and
                  community healthcare awareness under professional supervision.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Admission to the CMW program requires Matric with a minimum of 45% marks.
                  The program is designed for female candidates between 14 and 35 years of age.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <Clock className="h-6 w-6 text-primary" />
                    <span className="font-medium">Professional Training</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <Baby className="h-6 w-6 text-secondary" />
                    <span className="font-medium">Maternal Care</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <Users className="h-6 w-6 text-gold" />
                    <span className="font-medium">Community Healthcare</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <HeartHandshake className="h-6 w-6 text-primary" />
                    <span className="font-medium">Practical Experience</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Program Highlights */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Why Choose CMW
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Program Highlights
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border rounded-2xl p-6 flex gap-4 items-start hover:shadow-lg transition-all"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <p className="font-medium text-foreground leading-relaxed">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Opportunities */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Career Opportunities
                </span>

                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Making a Difference in Community Healthcare
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Graduates of the Community Midwifery program can contribute to
                  maternal and child healthcare services in hospitals, clinics,
                  rural healthcare centers, and community health organizations.
                </p>

                <div className="space-y-4">
                  {[
                    "Community Midwife",
                    "Maternal Healthcare Assistant",
                    "Rural Healthcare Worker",
                    "Family Health Educator",
                    "Primary Healthcare Assistant",
                    "Women & Child Health Support Worker",
                  ].map((career) => (
                    <div
                      key={career}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/cmw-hc.jpg"
                    alt="Midwifery Career"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-primary rounded-3xl p-10 lg:p-16 text-center text-primary-foreground">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
                  <Stethoscope className="h-10 w-10" />
                </div>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Begin Your Healthcare Journey Today
                </h2>

                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Join the Community Midwifery program and become part of a
                  healthcare profession dedicated to improving maternal and
                  community health outcomes.
                </p>

                <a
                  href="https://mikhan.edu.pk/apply.php" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
                >
                  Apply Now
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}