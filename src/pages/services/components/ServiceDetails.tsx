import { contactInfo } from '@/utils/contact';
import { trackPhoneClick, trackServiceCtaClick } from '@/utils/tracking';

const details = [
  {
    id: 'detail-residential',
    icon: 'ri-home-4-line',
    headline: 'Residential Window Cleaning in Washington, Oregon & Idaho',
    subhead: 'Your home deserves crystal-clear windows — inside and out.',
    body: 'We\'ve been cleaning residential windows across the Pacific Northwest since 1983.',
    bullets: [
      'Full interior & exterior glass cleaned',
      'Screens removed, washed & re-installed',
      'Hard water stain treatment available',
      '100% satisfaction guarantee — we\'ll return if needed',
    ],
    img: '/images/site/detail-resi-v1.jpg',
    imgAlt: 'Residential window cleaning service Washington Oregon Idaho',
    flip: false,
  },
  {
    id: 'detail-commercial',
    icon: 'ri-store-2-line',
    headline: 'Commercial Window Cleaning for Storefronts & Low-Rise Buildings',
    subhead: 'Clean windows drive foot traffic. First impressions matter.',
    body: 'Dirty storefront windows cost you customers before they even walk through the door. Our commercial team handles retail shops, restaurants, professional offices, and low-rise commercial buildings throughout our service area. Recurring plans available for consistent, maintained results year-round.',
    bullets: [
      'Storefronts, retail & restaurant glass',
      'Office buildings & professional suites',
      'Monthly, quarterly & seasonal service plans',
    ],
    img: '/images/site/detail-commercial-v1.jpg',
    imgAlt: 'Commercial storefront window cleaning Pacific Northwest',
    flip: true,
  },
  {
    id: 'detail-interior-exterior',
    icon: 'ri-contrast-2-line',
    headline: 'Complete Interior & Exterior Window Cleaning',
    subhead: 'Both sides. No excuses. Unobstructed natural light.',
    body: 'A window cleaned on only one side still looks dirty — and you\'ll notice it the moment the sun hits it wrong. Our full interior and exterior clean covers every pane on both sides, squeegee finishing, and a lint-free final buff. The result is flawlessly clear glass that floods your home with natural light.',
    bullets: [
      'Both sides of every pane cleaned',
      'Professional squeegee & microfiber finish',
      'No streaks, smears, or missed spots',
      'Before & after walkthrough with every visit',
    ],
    img: '/images/site/detail-interior-v1.jpg',
    imgAlt: 'Interior and exterior window cleaning residential service',
    flip: false,
  },
  {
    id: 'detail-screens',
    icon: 'ri-grid-fill',
    headline: 'Screen Cleaning Available',
    subhead: 'Clean screens filter air better and look better. Ask us about adding screen cleaning to your service.',
    body: 'Window screens trap dust, pollen, and airborne debris — and a dirty screen dims the view even when the glass is clean. We carefully remove every screen, wash and rinse the mesh, wipe down the frame, and reinstall it properly. No bent frames, no missing hardware, and no upcharges when paired with a full window clean.',
    bullets: [
      'Safe removal & careful reinstallation',
      'Full mesh wash with fresh water rinse',
      'Frame edge wipe-down on every screen',
      'Available as part of your window service',
      'No bent frames, no damage — ever',
    ],
    img: '/images/site/detail-screens-v1.jpg',
    imgAlt: 'Window screen cleaning service residential',
    flip: true,
  },
  {
    id: 'detail-tracks',
    icon: 'ri-layout-bottom-line',
    headline: 'Track & Sill Cleaning Available',
    subhead: 'Grime in the tracks shows up even when glass looks clean.',
    body: 'Tracks and sills collect dirt, dead insects, mold, and moisture over time. Left uncleaned, they undermine the appearance of even the most polished glass. We clean and wipe every window track and sill on every visit — not as an add-on, but as a standard part of the job. Smooth, clean channels and a fully finished look from glass to frame.',
    bullets: [
      'Full debris and grime removal from all tracks',
      'Sill wipe-down inside and outside',
      'Mildew and mold residue treated',
      'Restores smooth window operation',
      'Available — ask us when booking',
    ],
    img: '/images/site/detail-tracks-v1.jpg',
    imgAlt: 'Window track and sill cleaning service residential home',
    flip: false,
  },
];

export default function ServiceDetails() {
  return (
    <section className="py-24 bg-white" id="service-details">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-28">
        {details.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className={`flex flex-col ${item.flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
          >
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                <i className={item.icon}></i> Service Detail
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 leading-tight">
                {item.headline}
              </h2>
              <p className="text-blue-700 font-semibold text-base mb-4">{item.subhead}</p>
              <p className="text-slate-500 text-lg leading-relaxed mb-6">{item.body}</p>
              <ul className="space-y-3 mb-8">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <div className="w-5 h-5 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0 mt-0.5">
                      <i className="ri-check-line text-blue-700 text-xs"></i>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${contactInfo.phoneTel}`}
                onClick={() => {
                  trackServiceCtaClick({ location: 'service_details', service_detail_id: item.id, action: 'phone_quote' });
                  trackPhoneClick({ location: 'service_details', service_detail_id: item.id });
                }}
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-bold text-sm px-6 py-3 rounded-full transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill"></i> Request a Free Quote
              </a>
            </div>

            <div className="flex-1 max-w-lg w-full">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.imgAlt}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
