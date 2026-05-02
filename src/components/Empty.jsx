import React from 'react'
import nodata from '../assets/nodata.png'

const Empty = () => {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <img src={nodata} alt="No Data" className='w-32 h-32' />
      <p className='text-2xl font-extrabold text-black-500'>No analysis data available yet</p>
      <p className='text-[#434655] text-center '>
        Upload an Excel or CSV file in the Upload Hub to start <br />
        generating business insights, charts, and <br />
        recommendations.
      </p>
    </div>
  )
}

export default Empty
