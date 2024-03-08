"use client";
import React, { useState, useEffect } from "react";

interface TableWithSearchAndSortProps {
  data: StockItem[];
  searchTerm: string;
  sortBy: string;
}

interface StockItem {
  item_id: number;
  [key: string]: any;
}

const TableWithSearchAndSort: React.FC<TableWithSearchAndSortProps> = ({
  data,
  searchTerm,
  sortBy,
}) => {
  const [sortedData, setSortedData] = useState<StockItem[]>(data);
  const [sortConfig, setSortConfig] = useState<{
    key: string | null;
    direction: "ascending" | "descending";
  }>({
    key: sortBy,
    direction: "ascending",
  });

  useEffect(() => {
    setSortedData([...data]);
  }, [data]);

  const sortData = (key: string): void => {
    let direction: "ascending" | "descending" = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    const sorted = [...sortedData].sort((a, b) => {
      const valueA = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
      const valueB = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

      if (valueA < valueB) {
        return direction === "ascending" ? -1 : 1;
      }
      if (valueA > valueB) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
    setSortedData(sorted);
    setSortConfig({ key, direction });
  };

  const keys: string[] = data && data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="m-2 rounded-md border p-1">
      <table className="w-full">
        <thead className="sticky top-0 border-b-2 bg-white">
          <tr className="text-left capitalize">
            {keys.map((key) => (
              <th
                key={key}
                className="w-fit cursor-pointer py-2 text-sm font-medium capitalize"
                onClick={() => sortData(key)}
              >
                {sortConfig.key === key && (
                  <span className="text-xs">
                    {sortConfig.direction === "ascending" ? "▼ " : "▲ "}
                  </span>
                )}
                {key.replace("_", " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="px-4">
          {sortedData
            .filter((item) =>
              keys.some((key) =>
                String(item[key])
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()),
              ),
            )
            .map((item) => (
              <tr
                key={item.item_id}
                className="odd:bg-quartinary hover:bg-tertiary"
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
  );
};

export default TableWithSearchAndSort;
