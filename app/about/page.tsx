"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { LeadershipSection } from "@/components/sections/leadership-section"
import { CTASection } from "@/components/sections/cta-section"
import { Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                About MIKINHS
              </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Shaping compassionate healthcare leaders since 2022
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="welcome.jpg"
                    alt="MIKINHS Campus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                  A Legacy of Excellence
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  M I Khan Institute of Nursing and Health Sciences was established in 2022 with a vision to 
                  transform nursing education in Pakistan. Named after the visionary philanthropist M I Khan, 
                  our institution has grown from humble beginnings to become one of the most respected nursing 
                  colleges in Sindh.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Today, we are proud to be affiliated with Dow University of Health Sciences and recognized 
                  by the Pakistan Nursing & Midwifery Council. Our graduates serve in leading healthcare 
                  institutions across Pakistan and internationally, carrying forward our legacy of compassionate care.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We continue to shape the future of healthcare by 
                  producing skilled, ethical, and compassionate nursing professionals who make a difference 
                  in their communities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
                Our Foundation
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Mission, Vision & Values
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality nursing education that prepares competent, compassionate, and ethical 
                  healthcare professionals who contribute to the well-being of individuals, families, 
                  and communities.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a center of excellence in nursing education, research, and practice, 
                  producing leaders who shape the future of healthcare both nationally and internationally.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 border border-border text-center"
              >
                <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compassion, Integrity, Excellence, Respect, and Lifelong Learning guide everything we do, 
                  from classroom instruction to clinical practice and community service.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <LeadershipSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
