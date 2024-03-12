import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/Input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/dialog";
import { Add } from "@/public/Icons";
import { toast } from "sonner";

interface TableColumn {
  Field: string;
  Type: string;
  Null: string;
  Key: string;
  Default: string | null;
  Extra: string;
}

const AddStock = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [tableSchema, setTableSchema] = useState<TableColumn[]>([]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    fetchTableSchema();
  }, []);

  const fetchTableSchema = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/stocks/API/inputfields",
        {
          cache: "no-store",
        },
      );
      const schema: TableColumn[] = await response.json();
      setTableSchema(schema);
    } catch (error) {
      console.error("Error fetching table schema:", error);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://localhost:3000/stocks/API/addStock",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      if (response.ok) {
        toast.success("Stock added successfully");
        setFormData({});
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error adding stock:", error);
      toast.error("An error occurred while adding stock");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Enter") {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      } else {
        handleSubmit();
      }
    }
  };

  const renderInputFields = () => {
    return tableSchema.map((field, index) => (
      <Input
        key={field.Field}
        placeholder={
          field.Field.charAt(0).toUpperCase() +
          field.Field.slice(1).replace("_", " ")
        }
        onChange={(e) =>
          setFormData({ ...formData, [field.Field]: e.target.value })
        }
        onKeyPress={(e) => handleKeyPress(e, index)}
        ref={(el) => (inputRefs.current[index] = el)}
      />
    ));
  };

  useEffect(() => {
    if (inputRefs.current.length > 0) {
      inputRefs.current[0]?.focus();
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger className="mx-2 flex w-36 items-center justify-center gap-2 rounded-md bg-primary font-semibold uppercase text-quartinary hover:bg-secondary">
        Add
        <Add className="size-4 stroke-2" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Stock</DialogTitle>
          <DialogDescription>
            Add new entry to the stocks table
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 p-3">{renderInputFields()}</div>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`mx-3 h-10 rounded-lg bg-primary text-quartinary hover:bg-secondary ${
            loading ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          {loading ? "Adding..." : "Add Stock"}
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default AddStock;
