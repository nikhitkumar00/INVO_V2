"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/dialog";

interface TableColumn {
  Field: string;
  Type: string;
}

const Columns = ({
  refresh,
  onRefresh,
}: {
  refresh: boolean;
  onRefresh: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tableSchema, setTableSchema] = useState<TableColumn[]>([]);

  useEffect(() => {
    fetchTableSchema();
  }, [refresh]);

  const fetchTableSchema = async () => {
    try {
      const response = await fetch("/stocks/API/inputfields", {
        method: "POST",
      });
      const schema: TableColumn[] = await response.json();
      setTableSchema(schema);
    } catch (error) {
      console.error("Error fetching table schema:", error);
      toast.error("Failed to fetch table schema");
    }
  };

  const handleDeleteColumn = async (columnName: string) => {
    setIsLoading(true);

    try {
      const response = await fetch("/settings/customize/API/deleteColumn", {
        method: "DELETE",
        body: JSON.stringify({ column_name: columnName }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        toast.error("Failed to delete column");
        throw new Error("Failed to delete column");
      }

      toast.success("Column deleted successfully");
      onRefresh();
    } catch (error) {
      console.error("Error deleting column:", error);
      toast.error("Error deleting column");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {tableSchema.map((item, index) => (
        <Dialog key={item.Field}>
          <DialogTrigger>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative flex h-20 w-full items-center justify-between rounded border border-tertiary px-8 hover:border-2 hover:border-red-500"
            >
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
                      : item.Type === "tinyint(1)"
                        ? "True/False"
                        : "Text"}
              </p>
            </motion.div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Column</DialogTitle>
              <DialogDescription>
                Once deleted, all the data in that column will be deleted along
                with this action and cannot be retrieved
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
              onClick={() => {
                if (
                  isLoading ||
                  [
                    "item_id",
                    "name",
                    "qty",
                    "cost_price",
                    "selling_price",
                    "mrp",
                  ].includes(item.Field)
                ) {
                  toast.error("Cannot delete permanent field");
                  return;
                }
                handleDeleteColumn(item.Field);
              }}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
          </DialogContent>
        </Dialog>
      ))}
    </>
  );
};
export default Columns;
