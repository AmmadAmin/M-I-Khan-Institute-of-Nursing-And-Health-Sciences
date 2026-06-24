"use client"

import { Phone, Mail, MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-3 py-2.5 pr-10">

          {/* Announcement */}
          <p className="text-center lg:text-left text-xs sm:text-sm font-medium leading-relaxed">
            <span className="inline-block animate-pulse mr-2 text-gold">
              ●
            </span>

            Admissions Open 2026–27

            <span className="hidden sm:inline">
              {" "}|
            </span>

            <a
              href="https://mikhan.edu.pk/apply.php"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 underline underline-offset-2 hover:text-gold transition-colors"
            >
              Apply Now
            </a>
          </p>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">

            <a
              href="tel:+923332810809"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden xl:inline">
                +92-333-2810809
              </span>
            </a>

            <a
              href="mailto:MIKINHS.edu@gmail.com"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden xl:inline">
                MIKINHS.edu@gmail.com
              </span>
            </a>

            <a
              href="https://wa.me/923332810809"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0" />
              <span className="hidden sm:inline">
                WhatsApp
              </span>
            </a>

          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            aria-label="Close announcement"
            className="
              absolute
              top-2
              right-0
              p-1.5
              rounded-md
              hover:bg-white/10
              transition-colors
            "
          >
            <X className="h-4 w-4" />
          </button>

        </div>
      </div>
    </div>
  )
}