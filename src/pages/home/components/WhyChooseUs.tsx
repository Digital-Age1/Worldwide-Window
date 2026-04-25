import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const reasons = [
  {
    number: '01',
    title: 'Spotless Results — Guaranteed Every Time',
    body: 'We use a pure water purification system combined with professional-grade squeegees to deliver a perfectly clean finish on every home we service. If you\'re not satisfied after we leave, we come back. No questions asked.',
    bullets: ['Purified water system (0 TDS)', 'Professional-grade equipment', '100% satisfaction guarantee'],
    img: 'https://readdy.ai/api/search-image?query=window%20cleaning%20specialist%20achieving%20perfect%20streak%20free%20crystal%20clear%20result%20beautiful%20residential%20home%20bright%20sunlight%20reflection%20professional%20technician%20squeegee%20immaculate%20glass%20upscale%20house%20exterior&width=800&height=600&seq=why-01-resi-pnw&orientation=landscape',
    alt: 'Window cleaning specialist delivering spotless results on a residential home',
    imgLeft: false,
  },
  {
    number: '02',
    title: 'Family-Owned Business — Over 40 Years of Excellence',
    body: 'Founded in 1983, World Wide Window Co has been a family-owned and operated business for over four decades. We bring the care, consistency, and personal accountability of a family business to every job — because our reputation is everything.',
    bullets: ['Established 1983', 'Family-owned and operated', 'Consistent team, consistent results'],
    img: 'https://static.readdy.ai/image/81164d3ba0f00c2a7e247a9f180c9b75/964158586b3eb583444cd6872d12421e.jpeg',
    alt: 'Family-owned window cleaning team serving Pacific Northwest homes',
    imgLeft: true,
  },
  {
    number: '03',
    title: 'Residential Experts — We Know Homes',
    body: 'Homes are the heart of our business. We understand what it takes to work carefully around landscaping, pets, and homeowner schedules — and what it means to leave a property looking its absolute best. Residential service is our specialty, not an afterthought.',
    bullets: ['Homes are our primary focus', 'Interior & exterior expertise', 'Respectful of your property'],
    img: 'https://readdy.ai/api/search-image?query=professional%20window%20cleaner%20working%20on%20beautiful%20upscale%20residential%20home%20exterior%20careful%20respectful%20homeowner%20property%20ladder%20cleaning%20windows%20pristine%20suburban%20house%20Pacific%20Northwest%20garden%20landscaping&width=800&height=600&seq=why-03-resi-pnw&orientation=landscape',
    alt: 'Residential window cleaning expert working on a beautiful Pacific Northwest home',
    imgLeft: false,
  },
  {
    number: '04',
    title: '3-State Regional Coverage — WA, OR &amp; ID',
    body: 'We proudly serve homeowners throughout Washington, Oregon, and Idaho. Whether you\'re in a major metro area or a smaller community, our team covers the entire Pacific Northwest tri-state region with the same premium standard.',
    bullets: ['Full Washington State coverage', 'Oregon State coverage', 'Idaho State coverage'],
    img: 'https://readdy.ai/api/search-image?query=Pacific%20Northwest%20landscape%20Washington%20Oregon%20Idaho%20beautiful%20scenic%20panorama%20three%20states%20region%20residential%20homes%20neighborhood%20lush%20green%20trees%20mountains%20beautiful%20sky%20broad%20service%20area&width=800&height=600&seq=why-04-3state-pnw&orientation=landscape',
    alt: 'Window cleaning service covering Washington, Oregon, and Idaho',
    imgLeft: true,
  },
];

export default function WhyChooseUs() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden" id="why-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20" ref={titleRef}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-shield-star-line"></i> Why Choose World Wide Window
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            The Standard Pacific Northwest Homeowners Measure Against
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Over 40 years of residential window cleaning excellence across WA, OR &amp; ID. Here&apos;s what makes us different.
          </p>
        </div>

        {/* Alternating blocks */}
        <div className="space-y-24">
          {reasons.map((reason) => (
            <WhyBlock key={reason.number} reason={reason} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyBlock({ reason }: { reason: (typeof reasons)[0] }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [
      { el: contentRef.current, cls: reason.imgLeft ? 'reveal-right' : 'reveal-left' },
      { el: imgRef.current, cls: reason.imgLeft ? 'reveal-left' : 'reveal-right' },
    ];
    els.forEach(({ el, cls }) => {
      if (!el) return;
      el.classList.add(cls);
      const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } }, { threshold: 0.15 });
      obs.observe(el);
    });
  }, [reason.imgLeft]);

  return (
    <div className={`flex flex-col ${reason.imgLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
      <div className="flex-1 max-w-xl" ref={contentRef}>
        <span className="text-[120px] font-black text-slate-100 leading-none select-none block -mb-8">
          {reason.number}
        </span>
        <h3
          className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: reason.title }}
        />
        <p className="text-slate-500 text-lg leading-relaxed mb-6">{reason.body}</p>
        <ul className="space-y-3 mb-8">
          {reason.bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-slate-700 font-medium">
              <div className="w-6 h-6 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                <i className="ri-check-line text-blue-700 text-sm"></i>
              </div>
              <span dangerouslySetInnerHTML={{ __html: b }} />
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-bold text-sm border-b-2 border-blue-200 hover:border-blue-500 pb-0.5 transition-all cursor-pointer"
        >
          Get a free quote <i className="ri-arrow-right-line"></i>
        </Link>
      </div>

      <div className="flex-1 max-w-lg w-full" ref={imgRef}>
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
          <img
            src={reason.img}
            alt={reason.alt}
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
