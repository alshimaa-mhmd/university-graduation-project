import React from 'react'
import veloxicon from '../assets/veloxicon.png'
const LandingNav = () => {

  function scrollToDemo() {
    const demoSection = document.getElementById("demo");
  
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  }
 return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-10">
        {/* Logo */}
        <img src={veloxicon} alt="Velox" className="w-32 h-8" />
      </div>
      <button className="bg-black text-white  font-bold cursor-pointer px-2 py-2 hover:bg-black/80 transition-colors rounded-3xl" onClick={scrollToDemo}>
        Get a Demo →
      </button>
    </nav>
  );
}

export default LandingNav
