"use client"

import { motion } from "framer-motion"
import {
  FileText,
  Shield,
  AlertTriangle,
  Users,
  Ban,
  CheckCircle2,
  Scale,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

const termsHighlights = [
  {
    icon: Shield,
    title: "Fair Usage",
    description:
      "Users must use this website only for lawful educational and admission-related purposes.",
  },
  {
    icon: Users,
    title: "User Responsibility",
    description:
      "Users are responsible for the accuracy of information submitted through forms.",
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    description:
      "We are not liable for external issues, delays, or third-party service interruptions.",
  },
  {
    icon: Ban,
    title: "Prohibited Use",
    description:
      "Any misuse of the website, including harmful or illegal activity, is strictly prohibited.",
  },
]

const termsSections = [
  {
    title: "1. Introduction",
    content:
      "These Terms of Service govern your use of the M.I. Khan Institute of Nursing and Health Sciences (MIKINHS) website and services. By accessing this website, you agree to comply with these terms.",
  },
  {
    title: "2. Use of Website",
    content:
      "This website is intended for informational and educational purposes related to admissions, programs, and institutional services.",
  },
  {
    title: "3. Admissions Information",
    content:
      "All admission information provided on this website is subject to change without prior notice. Final admission decisions are made by the institute.",
  },
  {
    title: "4. User Obligations",
    content:
      "Users must provide accurate and complete information when filling out application or inquiry forms.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All content, including text, images, logos, and design elements, belongs to MIKINHS and may not be reused without permission.",
  },
  {
    title: "6. Website Availability",
    content:
      "We strive to keep the website accessible but do not guarantee uninterrupted or error-free availability at all times.",
  },
  {
    title: "7. External Links",
    content:
      "Our website may include links to third-party websites. We are not responsible for their content or policies.",
  },
  {
    title: "8. Privacy",
    content:
      "Your use of this website is also governed by our Privacy Policy, which explains how we collect and use data.",
  },
  {
    title: "9. Changes to Terms",
    content:
      "We reserve the right to update these Terms of Service at any time. Continued use of the website implies acceptance of changes.",
  },
  {
    title: "10. Contact Information",
    content:
      "For any questions regarding these Terms, you may contact the administration office of MIKINHS.",
  },
]

export default function TermsPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>

        {/* HERO */}
        <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/10" />

          <div className="container mx-auto px-4 lg:px-6 relative z-10 text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Scale className="h-12 w-12 mx-auto mb-6 text-gold" />

              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-sm font-medium mb-6">
                Legal Agreement
              </span>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Terms of Service
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                These terms explain the rules, responsibilities, and conditions
                for using the MIKINHS website and services.
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
                Key Rules
              </span>

              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Website Usage Guidelines
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {termsHighlights.map((item, index) => {
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

        {/* TERMS DETAILS */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Full Agreement
              </span>

              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Terms & Conditions
              </h2>
            </div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {termsSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card border rounded-3xl p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />

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

        {/* CTA */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-6 text-center">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <FileText className="h-14 w-14 mx-auto mb-6 text-gold" />

              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                Agreeing to Our Terms
              </h2>

              <p className="text-white/80 mb-8">
                By continuing to use this website, you agree to these terms and conditions.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
              >
                Contact Administration
              </a>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}