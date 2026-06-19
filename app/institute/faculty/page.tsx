"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { CTASection } from "@/components/sections/cta-section"

const facultyMembers = [
  {
    name: "Muhammad Javeed",
    role: "Principal",
    qualification: "BScN, MBA(HM), MScN",
    image: "/Muhammad-Javeed.jpg",
    quote:
      "Nurturing compassionate care through rigorous education and ethical practice.",
  },
  
  {
    name: "Junaid Ali Gondal",
    role: "Vice Principal",
    qualification: "MSN, BSN",
    image: "/Junaid-gondal.jpg",
    quote:
      "Inspiring future nurses through dynamic teaching and clinical expertise.",
  },
  {
    name: "Muhammad Sohail",
    role: "Nursing Lecturer",
    qualification: "BSN, RN",
    image: "/Muhammad-sohail.jpeg",
    quote:
      "Developing clinical competence and compassionate patient care.",
  },
  {
    name: "Imtiaz Ahmed",
    role: "English Lecturer",
    qualification: "MPhil English, BS English, B.Ed",
    image: "/Imtiaz-ahmed.png",
    quote:
      "Strengthening communication skills essential for healthcare professionals.",
  },
  {
    name: "Savera",
    role: "Nursing Lecturer",
    qualification: "BSN, RN, Ultrasound Technician",
    image: "/saweera.jpg",
    quote:
      "Guiding students toward excellence in nursing practice.",
  },
  {
    name: "Naheed Shams",
    role: "Nursing Lecturer",
    qualification: "BSN, RN",
    image: "/naheed-shams.png",
    quote:
      "Preparing future nurses with evidence-based knowledge and care.",
  },
  {
    name: "Khursheed Ahmed",
    role: "Nursing Lecturer",
    qualification: "BSN (MSN Scholar)",
    image: "/khursheed-ahmed.jpg",
    quote:
      "Building strong clinical foundations for nursing students.",
  },
  {
    name: "Asad Ali Khan",
    role: "ICP Lecturer",
    qualification: "Master in Islamic Studies / Dars-e-Nizami",
    image: "/asad-ali-khan.jpg",
    quote:
      "Promoting critical thinking and professional growth.",
  },
  {
    name: "Muhammad Jahangir",
    role: "ICT Lecturer",
    qualification: "BS Computer Science",
    image: "/muhammad-jahangir.jpg",
    quote:
      "Equipping students with modern technology skills for healthcare.",
  },
  {
    name: "Bibi Maryam Sanam",
    role: "Nursing Lecturer",
    qualification: "BSN, RN",
    image: "/maryam-sanam.jpg",
    quote:
      "Supporting academic excellence and lifelong learning.",
  },

  {
    name: "Syeda Iqra",
    role: "Nursing Lecturer",
    qualification: "LHV and Certified Sonographer ",
    image: "/iqra.jpg",
    quote:
      "Supporting academic excellence and lifelong learning.",
  },
]

export default function FacultyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-4 lg:px-6 text-center max-w-3xl relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Meet Our Faculty
            </motion.h1>

            <p className="text-white/80 text-lg md:text-xl">
              Dedicated educators and healthcare professionals shaping future nurses through excellence and mentorship.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/group-teachers.jpg"
                alt="Faculty Group"
                fill
                className="object-cover object-center"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Educators Dedicated to Excellence
              </h2>

              <p className="text-muted-foreground mb-4">
                Our faculty combines academic knowledge and clinical experience to prepare students for real-world healthcare challenges.
              </p>

              <p className="text-muted-foreground mb-6">
                Through mentorship and practical training, we ensure students gain confidence, skills, and compassion.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 border rounded-xl">
                  <GraduationCap className="text-primary" />
                  Qualified Educators
                </div>

                <div className="flex items-center gap-3 p-4 border rounded-xl">
                  <Users className="text-primary" />
                  Student Mentorship
                </div>

                <div className="flex items-center gap-3 p-4 border rounded-xl">
                  <BookOpen className="text-primary" />
                  Clinical Expertise
                </div>

                <div className="flex items-center gap-3 p-4 border rounded-xl">
                  <Award className="text-primary" />
                  Academic Excellence
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FACULTY GRID */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Academic Team
              </h2>
              <p className="text-muted-foreground">
                Experienced professionals committed to shaping future healthcare leaders.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {facultyMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* IMAGE FIXED */}
                  <div className="relative aspect-3/4 bg-muted overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-2xl font-semibold mb-1">
                      {member.name}
                    </h3>

                    <p className="text-primary text-sm font-semibold uppercase mb-1">
                      {member.role}
                    </p>

                    <p className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      {member.qualification}
                    </p>

                    <p className="text-muted-foreground italic mt-auto">
                      "{member.quote}"
                    </p>
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