"use client";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import {
  Billlog,
  Settings,
  Stocks,
  Dashboard,
  Income,
  Expense,
  Orders,
} from "@/svg/Icons";
import Header from "../_components/Header";
import Chart from "./chart";
import AdvancedTable from "../_components/AdvancedTable";
import { useRecoilState } from "recoil";
import { restockThresholdState } from "@/global/globalStates";

const DashboardPage = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [ordersToday, setOrdersToday] = useState(0);
  const [restockThreshold, setRestockThreshold] = useRecoilState(
    restockThresholdState,
  );
  const [restock, setRestock] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const incomeResponse = await fetch("/dashboard/API/income", {
          method: "POST",
        });
        const incomeData = await incomeResponse.json();
        setIncome(incomeData);

        const expenseResponse = await fetch("/dashboard/API/expense", {
          method: "POST",
        });
        const expenseData = await expenseResponse.json();
        setExpense(expenseData);

        const totalOrdersResponse = await fetch("/dashboard/API/totalorders", {
          method: "POST",
        });
        const totalOrdersData = await totalOrdersResponse.json();
        setTotalOrders(totalOrdersData);

        const todayResponse = await fetch("/dashboard/API/orderstoday", {
          method: "POST",
        });
        const todayData = await todayResponse.json();
        setOrdersToday(todayData);

        const restockResponse = await fetch("/dashboard/API/restock", {
          method: "POST",
          body: JSON.stringify({ threshold: restockThreshold }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const restockData = await restockResponse.json();
        setRestock(restockData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = [
    {
      name: "Income",
      value: income,
      unit: "INR",
      status: "+20.1% from last month",
      icon: <Income className="w-8 stroke-2" />,
    },
    {
      name: "Expense",
      value: expense,
      unit: "INR",
      status: "-20.1% from last month",
      icon: <Expense className="w-8 stroke-2" />,
    },
    {
      name: "Total Orders",
      value: totalOrders,
      unit: "units",
      status: "+20.1% from last month",
      icon: <Billlog className="w-8 stroke-2" />,
    },
    {
      name: "Orders Today",
      value: ordersToday,
      unit: "units",
      status: "+20.1% from last month",
      icon: <Orders className="w-8 stroke-2" />,
    },
  ];

  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Dashboard" logout />
      <div className="flex justify-around">
        {data.map((item, index) => (
          <div
            key={item.name}
            className={`flex h-32 w-[23%] items-center justify-between rounded border p-4 ${
              index % 2 === 0 ? "bg-dashOdd" : "bg-dashEven"
            }`}
          >
            <div className="flex flex-col gap-1">
              <div className="w-fit rounded-lg bg-tertiary px-2 py-1 text-xs font-semibold uppercase">
                {item.name}
              </div>
              <div className="text-2xl font-semibold">
                <CountUp start={0} end={item.value} duration={2} />
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
      <div className="flex w-full flex-grow overflow-auto">
        <div className="flex h-full w-2/5 flex-col">
          <div className="px-4 pt-2 text-xl font-semibold">Restock Items</div>
          <div className="flex-grow overflow-auto">
            <AdvancedTable data={restock} searchTerm="" sortBy="" />
          </div>
        </div>
        <div className="flex h-full w-full flex-col border-l">
          <div className="px-4 pt-2 text-xl font-semibold">Sales</div>
          <div className="flex-grow p-4">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
