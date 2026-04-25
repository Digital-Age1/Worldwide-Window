import servicesContent from '@/content/services/services.json';
import serviceAreasContent from '@/content/sections/service-areas.json';

export interface CityEntry {
  name: string;
  slug: string;
}

export interface StateEntry {
  name: string;
  slug: string;
  abbr: string;
  cities: CityEntry[];
}

export interface ServiceEntry {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  badge: string;
  description: string;
  bullets: string[];
  img: string;
}

const FALLBACK_STATES: StateEntry[] = [
  {
    name: 'Washington',
    slug: 'washington',
    abbr: 'WA',
    cities: [
      { name: 'Spokane', slug: 'spokane' },
      { name: 'Spokane Valley', slug: 'spokane-valley' },
      { name: 'Liberty Lake', slug: 'liberty-lake' },
      { name: 'Deer Park', slug: 'deer-park' },
      { name: 'Loon Lake', slug: 'loon-lake' },
      { name: 'Colbert', slug: 'colbert' },
      { name: 'Cheney', slug: 'cheney' },
      { name: 'Spangle', slug: 'spangle' },
      { name: 'Chattaroy', slug: 'chattaroy' },
      { name: 'Newport', slug: 'newport' },
      { name: 'Pullman', slug: 'pullman' },
      { name: 'Colfax', slug: 'colfax' },
      { name: 'Clarkston', slug: 'clarkston' },
      { name: 'Walla Walla', slug: 'walla-walla' },
      { name: 'Ritzville', slug: 'ritzville' },
      { name: 'Moses Lake', slug: 'moses-lake' },
      { name: 'Ephrata', slug: 'ephrata' },
      { name: 'Ellensburg', slug: 'ellensburg' },
      { name: 'Pasco', slug: 'pasco' },
      { name: 'Richland', slug: 'richland' },
      { name: 'Kennewick', slug: 'kennewick' },
      { name: 'North Bend', slug: 'north-bend' },
      { name: 'Snoqualmie', slug: 'snoqualmie' },
      { name: 'Bellevue', slug: 'bellevue' },
      { name: 'Kirkland', slug: 'kirkland' },
      { name: 'Redmond', slug: 'redmond' },
      { name: 'Mercer Island', slug: 'mercer-island' },
      { name: 'Renton', slug: 'renton' },
      { name: 'Kent', slug: 'kent' },
      { name: 'Auburn', slug: 'auburn' },
      { name: 'Seattle', slug: 'seattle' },
      { name: 'Tacoma', slug: 'tacoma' },
      { name: 'Puyallup', slug: 'puyallup' },
      { name: 'Federal Way', slug: 'federal-way' },
      { name: 'Des Moines', slug: 'des-moines' },
      { name: 'Gig Harbor', slug: 'gig-harbor' },
      { name: 'Bothell', slug: 'bothell' },
      { name: 'Lynnwood', slug: 'lynnwood' },
      { name: 'Shoreline', slug: 'shoreline' },
      { name: 'Burien', slug: 'burien' },
    ],
  },
  {
    name: 'Idaho',
    slug: 'idaho',
    abbr: 'ID',
    cities: [
      { name: "Coeur d'Alene", slug: 'coeur-d-alene' },
      { name: 'Post Falls', slug: 'post-falls' },
      { name: 'Hayden', slug: 'hayden' },
      { name: 'Rathdrum', slug: 'rathdrum' },
      { name: 'Priest River', slug: 'priest-river' },
      { name: 'Lewiston', slug: 'lewiston' },
      { name: 'Moscow', slug: 'moscow' },
    ],
  },
  {
    name: 'Oregon',
    slug: 'oregon',
    abbr: 'OR',
    cities: [
      { name: 'Pendleton', slug: 'pendleton' },
      { name: 'Hermiston', slug: 'hermiston' },
      { name: 'Milton-Freewater', slug: 'milton-freewater' },
    ],
  },
];

