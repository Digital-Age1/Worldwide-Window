interface LocationBenefitsProps {
  serviceTitle: string;
  cityName: string;
  stateName: string;
  bullets: string[];
}

const WHY_CHOOSE = [
  { icon: 'ri-calendar-check-line', title: 'Family-Owned Since 1983', desc: 'Over 40 years of trusted service across the Pacific Northwest. We treat every home like our own.' },
  { icon: 'ri-shield-check-line', title: 'Fully Licensed & Insured', desc: 'Complete peace of mind on every job. We carry full liability insurance and are licensed in WA, OR & ID.' },
  { icon: 'ri-star-fill', title: 'Top-Rated Service', desc: 'Hundreds of satisfied customers across Washington, Oregon, and Idaho trust us for consistent, spotless results.' },
  { icon: 'ri-thumb-up-line', title: '100% Satisfaction Guarantee', desc: 'Not happy? We come back and make it right — no questions asked. Your satisfaction is our promise.' },
  { icon: 'ri-time-line', title: 'On-Time, Every Time', desc: 'We respect your schedule. Our team arrives on time, works efficiently, and leaves your property spotless.' },
  { icon: 'ri-leaf-line', title: 'Eco-Friendly Products', desc: 'We use environmentally safe cleaning solutions that are tough on grime but gentle on your home and landscaping.' },
];

export default function LocationBenefits({ serviceTitle, cityName, stateName, bullets }: LocationBenefitsProps) {
  return (
    <>
      {/* Benefits Section */}
      <section id="location-benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                <i className="ri-sparkling-2-fill"></i> What's Included
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                {serviceTitle} in {cityName}, {stateName}
              </h2>
              <p className="text-slate-500 text-base leading-relaxed mb-8">
                Every {serviceTitle.toLowerCase()} job in {cityName} includes our full-service approach — no shortcuts, no hidden fees. Here's exactly what you get on every visit.
              </p>
              <ul className="space-y-4">
                {bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-blue-700 rounded-full flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <span className="text-slate-700 font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+18002231286"
                  className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded-full transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-phone-fill"></i> Call for a Free Quote
                </a>
                <a
                  href="tel:+18002231286"
                  className="inline-flex items-center gap-2 border-2 border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-700 font-bold text-sm px-6 py-3 rounded-full transition-colors cursor-pointer whitespace-nowrap"
                >
                  (800) 223-1286
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=professional%20window%20cleaning%20technician%20working%20on%20beautiful%20residential%20home%20exterior%20pristine%20sparkling%20glass%20Pacific%20Northwest%20suburban%20house%20bright%20sunlight%20immaculate%20clean%20windows%20detail%20work%20careful%20professional%20service%20uniformed%20worker%20squeegee%20streak%20free%20result&width=700&height=520&seq=loc-benefits-pnw-residential-v1&orientation=landscape"
                  alt={`${serviceTitle} service in ${cityName}, ${stateName}`}
                  className="w-full h-[380px] object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-5 border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-xl flex-shrink-0">
                    <i className="ri-award-fill text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-slate-900 font-extrabold text-lg leading-none">40+ Years</div>
                    <div className="text-slate-500 text-xs mt-0.5">Serving the Pacific Northwest</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
              <i className="ri-heart-line"></i> Why Choose Us
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              Why {cityName} Trusts World Wide Window Co
            </h2>
            <p className="text-slate-500 text-base">
              Family-owned and community-rooted since 1983 — we bring the same dedication to every home and business we serve in {cityName}.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-slate-100">
                <div className="w-11 h-11 flex items-center justify-center bg-blue-100 rounded-xl mb-4">
                  <i className={`${item.icon} text-blue-700 text-xl`}></i>
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
