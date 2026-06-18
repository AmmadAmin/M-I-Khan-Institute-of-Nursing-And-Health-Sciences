"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

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

export function NewsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm">
              Latest News
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              News & Announcements
            </h2>
          </div>

          <Button asChild variant="outline">
            <Link href="/news">View All News</Link>
          </Button>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

          {news.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="bg-card border rounded-2xl p-5 sm:p-6 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-xs px-3 py-1 bg-secondary/10 rounded-full">
                  {item.category}
                </span>

                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {item.date}
                </span>
              </div>

              <h3 className="font-semibold text-base sm:text-lg mb-3 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground flex-1 line-clamp-3">
                {item.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}