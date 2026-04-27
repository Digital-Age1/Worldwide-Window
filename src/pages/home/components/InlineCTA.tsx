import { Link } from 'react-router-dom';
import { contactInfo } from '@/utils/contact';

interface InlineCTAProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  phone?: string;
  variant?: 'emerald' | 'light';
}

export default function InlineCTA({
  heading = 'Ready for Spotless Windows at Your Home?',
  subtext = 'Get a free, no-obligation quote for residential window cleaning across WA, OR & ID.',
  primaryLabel = 'Get Free Quote',
  primaryHref = '/contact',
  phone,
  variant = 'light',
}: InlineCTAProps) {
  const displayPhone = phone || contactInfo.phoneDisplay;
  const digits = displayPhone.replace(/\D/g, '');
  const phoneHref = phone ? (digits.length === 10 ? `+1${digits}` : `+${digits}`) : contactInfo.phoneTel;

  if (variant === 'emerald') {
    return (
      <div className="bg-blue-700 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-extrabold text-2xl mb-1 leading-tight">{heading}</h3>
              <p className="text-blue-200 text-sm">{subtext}</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill"></i> {displayPhone}
              </a>
              <Link
                to={primaryHref}
                className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-arrow-right-circle-line"></i> {primaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-50 border-y border-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-xl flex-shrink-0">
              <i className="ri-sparkling-2-fill text-white text-xl"></i>
            </div>
            <div>
              <h3 className="text-slate-900 font-extrabold text-xl mb-0.5 leading-tight">{heading}</h3>
              <p className="text-slate-500 text-sm">{subtext}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${phoneHref}`}
              className="inline-flex items-center gap-2 border-2 border-blue-200 hover:border-blue-500 text-slate-700 hover:text-blue-700 font-bold text-sm px-5 py-2.5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
            >
              <i className="ri-phone-line text-blue-700"></i> {displayPhone}
            </a>
            <Link
              to={primaryHref}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-calendar-check-line"></i> {primaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
