"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/Input";
import { toast } from "sonner";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/sheet";
import { Pen } from "@/public/Icons";

interface TableWithSearchAndSortProps {
  data: StockItem[];
  searchTerm: string;
  sortBy: string;
  edit?: boolean;
}

interface StockItem {
  item_id: number;
  [key: string]: any;
}

const TableWithSearchAndSort: React.FC<TableWithSearchAndSortProps> = ({
  data,
  searchTerm,
  sortBy,
  edit = false,
}) => {
  const [sortedData, setSortedData] = useState<StockItem[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
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

  const deleteStock = async (itemId: number): Promise<string> => {
    try {
      const response = await fetch("/stocks/API/deleteStock", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item_id: itemId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete stock item");
      }

      const responseData = await response.json();
      toast.success("Item deleted successfully");
      return responseData.message || "Stock item deleted successfully";
    } catch (error) {
      toast.error("Error deleting stock item:");
      throw error;
    }
  };

  const keys: string[] = data && data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <>
      {data.length > 0 ? (
        <div className="m-2 rounded-md border p-1">
          <table className="w-full">
            <thead className="sticky top-0 border-b-2 bg-white">
              <tr className="text-left capitalize">
                {keys.map((key) => (
                  <th
                    key={key}
                    className="w-fit cursor-pointer bg-background py-2 text-sm font-medium capitalize"
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
                {edit && (
                  <th className="w-10 cursor-pointer bg-background text-sm font-medium capitalize">
                    Edit
                  </th>
                )}
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
                    {edit && (
                      <Sheet>
                        <SheetTrigger>
                          <td className="w-10 px-1 py-2">
                            <Pen className="w-5 stroke-2" />
                          </td>
                        </SheetTrigger>
                        <SheetContent>
                          <SheetHeader>
                            <SheetTitle>Edit / Delete Row</SheetTitle>
                          </SheetHeader>
                          {keys.map((key) => (
                            <div
                              className="mt-2 flex items-center justify-between gap-2"
                              key={key}
                            >
                              <label className="text-sm font-medium capitalize">
                                {key.replace("_", " ")}
                              </label>
                              <Input
                                className="w-52 px-1 py-2"
                                name={key}
                                value={item[key]}
                              />
                            </div>
                          ))}
                          <button className="mt-4 w-full rounded-md bg-primary p-2 text-white">
                            Save
                          </button>
                          <button
                            onClick={() => deleteStock(item.item_id)}
                            className="mt-2 w-full rounded-md border-2 bg-background p-2 text-primary"
                          >
                            Delete
                          </button>
                        </SheetContent>
                      </Sheet>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-full w-full p-2">
          <div className="flex h-full w-full items-center justify-center rounded-md border text-xl font-semibold animate-in fade-in zoom-in">
            No data
          </div>
        </div>
      )}
    </>
  );
};

export default TableWithSearchAndSort;
