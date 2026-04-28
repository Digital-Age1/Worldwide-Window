// Content loader utility for Decap CMS JSON files
import siteData from '../content/global/site.json';
import contactData from '../content/global/contact.json';
import seoData from '../content/global/seo.json';
import trackingData from '../content/global/tracking.json';
import headerData from '../content/components/header.json';
import footerData from '../content/components/footer.json';
import trustBarData from '../content/components/trust-bar.json';
import inlineCtaData from '../content/components/inline-cta.json';
import testimonialsData from '../content/components/testimonials.json';
import homeData from '../content/pages/home.json';
import aboutData from '../content/pages/about.json';
import servicesPageData from '../content/pages/services.json';
import contactPageData from '../content/pages/contact.json';
import faqsData from '../content/sections/faqs.json';
import serviceAreasData from '../content/sections/service-areas.json';
import processData from '../content/sections/process.json';
import galleryData from '../content/sections/gallery.json';
import servicesData from '../content/services/services.json';

export const content = {
  global: {
    site: siteData,
    contact: contactData,
    seo: seoData,
    tracking: trackingData,
  },
  components: {
    header: headerData,
    footer: footerData,
    trustBar: trustBarData,
    inlineCta: inlineCtaData,
    testimonials: testimonialsData,
  },
  pages: {
    home: homeData,
    about: aboutData,
    services: servicesPageData,
    contact: contactPageData,
  },
  sections: {
    faqs: faqsData,
    serviceAreas: serviceAreasData,
    process: processData,
    gallery: galleryData,
  },
  services: {
    list: servicesData,
  },
};

export default content;
