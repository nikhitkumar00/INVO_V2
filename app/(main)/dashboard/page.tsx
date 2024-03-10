import { Billlog, Settings, Stocks, Dashboard } from "@/public/Icons";
import Header from "../_components/Header";
import Restock from "./restock/Restock";
import Chart from "./chart/chart";
const DashboardPage = async () => {
  var income = await fetch("http://localhost:3000/dashboard/income/api", {
    cache: "no-store",
  }).then((res) => res.json());
  income = income[0].income;

  var expense = await fetch("http://localhost:3000/dashboard/expense/api", {
    cache: "no-store",
  }).then((res) => res.json());
  expense = expense[0].expense;

  const data = [
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
      value: 9324,
      unit: "units",
      status: "+20.1% from last month",
      icon: <Billlog className="w-6 stroke-2" />,
    },
    {
      name: "Orders Today",
      value: 3426,
      unit: "units",
      status: "+20.1% from last month",
      icon: <Settings className="w-6 stroke-2" />,
    },
  ];
  return (
    <div className="flex h-full w-full flex-col">
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
            <Restock />
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
