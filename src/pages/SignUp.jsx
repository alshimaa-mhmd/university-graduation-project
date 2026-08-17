import { useState } from "react";
import { supabase } from "../client" ;
import { Link } from "react-router-dom";
// import loginBG from "../assets/loginbg.png"
// import rightImg from "../assets/collaboration@2x.png"
import veloxicon from '../assets/veloxicon.png'

function SignUp() {
 
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  })
    const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false)

  const strength = getPasswordStrength(formData.password);
  function handleChange(event) {
    setFormData( (prevFormData) => {
      return{
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })    
  }

  async function handleSubmit(e){
    e.preventDefault()
    setLoading(true)

  try{
    const { data, error } = await supabase.auth.signUp(
  {
    email: formData.email,
    password: formData.password, // there is an error for shorter password , it excutes the try function even tho the user is not created and the error is not null , i will check it later
    options: {
      data: {
        full_name: formData.fullName,
      }
    }
  }
)
if(error){
  throw error
}

alert("check your email for the confirmation link")
  } catch(e){
    alert(e.message)
  }finally {
    setLoading(false)
  }

}

const VeloxLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M4 6 L14 2 L24 6 L14 22 Z" fill="#1D4ED8" opacity="0.9"/>
    <path d="M4 6 L14 10 L14 22 Z" fill="#1D4ED8" opacity="0.5"/>
    <path d="M24 6 L14 10 L14 22 Z" fill="#1D4ED8" opacity="0.7"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const avatars = [
  "https://i.pravatar.cc/32?img=11",
  "https://i.pravatar.cc/32?img=22",
  "https://i.pravatar.cc/32?img=33",
];

function getPasswordStrength(password) {
  if (!password) return { label: "", width: "0%", color: "bg-gray-200" };
  if (password.length < 4) return { label: "WEAK", width: "25%", color: "bg-red-400" };
  if (password.length < 8) return { label: "FAIR", width: "50%", color: "bg-yellow-400" };
  if (password.length < 12 || !/[^a-zA-Z0-9]/.test(password)) return { label: "GOOD", width: "75%", color: "bg-blue-400" };
  return { label: "STRONG", width: "100%", color: "bg-green-500" };
}


  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");


  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "linear-gradient(160deg, #eef2ff 0%, #e8edf8 50%, #dde6f5 100%)",
      }}
    >
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2">
           <img src={veloxicon} alt="Velox Logo" className="w-46" />
        </div>
        <div className="flex items-center gap-8">
          <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Login</Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
            Sign In
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex flex-1 items-start px-8 pt-10 pb-16 gap-12">
        {/* Left: Hero */}
        <div className="hidden md:block flex-1 max-w-xl pt-20 space-y-3">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-white/60 backdrop-blur-sm rounded-full px-4 py-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-gray-600 uppercase">Join the Elite</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl font-black leading-tight text-gray-900" style={{ letterSpacing: "-0.03em" }}>
            Analyze with{" "}
            <span className="text-blue-600">Quiet Authority.</span>
          </h1>

          <p className="text-base text-gray-500 leading-relaxed max-w-sm">
            Access the world's most sophisticated analytical suite. Precision data engineered for architects of growth.
          </p>

          {/* Testimonial card */}
          <div className="bg-white/70 backdrop-blur-sm border border-white rounded-2xl p-5 max-w-sm shadow-sm">
            {/* Avatars */}
            <div className="flex items-center gap-1 mb-4">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white -ml-1 first:ml-0 object-cover"
                />
              ))}
              <div className="w-10 h-10 rounded-lg bg-blue-600 border-2 border-white -ml-1 p-2 flex items-center justify-center">
                <span className="text-white text-xs font-bold">+10k</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic leading-relaxed">
              "Velox didn't just give us data; it gave us clarity. It's the standard for our entire architecture team."
            </p>
            <p className="mt-3 text-xs font-bold tracking-widest text-gray-400 uppercase">— Elena V., Lead Architect</p>
          </div>
        </div>

        {/* Right: Form card */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 space-y-5">
          <div>
            <h2 className="text-2xl font-bold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
              Create your Velox Account
            </h2>
            <p className="text-sm text-gray-600 mt-1">unlimited access to all features</p>
          </div>

          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              name = "fullName" 
              type="text"
              placeholder="Johnathan Doe"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Work Email */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Work Email</label>
            <input
              name="email" type="email"
              placeholder="name@company.com"
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Create Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
               
                onChange={handleChange}
                name="password"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {/* Strength bar */}
            <div className="space-y-1">
              <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${strength.color}`}
                  style={{ width: strength.width }}
                />
              </div>
              <div className="flex justify-between">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{strength.label}</span>
                <span className="text-xs text-gray-400">Min. 8 characters</span>
              </div>
            </div>
          </div>

          {/* Agree */}
          <div className="flex items-start gap-3">
            <button
              type="button"
              onClick={() => setAgreed(!agreed)}
              className={`mt-0.5 w-4 h-4 rounded border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                agreed ? "bg-blue-600 border-blue-600" : "border-gray-300 bg-white"
              }`}
            >
              {agreed && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">Terms</a>
              {" "}and{" "}
              <a href="#" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>
            </span>
          </div>

          {/* Submit */}
          <button type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-md shadow-blue-200 flex items-center justify-center gap-2">
            {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                "Create Account"
              )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Get your free account</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* OAuth */}
        </form>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200/60 px-8 py-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-blue-600">Velox</p>
          <p className="text-xs text-gray-400 mt-0.5">© 2024 Velox Analytical Suite. Precise Data. Quiet Authority.</p>
        </div>
        <div className="flex items-center gap-6">
          {["Privacy Policy", "Terms of Service", "Security", "Status"].map(link => (
            <a key={link} href="#" className="text-xs text-gray-500 hover:text-gray-800 transition-colors">
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
    
  )
}

export default SignUp
