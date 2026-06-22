"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  ChevronDown,
  Search,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  

  {
    href: "/programs", label: "Programs",
    submenu: [
      { href: "/programs/bsn", label: "BS Nursing (BSN)" },
      { href: "/programs/cna", label: "CNA" },
      { href: "/programs/lhv", label: "LHV" },
      { href: "/programs/cmw", label: "CMW" },
      { href: "/programs/paramedics", label: "Paramedics" },
    ],
  },

  {
   href: "/institute",  label: "Institute",
    submenu: [
      { href: "/institute/facilities", label: "Facilities" },
      { href: "/institute/faculty", label: "Faculty" },
      { href: "/institute/affiliations", label: "Affiliations" },
      { href: "/institute/gallery", label: "Gallery" },
    ],
  },

  {
    href: "/portals", label: "Portals",
    submenu: [
      { href: "/portals/student", label: "Student Portal" },
      { href: "/portals/teacher", label: "Teacher Portal" },
      { href: "/portals/admin", label: "Admin Portal" },
    ],
  },

  { href: "/admissions", label: "Admissions" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
]

const searchablePages = [
  { title: "About", href: "/about" },
  { title: "Admissions", href: "/admissions" },
  { title: "Contact", href: "/contact" },
  { title: "Facilities", href: "/facilities" },
  { title: "Faculty", href: "/faculty" },
  { title: "Gallery", href: "/gallery" },

  { title: "BS Nursing", href: "/programs/bsn" },
  { title: "CNA", href: "/programs/cna" },
  { title: "LHV", href: "/programs/lhv" },
  { title: "CMW", href: "/programs/cmw" },
  { title: "Paramedics", href: "/programs/paramedics" },

  { title: "Student Portal", href: "/portals/student" },
  { title: "Teacher Portal", href: "/portals/teacher" },
  { title: "Admin Portal", href: "/portals/admin" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState("")

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const results = searchablePages.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  )

  const toggleMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label))
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b"
          : "bg-background/70 backdrop-blur-md"
      )}
    >
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="MIKINHS"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
<div className="hidden lg:flex items-center gap-1">
  {navLinks.map((item, i) => (
    <div
      key={i}
      className="relative"
      onMouseEnter={() =>
        item.submenu && setActiveMenu(item.label)
      }
      onMouseLeave={() =>
        item.submenu && setActiveMenu(null)
      }
    >
      <Link
        href={item.href || "#"}
        className="flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/10 transition-all duration-200"
      >
        {item.label}

        {item.submenu && (
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              activeMenu === item.label &&
                "rotate-180"
            )}
          />
        )}
      </Link>

      <AnimatePresence>
        {item.submenu &&
          activeMenu === item.label && (
            <motion.div
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 8,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute top-full left-0 w-64 z-50"
            >
              <div className="mt-0 bg-white border shadow-xl rounded-xl overflow-hidden">
                {item.submenu.map(
                  (sub, idx) => (
                    <Link
                      key={idx}
                      href={sub.href}
                      className="block px-4 py-3 text-sm hover:bg-gray-50 transition"
                    >
                      {sub.label}
                    </Link>
                  )
                )}
              </div>
            </motion.div>
          )}
      </AnimatePresence>
    </div>
  ))}
</div>
          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">

            {/* SEARCH */}
            <div className="hidden md:block relative">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(!showSearch)}
              >
                <Search className="h-5 w-5" />
              </Button>

              <AnimatePresence>
                {showSearch && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-12 w-72 bg-white border shadow-xl rounded-xl p-3 z-50"
                  >
                    <input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full border px-3 py-2 rounded-lg outline-none"
                    />

                    <div className="pt-1 max-h-60 overflow-auto">
                      {results.map((r) => (
                        <Link
                          key={r.href}
                          href={r.href}
                          onClick={() => setShowSearch(false)}
                          className="block px-2 py-2 text-sm hover:bg-gray-100 rounded"
                        >
                          {r.title}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* APPLY */}
            <Button asChild className="hidden sm:flex">
              <Link
                href="https://mikhan.edu.pk/apply.php"
                target="_blank"
              >
                Apply Now
              </Link>
            </Button>

            {/* MOBILE BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t"
            >
              <div className="py-4 space-y-1">

                {navLinks.map((item, i) => (
                  <div key={i}>
                    <button
                      onClick={() =>
                        item.submenu
                          ? toggleMenu(item.label)
                          : setMobileOpen(false)
                      }
                      className="w-full flex justify-between px-4 py-3 text-sm font-medium hover:bg-gray-50 rounded-lg"
                    >
                      <Link href={item.href || "#"}>
                        {item.label}
                      </Link>

                      {item.submenu && (
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 transition",
                            activeMenu === item.label &&
                              "rotate-180"
                          )}
                        />
                      )}
                    </button>

                    {item.submenu &&
                      activeMenu === item.label && (
                        <div className="pl-6">
                          {item.submenu.map((sub, idx) => (
                            <Link
                              key={idx}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm text-muted-foreground hover:text-primary"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                  </div>
                ))}

                <div className="px-4 pt-4">
                  <Button asChild className="w-full">
                    <Link
                      href="https://mikhan.edu.pk/apply.php"
                      target="_blank"
                    >
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}