import { Add } from "@/public/Icons";
import Header from "../../_components/Header";
import Columns from "./Columns";

const Customize = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Customize" />
      <div className="grid grid-cols-3 gap-2 overflow-auto px-8">
        <Columns />
        <div className="flex h-20 w-full cursor-pointer items-center justify-between rounded border-2 border-tertiary px-8">
          <p className="text-md font-semibold capitalize">Add Column</p>
          <Add className="size-6 stroke-2" />
        </div>
      </div>
    </div>
  );
};

export default Customize;
