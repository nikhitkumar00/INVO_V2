import CameraPage from "./CameraPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Camera",
};

const page = () => {
  return <CameraPage />;
};
export default page;
