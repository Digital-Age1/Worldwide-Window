import { Link } from 'react-router-dom';
import content from '@/content';

const stateAreas = (content.sections.serviceAreas?.states || [
  {
    state: 'Washington State',
    desc: 'Residential and commercial window cleaning across Washington — from Spokane and the Eastside to Seattle, Tacoma, and beyond.',
    cities: ['Spokane', 'Spokane Valley', 'Seattle', 'Tacoma', 'Bellevue', 'Kennewick', 'Richland', 'Pasco', 'Renton', 'Kent'],
  },
  {
    state: 'Oregon State',
    desc: 'Serving Eastern Oregon communities with the same professional standard we bring to every city we cover.',
    cities: ['Pendleton', 'Hermiston', 'Milton-Freewater'],
  },
  {
    state: 'Idaho State',
    desc: 'Serving Idaho communities from the Panhandle to the Palouse — professional window cleaning you can count on.',
    cities: ["Coeur d'Alene", 'Post Falls', 'Hayden', 'Rathdrum', 'Priest River', 'Lewiston', 'Moscow'],
  },
]).map(area => ({ ...area, flag: 'ri-map-pin-2-fill' }));

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="service-areas">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-blue-600/10 blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-map-pin-line"></i> Service Area
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Proudly Serving Washington, Oregon &amp; Idaho
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            We cover the entire Pacific Northwest tri-state region — from major cities to smaller communities.
            Wherever your home is, we bring the same premium standard.
          </p>
        </div>

        {/* 3-State Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {stateAreas.map((area) => (
            <div key={area.state} className="bg-white/5 border border-white/10 hover:bg-white/8 hover:border-blue-500/30 rounded-2xl p-7 transition-all duration-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-700 rounded-xl flex-shrink-0">
                  <i className={`${area.flag} text-white text-base`}></i>
                </div>
                <h3 className="text-white font-extrabold text-lg">{area.state}</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{area.desc}</p>
              <div className="flex flex-wrap gap-2">
                {area.cities.map((city) => (
                  <span key={city} className="text-xs font-medium text-slate-300 bg-white/8 border border-white/10 px-2.5 py-1 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map + CTA Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Google Map — Pacific Northwest region */}
          <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[380px]">
            <div className="bg-slate-800/60 px-5 py-3.5 flex items-center gap-3 border-b border-white/10">
              <div className="w-7 h-7 flex items-center justify-center bg-blue-700 rounded-lg flex-shrink-0">
                <i className="ri-map-2-line text-white text-sm"></i>
              </div>
              <div>
                <p className="text-white font-bold text-sm">World Wide Window Co</p>
                <p className="text-slate-400 text-xs">Washington · Oregon · Idaho</p>
              </div>
            </div>
            <div className="w-full h-[340px]">
              <iframe
                title="World Wide Window Co — Pacific Northwest Service Area (WA, OR, ID)"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413461!2d-120.5!3d46.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f8!3m3!1m2!1s0x549e195a0c38aa67:0xb0d991b1261623a4!2sWorld+Wide+Window+Co!5e0!3m2!1sen!2sus!4v1741000000002!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* CTA Panel */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-white font-extrabold text-2xl mb-4">Not Sure If We Cover Your Area?</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We serve homes throughout Washington, Oregon, and Idaho. Give us a call or send us a message — we&apos;ll quickly confirm coverage for your specific location.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: 'ri-home-heart-line', text: 'Primarily residential — homes are our specialty' },
                  { icon: 'ri-sparkling-2-line', text: 'Spotless results backed by our satisfaction guarantee' },
                  { icon: 'ri-map-2-line', text: 'Broad tri-state Pacific Northwest coverage' },
                  { icon: 'ri-calendar-2-line', text: 'Family-owned and operated since 1983' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-700/30 border border-blue-500/30 rounded-lg flex-shrink-0">
                      <i className={`${item.icon} text-blue-400 text-sm`}></i>
                    </div>
                    <span className="text-slate-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 bg-blue-700/20 border border-blue-500/30 rounded-2xl">
              <p className="text-blue-300 text-sm font-medium mb-3">
                <i className="ri-phone-line mr-1.5"></i>
                Ready to schedule? Contact us today.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+18002231286"
                  className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap text-sm"
                >
                  <i className="ri-phone-fill text-blue-700"></i> (800) 223-1286
                </a>
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-blue-400 text-white font-bold px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap text-sm"
                >
                  <i className="ri-map-2-line"></i> View Full Coverage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
