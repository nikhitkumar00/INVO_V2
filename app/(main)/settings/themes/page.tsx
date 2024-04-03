import { Metadata } from "next";
import ThemesPage from "./ThemesPage";

export const metadata: Metadata = {
  title: "Themes",
};

const page = () => {
  return <ThemesPage />;
};
export default page;
