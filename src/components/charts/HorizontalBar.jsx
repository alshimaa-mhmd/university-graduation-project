import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from "recharts";

const fmt = (v) =>
  "$" + Math.abs(v).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const CustomLabel = ({ x, y, width, height, value, negative }) => (
  <text
    x={x + width + 6}
    y={y + height / 2}
    dominantBaseline="middle"
    fontSize={12}
    fontWeight={500}
    fill={negative ? "#dc2626" : "#111827"}
  >
    {negative ? "-" : ""}{fmt(value)}
  </text>
);

const CustomBar = ({ x, y, width, height, fill, maxWidth }) => {
  const barH = Math.max(height * 0.5, 7);
  const barY = y + (height - barH) / 2;
  return (
    <g>
      <rect x={x} y={barY} width={maxWidth} height={barH} rx={4} fill="#f1f5f9" />
      <rect x={x} y={barY} width={width} height={barH} rx={4} fill={fill} />
    </g>
  );
};

const HorizontalBar = ({ data, color }) => {
  const negative = data.some((d) => d.profit < 0);
  const chartData = data.map((d) => ({ ...d, profit: Math.abs(d.profit) }));
  const max = Math.max(...chartData.map((d) => d.profit));
  const rowH = 52;

  return (
    <ResponsiveContainer width="100%" height={data.length * rowH + 20}>
      <BarChart
        layout="vertical"
        data={chartData}
        margin={{ top: 4, right: 88, left: 0, bottom: 4 }}
        barCategoryGap="30%"
        style={{ display : "flexBok", justifyContent : "space-between" }}
      >
       
        <YAxis
          type="category"
          dataKey="productName"
          width={210}
          tick={{ fontSize: 12, fill: "#374151", fontFamily: "inherit" }}
          axisLine={false}
          tickLine={false}
        />
        <Bar
          dataKey="profit"
          shape={(props) => (
            <CustomBar {...props} fill={color} maxWidth={props.background?.width || props.width} />
          )}
          isAnimationActive
        >
             <XAxis type="number" domain={[0, max * 1.05]} hide />
          <LabelList
            dataKey="profit"
            content={(props) => <CustomLabel {...props} negative={negative} />}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HorizontalBar;