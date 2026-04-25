import { useState, FormEvent } from 'react';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import content from '@/content';

const FORM_URL = 'https://readdy.ai/api/form/d7j7s9udvpcv9r19p9qg';

const services = [
  'Residential Window Cleaning',
  'Commercial Window Cleaning',
  'High-Rise Window Cleaning',
  'Gutter Cleaning',
  'Hard Water Stain Removal',
  'Other / Not Sure',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [status, setStatus] = useState<Status>('idle');
  const pageContent = content.pages.contact;
  const contactInfo = content.global.contact;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new URLSearchParams();
    new FormData(form).forEach((v, k) => data.append(k, v.toString()));
    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full min-h-[42vh] flex items-center overflow-hidden pt-[108px]">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=beautiful%20upscale%20residential%20home%20exterior%20sparkling%20crystal%20clear%20windows%20gleaming%20sunlight%20reflection%20immaculate%20two%20story%20house%20lush%20green%20Pacific%20Northwest%20garden%20manicured%20lawn%20warm%20golden%20afternoon%20light%20premium%20curb%20appeal%20pristine%20glass%20panels%20architectural%20beauty&width=1920&height=700&seq=contact-hero-bg-v1&orientation=landscape"
              alt="Contact World Wide Window Co for a free quote"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60"></div>
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse flex-shrink-0"></span>
                {pageContent.heroBadge || 'Free Quote — No Obligation'}
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-4 leading-tight" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}>
                {pageContent.heroTitle}
              </h1>
              <p className="text-white text-lg font-light leading-relaxed" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}>
                {pageContent.heroSubtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-2">{pageContent.pageTitle}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {pageContent.pageDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  <a href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 hover:border-blue-200 transition-all cursor-pointer group">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 group-hover:bg-blue-700 rounded-xl flex-shrink-0 transition-colors">
                      <i className="ri-phone-fill text-blue-700 group-hover:text-white text-xl transition-colors"></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">Call Us</p>
                      <p className="text-slate-900 font-bold text-base">{contactInfo.phone}</p>
                      <p className="text-slate-400 text-xs">Mon–Sat: 7:00 AM – 6:00 PM</p>
                    </div>
                  </a>

                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100 hover:border-blue-200 transition-all cursor-pointer group">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 group-hover:bg-blue-700 rounded-xl flex-shrink-0 transition-colors">
                      <i className="ri-mail-fill text-blue-700 group-hover:text-white text-xl transition-colors"></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">Email Us</p>
                      <p className="text-slate-900 font-bold text-sm">{contactInfo.email}</p>

                    </div>
                  </a>

                  <div className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-slate-100">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl flex-shrink-0">
                      <i className="ri-map-pin-fill text-blue-700 text-xl"></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-0.5">Service Area</p>
                      <p className="text-slate-900 font-bold text-sm">Washington · Oregon · Idaho</p>
                      <p className="text-slate-400 text-xs">Based in Spokane, WA</p>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="bg-blue-700 rounded-2xl p-6 text-white">
                  <h3 className="font-extrabold text-lg mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    {pageContent.trustBadgesList.map((item) => (
                      <li key={item.text} className="flex items-center gap-3">
                        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
                          <i className={`${item.icon} text-blue-300 text-base`}></i>
                        </div>
                        <span className="text-white/90 text-sm font-medium" dangerouslySetInnerHTML={{ __html: item.text }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  <i className="ri-file-list-3-line"></i> Request a Free Quote
                </div>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 leading-tight">
                  Tell Us About Your Project
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mb-6">
                      <i className="ri-checkbox-circle-fill text-blue-600 text-4xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Quote Request Sent!</h3>
                    <p className="text-slate-500 text-base max-w-md">
                      We&apos;ll be in touch soon. For immediate assistance, call{' '}
                      <a href="tel:+18002231286" className="text-blue-600 font-semibold">(800) 223-1286</a>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} data-readdy-form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">First Name *</label>
                        <input
                          name="first_name"
                          type="text"
                          required
                          placeholder="Jane"
                          className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name *</label>
                        <input
                          name="last_name"
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
                        name="address"
                        type="text"
                        placeholder="Your home or business address (city, state)"
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed *</label>
                      <select
                        name="service"
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
                        name="message"
                        rows={4}
                        maxLength={500}
                        placeholder="Tell us about your home or business — number of windows, stories, special requirements..."
                        className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      />
                    </div>

                    {status === 'error' && (
                      <p className="text-red-500 text-sm">Something went wrong. Please try again or call us directly at (800) 223-1286.</p>
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
                    <p className="text-slate-400 text-xs text-center">No spam, ever. We&apos;ll get back to you as soon as possible.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Our Service Area</h2>
              <p className="text-slate-500">Based in Spokane, WA — serving all of Washington, Oregon &amp; Idaho.</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200">
              <div className="w-full h-[400px]">
                <iframe
                  title="World Wide Window Co service area map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161038.5!2d-117.415388!3d47.6606645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549e195a0c38aa67:0xb0d991b1261623a4!2sWorld+Wide+Window+Co!5e0!3m2!1sen!2sus!4v1741000000001!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
