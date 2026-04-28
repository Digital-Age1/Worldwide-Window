import { useParams, Navigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import LocationBreadcrumb from '../location/components/LocationBreadcrumb';
import { getServiceBySlug, STATES, SERVICES } from '@/mocks/locationData';
import { contactInfo } from '@/utils/contact';

export default function ServiceHubPage() {
  const { serviceSlug = '', stateSlug = '' } = useParams<{ serviceSlug: string; stateSlug?: string }>();
  const service = getServiceBySlug(serviceSlug);
  const routeState = STATES.find((s) => s.slug === stateSlug);
  const [activeState, setActiveState] = useState<string>(routeState?.slug || STATES[0].slug);

  useEffect(() => {
    setActiveState(routeState?.slug || STATES[0].slug);
  }, [routeState]);

  if (!service) return <Navigate to="/services" replace />;

  const currentState = STATES.find((s) => s.slug === activeState) || STATES[0];
  const relatedServices = SERVICES.filter((s) => s.slug !== serviceSlug);

  const breadcrumbs = [
    { label: 'Services', href: '/services' },
    { label: service.title },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LocationBreadcrumb items={breadcrumbs} />

        {/* Hero */}
        <section className="relative w-full min-h-[55vh] flex items-center overflow-hidden pt-[108px]">
          <div className="absolute inset-0">
            <img
              src={service.img}
              alt={service.imgAlt || `${service.title} across Washington, Oregon and Idaho`}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/50"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <i className={`${service.icon} text-blue-300`}></i>
                {service.badge}
              </div>
              <h1
                className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 leading-tight"
                style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}
              >
                {service.title}
              </h1>
              <p
                className="text-white text-lg font-light max-w-2xl mb-8 leading-relaxed"
                style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
              >
                {service.description} Serving homeowners and businesses across Washington, Oregon, and Idaho since 1983.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-fill text-lg"></i>
                  Get a Free Quote
                </a>
                <a
                  href="#browse-locations"
                  className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/50 text-white text-base font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-map-pin-2-line text-lg"></i>
                  Browse Locations
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                  <i className="ri-sparkling-2-fill"></i> What's Included
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                  Everything You Need, Nothing You Don't
                </h2>
                <p className="text-slate-500 text-base leading-relaxed mb-6">
                  Every {service.title.toLowerCase()} job includes our full-service approach — no shortcuts, no hidden fees, no surprises.
                </p>
                <ul className="space-y-3">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <div className="w-6 h-6 flex items-center justify-center bg-blue-700 rounded-full flex-shrink-0">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                      <span className="text-slate-700 font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'ri-shield-check-line', title: 'Fully Insured', desc: 'Licensed & insured in WA, OR & ID' },
                  { icon: 'ri-star-fill', title: 'Top-Rated', desc: 'Hundreds of 5-star reviews' },
                  { icon: 'ri-home-heart-line', title: 'Family-Owned', desc: 'Serving since 1983' },
                  { icon: 'ri-thumb-up-line', title: 'Guaranteed', desc: '100% satisfaction promise' },
                ].map((item) => (
                  <div key={item.title} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-xl mb-3">
                      <i className={`${item.icon} text-blue-700 text-lg`}></i>
                    </div>
                    <div className="text-slate-900 font-bold text-sm mb-1">{item.title}</div>
                    <div className="text-slate-500 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Browse Locations */}
        <section id="browse-locations" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                <i className="ri-map-pin-2-line"></i> Service Locations
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
                Find {service.title} Near You
              </h2>
              <p className="text-slate-500 text-base">
                Select your state, then choose your city to see your local service page.
              </p>
            </div>

            {/* State Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {STATES.map((state) => (
                <button
                  key={state.slug}
                  onClick={() => setActiveState(state.slug)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all cursor-pointer whitespace-nowrap ${
                    activeState === state.slug
                      ? 'bg-blue-700 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700'
                  }`}
                >
                  <i className="ri-map-pin-2-line"></i>
                  {state.name}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activeState === state.slug ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {state.cities.length}
                  </span>
                </button>
              ))}
            </div>

            {/* City Grid */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 flex items-center justify-center bg-blue-700 rounded-xl">
                  <i className="ri-map-pin-2-line text-white text-base"></i>
                </div>
                <div>
                  <div className="text-slate-900 font-extrabold text-lg leading-none">{currentState.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{currentState.cities.length} cities served</div>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {currentState.cities.map((city) => (
                  <Link
                    key={city.slug}
                    to={`/services/${serviceSlug}/${currentState.slug}/${city.slug}`}
                    className="group flex items-center gap-2 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-xl px-3 py-2.5 transition-all duration-200 cursor-pointer"
                  >
                    <i className="ri-map-pin-line text-slate-300 group-hover:text-blue-500 text-sm flex-shrink-0 transition-colors"></i>
                    <span className="text-slate-700 group-hover:text-blue-700 font-medium text-sm transition-colors leading-tight">
                      {city.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                <i className="ri-service-line"></i> More Services
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900">
                Other Services We Offer
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className="group flex items-start gap-4 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-2xl p-5 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-blue-700 group-hover:bg-blue-800 rounded-xl flex-shrink-0 transition-colors">
                    <i className={`${svc.icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-sm mb-1 group-hover:text-blue-700 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{svc.description}</p>
                    <span className="inline-flex items-center gap-1 text-blue-700 text-xs font-bold mt-2 group-hover:gap-2 transition-all">
                      View Service <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-700">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Schedule Your {service.title}?
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Call us today or request a free quote online. We serve Washington, Oregon, and Idaho — family-owned since 1983.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${contactInfo.phoneTel}`}
                className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-blue-50 text-lg font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-fill text-xl"></i>
                {contactInfo.phoneDisplay}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-lg font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-arrow-left-line text-xl"></i>
                All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
