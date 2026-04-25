import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-[100px]">
      {/* Background — premium residential home clean windows */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=stunning%20luxury%20residential%20home%20exterior%20beautifully%20cleaned%20sparkling%20windows%20bright%20afternoon%20sunlight%20warm%20golden%20light%20reflecting%20on%20pristine%20glass%20large%20upscale%20house%20white%20trim%20stone%20facade%20lush%20green%20landscaping%20manicured%20lawn%20clear%20blue%20sky%20no%20people%20no%20workers%20purely%20architectural%20residential%20beauty&width=1920&height=1080&seq=hero-resi-home-v3&orientation=landscape"
          alt="Premium residential window cleaning service across Washington, Oregon, and Idaho"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0"></span>
            Family-Owned &amp; Trusted Since 1983 — Serving WA, OR &amp; ID
          </div>

          {/* Headline */}
          <h1 className="font-extrabold leading-[1.05] mb-7">
            <span className="block text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-lg mb-1">Spotless Windows.</span>
            <span className="block text-5xl lg:text-6xl xl:text-7xl text-gradient drop-shadow-lg">Trusted Since 1983.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-lg lg:text-xl font-semibold max-w-2xl mb-10 leading-relaxed" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.9)' }}>
            Residential window cleaning across Washington, Oregon, and Idaho — plus storefronts and low-rise businesses.&nbsp;
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-base lg:text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/50 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-calendar-check-line text-xl"></i>
              Request a Free Quote
            </Link>
            <a
              href="tel:+18002231286"
              className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white text-base lg:text-lg font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill text-xl"></i>
              Call (800) 223-1286
            </a>
          </div>

          {/* Trust micro-badges */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: 'ri-home-heart-line', label: 'Family-Owned Since 1983' },
              { icon: 'ri-building-2-line', label: 'Homes & Businesses' },
              { icon: 'ri-map-2-line', label: 'WA · OR · ID' },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-3 py-2 rounded-full">
                <i className={`${b.icon} text-blue-300 text-sm`}></i>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stat card - removed */}

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 text-xs font-medium">
        <span className="tracking-widest uppercase text-[10px]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
}
