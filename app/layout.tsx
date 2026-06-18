import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://mikinhs.edu.pk"),

  title: {
    default: "M I Khan Institute of Nursing and Health Sciences",
    template: "%s | MIKINHS",
  },

  description:
    "M.I. Khan Institute of Nursing and Health Sciences (MIKINHS) - DUHS Affiliated, PNMC Recognized nursing college offering BS Nursing, Post RN BSN, CNA, LHV, CMW, and paramedical programs in Karachi.",

  keywords: [
    "MIKINHS",
    "nursing college Karachi",
    "DUHS affiliated nursing institute",
    "PNMC recognized nursing college",
    "BS Nursing",
    "CNA",
    "LHV",
    "CMW",
    "Paramedics courses",
  ],

  authors: [{ name: "MIKINHS" }],
  creator: "M.I. Khan Institute of Nursing and Health Sciences",
  applicationName: "MIKINHS",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mikinhs.edu.pk",
    siteName: "MIKINHS",
    title: "M.I. Khan Institute of Nursing and Health Sciences",
    description:
      "Premier nursing education institution affiliated with DUHS and recognized by PNMC.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MIKINHS Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "M.I. Khan Institute of Nursing and Health Sciences",
    description:
      "Premier nursing education institution affiliated with DUHS and recognized by PNMC.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "M.I. Khan Institute of Nursing and Health Sciences",
              alternateName: "MIKINHS",
              url: "https://mikinhs.edu.pk",
              logo: "https://mikinhs.edu.pk/logo.png",
              description:
                "Premier nursing education institution offering BS Nursing, CNA, LHV, CMW and paramedical programs.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressRegion: "Sindh",
                addressCountry: "Pakistan",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92-21-12345678",
                contactType: "admissions",
              },
              sameAs: [
                "https://facebook.com/mikinhs",
                "https://instagram.com/mikinhs",
                "https://linkedin.com/company/mikinhs",
              ],
            }),
          }}
        />
      </head>

      <body className="min-h-screen w-full overflow-x-hidden bg-background font-sans antialiased">
        {/* GLOBAL RESPONSIVE SAFETY WRAPPER */}
        <div className="flex min-h-screen w-full flex-col">
          {children}
        </div>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}