import { AreaChart } from "@tremor/react";
const Chart = () => {
  const dummyData = [
    { name: "Page A", uv: 4000, pv: 3400, amt: 3000 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
    { name: "Page H", uv: 2000, pv: 2400, amt: 2400 },
    { name: "Page I", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page J", uv: 1890, pv: 4800, amt: 2181 },
  ];
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
      animationDuration={3000}
      showGradient={false}
      curveType="monotone"
    />
  );
};
export default Chart;
