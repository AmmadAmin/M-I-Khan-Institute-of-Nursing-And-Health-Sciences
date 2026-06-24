"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  GraduationCap,
  Clock,
  BookOpen,
  Hospital,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { CTASection } from "@/components/sections/cta-section"

const highlights = [
  "4-Year Professional Degree Program",
  "Experienced Nursing Faculty",
  "Clinical Training in Leading Hospitals",
  "Modern Nursing Laboratories",
  "Research & Practical Learning",
  "Recognized by PNMC",
]

export default function BSNPage() {
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
                Undergraduate Nursing Program
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Bachelor of Science in Nursing (BSN)
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
                A comprehensive nursing degree program designed to prepare
                compassionate, skilled, and confident healthcare professionals
                through academic excellence, clinical training, and practical
                experience.
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
                    src="/ins-main-wall1.jpg"
                    alt="BS Nursing Program"
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
                  Building Future Nursing Leaders
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The Bachelor of Science in Nursing (BSN) program at
                  M I Khan Institute of Nursing and Health Sciences provides
                  students with a strong foundation in nursing sciences,
                  patient care, clinical practice, and healthcare leadership.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Through advanced coursework, practical hospital training,
                  and experienced faculty mentorship, students develop the
                  skills and confidence needed to excel in modern healthcare
                  environments.

                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Admission to the BSN program requires FSc Pre-Medical with a minimum of
                  50% marks, age between 17–35 years, and successful completion of the
                  entrance test and interview.
                </p>



                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <Clock className="h-6 w-6 text-primary" />
                    <span className="font-medium">4 Years Duration</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                    <span className="font-medium">Professional Degree</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <Hospital className="h-6 w-6 text-gold" />
                    <span className="font-medium">Clinical Rotations</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <Award className="h-6 w-6 text-primary" />
                    <span className="font-medium">Recognized Program</span>
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
                Why Choose BSN
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
                  Endless Opportunities in Healthcare
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  BSN graduates can pursue careers in hospitals, clinics,
                  community healthcare, research institutions, and educational
                  organizations both nationally and internationally.
                </p>

                <div className="space-y-4">
                  {[
                    "Registered Nurse",
                    "Clinical Nurse",
                    "Healthcare Educator",
                    "Community Health Nurse",
                    "Nursing Supervisor",
                    "Research Assistant",
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
                    src="/clinical.jpg"
                    alt="Nursing Career"
                    fill
                    className="object-cover"
                  />
                </div>
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