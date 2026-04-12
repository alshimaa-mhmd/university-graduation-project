import { Pie, PieChart, Cell, Tooltip } from 'recharts';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { country, revenue } = payload[0].payload;
  return (
    <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 shadow-sm">
      <p className="text-sm font-medium text-gray-900">{country}</p>
      <p className="text-sm text-gray-500">
        ${revenue.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </div>
  );
};

export default function SimplePieChart() {
  const { salesByRegion } = useContext(DataContext);
  const data = salesByRegion.data;

  return (
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }}>
      <Pie
        dataKey="revenue"
        nameKey="country"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        fill="#8884d8"
        label
        isAnimationActive={true}
      />
      <Tooltip content={<CustomTooltip />} />
    </PieChart>
  );
}