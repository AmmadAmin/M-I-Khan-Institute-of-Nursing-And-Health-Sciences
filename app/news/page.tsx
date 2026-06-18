"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnnouncementBar } from "@/components/announcement-bar"

const news = [
  {
    title: "M I Khan Institute Established in 2022",
    excerpt:
      "Founded in 2022, the institute continues to grow as a modern nursing education center.",
    date: "2022",
    category: "Institution",
  },
  {
    title: "New Academic Facilities Introduced",
    excerpt:
      "Advanced labs, classrooms, and training environments have been added.",
    date: "2024",
    category: "Campus",
  },
  {
    title: "Admissions Opening Soon",
    excerpt:
      "Upcoming admissions will be announced soon for new students.",
    date: "Upcoming",
    category: "Admissions",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12 lg:mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              Latest News
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
              News & Announcements
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
              Stay updated with the latest developments, facilities,
              admissions announcements, and institutional news from
              M I Khan Institute of Nursing and Health Sciences.
            </p>
          </motion.div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {news.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  bg-card
                  border
                  border-border
                  rounded-2xl
                  p-6
                  lg:p-7
                  hover:border-primary/30
                  hover:shadow-xl
                  transition-all
                  duration-300
                  h-full
                "
              >
                <div className="flex items-center gap-3 mb-5 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {item.category}
                  </span>

                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
                </div>

                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4 leading-snug">
                  {item.title}
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}