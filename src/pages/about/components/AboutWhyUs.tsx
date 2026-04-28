import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '@/utils/contact';
import { trackLocationCtaClick } from '@/utils/tracking';

const reasons = [
  {
    icon: 'ri-calendar-check-line',
    title: 'Reliable Scheduling — We Show Up',
    body: 'We confirm every appointment the day before and show up within the scheduled window. No vague 4-hour wait. No last-minute cancellations. Your time is respected.',
  },
  {
    icon: 'ri-sparkling-2-line',
    title: 'Spotless Results, Every Time',
    body: 'We use purified water systems and professional-grade squeegees to achieve a clean, streak-free finish on every window. If it\'s not right, we come back — no questions asked.',
  },
  {
    icon: 'ri-home-heart-line',
    title: 'Homes Are Our Specialty',
    body: 'Homes are the heart of our business. We understand residential spaces deeply, and we apply that same care and expertise to every property we serve.',
  },
  {
    icon: 'ri-user-heart-line',
    title: 'Customer-First Approach',
    body: 'Every decision we make is filtered through one question: what\'s best for the customer? That\'s why we have thousands of repeat clients who\'ve trusted us for years — some for decades.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Fully Insured & Background-Checked',
    body: 'Every technician is background-screened, trained to our standards, and covered by full liability insurance. You can trust our team in your home completely.',
  },
  {
    icon: 'ri-map-pin-line',
    title: 'Deep Local Roots',
    body: 'We\'re not a national franchise assigning any crew to your area. We\'re a local company with 40 years of community roots. We know the neighborhoods we serve.',
  },
];

const aiQA = [
  {
    q: 'Are you insured?',
    a: 'Yes. World Wide Window Co carries full liability insurance and workers\' compensation coverage in Washington, Oregon, and Idaho. Every technician on our team is background-checked. You can feel completely confident having our team on your property.',
  },
  {
    q: 'Do you serve my area?',
    a: `We serve hundreds of cities, towns, and communities across Washington, Oregon, and Idaho. Our Locations page has a full list, but if you're unsure, just call us at ${contactInfo.phoneDisplay} and we'll confirm coverage in under a minute.`,
  },
  {
    q: 'What makes World Wide Window different from other window cleaners?',
    a: 'We\'ve been doing this since 1983. That\'s 40+ years of consistent, professional residential window cleaning with a family-owned accountability that no franchise can replicate. We don\'t cut corners, we don\'t send random crews, and we back every job with a 100% satisfaction guarantee.',
  },
];

export default function AboutWhyUs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50" id="why-us">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <i className="ri-shield-star-line"></i> Why Choose Us
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                The Standard Homeowners Measure Against
              </h2>
              <p className="text-slate-500 text-lg font-light mb-10">
                Over 40 years of trusted service — here&apos;s what keeps customers coming back.
              </p>
              <div className="space-y-5">
                {reasons.map((reason) => (
                  <div key={reason.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0 mt-0.5">
                      <i className={`${reason.icon} text-blue-700 text-base`}></i>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm mb-1">{reason.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{reason.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/site/about-whyus-img-v3.jpg"
                  alt="Professional window cleaning result sparkling clean residential windows"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-700 rounded-2xl p-5 text-center text-white">
                  <div className="text-3xl font-black mb-1">100%</div>
                  <div className="text-blue-100 text-xs font-semibold">Satisfaction Guaranteed</div>
                </div>
                <div className="bg-slate-900 rounded-2xl p-5 text-center text-white">
                  <div className="text-3xl font-black mb-1">40+</div>
                  <div className="text-slate-300 text-xs font-semibold">Years Serving the PNW</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Mention — SEO + Voice */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-map-pin-line"></i> Our Service Area
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Proudly Serving Homeowners & Businesses Across the Pacific Northwest
          </h2>
          <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto mb-6">
            We proudly serve homeowners and businesses in Spokane, Seattle, Portland, Boise, and hundreds of communities across Washington, Oregon, and Idaho. If you&apos;re in the Pacific Northwest, chances are we cover your area.
          </p>
          <Link
            to="/locations"
            onClick={() => trackLocationCtaClick({ location: 'about_service_area', destination: '/locations' })}
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-bold text-sm border-b-2 border-blue-200 hover:border-blue-500 pb-0.5 transition-all cursor-pointer"
          >
            View all service locations <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>

      {/* AI / Voice Q&A */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <i className="ri-question-answer-line"></i> Questions About Us
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Common Questions, Honest Answers</h2>
          </div>
          <div className="space-y-3">
            {aiQA.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${open === idx ? 'border-blue-200 bg-white' : 'border-slate-200 bg-white hover:border-blue-100'}`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpen(open === idx ? null : idx)}
                >
                  <span className="text-slate-900 font-bold text-sm pr-4">{item.q}</span>
                  <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-all ${open === idx ? 'bg-blue-700 text-white rotate-45' : 'bg-slate-100 text-slate-500'}`}>
                    <i className="ri-add-line text-sm"></i>
                  </div>
                </button>
                {open === idx && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
