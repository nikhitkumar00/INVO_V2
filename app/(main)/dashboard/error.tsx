"use client";
import { Stocks } from "@/public/Icons";
import { toast } from "sonner";

const error = () => {
  toast.error("Database not connected", {
    description: "Check if server is turned on",
    duration: 3000,
    icon: <Stocks className="size-4 stroke-2" />,
    position: "bottom-right",
  });
  return (
    <div className="flex h-screen w-full items-center justify-center gap-4 text-xl font-semibold">
      <Stocks className="size-10 stroke-2" />
      Database not connected
    </div>
  );
};

export default error;
