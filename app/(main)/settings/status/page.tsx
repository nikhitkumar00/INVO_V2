"use client";
import Header from "@/app/(main)/_components/Header";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Status = () => {
  const checkDatabaseStatus = async () => {
    try {
      const response = await fetch("/settings/status/API", {
        method: "POST",
      });
      const data = await response.json();

      if (data.status === "success") {
        setIsDatabaseConnected(true);
        toast.success("Database is connected");
      } else {
        setIsDatabaseConnected(false);
        toast.error("Failed to connect to database");
      }
    } catch (error) {
      console.error("Error checking database status:", error);
      toast.error("Failed to check database status");
    }
  };
  const handleToast = () => {
    toast.success("Success");
  };

  const buttonData = [
    { label: "Database", onClick: checkDatabaseStatus },
    { label: "Toast", onClick: handleToast },
  ];

  const [isDatabaseConnected, setIsDatabaseConnected] = useState(false);

  useEffect(() => {
    checkDatabaseStatus();
  }, []);

  return (
    <>
      <Header title="Status" />
      <main className="divide-y pr-2">
        {buttonData.map((button, index) => (
          <div
            key={index}
            onClick={button.onClick}
            className="flex cursor-pointer items-center justify-between rounded-md px-8 py-4 hover:bg-quartinary"
          >
            <div className="text-lg font-medium">{button.label}</div>
            <div
              className={`size-2 rounded-full ${
                button.label === "Database"
                  ? isDatabaseConnected
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-green-500"
              }`}
            ></div>
          </div>
        ))}
      </main>
    </>
  );
};
export default Status;
