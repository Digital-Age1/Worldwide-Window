import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSeoForPath } from '@/utils/seo';

const setMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const setLink = (rel: string, href: string) => {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
};

const setJsonLd = (schemas: Record<string, unknown>[]) => {
  document.head.querySelectorAll('script[data-seo-jsonld="true"]').forEach((node) => node.remove());

  schemas.forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.seoJsonld = 'true';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(location.pathname);

    document.title = seo.title;
    setMeta('meta[name="description"]', 'name', 'description', seo.description);
    setMeta('meta[name="keywords"]', 'name', 'keywords', seo.keywords);
    setMeta('meta[name="robots"]', 'name', 'robots', seo.robots);

    setLink('canonical', seo.canonicalUrl);

    setMeta('meta[property="og:type"]', 'property', 'og:type', seo.ogType);
    setMeta('meta[property="og:title"]', 'property', 'og:title', seo.ogTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', seo.ogDescription);
    setMeta('meta[property="og:url"]', 'property', 'og:url', seo.canonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', seo.ogImage);

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', seo.twitterTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', seo.twitterDescription);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', seo.twitterImage);

    setJsonLd(seo.jsonLd);
  }, [location.pathname]);

  return null;
}
