import HeroSection from "@/components/about/hero-section"
import ValuesSection from "@/components/about/values-section"
import TeamSection from "@/components/about/team-section"

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ValuesSection />
      <TeamSection />
    </div>
  )
}