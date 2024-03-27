"use client";
import { AreaChart, CurveType } from "@tremor/react";
import { useState } from "react";
import { toast } from "sonner";

const Chart = () => {
  const [chartType, setChartType] = useState<CurveType>("natural");

  const dummyData = [
    { sem: 1, navaneeth: 9.65, nikhit: 10, suru: 10, noah: 10, pranav: 10 },
    { sem: 2, navaneeth: 8.88, nikhit: 10, suru: 9.3, noah: 9.86, pranav: 10 },
    {
      sem: 3,
      navaneeth: 8.14,
      nikhit: 9.36,
      suru: 8.5,
      noah: 8.91,
      pranav: 9.09,
    },
    {
      sem: 4,
      navaneeth: 7.91,
      nikhit: 9.32,
      suru: 8.5,
      noah: 8.55,
      pranav: 9.09,
    },
    {
      sem: 5,
      navaneeth: 7.72,
      nikhit: 8.41,
      suru: 7.8,
      noah: 7.8,
      pranav: 8.39,
    },
    {
      sem: 6,
      navaneeth: 8.63,
      nikhit: 8.96,
      suru: 8.1,
      noah: 8.39,
      pranav: 8.61,
    },
    { sem: 7, navaneeth: 9.1, nikhit: 9.3, suru: 8.3, noah: 9.1, pranav: 8.9 },
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
  const vari = "stroke-blue-500";

  const chartTypes: CurveType[] = ["natural", "monotone", "step", "linear"];
  return (
    <AreaChart
      className="h-[98%]"
      data={dummyData}
      index="sem"
      categories={["nikhit", "suru", "noah", "pranav", "navaneeth"]}
      yAxisWidth={40}
      showLegend={false}
      colors={[
        "neutral-200",
        "neutral-600",
        "neutral-500",
        "neutral-400",
        "neutral-700",
      ]}
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
