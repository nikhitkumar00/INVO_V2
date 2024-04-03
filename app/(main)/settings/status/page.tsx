import { Metadata } from "next";
import StatusPage from "./StatusPage";

export const metadata: Metadata = {
  title: "Status",
};

const page = () => {
  return <StatusPage />;
};
export default page;
