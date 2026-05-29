import { Pie, PieChart, Cell, Tooltip, Legend, ResponsiveContainer  } from 'recharts';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const COLORS = ['#1152D4', '#4B7FE8', '#89AAEF', '#C4D4F7'];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { region, revenue } = payload[0].payload;
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
      <p className="text-sm font-medium text-gray-900">{region}</p>
      <p className="text-sm text-gray-600">
        ${revenue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </div>
  );
};

const CustomLegend = ({ payload }) => (
  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
    {payload.map((entry, index) => (
      <div key={index} className="flex items-center gap-1.5">
        <span
          className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
          style={{ backgroundColor: entry.color }}
        />
        <span className="text-sm text-gray-600">{entry.value}</span>
      </div>
    ))}
  </div>
);


export default function DonutChart() {
  const { salesByRegion } = useContext(DataContext);
  const data = salesByRegion.data;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="revenue"
          nameKey="region"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={150}
          innerRadius={80}
          isAnimationActive={true}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer>
  );
}