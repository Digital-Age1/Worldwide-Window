import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import content from '@/content';
import { trackQuoteButtonClick } from '@/utils/tracking';

const steps = (content.sections.process?.steps || [
  {
    step: '01',
    title: 'Book Your Free Quote',
    description: 'Call us or fill out our online form to request a free, no-obligation quote. We\'ll discuss your needs and schedule a convenient time.',
  },
  {
    step: '02',
    title: 'We Arrive On Time',
    description: 'Our professional team arrives on time, in uniform, with all the equipment needed to transform your windows.',
  },
  {
    step: '03',
    title: 'Crystal-Clear Results',
    description: 'We clean every window inside and out, using professional-grade squeegees and a pure water system for a spotless finish.',
  },
  {
    step: '04',
    title: '100% Satisfaction Guarantee',
    description: 'We walk through the job with you to ensure you\'re completely satisfied. If anything isn\'t perfect, we\'ll make it right.',
  },
]).map((step, i) => {
  const icons = ['ri-phone-line', 'ri-calendar-check-line', 'ri-user-star-line', 'ri-sparkling-2-line', 'ri-shield-check-line'];
  const times = ['~5 minutes', '~2 minutes', '15 minutes', '1–4 hours', '10 minutes'];
  const colors = ['from-blue-600 to-blue-700', 'from-blue-700 to-blue-800', 'from-blue-500 to-blue-700', 'from-blue-700 to-blue-500', 'from-blue-600 to-blue-700'];
  return {
    number: step.step,
    icon: icons[i % icons.length],
    title: step.title,
    desc: step.description,
    time: times[i % times.length],
    color: colors[i % colors.length],
  };
});
// ...existing code...

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 bg-slate-50" id="process">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16" ref={ref}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-roadmap-line"></i> Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            From Call to Crystal Clear in 5 Simple Steps
          </h2>
          <p className="text-slate-500 text-lg font-light">
            We make the entire experience seamless — from booking to the final gleaming result.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 bg-slate-200">
            <div className="h-full w-3/5 bg-gradient-to-r from-blue-500 to-blue-700"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => (
              <StepCard key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/about#process"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-bold text-sm mr-6 border-b-2 border-blue-200 hover:border-blue-500 pb-0.5 transition-all cursor-pointer"
          >
            Learn more about our process <i className="ri-arrow-right-line"></i>
          </Link>
          <Link
            to="/contact"
            onClick={() => trackQuoteButtonClick({ location: 'process_timeline', destination: '/contact' })}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <i className="ri-calendar-check-line"></i> Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), index * 120);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  return (
    <div className="flex flex-col items-center text-center" ref={ref}>
      {/* Icon circle */}
      <div className={`relative w-28 h-28 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg`}>
        <i className={`${step.icon} text-white text-3xl`}></i>
        <span className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white text-xs font-black rounded-full flex items-center justify-center">
          {step.number}
        </span>
      </div>
      <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
        <i className="ri-time-line text-xs"></i> {step.time}
      </div>
      <h3 className="text-slate-900 font-bold text-base mb-2 leading-snug" dangerouslySetInnerHTML={{ __html: step.title }}></h3>
      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
    </div>
  );
}
