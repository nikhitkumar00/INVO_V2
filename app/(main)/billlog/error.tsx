"use client";
import { Stocks } from "@/svg/Icons";
import { toast } from "sonner";

const error = () => {
  toast.error("Database not connected");
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 rounded-md border border-tertiary px-10 py-5">
        <Stocks className="size-10 stroke-2" />
        Database not connected
        <div className="text-xs text-secondary">
          Check if the database is connected and environment variables are set
        </div>
      </div>
    </div>
  );
};

export default error;
