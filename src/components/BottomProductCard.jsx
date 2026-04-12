import React, { useContext } from 'react'
import DataContext from '../context/DataContext';
import alert from '../assets/Overlay.png';
const BottomProductCard = () => {
    const { lessProductByProfit } = useContext(DataContext);
  return (
    <div className='w-96.5 p-8 flex flex-col gap-4 bg-gray-500 border-l-4 border-l-[#BA1A1A] rounded-xl '>
        <div className='flex items-center justify-between'>
            <img src={alert} className='w-12 h-11' />
      <p className='capitalize text-[#BA1A1A] font-bold text-xs rounded p-2 bg-[#BA1A1A]/10 '>
        Critical Review
      </p>
      </div>

      <p className='font-extrabold text-xl text-black-500'>
            {lessProductByProfit.productName}
      </p>

      <p className='text-sm text-[#434655]'>
        High maintenance costs and storage logistics
        have severely impacted the bottom line.
      </p>

      <p className='text-sm text-[#434655] capitalize'>
        total loss
      </p>

      <p className='font-extrabold text-3xl text-black-500'>
        {lessProductByProfit.profit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </p>
    </div>
  )
}

export default BottomProductCard
