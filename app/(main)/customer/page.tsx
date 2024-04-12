"use client";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";
import Header from "../_components/Header";
import AdvancedTable from "../_components/AdvancedTable";

interface CustomerData {
  customerId: string;
  name: string;
  email: string;
  phoneNumber: string;
}

const Page: React.FC = () => {
  const [customerId, setCustomerId] = useState<string>("");
  const [customerData, setCustomerData] = useState<CustomerData[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/customer/API/nextcustomerid", {
          method: "POST",
        });

        const customerdata = await fetch("/customer/API/customerdata", {
          method: "POST",
        }).then((res) => res.json());

        if (!response.ok) {
          throw new Error("Failed to fetch customer ID");
        }

        if (!customerdata) {
          throw new Error("Failed to fetch customer data");
        }

        setCustomerData(customerdata);

        const data: { nextCustomerId: string } = await response.json();
        setCustomerId(data.nextCustomerId);
      } catch (error) {
        console.error("Error fetching customer ID:", error);
        toast.error("Error fetching customer ID");
      }
    };

    fetchData();
  }, [refresh]);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const customerData: CustomerData = {
      customerId,
      name,
      email,
      phoneNumber,
    };

    try {
      const response = await fetch("/customer/API/addCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to add customer - ${errorMessage}`);
      }

      toast.success("Customer added successfully");

      setName("");
      setEmail("");
      setPhoneNumber("");
      setRefresh(!refresh);
    } catch (error) {
      console.error("Error adding customer:", error);
      toast.error("Error adding customer");
    }
  };

  return (
    <div className="h-screen w-full">
      <Header title="Customer Registration" logout />
      <div className="flex items-center gap-4 px-4">
        <div className="flex flex-col rounded-md border border-secondary p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only">Customer ID</label>
                  <input
                    type="text"
                    value={customerId}
                    className="block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="sr-only">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500"
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
                  value={email}
                  onChange={handleEmailChange}
                  className="block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="sr-only">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="block w-full rounded-lg border border-tertiary bg-transparent px-4 py-3 text-sm placeholder-gray-600 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-primary px-4 py-3 text-sm font-semibold text-tertiary hover:bg-gray-900"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="h-[85vh] w-full overflow-auto">
          <AdvancedTable data={customerData} caption={""} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Page;
