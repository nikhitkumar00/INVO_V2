"use client";
import React, { useState, useEffect } from "react";
import { Billlog, Settings, Stocks, Dashboard } from "@/public/Icons";
import Header from "../_components/Header";
import Chart from "./chart";
import AdvancedTable from "../_components/AdvancedTable";

const DashboardPage = () => {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [ordersToday, setOrdersToday] = useState(0);
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
      value: totalOrders,
      unit: "units",
      status: "+20.1% from last month",
      icon: <Billlog className="w-6 stroke-2" />,
    },
    {
      name: "Orders Today",
      value: ordersToday,
      unit: "units",
      status: "+20.1% from last month",
      icon: <Settings className="w-6 stroke-2" />,
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
