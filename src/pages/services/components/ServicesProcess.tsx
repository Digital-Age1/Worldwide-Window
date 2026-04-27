import { contactInfo } from '@/utils/contact';

const steps = [
  {
    step: '01',
    icon: 'ri-file-list-3-line',
    title: 'Request Your Free Quote',
    body: `Call us at ${contactInfo.phoneDisplay} or fill out a quick request. Tell us your address, number of windows, and any special needs — we'll give you a clear, honest quote with no hidden fees.`,
  },
  {
    step: '02',
    icon: 'ri-calendar-check-line',
    title: 'Schedule Your Service',
    body: 'Pick a date and time that works for you. We offer morning, afternoon, and flexible scheduling to fit your life. You\'ll receive a reminder before we arrive.',
  },
  {
    step: '03',
    icon: 'ri-sun-line',
    title: 'Enjoy Spotless Windows',
    body: 'Our team shows up on time, does the job thoroughly, and walks through the results with you before leaving. You\'re 100% satisfied — or we come back. No questions asked.',
  },
];

export default function ServicesProcess() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden" id="process">
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://readdy.ai/api/search-image?query=window%20cleaning%20texture%20abstract%20glass%20water%20droplets%20clean%20surface%20professional%20service%20subtle%20background&width=1920&height=600&seq=process-bg-v1&orientation=landscape"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-700/30 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
            <i className="ri-arrow-right-circle-line"></i> How It Works
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            Simple 3-Step Process
          </h2>
          <p className="text-slate-400 text-lg font-light">
            No complicated forms. No waiting games. Getting spotless windows should be easy — and with us, it is.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={step.step} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-16px)] w-8 z-10">
                  <i className="ri-arrow-right-line text-blue-700/50 text-2xl"></i>
                </div>
              )}
              <div className="bg-white/5 border border-white/10 hover:border-blue-500/40 rounded-2xl p-8 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-6xl font-black text-white/10 leading-none select-none">{step.step}</span>
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-xl flex-shrink-0">
                    <i className={`${step.icon} text-white text-xl`}></i>
                  </div>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={`tel:${contactInfo.phoneTel}`}
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-600 text-white font-bold text-base px-10 py-4 rounded-full transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-phone-fill"></i> Start Step 1 — Call {contactInfo.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
