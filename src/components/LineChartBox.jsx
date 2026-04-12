import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext';
import LineChart from './charts/LineChart';


const LineChartBox = () => {

     const d = useContext(DataContext);
     const lineChartData =  d.data.charts;
        // console.log(`line chart data: ${JSON.stringify(lineChartData)}`);
    
    const revenueData  = lineChartData.salesOverTime.data; // [{ month: "2014-01", revenue: 5494.99 }, ...]
    const profitData = lineChartData.profitOverTime.data;
       
    const [chartType, setChartType] = useState('revenue');

    function handleChartTypeChange(type) {
        setChartType(type);
    }

  return (
    <div className='w-157.25 flex flex-col bg-gray-500 gap-10 p-8 rounded-xl'>
        <div className='w-full flex items-center justify-between'>
           
            <div className='flex flex-col'>
                <p className='text-[#191C1E] text-2xl font-bold leading-7'>
                    Sales Over Time
                </p>
                <span className='text-[#434655] text-sm leading-5 mt-2'>
                    Monthly revenue trajectory for the year 2024
                </span>
            </div>

            <div className='flex items-center '>
                <input type='radio' name='type' className={` mr-1 ${ chartType === 'revenue' ? 'text-[#004AC6]' : 'text-[#495C95]' } hover:text-[#004AC6] text-xs font-bold leading-4 rounded`} onClick={() => handleChartTypeChange('revenue')} />
                <label className={` mr-2 ${ chartType === 'revenue' ? 'text-[#004AC6]' : 'text-[#495C95]' } hover:text-[#004AC6] text-xs font-bold leading-4 rounded`}> Revenue</label>
               
                <input type='radio' name='type' className={`mr-1 ${ chartType === 'profit' ? 'text-[#004AC6]' : 'text-[#495C95]' } hover:text-[#004AC6] text-xs font-bold leading-4 rounded`} onClick={() => handleChartTypeChange('profit')} />
                <label className={` ${ chartType === 'profit' ? 'text-[#004AC6]' : 'text-[#495C95]' } hover:text-[#004AC6] text-xs font-bold leading-4 rounded`}> Profit</label>
            </div>


           
        </div>
       {
                chartType === 'revenue' && <LineChart data={revenueData} datakey = "revenue" />
            }
            {
                chartType === 'profit' && <LineChart data={profitData} datakey = "profit" />
            }
    </div>
  )
}

export default LineChartBox
