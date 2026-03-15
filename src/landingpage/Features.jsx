
function FeatureSection({ feature }) {
  const isLeft = feature.side === "left";
  return (
    <section className={`py-20 px-6 md:px-16 ${feature.bg}`}>
      <div className={`max-w-5xl mx-auto flex flex-col ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}>
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a2e] mb-4">{feature.title}</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{feature.desc}</p>
        </div>
        {/* Placeholder image */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-100 flex items-center justify-center">
          <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;