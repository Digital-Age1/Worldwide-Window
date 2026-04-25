import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Jennifer M.',
    location: 'Bellevue, WA',
    rating: 5,
    date: 'January 2026',
    text: 'Absolutely incredible service. My home looks completely transformed — every single window is spotless and crystal clear. They were punctual, professional, and left no mess whatsoever. Booking recurring service now.',
    service: 'Residential Cleaning',
  },
  {
    name: 'Michael T.',
    location: 'Coeur d\'Alene, ID',
    rating: 5,
    date: 'November 2025',
    text: 'Hard water stains on my windows for years that I thought were permanent. The World Wide Window team removed every single one. I genuinely couldn\'t believe how good the results were. Worth every penny.',
    service: 'Hard Water Removal',
  },
  {
    name: 'Karen D.',
    location: 'Liberty Lake, WA',
    rating: 5,
    date: 'February 2026',
    text: 'I was blown away by how thorough they were. Every window inside and out, screens cleaned, tracks wiped down — nothing was missed. My house has never looked this good. Will absolutely be a repeat customer.',
    service: 'Residential Cleaning',
  },
  {
    name: 'Tom B.',
    location: 'Post Falls, ID',
    rating: 5,
    date: 'November 2025',
    text: 'Called World Wide Window for a gutter clean before the winter rains hit. They showed up on time, cleared everything out, flushed the downspouts, and even pointed out a small issue I wasn\'t aware of. Honest, professional, and great value.',
    service: 'Gutter Cleaning',
  },
  {
    name: 'Robert W.',
    location: 'Spokane, WA',
    rating: 5,
    date: 'December 2025',
    text: 'Been using World Wide Window for three years now. They are consistently excellent — always on time, thorough, and the results are perfect every single time. This is a company you can genuinely count on.',
    service: 'Residential Cleaning',
  },
  {
    name: 'Patricia S.',
    location: 'Tacoma, WA',
    rating: 5,
    date: 'January 2026',
    text: 'Had them clean our home before a family gathering. The house sparkled — neighbors actually commented on how clean the windows looked from the street. A truly impressive result. Family-owned businesses like this are rare.',
    service: 'Residential Cleaning',
  },
];

export default function Testimonials() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <section className="py-24 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" ref={titleRef}>
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-star-fill"></i> Customer Reviews
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            What Pacific Northwest Homeowners Are Saying
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Verified reviews from homeowners across Washington, Oregon &amp; Idaho.
          </p>
          {/* Star row */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {[1,2,3,4,5].map((s) => (
              <i key={s} className="ri-star-fill text-amber-400 text-2xl"></i>
            ))}
            <span className="text-slate-400 text-sm ml-2">Verified Google Reviews</span>
          </div>
        </div>

        {/* Masonry grid - desktop 3 cols */}
        <div className="hidden lg:grid grid-cols-3 gap-5 items-start">
          <TestimonialColumn items={col1} delay={0} />
          <TestimonialColumn items={col2} delay={100} />
          <TestimonialColumn items={col3} delay={200} />
        </div>

        {/* Mobile - single col */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-700 font-bold px-8 py-3.5 rounded-full transition-all duration-200 cursor-pointer"
          >
            <i className="ri-information-line"></i> About Our Company
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialColumn({ items, delay }: { items: typeof testimonials; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div className="space-y-5" ref={ref}>
      {items.map((t) => <TestimonialCard key={t.name} t={t} />)}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 cursor-default">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
        ))}
      </div>
      <p className="text-slate-700 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <div className="font-bold text-slate-900 text-sm">{t.name}</div>
          <div className="text-slate-400 text-xs">{t.location}</div>
        </div>
        <div className="text-right">
          <div className="text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">{t.service}</div>
          <div className="text-slate-400 text-xs mt-1">{t.date}</div>
        </div>
      </div>
    </div>
  );
}
