import Header from "../_components/Header";
import Contact from "./Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Simplifying Inventory",
};

const page = () => {
  return (
    <div className="duration-1000 animate-in fade-in">
      <Header title="Contact" logout />
      <Contact />
    </div>
  );
};

export default page;
