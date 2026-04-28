import { useEffect } from 'react';
import {
  getGoogleSiteVerification,
  getGtmId,
  isGtmConfigured,
} from '@/utils/tracking';

const GTM_SCRIPT_ID = 'cms-gtm-script';
const SEARCH_CONSOLE_META_SELECTOR = 'meta[name="google-site-verification"][data-cms-tracking="true"]';

const setSearchConsoleVerification = (verification: string) => {
  const existing = document.head.querySelector<HTMLMetaElement>(SEARCH_CONSOLE_META_SELECTOR);

  if (!verification) {
    existing?.remove();
    return;
  }

  const tag = existing || document.createElement('meta');
  tag.setAttribute('name', 'google-site-verification');
  tag.setAttribute('content', verification);
  tag.dataset.cmsTracking = 'true';

  if (!existing) document.head.appendChild(tag);
};

const loadGtm = (gtmId: string) => {
  window.dataLayer = window.dataLayer || [];

  if (document.getElementById(GTM_SCRIPT_ID)) return;

  window.dataLayer.push({
    'gtm.start': Date.now(),
    event: 'gtm.js',
  });

  const script = document.createElement('script');
  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
  document.head.appendChild(script);
};

export default function Tracking() {
  useEffect(() => {
    setSearchConsoleVerification(getGoogleSiteVerification());

    if (isGtmConfigured()) {
      loadGtm(getGtmId());
    }
  }, []);

  return null;
}
