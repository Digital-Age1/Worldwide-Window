import { Link } from 'react-router-dom';
import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import { contactInfo } from '@/utils/contact';
import { trackPhoneClick, trackQuoteButtonClick } from '@/utils/tracking';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative min-h-[70vh] flex items-center pt-[108px] bg-slate-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-10 py-20 text-center">
            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
              <i className="ri-checkbox-circle-fill text-blue-700 text-4xl"></i>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
              Thank You for Reaching Out
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Your quote request has been received. We&apos;ll be in touch soon to confirm details and help schedule your window cleaning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${contactInfo.phoneTel}`}
                onClick={() => trackPhoneClick({ location: 'thank_you_page' })}
                className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-phone-fill"></i> Call {contactInfo.phoneDisplay}
              </a>
              <Link
                to="/"
                onClick={() => trackQuoteButtonClick({ location: 'thank_you_page', destination: '/' })}
                className="inline-flex items-center gap-3 border-2 border-blue-200 hover:border-blue-500 text-slate-700 hover:text-blue-700 font-bold px-8 py-4 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-home-line"></i> Back Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
