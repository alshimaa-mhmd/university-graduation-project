import { useState } from "react";
import { supabase } from "../client" ;
import { Link,  useNavigate } from "react-router-dom";


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
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="email" name="email" type="email" onChange={handleChange} /> 
        <input placeholder="password" name="password" type="password" onChange={handleChange} /> 
        
        <button type="submit" >
          submit
        </button>
      </form>
      don't have an account ? <Link to="/signup">Sign Up</Link>
    </div>
  )
}

export default Login
