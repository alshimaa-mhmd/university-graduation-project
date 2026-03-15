import { useState } from "react";
import { supabase } from "../client" ;
import { Link } from "react-router-dom";


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
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="full name" name="fullName" type="text" onChange={handleChange} /> 
        <input placeholder="email" name="email" type="email" onChange={handleChange} /> 
        <input placeholder="password" name="password" type="password" onChange={handleChange} /> 
        
        <button type="submit" >
          submit
        </button>
      </form>
      Already have an account ? <Link to="/login">Login</Link>
    </div>
  )
}

export default SignUp
