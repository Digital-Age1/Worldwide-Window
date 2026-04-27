import { contactInfo } from '@/utils/contact';

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[65vh] flex items-center overflow-hidden pt-[108px]">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20window%20cleaning%20technician%20team%20uniformed%20workers%20residential%20home%20exterior%20beautiful%20sunny%20Pacific%20Northwest%20neighborhood%20friendly%20trustworthy%20experienced%20family%20business%20established%20trusted%20local%20community%20service%20proud%20professional%20team%20front%20of%20beautiful%20house&width=1920&height=900&seq=about-hero-team-v1&orientation=landscape"
          alt="World Wide Window Co professional team — family-owned window cleaning since 1983"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0"></span>
            Family-Owned Window Cleaning Since 1983
          </div>

          <h1 className="font-extrabold leading-[1.05] mb-6">
            <span className="block text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-2xl mb-1" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>Local. Reliable.</span>
            <span className="block text-5xl lg:text-6xl xl:text-7xl text-blue-300 drop-shadow-2xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>Detail-Focused.</span>
          </h1>

          <p className="text-white text-xl font-light max-w-2xl mb-10 leading-relaxed" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
            World Wide Window Co has been serving Pacific Northwest homeowners and businesses with professional, dependable window cleaning for over 40 years. Family-owned. Community-rooted. Results-driven.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${contactInfo.phoneTel}`}
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill text-xl"></i>
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
