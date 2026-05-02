import { useState } from "react";
import NavContext from "./NavContext";


export default function DataProvider({ children }) {
    const [navLink, setNavLink] = useState('upload hub');

     return (

    <NavContext.Provider value={{ 
      navLink,
      setNavLink,

     }}>
      {children}
    </NavContext.Provider>
  );
}