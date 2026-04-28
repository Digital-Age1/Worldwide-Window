import content from '@/content';
import { getCityBySlug, getServiceBySlug, getStateBySlug } from '@/mocks/locationData';
import { contactInfo } from '@/utils/contact';

export interface SeoFields {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

export interface ResolvedSeo {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterImage: string;
  jsonLd: Record<string, unknown>[];
}

interface GlobalSeoContent extends SeoFields {
  defaultTitle?: string;
  metaDescription?: string;
  siteUrl?: string;
}

const globalSeo = content.global.seo as GlobalSeoContent;
const DEFAULT_SITE_URL = 'https://worldwide-window.netlify.app';
const DEFAULT_DESCRIPTION =
  "Professional window cleaning services across Washington, Oregon, and Idaho. Family-owned since 1983.";

const clean = (value?: string) => value?.trim() || undefined;

export const getSiteUrl = () => {
  const siteUrl = clean(globalSeo.siteUrl) || DEFAULT_SITE_URL;
  return siteUrl.replace(/\/+$/, '');
};

export const canonicalForPath = (pathname: string, customCanonical?: string) => {
  const custom = clean(customCanonical);
  if (custom) return custom;
  const path = pathname === '/' ? '/' : `/${pathname.replace(/^\/+|\/+$/g, '')}`;
  return `${getSiteUrl()}${path}`;
};

const getDefaultSeo = (pathname: string): ResolvedSeo => {
  const title = clean(globalSeo.defaultTitle) || 'Worldwide Window';
  const description = clean(globalSeo.metaDescription) || DEFAULT_DESCRIPTION;
  const image = clean(globalSeo.ogImage) || clean(globalSeo.twitterImage) || '';

  return {
    title,
    description,
    keywords: clean(globalSeo.keywords) || '',
    canonicalUrl: canonicalForPath(pathname),
    robots: clean(globalSeo.robots) || 'index,follow',
    ogTitle: clean(globalSeo.ogTitle) || title,
    ogDescription: clean(globalSeo.ogDescription) || description,
    ogImage: image,
    ogType: clean(globalSeo.ogType) || 'website',
    twitterTitle: clean(globalSeo.twitterTitle) || clean(globalSeo.ogTitle) || title,
    twitterDescription: clean(globalSeo.twitterDescription) || clean(globalSeo.ogDescription) || description,
    twitterImage: clean(globalSeo.twitterImage) || image,
    jsonLd: [createLocalBusinessSchema()],
  };
};

const mergeSeo = (base: ResolvedSeo, override?: SeoFields, pathname?: string): ResolvedSeo => {
  if (!override) return base;

  const title = clean(override.title) || base.title;
  const description = clean(override.description) || base.description;
  const ogTitle = clean(override.ogTitle) || title;
  const ogDescription = clean(override.ogDescription) || description;
  const ogImage = clean(override.ogImage) || base.ogImage;

  return {
    ...base,
    title,
    description,
    keywords: clean(override.keywords) || base.keywords,
    canonicalUrl: canonicalForPath(pathname || '/', override.canonicalUrl || base.canonicalUrl),
    robots: clean(override.robots) || base.robots,
    ogTitle,
    ogDescription,
    ogImage,
    ogType: clean(override.ogType) || base.ogType,
    twitterTitle: clean(override.twitterTitle) || ogTitle,
    twitterDescription: clean(override.twitterDescription) || ogDescription,
    twitterImage: clean(override.twitterImage) || clean(override.ogImage) || base.twitterImage || ogImage,
  };
};

const withBase = (pathname: string, fields: SeoFields, jsonLd: Record<string, unknown>[] = []) => {
  const base = getDefaultSeo(pathname);
  return {
    ...mergeSeo(base, fields, pathname),
    jsonLd: [...base.jsonLd, ...jsonLd],
  };
};

export const getSeoForPath = (pathname: string): ResolvedSeo => {
  const normalizedPath = pathname === '/' ? '/' : `/${pathname.replace(/^\/+|\/+$/g, '')}`;
  const segments = normalizedPath.split('/').filter(Boolean);

  if (normalizedPath === '/') {
    const homeSeo = (content.pages.home as { seo?: SeoFields }).seo;
    const resolved = withBase(normalizedPath, {
      title: 'Worldwide Window | Washington State Window Cleaning | Seattle, Bellevue, Tacoma',
      description: globalSeo.metaDescription || DEFAULT_DESCRIPTION,
    }, [createFaqSchema()]);
    return mergeSeo(resolved, homeSeo, normalizedPath);
  }

  if (normalizedPath === '/about') {
    return mergeSeo(withBase(normalizedPath, {
      title: 'About Worldwide Window | Worldwide Window',
      description: 'Learn about Worldwide Window, a family-owned window cleaning company serving Washington, Oregon, and Idaho since 1983.',
    }), (content.pages.about as { seo?: SeoFields }).seo, normalizedPath);
  }

  if (normalizedPath === '/services') {
    return mergeSeo(withBase(normalizedPath, {
      title: 'Window Cleaning Services | Worldwide Window',
      description: 'Explore residential, commercial, high-rise, and gutter cleaning services from Worldwide Window across Washington, Oregon, and Idaho.',
    }), (content.pages.services as { seo?: SeoFields }).seo, normalizedPath);
  }

  if (normalizedPath === '/contact') {
    return mergeSeo(withBase(normalizedPath, {
      title: 'Contact Worldwide Window | Free Window Cleaning Quote',
      description: 'Request a free quote from Worldwide Window for professional window cleaning across Washington, Oregon, and Idaho.',
    }), (content.pages.contact as { seo?: SeoFields }).seo, normalizedPath);
  }

  if (normalizedPath === '/thank-you') {
    return withBase(normalizedPath, {
      title: 'Thank You | Worldwide Window',
      description: 'Thank you for requesting a quote from Worldwide Window.',
      robots: 'noindex,follow',
    });
  }

  if (normalizedPath === '/locations') {
    const serviceAreasSeo = (content.sections.serviceAreas as { seo?: SeoFields }).seo;
    return mergeSeo(withBase(normalizedPath, {
      title: 'Window Cleaning Service Areas | Worldwide Window',
      description: 'Find Worldwide Window service areas across Washington, Oregon, and Idaho.',
    }), serviceAreasSeo, normalizedPath);
  }

  if (segments[0] === 'services' && segments[1]) {
    const service = getServiceBySlug(segments[1]);
    const state = segments[2] ? getStateBySlug(segments[2]) : undefined;
    const city = state && segments[3] ? getCityBySlug(state.slug, segments[3]) : undefined;

    if (service && state && city) {
      const citySeo = (city as { seo?: SeoFields }).seo;
      const title = `${service.title} in ${city.name}, ${state.name} | Worldwide Window`;
      const description = `Professional ${service.title.toLowerCase()} services in ${city.name}, ${state.name}. Family-owned window cleaning across Washington, Oregon, and Idaho.`;
      return mergeSeo(withBase(normalizedPath, {
        title,
        description,
        ogImage: service.img,
        twitterImage: service.img,
      }, [
        createBreadcrumbSchema([
          ['Home', '/'],
          ['Services', '/services'],
          [service.title, `/services/${service.slug}`],
          [state.name, `/services/${service.slug}/${state.slug}`],
          [city.name, normalizedPath],
        ]),
        createServiceSchema(service.title, description, normalizedPath, city.name, state.name),
      ]), citySeo, normalizedPath);
    }

    if (service && state) {
      const stateSeo = (state as { seo?: SeoFields }).seo;
      const title = `${service.title} in ${state.name} | Worldwide Window`;
      const description = `Professional ${service.title.toLowerCase()} services in ${state.name}. Family-owned window cleaning across Washington, Oregon, and Idaho.`;
      return mergeSeo(withBase(normalizedPath, {
        title,
        description,
        ogImage: service.img,
        twitterImage: service.img,
      }, [
        createBreadcrumbSchema([
          ['Home', '/'],
          ['Services', '/services'],
          [service.title, `/services/${service.slug}`],
          [state.name, normalizedPath],
        ]),
        createServiceSchema(service.title, description, normalizedPath, undefined, state.name),
      ]), stateSeo, normalizedPath);
    }

    if (service) {
      const serviceSeo = (service as { seo?: SeoFields }).seo;
      const description = service.description || `Professional ${service.title.toLowerCase()} services across Washington, Oregon, and Idaho.`;
      return mergeSeo(withBase(normalizedPath, {
        title: `${service.title} | Worldwide Window`,
        description,
        ogImage: service.img,
        twitterImage: service.img,
      }, [
        createBreadcrumbSchema([
          ['Home', '/'],
          ['Services', '/services'],
          [service.title, normalizedPath],
        ]),
        createServiceSchema(service.title, description, normalizedPath),
      ]), serviceSeo, normalizedPath);
    }
  }

  return withBase(normalizedPath, {
    title: 'Page Not Found | Worldwide Window',
    description: 'The requested Worldwide Window page could not be found.',
    robots: 'noindex,follow',
  });
};

const createLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: content.global.site.siteName || 'Worldwide Window',
  url: getSiteUrl(),
  telephone: contactInfo.phoneTel,
  email: contactInfo.email,
  foundingDate: String(content.global.site.yearEstablished || 1983),
  areaServed: (content.global.site.serviceStates || ['Washington', 'Oregon', 'Idaho']).map((state) => ({
    '@type': 'State',
    name: state,
  })),
  openingHours: 'Mo-Sa 07:00-18:00',
});

const createFaqSchema = () => {
  const faqs = content.sections.faqs?.faqs || [];
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
};

const createBreadcrumbSchema = (items: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name,
    item: canonicalForPath(path),
  })),
});

const createServiceSchema = (
  name: string,
  description: string,
  pathname: string,
  city?: string,
  state?: string,
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: canonicalForPath(pathname),
  provider: {
    '@type': 'LocalBusiness',
    name: content.global.site.siteName || 'Worldwide Window',
    telephone: contactInfo.phoneTel,
    email: contactInfo.email,
  },
  areaServed: {
    '@type': city ? 'City' : state ? 'State' : 'AdministrativeArea',
    name: [city, state].filter(Boolean).join(', ') || 'Washington, Oregon, and Idaho',
  },
});
