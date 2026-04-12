import React from 'react'
import green from '../assets/Container(3).png';
import orange from '../assets/Container(4).png';
import blue from '../assets/Container(5).png';
import yellow from '../assets/Container(6).png';

const images = [
   blue,
  orange,
  yellow,
  green
];
const Card = ({ label, value , description, format, image, index}) => {
  return (
    <div className='w-56 p-6 bg-white flex flex-col gap-3 rounded-lg '>
      <div className='w-full flex items-center justify-between'>
        <img src={image}/>
        <span className='w-14 bg-[#F0FDF4] text-[#16A34A] text-xs leading-4 px-2 py-1 rounded'> 
            +12.5%
        </span>
      </div>
      <p className='text-[#434655] leading-5 capitalize'>
        {label}
      </p>
        <p className='text-[#191C1E] text-2xl font-bold leading-7'>
          {format === 'currency' && `$${value.toFixed(3)}` }
          {format === 'percent' && `${value.toFixed(2)}%` }
          {format !== 'currency' && format !== 'percent' && value }
        </p>
        <p className='text-[#434655] text-sm leading-5 mt-2'>
          {description}
        </p>

      <img src={images[index]} />
    </div>
  )
}

export default Card
