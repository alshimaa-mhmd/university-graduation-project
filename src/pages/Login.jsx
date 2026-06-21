import { useState } from "react";
import { supabase } from "../client" ;
import { Link,  useNavigate } from "react-router-dom";
import veloxicon from '../assets/veloxicon.png'


function Login( {setToken} ) {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
  setLoading(true)

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
  } catch(error){
    alert(error.message)
  } finally {
    setLoading(false)
  }
}
  
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

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl text-sm transition-colors shadow-md shadow-blue-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                "Sign In to Dashboard"
              )}
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

export default Login