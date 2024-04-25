"use client";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { toast } from "sonner";
import { AreaChart, CurveType } from "@tremor/react";
import { themeState } from "@/global/globalStates";

const Chart = () => {
  const [chartType, setChartType] = useState<CurveType>("natural");
  const [chartData, setChartData] = useState<any[]>([]);
  const theme = useRecoilValue(themeState);

  const chartTypes: CurveType[] = ["natural", "monotone", "step", "linear"];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/dashboard/API/chart", {
          method: "POST",
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setChartData(data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        toast.error("Failed to fetch chart data");
      }
    }

    fetchData();
  }, []);

  const handleChartTypeChange = () => {
    const nextChartType =
      chartTypes[(chartTypes.indexOf(chartType) + 1) % chartTypes.length];
    setChartType(nextChartType);
    toast.info(`Chart type changed to ${nextChartType}`);
  };

  return (
    <AreaChart
      className="h-[98%]"
      data={chartData}
      index="name"
      categories={["income", "orders"]}
      yAxisWidth={45}
      showLegend={true}
      colors={
        theme === "Modern"
          ? ["indigo", "cyan"]
          : theme === "Purple-Light"
            ? ["purple-700", "purple-800"]
            : theme === "Default-Dark"
              ? ["gray-300", "gray-100"]
              : ["neutral-700", "neutral-600"]
      }
      showGradient={true}
      curveType={chartType}
      autoMinValue
      onClick={handleChartTypeChange}
    />
  );
};

export default Chart;