const FALLBACK_SERVICES: ServiceEntry[] = [
  {
    id: 'residential',
    slug: 'residential-window-cleaning',
    title: 'Residential Window Cleaning',
    shortTitle: 'Residential',
    icon: 'ri-home-4-line',
    badge: 'Most Popular',
    img: 'https://readdy.ai/api/search-image?query=professional%20residential%20window%20cleaning%20sparkling%20crystal%20clear%20glass%20beautiful%20upscale%20suburban%20house%20bright%20sunlight%20reflecting%20pristine%20windows%20Pacific%20Northwest%20lush%20green%20yard%20clear%20blue%20sky%20immaculate%20exterior%20curb%20appeal&width=800&height=500&seq=svc-resi-hub-v1&orientation=landscape',
    description: 'Crystal-clear windows for homes of every size. Full interior and exterior service with screens, sills, and tracks — all handled on every visit.',
    bullets: ['Interior & exterior glass', 'Screen cleaning available', 'Track cleaning available', 'Hard water stain treatment', '100% satisfaction guarantee'],
  },
  {
    id: 'commercial',
    slug: 'commercial-window-cleaning',
    title: 'Commercial Window Cleaning',
    shortTitle: 'Commercial',
    icon: 'ri-store-2-line',
    badge: 'Storefronts & Low-Rise',
    img: 'https://readdy.ai/api/search-image?query=commercial%20storefront%20window%20cleaning%20professional%20technician%20gleaming%20spotless%20retail%20shop%20glass%20facade%20modern%20building%20bright%20sunny%20day%20urban%20business%20street%20reflective%20glass%20commercial%20building%20pristine%20clean&width=800&height=500&seq=svc-comm-hub-v1&orientation=landscape',
    description: 'Gleaming storefronts and office windows that make the right first impression. We work around your hours so your business never skips a beat.',
    bullets: ['Storefronts & retail glass', 'Office buildings & suites', 'Flexible off-hours scheduling', 'Recurring maintenance plans', 'Commercial-grade equipment'],
  },
  {
    id: 'high-rise',
    slug: 'high-rise-window-cleaning',
    title: 'High-Rise Window Cleaning',
    shortTitle: 'High-Rise',
    icon: 'ri-building-4-line',
    badge: 'Multi-Story',
    img: 'https://readdy.ai/api/search-image?query=high%20rise%20building%20window%20cleaning%20professional%20rope%20access%20technician%20multi%20story%20glass%20facade%20gleaming%20clean%20urban%20skyline%20modern%20architecture%20pristine%20windows%20commercial%20tower%20Pacific%20Northwest%20city&width=800&height=500&seq=svc-highrise-hub-v1&orientation=landscape',
    description: 'Safe, professional high-rise window cleaning for multi-story buildings. Our certified technicians use industry-leading equipment and safety protocols.',
    bullets: ['Multi-story & high-rise buildings', 'Certified rope access technicians', 'Full safety compliance', 'Water-fed pole systems', 'Scheduled maintenance programs'],
  },
  {
    id: 'gutter-cleaning',
    slug: 'gutter-cleaning',
    title: 'Gutter Cleaning',
    shortTitle: 'Gutters',
    icon: 'ri-water-flash-line',
    badge: 'Protect Your Home',
    img: 'https://readdy.ai/api/search-image?query=gutter%20cleaning%20professional%20technician%20removing%20leaves%20debris%20clogged%20gutters%20residential%20home%20exterior%20ladder%20service%20Pacific%20Northwest%20autumn%20leaves%20clean%20clear%20gutters%20downspout%20flowing%20water%20home%20protection&width=800&height=500&seq=svc-gutter-hub-v1&orientation=landscape',
    description: 'Clogged gutters cause water damage, foundation issues, and roof rot. Our thorough gutter cleaning keeps your home protected year-round.',
    bullets: ['Full debris removal', 'Downspout flush & check', 'Gutter inspection included', 'Prevent water damage', 'Seasonal maintenance plans'],
  },
];

export const STATES: StateEntry[] = (serviceAreasContent.routeStates as StateEntry[]) || FALLBACK_STATES;

