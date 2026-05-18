import { HeroSection } from '@/components/sections/hero-section'
import { FeaturedApps } from '@/components/sections/featured-apps'
import { CaseStudy } from '@/components/sections/case-study'
import { TechStack } from '@/components/sections/tech-stack'
import { Experience } from '@/components/sections/experience'
import { Stats } from '@/components/sections/stats'
import { Contact } from '@/components/sections/contact'
import { Navigation } from '@/components/navigation'
import { LoadingScreen } from '@/components/loading-screen'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navigation />
      <main className="relative overflow-hidden">
        <HeroSection />
        <Stats />
        <FeaturedApps />
        <CaseStudy />
        <TechStack />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
