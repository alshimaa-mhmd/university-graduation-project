import { Link } from "react-router-dom";

function FooterCta() {
  function scrollToDemo() {
    const demoSection = document.getElementById("demo");
  
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
    <section className="py-38 my-8 mx-6 px-6 text-center"
    style={{
  background: "linear-gradient(0deg, #472ba0 -34%, #7856ff -2%, #ffd7cf 57%, #ffffff 85%)",
  borderRadius: "0 0 2rem 2rem",
}}
    >
      <h2 className="text-3xl md:text-5xl text-[#1f2023] leading-relaxed font-medium  mb-4">
        Boost product success<br />with in-depth user insights
      </h2>
      <div className="flex justify-center gap-3 mt-8">
        <button className="bg-black text-white  font-bold cursor-pointer px-2 py-2 hover:bg-black/80 transition-colors rounded-3xl" onClick={scrollToDemo}>
        Get a Demo →
      </button>
        <Link to={"/login"} className="bg-white/50 text-black font-bold px-6 py-3 rounded-3xl hover:bg-white/30 transition-colors text-sm cursor-pointer">
          Get Started Free →
        </Link>
      </div>
          <footer className="bg-[#1a1a2e] text-gray-400 text-xs py-8 px-6 text-center flex items-center justify-between relative top-30"
          style={{borderRadius: "2rem"}}>
        <div className="flex flex-wrap justify-center gap-4 ">
          {["Privacy", "Terms", "Security", "Your Privacy Choices", "Cookies/Do Not Sell"].map((l) => (
            <a key={l} className="hover:text-white transition-colors cursor-pointer">{l}</a>
          ))}
        </div>
        <p>© 2025 Mixpanel, Inc. All rights reserved.</p>
      </footer>
    </section>
   
     </>
  );
}

export default FooterCta;