import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';

import MidCTA from './components/MidCTA';
import FAQ from './components/FAQ';
import Gallery from './components/Gallery';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import LeadForm from './components/LeadForm';
import AISearchBlocks from './components/AISearchBlocks';
import InlineCTA from './components/InlineCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <InlineCTA
          heading="Request a Free Quote for Residential Window Cleaning"
          subtext="Serving homeowners across Washington, Oregon &amp; Idaho — fast response, no obligation."
          primaryLabel="Get Free Quote"
          variant="light"
        />
        <WhyChooseUs />
        <AboutSection />
        <InlineCTA
          heading="40+ Years of Excellence — Serving WA, OR &amp; ID"
          subtext="Call or get a quote online in minutes. Family-owned, satisfaction guaranteed."
          primaryLabel="Book Now"
          variant="emerald"
        />
        <BeforeAfterGallery />
        <Testimonials />
        <InlineCTA
          heading="Trusted by Pacific Northwest Homeowners Since 1983"
          subtext="Spotless results, satisfaction guaranteed. Serving Washington, Oregon &amp; Idaho."
          primaryLabel="Get My Free Quote"
          variant="light"
        />
        <ServiceAreas />
        <MidCTA />
        <AISearchBlocks />
        <FAQ />
        <Gallery />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
