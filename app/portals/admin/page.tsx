"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Users,
  BookOpen,
  BarChart3,
  Settings,
  FileText,
  ClipboardList,
  Building2,
  ArrowRight,
  Database,
  AlertTriangle,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Users,
    title: "User Management",
    desc: "Manage students, teachers, and staff accounts.",
  },
  {
    icon: BookOpen,
    title: "Academic Control",
    desc: "Oversee programs, courses, and curriculum structure.",
  },
  {
    icon: ClipboardList,
    title: "Admissions System",
    desc: "Monitor applications, approvals, and enrollments.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Institution performance, KPIs, and reporting data.",
  },
  {
    icon: FileText,
    title: "Records & Reports",
    desc: "Generate academic and administrative reports.",
  },
  {
    icon: Settings,
    title: "System Settings",
    desc: "Configure portal settings and permissions.",
  },
]

export default function AdminPortalPage() {
  const portalLink = "https://YOUR-ADMIN-PORTAL-LINK.com"

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
                  <Shield className="h-8 w-8" />
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Admin Control Panel
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10">
                Centralized management system for academic operations,
                institutional data, users, admissions, and system configuration.
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
                  Access Admin Dashboard
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
                Institutional Management System
              </h2>
              <p className="text-muted-foreground">
                Complete control over academic and administrative operations.
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

        {/* WARNING / SECURITY SECTION */}
        <section className="py-20 bg-muted/40">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  Restricted Access System
                </h2>

                <p className="text-muted-foreground mb-6">
                  This portal is strictly for authorized administrative personnel.
                  Unauthorized access is monitored and logged for security compliance.
                </p>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>📧 Security: info@mikinhs.com</p>
                  <p>📞 Admin Office: +92 333 2810809</p>
                  <p>🕒 Access Logs: 24/7 Monitoring Enabled</p>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">

                <Database className="h-10 w-10 mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-3">
                  System Administration Hub
                </h3>

                <p className="text-white/80 mb-6 text-sm">
                  Full control over academic data, users, and institutional infrastructure.
                </p>

                <Button asChild className="bg-gold text-primary hover:bg-gold/90">
                  <a href="/contact">
                    Contact IT Support
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