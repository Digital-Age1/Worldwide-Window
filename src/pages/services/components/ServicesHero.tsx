import { Link } from 'react-router-dom';
import content from '@/content';
import { contactInfo } from '@/utils/contact';
import { trackPhoneClick, trackServiceCtaClick } from '@/utils/tracking';

export default function ServicesHero() {
  const pageContent = content.pages.services;
  return (
    <section className="relative w-full min-h-[72vh] flex items-center overflow-hidden pt-[108px]">
      <div className="absolute inset-0">
        <img
          src="/images/site/services-hero-residential-v1.jpg"
          alt="Professional residential window cleaning service across Washington Oregon and Idaho"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0"></span>
            {pageContent.heroBadge || 'Residential & Commercial Window Cleaning'}
          </div>

          <h1 className="font-extrabold leading-[1.05] mb-6">
            <span className="block text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-2xl mb-1" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>{pageContent.heroTitle1 || 'Professional Window'}</span>
            <span className="block text-5xl lg:text-6xl xl:text-7xl text-blue-300 drop-shadow-2xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>{pageContent.heroTitle2 || 'Cleaning Services'}</span>
          </h1>

          <p className="text-white text-xl font-light max-w-2xl mb-10 leading-relaxed" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
            {pageContent.heroSubtitle || pageContent.pageSubtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href={`tel:${contactInfo.phoneTel}`}
              onClick={() => {
                trackServiceCtaClick({ location: 'services_hero', action: 'phone_quote' });
                trackPhoneClick({ location: 'services_hero' });
              }}
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white text-base lg:text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/40 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill text-xl"></i>
              Get a Free Quote
            </a>
            <a
              href="#services-grid"
              className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white text-base lg:text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-down-line text-xl"></i>
              See All Services
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { icon: 'ri-home-heart-line', label: 'Residential Specialists' },
              { icon: 'ri-building-4-line', label: 'Storefronts & Low-Rise' },
              { icon: 'ri-shield-check-line', label: 'Fully Insured' },
              { icon: 'ri-star-fill', label: 'Top-Rated Reviews' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-3 py-2 rounded-full">
                <i className={`${b.icon} text-blue-300 text-sm`}></i>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 text-xs font-medium">
        <span className="tracking-widest uppercase text-[10px]">Explore Services</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
