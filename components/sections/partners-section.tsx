"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"

/* =========================
   DATA
   ========================= */

const partners = [
  {
    name: "JPMC",
    logo: "/jpmc-logo-bg.png",
    url: "https://www.jpmc.edu.pk",
    description:
      "Premier teaching hospital providing comprehensive clinical training.",
  },
  {
    name: "Civil Hospital Karachi",
    logo: "/civil-logo.jpg",
    url: "https://chk.gov.pk",
    description:
      "One of the largest public hospitals offering diverse patient care experience.",
  },
]

const affiliations = [
  {
    name: "Dow University of Health Sciences",
    logo: "/duhs-logo.png",
    url: "https://www.duhs.edu.pk/affiliated-colleges-institutes/",
    description: "Academic affiliation for degree programs",
  },
  {
    name: "Pakistan Nursing & Midwifery Council",
    logo: "/pnc-logo.jpg",
    url: "https://pnmc.pk/recognized-institutes/",
    description: "National recognition and accreditation",
  },
  {
    name: "Sindh Nurses Examination Board",
    logo: "/snb-logo.jpg",
    // url: "https://pnmc.pk/recognized-institutes/",
    description: "Examination and certification authority for nursing programs",
  },
  
  {
    name: "Health Department Government of Sindh",
    logo: "/health-department-of-sindh.png",
    // url: "https://pnmc.pk/recognized-institutes/",
    description: "Government healthcare oversight and regulation",
  },
  {
    name: "Higher Education Commission (HEC)",
    logo: "/hec-logo.png",
    // url: "https://www.hec.gov.pk",
    description: "National higher education regulatory authority",
  },
]

/* =========================
   LOGO COMPONENT
   ========================= */

function Logo({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className="w-28 h-28 rounded-2xl bg-muted flex items-center justify-center">
        <span className="font-bold text-sm">
          {alt.slice(0, 2).toUpperCase()}
        </span>
      </div>
    )
  }

  return (
    <div className="w-28 h-28 flex items-center justify-center rounded-2xl bg-white border shadow-sm">
      <Image
        src={src}
        alt={alt}
        width={112}
        height={112}
        className="object-contain p-2"
        onError={() => setError(true)}
      />
    </div>
  )
}

/* =========================
   MAIN COMPONENT
   ========================= */

export function PartnersSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-6">

        {/* =========================
            CLINICAL PARTNERS
        ========================= */}
        <div className="mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Clinical Training Partners
            </span>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Learn at Leading Hospitals
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Students receive extensive clinical exposure and practical healthcare training through our partnered hospitals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="group h-full flex flex-col items-center text-center p-8 rounded-3xl border bg-card hover:border-primary/30 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <span className="mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Clinical Partner
                </span>

                <div className="mb-6">
                  <Logo src={partner.logo} alt={partner.name} />
                </div>

                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>

        {/* =========================
            DIVIDER
        ========================= */}
        <div className="w-full h-px bg-border my-20 lg:my-28" />

        {/* =========================
            AFFILIATIONS & ACCREDITATIONS
        ========================= */}
        <div className="mt-20 lg:mt-28 rounded-[32px] bg-muted/30 border border-border/50 p-8 md:p-12 lg:p-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-14"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Affiliations & Accreditations
            </span>

            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6">
              Professional Recognition & Accreditation
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Recognized by leading academic, regulatory, and healthcare organizations committed to excellence in nursing education, clinical training, and professional standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {affiliations.map((affiliation, index) => (
              <motion.a
                key={affiliation.name}
                href={affiliation.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group h-full flex flex-col items-center text-center p-8 rounded-3xl border bg-card hover:border-primary/30 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <span className="mb-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Recognition
                </span>

                <div className="mb-6">
                  <div className="w-28 h-28 flex items-center justify-center rounded-2xl bg-white border shadow-sm">
                    <Image
                      src={affiliation.logo}
                      alt={affiliation.name}
                      width={112}
                      height={112}
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {affiliation.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {affiliation.description}
                </p>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}