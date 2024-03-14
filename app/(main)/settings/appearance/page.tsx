"use client";
import { Switch } from "@/components/switch";
import Header from "../../_components/Header";
import { useEffect, useState } from "react";

type CssVars = {
  "--primary-color": string;
  "--secondary-color": string;
  "--tertiary-color": string;
  "--quartinary-color": string;
  "--background-color": string;
  [key: string]: string;
};

const Appearance = () => {
  const [cssVars, setCssVars] = useState<CssVars>({
    "--primary-color": "#000000",
    "--secondary-color": "#404040",
    "--tertiary-color": "#d4d4d4",
    "--quartinary-color": "#e5e5e5",
    "--background-color": "#ffffff",
  });

  const changeColors = () => {
    if (cssVars["--background-color"] === "#ffffff") {
      setCssVars({
        "--primary-color": "#ffffff",
        "--secondary-color": "#404040",
        "--tertiary-color": "#d4d4d4",
        "--quartinary-color": "#e5e5e5",
        "--background-color": "#000000",
      });
    } else {
      setCssVars({
        "--primary-color": "#000000",
        "--secondary-color": "#404040",
        "--tertiary-color": "#d4d4d4",
        "--quartinary-color": "#e5e5e5",
        "--background-color": "#ffffff",
      });
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    Object.keys(cssVars).forEach((key) => {
      (root.style as any).setProperty(key, cssVars[key]);
    });
  }, [cssVars]);

  return (
    <>
      <Header title="Themes" />
      <hr />
      <div className="flex gap-96 p-8">
        <div className="text-lg">Dark Mode</div>
        <Switch onClick={changeColors} />
      </div>
    </>
  );
};
export default Appearance;
