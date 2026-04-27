import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import TrustBar from '../home/components/TrustBar';
import InlineCTA from '../home/components/InlineCTA';
import BeforeAfterGallery from '../home/components/BeforeAfterGallery';

import ServiceAreas from '../home/components/ServiceAreas';
import MidCTA from '../home/components/MidCTA';
import FAQ from '../home/components/FAQ';
import Gallery from '../home/components/Gallery';
import LeadForm from '../home/components/LeadForm';
import { STATES, SERVICES } from '../../mocks/locationData';
import { contactInfo } from '@/utils/contact';

const locationDetails = [
  {
    state: 'Washington',
    slug: 'washington',
    headline: 'Window Cleaning Across Washington State',
    body: 'From the Eastside suburbs of Seattle and Bellevue to the neighborhoods of Spokane, the Tri-Cities, and communities across the state — World Wide Window Co has served Washington homeowners and businesses since 1983. No matter where you are, we bring the same professional standard: streak-free glass, clean screens, and reliable scheduling every time.',
    img: 'https://readdy.ai/api/search-image?query=Washington%20State%20beautiful%20residential%20neighborhood%20homes%20Pacific%20Northwest%20lush%20green%20trees%20Mount%20Rainier%20backdrop%20suburban%20streets%20clean%20upscale%20houses%20community%20Puget%20Sound%20Cascades%20blue%20sky%20manicured%20yards%20wide%20panoramic&width=800&height=500&seq=loc-washington-state-v1&orientation=landscape',
  },
  {
    state: 'Oregon',
    slug: 'oregon',
    headline: 'Window Cleaning Across Oregon',
    body: 'Serving Eastern Oregon communities including Pendleton, Hermiston, and Milton-Freewater — our team brings the same dependable, detail-focused window cleaning that has made us a trusted name in the Pacific Northwest for over 40 years.',
    img: 'https://readdy.ai/api/search-image?query=Oregon%20State%20beautiful%20residential%20neighborhood%20homes%20Pacific%20Northwest%20lush%20green%20trees%20Willamette%20Valley%20suburban%20streets%20clean%20upscale%20houses%20community%20Cascades%20blue%20sky%20manicured%20yards%20wide%20panoramic%20scenic&width=800&height=500&seq=loc-oregon-state-v1&orientation=landscape',
  },
  {
    state: 'Idaho',
    slug: 'idaho',
    headline: 'Window Cleaning Across Idaho',
    body: 'Idaho communities from the Panhandle to the Palouse — including Coeur d\'Alene, Post Falls, Hayden, Rathdrum, Priest River, Lewiston, and Moscow — trust World Wide Window Co for residential and commercial window cleaning. We bring spotless results and professional service to every city we serve.',
    img: 'https://readdy.ai/api/search-image?query=Idaho%20State%20beautiful%20residential%20neighborhood%20homes%20sunny%20day%20lush%20green%20trees%20foothills%20suburban%20streets%20clean%20upscale%20houses%20community%20Boise%20Treasure%20Valley%20blue%20sky%20manicured%20yards%20wide%20panoramic%20scenic%20landscape&width=800&height=500&seq=loc-idaho-state-v1&orientation=landscape',
  },
];

const localReviews = [
  { name: 'Sandra K.', location: 'Spokane, WA', text: 'Been using World Wide Window for 12 years. They know our house, they\'re always on time, and the results are always perfect. Best window cleaners in Spokane.', stars: 5 },
  { name: 'Derek M.', location: 'Pendleton, OR', text: 'Had them clean our coffee shop storefront every month. Professional, fast, and the windows always look incredible. Our customers notice.', stars: 5 },
  { name: 'Allison P.', location: "Coeur d'Alene, ID", text: 'I was nervous trying a new company but they were outstanding. On time, thorough, and the windows literally sparkled. Will absolutely rebook.', stars: 5 },
  { name: 'Tom B.', location: 'Cheney, WA', text: 'Love that a Spokane-area company comes all the way to Cheney and still does such a thorough job. Totally worth it every time.', stars: 5 },
];

