"use client";
import { useState } from "react";
import { Input } from "@/components/Input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Add } from "@/public/Icons";
import { toast } from "sonner";

const AddColumn = () => {
  const [columnName, setColumnName] = useState("");
  const [columnType, setColumnType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddColumn = async () => {
    console.log("Column Name:", columnName);
    console.log("Column Type:", columnType);
    setIsLoading(true);

    try {
      const response = await fetch("/settings/customize/API/addColumn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          column_name: columnName,
          column_type: columnType,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add column");
      }

      setColumnName("");
      setColumnType("");
      setIsLoading(false);

      toast.success("Column added successfully");
    } catch (error) {
      setIsLoading(false);
      toast.error("Failed to add column");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex h-20 w-full cursor-pointer items-center justify-between rounded border-2 border-tertiary px-8 duration-200 hover:border-4 hover:border-primary">
          <p className="text-md font-semibold capitalize">Add Column</p>
          <Add className="size-6 stroke-2" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Column</DialogTitle>
          <DialogDescription>
            Add a new column to the stocks table
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-2">
          <Input
            placeholder="Column Name"
            value={columnName}
            onChange={(e) => setColumnName(e.target.value)}
          />
          <select
            value={columnType}
            onChange={(e) => setColumnType(e.target.value)}
            className="w-40 rounded border border-gray-300 focus:border-primary focus:outline-none"
          >
            <option value="">Select Column Type</option>
            <option value="integer">Number</option>
            <option value="varchar(40)">Text</option>
            <option value="date">Date</option>
            <option value="boolean">True/False</option>
          </select>
        </div>
        <button
          className="w-full rounded bg-primary py-2 text-background duration-200 hover:bg-secondary"
          onClick={handleAddColumn}
          disabled={isLoading || !columnName || !columnType}
        >
          {isLoading ? "Adding..." : "Add Column"}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default AddColumn;
