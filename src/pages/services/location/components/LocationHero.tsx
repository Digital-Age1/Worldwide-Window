import { contactInfo } from '@/utils/contact';
import { trackLocationCtaClick, trackPhoneClick } from '@/utils/tracking';

interface LocationHeroProps {
  serviceTitle: string;
  cityName: string;
  stateName: string;
  stateAbbr: string;
  intro: string;
  serviceIcon: string;
  serviceSlug: string;
}

export default function LocationHero({
  serviceTitle,
  cityName,
  stateName,
  stateAbbr,
  intro,
  serviceIcon,
  serviceSlug,
}: LocationHeroProps) {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center overflow-hidden pt-[108px]">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=professional%20window%20cleaning%20service%20beautiful%20home%20exterior%20pristine%20sparkling%20glass%20Pacific%20Northwest%20residential%20property%20clean%20bright%20sunlight%20clear%20blue%20sky%20immaculate%20curb%20appeal%20suburban%20neighborhood%20lush%20green%20trees%20manicured%20lawn%20upscale%20house%20white%20trim%20architectural%20beauty&width=1920&height=800&seq=loc-hero-pnw-residential-v1&orientation=landscape"
          alt={`${serviceTitle} in ${cityName}, ${stateAbbr}`}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <i className={`${serviceIcon} text-blue-300`}></i>
            {cityName}, {stateAbbr}
          </div>

          <h1 className="font-extrabold leading-tight mb-5">
            <span
              className="block text-4xl lg:text-5xl xl:text-6xl text-white mb-1"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}
            >
              {serviceTitle}
            </span>
            <span
              className="block text-3xl lg:text-4xl xl:text-5xl text-blue-300"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}
            >
              in {cityName}, {stateName}
            </span>
          </h1>

          <p
            className="text-white text-lg font-light max-w-2xl mb-8 leading-relaxed"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
          >
            {intro}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${contactInfo.phoneTel}`}
              onClick={() => {
                trackLocationCtaClick({ location: 'location_hero', service_slug: serviceSlug, city: cityName, state: stateName, action: 'phone_quote' });
                trackPhoneClick({ location: 'location_hero', service_slug: serviceSlug, city: cityName, state: stateName });
              }}
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-fill text-lg"></i>
              Get a Free Quote
            </a>
            <a
              href="#location-benefits"
              className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-down-line text-lg"></i>
              Learn More
            </a>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {[
              { icon: 'ri-shield-check-line', label: 'Fully Insured' },
              { icon: 'ri-star-fill', label: 'Top-Rated Service' },
              { icon: 'ri-home-heart-line', label: 'Family-Owned Since 1983' },
              { icon: 'ri-map-pin-2-line', label: `Serving ${cityName}` },
            ].map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 bg-black/30 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold px-3 py-2 rounded-full"
              >
                <i className={`${b.icon} text-blue-300 text-sm`}></i>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
