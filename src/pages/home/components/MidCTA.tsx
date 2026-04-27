import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { contactInfo } from '@/utils/contact';

export default function MidCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-24 overflow-hidden" aria-label="Get a free window cleaning quote">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=beautiful%20upscale%20residential%20home%20exterior%20sparkling%20crystal%20clear%20windows%20gleaming%20sunlight%20reflection%20immaculate%20two%20story%20house%20lush%20green%20Pacific%20Northwest%20garden%20manicured%20lawn%20warm%20golden%20afternoon%20light%20premium%20curb%20appeal%20pristine%20glass%20panels%20architectural%20beauty&width=1920&height=800&seq=midcta-bg-resi-v1&orientation=landscape"
          alt="Window cleaning service mid-page CTA"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/90 to-slate-900/85"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center" ref={ref}>
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Limited Availability — Book Today
        </div>

        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
          Ready for Windows That Sparkle at Your Home?
        </h2>
        <p className="text-white/70 text-lg lg:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Join thousands of homeowners across Washington, Oregon, and Idaho who trust World Wide Window
          for residential window cleaning they can count on. Get your free, no-obligation quote today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-calendar-check-line text-xl"></i>
            Get My Free Quote
          </Link>
          <a
            href={`tel:${contactInfo.phoneTel}`}
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-lg font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-fill text-xl"></i>
            {contactInfo.phoneDisplay}
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          {[
            { icon: 'ri-checkbox-circle-line', text: 'Free, no-obligation quote' },
            { icon: 'ri-shield-check-line', text: '100% satisfaction guarantee' },
            { icon: 'ri-home-heart-line', text: 'Family-owned since 1983' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <i className={`${item.icon} text-blue-400`}></i>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
