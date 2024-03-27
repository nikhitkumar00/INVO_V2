"use client";
import { Stocks } from "@/svg/Icons";
import { toast } from "sonner";

const error = () => {
  toast.error("Database not connected", {
    description: "Check if server is turned on",
  });
  return (
    <div className="flex h-screen w-full items-center justify-center gap-4 text-xl font-semibold text-secondary">
      <Stocks className="size-10 stroke-2" />
      Database not connected
    </div>
  );
};

export default error;
