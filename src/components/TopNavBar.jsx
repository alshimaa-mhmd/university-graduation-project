import React from 'react'
import notificationImg from '../assets/notification.png'
const TopNavBar = ({ link }) => {
  return (
    <div className="flex flex-wrap items-start justify-between px-4 md:px-6 py-4 w-full static top-0 right-0 mb-4 md:mb-0 gap-4">
      
      {/* Left: Title & Subtitle */}
      <div className="flex-1 min-w-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">
          {link === "overview" && "Main Insights Dashboard"}
          {link === "upload hub" && "Data Upload & History"}
          {link === "product deep dive" && "Comparison Mode"}
          {link === "sales trends" && "Future Trends & Forecasting"}
          {link === "AI Agent" && "AI Agent"}
        </h1>
        <p className="text-[#64748B] mt-1 text-xs sm:text-sm md:text-base line-clamp-2">
          {link === "overview" && "Real-time performance metrics for your business."}
          {link === "upload hub" && "Manage your business datasets and monitor processing history."}
          {link === "product deep dive" && "Analyze performance metrics across different fiscal periods."}
          {link === "sales trends" && "Leveraging Prophet and ARIMA models to project market trajectories based on historical performance cycles."}
          {link === "AI Agent" && "Ask anything about your business data."}
        </p>
      </div>

      {/* Right: Notification + Export */}
      <div className="flex gap-3 items-center relative shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-600 absolute bottom-7  z-10" />
        <button className="cursor-pointer">
          <img src={notificationImg} alt="Notification" className="w-9 h-9 sm:w-10 sm:h-10" />
        </button>
        <button className="px-3 sm:px-4 py-2 h-9 sm:h-10 w-28 sm:w-36 bg-[#1152D4] text-white text-sm rounded-md hover:bg-[#1152D4]/90 transition-colors duration-200">
          Export Data
        </button>
      </div>

    </div>
  );
};

export default TopNavBar;
