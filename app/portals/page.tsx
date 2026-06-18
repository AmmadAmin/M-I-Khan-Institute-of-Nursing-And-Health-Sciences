"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { GraduationCap, Users, ShieldCheck, ArrowRight } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnnouncementBar } from "@/components/announcement-bar"
import { FloatingButtons } from "@/components/floating-buttons"

const portals = [
  {
    title: "Student Portal",
    description:
      "Access your courses, attendance, results, assignments, and academic dashboard.",
    icon: GraduationCap,
    href: "/portals/student",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Teacher Portal",
    description:
      "Manage classes, upload marks, view student performance, and academic records.",
    icon: Users,
    href: "/portals/teacher",
    color: "bg-green-500/10 text-green-600",
  },
  {
    title: "Admin Portal",
    description:
      "Full institutional control including users, admissions, reports, and system settings.",
    icon: ShieldCheck,
    href: "/portals/admin",
    color: "bg-red-500/10 text-red-600",
  },
]

export default function PortalsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="min-h-screen bg-background">

        {/* HERO SECTION */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Institute Portals
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
            >
              Select your portal to access your personalized dashboard and institute services.
            </motion.p>
          </div>
        </section>

        {/* PORTAL CARDS */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-3 gap-8">

              {portals.map((portal, index) => {
                const Icon = portal.icon

                return (
                  <motion.div
                    key={portal.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={portal.href}>
                      <div className="group p-8 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full">

                        {/* ICON */}
                        <div
                          className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${portal.color}`}
                        >
                          <Icon className="h-7 w-7" />
                        </div>

                        {/* TITLE */}
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {portal.title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {portal.description}
                        </p>

                        {/* BUTTON */}
                        <div className="flex items-center text-primary font-medium gap-2 group-hover:gap-3 transition-all">
                          Enter Portal
                          <ArrowRight className="h-4 w-4" />
                        </div>

                      </div>
                    </Link>
                  </motion.div>
                )
              })}

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}