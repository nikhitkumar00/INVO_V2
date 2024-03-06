import Header from "../_components/Header";
import Contact from "./Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Simplifying Inventory",
};

const page = () => {
  return (
    <>
      <Header title="Contact" logout />
      <Contact />
    </>
  );
};

export default page;
