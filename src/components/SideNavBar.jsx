import React from 'react'
import uploads from '../assets/dataUpload.png'
import dashboard from '../assets/dashboard.png'
import avatar from '../assets/avatar.png'
import reports from '../assets/reports.png'
import settings from '../assets/settings.png'
import forcasting from '../assets/forcasting.png'
import { useNavigate } from 'react-router-dom'

const SideNavBar = ({ link, setNavLink, token }) => {

    // handle logout function
     let navigate = useNavigate();
    
    function handleLogout() {
        sessionStorage.removeItem('token')
        navigate('/')
    }
    function handleLinkClick(linkName) {
        setNavLink(linkName);
    }

  return (
    <>
    <div className='min-w-[256px] h-screen static top-0 left-0 bg-white flex flex-col items-start justify-between p-5'>
      <div className='flex flex-col gap-4 w-full '>
        <div className='mb-5'>
            LOGO
        </div>

        <div className='side-link' onClick={() => handleLinkClick('dataUpload')}>
            <img src={uploads} alt="home" className='w-5 h-5' /> <p>Data Upload</p>
        </div>
        <div className='side-link' onClick={() => handleLinkClick('dashboard')}>
            <img src={dashboard} alt="home" className='w-5 h-5' /> <p>Dashboard</p>
        </div>
        <div className='side-link' onClick={() => handleLinkClick('reports')}>
            <img src={reports} alt="home" className='w-5 h-5' /> <p>Reports</p>
        </div>
        <div className='side-link' onClick={() => handleLinkClick('forcasting')}>
            <img src={forcasting} alt="home" className='w-5 h-5' /> <p>Forcasting</p>
        </div>
        <div className='side-link' onClick={() => handleLinkClick('settings')}>
            <img src={settings} alt="home" className='w-5 h-5' /> <p>Settings</p>
        </div>

        <div className='w-full border-t border-gray-200 p-3 mt-4' >
           <button onClick={handleLogout}>  
            Logout
        </button>
        </div>

      </div>

      {/* lower part of the navbar */}
        <div className='w-full border-t border-gray-200 p-3'>
            <div className='flex gap-2 items-center bg-[#F1F5F9] p-2 rounded-md'>
                <img src={avatar} alt="profile" className='w-8 h-8 rounded-full' />
                <div>
                    <p className='text-sm font-semibold'>{token.user.user_metadata.full_name}</p>
                    <p className='text-xs text-gray-500'>Admin</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SideNavBar
