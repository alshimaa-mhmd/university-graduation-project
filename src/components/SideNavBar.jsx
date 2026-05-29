import React, { useContext } from 'react'
import uploads from '../assets/dataUpload.png'
import dashboard from '../assets/dashboard.png'
import avatar from '../assets/avatar.png'
import reports from '../assets/reports.png'
import settings from '../assets/settings.png'
import forcasting from '../assets/forcasting.png'
import AIcon from '../assets/AIIcon.png'
import { NavLink, useNavigate } from 'react-router-dom'
import NavContext from '../context/NavContext'
import exit from '../assets/logout.png'
import enter from '../assets/enter.png'
import veloxicon from '../assets/veloxicon.png'

import { useState } from "react";

const SideNavBar = ({ token }) => {
  const { navLink, setNavLink } = useContext(NavContext);
  const link = navLink;
  const [isOpen, setIsOpen] = useState(false);

  let navigate = useNavigate();

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
  }
  function handleLinkClick(linkName) {
    setNavLink(linkName);
    setIsOpen(false); // close menu when a link is clicked
  }

  const activeLinkStyle = {
    backgroundColor: "#E0E7FF",
    color: "#004AC6",
    fontWeight: "semiBold",
    borderRadius: "8px",
  };

  return (
    <>
      {/* Hamburger button — only on small screens */}
      <button
        type="button"
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          // X icon
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          // Hamburger icon
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Overlay — only on small screens when menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed lg:sticky top-0 left-0 z-40
          min-w-[256px] h-screen bg-white flex flex-col items-start justify-between p-5
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col gap-4 w-full justify-start items-start">
          <div className="mb-5 w-full">
            <img src={veloxicon} className="w-32 h-8 ml-[-14px]" />
          </div>

          <div className="side-link hover:bg-[#E0E7FF] hover:text-[#004AC6] hover:rounded-lg" style={link === "upload hub" ? activeLinkStyle : {}} onClick={() => handleLinkClick("upload hub")}>
            <img src={uploads} alt="home" className="w-5 h-5" /> <p>Upload Hub</p>
          </div>
          <div className="side-link hover:bg-[#E0E7FF] hover:text-[#004AC6] hover:rounded-lg" style={link === "overview" ? activeLinkStyle : {}} onClick={() => handleLinkClick("overview")}>
            <img src={dashboard} alt="home" className="w-5 h-5" /> <p>Overview</p>
          </div>
          <div className="side-link hover:bg-[#E0E7FF] hover:text-[#004AC6] hover:rounded-lg" style={link === "product deep dive" ? activeLinkStyle : {}} onClick={() => handleLinkClick("product deep dive")}>
            <img src={reports} alt="home" className="w-5 h-5" /> <p>Product Deep Dive</p>
          </div>
          <div className="side-link hover:bg-[#E0E7FF] hover:text-[#004AC6] hover:rounded-lg" style={link === "sales trends" ? activeLinkStyle : {}} onClick={() => handleLinkClick("sales trends")}>
            <img src={forcasting} alt="home" className="w-5 h-3" /> <p>Sales Trends</p>
          </div>
          <div className="side-link hover:bg-[#E0E7FF] hover:text-[#004AC6] hover:rounded-lg" style={link === "AI Agent" ? activeLinkStyle : {}} onClick={() => handleLinkClick("AI Agent")}>
            <img src={AIcon} alt="home" className="w-6 h-5" /> <p>AI Agent</p>
          </div>

          <div className="w-full border-t border-gray-200 py-3 mt-4">
            <button onClick={handleLogout} className="flex gap-2 items-center hover:bg-gray-200 p-3 rounded-md w-full">
              <img src={exit} className="w-5 h-5" /> <p>Logout</p>
            </button>
          </div>
        </div>

        {/* Lower part */}
        <div className="w-full border-t border-gray-200 p-3">
          <div className="flex gap-2 items-center bg-[#F1F5F9] p-2 rounded-md">
            <img src={avatar} alt="profile" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-semibold">{token.user.user_metadata.full_name}</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;