"use client"

import { motion } from "framer-motion"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AdmissionsTimeline } from "@/components/sections/admissions-timeline"
import { FAQSection } from "@/components/sections/faq-section"
import { CTASection } from "@/components/sections/cta-section"
import { CheckCircle, Clock, GraduationCap } from "lucide-react"

const documents = [
  "Matric / SSC Certificate (Original + Attested Copies)",
  "Intermediate / FSc Certificate (Original + Attested Copies)",
  "CNIC / B-Form (Student + Parents)",
  "4 Passport Size Photographs (White Background)",
  "Domicile Certificate",
  "Character Certificate from Last Institute",
  "Migration Certificate (if applicable)",
]

const programs = [
  {
    name: "BS Nursing (BSN)",
    duration: "4 Years",
    batchStart: "January 2027",
    admissionDeadline: "December 31, 2026",
    seats: "75 Seats",
    eligibility: "FSc Pre-Medical with minimum 50% marks, Age 17-35 years",
    description:
      "A professional undergraduate nursing program designed to build strong clinical, theoretical, and practical healthcare skills.",
  },

  {
    name: "Certified Nursing Assistant (CNA)",
    duration: "6 Months",
    batchStart: "July 2026",
    admissionDeadline: "Open Intake",
    seats: "50 Seats",
    eligibility: "Matric or Intermediate qualification with minimum 40% marks, Age 14-35 years",
    description:
      "Short training program focused on basic patient care and healthcare support skills.",
  },
  {
    name: "Lady Health Visitor (LHV)",
    duration: "2 Years",
    batchStart: "August 2026",
    admissionDeadline: "March 31, 2026",
    seats: "50 Seats",
    eligibility: "FSc Pre-Medical or equivalent, with minimum 45% marks, Age 14-35 years",
    description:
      "Prepares students for maternal, child health, and community healthcare services.",
  },
  {
    name: "Community Midwife (CMW)",
    duration: "18 Months",
    batchStart: "July 2026",
    admissionDeadline: "Rolling Admissions",
    seats: "50 Seats",
    eligibility: "Matric or FSc preferred, with minimum 40% marks, Age 14-35 years",
    description:
      "Training program focused on safe maternal care and midwifery practices in communities.",
  },
]

export default function AdmissionsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="overflow-hidden">

        {/* HERO */}
        <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                Admissions
              </h1>

              <p className="text-white/80 text-lg md:text-xl">
                Explore nursing programs, eligibility criteria, and admission details
                for your healthcare career journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PROGRAMS */}
        <section className="py-20 lg:py-28 bg-muted/40">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
                Academic Programs & Admissions
              </h2>

              <p className="text-muted-foreground text-lg">
                All programs include eligibility criteria, duration, intake schedule,
                and admission deadlines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {programs.map((p, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all"
                >

                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <h3 className="font-serif text-lg font-bold">
                      {p.name}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">
                    {p.description}
                  </p>

                  <div className="space-y-2 text-sm text-muted-foreground mb-5">

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Duration: {p.duration}
                    </div>

                    <div>
                      <span className="font-medium text-foreground">
                        Batch Start:
                      </span>{" "}
                      {p.batchStart}
                    </div>

                    <div>
                      <span className="font-medium text-foreground">
                        Admission Deadline:
                      </span>{" "}
                      {p.admissionDeadline}
                    </div>

                    <div>
                      <span className="font-medium text-foreground">
                        Available Seats:
                      </span>{" "}
                      {p.seats}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Eligibility Criteria</h4>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {p.eligibility}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* DOCUMENTS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6 max-w-3xl">

            <h2 className="font-serif text-3xl font-bold text-center mb-10">
              Required Documents
            </h2>

            <div className="space-y-3">
              {documents.map((doc, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground">{doc}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        <AdmissionsTimeline />
        <FAQSection />
        <CTASection />

      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}