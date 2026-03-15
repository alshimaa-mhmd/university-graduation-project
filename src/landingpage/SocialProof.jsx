const testimonials = [
  {
    stat: "31%",
    label: "conversion rate",
    quote: "Mixpanel allowed us to quickly measure and pivot as needed, leading to a 31% conversion ratio improvement.",
    author: "Brennan Clark",
    role: "Director of Product",
    company: "SAGO",
  },
  {
    stat: "80%",
    label: "subscriber growth",
    quote: "Mixpanel helps us see friction points, where users come from, etc. We doubled conversions & retain customers longer.",
    author: "Bradley Allen",
    role: "Product Manager",
    company: "lula",
  },
  {
    stat: "2x",
    label: "growth in conversion rate",
    quote: "Insights that once required SQL now take minutes; we improve retention, conversion, and lift revenue.",
    author: "Brandon Green",
    role: "Staff Product Manager",
    company: "buffer",
  },
  {
    stat: "25%",
    label: "lift in conversion",
    quote: "We make decisions in minutes now instead of weeks. Mixpanel surfaces what's working before it becomes obvious.",
    author: "Maya Torres",
    role: "Head of Growth",
    company: "fintech co.",
  },
  {
    stat: "27%",
    label: "reduction in churn",
    quote: "The experimentation suite gave our team the ability to test every hypothesis without waiting on data engineering.",
    author: "James Nguyen",
    role: "VP Product",
    company: "saas inc.",
  },
];
 
function SocialProof() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div>
            <h2 className="md:text-4xl md:w-[70%] text-3xl  w-full font-extrabold text-[#1a1a2e]">Companies choose Mixpanel for faster, easier analytics</h2>
          </div>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.stat} className="rounded-2xl border border-gray-100 bg-[#f9f8ff] p-6 flex flex-col gap-3 hover:shadow-md transition-shadow">
              <div className="text-4xl font-black text-[#7856FF]">{t.stat}</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{t.label}</div>
              <p className="text-sm text-gray-700 leading-relaxed flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#7856FF] to-[#a78bfa] flex items-center justify-center text-white text-xs font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">{t.author}</p>
                  <p className="text-[10px] text-gray-400">{t.role} · <span className="font-semibold">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProof;