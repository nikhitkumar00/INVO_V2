"use client";
import { useState, useEffect } from "react";
import Header from "../_components/Header";
import AdvancedTable from "../_components/AdvancedTable";
import AddStock from "./AddStock";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/stocks/API/stockdata", {
          method: "POST",
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex h-screen flex-col duration-1000 animate-in fade-in">
      <Header title="Stocks" logout />
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Search..."
          className="mx-2 w-full rounded-md border-2 p-2 ps-5 focus:outline-none focus:ring-0"
          value={searchTerm}
          onChange={handleSearchChange}
          autoFocus
        />
        <AddStock />
      </div>
      <div className="flex-grow overflow-auto">
        <AdvancedTable
          data={data}
          searchTerm={searchTerm}
          sortBy="item_id"
          edit
        />
      </div>
    </div>
  );
};

export default Page;
