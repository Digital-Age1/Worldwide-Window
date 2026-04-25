export default function CompanyStory() {
  return (
    <section className="py-24 bg-white" id="our-story">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Story header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <i className="ri-book-open-line"></i> Our Story
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Built on a Simple Promise: Do It Right.
            </h2>
            <div className="space-y-4 text-slate-500 text-lg leading-relaxed">
              <p>
                World Wide Window Co was founded in 1983 in Spokane, Washington with a simple belief: if you show up on time, do thorough work, and treat people&apos;s homes with respect — everything else follows. Over four decades later, that belief is still the foundation of everything we do.
              </p>
              <p>
                We&apos;re not a franchise. Not a call center. We&apos;re a family business, and the team that cleans your windows is the same team that built this company from the ground up — one satisfied customer at a time.
              </p>
              <p>
                Our mission is simple: bring maximum natural light into every home and business we serve, and leave every property looking its absolute best. We measure success one window at a time.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20window%20cleaner%20working%20on%20beautiful%20residential%20home%20Pacific%20Northwest%20sunny%20day%20upscale%20house%20white%20trim%20technician%20cleaning%20exterior%20windows%20careful%20respectful%20uniformed%20professional%20residential%20neighborhood%20green%20landscaping&width=800&height=600&seq=about-story-v1&orientation=landscape"
                alt="World Wide Window Co team serving Pacific Northwest homes since 1983"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-blue-700 text-white px-6 py-4 rounded-2xl">
              <div className="text-3xl font-black">1983</div>
              <div className="text-blue-200 text-xs font-medium">Established in Spokane, WA</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {[
            { value: '1983', label: 'Year Founded', icon: 'ri-calendar-line' },
            { value: '3 States', label: 'WA · OR · ID', icon: 'ri-map-2-line' },
            { value: '40+', label: 'Years of Excellence', icon: 'ri-award-line' },
          ].map((s) => (
            <div key={s.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
              <div className="w-11 h-11 flex items-center justify-center bg-blue-100 rounded-xl mx-auto mb-3">
                <i className={`${s.icon} text-blue-700 text-lg`}></i>
              </div>
              <div className="text-3xl font-black text-blue-700">{s.value}</div>
              <div className="text-slate-500 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
