import React from 'react'
import InfiniteMarquee from './InfiniteMarquee';

const Hero = () => {


  return (
    <section id='demo' className="pt-28 pb-16 px-6 md:px-16 bg-gradient-to-br from-[#f7f5ff] via-white to-[#eef3ff] min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full grid  gap-12 items-center justify-center">
        {/* Left */}
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#7856FF] mb-4 bg-[#ede9ff] px-3 py-1 rounded-full">
            Product Analytics
          </span>
          <h1 className=" text-3xl md:text-6xl text-center font-extrabold text-[#1a1a2e] leading-20 md:leading-32 mb-6"> Analytics that drive decisions </h1>
          <h4 className="text-center text-lg font-medium text-[#1a1a2e] leading-tight mb-6">
            Turn product data into confident decisions teams can act on
          </h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Trusted metrics", "Clear business impact", "Decisions teams align on"].map((tag) => (
              <span key={tag} className="text-xs bg-white border border-[#d6ccff] text-[#5c3fc4] px-3 py-1 rounded-full font-medium shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600  leading-relaxed mb-3">
            Analyze user behavior, validate changes, and drive growth — in one unified platform.
          </p>
          <ul className=" text-gray-700 space-y-2 mb-6">
            {[
              ["See what drives growth", "Track usage, adoption, drop-offs, and retention with charts, funnels, and cohorts."],
              ["Prove what works", "Run experiments to test real business outcomes, test features, flows, and layouts — then measure impact with confidence."],
              ["Confident insights at scale", "Understand what's driving behavior with AI, trusted metrics dashboards, centralized event values, and no-surprise costs."],
            ].map(([bold, text]) => (
              <li key={bold} className="flex gap-2">
                <span className="mt-0.5 text-[#7856FF]">✦</span>
                <span><strong>{bold}.</strong> {text}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mb-6">Trusted by 200,000+ leading companies</p>
          {/* Logo strip */}
         {/* <InfiniteMarquee /> */}
        </div>
 
        
      </div>
    </section>
  );
}

export default Hero
