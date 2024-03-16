import Header from "../../_components/Header";
import Columns from "./Columns";
import AddColumn from "./AddColumn";

const Customize = () => {
  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Customize" />
      <div className="grid grid-cols-3 gap-2 overflow-auto px-8">
        <Columns />
        <AddColumn />
      </div>
    </div>
  );
};

export default Customize;
