import React, { useContext } from 'react'
import DataContext from '../context/DataContext';
import star from '../assets/Container(2).png';
const TopProductCard = () => {
    const { topProductByProfit } = useContext(DataContext);
  return (
    <div className='w-137.5 relative p-8 flex flex-col gap-4 bg-white rounded-xl '>
        <img src={star} className='w-36 h-36 absolute right-0 top-0 ' />
      <p className='capitalize w-38 text-center text-[#004AC6] font-bold text-xs rounded-xl p-2 bg-[#004AC6]/10 '>
        performance leader
      </p>

      <p className='font-extrabold text-3xl text-black-500'>
            {topProductByProfit.productName}
      </p>

      <p className='text-sm text-[#434655] w-[85%]'>
        Consistently outperformed all office supplies in net profit
        margin for the fiscal year.
      </p>

      <p className='text-sm text-[#434655] capitalize'>
        Annual Profit
      </p>

      <p className='font-extrabold text-3xl text-black-500'>
        {topProductByProfit.profit.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </p>
    </div>
  )
}

export default TopProductCard
