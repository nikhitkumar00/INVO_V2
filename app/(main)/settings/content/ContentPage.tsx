"use client";
import { useEffect } from "react";
import { Input } from "@/components/Input";
import Header from "../../_components/Header";
import { restockThresholdState } from "@/global/globalStates";
import { useRecoilState } from "recoil";
import { toast } from "sonner";
import { Down, Up } from "@/svg/Icons";

const ContentPage = () => {
  const [restockData, setRestockData] = useRecoilState(restockThresholdState);

  useEffect(() => {
    localStorage.setItem(
      "restockThreshold",
      restockData ? restockData.toString() : "",
    );
    toast.success("Restock Threshold set successfully");
  }, [restockData]);

  return (
    <div>
      <Header title="Threshold" />
      <hr />
      <div className="flex items-center gap-4 p-10">
        <span className="whitespace-nowrap font-semibold">
          Restock Threshold
        </span>
        <Input
          type="number"
          value={restockData}
          onChange={ ( e ) => setRestockData( Number( e.target.value ) ) }
          className="border-tertiary"
        />
        <div className="flex">
          <div onClick={() => setRestockData(restockData + 1)}>
            <Up className="size-10 cursor-pointer stroke-2 hover:scale-110" />
          </div>
          <div onClick={() => setRestockData(restockData - 1)}>
            <Down className="size-10 cursor-pointer stroke-2 hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
