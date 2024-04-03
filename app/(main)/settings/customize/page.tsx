import CustomizePage from "./CustomizePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customize Columns",
};

const page = () => {
  return <CustomizePage />;
};
export default page;
