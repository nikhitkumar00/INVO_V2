import { Switch } from "@/components/switch";
import Header from "../../_components/Header";

const Appearance = () => {
  return (
    // <div className="flex w-full flex-col gap-10 p-8 pl-10 align-middle">
    //   <div className="flex gap-96">
    //     <div className="text-lg">Dark Mode</div>
    //     <Switch />
    //   </div>
    //   <div className="h-7 cursor-pointer text-xl font-semibold ">Themes</div>
    // </div>
    <>
      <Header title="Themes" />
      <hr />
      <div className="flex gap-96 p-8">
        <div className="text-lg">Dark Mode</div>
        <Switch />
      </div>
    </>
  );
};
export default Appearance;
