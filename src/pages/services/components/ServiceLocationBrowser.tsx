import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, STATES } from '@/mocks/locationData';
import { contactInfo } from '@/utils/contact';

export default function ServiceLocationBrowser() {
  const [activeService, setActiveService] = useState(SERVICES[0].slug);
  const [activeState, setActiveState] = useState(STATES[0].slug);

  const currentState = STATES.find((s) => s.slug === activeState) || STATES[0];
  const currentService = SERVICES.find((s) => s.slug === activeService) || SERVICES[0];

  return (
    <section id="browse-by-location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-map-pin-2-line"></i> Browse by Location
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Find Your Local Service Page
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Select a service, then your state, then your city — and get a page built specifically for your area.
          </p>
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-100 overflow-hidden">
          {/* Step 1: Service Filter */}
          <div className="p-6 lg:p-8 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full flex-shrink-0">
                <span className="text-white text-xs font-extrabold">1</span>
              </div>
              <h3 className="text-slate-900 font-extrabold text-lg">Choose a Service</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {SERVICES.map((svc) => (
                <button
                  key={svc.slug}
                  onClick={() => setActiveService(svc.slug)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all cursor-pointer whitespace-nowrap ${
                    activeService === svc.slug
                      ? 'bg-blue-700 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700'
                  }`}
                >
                  <i className={`${svc.icon} text-sm ${activeService === svc.slug ? 'text-blue-200' : 'text-blue-600'}`}></i>
                  {svc.shortTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: State Filter */}
          <div className="p-6 lg:p-8 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full flex-shrink-0">
                <span className="text-white text-xs font-extrabold">2</span>
              </div>
              <h3 className="text-slate-900 font-extrabold text-lg">Choose a State</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {STATES.map((state) => (
                <button
                  key={state.slug}
                  onClick={() => setActiveState(state.slug)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all cursor-pointer whitespace-nowrap ${
                    activeState === state.slug
                      ? 'bg-blue-700 text-white'
                      : 'bg-slate-50 border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-700'
                  }`}
                >
                  <i className="ri-map-pin-2-line text-sm"></i>
                  {state.name}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activeState === state.slug ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {state.cities.length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: City Grid */}
          <div className="p-6 lg:p-8">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-700 rounded-full flex-shrink-0">
                  <span className="text-white text-xs font-extrabold">3</span>
                </div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-lg leading-none">
                    {currentService.shortTitle} in {currentState.name}
                  </h3>
                  <p className="text-slate-400 text-xs mt-0.5">{currentState.cities.length} cities — click to view your local page</p>
                </div>
              </div>
              <Link
                to={`/services/${activeService}/${activeState}`}
                className="hidden sm:inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:underline cursor-pointer whitespace-nowrap"
              >
                View All <i className="ri-arrow-right-line"></i>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
              {currentState.cities.map((city) => (
                <Link
                  key={city.slug}
                  to={`/services/${activeService}/${activeState}/${city.slug}`}
                  className="group flex items-center gap-2 bg-white hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-xl px-3 py-2.5 transition-all duration-200 cursor-pointer"
                >
                  <i className="ri-map-pin-line text-slate-300 group-hover:text-blue-500 text-sm flex-shrink-0 transition-colors"></i>
                  <span className="text-slate-700 group-hover:text-blue-700 font-medium text-sm transition-colors leading-tight">
                    {city.name}
                  </span>
                  <i className="ri-arrow-right-line text-slate-200 group-hover:text-blue-400 text-xs ml-auto flex-shrink-0 transition-colors"></i>
                </Link>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                Don't see your city?{' '}
                <a href={`tel:${contactInfo.phoneTel}`} className="text-blue-700 font-bold hover:underline cursor-pointer">
                  Call us — we may still serve your area.
                </a>
              </p>
              <a
                href={`tel:${contactInfo.phoneTel}`}
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded-full transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill"></i> {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
