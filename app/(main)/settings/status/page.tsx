"use client";
import Header from "@/app/(main)/_components/Header";
import { toast } from "sonner";

const Status = () => {
  const dbcheck = async () => {
    const response = await fetch("/settings/status/API", {
      method: "POST",
    }).then((res) => res.json());
    if (response.status === "success") {
      toast.success("Database is connected");
    } else {
      toast.error("Failed to connect");
    }
  };

  return (
    <>
      <Header title="Status" />
      <main className="pr-2">
        <div
          onClick={() => {
            dbcheck();
          }}
          className="flex cursor-pointer items-center justify-between rounded-md border-b px-8 py-4 hover:bg-quartinary"
        >
          <div className="text-lg font-medium">Database</div>
          <div className="size-2 rounded-full bg-green-500"></div>
        </div>
        <div
          onClick={() => {
            toast.success("Success");
          }}
          className="flex cursor-pointer items-center justify-between rounded-md border-b px-8 py-4 hover:bg-quartinary"
        >
          <div className="text-lg font-medium">Toast</div>
          <div className="size-2 rounded-full bg-green-500"></div>
        </div>
      </main>
    </>
  );
};
export default Status;
