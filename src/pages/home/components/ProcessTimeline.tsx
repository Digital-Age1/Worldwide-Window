import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: 'ri-phone-line',
    title: 'Get Your Free Quote',
    desc: 'Call us, fill out our quick online form, or schedule directly. We\'ll get back to you promptly.',
    time: '~5 minutes',
    color: 'from-blue-600 to-blue-700',
  },
  {
    number: '02',
    icon: 'ri-calendar-check-line',
    title: 'Schedule Your Appointment',
    desc: 'Choose a date and time that works for your household. We offer convenient scheduling options to fit your week.',
    time: '~2 minutes',
    color: 'from-blue-700 to-blue-800',
  },
  {
    number: '03',
    icon: 'ri-user-star-line',
    title: 'We Arrive &amp; Assess',
    desc: 'Our certified technicians arrive on time, assess the job scope, and confirm any special needs.',
    time: '15 minutes',
    color: 'from-blue-500 to-blue-700',
  },
  {
    number: '04',
    icon: 'ri-sparkling-2-line',
    title: 'Expert Window Cleaning',
    desc: 'We use purified water systems and professional tools to deliver a spotless, crystal-clear finish.',
    time: '1–4 hours',
    color: 'from-blue-700 to-blue-500',
  },
  {
    number: '05',
    icon: 'ri-shield-check-line',
    title: 'Quality Inspection &amp; Guarantee',
    desc: 'We walk through the job with you. 100% happy or we come back — no questions, no charge.',
    time: '10 minutes',
    color: 'from-blue-800 to-blue-600',
  },
];

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
            to="/process"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-bold text-sm mr-6 border-b-2 border-blue-200 hover:border-blue-500 pb-0.5 transition-all cursor-pointer"
          >
            Learn more about our process <i className="ri-arrow-right-line"></i>
          </Link>
          <Link
            to="/contact"
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
