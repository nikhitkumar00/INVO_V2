"use client";
import { AreaChart, CurveType } from "@tremor/react";
import { useState } from "react";
import { toast } from "sonner";

const Chart = () => {
  const [chartType, setChartType] = useState<CurveType>("natural");

  const dummyData = [
    { name: "Jun", uv: 4000, pv: 3400, amt: 3000 },
    { name: "Jul", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Aug", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Sep", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Oct", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Nov", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Dec", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Jan", uv: 2000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Mar", uv: 1890, pv: 4800, amt: 2181 },
  ];

  const chartTypes: CurveType[] = ["natural", "monotone", "step", "linear",];

  return (
    <AreaChart
      className="h-full p-4"
      data={dummyData}
      index="name"
      categories={["uv", "pv", "amt"]}
      colors={["#78716c", "#6b7280", "#71717a"]}
      yAxisWidth={50}
      showLegend={false}
      showAnimation
      animationDuration={1500}
      showGradient={true}
      curveType={chartType}
      onClick={() => {
        setChartType(
          chartTypes[(chartTypes.indexOf(chartType) + 1) % chartTypes.length],
        );
        toast.info(
          "Chart type changed to " +
            chartTypes[(chartTypes.indexOf(chartType) + 1) % chartTypes.length],
        );
      }}
    />
  );
};
export default Chart;
