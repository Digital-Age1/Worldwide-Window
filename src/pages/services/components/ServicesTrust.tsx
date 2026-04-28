import { contactInfo } from '@/utils/contact';

const reviews = [
  {
    name: 'Patricia H.',
    location: 'Spokane, WA',
    rating: 5,
    text: 'I\'ve used World Wide Window every spring and fall for the last 6 years. They\'re reliable, thorough, and my windows have never looked better. Worth every penny.',
    service: 'Residential — Quarterly Plan',
  },
  {
    name: 'Marcus T.',
    location: 'Portland, OR',
    rating: 5,
    text: 'Had them clean our café storefront and two upstairs office windows. They came in early before we opened, left no mess, and the glass looked flawless. Will absolutely book again.',
    service: 'Commercial Storefront',
  },
  {
    name: 'Linda B.',
    location: 'Boise, ID',
    rating: 5,
    text: 'The team was on time, professional, and worked quickly without rushing. My home has a lot of divided-light windows and they got every single pane. Incredible attention to detail.',
    service: 'Residential — Full Interior & Exterior',
  },
  {
    name: 'James R.',
    location: 'Bellevue, WA',
    rating: 5,
    text: 'I was blown away by how clean the windows looked afterward. The tracks and sills looked brand new too. This company is as professional as it gets for residential work.',
    service: 'Residential — Track & Screen Clean',
  },
];

export default function ServicesTrust() {
  return (
    <section className="py-24 bg-white" id="trust">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-star-fill"></i> Customer Reviews
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-3">What Our Customers Say</h2>
          <p className="text-slate-500 text-lg font-light">Real reviews from homeowners and businesses across Washington, Oregon, and Idaho.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reviews.map((review) => (
            <div key={review.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">&ldquo;{review.text}&rdquo;</p>
              <div className="border-t border-slate-200 pt-4">
                <p className="font-bold text-slate-900 text-sm">{review.name}</p>
                <p className="text-slate-400 text-xs mt-0.5">{review.location}</p>
                <div className="mt-2 inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <i className="ri-check-line text-xs"></i> {review.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Insured / credibility strip */}
        <div className="bg-slate-900 rounded-2xl p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-extrabold text-white mb-3">Licensed. Insured. Reliable.</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                World Wide Window Co is fully licensed and insured across Washington, Oregon, and Idaho. Every technician is background-checked and trained to professional standards. You can trust our team in your home or on your property — we treat every job like it&apos;s our own.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {['Fully Insured', 'Background-Checked Team', 'Family-Owned Since 1983'].map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    <i className="ri-check-line text-blue-400 text-xs"></i> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <a
                href={`tel:${contactInfo.phoneTel}`}
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill"></i> Get a Free Quote
              </a>
              <p className="text-slate-500 text-xs mt-3">{contactInfo.phoneDisplay} · {contactInfo.businessHoursShort}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
