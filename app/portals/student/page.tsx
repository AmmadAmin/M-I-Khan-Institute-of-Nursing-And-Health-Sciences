"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  BookOpen,
  ClipboardList,
  FileText,
  CalendarDays,
  Bell,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: BookOpen,
    title: "Course Materials",
    desc: "Access lecture notes, slides, and study resources.",
  },
  {
    icon: ClipboardList,
    title: "Attendance",
    desc: "Check your attendance records in real time.",
  },
  {
    icon: FileText,
    title: "Examinations",
    desc: "View results, schedules, and exam updates.",
  },
  {
    icon: CalendarDays,
    title: "Timetable",
    desc: "Stay updated with your class schedule.",
  },
  {
    icon: Bell,
    title: "Notices",
    desc: "Important announcements from administration.",
  },
  {
    icon: ShieldCheck,
    title: "Student Services",
    desc: "Academic support and institutional services.",
  },
]

export default function StudentPortalPage() {
  const portalLink = "https://YOUR-STUDENT-PORTAL-LINK.com"

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
                Student Portal
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                Access your academic records, course materials, attendance,
                examination results, and important announcements — all in one place.
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
                  Access Student Portal
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
                Everything in One Portal
              </h2>
              <p className="text-muted-foreground">
                A centralized system designed to simplify your academic journey.
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

        {/* INFO / SUPPORT */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  Need Help Accessing the Portal?
                </h2>
                <p className="text-muted-foreground mb-6">
                  If you are unable to log in or face any technical issue,
                  contact the administration office for support.
                </p>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>📧 Email: info@mikinhs.com</p>
                  <p>📞 Phone: +92 333 2810809</p>
                  <p>🕒 Mon - Sat: 9:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
                <HelpCircle className="h-10 w-10 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Student Support Center
                </h3>
                <p className="text-white/80 mb-6 text-sm">
                  Get assistance for login, account issues, and academic queries.
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