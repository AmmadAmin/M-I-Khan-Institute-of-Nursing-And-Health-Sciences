"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Lock,
  Cookie,
  FileCheck,
  CheckCircle2,
  Eye,
  Database,
  UserCheck,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

const privacyHighlights = [
  {
    icon: Shield,
    title: "Information Collection",
    description:
      "We collect only essential information required for admissions, inquiries, and academic communication.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "We use secure systems and safeguards to protect your personal data from unauthorized access.",
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    description:
      "Cookies help improve website performance, usability, and user experience.",
  },
  {
    icon: FileCheck,
    title: "User Rights",
    description:
      "Users can request access, correction, or deletion of personal data where applicable.",
  },
]

const policySections = [
  {
    title: "Introduction",
    content:
      "M.I. Khan Institute of Nursing and Health Sciences (MIKINHS) is committed to protecting your privacy and ensuring transparency in how we handle personal information collected through our website and admission system.",
  },
  {
    title: "Information We Collect",
    content:
      "We may collect personal details such as name, phone number, email address, academic records, admission data, and technical data like IP address and browser information.",
  },
  {
    title: "How We Use Information",
    content:
      "We use collected data for admissions processing, communication, academic services, institutional improvement, and compliance with regulatory requirements.",
  },
  {
    title: "Data Protection",
    content:
      "We implement strict administrative and technical safeguards to ensure personal data remains secure, confidential, and protected from unauthorized access.",
  },
  {
    title: "Cookies & Analytics",
    content:
      "Our website uses cookies and analytics tools to improve functionality, track usage patterns, and enhance user experience.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may use trusted third-party services for hosting, analytics, and communication. These providers only process data on our behalf.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell or trade personal data. Information may only be shared when required by law or regulatory authorities.",
  },
  {
    title: "User Rights",
    content:
      "Users may request access, correction, or deletion of their personal information in accordance with applicable laws and institutional policies.",
  },
  {
    title: "External Links",
    content:
      "Our website may contain links to external sites. We are not responsible for their privacy practices or content.",
  },
  {
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy from time to time. Updates will be posted on this page.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>

        {/* HERO SECTION */}
        <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-black/30 to-black/10" />

          <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Shield className="h-12 w-12 mx-auto mb-6 text-gold" />

              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
                Legal & Privacy
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Privacy Policy
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Learn how we collect, use, and protect your personal information
                across admissions, inquiries, and academic services.
              </p>

              <p className="mt-6 text-sm text-white/60">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Key Principles
              </span>

              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Your Privacy Matters
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {privacyHighlights.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border rounded-3xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="font-semibold text-lg mb-2">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* POLICY DETAILS */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Policy Details
              </span>

              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Full Privacy Policy
              </h2>
            </div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {policySections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card border rounded-3xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />

                    <div>
                      <h3 className="font-serif text-2xl font-bold mb-3">
                        {section.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-6 text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <UserCheck className="h-14 w-14 mx-auto mb-6 text-gold" />

              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Questions About Privacy?
              </h2>

              <p className="text-white/80 mb-8">
                Contact our administration team for any privacy-related concerns.
              </p>

              <div className="space-y-2 text-white/90">
                <p>privacy@mikinhs.edu.pk</p>
                <p>021-XXXXXXX</p>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}