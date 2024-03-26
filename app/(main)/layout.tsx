"use client";
import { useRecoilState } from "recoil";
import Navbar from "./_components/Navbar";
import { themeState } from "@/global/globalStates";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useRecoilState(themeState);

  return (
    <div
      className={`flex h-screen w-screen bg-background text-primary ` + theme}
    >
      <Navbar />
      <div className="w-full">{children}</div>
    </div>
  );
}
