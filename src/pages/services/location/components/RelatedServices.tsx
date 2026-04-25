import { Link } from 'react-router-dom';
import type { ServiceEntry } from '@/mocks/locationData';

interface RelatedServicesProps {
  services: ServiceEntry[];
  citySlug: string;
  stateSlug: string;
  cityName: string;
}

export default function RelatedServices({ services, citySlug, stateSlug, cityName }: RelatedServicesProps) {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            <i className="ri-links-line"></i> Also Available in {cityName}
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900">
            More Services We Offer in {cityName}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}/${stateSlug}/${citySlug}`}
              className="group flex items-start gap-4 bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 rounded-2xl p-5 transition-all duration-200 cursor-pointer"
            >
              <div className="w-11 h-11 flex items-center justify-center bg-blue-700 group-hover:bg-blue-800 rounded-xl flex-shrink-0 transition-colors">
                <i className={`${service.icon} text-white text-lg`}></i>
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-sm mb-1 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-blue-700 text-xs font-bold mt-2 group-hover:gap-2 transition-all">
                  Learn More <i className="ri-arrow-right-line"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
