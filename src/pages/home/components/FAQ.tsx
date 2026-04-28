import { useState, useRef, useEffect } from 'react';
import content from '@/content';

const faqs = content.sections.faqs?.faqs || [
  {
    q: 'What areas do you serve for window cleaning?',
    a: 'World Wide Window Co serves homeowners and properties throughout Washington State, Oregon State, and Idaho. Whether you\'re in a major metro area like Seattle, Portland, or Boise, or in a smaller community, we provide the same premium residential window cleaning service across the entire Pacific Northwest tri-state region.',
  },
  {
    q: 'How much does professional residential window cleaning cost?',
    a: 'Pricing depends on the number of windows, stories, home size, and level of soiling. World Wide Window offers free, no-obligation quotes — call us or fill out our online form to get an exact quote for your home.',
  },
  {
    q: 'How long does residential window cleaning take?',
    a: 'A standard residential window cleaning takes 1–3 hours depending on the number of windows, stories, and level of soiling. Most single-family homes are completed in under 2 hours. We always provide a time estimate before starting so you can plan your day.',
  },
  {
    q: 'Is professional window cleaning really worth it?',
    a: 'Absolutely. Windows accumulate dust, hard water deposits, pollen, and seasonal grime that DIY methods miss. Professional cleaning removes this buildup, increases natural light by up to 40%, boosts curb appeal, and protects your glass long-term. Most homeowners book recurring service once they see the results.',
  },
  {
    q: 'What does your residential window cleaning include?',
    a: 'Our standard residential service includes interior and exterior cleaning of all windows, with screen cleaning and track cleaning available, and spotless polishing using a pure water system. We also offer add-ons such as hard water stain removal and gutter cleaning.',
  },
  {
    q: 'How often should I have my windows professionally cleaned?',
    a: 'Most residential clients benefit from professional cleaning every 2–4 months. Homes near trees, high-traffic roads, or dusty areas may benefit from more frequent service. We offer recurring service plans for regular customers.',
  },
  {
    q: 'Do you clean interior and exterior windows?',
    a: 'Yes. Our standard residential service includes both interior and exterior window cleaning, along with screen cleaning available and sill wipe-downs available. We can also do exterior-only service if preferred. Just let us know when you request your quote.',
  },
  {
    q: 'Are your cleaning products safe for children, pets, and plants?',
    a: 'Yes. Our primary cleaning method uses a pure water purification system that cleans with purified water and professional-grade squeegees, minimizing chemical use. Any supplemental cleaning agents we use are carefully selected to be safe around your home, family, and landscaping.',
  },
  {
    q: 'What is the window cleaning process from start to finish?',
    a: 'We start with a free quote and assessment. On service day, we arrive on time, confirm the scope of work, pre-treat any heavy staining, then clean with professional squeegees and a purified water system for a spotless finish. We clean sills and tracks, conduct a full walk-through with you, and stand behind the result with our satisfaction guarantee.',
  },
  {
    q: 'Can you remove hard water stains from windows?',
    a: 'Yes. Hard water stain removal is one of our specialties. Using professional-grade mineral and calcium removers, we can restore clarity to heavily stained glass. Most stains are fully removed in a single treatment. For severely etched glass, we offer a polishing treatment option.',
  },
  {
    q: 'Do you offer commercial window cleaning?',
    a: 'Yes. While our primary focus is residential, we do offer commercial window cleaning for storefronts and smaller office buildings across Washington, Oregon, and Idaho. Contact us for a commercial quote.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const half = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, half);
  const col2 = faqs.slice(half);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14" ref={ref}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-question-answer-line"></i> FAQ
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Everything you need to know about professional residential window cleaning across WA, OR &amp; ID.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2">
          <FAQColumn items={col1} startIndex={0} openIndex={openIndex} setOpenIndex={setOpenIndex} />
          <FAQColumn items={col2} startIndex={half} openIndex={openIndex} setOpenIndex={setOpenIndex} />
        </div>
      </div>
    </section>
  );
}

function FAQColumn({
  items, startIndex, openIndex, setOpenIndex
}: {
  items: typeof faqs;
  startIndex: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  return (
    <div className="space-y-2">
      {items.map((faq, i) => {
        const idx = startIndex + i;
        const isOpen = openIndex === idx;
        return (
          <article key={faq.q} className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-blue-200 bg-blue-50/30' : 'border-slate-100 bg-white hover:border-slate-200'}`}>
            <button
              className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
            >
              <h3 className="text-slate-800 font-semibold text-sm leading-snug">{faq.q}</h3>
              <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-400'}`}>
                <i className={`${isOpen ? 'ri-subtract-line' : 'ri-add-line'} text-sm`}></i>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
              <p className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-blue-100 pt-3">
                {faq.a}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
