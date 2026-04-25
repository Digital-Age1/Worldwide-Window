import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import AboutHero from './components/AboutHero';
import CompanyStory from './components/CompanyStory';
import AboutWhyUs from './components/AboutWhyUs';
import TrustBar from '../home/components/TrustBar';
import InlineCTA from '../home/components/InlineCTA';
import BeforeAfterGallery from '../home/components/BeforeAfterGallery';
import Testimonials from '../home/components/Testimonials';
import ProcessTimeline from '../home/components/ProcessTimeline';
import ServiceAreas from '../home/components/ServiceAreas';
import MidCTA from '../home/components/MidCTA';
import AISearchBlocks from '../home/components/AISearchBlocks';
import FAQ from '../home/components/FAQ';
import Gallery from '../home/components/Gallery';
import LeadForm from '../home/components/LeadForm';
import content from '@/content';

export default function AboutPage() {
  const aboutContent = content.pages.about;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 1 — Hero */}
        <AboutHero />
        {/* 2 — TrustBar */}
        <TrustBar />
        {/* 3 — Services / Company Story */}
        <CompanyStory />
        {/* 4 — InlineCTA (light) */}
        <InlineCTA
          heading="Request a Free Quote for Residential Window Cleaning"
          subtext="Serving homeowners across Washington, Oregon &amp; Idaho — fast response, no obligation."
          primaryLabel="Get Free Quote"
          variant="light"
        />
        {/* 5 — Why Choose Us */}
        <AboutWhyUs />
        {/* 6 — About Section / Visual Break */}
        <section className="relative h-72 overflow-hidden">
          <img
            src="https://readdy.ai/api/search-image?query=wide%20panoramic%20view%20window%20cleaning%20service%20residential%20neighborhood%20Pacific%20Northwest%20beautiful%20homes%20sunny%20day%20lush%20green%20trees%20suburban%20community%20clean%20windows%20gleaming%20bright%20light%20morning%20residential%20houses%20Pacific%20Northwest%20Washington%20Oregon%20Idaho%20wide%20landscape%20community&width=1920&height=500&seq=about-midband-v1&orientation=landscape"
            alt="World Wide Window Co serving Pacific Northwest communities"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/55 flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <p className="text-2xl lg:text-3xl font-extrabold mb-3">
                &ldquo;{aboutContent.quoteText}&rdquo;
              </p>
              <p className="text-white/80 text-base font-light">— {aboutContent.quoteAuthor}</p>
            </div>
          </div>
        </section>
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
        {/* 11 — Process Timeline */}
        <ProcessTimeline />
        {/* 12 — Service Areas */}
        <ServiceAreas />
        {/* 13 — Mid CTA */}
        <MidCTA />
        {/* 14 — AI Search Blocks */}
        <AISearchBlocks />
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
