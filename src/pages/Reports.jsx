import React, { useContext } from 'react'
import BarChartComponent from '../components/charts/BarChartComponent';
import TopProductCard from '../components/TopProductCard';
import BottomProductCard from '../components/BottomProductCard';
import HorizontalBar from '../components/charts/HorizontalBar';
import DataContext from '../context/DataContext';
import FileText from '../assets/BackgroundShadow(1).png';
import Monitor from '../assets/BackgroundShadow(2).png';
import Package from '../assets/BackgroundShadow(3).png';
import { Download, MoreHorizontal, Sparkles,  } from "lucide-react";


const categories = [
  { name: "Paper Supplies", pct: 64, icon: FileText, color: "bg-blue-500" },
  { name: "Technology", pct: 28, icon: Monitor, color: "bg-gray-400" },
  { name: "Appliances", pct: 8, icon: Package, color: "bg-orange-500" },
];

function CategoryRow({ name, pct, icon, color }) {
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center shrink-0">
        <img src={icon} size={14} className="text-gray-500 w-14" />
      </div>
      <span className="text-sm text-gray-700 flex-1">{name}</span>
      <div className="flex-[2] h-1.5 bg-gray-100 rounded-full overflow-hidden mx-3">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-sm font-medium text-gray-800 w-7 text-right">{pct}%</span>
    </div>
  );
}


const Reports = () => {
  const { topProductsByProfit, bottomProductsByProfit } = useContext(DataContext);
  return (
    <>
  <div className='p-8 flex flex-col gap-10'>
    <div className='w-full flex items-start flex-wrap gap-6'>
      <TopProductCard />
      <BottomProductCard />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4">
       <div className="flex flex-col gap-4">
 
          {/* Top 20 Products */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-base font-semibold text-gray-900">
                  Top 20 Products by Profit
                </h2>
                <p className="text-xs text-gray-400 mt-0.5">
                  Aggregated earnings across the premier inventory tier.
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Download size={15} className="cursor-pointer hover:text-gray-600" />
                <MoreHorizontal size={15} className="cursor-pointer hover:text-gray-600" />
              </div>
            </div>
            <HorizontalBar data={topProductsByProfit.data} color="#004AC6" /> 
          </div>

           <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="mb-4">
              <h2 className="text-base font-semibold text-gray-900">
                Bottom 20 Products by Profit
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                Critical deficit items requiring strategic liquidation or pricing adjustment.
              </p>
            </div>
            <HorizontalBar data={bottomProductsByProfit.data} color="#ef4444" />

          </div>
        </div>

            <div className="flex flex-col gap-4">
 
          {/* AI Summary Insight */}
          <div className={` min-h-26 p-5 bg-white rounded-lg flex flex-col border-l-4 border-l-[#004AC6] gap-[7px] `}
               
            >
              <div className='flex items-center gap-4'>
                <Sparkles size={15} className="text-[#004AC6]" />
                <p className='text-black-500 text-lg font-bold leading-6'>
                  AI Summary Insights
                </p>
              </div>
              <p className={`text-[14px] leading-5 text-black-500`}>
                "Office paper supplies currently hold
                  a 21% higher ROI than high-tech
                  peripherals. Consider increasing
                  'Easy-staple' inventory by 15% for
                  Q4 to capitalize on recurring
                  purchase cycles."
              </p>
            </div>
 
          {/* Category Breakdown */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Category Breakdown</h3>
            <div>
              {categories.map((cat) => (
                <CategoryRow key={cat.name} {...cat} />
              ))}
            </div>
          </div>
 
          {/* Restock Optimization */}
          <div className="bg-slate-800 rounded-xl p-4">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3">
              <img src={FileText} size={15} className="text-slate-300 w-15" />
            </div>
            <h3 className="text-sm font-semibold text-white mb-1">Restock Optimization</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Generate a smart purchase order based on this profitability deep dive.
            </p>
            <button className="w-full py-2 bg-slate-100 hover:bg-white transition-colors rounded-lg text-sm font-medium text-slate-800">
              Generate Report
            </button>
          </div>
 
        </div>


    </div>


    </div>

    </>
  )
}

export default Reports
