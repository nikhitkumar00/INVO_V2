"use client";
import { useEffect, useState } from "react";
import { Add } from "@/public/Icons";
import Header from "../../_components/Header";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/dialog";
import { toast } from "sonner";

interface TableColumn {
  Field: string;
  Type: string;
  Null: string;
  Key: string;
  Default: string | null;
  Extra: string;
}

const Customize = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tableSchema, setTableSchema] = useState<TableColumn[]>([]);

  useEffect(() => {
    fetchTableSchema();
  }, []);

  const fetchTableSchema = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/stocks/API/inputfields",
        {
          method: "POST",
        },
      );
      const schema: TableColumn[] = await response.json();
      setTableSchema(schema);
    } catch (error) {
      console.error("Error fetching table schema:", error);
    }
  };

  const handleDeleteColumn = async (columnName: string) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:3000/settings/customize/API/deleteColumn",
        {
          method: "DELETE",
          body: JSON.stringify({ column_name: columnName }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        toast.error("Failed to delete column");
        throw new Error("Failed to delete column");
      }
      toast.success("Column deleted successfully");
    } catch (error) {
      console.error("Error deleting column:", error);
      toast.error("Error deleting column");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Customize" />
      <div className="grid grid-cols-3  gap-2 overflow-auto px-8">
        {tableSchema.map((item) => (
          <Dialog key={item.Field}>
            <DialogTrigger className="relative flex h-20 w-full items-center justify-between rounded border border-tertiary px-8">
              <p className="text-md font-semibold capitalize">
                {item.Field.replace("_", " ")}
              </p>
              <p>
                {item.Type === "int"
                  ? "Number"
                  : item.Type === "float"
                    ? "Number"
                    : item.Type === "date"
                      ? "Date"
                      : "Text"}
              </p>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Column</DialogTitle>
                <DialogDescription>
                  Once deleted, all the data in that column will be deleted
                  along with this action and cannot be retrieved
                  <br />
                  <br />
                  Are you sure you want to delete the column{" "}
                  <span className="text-md font-medium capitalize text-primary">
                    {item.Field.replace("_", " ")}
                  </span>
                </DialogDescription>
              </DialogHeader>
              <button
                className="rounded-md bg-red-600 py-2 text-white hover:bg-red-700"
                onClick={() => handleDeleteColumn(item.Field)}
                disabled={isLoading}
              >
                {isLoading ? "Deleting..." : "Delete"}
              </button>
            </DialogContent>
          </Dialog>
        ))}
        <div className="flex h-20 w-full cursor-pointer items-center justify-between rounded border-2 border-tertiary px-8">
          <p className="text-md font-semibold capitalize">Add Column</p>
          <Add className="size-6 stroke-2" />
        </div>
      </div>
    </div>
  );
};

export default Customize;
