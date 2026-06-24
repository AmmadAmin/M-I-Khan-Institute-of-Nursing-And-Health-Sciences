"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  Users,
  Award,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  CheckCircle,
  Mail,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"

export default function CareerPage() {
  const benefits = [
    {
      icon: Award,
      title: "Professional Growth",
      description:
        "Continuous learning opportunities, professional development programs, workshops, and career advancement support.",
    },
    {
      icon: Users,
      title: "Supportive Environment",
      description:
        "Collaborate with experienced educators, healthcare professionals, and dedicated academic staff.",
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "Contribute to high-quality nursing education and help prepare future healthcare leaders.",
    },
    {
      icon: HeartHandshake,
      title: "Meaningful Impact",
      description:
        "Play a vital role in improving healthcare education and positively impacting communities.",
    },
  ]

  const hiringOpenings = [
    {
      title: "Nursing Instructor",
      department: "Academic Department",
      type: "Full Time",
      eligibility: [
        "BSN / Post RN BSN / MSN",
        "Valid PNC Registration",
        "Minimum 2 years teaching or clinical experience",
        "Strong communication skills",
      ],
    },
    {
      title: "Clinical Instructor",
      department: "Clinical Training",
      type: "Full Time",
      eligibility: [
        "BSN or Post RN BSN",
        "Valid PNC Registration",
        "Minimum 2 years clinical experience",
        "Ability to supervise students in hospital settings",
      ],
    },
    {
      title: "Computer Lab Assistant",
      department: "IT Department",
      type: "Full Time",
      eligibility: [
        "Bachelor’s in Computer Science / IT",
        "Basic networking knowledge",
        "Hardware & software troubleshooting skills",
        "Good communication skills",
      ],
    },
    {
      title: "Administrative Officer",
      department: "Administration",
      type: "Full Time",
      eligibility: [
        "Bachelor’s in Business Administration",
        "MS Office proficiency",
        "Strong organizational skills",
        "Minimum 2 years experience",
      ],
    },
    {
      title: "Student Affairs Coordinator",
      department: "Student Services",
      type: "Full Time",
      eligibility: [
        "Bachelor’s or Master’s degree",
        "Strong interpersonal skills",
        "Student handling experience preferred",
        "Good communication skills",
      ],
    },
    {
      title: "Library Assistant",
      department: "Library",
      type: "Full Time",
      eligibility: [
        "Bachelor’s degree",
        "Basic library management knowledge",
        "Computer literacy",
        "Organizational skills",
      ],
    },
  ]

  const steps = [
    "Submit your updated CV via email",
    "Application review by HR team",
    "Shortlisted candidates will be contacted",
    "Interview and final selection",
  ]

  const getGmailLink = (jobTitle: string) =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=MIKINHS.edu@gmail.com&su=Application%20for%20${encodeURIComponent(
      jobTitle
    )}`

  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="overflow-hidden">

        {/* HERO */}
        <section className="relative py-20 lg:py-32 bg-linear-to-br from-primary via-primary to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-6">
                <Briefcase className="h-4 w-4" />
                Career Opportunities
              </div>

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build Your Career With Us
              </h1>

              <p className="text-primary-foreground/85 text-lg md:text-xl">
                Join a professional academic environment focused on excellence in nursing education and healthcare development.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CURRENT JOBS */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                We Are Currently Hiring
              </h2>

              <p className="text-muted-foreground text-lg">
                Explore open positions and apply according to your qualification.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hiringOpenings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {job.type}
                    </span>
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-1">
                    {job.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {job.department}
                  </p>

                  {/* Eligibility */}
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3">
                      Eligibility Criteria
                    </h4>

                    <ul className="space-y-2">
                      {job.eligibility.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Button */}
                  <a
                    href={getGmailLink(job.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-4 py-3 rounded-full font-semibold hover:scale-105 transition"
                  >
                    Apply for this Position
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY JOIN */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Work With Us
              </h2>

              <p className="text-muted-foreground text-lg">
                A professional environment focused on growth and impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all"
                  >
                    <Icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-6 max-w-3xl">

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
              Recruitment Process
            </h2>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card border border-border rounded-2xl p-6"
                >
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <p>
                    <strong>Step {index + 1}:</strong> {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">

            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Start Your Career Today
            </h2>

            <p className="mb-10 text-primary-foreground/85">
              Join a respected institute committed to excellence in healthcare education.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=MIKINHS.edu@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Email Your CV
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}