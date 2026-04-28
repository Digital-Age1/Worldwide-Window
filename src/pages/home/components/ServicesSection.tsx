import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import content from '@/content';
import { contactInfo } from '@/utils/contact';
import { trackPhoneClick, trackServiceCtaClick } from '@/utils/tracking';

const fallbackFeaturedService = {
  id: 'residential',
  icon: 'ri-home-4-line',
  title: 'Residential Window Cleaning',
  desc: 'Crystal-clear, spotless results for homes of all sizes across Washington, Oregon, and Idaho. From cozy bungalows to sprawling estates — every pane spotless.',
  bullets: ['Interior & exterior cleaning', 'Screen cleaning available', 'Hard water stain treatment available'],
  img: '/images/site/svc-residential-resi-001.jpg',
  alt: 'Professional residential home window cleaning service',
  badge: 'Our Core Specialty',
};

const fallbackResidentialServices = [
  {
    id: 'gutters',
    icon: 'ri-layout-top-line',
    title: 'Gutter Cleaning',
    desc: 'Prevent water damage with thorough gutter clearing. We flush, inspect, and report condition — essential maintenance for Pacific Northwest homes.',
    bullets: ['Debris removal', 'Downspout flushing available', 'Condition inspection report'],
    img: '/images/site/svc-gutter-pnw-001.jpg',
    alt: 'Professional gutter cleaning and maintenance service',
  },
  {
    id: 'hardwater',
    icon: 'ri-water-flash-line',
    title: 'Hard Water Stain Removal',
    desc: 'Stubborn mineral deposits and calcium buildup treatment.',
    bullets: ['Mineral deposit treatment', 'Calcium & lime buildup treatment', 'Glass clarity restoration'],
    img: '/images/site/svc-hardwater-resi-001.jpg',
    alt: 'Hard water stain removal treatment for residential windows',
  },
];

const servicesContent = content.pages.home.servicesSection;
const featuredService = servicesContent?.featured || fallbackFeaturedService;
const residentialServices = servicesContent?.residentialServices || fallbackResidentialServices;
const businessService = servicesContent?.businessService;
const serviceRouteById: Record<string, string> = {
  residential: '/services/residential-window-cleaning',
  gutters: '/services/gutter-cleaning',
  'gutter-cleaning': '/services/gutter-cleaning',
  commercial: '/services/commercial-window-cleaning',
  hardwater: '/services',
};

const getServiceRoute = (id: string) => serviceRouteById[id] || '/services';

