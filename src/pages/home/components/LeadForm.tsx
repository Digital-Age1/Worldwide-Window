import { useState, useRef, useEffect, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactInfo } from '@/utils/contact';
import {
  getThankYouPageUrl,
  shouldRedirectToThankYou,
  trackFormSubmit,
  trackPhoneClick,
} from '@/utils/tracking';
import { QUOTE_FORM_NAME, submitNetlifyForm } from '@/utils/netlifyForms';

const services = [
  'Residential Window Cleaning',
  'Commercial Window Cleaning',
  'High-Rise Window Cleaning',
  'Gutter Cleaning',
  'Hard Water Stain Removal',
  'Other / Not Sure',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function LeadForm() {
  const [status, setStatus] = useState<Status>('idle');
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    try {
      await submitNetlifyForm(form);
      trackFormSubmit({ form_id: 'lead_form', form_location: 'home' });
      form.reset();
      if (shouldRedirectToThankYou()) {
        const thankYouUrl = getThankYouPageUrl();
        if (/^https?:\/\//i.test(thankYouUrl)) {
          window.location.assign(thankYouUrl);
        } else {
          navigate(thankYouUrl);
        }
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-white" id="quote">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-100">
          {/* Form side */}
          <div className="bg-white p-10 lg:p-14" ref={ref}>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <i className="ri-file-list-3-line"></i> Free Quote
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
              Get Your Free Quote
            </h2>
            <p className="text-slate-500 text-base mb-7 leading-relaxed">
              Serving homeowners across Washington, Oregon &amp; Idaho.
            </p>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-5">
                  <i className="ri-checkbox-circle-fill text-blue-600 text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Sent!</h3>
                <p className="text-slate-500 text-base">
                  We&apos;ll be in touch soon. For immediate assistance, call{' '}
                  <a
                    href={`tel:${contactInfo.phoneTel}`}
                    onClick={() => trackPhoneClick({ location: 'lead_form_success' })}
                    className="text-blue-600 font-semibold"
                  >
                    {contactInfo.phoneDisplay}
                  </a>.
                </p>
              </div>
            ) : (
              <form
                name={QUOTE_FORM_NAME}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value={QUOTE_FORM_NAME} />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human:
                    <input name="bot-field" />
                  </label>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name *</label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="Jane"
                      className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name *</label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@email.com"
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="(509) 555-0000"
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Address</label>
                  <input
                    name="serviceAddress"
                    type="text"
                    placeholder="Your home address (city, state)"
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed *</label>
                  <select
                    name="serviceNeeded"
                    required
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all bg-white cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Additional Notes</label>
                  <textarea
                    name="notes"
                    rows={3}
                    maxLength={500}
                    placeholder="Tell us about your home — number of windows, stories, special requirements..."
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold text-base py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  {status === 'submitting' ? (
                    <><i className="ri-loader-4-line animate-spin"></i> Sending...</>
                  ) : (
                    <><i className="ri-send-plane-line"></i> Request My Free Quote</>
                  )}
                </button>
                <p className="text-slate-400 text-xs text-center">No spam, ever.</p>
              </form>
            )}
          </div>

          {/* Trust / image side */}
          <div className="relative hidden lg:flex flex-col justify-center bg-slate-900 p-14">
            <img
              src="/images/site/leadform-side-resi-v2.jpg"
              alt="Premium residential window cleaning results"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <div className="text-blue-400 font-black text-6xl leading-none mb-2">40+</div>
              <p className="text-white text-xl font-bold mb-1">Years of Excellence</p>
              <p className="text-slate-400 text-sm mb-10">Family-owned and trusted since 1983</p>

              <div className="space-y-5">
                {[
                  { icon: 'ri-checkbox-circle-fill', text: 'Free, no-obligation quotes' },
                  { icon: 'ri-shield-check-fill', text: '100% satisfaction guarantee' },
                  { icon: 'ri-home-heart-fill', text: 'Family-owned since 1983' },
                  { icon: 'ri-refresh-fill', text: 'Recurring plans with discounts' },
                  { icon: 'ri-map-2-line', text: 'Serving WA, OR &amp; ID statewide' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-blue-400 text-lg`}></i>
                    </div>
                    <span className="text-white/85 text-sm font-medium" dangerouslySetInnerHTML={{ __html: item.text }} />
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-slate-400 text-sm mb-3">Prefer to call?</p>
                <a
                  href={`tel:${contactInfo.phoneTel}`}
                  onClick={() => trackPhoneClick({ location: 'lead_form_side_panel' })}
                  className="inline-flex items-center gap-2 text-white font-bold text-xl hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <i className="ri-phone-fill text-blue-400"></i> {contactInfo.phoneDisplay}
                </a>
                <p className="text-slate-500 text-xs mt-1">{contactInfo.businessHoursDisplay} · WA · OR · ID</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
