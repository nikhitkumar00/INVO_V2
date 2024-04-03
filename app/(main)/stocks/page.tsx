import { Metadata } from "next";
import StocksPage from "./StocksPage";

export const metadata: Metadata = {
  title: "Stocks",
};

const page = () => {
  return <StocksPage />;
};
export default page;
