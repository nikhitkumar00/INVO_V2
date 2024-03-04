'use client';
import { Stocks } from "@/public/Icons";

const error = () => {
  return (
      <div className="flex h-screen w-full items-center justify-center gap-4 text-xl font-semibold">
        <Stocks className="size-10 stroke-2" />
        Database not connected
      </div>
  );
};

export default error;
