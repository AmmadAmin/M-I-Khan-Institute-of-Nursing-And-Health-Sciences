"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"
import { ArrowRight, Clock, Calendar, Award, CheckCircle } from "lucide-react"

const programs = [
  {
    title: "BS Nursing (BSN)",
    slug: "bsn",
    image: "bsn-program.jpg",
    duration: "4 Years",
    intake: "Fall & Spring",
    description: "A comprehensive undergraduate program preparing students for professional nursing practice with a focus on clinical competence and leadership.",
    eligibility: ["FSc Pre-Medical with 50% marks", "Age 17-35 years", "Pass entrance test", "Interview"],
    careers: ["Staff Nurse", "Clinical Nurse", "Nursing Supervisor", "Healthcare Administrator"],
  },
 
  {
    title: "Certified Nursing Assistant (CNA)",
    slug: "cna",
    image: "cna-program.jpg",
    duration: "6 Months",
    intake: "Rolling Admissions",
    description: "Entry-level certification program for those starting their healthcare career with hands-on patient care training.",
    eligibility: ["Matric with 45% marks", "Age 14-35 years", "Interview"],
    careers: ["Nursing Assistant", "Patient Care Technician", "Home Health Aide"],
  },
  {
    title: "Lady Health Visitor (LHV)",
    slug: "lhv",
    image: "lady-health-visitor.webp",
    duration: "2 Years",
    intake: "Fall",
    description: "Community health focused program specializing in maternal and child health services for rural and urban communities.",
    eligibility: ["Matric with Science with 45% marks", "Female candidates only", "Age 14-35 years"],
    careers: ["Lady Health Visitor", "Community Health Worker", "MCH Specialist"],
  },
  {
    title: "Community Midwifery (CMW)",
    slug: "cmw",
    image: "cmw-program.avif",
    duration: "18 Months",
    intake: "Fall & Spring",
    description: "Specialized training in midwifery and maternal health services with focus on community-based care.",
    eligibility: ["Matric with 45% marks", "Female candidates only", "Age 14-35 years"],
    careers: ["Community Midwife", "Birth Attendant", "MCH Center Staff"],
  },
]

export default function ProgramsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Our Programs
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Choose from our range of PNMC-recognized nursing programs designed to launch your healthcare career.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Programs List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="space-y-16">
              {programs.map((program, index) => (
                <motion.div
                  key={program.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/90 text-foreground rounded-full text-sm font-medium">
                          <Clock className="h-4 w-4" />
                          {program.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/90 text-foreground rounded-full text-sm font-medium">
                          <Calendar className="h-4 w-4" />
                          {program.intake}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                      {program.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {program.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          Eligibility
                        </h3>
                        <ul className="space-y-2">
                          {program.eligibility.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Award className="h-5 w-5 text-secondary" />
                          Career Paths
                        </h3>
                        <ul className="space-y-2">
                          {program.careers.map((career, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                              {career}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                        <Link href="https://mikhan.edu.pk/apply.php" target="_blank" rel="noopener noreferrer">
                          Apply Now
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <Link href={`/programs/${program.slug}`}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
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