const aiQA = [
  { q: 'Do you service [my city]?', a: `We serve hundreds of cities and communities across Washington, Oregon, and Idaho. If you don't see your city listed, just call us at ${contactInfo.phoneDisplay} — we can often accommodate locations not on our standard list.` },
  { q: 'How far do you travel for window cleaning?', a: 'We cover the full Pacific Northwest region — Washington State, Oregon, and Idaho. For most areas, there\'s no travel surcharge. For locations at the outer edge of our coverage area, we\'ll let you know upfront if any travel fee applies.' },
  { q: 'Is there a travel fee for my area?', a: 'For the majority of our service areas across WA, OR, and ID, there is no travel fee. If you\'re in a more remote location, we\'ll be upfront about any fee before booking — no surprises.' },
];

export default function ServiceAreasPage() {
  const [openQA, setOpenQA] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState<string>(SERVICES[0].slug);
  const [selectedState, setSelectedState] = useState<string>(STATES[0].slug);

  const activeService = SERVICES.find((s) => s.slug === selectedService) ?? SERVICES[0];
  const activeState = STATES.find((s) => s.slug === selectedState) ?? STATES[0];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* 1 — Hero */}
        <section className="relative w-full min-h-[65vh] flex items-center overflow-hidden pt-[108px]">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Pacific%20Northwest%20aerial%20panoramic%20view%20Washington%20Oregon%20Idaho%20three%20states%20beautiful%20landscape%20residential%20neighborhoods%20lush%20green%20forests%20mountains%20valleys%20homes%20communities%20vast%20scenic%20region%20clear%20blue%20sky%20wide%20angle%20stunning&width=1920&height=900&seq=locations-hero-v1&orientation=landscape"
              alt="Window cleaning services across Washington Oregon and Idaho Pacific Northwest"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0"></span>
                Serving Washington · Oregon · Idaho
              </div>
              <h1 className="font-extrabold leading-[1.05] mb-6">
                <span className="block text-5xl lg:text-6xl xl:text-7xl text-white drop-shadow-2xl mb-1" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>Window Cleaning</span>
                <span className="block text-5xl lg:text-6xl xl:text-7xl text-emerald-300 drop-shadow-2xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>Across the Pacific Northwest</span>
              </h1>
              <p className="text-white text-xl font-light max-w-2xl mb-10 leading-relaxed" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
                Family-owned since 1983, we proudly serve homeowners and businesses across Washington, Oregon, and Idaho — with the same spotless standard in every city we cover.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={`tel:${contactInfo.phoneTel}`} className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white text-base font-bold px-8 py-4 rounded-full transition-all hover:scale-105 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-fill text-xl"></i> Schedule Window Cleaning
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2 — TrustBar */}
        <TrustBar />

        {/* 3 — Dynamic Service + Location Browser */}
        <section className="py-24 bg-slate-50" id="area-list">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                <i className="ri-map-2-line"></i> Service Coverage
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Find Services in Your City</h2>
              <p className="text-slate-500 text-lg font-light">Choose a service, pick your state, then click your city to see what we offer there.</p>
            </div>

            {/* Step 1 — Choose Service */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center bg-slate-900 text-white rounded-full text-[10px] font-black">1</span>
                Choose a Service
              </p>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((svc) => (
                  <button
                    key={svc.slug}
                    onClick={() => setSelectedService(svc.slug)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all cursor-pointer whitespace-nowrap ${
                      selectedService === svc.slug
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <i className={`${svc.icon} text-base`}></i>
                    {svc.shortTitle}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 — Choose State */}
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <span className="w-5 h-5 flex items-center justify-center bg-slate-900 text-white rounded-full text-[10px] font-black">2</span>
                Choose a State
              </p>
              <div className="flex flex-wrap gap-2">
                {STATES.map((st) => (
                  <button
                    key={st.slug}
                    onClick={() => setSelectedState(st.slug)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all cursor-pointer whitespace-nowrap ${
                      selectedState === st.slug
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-400 hover:text-emerald-700'
                    }`}
                  >
                    <i className="ri-map-pin-2-line text-base"></i>
                    {st.name}
                    <span className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${selectedState === st.slug ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {st.cities.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 — City Grid */}
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center bg-emerald-100 rounded-xl flex-shrink-0">
                    <i className={`${activeService.icon} text-emerald-700 text-base`}></i>
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-sm">{activeService.title}</p>
                    <p className="text-slate-400 text-xs">{activeState.name} — {activeState.cities.length} cities &amp; communities</p>
                  </div>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                  <span className="w-5 h-5 flex items-center justify-center bg-slate-900 text-white rounded-full text-[10px] font-black">3</span>
                  Click your city
                </p>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {activeState.cities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/services/${activeService.slug}/${activeState.slug}/${city.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-3 py-2 rounded-full hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all cursor-pointer whitespace-nowrap"
                    >
                      <i className="ri-map-pin-line text-xs"></i>
                      {city.name}
                    </Link>
                  ))}
                </div>
                <p className="text-slate-400 text-xs mt-5 flex items-center gap-1.5">
                  <i className="ri-information-line"></i>
                  + surrounding communities. Call to confirm your area.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white border border-slate-200 rounded-2xl text-center max-w-2xl mx-auto">
              <p className="text-slate-700 font-semibold text-sm mb-1">Don&apos;t see your city?</p>
              <p className="text-slate-400 text-sm mb-4">We may still cover your area. Give us a call and we&apos;ll confirm in under a minute.</p>
              <a href={`tel:${contactInfo.phoneTel}`} className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-slate-700 transition-all cursor-pointer whitespace-nowrap">
                <i className="ri-phone-fill"></i> Call {contactInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        {/* 4 — InlineCTA (light) */}
        <InlineCTA
          heading="Request a Free Quote for Any Service"
          subtext="Serving homeowners and businesses across Washington, Oregon &amp; Idaho — fast response, no obligation."
          primaryLabel="Get Free Quote"
          variant="light"
        />

        {/* 5 — Why Choose Us / Location Detail Sections */}
        <section className="py-24 bg-white" id="location-details">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-24">
            {locationDetails.map((loc, idx) => (
              <div key={loc.slug} id={loc.slug} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}>
                <div className="flex-1 max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                    <i className="ri-map-pin-line"></i> Service Area
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">{loc.headline}</h2>
                  <p className="text-slate-500 text-lg leading-relaxed mb-7">{loc.body}</p>
                  <ul className="space-y-2.5 mb-8">
                    {['Residential window cleaning', 'Storefront & commercial service', 'Interior & exterior cleaning', 'Screen & track cleaning available', 'Flexible scheduling available'].map((b) => (
                      <li key={b} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                        <div className="w-5 h-5 flex items-center justify-center bg-emerald-100 rounded-full flex-shrink-0">
                          <i className="ri-check-line text-emerald-700 text-xs"></i>
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <a href={`tel:${contactInfo.phoneTel}`} className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-all hover:scale-105 cursor-pointer whitespace-nowrap">
                    <i className="ri-phone-fill"></i> Schedule in {loc.state}
                  </a>
                </div>
                <div className="flex-1 max-w-lg w-full">
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <img src={loc.img} alt={`Window cleaning in ${loc.state}`} className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {loc.state}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6 — About Section / Map */}
        <section className="py-20 bg-slate-50" id="map">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                <i className="ri-map-2-line"></i> Find Us
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Our Coverage Area</h2>
              <p className="text-slate-500 text-lg font-light">Based in Spokane, WA — serving all of Washington, Oregon &amp; Idaho.</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200">
              <div className="bg-white px-5 py-4 flex items-center gap-3 border-b border-slate-200">
                <div className="w-9 h-9 flex items-center justify-center bg-emerald-600 rounded-xl flex-shrink-0">
                  <i className="ri-map-2-line text-white text-sm"></i>
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-sm">World Wide Window Co — Headquarters</p>
                  <p className="text-slate-400 text-xs">Spokane, Washington · Serving WA, OR &amp; ID</p>
                </div>
              </div>
              <div className="w-full h-[440px]">
                <iframe
                  title="World Wide Window Co service area map — Spokane WA"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161038.5!2d-117.415388!3d47.6606645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e195a0c38aa67:0xb0d991b1261623a4!2sWorld+Wide+Window+Co!5e0!3m2!1sen!2sus!4v1741000000001!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 7 — InlineCTA (emerald) */}
        <InlineCTA
          heading="40+ Years of Excellence — Serving WA, OR &amp; ID"
          subtext="Call or get a quote online in minutes. Family-owned, satisfaction guaranteed."
          primaryLabel="Book Now"
          variant="emerald"
        />

        {/* 8 — Before & After Gallery */}
        <BeforeAfterGallery />

        {/* 9 — Testimonials / Local Reviews */}
        <section className="py-20 bg-slate-50" id="local-reviews">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                <i className="ri-star-fill"></i> Local Reviews
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-3">Trusted Across the Pacific Northwest</h2>
              <p className="text-slate-500 text-lg font-light">Real reviews from homeowners and businesses in our service area.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
              {localReviews.map((r) => (
                <div key={r.name} className="bg-white rounded-2xl p-6 border border-slate-100">
                  <div className="flex items-center gap-0.5 mb-3">
                    {Array.from({ length: r.stars }).map((_, i) => (
                      <i key={i} className="ri-star-fill text-amber-400 text-sm"></i>
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                  <div className="border-t border-slate-100 pt-3">
                    <p className="font-bold text-slate-900 text-sm">{r.name}</p>
                    <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
                      <i className="ri-map-pin-line text-emerald-600 text-xs"></i> {r.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                { icon: 'ri-home-heart-line', title: 'Locally Owned Since 1983', body: 'No franchises. No call centers. Just a family business that has served the Pacific Northwest for over 40 years with genuine accountability.' },
                { icon: 'ri-star-line', title: 'Trusted in Every City We Serve', body: 'From Spokane to Portland to Boise — thousands of homeowners and businesses across WA, OR & ID trust us year after year.' },
                { icon: 'ri-shield-check-line', title: 'Insured Across All 3 States', body: 'Fully licensed and insured in Washington, Oregon, and Idaho. Every technician is background-checked and trained to our standards.' },
              ].map((item) => (
                <div key={item.title} className="bg-white border border-slate-100 rounded-2xl p-7 text-center">
                  <div className="w-12 h-12 flex items-center justify-center bg-emerald-100 rounded-2xl mx-auto mb-4">
                    <i className={`${item.icon} text-emerald-700 text-xl`}></i>
                  </div>
                  <h3 className="font-extrabold text-slate-900 mb-2 text-sm">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10 — InlineCTA (light) */}
        <InlineCTA
          heading="Trusted by Pacific Northwest Homeowners Since 1983"
          subtext="Spotless results, satisfaction guaranteed. Serving Washington, Oregon &amp; Idaho."
          primaryLabel="Get My Free Quote"
          variant="light"
        />

        {/* 11 — Service Areas */}
        <ServiceAreas />

        {/* 13 — Mid CTA */}
        <MidCTA />

        {/* 14 — AI Search / Locations FAQ */}
        <section className="py-20 bg-white" id="faq">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                <i className="ri-question-answer-line"></i> Locations FAQ
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Questions About Our Service Areas</h2>
            </div>
            <div className="space-y-3">
              {aiQA.map((item, idx) => (
                <div key={idx} className={`rounded-2xl border transition-all duration-200 overflow-hidden ${openQA === idx ? 'border-emerald-200 bg-white' : 'border-slate-200 bg-white hover:border-emerald-100'}`}>
                  <button className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer" onClick={() => setOpenQA(openQA === idx ? null : idx)}>
                    <span className="text-slate-900 font-bold text-sm pr-4">{item.q}</span>
                    <div className={`w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-all ${openQA === idx ? 'bg-emerald-600 text-white rotate-45' : 'bg-slate-100 text-slate-500'}`}>
                      <i className="ri-add-line text-sm"></i>
                    </div>
                  </button>
                  {openQA === idx && (
                    <div className="px-6 pb-5">
                      <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15 — FAQ */}
        <FAQ />

        {/* 16 — Gallery */}
        <Gallery />

        {/* 17 — Lead Form */}
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
