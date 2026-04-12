import React, { useContext } from 'react'
// import LineChart from '../components/charts/LineChart'
import DataContext from '../context/DataContext'
import Card from '../components/Card';

import money from '../assets/Background.png'
import wallet from '../assets/Background(1).png'
import percentage from '../assets/Background(2).png'
import cart from '../assets/Background(3).png'
import LineChartBox from '../components/LineChartBox';
import InsightCard from '../components/InsightCard';
import AIInsight from '../assets/Background(4).png'
import CustomActiveShapePieChart from '../components/charts/PieChartComponent';

const images =[
    cart,
    percentage,
    wallet,
     money

   
];


const Dashboard = () => {

  const d = useContext(DataContext);
  const cardData = d.data.cards;
  const insightData = d.data.insights;

  return (
    <div className='p-8 flex flex-col gap-10'>
    <div className='w-full flex items-center flex-wrap gap-6'>
      {
        cardData.filter( card => card.format !== "text").map((card, index) => (
          <Card key={card.id} label={card.label} value={card.value} format = {card.format} image={images[index]} index={index} />
        ))
      }

    </div>
    <div className='flex gap-8 flex-wrap items-start'>
      <LineChartBox />
      <div className='flex flex-col p-8 gap-6 bg-gray-500 rounded-xl'>
        <div className='flex items-center gap-4'>
          <img src={AIInsight} alt='AI Insight' className='w-10 h-10' />
          <p className='text-[#191C1E] text-lg font-bold leading-6'>
            AI Insights
          </p>
        </div>
        {
          insightData.map((insight, index) => (
            <InsightCard key={index}  description={insight} format = "text" index={index} />
          ))
        }
      </div>
    </div>

        {/* Regional revenue distribution */}
    <div className='flex flex-col bg-white rounded-xl p-8 gap-6 '>
        <p className='text-[#191C1E] font-bold text-lg '>
          Regional Revenue Distribution
        </p>

        <CustomActiveShapePieChart />
    </div>
  </div>
  )
}

export default Dashboard
