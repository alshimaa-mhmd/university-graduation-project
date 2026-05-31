import { useState } from "react";
import DataContext from "./DataContext";
// import sampleData from "../data/output (2).json";

export default function DataProvider({ children }) {
    const [jobId, setJobId] = useState(null);

    const [data, setData] = useState(null);
    // if data is error 
    const errorMsg = data?.message;

    const outlier = data?.dataQuality?.anomaliesDetected;
    const cardData = data?.cards;
    const recommendations = data?.recommendations_plan?.actions;
    const Insights = data?.insights_analysis?.data;
    const salesByRegion = data?.charts?.salesByRegion;
    const profitOverTime = data?.charts?.profitOverTime;
    const salesOverTime = data?.charts?.salesOverTime;
    const topProductsByProfit = data?.charts?.topProductsByProfit;
    const bottomProductsByProfit = data?.charts?.bottomProductsByProfit;
    const topProductByProfit = data?.charts?.topProductsByProfit?.data?.[0];
    const lessProductByProfit = data?.charts?.bottomProductsByProfit?.data?.[bottomProductsByProfit?.data?.length - 1];
    const category = data?.category_analysis;
    const summary = data?.ai_summary;
    const revenueForecast = data?.charts?.revenueForecast?.data;
     return (

    <DataContext.Provider value={{ 
      data, 
      setData, 
      errorMsg,
      outlier, 
      recommendations, 
      Insights, 
      salesByRegion, 
      profitOverTime, 
      salesOverTime, 
      topProductsByProfit, 
      bottomProductsByProfit, 
      topProductByProfit, 
      lessProductByProfit,
      cardData,
      category,
      summary,
      revenueForecast,
      jobId,
      setJobId,
     }}>
      {children}
    </DataContext.Provider>
  );
}