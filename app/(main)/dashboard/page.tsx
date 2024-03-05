import { Billlog, Settings, Stocks, Dashboard } from "@/public/Icons";
import Header from "../_components/Header";

const DashboardPage = () => {
  const data = [
    {
      name: "Income",
      value: 4985,
      status: "+20.1% from last month",
      icon: <Dashboard className="w-6 stroke-2" />,
    },
    {
      name: "Expense",
      value: 1624,
      status: "-20.1% from last month",
      icon: <Stocks className="w-6 stroke-2" />,
    },
    {
      name: "Total Orders",
      value: 9324,
      status: "+20.1% from last month",
      icon: <Billlog className="w-6 stroke-2" />,
    },
    {
      name: "Orders Today",
      value: 3426,
      status: "+20.1% from last month",
      icon: <Settings className="w-6 stroke-2" />,
    },
  ];
  return (
    <>
      <Header title="Dashboard" />
      <div className="flex justify-around">
        {data.map((item) => (
          <div
            key={item.name}
            className="flex h-28 w-[23%] items-center justify-between gap-2 rounded border p-4"
          >
            <div className="flex flex-col">
              <div className="w-fit rounded-lg bg-tertiary px-2 py-1 text-xs font-semibold uppercase">
                {item.name}
              </div>
              <div className="text-2xl font-semibold">{item.value}</div>
              <div className="text-xs font-semibold uppercase">
                {item.status}
              </div>
            </div>
            <div>{item.icon}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default DashboardPage;
