import BillingPage from "./BillingPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing",
};

const Page = () => {
  return <BillingPage />;
};
export default Page;
