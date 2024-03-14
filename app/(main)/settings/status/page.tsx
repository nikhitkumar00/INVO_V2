"use client";
import Header from "@/app/(main)/_components/Header";
import { toast } from "sonner";

const Status = () => {
  // const data = [
  //   {
  //     name: "Database",
  //     status: "Online",
  //   },
  //   {
  //     name: "Toast",
  //     status: "Online",
  //   },
  // ];
  return (
    <>
      <Header title="Status" />
      <main className="pr-2">
        {/* {data.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              item.func;
            }}
            className="flex items-center justify-between rounded-md border-b px-8 py-4 hover:bg-quartinary"
          >
            <div className="text-lg font-medium">{item.name}</div>
            <div
              className={
                `size-2 rounded-full ` +
                (item.status === "Online" ? " bg-green-500" : " bg-red-500")
              }
            ></div>
          </div>
        ))} */}
        <div
          onClick={() => {}}
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
