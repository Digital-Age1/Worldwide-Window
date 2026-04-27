import { Link } from 'react-router-dom';
import content from '@/content';
import { contactInfo } from '@/utils/contact';

const footerLinks = {
  Services: content.components.footer?.serviceLinks || [
    { label: 'Residential Cleaning', href: '/services/residential-window-cleaning' },
    { label: 'Gutter Cleaning', href: '/services/gutter-cleaning' },
    { label: 'Hard Water Removal', href: '/services' },
    { label: 'Commercial Cleaning', href: '/services/commercial-window-cleaning' },
  ],
  Locations: content.components.footer?.locationLinks || [
    { label: 'Washington State', href: '/locations' },
    { label: 'Oregon State', href: '/locations' },
    { label: 'Idaho State', href: '/locations' },
    { label: 'View All Areas', href: '/locations' },
  ],
  Company: content.components.footer?.companyLinks || [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Locations', href: '/locations' },
    { label: 'Free Quote', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-slate-100">
      {/* Top CTA bar */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">{content.components.footer?.ctaHeading || 'Ready for crystal-clear windows at your home?'}</p>
            <p className="text-blue-200 text-sm">{content.components.footer?.ctaSubtext || 'Serving Washington, Oregon & Idaho · 100% satisfaction guaranteed'}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${contactInfo.phoneTel}`}
              className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-fill"></i> {contactInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-5">
              <img
                src="https://static.readdy.ai/image/81164d3ba0f00c2a7e247a9f180c9b75/bc0259c4ade5599752e3a176166f5ac2.png"
                alt="World Wide Window Co — Family-owned residential window cleaning since 1983"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Family-owned window cleaning company since 1983. Serving homes, storefronts, and properties throughout Washington, Oregon, and Idaho with a 100% satisfaction guarantee.
            </p>
            <div className="space-y-3">
              <a href={`tel:${contactInfo.phoneTel}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-700 transition-colors text-sm cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-lg flex-shrink-0">
                  <i className="ri-phone-line text-blue-700 text-sm"></i>
                </div>
                {contactInfo.phoneDisplay}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-700 transition-colors text-sm cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-lg flex-shrink-0">
                  <i className="ri-mail-line text-blue-700 text-sm"></i>
                </div>
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-lg flex-shrink-0">
                  <i className="ri-map-pin-line text-blue-700 text-sm"></i>
                </div>
                {contactInfo.address}
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-50 rounded-lg flex-shrink-0">
                  <i className="ri-time-line text-blue-700 text-sm"></i>
                </div>
                {contactInfo.businessHours}
              </div>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-5">{group}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-slate-500 hover:text-blue-700 text-sm transition-colors cursor-pointer flex items-center gap-1.5 group"
                    >
                      <i className="ri-arrow-right-s-line text-slate-300 group-hover:text-blue-500 text-xs transition-colors"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap gap-3">
              {(content.components.footer?.trustBadges || [
                { icon: 'ri-home-heart-line', text: 'Family-Owned Since 1983' },
                { icon: 'ri-award-line', text: 'BBB Accredited' },
                { icon: 'ri-star-fill', text: 'Top-Rated Service' },
                { icon: 'ri-sparkling-2-line', text: 'Spotless Every Time' },
                { icon: 'ri-map-2-line', text: 'WA · OR · ID Coverage' },
              ]).map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
                  <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                    <i className={`${badge.icon} text-blue-700 text-xs`}></i>
                  </div>
                  <span className="text-slate-700 text-xs font-medium">{badge.text}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} World Wide Window Co. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
