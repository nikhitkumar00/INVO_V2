"use client";
import { useState, useEffect } from "react";
import Header from "../_components/Header";
import AdvancedTable from "../_components/AdvancedTable";
import { toast } from "sonner";

interface ItemDetails {
  name: string;
  mrp: string;
  rate: string;
}

interface BillingData {
  name: string;
  value: string | number;
}

const Billing = () => {
  const [billId, setBillId] = useState<number | null>(null);
  const [billDate, setBillDate] = useState<string>("");
  const [itemId, setItemId] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [itemDetails, setItemDetails] = useState<ItemDetails>({
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

    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
    setBillDate(formattedDate);
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

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qty = e.target.value;
    setQuantity(qty);
  };

  const handleAddItem = () => {
    if (!itemId || !itemDetails.name || !quantity) {
      toast.error("Please input item ID, name, and quantity.");
      return;
    }

    const newItem = {
      slNo: tableData.length + 1,
      itemId: itemId,
      name: itemDetails.name,
      qty: quantity,
      rate: itemDetails.rate,
      mrp: itemDetails.mrp,
      amount: calculateAmount(quantity, itemDetails.rate),
    };

    setTableData([...tableData, newItem]);
    setItemId("");
    setQuantity("");
  };

  const calculateAmount = (qty: string, rate: string) => {
    return qty ? +qty * parseFloat(String(rate || 0)) : "";
  };

  const billingData: BillingData[] = [
    { name: "Customer Id", value: "" },
    { name: "Customer Name", value: "" },
    { name: "Bill Id", value: billId || "" },
    { name: "Bill Date", value: billDate },
    { name: "Barcode", value: "" },
    { name: "Item Id", value: itemId },
    { name: "Item Name", value: itemDetails.name },
    { name: "Qty", value: quantity },
    { name: "MRP", value: itemDetails.mrp },
    { name: "Rate", value: itemDetails.rate },
    { name: "Amount", value: calculateAmount(quantity, itemDetails.rate) },
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
              value={item.value.toString()}
              onChange={(e) =>
                item.name === "Item Id"
                  ? handleItemIdChange(e)
                  : item.name === "Qty"
                    ? handleQuantityChange(e)
                    : null
              }
              name={item.name === "Item Id" ? "item" : "qty"}
              readOnly={
                item.name === "Bill Id" ||
                item.name === "Bill Date" ||
                item.name === "Item Name" ||
                item.name === "MRP" ||
                item.name === "Rate" ||
                item.name === "Amount"
              }
              className="rounded-md border bg-transparent p-2 text-black placeholder-gray-600"
              required
              autoFocus={item.name === "Item Id"}
            />
          </div>
        ))}
        <button
          className="rounded bg-primary px-4 py-2 text-background hover:bg-secondary"
          onClick={handleAddItem}
        >
          Add Item
        </button>
      </div>
      <AdvancedTable data={tableData} searchTerm="" sortBy="" />
    </div>
  );
};

export default Billing;
