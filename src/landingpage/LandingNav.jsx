import React from 'react'
 
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
        <svg width="110" height="24" viewBox="0 0 110 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#7856FF" />
          <text x="28" y="17" fontFamily="Georgia, serif" fontSize="15" fontWeight="700" fill="#1a1a2e">mixpanel</text>
        </svg>
      </div>
      <button className="bg-black text-white  font-bold cursor-pointer px-2 py-2 hover:bg-black/80 transition-colors rounded-3xl" onClick={scrollToDemo}>
        Get a Demo →
      </button>
    </nav>
  );
}

export default LandingNav
