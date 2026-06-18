"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const leaders = [
  {
    name: "Dr. Farmanullah Khan",
    role: "Chairman MIKINHS",
    image: "director.jpg",
    qualifications: "MBBS, |Residnet Physician|, Research Scholar",
    bio: "Expert in curriculum development and clinical education with 25 years of experience.",
  },
  {
    name: "Shahinshah",
    role: "Director MIKINHS",
    image: "deen.jpg",
    qualifications: "BSN, MSN, RN",
    bio: "Specializes in simulation-based learning and clinical competency assessment.",
  },
  {
    name: "Ehsanullah Khan",
    role: "Managing Director MIKINHS",
    image: "chairman.jpg",
    qualifications: "BBA, MBA",
    bio: "Dedicated to student welfare and career development for over 15 years.",
  },
  {
    name: "Muhammad Javed",
    role: "Principal",
    image: "Muhammad-Javeed.jpg",
    qualifications: "BScN, MBA(HM), MScN",
    bio: "Over 30 years of experience in nursing education and healthcare administration.",
  }
]

export function LeadershipSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            Leadership Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Meet Our Leaders
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our experienced leadership team is dedicated to maintaining the highest standards of nursing education.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all">
                {/* Image */}
                <div className="relative aspect-3/4 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-lg font-semibold text-white mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-1">{leader.role}</p>
                  <p className="text-white/70 text-xs">{leader.qualifications}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
