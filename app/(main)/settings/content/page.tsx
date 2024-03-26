"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/Input";
import Header from "../../_components/Header";
import { restockThresholdState } from "@/global/globalStates";
import { useRecoilState } from "recoil";
import { toast } from "sonner";

const Page = () => {
  const [restockData, setRestockData] = useRecoilState(restockThresholdState);

  useEffect(() => {
    localStorage.setItem("restockThreshold", restockData ? restockData.toString() : "");
    toast.success("Restock Threshold set successfully");
  }, [restockData]);

  return (
    <div>
      <Header title="Content" />
      <hr />
      <div className="p-2">
        <Header title="Dashboard" />
        <span>Restock Threshold</span>
        <Input
          placeholder="Restock Threshold"
          type="number"
          value={restockData}
          onChange={(e) => setRestockData(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Page;
