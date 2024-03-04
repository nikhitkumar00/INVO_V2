"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Header from "../_components/Header";

interface StockItem {
  item_id: number;
  [key: string]: any;
}

const Page = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<StockItem[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "ascending" | "descending";
  }>({
    key: "item_id",
    direction: "ascending",
  });

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

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const sortData = (key: string): void => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setData([...data].sort(compareValues(key, direction)));
    setSortConfig({ key, direction });
  };

  const compareValues = (key: string, order: "ascending" | "descending") => {
    return (a: any, b: any) => {
      const valueA = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
      const valueB = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

      let comparison = 0;
      if (valueA > valueB) {
        comparison = 1;
      } else if (valueA < valueB) {
        comparison = -1;
      }

      return order === "descending" ? comparison * -1 : comparison;
    };
  };

  const keys: string[] = data && data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="h-screen">
      <Header title="Stocks" />
      <input
        type="text"
        placeholder="Search..."
        className="w-full border p-2 ps-5 focus:outline-none focus:ring-0"
        value={searchTerm}
        onChange={handleSearchChange}
        autoFocus
      />
      <div className="h-[calc(100vh-120px)] overflow-y-scroll px-4">
        <table className="w-full">
          <thead className="sticky top-0 border-b-2 bg-white">
            <tr className="text-left capitalize">
              {keys.map((key) => (
                <th
                  key={key}
                  className="w-10 cursor-pointer py-2 font-semibold"
                  onClick={() => sortData(key)}
                >
                  {sortConfig.key === key && (
                    <span>
                      {sortConfig.direction === "ascending" ? "▼ " : "▲ "}
                    </span>
                  )}
                  {key.replace("_", " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="px-4">
            {data
              .filter((item) =>
                keys.some((key) =>
                  String(item[key])
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()),
                ),
              )
              .map((item, index) => (
                <tr
                  key={item.item_id}
                  className="odd:bg-slate-100 hover:bg-slate-300"
                >
                  {keys.map((key) => (
                    <td className="px-1 py-2" key={`${item.item_id}-${key}`}>
                      {item[key]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
