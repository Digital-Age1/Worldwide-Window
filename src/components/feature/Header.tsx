import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SERVICES, STATES } from '@/mocks/locationData';
import content from '@/content';
import { contactInfo } from '@/utils/contact';

const TOP_NAV = content.components.header?.navLinks || [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Locations', href: '/locations' },
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const getServiceSlug = (service: { slug?: string; title?: string; shortTitle?: string }) =>
  service.slug || slugify(service.title || service.shortTitle || '');

const getStateSlug = (state: { slug?: string; name?: string }) =>
  state.slug || slugify(state.name || '');

const getCitySlug = (city: { slug?: string; name?: string }) =>
  city.slug || slugify(city.name || '');

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [activeService, setActiveService] = useState(SERVICES[0].slug);
  const [activeState, setActiveState] = useState(STATES[0].slug);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServiceExpanded, setMobileServiceExpanded] = useState<string | null>(null);
  const [mobileStateExpanded, setMobileStateExpanded] = useState<string | null>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentService = SERVICES.find((s) => s.slug === activeService) || SERVICES[0];
  const currentState = STATES.find((s) => s.slug === activeState) || STATES[0];
  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-slate-100'}`}>
        {/* Top announcement bar */}
        <div className="bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-1.5 flex items-center justify-between text-xs font-medium">
            <span className="hidden md:flex items-center gap-2">
              <i className="ri-map-pin-2-line text-blue-300"></i>
              {content.components.header?.topBarText || 'Serving Washington, Oregon & Idaho — Family-Owned Since 1983'}
            </span>
            <span className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <i className="ri-time-line text-blue-300"></i> {contactInfo.businessHours}
              </span>
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="https://static.readdy.ai/image/81164d3ba0f00c2a7e247a9f180c9b75/bc0259c4ade5599752e3a176166f5ac2.png"
                alt="Worldwide Window Co — A Family Business, Est. 1983 — Washington State Window Cleaning"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0.5" ref={megaRef}>
              <Link
                to="/"
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  location.pathname === '/'
                    ? 'text-blue-700 bg-blue-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                Home
              </Link>

              {/* Services mega-menu trigger */}
              <div className="relative">
                <button
                  onClick={() => setMegaOpen((v) => !v)}
                  className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isServicesActive || megaOpen
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  Services
                  <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {/* Mega Menu */}
                {megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[860px] bg-white rounded-2xl border border-slate-100 overflow-hidden z-50" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                    <div className="flex">
                      {/* Column 1: Services */}
                      <div className="w-[220px] bg-slate-50 border-r border-slate-100 p-3 flex-shrink-0">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 py-2 mb-1">Services</div>
                        {SERVICES.map((svc) => {
                          const serviceSlug = getServiceSlug(svc);
                          return (
                          <Link
                            key={serviceSlug}
                            to={`/services/${serviceSlug}`}
                            onMouseEnter={() => { setActiveService(serviceSlug); setActiveState(getStateSlug(STATES[0])); }}
                            onFocus={() => { setActiveService(serviceSlug); setActiveState(getStateSlug(STATES[0])); }}
                            onClick={() => { setActiveService(serviceSlug); setMegaOpen(false); }}
                            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                              activeService === serviceSlug
                                ? 'bg-blue-700 text-white'
                                : 'text-slate-600 hover:bg-white hover:text-slate-900'
                            }`}
                          >
                            <i className={`${svc.icon} text-sm flex-shrink-0 ${activeService === serviceSlug ? 'text-blue-200' : 'text-blue-600'}`}></i>
                            <span className="text-sm font-medium leading-tight">{svc.shortTitle}</span>
                            <i className={`ri-arrow-right-s-line ml-auto text-sm ${activeService === serviceSlug ? 'text-blue-200' : 'text-slate-300'}`}></i>
                          </Link>
                          );
                        })}
                        <div className="mt-3 pt-3 border-t border-slate-200">
                          <Link
                            to="/services"
                            className="flex items-center gap-2 px-3 py-2 text-blue-700 font-bold text-sm hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
                          >
                            <i className="ri-grid-line text-sm"></i>
                            All Services
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: States */}
                      <div className="w-[160px] border-r border-slate-100 p-3 flex-shrink-0">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 py-2 mb-1">State</div>
                        {STATES.map((state) => {
                          const stateSlug = getStateSlug(state);
                          return (
                          <Link
                            key={stateSlug}
                            to={`/services/${activeService}/${stateSlug}`}
                            onMouseEnter={() => setActiveState(stateSlug)}
                            onFocus={() => setActiveState(stateSlug)}
                            onClick={() => { setActiveState(stateSlug); setMegaOpen(false); }}
                            className={`w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer ${
                              activeState === stateSlug
                                ? 'bg-blue-50 text-blue-700 font-semibold'
                                : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                            }`}
                          >
                            <i className="ri-map-pin-2-line text-sm flex-shrink-0"></i>
                            <span className="text-sm font-medium">{state.name}</span>
                            <i className={`ri-arrow-right-s-line ml-auto text-sm ${activeState === stateSlug ? 'text-blue-400' : 'text-slate-300'}`}></i>
                          </Link>
                          );
                        })}
                        <div className="mt-3 pt-3 border-t border-slate-200">
                          <Link
                            to={`/services/${activeService}`}
                            className="flex items-center gap-2 px-3 py-2 text-blue-700 font-bold text-sm hover:bg-blue-50 rounded-xl transition-colors cursor-pointer"
                          >
                            <i className="ri-external-link-line text-sm"></i>
                            All Locations
                          </Link>
                        </div>
                      </div>

                      {/* Column 3: Cities */}
                      <div className="flex-1 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                            {currentService.shortTitle} in {currentState.name}
                          </div>
                          <span className="text-xs text-slate-400">{currentState.cities.length} cities</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1 max-h-[340px] overflow-y-auto pr-1">
                          {currentState.cities.map((city) => (
                            <Link
                              key={getCitySlug(city)}
                              to={`/services/${activeService}/${activeState}/${getCitySlug(city)}`}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all text-sm cursor-pointer group"
                            >
                              <i className="ri-map-pin-line text-slate-300 group-hover:text-blue-400 text-xs flex-shrink-0 transition-colors"></i>
                              <span className="font-medium leading-tight">{city.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 flex items-center justify-between">
                      <span className="text-slate-500 text-xs">
                        <strong className="text-slate-700">{SERVICES.length} services</strong> across{' '}
                        <strong className="text-slate-700">Washington, Oregon &amp; Idaho</strong>
                      </span>
                      <a
                        href={`tel:${contactInfo.phoneTel}`}
                        className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <i className="ri-phone-fill"></i> {contactInfo.phoneDisplay}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {TOP_NAV.filter((l) => l.href !== '/').map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    location.pathname === link.href
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <a
                href={`tel:${contactInfo.phoneTel}`}
                className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-blue-700 transition-colors whitespace-nowrap cursor-pointer group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-blue-100 group-hover:bg-blue-700 rounded-full transition-colors flex-shrink-0">
                  <i className="ri-phone-fill text-blue-700 group-hover:text-white text-sm transition-colors"></i>
                </div>
                {contactInfo.phoneDisplay}
              </a>
              <button
                className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-3-line'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`xl:hidden transition-all duration-300 overflow-hidden bg-white border-t border-slate-100 ${
            menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            <Link
              to="/"
              className={`font-medium text-sm px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                location.pathname === '/' ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className={`w-full flex items-center justify-between font-medium text-sm px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                  isServicesActive || mobileServicesOpen ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                <span>Services</span>
                <i className={`ri-arrow-down-s-line text-base transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}></i>
              </button>

              {mobileServicesOpen && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  <Link
                    to="/services"
                    className="flex items-center gap-2 text-blue-700 font-bold text-sm px-4 py-2.5 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <i className="ri-grid-line text-sm"></i> All Services
                  </Link>
                  {SERVICES.map((svc) => (
                    <div key={svc.slug}>
                      <button
                        onClick={() => setMobileServiceExpanded((v) => (v === svc.slug ? null : svc.slug))}
                        className="w-full flex items-center justify-between gap-2 text-slate-700 font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        <span className="flex items-center gap-2">
                          <i className={`${svc.icon} text-blue-600 text-sm`}></i>
                          {svc.shortTitle}
                        </span>
                        <i className={`ri-arrow-down-s-line text-sm transition-transform duration-200 ${mobileServiceExpanded === svc.slug ? 'rotate-180' : ''}`}></i>
                      </button>

                      {mobileServiceExpanded === svc.slug && (
                        <div className="ml-4 mt-1 flex flex-col gap-1">
                          <Link
                            to={`/services/${getServiceSlug(svc)}`}
                            className="text-blue-700 font-bold text-xs px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                          >
                            View All Locations →
                          </Link>
                          {STATES.map((state) => (
                            <div key={state.slug}>
                              <button
                                onClick={() => setMobileStateExpanded((v) => (v === `${svc.slug}-${state.slug}` ? null : `${svc.slug}-${state.slug}`))}
                                className="w-full flex items-center justify-between gap-2 text-slate-600 font-medium text-xs px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                              >
                                <span className="flex items-center gap-1.5">
                                  <i className="ri-map-pin-2-line text-slate-400 text-xs"></i>
                                  {state.name}
                                </span>
                                <i className={`ri-arrow-down-s-line text-xs transition-transform duration-200 ${mobileStateExpanded === `${svc.slug}-${state.slug}` ? 'rotate-180' : ''}`}></i>
                              </button>

                              {mobileStateExpanded === `${svc.slug}-${state.slug}` && (
                                <div className="ml-4 mt-1 grid grid-cols-2 gap-1">
                                  {state.cities.map((city) => (
                                    <Link
                                      key={city.slug}
                                      to={`/services/${getServiceSlug(svc)}/${getStateSlug(state)}/${getCitySlug(city)}`}
                                      className="flex items-center gap-1.5 text-slate-600 hover:text-blue-700 text-xs px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                                    >
                                      <i className="ri-map-pin-line text-slate-300 text-xs flex-shrink-0"></i>
                                      {city.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {TOP_NAV.filter((l) => l.href !== '/').map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium text-sm px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                  location.pathname === link.href ? 'text-blue-700 bg-blue-50' : 'text-slate-700 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-100 mt-2">
              <a
                href={`tel:${contactInfo.phoneTel}`}
                className="flex items-center gap-2 text-slate-700 font-bold text-sm px-4 py-3 cursor-pointer"
              >
                <i className="ri-phone-fill text-blue-700"></i> {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Floating mobile call button */}
      <a
        href={`tel:${contactInfo.phoneTel}`}
        className="fixed bottom-6 right-6 z-50 lg:hidden w-14 h-14 flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white rounded-full cursor-pointer transition-all duration-200 hover:scale-110 animate-pulse-ring"
        aria-label="Call Worldwide Window Washington"
      >
        <i className="ri-phone-fill text-2xl"></i>
      </a>
    </>
  );
}
