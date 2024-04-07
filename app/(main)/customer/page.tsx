"use client";
import CustomerTable from "./CustomerTable";
import Header from "../_components/Header";
import { useEffect, useState } from "react";
const Page = () => {
  const [customerId, setCustomerId] = useState<number| null>(null);
  const [updateCustomerId, setUpdateCustomerId] = useState<boolean>(false);

  useEffect(() => {
    fetch("/billing/API/nextcustomerid", { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        setCustomerId(data.nextCustomerId);
      })
      .catch((error) => console.error("Error fetching next customer ID:", error));
  }, [updateCustomerId]);

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add logic to handle saving customer details to the server
    // You can access the form data using e.target.elements
    const formData = new FormData(e.target as HTMLFormElement);
    const customerData = {
      customerId: formData.get("customerId"),
      name: formData.get("name"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
    };
    console.log("Customer data to be saved:", customerData);

    // Add fetch request to save customer data to the server
  };
  // Define customerData as a parameter for the function
  const saveCustomerData = (customerData: any) => {
    console.log("Customer data to be saved:", customerData);
    // Add fetch request to save customer data to the server
  };

  return (
    <div className="h-screen w-full">
      <Header title="Customer Registration" logout />
      <div className="flex items-center gap-4 px-4">
        <div className="flex flex-col rounded-md border border-secondary p-8 ">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only">Customer id</label>
                  <input
                    type="text"
                    className="block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                    placeholder="Customer Id"
                    value={customerId || ""}
                    readOnly
                    required
                  />
                </div>

                <div>
                  <label className="sr-only">Name</label>
                  <input
                    type="text"
                    className=" block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                    placeholder="Customer Name"
                    required
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <label className="sr-only">Email</label>
                <input
                  type="email"
                  autoComplete="email"
                  className=" block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600  focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="sr-only">Phone Number</label>
                <input
                  type="tel"
                  className=" block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 "
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>

            <div className="mt-4 grid">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-3 text-sm font-semibold text-tertiary hover:bg-gray-900 disabled:pointer-events-none disabled:opacity-50 "
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="w-full">
          <CustomerTable />
        </div>
      </div>
    </div>
  );
};

export default Page;
