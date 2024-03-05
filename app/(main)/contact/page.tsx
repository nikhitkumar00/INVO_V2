import Contact from "./Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Simplifying Inventory",
};

const page = () => {
  return (
      <Contact />
  );
};

export default page;
