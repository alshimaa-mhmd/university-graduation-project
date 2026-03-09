import React, { useEffect, useState } from 'react'
import { SignUp, Login } from './pages'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
const App = () => {
  const [ token, setToken] = useState(false);
  if(token){
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])

  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Login setToken = {setToken} />} />
        <Route path={"/signup"} element={<SignUp />} />
        {token ? <Route path={"/homepage"} element={<HomePage token = {token} />} /> : <Route path={"/homepage"} element={<Login setToken = {setToken} />} />}
      </Routes>
    </div>
  )
}

export default App
