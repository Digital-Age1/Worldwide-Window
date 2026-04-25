import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const photos = [
  {
    src: 'https://static.readdy.ai/image/81164d3ba0f00c2a7e247a9f180c9b75/09f3b10f42f3fe6ec89cf32495987d80.jpeg',
    alt: 'Professional window cleaning technician at work on a residential home',
    label: 'Exterior Clean — Bellevue, WA',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=sparkling%20clean%20residential%20home%20windows%20exterior%20after%20professional%20window%20cleaning%20beautiful%20suburban%20house%20curb%20appeal%20bright%20reflection%20sunlight%20gleaming%20glass%20pristine&width=600&height=400&seq=gallery-resi-02&orientation=landscape',
    alt: 'Gleaming clean residential home windows after professional cleaning',
    label: 'Residential — Portland, OR',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=beautiful%20upscale%20two%20story%20residential%20home%20exterior%20pristine%20sparkling%20window%20cleaning%20result%20manicured%20lawn%20blue%20sky%20professional%20service%20Pacific%20Northwest%20house&width=600&height=400&seq=gallery-resi-03&orientation=landscape',
    alt: 'Upscale residential home exterior after window cleaning service',
    label: 'Residential — Coeur d\'Alene, ID',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=professional%20window%20cleaning%20ladder%20residential%20home%20exterior%20two%20story%20house%20worker%20cleaning%20windows%20sunlight%20Pacific%20Northwest%20neighborhood%20beautiful%20day&width=600&height=400&seq=gallery-resi-04&orientation=landscape',
    alt: 'Window cleaning technician working on a two-story residential home',
    label: 'Two-Story Home — Spokane, WA',
    span: 'col-span-1 row-span-2',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=gutter%20cleaning%20professional%20technician%20residential%20home%20Pacific%20Northwest%20beautiful%20house%20maintenance%20autumn%20leaves%20removal%20clean%20gutters%20curb%20appeal&width=600&height=400&seq=gallery-gutter-05&orientation=landscape',
    alt: 'Professional gutter cleaning service on residential home',
    label: 'Gutter Clean — Salem, OR',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://readdy.ai/api/search-image?query=hard%20water%20stain%20removal%20sparkling%20crystal%20clear%20window%20glass%20residential%20home%20beautiful%20result%20before%20after%20transformation%20professional%20cleaning%20Pacific%20Northwest%20suburb&width=600&height=400&seq=gallery-hardwater-06&orientation=landscape',
    alt: 'Hard water stain removal results on residential windows',
    label: 'Hard Water Removal — Boise, ID',
    span: 'col-span-1 row-span-1',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<typeof photos[0] | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('reveal');
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    if (lightbox) window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  return (
    <section className="py-24 bg-slate-50" id="gallery">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14" ref={ref}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-gallery-line"></i> Our Work
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
            Results That Speak for Themselves
          </h2>
          <p className="text-slate-500 text-lg font-light">
            Real jobs. Real results. Take a look at the difference Worldwide Window makes.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4" style={{ gridAutoRows: '220px' }}>
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`${photo.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
              onClick={() => setLightbox(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <p className="text-white font-bold text-sm">{photo.label}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <i className="ri-zoom-in-line text-white/80 text-xs"></i>
                  <span className="text-white/80 text-xs">View full size</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <i className="ri-service-line"></i> View All Services
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="flex items-center justify-between mt-3 px-1">
              <p className="text-white/80 text-sm">{lightbox.label}</p>
              <button
                onClick={() => setLightbox(null)}
                className="text-white/60 hover:text-white text-sm flex items-center gap-1.5 cursor-pointer"
              >
                <i className="ri-close-line"></i> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
