import { useState } from "react";
import productImage  from "../assets/img.avif"
import dataImage  from "../assets/img2.avif"
import marketingImage  from "../assets/img3.avif"
import enginneringImage  from "../assets/img4.avif"
const teams = [
  {
    id: "product",
    label: "Product teams",
    heading: "Product teams",
    desc: "Understand which features actually drive long-term engagement and retention. Measure impact across launches and experiments using real user behavior — so business outcomes improve with confidence, move faster, and ship smarter.",
    color: "from-[#ede9ff] to-[#f5f3ff]",
    accent: "#7856FF",
    image : productImage
  },
  {
    id: "data",
    label: "Data teams",
    heading: "Data teams",
    desc: "Query your data warehouse directly, build trusted metric definitions, and share governed datasets across your organization. No more one-off requests or fragmented truth.",
    color: "from-[#e0f2fe] to-[#f0f9ff]",
    accent: "#0ea5e9",
    image : dataImage
  },
  {
    id: "marketing",
    label: "Marketing teams",
    heading: "Marketing teams",
    desc: "Attribute revenue to the channels, campaigns, and content that matter. Connect top-of-funnel events to downstream conversion so every dollar is accountable.",
    color: "from-[#fce7f3] to-[#fdf2f8]",
    accent: "#ec4899",
    image : marketingImage
  },
  {
    id: "engineering",
    label: "Engineering teams",
    heading: "Engineering teams",
    desc: "Monitor releases in real time, catch regressions early, and measure the impact of every deploy with feature flags and experiment rollouts built right in.",
    color: "from-[#dcfce7] to-[#f0fdf4]",
    accent: "#22c55e",
    image : enginneringImage
  },
];
 
function AnalyticsTeams() {
  const [active, setActive] = useState("product");
  const team = teams.find((t) => t.id === active);
 
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a2e]">Analytics for every team</h2>
      </div>
      {/* Tabs */}
      <div className="flex justify-center gap-2 flex-wrap mb-12">
          {teams.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all border ${
                active === t.id
                  ? "border-transparent text-white shadow-md"
                  : "border-gray-200 text-gray-600 hover:border-[#7856FF] hover:text-[#7856FF]"
              }`}
              style={active === t.id ? { backgroundColor: t.accent } : {}}
            >
              {t.label}
            </button>
          ))}
        </div>
      {/* Panel */}
         <div
              key={active}
              className={`max-w-5xl mx-auto rounded-3xl bg-gradient-to-br ${team.color} p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center`}
              style={{ animation: "panelIn 1s cubic-bezier(0.22, 1, 0.36, 1) both" }}
         >        
            <div>
          <h3 className="text-2xl font-bold text-[#1a1a2e] mb-4">{team.heading}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">{team.desc}</p>
         </div>
        {/* Placeholder "screenshot" */}
        <div className="rounded-2xl shadow-lg  h-60 flex items-center justify-center border border-white/80"
        
        style={{
            background: "linear-gradient(45deg, #472ba0 -34%, #7856ff -2%, #ffd7cf 57%, #ffffff 85%)",
        }}>
          {/* Replace with actual image */}
          <img src={team.image} alt={team.heading} className="w-full h-full object-cover relative rounded-2xl top-6 left-6" />
        </div>
      </div>
     
    </section>
  );
}

export default AnalyticsTeams;