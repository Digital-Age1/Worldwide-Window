import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const readJson = (relativePath) => {
  const fullPath = path.join(rootDir, relativePath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
};

const normalizeSiteUrl = (value) => (value || 'https://worldwide-window.netlify.app').replace(/\/+$/, '');
const escapeXml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const seo = readJson('src/content/global/seo.json');
const servicesData = readJson('src/content/services/services.json');
const serviceAreasData = readJson('src/content/sections/service-areas.json');

const siteUrl = normalizeSiteUrl(seo.siteUrl);
const today = new Date().toISOString().slice(0, 10);
const routes = new Set(['/', '/about', '/services', '/contact', '/locations']);

const services = servicesData.services || [];
const states = serviceAreasData.routeStates || [];

for (const service of services) {
  if (!service.slug) continue;
  routes.add(`/services/${service.slug}`);

  for (const state of states) {
    if (!state.slug) continue;
    routes.add(`/services/${service.slug}/${state.slug}`);

    for (const city of state.cities || []) {
      if (!city.slug) continue;
      routes.add(`/services/${service.slug}/${state.slug}/${city.slug}`);
    }
  }
}

const urlEntries = [...routes]
  .sort((a, b) => a.localeCompare(b))
  .map((route) => {
    const loc = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;
    const priority = route === '/' ? '1.0' : route.split('/').length <= 3 ? '0.8' : '0.6';

    return [
      '  <url>',
      `    <loc>${escapeXml(loc)}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      '    <changefreq>weekly</changefreq>',
      `    <priority>${priority}</priority>`,
      '  </url>',
    ].join('\n');
  })
  .join('\n');

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  urlEntries,
  '</urlset>',
  '',
].join('\n');

const outPath = path.join(rootDir, 'public/sitemap.xml');
fs.writeFileSync(outPath, sitemap, 'utf8');
console.log(`Generated ${routes.size} sitemap routes at public/sitemap.xml`);
