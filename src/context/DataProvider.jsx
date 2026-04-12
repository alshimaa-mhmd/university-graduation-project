import { useState } from "react";
import DataContext from "./DataContext";
import sampleData from "../data/output (2).json";

export default function DataProvider({ children }) {

    const [data, setData] = useState(sampleData);
    const outlier = data.dataQuality.outliersRemoved;
    const recommendations = data.recommendations;
    const Insights = data.insights;
    const salesByRegion = data.charts.salesByRegion;
    const profitOverTime = data.charts.profitOverTime;
    const salesOverTime = data.charts.salesOverTime;
    const topProductsByProfit = data.charts.topProductsByProfit;
    const bottomProductsByProfit = data.charts.bottomProductsByProfit;
    const topProductByProfit = data.charts.topProductsByProfit.data[0];
    const lessProductByProfit = data.charts.bottomProductsByProfit.data[bottomProductsByProfit.data.length - 1];

     return (

    <DataContext.Provider value={{ data, setData, outlier, recommendations, Insights, salesByRegion, profitOverTime, salesOverTime, topProductsByProfit, bottomProductsByProfit, topProductByProfit, lessProductByProfit }}>
      {children}
    </DataContext.Provider>
  );
}