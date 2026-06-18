"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What are the eligibility requirements for BS Nursing?",
    answer:
      "Candidates must have completed FSc Pre-Medical or equivalent with at least 50% marks. Applicants must be between 17-35 years of age and pass the entrance test and interview.",
  },
  {
    question: "Is MIKINHS affiliated with a recognized university?",
    answer:
      "Yes, MIKINHS is affiliated with Dow University of Health Sciences (DUHS) and recognized by the Pakistan Nursing & Midwifery Council (PNMC) and Sindh Nursing Board.",
  },
  {
    question: "What is the fee structure for BSN program?",
    answer:
      "The BSN program fee is paid in semester installments. Scholarships and financial aid are available for eligible students.",
  },
  {
    question: "Does MIKINHS offer hostel facilities?",
    answer: "Yes, hostel facilities are available for students.",
  },
  {
    question: "What clinical training hospitals are you affiliated with?",
    answer:
      "Students receive clinical training at leading hospitals including JPMC and Civil Hospital Karachi.",
  },
  {
    question: "What is the job placement rate for graduates?",
    answer:
      "The institute supports career placement assistance after graduation.",
  },
  {
    question: "Are scholarships available?",
    answer: "Yes, both merit-based and need-based scholarships are available.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-flex px-4 py-1.5 bg-gold/10 text-gold rounded-full text-xs sm:text-sm font-medium mb-4">
              FAQ
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              Frequently Asked Questions
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
              Find answers about admissions, programs, fees, and student life.
            </p>

            <p className="text-sm sm:text-base text-muted-foreground">
              Can&apos;t find what you need?{" "}
              <a
                href="/contact"
                className="text-primary font-medium hover:underline"
              >
                Contact support
              </a>
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-xl px-4 sm:px-6 py-1 data-[state=open]:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base font-medium py-4 sm:py-5 hover:text-primary leading-relaxed">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground text-sm sm:text-base pb-4 sm:pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}