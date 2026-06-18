import { AnnouncementBar } from "@/components/announcement-bar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { HeroSection } from "@/components/sections/hero-section"
import { TrustBar } from "@/components/sections/trust-bar"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { WelcomeSection } from "@/components/sections/welcome-section"
import { ProgramsSection } from "@/components/sections/programs-section"
import { FacilitiesSection } from "@/components/sections/facilities-section"
import { AdmissionsTimeline } from "@/components/sections/admissions-timeline"
import { PartnersSection } from "@/components/sections/partners-section"
import { LeadershipSection } from "@/components/sections/leadership-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { FAQSection } from "@/components/sections/faq-section"
import { NewsSection } from "@/components/sections/news-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <WhyChooseUs />
        <WelcomeSection />
        <ProgramsSection />
        <FacilitiesSection />
        <AdmissionsTimeline />
        <PartnersSection />
        <LeadershipSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
