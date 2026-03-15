import React from 'react'
import { useNavigate } from 'react-router-dom'
import FileDropZone from '../components/Filedropzone ';

const HomePage = ({ token }) => {

    let navigate = useNavigate();
    
    function handleLogout() {
        sessionStorage.removeItem('token')
        navigate('/')
    }

  
 return (
    <div>
     <h3> Welcome , Team member {token.user.user_metadata.full_name}</h3>


      
      <FileDropZone onFilesChange={(files) => console.log(files)} />
     <button onClick={handleLogout}>  
        Logout
     </button>
    </div>
 )
   
}

export default HomePage;
