import React, { useContext } from 'react'
import DataContext from '../../context/DataContext'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';


const BarChartComponent = () => {

  const d = useContext(DataContext);

  console.log(d.data.charts.topProductsByProfit)
  const dataSample = d.data.charts;  
  const topProductCharts = dataSample.topProductsByProfit.data;
  const bottomProductCharts = dataSample.bottomProductsByProfit.data;
   
  // console.log(topProductCharts);
  return (
   <div className='w-full flex flex-col gap-8 p-8  '>   
     <ResponsiveContainer width="100%" height={400} className='mr-6'>
           <BarChart data={topProductCharts}>
             <CartesianGrid strokeDasharray="0 0" />
             <XAxis dataKey="productName" style={{ fontSize : "12px" }}/>
             <YAxis style={{ fontSize : "12px" }} />
             <Tooltip />
             <Legend />
             <Bar dataKey="profit" fill="#8884d8" stackId="1" />
           </BarChart>
           {/* <BarChart data={bottomProductCharts}>
             <CartesianGrid strokeDasharray="3 3" />
             <XAxis dataKey="productName" />
             <YAxis />
             <Tooltip />
             <Legend />
             <Bar dataKey="profit" fill="red" stackId="1" />
           </BarChart> */}
         </ResponsiveContainer>
    </div>
  )
}

export default BarChartComponent
