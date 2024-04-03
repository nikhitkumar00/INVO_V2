import BilllogPage from "./BilllogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bill Logs",
};

const page = () => {
  return <BilllogPage />;
};
export default page;
