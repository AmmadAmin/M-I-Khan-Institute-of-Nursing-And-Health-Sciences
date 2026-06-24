"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Camera,
  GraduationCap,
  Users,
  HeartHandshake,
  ImageIcon,
} from "lucide-react"

import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { CTASection } from "@/components/sections/cta-section"

const galleryImages = [
  { title: "Campus Building Exterior", category: "Campus", image: "/gallery1.jpg" },
  { title: "Lab Setup", category: "Infrastructure", image: "/gallery2.jpg" },
  { title: "4 CGPA Students ", category: "4 cgpa", image: "/4cgpa.jpg" },
  { title: "Best Teacher Award", category: "Teacher", image: "/best-teacher.jpg" },
  { title: "Clinical Skills Training", category: "Training", image: "/gallery3.jpg" },
  { title: "Institutional Presentation", category: "Academic", image: "/gallery4.jpg" },
  { title: "Basic Life Support Training", category: "Training", image: "/gallery5.jpg" },
  { title: "Student Seminar Session", category: "Academic", image: "/gallery6.jpg" },
  { title: "Interactive Workshop", category: "Workshop", image: "/gallery7-workshop.jpg" },
  { title: "Hands-on Clinical Practice", category: "Training", image: "/gallery8.jpg" },
  { title: "Nursing Students Group Photo", category: "Student Life", image: "/gallery9.jpg" },
  { title: "Clinical Skills Lab", category: "Laboratory", image: "/gallery10.jpg" },
  { title: "Medical Mannequin Practice", category: "Training", image: "/gallery11.jpg" },
  { title: "Cardiac Model Demonstration", category: "Learning", image: "/gallery12.jpg" },
  { title: "Student Professional Portrait", category: "Student Life", image: "/gallery13.jpg" },
  { title: "Anatomical Model Workshop", category: "Learning", image: "/gallery14.jpg" },
  { title: "Student Achievement Group", category: "Achievements", image: "/gallery15.jpg" },
  { title: "Academic Award Presentation", category: "Achievements", image: "/gallery16.jpg" },
  { title: "Faculty Consultations", category: "Academic", image: "/gallery17.jpg" },
  { title: "Group Learning Activity", category: "Student Life", image: "/gallery18.jpg" },
  { title: "Focused Clinical Study", category: "Training", image: "/gallery19.jpg" },
  { title: "Peer-to-Peer Learning", category: "Learning", image: "/gallery20.jpg" },
  { title: "First Aid Skill Practice", category: "Training", image: "/gallery21.jpg" },
  { title: "Student Study Group", category: "Student Life", image: "/gallery22.jpg" },
  { title: "Professional Award Recognition", category: "Achievements", image: "/gallery23.jpg" },
  { title: "Cricket Team Group Photo", category: "Sports", image: "/gallery24.jpeg" },
  { title: "Opening Prayer Ceremony", category: "Inauguration", image: "/gallery25-Innuguration-pics.jpeg" },
  { title: "Institutional Planning Meeting", category: "Academic", image: "/gallery26-Briefing-party-WHO.jpg" },
  { title: "Award Presentation Ceremony", category: "Inauguration", image: "/gallery27.jpg" },
  { title: "Honoring Faculty Members", category: "Inauguration", image: "/gallery28.jpg" },
  { title: "Award Recipient Recognition", category: "Inauguration", image: "/gallery29.jpg" },
  { title: "Certificate Distribution", category: "Inauguration", image: "/gallery30.jpg" },
  { title: "Ribbon Cutting Ceremony", category: "Inauguration", image: "/gallery31.jpg" }
];
export default function GalleryPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main className="overflow-hidden">

        {/* HERO */}
        <section className="relative py-24 lg:py-32 bg-linear-to-br from-primary via-primary to-primary/90 text-white">

          <div className="container mx-auto px-4 lg:px-6">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md mb-6">
                <Camera className="h-4 w-4" />
                <span className="text-sm font-medium">
                  Campus Life & Memories
                </span>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Institute Gallery
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                Discover memorable moments from academic activities,
                clinical training, campus events, workshops, student
                achievements, and healthcare education experiences.
              </p>

            </motion.div>

          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-background border-b">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                {
                  icon: ImageIcon,
                  value: "50+",
                  label: "Gallery Photos",
                },
                {
                  icon: GraduationCap,
                  value: "10+",
                  label: "Academic Events",
                },
                {
                  icon: Users,
                  value: "500+",
                  label: "Students",
                },
                {
                  icon: HeartHandshake,
                  value: "100+",
                  label: "Clinical Sessions",
                },
              ].map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl border bg-card p-6 text-center"
                  >
                    <Icon className="h-8 w-8 mx-auto text-primary mb-4" />
                    <h3 className="text-3xl font-bold mb-2">
                      {item.value}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.label}
                    </p>
                  </motion.div>
                )
              })}

            </div>

          </div>
        </section>

        {/* GALLERY */}
        <section className="py-20 lg:py-28">

          <div className="container mx-auto px-4 lg:px-6">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Photo Collection
              </span>

              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Explore Campus Life
              </h2>

              <p className="text-muted-foreground text-lg">
                A visual journey through our academic excellence,
                practical learning experiences, student activities,
                and institutional achievements.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

              {galleryImages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.03,
                  }}
                  className="group overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-2xl transition-all duration-500"
                >

                  <div className="relative h-72 overflow-hidden">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">

                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs mb-3">
                        {item.category}
                      </span>

                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>

                    </div>

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