"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/Input";
import Header from "../../_components/Header";
import { restockThresholdState } from "@/context/globalStates";
import { useRecoilState } from "recoil";

const Page = () => {
  const [restockData, setRestockData] = useRecoilState(restockThresholdState);
  const [prevRestockData, setPrevRestockData] = useState(restockData);

  useEffect(() => {
    if (restockData !== prevRestockData) {
      console.log("Restock threshold updated:", restockData);
      localStorage.setItem("restockThreshold", restockData.toString());
      setPrevRestockData(restockData);
    }
  }, [restockData, prevRestockData]);

  useEffect(() => {
    const defaultRestockThreshold = localStorage.getItem("restockThreshold");
    if (defaultRestockThreshold !== null) {
      setRestockData(Number(defaultRestockThreshold));
    }
  }, [setRestockData]);

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
