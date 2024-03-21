"use client";
import Header from "../_components/Header";
import { useState } from "react";
import AdvancedTable from "../_components/AdvancedTable";

const Billing = () => {
  const data = [
    {
      name: "Customer Id",
      value: 5555,
    },
    {
      name: "Customer Name",
      value: 1624,
    },
    {
      name: "Bill Id",
      value: 9324,
    },
    {
      name: "Bill Date",
      value: 3426,
    },
  ];
  const value = [
    {
      name: "Barcode",
      value: 1,
    },
    {
      name: "Item Id",
      value: 2,
    },
    {
      name: "Item Name",
      value: 3,
    },
    {
      name: "Qty",
      value: 4,
    },
    {
      name: "MRP",
      value: 5,
    },
    {
      name: "Rate",
      value: 6,
    },
    {
      name: "Discount",
      value: 7,
    },
    {
      name: "Amount",
      value: 8,
    },
  ];
  const [inputValues, setInputValues] = useState(Array(value.length).fill("")); // State to store input values
  const [tableData, setTableData] = useState([]); // State to store table data
  const [focusedInput, setFocusedInput] = useState(null);

  const fetchItemDetails = async (itemId:number) => {
    const response = await fetch(`/stocks/API/getItem/${itemId}`);
    const itemDetails = await response.json();
    return itemDetails;
  };
  const handleAddButtonClick = () => {
    const newRow = {};
    value.forEach((item, index) => {
      newRow[item.name] = inputValues[index];
    });
    setTableData([...tableData, newRow]);
    setInputValues(Array(value.length).fill("")); // Reset input values after adding to the table
  };

  const handleInputKeyDown = (index, e) => {
    if (e.key === "Enter") {
      const nextIndex = index + 1;
      if (nextIndex < value.length) {
        setFocusedInput(nextIndex); // Update the state to focus on the next input
      }
    }
  };

  const handleInputChange = async (index, e) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  
    if (index === 1) { // Assuming "Item Id" column index is 1
      const itemId = e.target.value;
      const itemDetails = await fetchItemDetails(itemId);
      if (itemDetails) {
        const updatedInputValues = [...inputValues];
        // Assuming itemDetails contains values for columns Barcode, Item Name, Qty, MRP, Rate, Discount, Amount
        updatedInputValues[0] = itemDetails.barcode;
        updatedInputValues[2] = itemDetails.itemName;
        updatedInputValues[3] = itemDetails.qty;
        updatedInputValues[4] = itemDetails.mrp;
        updatedInputValues[5] = itemDetails.rate;
        updatedInputValues[6] = itemDetails.discount;
        updatedInputValues[7] = itemDetails.amount;
        setInputValues(updatedInputValues);
      }
    }
  };

  return (
    <div className="flex h-full w-full flex-col px-4">
      <Header title="Billing" logout />
      <div className="my-2  grid grid-cols-1 gap-2 rounded-sm border border-secondary p-4 lg:grid-cols-4">
        {data.map((item, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <label className="sr-only font-semibold">{item.name}</label>
            <input
              type="text"
              placeholder={item.name}
              className="rounded-md border border-tertiary bg-transparent p-2 text-black placeholder-gray-600"
              required
            />
          </div>
        ))}
      </div>
      <div className="my-2 flex justify-between rounded-sm border border-secondary py-2 pl-20 ">
        <div className=" grid grid-cols-2 gap-2 lg:grid-cols-8">
          {value.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <label className="sr-only font-semibold">{item.name}</label>
              <input
                type="text"
                placeholder={item.name}
                className="rounded-md border border-tertiary bg-transparent p-2 text-black placeholder-gray-600"
                value={inputValues[index]}
                onChange={(e) => handleInputChange(index, e)}
                onKeyDown={(e) => handleInputKeyDown(index, e)}
                onFocus={() => setFocusedInput(index)}
                autoFocus={focusedInput === index}
                required
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          onClick={handleAddButtonClick}
          className="mx-3 h-10 w-24 rounded-md bg-primary p-2 text-center text-white shadow-sm hover:bg-indigo-900 "
        >
          Add
        </button>
      </div>
      <AdvancedTable data={tableData} searchTerm="" sortBy=""  />
      <div className="my-2 flex justify-around rounded-sm border border-secondary py-2 pl-20 ">
        <button
          type="submit"
          className="h-10 w-24 rounded-md bg-primary p-2 text-background"
        >
          Save
        </button>
        <button
          type="submit"
          className="h-10 w-24 rounded-md bg-primary p-2 text-background"
        >
          Print
        </button>
      </div>
    </div>
  );
};
export default Billing;
