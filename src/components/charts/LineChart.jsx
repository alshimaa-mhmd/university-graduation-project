import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import sampleData from '../../data/output (1) json.json'
const LineChartComponent = ( { data, datakey } ) => {
   

    
  return (
    <div className='w-full flex flex-col gap-8 p-8  '>    
     <ResponsiveContainer width="100%" height={400} className='mr-6'>
      <LineChart data={data}>
        <XAxis dataKey="month" style={{ fontSize : "10px"}}/>
        <YAxis style={{ fontSize : "10px"}}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={datakey} stroke="#004AC6"  dot={false} />
      </LineChart>
    </ResponsiveContainer>

    {/* <ResponsiveContainer width="100%" height={400} className='mr-6'>
      <LineChart data={profitData} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="profit" stroke="#004AC6"  dot={false} />
      </LineChart>
    </ResponsiveContainer> */}
   
    </div>
  )
}

export default LineChartComponent
