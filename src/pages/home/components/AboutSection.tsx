import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import content from '@/content';

const aboutContent = content.pages.home.aboutPreview;
const stats = aboutContent?.stats || [
  { value: '1983', label: 'Est. by Our Family' },
  { value: '3', label: 'States Served' },
  { value: '40+', label: 'Years Experience' },
];

export default function AboutSection() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    [
      { el: leftRef.current, cls: 'reveal-left' },
      { el: rightRef.current, cls: 'reveal-right' },
    ].forEach(({ el, cls }) => {
      if (!el) return;
      el.classList.add(cls);
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    });
  }, []);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <div className="relative" ref={leftRef}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src={aboutContent?.image || "https://static.readdy.ai/image/81164d3ba0f00c2a7e247a9f180c9b75/38f4f87b39d6feafe2bc8f35e7981672.jpeg"}
                alt={aboutContent?.imageAlt || 'World Wide Window Co — Family-owned residential window cleaning since 1983'}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 border border-slate-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0">
                  <i className="ri-trophy-line text-blue-700 text-2xl"></i>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-700">40+</div>
                  <div className="text-slate-500 text-xs font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>

            {/* Second floating card - removed */}
          </div>

          {/* Content side */}
          <div ref={rightRef}>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <i className="ri-history-line"></i> {aboutContent?.badge || 'Our Story'}
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {aboutContent?.title || 'Over 40 Years Serving Homeowners Across WA, OR & ID'}
            </h2>
            <div className="space-y-4 text-slate-600 text-base lg:text-lg leading-relaxed mb-8">
              <p>
                <strong>World Wide Window Co</strong> was established in 1983 as a family-owned business with a simple mission: deliver window cleaning results that customers could genuinely rely on.
              </p>
              <p>
                What started as a small local operation has grown into one of the Pacific Northwest&apos;s most trusted window and exterior cleaning companies — serving homes and properties throughout Washington, Oregon, and Idaho.
              </p>
              <p>
                We focus on homes first — residential customers are the heart of our business. We also serve storefronts and low-rise commercial properties that need the same professional care. Every job is backed by our 100% satisfaction guarantee and the personal accountability of a family business that has been in your region for over four decades.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="bg-white rounded-xl p-4 text-center border border-slate-100">
                  <div className="text-2xl font-black text-blue-700">{s.value}</div>
                  <div className="text-slate-500 text-xs font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                <i className="ri-information-line"></i> Learn More About Us
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-700 font-bold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer"
              >
                <i className="ri-phone-line"></i> Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
