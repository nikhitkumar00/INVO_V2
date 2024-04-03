import Contact from "./Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const Page = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default Page;
