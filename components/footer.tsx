import Link from "next/link"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import { FaTiktok } from "react-icons/fa"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/admissions", label: "Admissions" },
  { href: "/facilities", label: "Facilities" },
  { href: "/faculty", label: "Faculty" },
  { href: "/gallery", label: "Gallery" },
  { href: "/careers", label: "Careers" },
]

const programs = [
  { href: "/programs/bsn", label: "BS Nursing (BSN)" },
  { href: "/programs/cna", label: "Certified Nursing Assistant" },
  { href: "/programs/lhv", label: "Lady Health Visitor" },
  { href: "/programs/cmw", label: "Community Midwifery" },
]

const socialLinks = [
  {
    href: "https://www.facebook.com/MIKhanInstitute/",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/mikhaninsh/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://linkedin.com/company/mikinhs",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.tiktok.com/@mikhaninhs",
    icon: FaTiktok,
    label: "TikTok",
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">

          {/* About */}
          <div className="sm:col-span-2 xl:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 justify-center sm:justify-start"
            >
              <img
                src="/mi-khan-logo.jpeg"
                alt="MIKINHS Logo"
                className="h-12 w-12 object-contain shrink-0"
              />

              <div>
                <p className="font-serif text-xl font-bold">
                  MIKINHS
                </p>
                <p className="text-xs text-white/70">
                  M I Khan Institute
                </p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-white/80 text-center sm:text-left">
              Shaping the future of nursing excellence through
              quality education, clinical training, and research
              opportunities since 2022.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-lg font-semibold mb-5">
              Programs
            </h3>

            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link
                    href={program.href}
                    className="text-sm text-white/80 hover:text-gold transition-colors"
                  >
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-5 text-center sm:text-left">
              Contact Us
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gold mt-0.5" />
                <span className="text-sm text-white/80 leading-relaxed">
                  E35, 36, Block No.1 Near Faiz Rehman Hospital
                  Metrovil SITE Karachi Sindh, Pakistan
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href="tel:+923332810809"
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  +92 333 2810809
                </a>
              </li>

              <li className="flex items-center gap-3 break-all">
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <a
                  href="mailto:info@mikinhs.com"
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  MIKINHS.edu@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-gold" />
                <span className="text-sm text-white/80">
                  Mon - Sat: 9:00 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-white/10">
          <div className="h-62.5 sm:h-75 md:h-87.5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5731856898177!2d67.0825629!3d24.912169999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU0JzQzLjgiTiA2N8KwMDQnNTcuMiJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="MIKINHS Location"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">

            <p className="text-sm text-white/70">
              © {new Date().getFullYear()} M I Khan Institute of Nursing and
              Health Sciences. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-5 text-sm">
              <Link
                href="/privacy"
                className="text-white/70 hover:text-gold transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-white/70 hover:text-gold transition-colors"
              >
                Terms of Service
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}