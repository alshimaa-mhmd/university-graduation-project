import React, { useState } from 'react'
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import Dashboard from './Dashboard';
import DataUpload from './DataUpload';
import Reports from './Reports';
import Forcasting from './Forcasting';
import DataProvider from '../context/DataProvider';

const HomePage = ({ token }) => {

   const [navLink, setNavLink] = useState('upload hub');

   

  
 return (
   <>
   <DataProvider>
    <div className='bg-[#E2E8F0] flex'>
      <SideNavBar link = {navLink} setNavLink={setNavLink} token = {token}/>
      <div className='flex flex-col gap-6 w-full'>
         <TopNavBar link = {navLink} />
      
      { navLink === 'overview' && <Dashboard />}
      { navLink === 'upload hub' && <DataUpload /> }
      { navLink === 'product deep dive' && <Reports /> }
      { navLink === 'sales trends' && <Forcasting /> }
     
      
     
     
     </div>
    </div>
   </DataProvider>
    </>
 )
   
}

export default HomePage;
