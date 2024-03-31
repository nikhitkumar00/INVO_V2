import { Metadata } from "next";
import DashboardPage from "./DashboardPage";

export const metadata: Metadata = {
  title: "Dashboard",
};
const page = () => {
  return <DashboardPage />;
};
export default page;
