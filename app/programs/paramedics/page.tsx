"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Ambulance,
  HeartPulse,
  Syringe,
  Microscope,
  Activity,
  ShieldPlus,
  CheckCircle2,
  Stethoscope,
  Clock3,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

const courses = [
  {
    title: "Dispenser",
    icon: HeartPulse,
    description:
      "Learn medicine dispensing, prescription handling, patient guidance, and healthcare assistance skills.",
  },
  {
    title: "Operation Theatre Technician",
    icon: Stethoscope,
    description:
      "Gain practical expertise in surgical assistance, sterilization, and OT management.",
  },
  {
    title: "Laboratory Technician",
    icon: Microscope,
    description:
      "Develop diagnostic laboratory skills including specimen testing and medical reporting.",
  },
  {
    title: "X-Ray Technician",
    icon: Activity,
    description:
      "Train in radiographic imaging techniques and safe operation of X-ray equipment.",
  },
  {
    title: "Blood Transfusion Technician",
    icon: Syringe,
    description:
      "Learn blood collection, storage, compatibility testing, and transfusion procedures.",
  },
  {
    title: "Dental Surgery Assistant",
    icon: ShieldPlus,
    description:
      "Assist dental professionals during procedures while maintaining patient care and hygiene.",
  },
  {
    title: "E.C.G. Technician",
    icon: Activity,
    description:
      "Develop expertise in ECG monitoring, cardiac testing, and patient cardiac assessment.",
  },
  {
    title: "Physiotherapy Technician",
    icon: HeartPulse,
    description:
      "Support rehabilitation therapy and assist patients in physical recovery programs.",
  },
  {
    title: "Dialysis Technician",
    icon: Activity,
    description:
      "Understand dialysis procedures, renal patient care, and dialysis equipment handling.",
  },
  {
    title: "Anesthesia Technician",
    icon: Stethoscope,
    description:
      "Assist anesthesiologists in surgical procedures and patient monitoring.",
  },
  {
    title: "Ophthalmic Technician",
    icon: CheckCircle2,
    description:
      "Learn eye examination support, ophthalmic diagnostics, and patient assistance.",
  },
  {
    title: "ICU Technician",
    icon: Ambulance,
    description:
      "Train in intensive care support, patient monitoring, and emergency healthcare assistance.",
  },
  {
    title: "NCU Technician",
    icon: ShieldPlus,
    description:
      "Develop neonatal care skills for newborn critical care units and patient support.",
  },
  {
    title: "Pediatric Technician",
    icon: HeartPulse,
    description:
      "Learn specialized healthcare support for infants and children in clinical environments.",
  },
  {
    title: "Ultrasound Technician",
    icon: Activity,
    description:
      "Gain practical ultrasound imaging skills and diagnostic scanning techniques.",
  },
  {
    title: "Cardiac Surgery Assistant",
    icon: Stethoscope,
    description:
      "Assist cardiac surgeons during procedures and support surgical patient care.",
  },
  {
    title: "Oncology Technician",
    icon: ShieldPlus,
    description:
      "Support cancer care procedures, patient monitoring, and oncology treatment assistance.",
  },
  {
    title: "CT Scan Technician",
    icon: Microscope,
    description:
      "Learn CT imaging techniques, patient positioning, and scan operation procedures.",
  },
  {
    title: "Leprosy Technician",
    icon: CheckCircle2,
    description:
      "Train in diagnosis support, patient care, and community healthcare awareness.",
  },
  {
    title: "CSSD Technician",
    icon: ShieldPlus,
    description:
      "Manage sterilization, surgical instrument processing, and infection control systems.",
  },
  {
    title: "Ophthalmic O.T. Technician",
    icon: Stethoscope,
    description:
      "Assist ophthalmic surgeries with specialized operation theater procedures.",
  },
  {
    title: "Cardiac Critical Care Technician",
    icon: HeartPulse,
    description:
      "Provide support in cardiac intensive care and emergency cardiovascular management.",
  },
  {
    title: "Emergency Medical Technician",
    icon: Ambulance,
    description:
      "Learn trauma response, emergency care, and life-saving medical support skills.",
  },
  {
    title: "Pediatric Dialysis Technician",
    icon: Activity,
    description:
      "Develop specialized dialysis support skills for pediatric patients.",
  },
  {
    title: "Vaccinator",
    icon: Syringe,
    description:
      "Train in immunization procedures, vaccine administration, and community healthcare services.",
  },
]

export default function ParamedicsPage() {
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
                One Year Professional Programs
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Paramedics Courses
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl">
                Industry-focused paramedical training programs designed to
                prepare students for practical healthcare careers in hospitals,
                laboratories, emergency care units, and healthcare facilities.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/welcome.jpg"
                    alt="Paramedics Courses"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

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
                  Practical Skills for Modern Healthcare Careers
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our one-year paramedical diploma courses are designed to
                  equip students with technical healthcare skills, clinical
                  experience, and practical training required in modern
                  healthcare systems.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  Students receive hands-on learning opportunities through
                  laboratories, healthcare workshops, and supervised clinical
                  training to prepare for professional healthcare careers.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <Clock3 className="h-6 w-6 text-primary" />
                    <span className="font-medium">1 Year Programs</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <ShieldPlus className="h-6 w-6 text-secondary" />
                    <span className="font-medium">Professional Training</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <HeartPulse className="h-6 w-6 text-gold" />
                    <span className="font-medium">Clinical Practice</span>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-xl border bg-card">
                    <Activity className="h-6 w-6 text-primary" />
                    <span className="font-medium">Career Opportunities</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Courses */}
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
                Available Courses
              </span>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                One Year Paramedics Programs
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <course.icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {course.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Professional Certification</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-primary rounded-3xl p-10 lg:p-16 text-primary-foreground">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-8">
                    <Ambulance className="h-10 w-10" />
                  </div>

                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Build Your Future in Healthcare
                  </h2>

                  <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                    Start your healthcare journey with industry-relevant
                    paramedical training and gain practical skills required in
                    modern hospitals and healthcare institutions.
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
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}