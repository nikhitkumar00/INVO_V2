"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import Header from "@/app/(main)/_components/Header";
const Status = () => {
  const [isDatabaseConnected, setIsDatabaseConnected] = useState(false);
  const [isNetworkConnected, setIsNetworkConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkDatabaseStatus = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleToast = () => {
    toast.success("Success");
  };

  const checkNetwork = () => {
    setIsNetworkConnected(navigator.onLine);
    if (navigator.onLine) {
      toast.success("Network is connected");
    } else {
      toast.error("Network is not connected");
    }
  };

  const buttonData = [
    { label: "Database", onClick: checkDatabaseStatus },
    { label: "Network", onClick: checkNetwork },
    { label: "Toast", onClick: handleToast },
  ];

  const getColorClass = (
    isLoading: boolean,
    label: string,
    isConnected: boolean,
  ) => {
    if (isLoading) {
      return "bg-orange-500";
    } else if (label === "Database") {
      return isConnected ? "bg-green-500" : "bg-red-500";
    } else if (label === "Network") {
      return isConnected ? "bg-green-500" : "bg-red-500";
    } else {
      return "bg-green-500";
    }
  };

  useEffect(() => {
    checkDatabaseStatus();
    checkNetwork();
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
              className={`size-2 rounded-full ${getColorClass(
                isLoading,
                button.label,
                button.label === "Database"
                  ? isDatabaseConnected
                  : isNetworkConnected,
              )}`}
            ></div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Status;
