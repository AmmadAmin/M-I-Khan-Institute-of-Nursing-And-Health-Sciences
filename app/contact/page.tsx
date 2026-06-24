"use client"

import { motion } from "framer-motion"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>

        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                We are here to assist students, parents, and applicants with admissions,
                academic guidance, and institutional information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-6">

            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* LEFT SIDE - CONTACT DETAILS */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >

                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10">
                  Get in Touch
                </h2>

                <div className="space-y-8">

                  {/* ADDRESS */}
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Campus Address</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        E35, 36, Block No.1 Near Faiz Rehman Hospital Metrovil SITE,
                        <br />
                        Karachi, Sindh, Pakistan
                      </p>
                    </div>
                  </div>

                  {/* PHONE */}
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+923332810809"
                          className="hover:text-primary transition"
                        >
                          +92 333 2810809
                        </a>
                        <br />
                        {/* <a
                          href="tel:+922112345678"
                          className="hover:text-primary transition"
                        >
                          +92 21 12345678
                        </a> */}
                      </p>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:MIKINHS.edu@gmail.com"
                          className="hover:text-primary transition"
                        >
                          MIKINHS.edu@gmail.com
                        </a>
                        <br />
                        {/* <a
                          href="mailto:MIKINHS.edu@gmail.com"
                          className="hover:text-primary transition"
                        >
                          MIKINHS.edu@gmail.com
                        </a> */}
                      </p>
                    </div>
                  </div>

                  {/* HOURS */}
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office Hours</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>

              {/* RIGHT SIDE - MAP */}
              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">
                  Campus Location
                </h2>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Visit our campus for admissions guidance, facility tours, and academic information.
                </p>

                <div className="rounded-2xl overflow-hidden shadow-lg border h-[420px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5731856898177!2d67.0825629!3d24.912169999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzQzLjgiTiA2N8KwMDQnNTcuMiJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Campus Location"
                  />
                </div>

                {/* EXTRA INFO BOX */}
                <div className="mt-6 p-5 border rounded-xl bg-muted/40">
                  <p className="text-sm text-muted-foreground">
                    For admissions, academic queries, or institutional visits, please contact during working hours.
                  </p>
                </div>

              </motion.div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}