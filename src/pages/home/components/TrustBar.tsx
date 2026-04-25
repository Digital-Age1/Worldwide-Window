import { useRef, useEffect } from 'react';
import content from '@/content';

const stats = (content.components.trustBar?.stats || [
  { number: '40+', label: 'Years', suffix: '' },
  { number: '500+', label: 'Happy', suffix: 'Customers' },
  { number: '100K+', label: 'Windows', suffix: 'Cleaned' },
  { number: '4.9', label: 'Star', suffix: 'Rating' },
]).map((stat, i) => {
  const icons = ['ri-home-heart-line', 'ri-map-2-line', 'ri-history-line', 'ri-star-line'];
  return {
    icon: icons[i % icons.length],
    value: stat.number + (stat.suffix ? ` ${stat.suffix}` : ''),
    label: stat.label,
    color: 'text-blue-700'
  };
});

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white border-b border-slate-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 px-8 py-5 ${
                i < stats.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-slate-100' : ''
              }`}
            >
              <div className="w-11 h-11 flex items-center justify-center bg-blue-50 rounded-xl flex-shrink-0">
                <i className={`${stat.icon} ${stat.color} text-2xl`}></i>
              </div>
              <div>
                <div className={`text-2xl font-extrabold ${stat.color} leading-none`}>{stat.value}</div>
                <div className="text-slate-500 text-xs font-medium mt-0.5">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
