import React, { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList } from "recharts";
import { ChevronDown, ChevronUp } from "lucide-react";

const INITIAL_VISIBLE = 5;

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
  const [showAll, setShowAll] = useState(false);

  const negative = data.some((d) => d.profit < 0);
  const allChartData = data.map((d) => ({ ...d, profit: Math.abs(d.profit) }));
  const visibleData = showAll ? allChartData : allChartData.slice(0, INITIAL_VISIBLE);
  const max = Math.max(...allChartData.map((d) => d.profit));
  const rowH = 52;
  const hasMore = data.length > INITIAL_VISIBLE;

  return (
    <div>
      <ResponsiveContainer width="100%" height={visibleData.length * rowH + 20}>
        <BarChart
          layout="vertical"
          data={visibleData}
          margin={{ top: 4, right: 88, left: 0, bottom: 4 }}
          barCategoryGap="30%"
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

      {hasMore && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-2 flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-800 transition-colors duration-150 mx-auto"
        >
          {showAll ? (
            <>
              <ChevronUp size={14} />
              Show less
            </>
          ) : (
            <>
              <ChevronDown size={14} />
              Show {data.length - INITIAL_VISIBLE} more
            </>
          )}
        </button>
      )}
    </div>
  );
};

export default HorizontalBar;