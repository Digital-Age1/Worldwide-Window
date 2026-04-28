import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import content from '@/content';
import { trackQuoteButtonClick } from '@/utils/tracking';

interface BeforeAfterPair {
  id: number;
  label: string;
  before: string;
  beforeAlt?: string;
  after: string;
  afterAlt?: string;
  type: string;
}

const fallbackBeforeAfterPairs: BeforeAfterPair[] = [
  {
    id: 1,
    label: 'Residential Home — Bellevue, WA',
    before: 'https://readdy.ai/api/search-image?query=dirty%20grimy%20residential%20house%20window%20exterior%20smudged%20streaks%20dirt%20grime%20hard%20water%20stains%20glass%20opaque%20Pacific%20Northwest%20home%20before%20cleaning%20weathered&width=700&height=500&seq=ba-before-pnw-001&orientation=landscape',
    after: 'https://readdy.ai/api/search-image?query=sparkling%20crystal%20clear%20clean%20residential%20house%20window%20exterior%20gleaming%20bright%20reflection%20sunshine%20Pacific%20Northwest%20home%20after%20professional%20cleaning%20pristine&width=700&height=500&seq=ba-after-pnw-001&orientation=landscape',
    type: 'Residential',
  },
  {
    id: 2,
    label: 'Two-Story Home — Portland, OR',
    before: 'https://readdy.ai/api/search-image?query=dirty%20smudged%20two%20story%20residential%20home%20window%20grimy%20exterior%20grime%20dust%20polluted%20glass%20suburban%20Oregon%20before%20window%20cleaning%20dull%20hazy&width=700&height=500&seq=ba-before-pnw-002&orientation=landscape',
    after: 'https://readdy.ai/api/search-image?query=gleaming%20spotless%20two%20story%20residential%20home%20window%20clean%20polished%20reflection%20bright%20crystal%20clear%20suburban%20Oregon%20after%20professional%20window%20cleaning%20beautiful&width=700&height=500&seq=ba-after-pnw-002&orientation=landscape',
    type: 'Two-Story Home',
  },
  {
    id: 3,
    label: 'Hard Water Removal — Boise, ID',
    before: 'https://readdy.ai/api/search-image?query=severe%20hard%20water%20calcium%20mineral%20stain%20deposit%20etching%20residential%20window%20glass%20white%20hazy%20opaque%20Idaho%20home%20before%20treatment%20weathered%20glass%20damage&width=700&height=500&seq=ba-before-pnw-003&orientation=landscape',
    after: 'https://readdy.ai/api/search-image?query=crystal%20clear%20window%20glass%20after%20hard%20water%20stain%20removal%20treatment%20sparkling%20bright%20transparent%20shine%20Idaho%20residential%20home%20clean%20clear%20restored%20glass&width=700&height=500&seq=ba-after-pnw-003&orientation=landscape',
    type: 'Hard Water',
  },
];
const beforeAfterPairs = content.sections.gallery.beforeAfterPairs || fallbackBeforeAfterPairs;

export default function BeforeAfterGallery() {
  const [activeId, setActiveId] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const active = beforeAfterPairs.find((p) => p.id === activeId) ?? beforeAfterPairs[0];

  return (
    <section className="py-24 bg-white" id="before-after">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" ref={ref}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-contrast-2-line"></i> Before &amp; After
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            See the Dramatic Difference We Make
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Real results from real homes across Washington, Oregon, and Idaho. The transformation speaks for itself.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          {beforeAfterPairs.map((pair) => (
            <button
              key={pair.id}
              onClick={() => setActiveId(pair.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeId === pair.id
                  ? 'bg-blue-700 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {pair.type}
            </button>
          ))}
        </div>

        {/* Side by side comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Before */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
            <img
              src={active.before}
              alt={active.beforeAlt || `Before professional window cleaning — ${active.label}`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            {/* Label */}
            <div className="absolute top-4 left-4">
              <span className="bg-red-500/90 backdrop-blur-sm text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                Before
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-bold text-sm">{active.label}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <i className="ri-close-circle-line text-red-400 text-sm"></i>
                <span className="text-white/70 text-xs">Dirty · Streaked · Hazed</span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
            <img
              src={active.after}
              alt={active.afterAlt || `After professional window cleaning — ${active.label}`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            {/* Label */}
            <div className="absolute top-4 left-4">
              <span className="bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                After
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white font-bold text-sm">{active.label}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <i className="ri-checkbox-circle-line text-blue-400 text-sm"></i>
                <span className="text-white/70 text-xs">Crystal-clear · Spotless · Professional</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">Want results like this for your home?</p>
          <Link
            to="/contact"
            onClick={() => trackQuoteButtonClick({ location: 'before_after_gallery', destination: '/contact' })}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-calendar-check-line"></i> Book My Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
