import { Link } from 'react-router-dom';

const services = [
  {
    id: 'residential',
    icon: 'ri-home-4-line',
    title: 'Residential Window Cleaning',
    badge: 'Most Popular',
    img: 'https://readdy.ai/api/search-image?query=residential%20home%20window%20cleaning%20professional%20sparkling%20crystal%20clear%20glass%20beautiful%20upscale%20suburban%20house%20bright%20sunlight%20reflecting%20pristine%20windows%20curb%20appeal%20immaculate%20exterior%20Pacific%20Northwest%20lush%20green%20yard%20clear%20blue%20sky&width=700&height=480&seq=services-grid-resi-v1&orientation=landscape',
    desc: 'Crystal-clear windows for homes of every size. Full interior and exterior service with screens, sills, and tracks — all handled on every visit.',
    bullets: ['Interior & exterior glass', 'Screen removal & cleaning', 'Sill & track wipe-down', 'Hard water stain treatment', '100% satisfaction guarantee'],
  },
  {
    id: 'commercial',
    icon: 'ri-store-2-line',
    title: 'Commercial Window Cleaning',
    badge: 'Storefronts & Low-Rise',
    img: 'https://readdy.ai/api/search-image?query=storefront%20commercial%20window%20cleaning%20professional%20technician%20cleaning%20retail%20shop%20glass%20facade%20gleaming%20spotless%20clean%20storefront%20modern%20building%20bright%20sunny%20day%20urban%20business%20street%20reflective%20glass%20commercial%20low-rise%20building&width=700&height=480&seq=services-grid-commercial-v1&orientation=landscape',
    desc: 'Gleaming storefronts and office windows that make the right first impression.',
    bullets: ['Storefronts & retail glass', 'Office buildings & suites', 'Recurring maintenance plans', 'Commercial-grade equipment'],
  },
  {
    id: 'interior-exterior',
    icon: 'ri-contrast-2-line',
    title: 'Interior & Exterior Cleaning',
    badge: 'Complete Service',
    img: 'https://readdy.ai/api/search-image?query=window%20cleaning%20both%20sides%20interior%20exterior%20professional%20technician%20residential%20home%20inside%20outside%20glass%20cleaning%20detail%20work%20beautiful%20light%20streaming%20through%20spotless%20clean%20window%20interior%20room%20bright%20natural%20light&width=700&height=480&seq=services-grid-intext-v1&orientation=landscape',
    desc: 'Full inside-and-out window cleaning that lets in maximum natural light. Every pane cleaned from both sides for a completely flawless result.',
    bullets: ['Complete inside & outside clean', 'No streaks, no smears', 'All window types & sizes', 'Detail edging on every pane'],
  },
  {
    id: 'screens',
    icon: 'ri-grid-fill',
    title: 'Screen Cleaning Available',
    badge: 'Detail Service',
    img: 'https://readdy.ai/api/search-image?query=window%20screen%20cleaning%20removed%20washed%20clean%20detail%20work%20technician%20carefully%20cleaning%20window%20screen%20mesh%20fresh%20water%20rinsing%20residential%20home%20service%20professional%20careful%20attention%20to%20detail%20bright%20outdoor%20clean%20area&width=700&height=480&seq=services-grid-screens-v1&orientation=landscape',
    desc: 'Clean screens mean cleaner air and unobstructed views. Screen cleaning is available — we remove and re-install every screen with care.',
    bullets: ['Careful removal & re-install', 'Frame wipe-down included', 'No bent or damaged frames'],
  },
  {
    id: 'tracks',
    icon: 'ri-layout-bottom-line',
    title: 'Track Cleaning Available',
    badge: 'Always Included',
    img: 'https://readdy.ai/api/search-image?query=window%20track%20cleaning%20detail%20shot%20close%20up%20residential%20window%20track%20sill%20being%20carefully%20cleaned%20wiped%20down%20professional%20service%20detail%20work%20dirt%20grime%20removal%20sparkling%20clean%20sill%20bright%20residential%20interior%20modern%20home&width=700&height=480&seq=services-grid-tracks-v1&orientation=landscape',
    desc: 'Dirty tracks harbor mold, grime, and block smooth operation. We clean and wipe every track and sill on every visit — no extras, no shortcuts.',
    bullets: ['Track debris removal', 'Deep sill wipe-down', 'Smooth operation restored'],
  },
];

export { services };

const serviceRouteById: Record<string, string> = {
  residential: '/services/residential-window-cleaning',
  commercial: '/services/commercial-window-cleaning',
  'high-rise': '/services/high-rise-window-cleaning',
  'gutter-cleaning': '/services/gutter-cleaning',
  'interior-exterior': '/services/residential-window-cleaning',
  screens: '/services/residential-window-cleaning',
  tracks: '/services/residential-window-cleaning',
};

export default function ServicesGrid() {
  return (
    <section id="services-grid" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-service-line"></i> What We Do
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Every Service You Need. One Trusted Team.
          </h2>
          <p className="text-slate-500 text-lg font-light">
            From full residential cleans to commercial storefront maintenance — we handle it all with the same premium standard, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={serviceRouteById[service.id] || '/services'}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 cursor-pointer block"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.img}
                  alt={`${service.title} in Washington Oregon Idaho`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  {service.badge}
                </div>
                <div className="absolute bottom-3 left-3 w-9 h-9 flex items-center justify-center bg-blue-700 rounded-xl">
                  <i className={`${service.icon} text-white text-base`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-1.5 mb-5">
                  {service.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-slate-600 text-sm">
                      <i className="ri-check-line text-blue-600 text-base flex-shrink-0"></i>
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-blue-700 font-bold text-sm group-hover:gap-2.5 transition-all">
                  Learn More <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="tel:+18002231286"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white font-bold text-base px-10 py-4 rounded-full transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill"></i> Call for a Free Quote — (800) 223-1286
          </a>
        </div>
      </div>
    </section>
  );
}
