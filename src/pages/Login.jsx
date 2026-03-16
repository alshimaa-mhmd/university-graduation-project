import { useState } from "react";
import { supabase } from "../client" ;
import { Link,  useNavigate } from "react-router-dom";
import loginBG from "../assets/loginbg.png"
// import rightImg from "../assets/contact-sales-illo.webp"
import rightImg from "../assets/collaboration@2x.png"
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


  
return (
    <div style={{ backgroundImage: `url(${loginBG})` }} className=" min-h-screen bg-cover bg-[#f5f2f2] flex-wrap flex items-center justify-center gap-5">
      <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">Login to your account</h1>

      <hr className="h-2  border-black/20 w-[180px] md:w-[433px]" /> 
      <form onSubmit={handleSubmit} className="w-[300px] md:max-w-[433px] flex flex-col gap-5 w-full">
        <label htmlFor="email" className="text-lg font-semibold">Email</label>
        <input name="email" placeholder="e.g user@example.com" type="email" onChange={handleChange}  className="w-full border-1 border-[#eae6e7] rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-black"/> 
        <label htmlFor="password" className="text-lg font-semibold">Password</label>
        <input name="password" placeholder="password" type="password" onChange={handleChange}  className="w-full border-1 border-[#eae6e7] rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-black"/> 
        
        <button type="submit" className="w-full bg-[#7C5BFF] hover:bg-[#7856ff]/80 rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-white text-center" >
          Continue
        </button>
      </form>
      <div>Don't have an account ? <Link to="/signup" className="text-[#7C5BFF] hover:underline font-semibold">Sign Up</Link></div>
    </div>

    <img src={rightImg} className="max-h-screen"/>
    </div>
  )
}

export default Login
