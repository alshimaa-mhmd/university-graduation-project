import React from 'react'
import notificationImg from '../assets/notification.png'
const TopNavBar = ( { link} ) => {
  return (
    <div className='flex  flex-wrap items-center justify-between p-6 h-14 w-full static top-0 right-0 mb-8'>
      <div>
        <h1 className='text-3xl font-bold'>
          {link === 'overview' && 'Main Insights Dashboard'}
          {link === 'upload hub' && 'Data Upload & History'}
          {link === 'product deep dive' && 'Comparison Mode'}
          {link === 'sales trends' && 'Future Trends & Forecasting'}
        </h1>
        <p className='text-[#64748B] my-2'>
          {link === 'overview' && 'Real-time performance metrics for   '}
          {link === 'upload hub' && 'Manage your business datasets and monitor processing history.'}
          {link === 'product deep dive' && 'Analyze performance metrics across different fiscal periods.'}
          {link === 'sales trends' && 'Leveraging Prophet and ARIMA models to project market trajectories based on historical performance cycles.'}

        </p>
      </div>

      <div className='flex gap-4 items-center'>
        <button className='cursor-pointer'>
          <img src={notificationImg} alt="Notification" className='w-10 h-10' />
        </button>
        <button className='px-4 py-2 h-10 w-36  bg-[#1152D4] text-white rounded-md hover:bg-[#1152D4]/90 transition-colors duration-200'>
         Export Data
        </button>
      </div>
    </div>
  )
}

export default TopNavBar
