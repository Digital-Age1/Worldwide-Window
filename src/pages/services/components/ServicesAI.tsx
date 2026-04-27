import { useState } from 'react';
import { contactInfo } from '@/utils/contact';

const qaItems = [
  {
    q: 'How often should I have my windows cleaned?',
    a: 'For most residential homes, we recommend a professional window cleaning 2–4 times per year. Homes near the coast, high-traffic roads, or in areas with heavy pollen benefit from quarterly service. Commercial storefronts generally benefit from monthly cleaning to maintain a sharp first impression.',
  },
  {
    q: 'Do you service commercial buildings?',
    a: 'Yes — we specialize in storefronts, retail spaces, restaurants, professional offices, and low-rise commercial buildings throughout Washington, Oregon, and Idaho. We offer flexible scheduling including early morning and off-hours service so your business isn\'t disrupted.',
  },
  {
    q: 'What is included in a standard window cleaning?',
    a: 'Every full service includes interior and exterior glass cleaning, screen removal and washing, track and sill wipe-down, and a final walkthrough. Hard water stain treatment is available as an add-on. We never charge extra for the standard inclusions.',
  },
  {
    q: 'Are you insured?',
    a: 'Absolutely. World Wide Window Co is fully licensed and insured in Washington, Oregon, and Idaho. Our technicians are background-checked and trained to work safely at your home or business without risk to you or your property.',
  },
  {
    q: 'Do you offer recurring window cleaning plans?',
    a: 'Yes. We offer monthly, bi-monthly, quarterly, and seasonal service plans for both residential and commercial customers. Recurring clients enjoy priority scheduling and consistent results from a team that knows your property.',
  },
];

export default function ServicesAI() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-question-answer-line"></i> Common Questions
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Answers to the questions homeowners and business owners ask most — clear, honest, and direct.
          </p>
        </div>

        <div className="space-y-3">
          {qaItems.map((item, idx) => (
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

        <div className="mt-12 p-8 bg-blue-700 rounded-2xl text-center">
          <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl mx-auto mb-4">
            <i className="ri-customer-service-2-line text-white text-2xl"></i>
          </div>
          <h3 className="text-white font-extrabold text-xl mb-2">Still have questions?</h3>
          <p className="text-blue-100 text-sm mb-5">Our team is happy to answer anything before you book.</p>
          <a
            href={`tel:${contactInfo.phoneTel}`}
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-7 py-3 rounded-full hover:bg-blue-50 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill"></i> Call {contactInfo.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
