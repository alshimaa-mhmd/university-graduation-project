import { useState } from "react";
import { supabase } from "../client" ;
import { Link,  useNavigate } from "react-router-dom";
// import loginBG from "../assets/loginbg.png"
// import rightImg from "../assets/contact-sales-illo.webp"
// import rightImg from "../assets/collaboration@2x.png"
import veloxicon from '../assets/veloxicon.png'


function Login( {setToken} ) {
 let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  function handleChange(event) {
    setFormData( (prevFormData) => {
      return{
        ...prevFormData,
        [event.target.name] : event.target.value
      }
    })    
  }

  console.log(formData)

  async function handleSubmit(e){
    e.preventDefault()

  try{
    const { data, error } = await supabase.auth.signInWithPassword({
  email: formData.email,
  password: formData.password,
})
if(error){
  throw error
}
console.log(data)
setToken(data)
navigate("/homepage")


// alert("check your email for the confirmation link")
  } catch(error){
    alert(error.message)
  }

}


 

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
    <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
    <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
    <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
  </svg>
);

const MicrosoftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="0" y="0" width="8.5" height="8.5" fill="#F25022"/>
    <rect x="9.5" y="0" width="8.5" height="8.5" fill="#7FBA00"/>
    <rect x="0" y="9.5" width="8.5" height="8.5" fill="#00A4EF"/>
    <rect x="9.5" y="9.5" width="8.5" height="8.5" fill="#FFB900"/>
  </svg>
);

const VeloxLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M4 6 L14 2 L24 6 L14 22 Z" fill="#1D4ED8" opacity="0.9"/>
    <path d="M4 6 L14 10 L14 22 Z" fill="#1D4ED8" opacity="0.5"/>
    <path d="M24 6 L14 10 L14 22 Z" fill="#1D4ED8" opacity="0.7"/>
  </svg>
);

// const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [remember, setRemember] = useState(false);

  
return (
    <div className="min-h-screen w-full flex font-sans" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      {/* Left Panel */}
      <div
        className="hidden md:flex flex-col justify-between w-1/2 p-12 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 40%, #dbeafe 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-[-80px] left-[-80px] w-72 h-72 rounded-full opacity-30" style={{ background: "radial-gradient(circle, #a5b4fc, transparent 70%)" }} />
        <div className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #93c5fd, transparent 70%)" }} />

        {/* Logo */}
        <div className="z-10">
          <img src={veloxicon} alt="Velox Logo" className="w-46" />
        </div>

        {/* Tagline & copy */}
        <div className="z-10 space-y-5">
          <p className="text-sm font-semibold text-gray-800">
            Unlock the power of{" "}
            <span className="text-blue-600">Quiet Authority.</span>
          </p>
          <p className="text-gray-600 text-base leading-relaxed max-w-xs">
            The Velox Analytical Suite provides precision data orchestration for global enterprise environments. Secure, scalable, and sophisticated.
          </p>

          {/* AI Insight card */}
          <div className="w-full flex justify-end">
          <div className="mt-10 bg-white/80 backdrop-blur-sm border border-white rounded-2xl p-5 shadow-xl max-w-[310px] skew-[-2deg]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-5 bg-blue-600 rounded-full" />
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">AI Insight</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              "Your analytical throughput has increased by 14% this quarter. Network latency remains optimal at 22ms."
            </p>
          </div>
        </div>
        </div>
        {/* Footer */}
        <p className="text-xs text-gray-400 z-10">
          © 2024 Velox Analytical Suite. Precise Data. Quiet Authority.
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex flex-1 items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm space-y-10">
          {/* Header */}
          <div className="space-y-1">
            <h1 className="text-2xl font-bold mb-3 text-gray-900 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
              Welcome Back
            </h1>
            <p className="text-sm text-gray-600">Enter your credentials to access Velox Intelligence.</p>
          </div>

        
          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">continue with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit}>
          {/* Form */}
          <div className="space-y-4">
            {/* Email */}
            
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Business Email</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="name@company.com"
                  name="email"
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition pr-10"
                />
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
              </div>
            </div>
            
            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <button type="button" className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  name="password"
                  onChange={handleChange}
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
            </div>

            {/* Remember me */}
            

            {/* Submit */}
            <button onSubmit={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-md shadow-blue-200">
              Sign In to Dashboard
            </button>
          </div>
        </form>
          {/* Sign up */}
          <p className="text-center text-sm text-gray-600">
            Don't have an enterprise account?{" "}
            <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
    // <div style={{ backgroundImage: `url(${loginBG})` }} className=" min-h-screen bg-cover  flex-wrap flex items-center justify-center gap-5">
    //   <div className="flex flex-col items-center justify-center gap-5">
    //     <img src={veloxicon} className="w-69 mb-12" />
    //   <h1 className="text-3xl font-bold">Login to your account</h1>

    //   <hr className="h-2  border-black/20 w-[180px] md:w-[433px]" /> 
    //   <form onSubmit={handleSubmit} className="w-[300px] md:max-w-[433px] flex flex-col gap-5 w-full">
    //     <label htmlFor="email" className="text-lg font-semibold">Email</label>
    //     <input name="email" placeholder="e.g user@example.com" type="email" onChange={handleChange}  className="w-full border-1 border-[#eae6e7] rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-black"/> 
    //     <label htmlFor="password" className="text-lg font-semibold">Password</label>
    //     <input name="password" placeholder="password" type="password" onChange={handleChange}  className="w-full border-1 border-[#eae6e7] rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-black"/> 
        
    //     <button type="submit" className="w-full bg-[#7C5BFF] hover:bg-[#7856ff]/80 rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-white text-center" >
    //       Continue
    //     </button>
    //   </form>
    //   <div>Don't have an account ? <Link to="/signup" className="text-[#7C5BFF] hover:underline font-semibold">Sign Up</Link></div>
    // </div>

    // {/* <img src={rightImg} className="max-h-screen"/> */}
    // </div>

export default Login
