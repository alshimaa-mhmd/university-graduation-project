import { useState } from "react";
import { supabase } from "../client" ;
import { Link } from "react-router-dom";
import loginBG from "../assets/loginbg.png"
import rightImg from "../assets/collaboration@2x.png"

function SignUp() {
 
  const [formData, setFormData] = useState({
    fullName: "",
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
  }

}

  return (
    <div style={{ backgroundImage: `url(${loginBG})` }} className=" min-h-screen bg-cover bg-[#f5f2f2] flex flex-wrap items-center justify-center gap-5 py-10">
      <div className="flex flex-col gap-5">
       <h1 className="text-3xl font-bold">Discover your next big idea</h1>
       <p className="text-lg text-center text-black/60">Sign up for a free account.</p>
       <hr className="h-2  border-black/20 w-[180px] md:w-[433px]" /> 
      <form onSubmit={handleSubmit} className="w-[300px] md:max-w-[433px] flex flex-col gap-5 w-full">
        <label>Full Name</label>
        <input placeholder="full name "  name = "fullName" type="text" onChange={handleChange}  className="w-full border-1 border-[#eae6e7] rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-black"/> 
        <label>Email</label>
        <input placeholder="e.g user@example.com" name="email" type="email" onChange={handleChange}  className="w-full border-1 border-[#eae6e7] rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-black"/> 
        <label>Password</label>
        <input placeholder="password" name="password" type="password" onChange={handleChange}  className="w-full border-1 border-[#eae6e7] rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-black"/> 
        
          <button type="submit" className="w-full bg-[#7C5BFF] hover:bg-[#7856ff]/80 rounded-[96px] cursor-pointer text-[1rem] min-h-[52px] py-3.5 px-6 text-white text-center" >
          Sign Up
        </button>
      </form>
      <div>Already have an account? ? <Link to="/login" className="text-[#7C5BFF] hover:underline font-semibold">Login</Link> </div>
      </div>
        <img src={rightImg} className="max-h-screen"/>
    </div>
  )
}

export default SignUp
