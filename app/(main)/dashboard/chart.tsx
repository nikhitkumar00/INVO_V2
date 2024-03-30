"use client";
import { themeState } from "@/global/globalStates";
import { AreaChart, CurveType } from "@tremor/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { toast } from "sonner";

const Chart = () => {
  const [chartType, setChartType] = useState<CurveType>("natural");

  const dummyData = [
    {
      sem: 1,
      navaneeth: 9.65,
      nikhit: 10,
      suryagayathri: 9.76,
      suru: 10,
      noah: 10,
      pranav: 10,
    },
    {
      sem: 2,
      navaneeth: 8.88,
      nikhit: 10,
      suryagayathri: 10,
      suru: 9.3,
      noah: 9.86,
      pranav: 10,
    },
    {
      sem: 3,
      navaneeth: 8.14,
      nikhit: 9.36,
      suryagayathri: 8.55,
      suru: 8.5,
      noah: 8.91,
      pranav: 9.09,
    },
    {
      sem: 4,
      navaneeth: 7.91,
      nikhit: 9.32,
      suryagayathri: 8.64,
      suru: 8.5,
      noah: 8.55,
      pranav: 9.09,
    },
    {
      sem: 5,
      navaneeth: 7.72,
      nikhit: 8.41,
      suryagayathri: 8.15,
      suru: 7.8,
      noah: 7.8,
      pranav: 8.39,
    },
    {
      sem: 6,
      navaneeth: 8.63,
      nikhit: 8.96,
      suryagayathri: 8.39,
      suru: 8.1,
      noah: 8.39,
      pranav: 8.61,
    },
    {
      sem: 7,
      navaneeth: 9.1,
      nikhit: 9.3,
      suryagayathri: 8.7,
      suru: 8.3,
      noah: 9.1,
      pranav: 8.9,
    },
  ];

  // const dummyData = [
  //   { name: "Jun", uv: 400, pv: 340, amt: 300 },
  //   { name: "Jul", uv: 300, pv: 138, amt: 221 },
  //   { name: "Aug", uv: 200, pv: 980, amt: 229 },
  //   { name: "Sep", uv: 278, pv: 398, amt: 200 },
  //   { name: "Oct", uv: 189, pv: 480, amt: 218 },
  //   { name: "Nov", uv: 230, pv: 380, amt: 250 },
  //   { name: "Dec", uv: 349, pv: 430, amt: 210 },
  //   { name: "Jan", uv: 200, pv: 240, amt: 240 },
  //   { name: "Feb", uv: 270, pv: 398, amt: 200 },
  //   { name: "Mar", uv: 180, pv: 480, amt: 218 },
  // ];

  const chartTypes: CurveType[] = ["natural", "monotone", "step", "linear"];
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <AreaChart
      className="h-[98%]"
      data={dummyData}
      index="sem"
      categories={[
        "nikhit",
        "suryagayathri",
        "suru",
        "noah",
        "pranav",
        "navaneeth",
      ]}
      yAxisWidth={40}
      showLegend={false}
      colors={
        theme === "Modern"
          ? ["indigo", "cyan", "blue", "teal", "green", "purple"]
          : [
              "neutral-300",
              "neutral-600",
              "neutral-800",
              "neutral-500",
              "neutral-700",
              "neutral-400",
            ]
      }
      showGradient={false}
      curveType={chartType}
      autoMinValue
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
