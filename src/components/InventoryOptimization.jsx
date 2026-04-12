import React from 'react'
import gradientImg from '../assets/Gradient.png'
import strategic from '../assets/StrategicBackground.png'
const InventoryOptimization = () => {
  return (
    <div className='max-w-116 p-8 flex flex-col gap-4 relative '
    style={{ backgroundImage : `url(${strategic})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '16px' }}
    >
      <img src={gradientImg} alt='Strategic Background' className='absolute inset-0 w-full h-full object-cover rounded-xl' />
      <div className='mt-20 flex flex-col gap-4 relative z-10'>
      <h3 className='text-white font-bold text-2xl'>
        Inventory Optimization
        < br />
        Phase 2
      </h3>
      <p className='text-gray-400 text-sm'>
        Strategic analysis suggests reducing backorder furniture
        stock to improve working capital turnover by 18%.
      </p>
      <button className='border border-white bg-transparent text-white px-4 py-2 rounded hover:bg-blue-600 w-26'>
          Dismiss
      </button>
      </div>
    </div>
  )
}

export default InventoryOptimization
