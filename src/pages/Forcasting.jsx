import React, { useContext } from 'react'
import CustomActiveShapePieChart from '../components/charts/PieChartComponent'
import period from '../assets/Background(5).png'
import lamp from '../assets/Container.png'
import AIImage from '../assets/Container(1).png'
import trash from '../assets/BackgroundShadow.png'
import BarChartComponent from '../components/charts/BarChartComponent'
import DataContext from '../context/DataContext'
import InsightCard from '../components/InsightCard'
const Forcasting = () => {
  const outlier = useContext(DataContext).outlier;
  const recommendations = useContext(DataContext).recommendations ;
  return (
    <>
    <div className='p-8 flex flex-col gap-10'>
  {/* start top section */}
    <div className='flex gap-8 flex-wrap items-start'>
  {/* start chart section */} 
      <div className='flex flex-col gap-6 w-157.5 bg-white rounded-xl p-8'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-1'>
            <h3 className='font-bold text-lg leading-7 text-black-500'>
              Profit Over Time
            </h3>
            <p className='text-[#434655] '>
              Net margin performance across all sectors
            </p>
          </div>
          <div className='flex gap-1 items-center'>
            <img src={period} className='w-3 h-3'/>
            <p className='text-[#434655] text-sm font-medium leading-5'>
             Current Period
            </p>
          </div>
        </div>

        <BarChartComponent />

      </div>
   {/* end chart section */}
   {/* start data quality & region section */}

       <div className='flex flex-col gap-6  w-76'>
{/* start Data quality */}
        <div className='flex items-center justify-between bg-gray-500 rounded-xl p-6 w-full h-30'>
          <div className='flex flex-col gap-1'>
            <p className='capitalize text-[#434655] font-bold text-sm'>
              Data Quality
            </p>
            <p className='text-black-500 font-bold text-2xl'>
              {outlier}
            </p>
            <p className='capitalize text-[#434655] font-bold text-sm'>
             outliers removed
            </p>
          </div>
          <img src={trash} />
        </div>
{/* end Data quality */}
{/* start Region section */}
         <div className='flex flex-col  justify-between bg-white rounded-xl p-6 w-full min-h-94'>
            <p className=' text-black-500 font-bold '>
              Sales by Region
            </p>
            <p className='text-[#434655] font-bold text-sm w-full text-center'>
              Global
            </p>
            <div className='w-full flex justify-between items-center'>
              <p>North America</p>
              <p>100%</p>
            </div> 
          </div>
       </div>
  
   {/* end data quality & region section */}
   
    </div> 
    {/* end top section */}
    {/* start bottom section */}
    <div className='flex flex-col gap-6'>
      <div className='flex gap-2'>
        <img src={lamp} alt='lamp'/>
        <h3 className='text-black-500 font-bold'>Strategic Recommendation</h3>
      </div>
      <div className='flex gap-6 items-center'>
        {
          recommendations.map((recommendation, index) => (
           <InsightCard key={index} title={"Focus on high-profit"} description={recommendation} index={index} CostumeWidth="304px"/>
          ))
        }
      </div>
    </div>
 
 {/* AI summary */}
  <div className='flex gap-6 bg-white rounded-xl p-4 border-l-4 border-l-[#004AC6]'>
    <img src={AIImage} alt='AI Summary' className='w-6 h-5' />
    <p className='font-bold'>
      AI Summary: The profit over time chart indicates a steady increase in net margin performance across all sectors. The data quality section shows that outliers have been removed.
    </p>
  </div> 
 
 </div> 
</>    
   
  )
}

export default Forcasting
