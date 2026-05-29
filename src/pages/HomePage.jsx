import React, { useEffect } from 'react'
import SideNavBar from '../components/SideNavBar';
import TopNavBar from '../components/TopNavBar';
import Dashboard from './Dashboard';
import DataUpload from './DataUpload';
import Reports from './Reports';
import Forcasting from './Forcasting';
import DataProvider from '../context/DataProvider';
import NavProvider from '../context/NavProvider';
import NavContext from '../context/NavContext';
import { useContext } from 'react';
import AIChat from './AIChat';

// 👇 Split into two components so the consumer is always INSIDE the provider
function HomePageContent({ token }) {
  const { navLink, setNavLink } = useContext(NavContext); // ✅ now inside NavProvider
useEffect(() => {
  window.scrollTo(0, 0);
}, [navLink]); // ← runs every time activeTab changes
useEffect(() => {
  // push a fake history entry so the back button has something to trigger
  window.history.pushState(null, "", window.location.href);

  const handleBackButton = () => {
    // whatever you want to happen when back is pressed
    setNavLink("upload hub"); 
  };

  window.addEventListener("popstate", handleBackButton);

  return () => {
    window.removeEventListener("popstate", handleBackButton);
  };
}, []);
  return (
    <div className='bg-[#E2E8F0] flex'>
      <SideNavBar token={token} />         {/* ✅ no need to pass navLink/setNavLink */}
      <div className='flex flex-col gap-6 w-full'>
        <TopNavBar link={navLink} />

        {navLink === 'overview'           && <Dashboard />}
        {navLink === 'upload hub'         && <DataUpload />}
        {navLink === 'product deep dive'  && <Reports />}
        {navLink === 'sales trends'       && <Forcasting />}
        {navLink === 'AI Agent'           && <AIChat jobId={"12f07ae0-3710-4eae-8bc5-5b443b813f2a"}/>}
      </div>
    </div>
  );
}

export default function HomePage({ token }) {
  return (
    <DataProvider>
      <NavProvider>
        <HomePageContent token={token} />  {/* ✅ consumed inside the providers */}
      </NavProvider>
    </DataProvider>
  );
}