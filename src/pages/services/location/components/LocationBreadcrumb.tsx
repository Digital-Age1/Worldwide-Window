import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface LocationBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function LocationBreadcrumb({ items }: LocationBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          <li>
            <Link to="/" className="text-slate-400 hover:text-blue-700 transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <i className="ri-arrow-right-s-line text-slate-300 text-base"></i>
              {item.href ? (
                <Link to={item.href} className="text-slate-400 hover:text-blue-700 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-700 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
