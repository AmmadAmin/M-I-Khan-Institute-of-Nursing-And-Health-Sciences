"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Building2,
  BookOpen,
  Microscope,
  Laptop,
  Bed,
  Wifi,
  ShieldCheck,
  Users,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { CTASection } from "@/components/sections/cta-section"

const facilities = [
  {
    title: "Modern Smart Classrooms",
    description:
      "Air-conditioned, technology-enabled classrooms designed for interactive and student-centered learning experiences.",
    icon: Building2,
    image:
      "/modren-cr.jpg",
  },
  {
    title: "Advanced Nursing Skills Lab",
    description:
      "Simulation-based labs equipped with modern medical mannequins and clinical tools for hands-on training.",
    icon: Microscope,
    image:
      "/advance-skill-lab.jpg",
  },
  {
    title: "Digital Library",
    description:
      "Extensive collection of nursing books, research journals, and digital learning resources for academic excellence.",
    icon: BookOpen,
    image:
      "/library.avif",
  },
  {
    title: "Computer & IT Lab",
    description:
      "Fully equipped computer lab with internet access supporting research, assignments, and digital healthcare education.",
    icon: Laptop,
    image:
      "/com-it-lab.jpg",
  },
  {
    title: "Clinical Training Facilities",
    description:
      "Real-time clinical practice and hospital-based training to build professional healthcare skills.",
    icon: Bed,
    image:
      "/clinical-trainig.jpg",
  },
  {
    title: "Sports Facilities (Football, Cricket, Volleyball)",
    description:
      "Dedicated sports grounds and activities promoting physical fitness, teamwork, and leadership development.",
    icon: Users,
    image:
      "/sports-facilities.jpg",
  },
  {
    title: "Quality Enhancement Cell (QEC)",
    description:
      "Ensures academic quality, continuous improvement, and maintenance of educational standards.",
    icon: ShieldCheck,
    image:
      "/qualiti-enhancement-cell.jpg",
  },
  {
    title: "Student Affairs Cell",
    description:
      "Provides student guidance, counseling, extracurricular support, and leadership development opportunities.",
    icon: Users,
    image:
      "/std-affairs-cell.jpg",
  },
]

export default function FacilitiesPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm mb-6">
                Campus Facilities
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                World-Class Learning Environment
              </h1>

              <p className="text-white/80 text-lg md:text-xl">
                Modern classrooms, advanced labs, sports facilities, and student support systems
                designed to shape future healthcare professionals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-12 items-center">

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/campusfacilities.jpg"
                alt="Campus Facilities"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Designed for Modern Healthcare Education
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                The institute provides a complete academic ecosystem including labs, digital
                resources, sports, and student support services to ensure holistic development.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our focus is not only academic excellence but also personal growth, leadership
                skills, and professional readiness for healthcare careers.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 border rounded-xl">High-Speed Internet</div>
                <div className="p-4 border rounded-xl">Safe Campus</div>
                <div className="p-4 border rounded-xl">Student Support</div>
                <div className="p-4 border rounded-xl">Clinical Training</div>
              </div>
            </div>
          </div>
        </section>

        {/* FACILITIES GRID */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Our Campus Facilities
              </h2>
              <p className="text-muted-foreground mt-4">
                Everything students need for academic success and personal development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {facilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
                >
                  <div className="relative h-72">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <item.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CAMPUS LIFE SECTION */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6 text-center max-w-4xl">

            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Campus Life & Student Development
            </h2>

            <p className="text-muted-foreground mb-12">
              A balanced environment combining academics, sports, and student support services.
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">

              <div className="p-6 border rounded-2xl">
                <h3 className="font-semibold mb-2">Sports Activities</h3>
                <p className="text-muted-foreground text-sm">
                  Football, cricket, and volleyball build teamwork and discipline.
                </p>
              </div>

              <div className="p-6 border rounded-2xl">
                <h3 className="font-semibold mb-2">Quality Enhancement Cell</h3>
                <p className="text-muted-foreground text-sm">
                  Ensures continuous improvement in academic standards.
                </p>
              </div>

              <div className="p-6 border rounded-2xl">
                <h3 className="font-semibold mb-2">Student Affairs</h3>
                <p className="text-muted-foreground text-sm">
                  Supports counseling, leadership, and student engagement.
                </p>
              </div>

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