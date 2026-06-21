import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
// #region Sample data

// #endregion
export default function DashedLineChart() {
    const { revenueForecast } = useContext(DataContext);
    let data = revenueForecast ;
    console.log(revenueForecast);
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 15,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="4 4" stroke = "#8884d8" />
      <XAxis dataKey="month"  />
      <YAxis width="auto"  />
      <Tooltip
        cursor={{ stroke : "#004AC6" }}
        contentStyle={{ backgroundColor: '#fff', borderColor: '#004AC6' }}
      />
      <Legend />
      <Line
        type="monotone" 
        dataKey="predicted_revenue"
        stroke = "#004AC6"
        strokeDasharray="5 5"
        dot={{
          fill: '#004AC6',
        }}
        activeDot={{
          stroke : "#004AC6",
        }}
      />
     

    </LineChart>
      );
}