"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ShieldCheck,
  Building2,
  BadgeCheck,
  Award,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { CTASection } from "@/components/sections/cta-section"

export default function AffiliationsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
                Recognition & Accreditation
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Affiliations & Recognitions
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                M I Khan Institute of Nursing and Health Sciences is proudly
                affiliated with leading healthcare education authorities and
                recognized by national regulatory organizations in Pakistan.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Affiliation Section */}
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
                    src="/welcome.jpg"
                    alt="Healthcare Education"
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
                  Trusted Academic Partnerships
                </span>

                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  Committed to Academic Excellence
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  M I Khan Institute of Nursing and Health Sciences maintains
                  strong academic affiliations and professional recognitions to
                  ensure high-quality nursing education, clinical training, and
                  healthcare excellence.
                </p>

                <div className="space-y-6">
                  {/* DUHS */}
                  <div className="flex gap-4 p-5 rounded-2xl border bg-card">
                    <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="h-7 w-7 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Dow University of Health Sciences (DUHS)
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        Affiliated with Dow University of Health Sciences,
                        Karachi — one of Pakistan’s leading medical and health
                        sciences universities known for academic excellence and
                        clinical training standards.
                      </p>
                    </div>
                  </div>

                  {/* PNC */}
                  <div className="flex gap-4 p-5 rounded-2xl border bg-card">
                    <div className="h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-7 w-7 text-secondary" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Pakistan Nursing & Midwifery Council (PNMC)
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        Recognized and registered with the Pakistan Nursing &
                        Midwifery Council, Islamabad, ensuring compliance with
                        national nursing education and professional practice
                        standards.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recognition Highlights */}
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
                Why Our Affiliations Matter
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Excellence Backed by Recognition
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Recognized Programs
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Our programs follow approved national standards and ensure
                  quality nursing education for future healthcare professionals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 border text-center"
              >
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <BadgeCheck className="h-8 w-8 text-secondary" />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Professional Credibility
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Students graduate with qualifications recognized by healthcare
                  institutions throughout Pakistan and internationally.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 border text-center"
              >
                <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="h-8 w-8 text-gold" />
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  Trusted Standards
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  We maintain high standards in academic teaching, ethical
                  practice, and clinical excellence through regulated oversight.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}