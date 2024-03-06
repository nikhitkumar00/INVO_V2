"use client";
import { Dashboard } from "@/public/Icons";
import { toast } from "sonner";

const EnvMissing = () => {
  toast.error("ENV Variables missing", {
    description: "Check if all env variables are set",
    duration: 3000,
    icon: <Dashboard className="size-4 stroke-2" />,
    position: "bottom-right",
  });
  return (
    <div className="flex h-screen w-full items-center justify-center gap-4 text-xl font-semibold">
      <Dashboard className="size-10 stroke-2" />
      ENV not set
    </div>
  );
};

export default EnvMissing;
