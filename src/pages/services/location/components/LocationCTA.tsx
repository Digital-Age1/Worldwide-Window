import { contactInfo } from '@/utils/contact';
import { trackLocationCtaClick, trackPhoneClick } from '@/utils/tracking';

interface LocationCTAProps {
  serviceTitle: string;
  cityName: string;
  stateAbbr: string;
}

export default function LocationCTA({ serviceTitle, cityName, stateAbbr }: LocationCTAProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=beautiful%20Pacific%20Northwest%20home%20exterior%20pristine%20clean%20windows%20sparkling%20sunlight%20reflecting%20glass%20residential%20property%20lush%20green%20garden%20curb%20appeal%20immaculate%20suburban%20neighborhood%20bright%20clear%20day&width=1920&height=700&seq=loc-cta-bg-v1&orientation=landscape"
          alt="Window cleaning service CTA background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/90 to-slate-900/85"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
          Serving {cityName}, {stateAbbr}
        </div>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
          Ready for Professional {serviceTitle} in {cityName}?
        </h2>
        <p className="text-white/70 text-lg font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          Get a free, no-obligation quote from World Wide Window Co — the Pacific Northwest's most trusted family-owned window cleaning company since 1983.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href={`tel:${contactInfo.phoneTel}`}
            onClick={() => {
              trackLocationCtaClick({ location: 'location_cta', city: cityName, state: stateAbbr, action: 'phone_call' });
              trackPhoneClick({ location: 'location_cta', city: cityName, state: stateAbbr });
            }}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-phone-fill text-xl"></i>
            Call {contactInfo.phoneDisplay}
          </a>
          <a
            href={`tel:${contactInfo.phoneTel}`}
            onClick={() => {
              trackLocationCtaClick({ location: 'location_cta', city: cityName, state: stateAbbr, action: 'phone_quote' });
              trackPhoneClick({ location: 'location_cta_quote', city: cityName, state: stateAbbr });
            }}
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-lg font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            <i className="ri-calendar-check-line text-xl"></i>
            Get Free Quote
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          {[
            { icon: 'ri-checkbox-circle-line', text: 'Free, no-obligation quote' },
            { icon: 'ri-shield-check-line', text: '100% satisfaction guarantee' },
            { icon: 'ri-home-heart-line', text: 'Family-owned since 1983' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <i className={`${item.icon} text-blue-400`}></i>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
