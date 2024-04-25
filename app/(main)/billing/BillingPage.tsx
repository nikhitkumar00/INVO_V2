"use client";
import { useState, useEffect } from "react";
import Header from "../_components/Header";
import AdvancedTable from "../_components/AdvancedTable";
import { toast } from "sonner";
import { Add } from "@/svg/Icons";
import { Input } from "@/components/Input";

interface ItemDetails {
  name: string;
  mrp: string;
  rate: string;
}

interface BillingData {
  name: string;
  value: string | number;
}

const BillingPage = () => {
  const [billId, setBillId] = useState<number | null>(null);
  const [updateBillId, setUpdateBillId] = useState<boolean>(false);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [billDate, setBillDate] = useState<string>("");
  const [customerId, setCustomerId] = useState<string>("");
  const [customerName, setCustomerName] = useState<string>("");
  const [itemId, setItemId] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("1");
  const [tableData, setTableData] = useState<any[]>([]);
  const [itemDetails, setItemDetails] = useState<ItemDetails>({
    name: "",
    mrp: "",
    rate: "",
  });
  const [totalReceivedAmount, setTotalReceivedAmount] = useState<number>(0);

  useEffect(() => {
    fetch("/billing/API/nextbillid", { method: "POST" })
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
  }, [updateBillId]);

  useEffect(() => {
    if (customerId) {
      fetchCustomerName(customerId);
    } else {
      setCustomerName("");
    }
  }, [customerId]);

  const fetchCustomerName = (customerId: string) => {
    fetch("/billing/API/customerSearch", {
      method: "POST",
      body: JSON.stringify({ customer_id: customerId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCustomerName(data.customer_name);
      })
      .catch((error) => console.error("Error fetching customer name:", error));
  };

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

    const isItemExists = tableData.some((item) => item.itemId === itemId);
    if (isItemExists) {
      toast.error("Item with the same ID already exists.");
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
    setQuantity("1");
  };

  useEffect(() => {
    const total = tableData.reduce((acc, item) => acc + item.amount, 0);
    setTotalAmount(total);
    setTotalReceivedAmount(total);
  }, [tableData]);

  const calculateAmount = (qty: string, rate: string) => {
    return qty ? +qty * parseFloat(String(rate || 0)) : "";
  };

  const handleAddBill = () => {
    if (tableData.length === 0) {
      toast.error("Please add items to the bill.");
      return;
    }

    const billData = {
      customerId: customerId || "",
      billId: billId,
      billDate: billDate,
      items: tableData.map((item) => ({
        itemId: item.itemId,
        quantity: item.qty,
      })),
      totalReceivedAmount: totalReceivedAmount,
    };

    fetch("/billing/API/addBill", {
      method: "POST",
      body: JSON.stringify(billData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Bill added successfully.");
        setTableData([]);
        setUpdateBillId(!updateBillId);
      })
      .catch((error) => {
        console.error("Error adding bill:", error);
        toast.error("Failed to add bill. Please try again later.");
      });
  };

  const billingData: BillingData[] = [
    { name: "Customer Id", value: customerId },
    { name: "Customer Name", value: customerName },
    { name: "Bill Id", value: billId || "" },
    { name: "Bill Date", value: billDate },
    { name: "Item Id", value: itemId },
    { name: "Item Name", value: itemDetails.name },
    { name: "Qty", value: quantity },
    { name: "MRP", value: itemDetails.mrp },
    { name: "Rate", value: itemDetails.rate },
    {
      name: "Amount",
      value: calculateAmount(quantity, itemDetails.rate),
    },
  ];

  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Billing" logout />
      <div className="grid grid-cols-4 gap-4 rounded border p-4">
        {billingData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <label className="text-sm font-medium">{item.name}</label>
            <input
              type="text"
              value={(item.value || "").toString()}
              onChange={(e) =>
                item.name === "Item Id"
                  ? handleItemIdChange(e)
                  : item.name === "Qty"
                    ? handleQuantityChange(e)
                    : item.name === "Customer Id"
                      ? setCustomerId(e.target.value)
                      : item.name === "Total Received Amount"
                        ? setTotalReceivedAmount(Number(e.target.value))
                        : null
              }
              name={item.name === "Item Id" ? "item" : "qty"}
              readOnly={
                item.name === "Bill Id" ||
                item.name === "Bill Date" ||
                item.name === "Item Name" ||
                item.name === "MRP" ||
                item.name === "Rate" ||
                item.name === "Amount" ||
                item.name === "Customer Name"
              }
              className="rounded-md border bg-transparent p-2 font-medium text-black placeholder-gray-600"
              required
              autoFocus={item.name === "Item Id"}
            />
          </div>
        ))}
        <div></div>
        <button
          className="flex w-full items-center justify-center gap-2 rounded bg-primary px-4 py-2 font-medium text-background hover:bg-secondary"
          onClick={handleAddItem}
        >
          <Add className="size-5 stroke-2" />
          Add Item
        </button>
      </div>
      <AdvancedTable data={tableData} caption="Bill Items" deleteItem />
      <div className="flex w-full items-center justify-between border px-4 py-2">
        <div className="text-lg font-semibold">
          Total Amount : <span className="text-3xl">₹ {totalAmount}</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <label className="font-semibold">Total Received Amount</label>
          <Input
            type="number"
            className="w-40"
            value={totalReceivedAmount}
            onChange={(e) => setTotalReceivedAmount(Number(e.target.value))}
          />
        </div>
        <button
          className="flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 font-medium text-background hover:bg-secondary"
          onClick={handleAddBill}
        >
          <Add className="size-5 stroke-2" />
          Add Bill
        </button>
      </div>
    </div>
  );
};

export default BillingPage;
