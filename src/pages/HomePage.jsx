import React, { useState } from 'react'
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import Dashboard from './Dashboard';
import DataUpload from './DataUpload';
import Reports from './Reports';
import Forcasting from './Forcasting';

const HomePage = ({ token }) => {

   const [navLink, setNavLink] = useState('dataUpload');

   

  
 return (
   <>
    <div className='bg-[#E2E8F0] flex'>
      <SideNavBar link = {navLink} setNavLink={setNavLink} token = {token}/>
      <div className='flex flex-col gap-6 w-full'>
         <TopNavBar link = {navLink} />
      
      { navLink === 'dashboard' && <Dashboard />}
      { navLink === 'dataUpload' && <DataUpload /> }
      { navLink === 'reports' && <Reports /> }
      { navLink === 'forcasting' && <Forcasting /> }
     
      
     
     
     </div>
    </div>
   
    </>
 )
   
}

export default HomePage;
