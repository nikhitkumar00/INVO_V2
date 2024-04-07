import React from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/sheet";
import { Pen } from "@/svg/Icons";
import { Input } from "@/components/Input";

interface EditItemProps {
 item: any;
 editedData: any;
 keys: string[];
 toggleEditMode: (item: any) => void;
 handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, key: string) => void;
 saveEditedData: () => void;
 deleteStock: (itemId: number) => void;
}

const EditedItem: React.FC<EditItemProps> = ({
 item,
 editedData,
 keys,
 toggleEditMode,
 handleInputChange,
 saveEditedData,
 deleteStock,
}) => {
 return (
    <td className="px-1 py-2">
      <Sheet>
        <SheetTrigger>
          <Pen
            className="w-5 cursor-pointer stroke-2"
            onClick={() => toggleEditMode(item)}
          />
        </SheetTrigger>
        {editedData && editedData.item_id === item.item_id && (
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit / Delete Row</SheetTitle>
            </SheetHeader>
            {keys.map((key) => (
              <div
                className="mt-2 flex items-center justify-between gap-2"
                key={key}
              >
                <label className="w-full text-sm font-medium capitalize">
                 {key.replace("_", " ")}
                </label>
                <Input
                 className="px-1 py-2"
                 name={key}
                 value={editedData[key]}
                 onChange={(e) => handleInputChange(e, key)}
                 disabled={key === "item_id"}
                />
              </div>
            ))}
            <button
              onClick={saveEditedData}
              className="mt-4 w-full rounded-md bg-primary p-2 text-white"
            >
              Save
            </button>
            <button
              onClick={() => deleteStock(item.item_id)}
              className="mt-2 w-full rounded-md border-2 bg-background p-2 text-primary"
            >
              Delete
            </button>
          </SheetContent>
        )}
      </Sheet>
    </td>
 );
};

export default EditedItem;