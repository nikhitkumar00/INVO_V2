"use client";
import { useState } from "react";
import { Input } from "@/components/Input";
import { Add } from "@/public/Icons";
import { toast } from "sonner";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";

const AddColumn = ({ onAddColumn }: { onAddColumn: () => void }) => {
  const [columnName, setColumnName] = useState("");
  const [columnType, setColumnType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddColumn = async () => {
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
      onAddColumn();

      toast.success("Column added successfully");
    } catch (error) {
      toast.error("Failed to add column");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="mr-8 flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-semibold uppercase text-background duration-200 hover:bg-secondary">
          <p className="">Add</p>
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
            className="w-full rounded-md border bg-background text-sm focus:border-primary focus:outline-none"
          >
            <option value="">Select Column Type</option>
            <option value="integer">Number</option>
            <option value="varchar(40)">Text</option>
            <option value="date">Date</option>
            <option value="boolean">True/False</option>
          </select>
        </div>
        <DialogClose>
          <button
            className="w-full rounded bg-primary py-2 text-background duration-200 hover:bg-secondary"
            onClick={handleAddColumn}
            disabled={isLoading || !columnName || !columnType}
          >
            {isLoading ? "Adding..." : "Add Column"}
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default AddColumn;
