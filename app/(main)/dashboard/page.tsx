"use server";
import { Billlog, Settings, Stocks, Dashboard } from "@/public/Icons";
import Header from "../_components/Header";
import Chart from "./chart/chart";
import AdvancedTable from "../_components/AdvancedTable";
const DashboardPage = async () => {
  var income: number = await fetch(
    "http://localhost:3000/dashboard/API/income",
    {
      method: "POST",
    },
  ).then((res) => res.json());

  var expense: number = await fetch(
    "http://localhost:3000/dashboard/API/expense",
    {
      method: "POST",
    },
  ).then((res) => res.json());

  var totalorders: number = await fetch(
    "http://localhost:3000/dashboard/API/totalorders",
    {
      method: "POST",
    },
  ).then((res) => res.json());

  var today: number = await fetch(
    "http://localhost:3000/dashboard/API/orderstoday",
    {
      method: "POST",
    },
  ).then((res) => res.json());

  const restock: { item_id: number; name: string; qty: number }[] = await fetch(
    "http://localhost:3000/dashboard/API/restock",
    {
      method: "POST",
    },
  ).then((res) => res.json());

  const data: {
    name: string;
    value: number;
    unit: string;
    status: string;
    icon: JSX.Element;
  }[] = [
    {
      name: "Income",
      value: income,
      unit: "INR",
      status: "+20.1% from last month",
      icon: <Dashboard className="w-6 stroke-2" />,
    },
    {
      name: "Expense",
      value: expense,
      unit: "INR",
      status: "-20.1% from last month",
      icon: <Stocks className="w-6 stroke-2" />,
    },
    {
      name: "Total Orders",
      value: totalorders,
      unit: "units",
      status: "+20.1% from last month",
      icon: <Billlog className="w-6 stroke-2" />,
    },
    {
      name: "Orders Today",
      value: today,
      unit: "units",
      status: "+20.1% from last month",
      icon: <Settings className="w-6 stroke-2" />,
    },
  ];
  return (
    <div className="flex h-full w-full flex-col duration-1000 animate-in fade-in">
      <Header title="Dashboard" logout />
      <div className="flex justify-around">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex h-32 w-[23%] items-center justify-between rounded border p-4"
          >
            <div className="flex flex-col gap-1">
              <div className="w-fit rounded-lg bg-tertiary px-2 py-1 text-xs font-semibold uppercase">
                {item.name}
              </div>
              <div className="text-2xl font-semibold">
                {item.value.toLocaleString()}
                <span className="text-sm">{" " + item.unit}</span>
              </div>
              <div className="text-xs font-semibold uppercase text-secondary">
                {item.status}
              </div>
            </div>
            <div>{item.icon}</div>
          </div>
        ))}
      </div>
      <hr className="mt-4" />
      <div className="flex w-full flex-grow">
        <div className="w-2/5">
          <div className="px-4 pt-4 text-xl font-semibold">Restock Items</div>
          <div className="h-[calc(100vh-50%)] overflow-auto">
            <AdvancedTable data={restock} searchTerm="" sortBy="" />
          </div>
        </div>
        <div className="h-full w-full border-l">
          <div className="px-4 pt-4 text-xl font-semibold">Sales</div>
          <div className="h-[calc(100vh-50%)]">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;
