import { Input } from "@/components/Input";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/dialog";
import { Add } from "@/public/Icons";
import { toast } from "sonner";

const AddStock = async () => {
  const fields = await fetch("http://localhost:3000/stocks/api/inputfields", {
    cache: "no-store",
  }).then((res) => res.json());
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
            Add values to input as a new entry
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 p-3">
          {fields.map((field: any) => (
            <Input
              key={field.Field}
              placeholder={
                field.Field.charAt(0).toUpperCase() +
                field.Field.slice(1).replace("_", " ")
              }
            />
          ))}
        </div>
        <button
          onClick={() => toast.success("Added Stock")}
          className="mx-3 h-10 rounded-lg bg-primary text-quartinary hover:bg-secondary"
        >
          Add Stock
        </button>
      </DialogContent>
    </Dialog>
  );
};
export default AddStock;
