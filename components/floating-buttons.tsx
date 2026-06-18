"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={scrollToTop}
              size="icon"
              className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3, delay: 0.5 }}
>
  <a
    href="https://wa.me/923332810809?text=Hello!%20I%20would%20like%20to%20inquire%20about%20admissions."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
  >
    <Button
      size="icon"
      className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] shadow-lg hover:shadow-xl transition-all"
    >
      <img
        src="/whatsapp-icon.svg.png"
        alt="WhatsApp"
        className="h-18 w-18 object-contain"
      />
    </Button>
  </a>
</motion.div>
    </div>
  )
}
