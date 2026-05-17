import React from 'react'
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
  const { navLink } = useContext(NavContext); // ✅ now inside NavProvider

  return (
    <div className='bg-[#E2E8F0] flex'>
      <SideNavBar token={token} />         {/* ✅ no need to pass navLink/setNavLink */}
      <div className='flex flex-col gap-6 w-full'>
        <TopNavBar link={navLink} />

        {navLink === 'overview'           && <Dashboard />}
        {navLink === 'upload hub'         && <DataUpload />}
        {navLink === 'product deep dive'  && <Reports />}
        {navLink === 'sales trends'       && <Forcasting />}
        {navLink === 'AI Agent'           && <AIChat />}
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