export default function ServicesSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, gridRef.current].filter(Boolean) as HTMLElement[];
    elements.forEach((el) => el.classList.add('reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-slate-50" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" ref={titleRef}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-service-line"></i> {servicesContent?.badge || 'What We Do'}
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            {servicesContent?.title || 'Residential & Commercial Window Cleaning Across WA, OR & ID'}
          </h2>
          <p className="text-slate-500 text-lg font-light leading-relaxed">
            {servicesContent?.subtitle || 'Delivering premuim results for homes of all sizes across the Pacific Northwest'}
          </p>
        </div>

        {/* Featured Residential Card */}
        <div className="mb-8 rounded-3xl overflow-hidden border border-blue-100 bg-white group hover:-translate-y-1 hover:shadow-xl transition-all duration-400">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={featuredService.img}
                alt={featuredService.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/30 lg:block hidden"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-blue-700 text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                  {featuredService.badge || 'Our Core Specialty'}
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-2xl mb-5">
                <i className={`${featuredService.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">{featuredService.title}</h3>
              <p className="text-slate-500 leading-relaxed mb-5">{featuredService.desc}</p>
              <ul className="space-y-2 mb-6">
                {featuredService.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-slate-600 text-sm">
                    <i className="ri-check-line text-blue-700 text-base flex-shrink-0"></i>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to={getServiceRoute(featuredService.id)}
                onClick={() => trackServiceCtaClick({ location: 'home_services_featured', service_id: featuredService.id })}
                className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-bold text-sm transition-colors group-hover:gap-2.5 cursor-pointer"
              >
                Learn more <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Residential Additional Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14" ref={gridRef}>
          {residentialServices.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:-translate-y-2 hover:shadow-xl transition-all duration-400 cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 w-9 h-9 flex items-center justify-center bg-blue-700 rounded-xl">
                  <i className={`${service.icon} text-white text-base`}></i>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{service.desc}</p>
                <ul className="space-y-1 mb-4">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-slate-600 text-sm">
                      <i className="ri-check-line text-blue-700 text-sm flex-shrink-0"></i>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to={getServiceRoute(service.id)}
                  onClick={() => trackServiceCtaClick({ location: 'home_services_grid', service_id: service.id })}
                  className="inline-flex items-center gap-1.5 text-blue-700 hover:text-blue-800 font-semibold text-sm transition-colors group-hover:gap-2.5 cursor-pointer"
                >
                  Learn more <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Business Services — secondary, clearly labeled */}
        <div className="border-t border-slate-200 pt-10 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-lg flex-shrink-0">
              <i className="ri-store-2-line text-slate-500 text-base"></i>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">We Also Service Businesses</p>
              <p className="text-slate-500 text-sm">Storefronts &amp; low-rise commercial buildings across WA, OR &amp; ID</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row cursor-pointer">
              <div className="relative sm:w-56 flex-shrink-0 h-44 sm:h-auto overflow-hidden">
                <img
                  src={businessService?.img || "/images/site/svc-commercial-sm-002.jpg"}
                  alt={businessService?.alt || "Commercial storefront window cleaning service"}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-lg flex-shrink-0">
                    <i className="ri-store-2-line text-slate-600 text-base"></i>
                  </div>
                <h3 className="text-base font-bold text-slate-900">{businessService?.title || 'Commercial Window Cleaning'}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  {businessService?.desc || 'Storefront and low-rise business window cleaning across WA, OR, and ID. Keep a clean, professional appearance that makes the right impression on customers.'}
                </p>
                <ul className="space-y-1 mb-4">
                  {(businessService?.bullets || ['Storefronts & retail shops', 'Low-rise office buildings', 'Recurring service plans']).map((b) => (
                    <li key={b} className="flex items-center gap-2 text-slate-600 text-sm">
                      <i className="ri-check-line text-slate-400 text-sm flex-shrink-0"></i>
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/commercial-window-cleaning"
                  onClick={() => trackServiceCtaClick({ location: 'home_services_business', service_id: 'commercial' })}
                  className="inline-flex items-center gap-1.5 text-slate-600 hover:text-blue-700 font-semibold text-sm transition-colors cursor-pointer"
                >
                  Learn more <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
            <div className="bg-blue-700 rounded-2xl p-7 flex flex-col justify-center">
              <i className="ri-question-answer-line text-blue-300 text-3xl mb-4"></i>
              <h4 className="text-white font-bold text-lg mb-2">Not Sure What You Need?</h4>
              <p className="text-blue-200 text-sm leading-relaxed mb-5">
                Whether it&apos;s your home or your business, we&apos;ll walk you through the right service. Free quotes, no obligation.
              </p>
              <a
                href={`tel:${contactInfo.phoneTel}`}
                onClick={() => {
                  trackServiceCtaClick({ location: 'home_services_help', action: 'phone' });
                  trackPhoneClick({ location: 'home_services_help' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold text-sm px-5 py-3 rounded-full hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-line"></i> Call Us Free
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={`tel:${contactInfo.phoneTel}`}
            onClick={() => {
              trackServiceCtaClick({ location: 'home_services_bottom', action: 'phone' });
              trackPhoneClick({ location: 'home_services_bottom' });
            }}
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <i className="ri-phone-line"></i>
            Call For Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
