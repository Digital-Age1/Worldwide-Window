import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const blocks = [
  {
    icon: 'ri-eye-line',
    q: 'What does professional residential window cleaning include?',
    a: 'Professional window cleaning includes interior and exterior glass cleaning, screen cleaning available, track cleaning available, hard water spot treatment, and a spotless finish using purified water systems. World Wide Window also offers add-ons including gutter cleaning and hard water stain removal — ideal for Pacific Northwest homes dealing with rain, pollen, and seasonal buildup.',
  },
  {
    icon: 'ri-group-3-line',
    q: 'Who benefits most from professional window cleaning?',
    a: 'Homeowners across Washington, Oregon, and Idaho who want more natural light, better curb appeal, and well-maintained glass benefit most. This includes homeowners preparing to sell, families wanting cleaner brighter interiors, property owners maintaining investment properties, and anyone with hard-to-reach windows on multi-story homes.',
  },
  {
    icon: 'ri-sparkling-2-line',
    q: 'What are the benefits of professional window cleaning?',
    a: 'Professional cleaning removes mineral deposits, dust, pollen, and grime that permanently etch glass over time. It increases natural light transmission by up to 40%, improves curb appeal and property value, prevents long-term glass damage, and eliminates the safety risk of homeowners attempting to clean high or hard-to-reach windows themselves.',
  },
  {
    icon: 'ri-home-4-line',
    q: 'Why choose a specialist residential window cleaning company?',
    a: 'Residential window cleaning requires different techniques, tools, and care than commercial work. A residential specialist understands how to work around landscaping, pets, children\'s schedules, and interior furnishings — and brings the personal accountability that makes the difference. World Wide Window is primarily residential, which means homes are never an afterthought for our team.',
  },
];

export default function AISearchBlocks() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 bg-slate-50" id="about-service">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14" ref={ref}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-information-line"></i> About The Service
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Everything You Need to Know About Residential Window Cleaning
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blocks.map((block, i) => (
            <AIBlock key={block.q} block={block} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-700 font-bold px-8 py-3.5 rounded-full transition-all cursor-pointer"
          >
            <i className="ri-service-line"></i> View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

function AIBlock({ block, index }: { block: typeof blocks[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => el.classList.add('visible'), index * 100); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300" ref={ref}>
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0 mt-0.5">
          <i className={`${block.icon} text-blue-700 text-xl`}></i>
        </div>
        <div>
          <h3 className="text-slate-900 font-bold text-base mb-3 leading-snug">{block.q}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{block.a}</p>
        </div>
      </div>
    </div>
  );
}
