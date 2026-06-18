"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  BookOpen,
  ClipboardList,
  FileText,
  Users,
  CalendarDays,
  Award,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Users,
    title: "Student Management",
    desc: "View and manage assigned student groups.",
  },
  {
    icon: ClipboardList,
    title: "Attendance Marking",
    desc: "Mark and manage daily class attendance.",
  },
  {
    icon: FileText,
    title: "Assignments & Grading",
    desc: "Create assignments and evaluate student submissions.",
  },
  {
    icon: BookOpen,
    title: "Course Content",
    desc: "Upload lecture materials and study resources.",
  },
  {
    icon: CalendarDays,
    title: "Class Schedule",
    desc: "Manage your teaching timetable and sessions.",
  },
  {
    icon: Award,
    title: "Performance Tracking",
    desc: "Track student academic progress and reports.",
  },
]

export default function TeacherPortalPage() {
  const portalLink = "http://mikhan.edu.pk/faculty.php"

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="bg-background">

        {/* HERO */}
        <section className="relative bg-primary text-primary-foreground py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-6 text-center">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8" />
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Teacher Portal
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                Manage your classes, students, attendance, assignments, and academic performance
                through the official MIKINHS faculty system.
              </p>

              <Button
                size="lg"
                className="bg-gold text-primary hover:bg-gold/90 font-semibold px-8"
                asChild
              >
                <a
                  href={portalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access Teacher Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-6">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Faculty Control System
              </h2>
              <p className="text-muted-foreground">
                A complete academic management suite designed for instructors.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="p-6 rounded-2xl border bg-white shadow-sm hover:shadow-xl transition-all"
                >
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT SECTION */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Faculty Support & Administration
                </h2>

                <p className="text-muted-foreground mb-6">
                  For system access issues, academic coordination, or portal support,
                  contact the administration office.
                </p>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>📧 Email: info@mikinhs.com</p>
                  <p>📞 Phone: +92 333 2810809</p>
                  <p>🕒 Mon - Sat: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                <MessageSquare className="h-10 w-10 mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  Faculty Help Desk
                </h3>

                <p className="text-white/80 mb-6 text-sm">
                  Get technical and academic support for your teaching workflow.
                </p>

                <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                  <a href="/contact">
                    Contact Support
                  </a>
                </Button>
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