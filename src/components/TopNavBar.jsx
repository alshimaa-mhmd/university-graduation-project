import React from 'react'
import notificationImg from '../assets/notification.png'
import jsPDF from "jspdf";
// import html2canvas from "html2canvas-pro";
import DataContext from '../context/DataContext';
import { useContext } from 'react';

const TopNavBar = ({ link }) => {
const {data, cardData, Insights, recommendations, salesByRegion, topProductsByProfit, bottomProductsByProfit, category, summary, outlier, duplicates, score } = useContext(DataContext);

const exportPDF = () => {
  if(!data || Object.keys(data).length === 0 || data.message) return;
  const pdf = new jsPDF("p", "mm", "a4");
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = 0;

  // ─── HELPERS ───────────────────────────────────────────

  const addPage = () => {
    pdf.addPage();
    y = 20;
  };

  const checkPageBreak = (neededHeight) => {
    if (y + neededHeight > pageHeight - 20) addPage();
  };

  const drawRect = (x, yPos, w, h, color) => {
    pdf.setFillColor(...color);
    pdf.roundedRect(x, yPos, w, h, 2, 2, "F");
  };

  const sectionTitle = (title) => {
    checkPageBreak(16);
    pdf.setFillColor(17, 82, 212);
    pdf.rect(margin, y, 3, 8, "F");
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(11);
    pdf.setTextColor(17, 82, 212);
    pdf.text(title, margin + 6, y + 6);
    y += 14;
  };

  const divider = () => {
    pdf.setDrawColor(220, 220, 230);
    pdf.setLineWidth(0.3);
    pdf.line(margin, y, pageWidth - margin, y);
    y += 6;
  };

  // ─── COVER PAGE ────────────────────────────────────────

  // Dark header band
  pdf.setFillColor(17, 82, 212);
  pdf.rect(0, 0, pageWidth, 60, "F");

  // Accent stripe
  pdf.setFillColor(139, 170, 239);
  pdf.rect(0, 55, pageWidth, 5, "F");

  // Title
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(26);
  pdf.setTextColor(255, 255, 255);
  pdf.text("Sales Analysis Report", margin, 32);

  // Subtitle
  pdf.setFontSize(11);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(196, 212, 247);
  pdf.text("Powered by VELOX Business Intelligence", margin, 44);

  // Date
  const today = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  pdf.setFontSize(9);
  pdf.setTextColor(196, 212, 247);
  pdf.text(`Generated on ${today}`, margin, 53);

  y = 80;

  // ─── SUMMARY CARD ──────────────────────────────────────

  if (summary) {
    drawRect(margin, y, contentWidth, 22, [240, 244, 255]);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.setTextColor(17, 82, 212);
    pdf.text("EXECUTIVE SUMMARY", margin + 6, y + 7);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(9);
    pdf.setTextColor(60, 60, 80);
    const summaryLines = pdf.splitTextToSize(String(summary), contentWidth - 12);
    pdf.text(summaryLines[0], margin + 6, y + 15);
    y += 30;
  }

  // ─── KPI CARDS ─────────────────────────────────────────

  if (cardData?.length) {
    sectionTitle("Key Performance Indicators");

    const cardW = (contentWidth - 6) / 2;
    const cardH = 22;

    cardData.forEach((card, i) => {
      const col = i % 2;
      const x = margin + col * (cardW + 6);

      if (col === 0) checkPageBreak(cardH + 4);

      drawRect(x, y, cardW, cardH, [240, 244, 255]);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(100, 116, 139);
      pdf.text(String(card.label).toUpperCase(), x + 6, y + 8);

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(13);
      pdf.setTextColor(17, 82, 212);

      let displayValue = card.value;
      if (card.format === "currency") displayValue = `$${Number(card.value).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      else if (card.format === "percent") displayValue = `${card.value}%`;
      else if (card.format === "number") displayValue = Number(card.value).toLocaleString("en-US");

      pdf.text(String(displayValue), x + 6, y + 18);

      if (col === 1 || i === cardData.length - 1) y += cardH + 4;
    });

    y += 6;
  }

  // ─── INSIGHTS ──────────────────────────────────────────

  if (Insights?.length) {
    sectionTitle("Key Insights");

    Insights.map((insight) => {
      checkPageBreak(12);
      pdf.setFillColor(17, 82, 212);
      pdf.circle(margin + 2, y + 3, 1.2, "F");
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(50, 50, 70);
      const lines = pdf.splitTextToSize(String(insight.insight), contentWidth - 10);
      pdf.text(lines, margin + 7, y + 5);
      y += lines.length * 5 + 4;
    });

    y += 4;
    divider();
  }

  // ─── RECOMMENDATIONS ───────────────────────────────────

  if (recommendations?.length) {
    sectionTitle("Strategic Recommendations");

    recommendations.forEach((rec, i) => {
      checkPageBreak(14);
      drawRect(margin, y, contentWidth, 12, [240, 244, 255]);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8);
      pdf.setTextColor(17, 82, 212);
      pdf.text(`${i + 1}`, margin + 4, y + 8);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(50, 50, 70);
      const lines = pdf.splitTextToSize(String(rec), contentWidth - 14);
      pdf.text(lines[0], margin + 10, y + 8);
      y += 16;
    });

    y += 4;
    divider();
  }

  // ─── SALES BY REGION ───────────────────────────────────

  if (salesByRegion?.data?.length) {
    sectionTitle("Sales by Region");

    const blues = [[17, 82, 212], [75, 127, 232], [137, 170, 239], [196, 212, 247]];
    const maxRevenue = Math.max(...salesByRegion.data.map(r => r.revenue));
    const barMaxW = contentWidth - 60;

    salesByRegion.data.forEach((region, i) => {
      checkPageBreak(12);
      const barW = (region.revenue / maxRevenue) * barMaxW;
      const color = blues[i % blues.length];

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(60, 60, 80);
      pdf.text(String(region.region), margin, y + 5);

      pdf.setFillColor(...color);
      pdf.roundedRect(margin + 35, y, barW, 6, 1, 1, "F");

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(8);
      pdf.setTextColor(17, 82, 212);
      pdf.text(`$${Number(region.revenue).toLocaleString("en-US", { maximumFractionDigits: 0 })}`, margin + 38 + barW, y + 5);

      y += 10;
    });

    y += 6;
    divider();
  }

  // ─── TOP PRODUCTS ──────────────────────────────────────

  if (topProductsByProfit?.data?.length) {
    sectionTitle("Top Products by Profit");

    // Table header
    drawRect(margin, y, contentWidth, 8, [17, 82, 212]);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.setTextColor(255, 255, 255);
    pdf.text("Product", margin + 4, y + 5.5);
    pdf.text("Profit", margin + contentWidth - 25, y + 5.5);
    y += 10;

    topProductsByProfit.data.slice(0, 10).forEach((product, i) => {
      checkPageBreak(9);
      const rowColor = i % 2 === 0 ? [248, 250, 255] : [255, 255, 255];
      drawRect(margin, y, contentWidth, 8, rowColor);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(50, 50, 70);
      const name = pdf.splitTextToSize(String(product.productName), contentWidth - 35);
      pdf.text(name[0], margin + 4, y + 5.5);

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(17, 82, 212);
      pdf.text(`$${Number(product.profit).toLocaleString("en-US", { maximumFractionDigits: 0 })}`, margin + contentWidth - 25, y + 5.5);

      y += 9;
    });

    y += 6;
    divider();
  }

  // ─── BOTTOM PRODUCTS ───────────────────────────────────

  if (bottomProductsByProfit?.data?.length) {
    sectionTitle("Underperforming Products");

    drawRect(margin, y, contentWidth, 8, [220, 38, 38]);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.setTextColor(255, 255, 255);
    pdf.text("Product", margin + 4, y + 5.5);
    pdf.text("Loss", margin + contentWidth - 25, y + 5.5);
    y += 10;

    bottomProductsByProfit.data.slice(0, 10).forEach((product, i) => {
      checkPageBreak(9);
      const rowColor = i % 2 === 0 ? [255, 248, 248] : [255, 255, 255];
      drawRect(margin, y, contentWidth, 8, rowColor);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(50, 50, 70);
      const name = pdf.splitTextToSize(String(product.productName), contentWidth - 35);
      pdf.text(name[0], margin + 4, y + 5.5);

      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(220, 38, 38);
      pdf.text(`$${Number(product.profit).toLocaleString("en-US", { maximumFractionDigits: 0 })}`, margin + contentWidth - 25, y + 5.5);

      y += 9;
    });

    y += 6;
    divider();
  }

  // ─── CATEGORY ANALYSIS ─────────────────────────────────

  if (category && Object.keys(category).length) {
    sectionTitle("Category Analysis");

    Object.entries(category).forEach(([name, info]) => {
      checkPageBreak(16);
      drawRect(margin, y, contentWidth, 14, [240, 244, 255]);

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.setTextColor(17, 82, 212);
      pdf.text(String(name), margin + 4, y + 6);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.setTextColor(100, 116, 139);
      pdf.text(`Contribution: ${info.contribution}`, margin + 4, y + 11);
      pdf.text(`Status: ${info.status}`, margin + 55, y + 11);
      pdf.text(`Action: ${info.action}`, margin + 105, y + 11);

      y += 18;
    });

    y += 4;
    divider();
  }

  // ─── DATA QUALITY ──────────────────────────────────────

  if (outlier) {
    sectionTitle("Data Quality Report");

    const items = [
      { label: "Outliers Detected", value: outlier ?? "N/A" },
      { label: "Duplicates Removed", value: duplicates ?? "N/A" },
      { label: "Data Quality Score", value: score ?? `${100 - (outlier.missingPercentage ?? 0)}%` },
    ];

    items.forEach((item) => {
      checkPageBreak(12);
      drawRect(margin, y, contentWidth, 10, [240, 244, 255]);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.setTextColor(60, 60, 80);
      pdf.text(String(item.label), margin + 6, y + 7);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(17, 82, 212);
      pdf.text(String(item.value), margin + contentWidth - 20, y + 7);
      y += 13;
    });
  }

  // ─── FOOTER ON EVERY PAGE ──────────────────────────────

  const totalPages = pdf.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    pdf.setFillColor(17, 82, 212);
    pdf.rect(0, pageHeight - 12, pageWidth, 12, "F");
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(196, 212, 247);
    pdf.text("VELOX Business Intelligence", margin, pageHeight - 4);
    pdf.text(`Page ${i} of ${totalPages}`, pageWidth - margin - 20, pageHeight - 4);
  }

  pdf.save("velox-analysis-report.pdf");
};



  // ///////////////////////////////
  return (
    <div className="flex flex-wrap items-start justify-between px-4 md:px-6 py-4 w-full static top-0 right-0 mb-4 md:mb-0 gap-4">
      
      {/* Left: Title & Subtitle */}
      <div className="flex-1 min-w-0">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold truncate">
          {link === "overview" && "Main Insights Dashboard"}
          {link === "upload hub" && "Data Upload & History"}
          {link === "product deep dive" && "Comparison Mode"}
          {link === "sales trends" && "Future Trends & Forecasting"}
          {link === "AI Agent" && "AI Agent"}
        </h1>
        <p className="text-[#64748B] mt-1 text-xs sm:text-sm md:text-base line-clamp-2">
          {link === "overview" && "Real-time performance metrics for your business."}
          {link === "upload hub" && "Manage your business datasets and monitor processing history."}
          {link === "product deep dive" && "Analyze performance metrics across different fiscal periods."}
          {link === "sales trends" && "Leveraging Prophet and ARIMA models to project market trajectories based on historical performance cycles."}
          {link === "AI Agent" && "Ask anything about your business data."}
        </p>
      </div>

      {/* Right: Notification + Export */}
      <div className="flex gap-3 items-center relative shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-600 absolute bottom-7  z-10" />
        <button className="cursor-pointer">
          <img src={notificationImg} alt="Notification" className="w-9 h-9 sm:w-10 sm:h-10" />
        </button>
       <button
  className="px-3 sm:px-4 py-2 h-9 sm:h-10 w-28 sm:w-36 bg-[#1152D4] text-white text-sm rounded-md transition-colors duration-200
  hover:bg-[#1152D4]/90
  disabled:bg-[#1152D4]/50 disabled:text-white/70 disabled:cursor-not-allowed"
  onClick={exportPDF}
  disabled={!data || Object.keys(data).length === 0 || data.message}
>
  Export Data
</button>
      </div>

    </div>
  );
};

export default TopNavBar;
