"use client";
import { useState, useEffect } from "react";
import Header from "../_components/Header";
import AdvancedTable from "../_components/AdvancedTable";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/stocks/api", {
          cache: "no-store",
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
    <div className="flex h-screen flex-col">
      <Header title="Stocks" logout />
      <input
        type="text"
        placeholder="Search..."
        className="w-full border p-2 ps-5 focus:outline-none focus:ring-0"
        value={searchTerm}
        onChange={handleSearchChange}
        autoFocus
      />
      <div className="flex-grow overflow-auto">
        <AdvancedTable data={data} searchTerm={searchTerm} sortBy="item_id" />
      </div>
    </div>
  );
};

export default Page;