export const SERVICES: ServiceEntry[] = (servicesContent.services as ServiceEntry[]) || FALLBACK_SERVICES;

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getStateBySlug(slug: string): StateEntry | undefined {
  return STATES.find((s) => s.slug === slug);
}

export function getCityBySlug(stateSlug: string, citySlug: string): CityEntry | undefined {
  const state = getStateBySlug(stateSlug);
  return state?.cities.find((c) => c.slug === citySlug);
}

export function getRelatedServices(currentSlug: string): ServiceEntry[] {
  return SERVICES.filter((s) => s.slug !== currentSlug).slice(0, 3);
}

export const CITY_INTROS: Record<string, Record<string, string>> = {
  'residential-window-cleaning': {
    spokane: 'Spokane homeowners know that the Pacific Northwest\'s mix of dusty summers and wet winters leaves windows looking dull fast. World Wide Window Co brings 40+ years of expertise right to your Spokane doorstep — delivering spotless, streak-free results every time.',
    'spokane-valley': 'Spokane Valley\'s growing neighborhoods deserve windows that shine as bright as the community itself. Our family-owned team has been serving Spokane Valley residents with reliable, detail-focused window cleaning for decades.',
    seattle: 'Seattle\'s famous drizzle and urban grime can make even the most beautiful home look tired. World Wide Window Co cuts through the Pacific Northwest buildup to deliver crystal-clear windows that let Seattle\'s stunning views shine through.',
    bellevue: 'Bellevue\'s upscale homes and stunning lake views deserve windows that are absolutely spotless. Our professional team delivers the premium residential window cleaning that Bellevue homeowners expect and trust.',
    tacoma: 'Tacoma\'s waterfront homes and historic neighborhoods deserve windows that reflect the city\'s pride. World Wide Window Co delivers thorough, professional window cleaning tailored to Tacoma\'s unique coastal environment.',
    'coeur-d-alene': 'Coeur d\'Alene\'s lakeside homes and mountain views are too beautiful to be obscured by dirty windows. Our team brings meticulous residential window cleaning to every home in the Coeur d\'Alene area.',
    pendleton: 'Pendleton homeowners trust World Wide Window Co for reliable, professional window cleaning that stands up to Eastern Oregon\'s dusty conditions and seasonal weather. We bring the same spotless standard to every home we serve.',
    default: 'World Wide Window Co has been serving Pacific Northwest homeowners since 1983. Our family-owned team brings the same meticulous attention to detail and commitment to spotless results to every home we clean — no matter the city.',
  },
  'commercial-window-cleaning': {
    spokane: 'Spokane businesses know that first impressions matter. World Wide Window Co keeps your storefront and office windows gleaming year-round, working around your schedule so your operations never miss a beat.',
    seattle: 'In Seattle\'s competitive business landscape, a spotless storefront sets you apart. World Wide Window Co delivers professional commercial window cleaning that keeps your Seattle business looking its absolute best.',
    bellevue: 'Bellevue\'s thriving business district demands a polished, professional appearance. Our commercial window cleaning team ensures your Bellevue storefront or office always makes the right impression.',
    'coeur-d-alene': 'Coeur d\'Alene\'s vibrant downtown and resort-area businesses rely on World Wide Window Co for consistent, professional commercial window cleaning that keeps their storefronts inviting and spotless.',
    pendleton: 'Pendleton businesses trust World Wide Window Co for dependable commercial window cleaning that keeps their storefronts clean and welcoming, no matter the season.',
    default: 'World Wide Window Co has been the trusted commercial window cleaning partner for Pacific Northwest businesses since 1983. We deliver consistent, professional results that keep your business looking its best.',
  },
  'high-rise-window-cleaning': {
    spokane: 'Spokane\'s growing skyline includes multi-story buildings that require specialized high-rise window cleaning expertise. World Wide Window Co\'s certified technicians deliver safe, thorough results at any height.',
    seattle: 'Seattle\'s iconic skyline demands expert high-rise window cleaning. Our certified rope-access technicians and water-fed pole systems deliver spotless results on Seattle\'s most demanding multi-story buildings.',
    bellevue: 'Bellevue\'s modern high-rise office towers and luxury condominiums require the highest level of professional window cleaning expertise. World Wide Window Co delivers.',
    default: 'World Wide Window Co\'s certified high-rise window cleaning technicians bring safety-first expertise and professional-grade equipment to multi-story buildings across Washington, Oregon, and Idaho.',
  },
  'solar-panel-cleaning': {
    spokane: 'Spokane\'s sunny summers are perfect for solar energy — but dusty conditions can rob your panels of up to 30% efficiency. World Wide Window Co\'s gentle, professional solar panel cleaning restores maximum output.',
    seattle: 'Seattle\'s rainy winters leave mineral deposits and grime on solar panels that reduce efficiency. World Wide Window Co uses deionized water and gentle techniques to restore your Seattle solar array to peak performance.',
    bellevue: 'Bellevue homeowners investing in solar deserve maximum return on that investment. World Wide Window Co\'s professional solar panel cleaning removes buildup and restores efficiency to your Bellevue solar array.',
    'coeur-d-alene': 'Coeur d\'Alene\'s beautiful seasons bring pollen, dust, and debris that accumulate on solar panels. Our professional cleaning restores your panels to peak efficiency.',
    default: 'World Wide Window Co\'s professional solar panel cleaning service removes efficiency-robbing buildup from residential and commercial arrays across the Pacific Northwest, restoring maximum energy output.',
  },
  'pressure-washing': {
    spokane: 'Spokane\'s dusty summers and wet winters leave driveways, siding, and patios looking worn. World Wide Window Co\'s professional pressure washing blasts away years of buildup for dramatic, lasting results.',
    seattle: 'Seattle\'s persistent moisture creates the perfect conditions for mold, mildew, and algae on home exteriors. World Wide Window Co\'s pressure washing service eliminates buildup and restores your Seattle home\'s curb appeal.',
    bellevue: 'Bellevue\'s premium homes deserve a premium exterior. World Wide Window Co\'s professional pressure washing removes grime, mold, and staining from driveways, siding, and patios — restoring your home\'s beauty.',
    'coeur-d-alene': 'Coeur d\'Alene\'s lakeside environment and seasonal weather can leave home exteriors looking tired. Our professional pressure washing restores your property\'s curb appeal.',
    pendleton: 'Pendleton\'s dry, dusty conditions make pressure washing essential for maintaining your home\'s exterior. World Wide Window Co delivers powerful, professional results.',
    default: 'World Wide Window Co\'s professional pressure washing service removes years of grime, mold, and buildup from driveways, siding, decks, and patios across Washington, Oregon, and Idaho.',
  },
  'gutter-cleaning': {
    spokane: 'Spokane\'s abundant trees and seasonal weather mean gutters fill up fast. World Wide Window Co\'s thorough gutter cleaning removes debris, flushes downspouts, and protects your Spokane home from water damage.',
    seattle: 'Seattle\'s famous rainfall makes clean, clear gutters absolutely essential. World Wide Window Co keeps your Seattle home\'s gutters flowing freely, preventing the water damage that Pacific Northwest rains can cause.',
    bellevue: 'Bellevue\'s tree-lined neighborhoods are beautiful — but they fill gutters fast. World Wide Window Co\'s professional gutter cleaning protects your Bellevue home from costly water damage.',
    'coeur-d-alene': 'Coeur d\'Alene\'s forested surroundings mean gutters need regular attention. World Wide Window Co\'s thorough gutter cleaning keeps your home protected from water damage year-round.',
    pendleton: 'Pendleton homeowners trust World Wide Window Co for reliable gutter cleaning that protects their homes from water damage and foundation issues.',
    default: 'World Wide Window Co\'s professional gutter cleaning service removes debris, flushes downspouts, and protects Pacific Northwest homes from the water damage that clogged gutters cause.',
  },
};

export function getCityIntro(serviceSlug: string, citySlug: string): string {
  const serviceIntros = CITY_INTROS[serviceSlug];
  if (!serviceIntros) return CITY_INTROS['residential-window-cleaning'].default;
  return serviceIntros[citySlug] || serviceIntros.default;
}
