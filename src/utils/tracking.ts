import trackingData from '@/content/global/tracking.json';

export interface TrackingSettings {
  gtmId?: string;
  googleSiteVerification?: string;
  formSuccessMode?: 'inline' | 'thank-you-page';
  thankYouPageUrl?: string;
  trackPhoneClick?: boolean;
  trackEmailClick?: boolean;
  trackQuoteButtonClick?: boolean;
  trackFormSubmit?: boolean;
  trackServiceCtaClick?: boolean;
  trackLocationCtaClick?: boolean;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const defaults: Required<TrackingSettings> = {
  gtmId: '',
  googleSiteVerification: '',
  formSuccessMode: 'inline',
  thankYouPageUrl: '/thank-you',
  trackPhoneClick: true,
  trackEmailClick: true,
  trackQuoteButtonClick: true,
  trackFormSubmit: true,
  trackServiceCtaClick: true,
  trackLocationCtaClick: true,
};

export const trackingSettings: Required<TrackingSettings> = {
  ...defaults,
  ...(trackingData as TrackingSettings),
};

const clean = (value?: string) => value?.trim() || '';

export const getGtmId = () => clean(trackingSettings.gtmId);

export const isGtmConfigured = () => /^GTM-[A-Z0-9]+$/i.test(getGtmId());

export const getGoogleSiteVerification = () => clean(trackingSettings.googleSiteVerification);

export const getThankYouPageUrl = () => {
  const value = clean(trackingSettings.thankYouPageUrl) || defaults.thankYouPageUrl;
  if (/^https?:\/\//i.test(value) || value.startsWith('/')) return value;
  return `/${value}`;
};

export const shouldRedirectToThankYou = () =>
  trackingSettings.formSuccessMode === 'thank-you-page';

export const trackEvent = (
  eventName: string,
  eventParams: Record<string, unknown> = {},
) => {
  if (!isGtmConfigured()) return;
  if (typeof window === 'undefined' || !window.dataLayer) return;

  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
};

const trackIfEnabled = (
  enabled: boolean,
  eventName: string,
  eventParams: Record<string, unknown> = {},
) => {
  if (!enabled) return;
  trackEvent(eventName, eventParams);
};

export const trackPhoneClick = (eventParams: Record<string, unknown> = {}) =>
  trackIfEnabled(trackingSettings.trackPhoneClick, 'phone_click', eventParams);

export const trackEmailClick = (eventParams: Record<string, unknown> = {}) =>
  trackIfEnabled(trackingSettings.trackEmailClick, 'email_click', eventParams);

export const trackQuoteButtonClick = (eventParams: Record<string, unknown> = {}) =>
  trackIfEnabled(trackingSettings.trackQuoteButtonClick, 'quote_button_click', eventParams);

export const trackFormSubmit = (eventParams: Record<string, unknown> = {}) =>
  trackIfEnabled(trackingSettings.trackFormSubmit, 'contact_form_submit', eventParams);

export const trackServiceCtaClick = (eventParams: Record<string, unknown> = {}) =>
  trackIfEnabled(trackingSettings.trackServiceCtaClick, 'service_cta_click', eventParams);

export const trackLocationCtaClick = (eventParams: Record<string, unknown> = {}) =>
  trackIfEnabled(trackingSettings.trackLocationCtaClick, 'location_cta_click', eventParams);
