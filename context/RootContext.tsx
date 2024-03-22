"use client";
import { RecoilRoot } from "recoil";

const RootContext = ({ children }: { children: React.ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
export default RootContext;
