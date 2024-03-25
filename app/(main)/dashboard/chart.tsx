"use client";
import { AreaChart, CurveType } from "@tremor/react";
import { useState } from "react";
import { toast } from "sonner";

const Chart = () => {
  const [chartType, setChartType] = useState<CurveType>("natural");

  const dummyData = [
    { name: "Jun", uv: 400, pv: 340, amt: 300 },
    { name: "Jul", uv: 300, pv: 138, amt: 221 },
    { name: "Aug", uv: 200, pv: 980, amt: 229 },
    { name: "Sep", uv: 278, pv: 398, amt: 200 },
    { name: "Oct", uv: 189, pv: 480, amt: 218 },
    { name: "Nov", uv: 230, pv: 380, amt: 250 },
    { name: "Dec", uv: 349, pv: 430, amt: 210 },
    { name: "Jan", uv: 200, pv: 240, amt: 240 },
    { name: "Feb", uv: 270, pv: 398, amt: 200 },
    { name: "Mar", uv: 180, pv: 480, amt: 218 },
  ];

  const chartTypes: CurveType[] = ["natural", "monotone", "step", "linear"];

  return (
    <AreaChart
      className="h-[98%]"
      data={dummyData}
      index="name"
      categories={["uv", "pv", "amt"]}
      colors={["#78716c", "#6b7280", "#71717a"]}
      yAxisWidth={50}
      showLegend={false}
      showAnimation
      animationDuration={1500}
      showGradient={false}
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
