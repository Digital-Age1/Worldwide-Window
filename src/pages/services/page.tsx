import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesGrid from './components/ServicesGrid';
import ServiceDetails from './components/ServiceDetails';

import ServicesAI from './components/ServicesAI';
import ServicesTrust from './components/ServicesTrust';
import ServiceLocationBrowser from './components/ServiceLocationBrowser';
import TrustBar from '../home/components/TrustBar';
import InlineCTA from '../home/components/InlineCTA';
import BeforeAfterGallery from '../home/components/BeforeAfterGallery';
import Testimonials from '../home/components/Testimonials';
import ServiceAreas from '../home/components/ServiceAreas';
import MidCTA from '../home/components/MidCTA';
import FAQ from '../home/components/FAQ';
import Gallery from '../home/components/Gallery';
import LeadForm from '../home/components/LeadForm';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 1 — Hero */}
        <ServicesHero />
        {/* 2 — TrustBar */}
        <TrustBar />
        {/* 3 — Services Section */}
        <ServicesGrid />
        {/* 3b — Location Browser */}
        <ServiceLocationBrowser />
        {/* 4 — InlineCTA (light) */}
        <InlineCTA
          heading="Request a Free Quote for Residential Window Cleaning"
          subtext="Serving homeowners across Washington, Oregon &amp; Idaho — fast response, no obligation."
          primaryLabel="Get Free Quote"
          variant="light"
        />
        {/* 5 — Why Choose Us / Service Details */}
        <ServiceDetails />
        {/* 6 — About Section / Services Trust */}
        <ServicesTrust />
        {/* 7 — InlineCTA (emerald) */}
        <InlineCTA
          heading="40+ Years of Excellence — Serving WA, OR &amp; ID"
          subtext="Call or get a quote online in minutes. Family-owned, satisfaction guaranteed."
          primaryLabel="Book Now"
          variant="emerald"
        />
        {/* 8 — Before & After Gallery */}
        <BeforeAfterGallery />
        {/* 9 — Testimonials */}
        <Testimonials />
        {/* 10 — InlineCTA (light) */}
        <InlineCTA
          heading="Trusted by Pacific Northwest Homeowners Since 1983"
          subtext="Spotless results, satisfaction guaranteed. Serving Washington, Oregon &amp; Idaho."
          primaryLabel="Get My Free Quote"
          variant="light"
        />
        {/* 11 — Service Areas */}
        <ServiceAreas />
        {/* 13 — Mid CTA */}
        <MidCTA />
        {/* 14 — AI Search Blocks */}
        <ServicesAI />
        {/* 15 — FAQ */}
        <FAQ />
        {/* 16 — Gallery */}
        <Gallery />
        {/* 17 — Lead Form */}
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
