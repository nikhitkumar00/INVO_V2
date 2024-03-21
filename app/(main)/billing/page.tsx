"use client";
import React, { useState, useEffect } from "react";
import Header from "../_components/Header";
import AdvancedTable from "../_components/AdvancedTable";

const Billing = () => {
  const [billId, setBillId] = useState(null);
  const [billDate, setBillDate] = useState("");
  const [itemId, setItemId] = useState("");
  const [tableData, setTableData] = useState([]);
  const [itemDetails, setItemDetails] = useState({
    name: "",
    mrp: "",
    rate: "",
  });

  useEffect(() => {
    fetch("/billing/API/nextBillId", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        setBillId(data.nextBillId);
      })
      .catch((error) => console.error("Error fetching next bill ID:", error));

    fetch("/billing/API/curDate", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        setBillDate(data.purchaseDate);
      })
      .catch((error) => console.error("Error fetching current date:", error));
  }, []);

  const handleItemIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const itemId = e.target.value;
    setItemId(itemId);
    fetch("/billing/API/itemSearch", {
      method: "POST",
      body: JSON.stringify({ item_id: itemId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setItemDetails({
          name: data.name,
          mrp: data.mrp,
          rate: data.selling_price,
        });
      })
      .catch((error) => console.error("Error fetching item details:", error));
  };

  const billingData = [
    { name: "Customer Id", value: "" },
    { name: "Customer Name", value: "" },
    { name: "Bill Id", value: billId },
    { name: "Bill Date", value: billDate },
    { name: "Barcode", value: "" },
    { name: "Item Id", value: itemId },
    { name: "Item Name", value: itemDetails.name },
    { name: "Qty", value: "" },
    { name: "MRP", value: itemDetails.mrp },
    { name: "Rate", value: itemDetails.rate },
    { name: "Amount", value: "" },
  ];

  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Billing" logout />
      <div className="flex flex-wrap gap-2 rounded border p-4">
        {billingData.map((item, index) => (
          <div key={index} className="">
            <label className="sr-only">{item.name}</label>
            <input
              type="text"
              placeholder={item.name}
              value={item.value ?? ""}
              onChange={(e) =>
                item.name === "Item Id" ? handleItemIdChange(e) : null
              }
              readOnly={
                item.name === "Bill Id" ||
                item.name === "Bill Date" ||
                item.name === "Item Name" ||
                item.name === "MRP" ||
                item.name === "Rate"
              }
              className="rounded-md border bg-transparent p-2 text-black placeholder-gray-600"
              required
              autoFocus={item.name === "Item Id"}
            />
          </div>
        ))}
        <button className="rounded bg-primary px-4 py-2 text-background hover:bg-secondary">
          Add Item
        </button>
      </div>
      <AdvancedTable data={tableData} searchTerm="" sortBy="" />
    </div>
  );
};

export default Billing;
