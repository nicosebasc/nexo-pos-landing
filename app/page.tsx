import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import ProblemSolution from '@/components/ProblemSolution'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import CommerceTypes from '@/components/CommerceTypes'
import StatsBand from '@/components/StatsBand'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import ClientAnimations from '@/components/ClientAnimations'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <Benefits />
        <HowItWorks />
        <CommerceTypes />
        <StatsBand />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <ClientAnimations />
    </>
  )
}
