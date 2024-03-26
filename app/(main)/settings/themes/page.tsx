"use client";
import { toast } from "sonner";
import Header from "@/app/(main)/_components/Header";
import { useEffect } from "react";

type theme = {
  name: string;
  "--primary-color": string;
  "--secondary-color": string;
  "--tertiary-color": string;
  "--quartinary-color": string;
  "--navbar-color": string;
  "--background-color": string;
  "--nav-background-color": string;
  "--nav-primary-color": string;
  "--nav-secondary-color": string;
  "--table-odd": string;
  "--table-hover": string;
  "--dash-odd": string;
  "--dash-even": string;
};
const data: theme[] = [
  {
    name: "Default Light",
    "--primary-color": "#000000",
    "--secondary-color": "#404040",
    "--tertiary-color": "#d4d4d4",
    "--quartinary-color": "#e5e5e5",
    "--navbar-color": "#000000",
    "--background-color": "#ffffff",
    "--nav-background-color": "#ffffff",
    "--nav-primary-color": "#000000",
    "--nav-secondary-color": "#404040",
    "--table-odd": "#e5e5e5",
    "--table-hover": "#d4d4d4",
    "--dash-odd": "#ffffff",
    "--dash-even": "#ffffff",
  },
  {
    name: "Default Dark",
    "--primary-color": "#ffffff",
    "--secondary-color": "#d4d4d4",
    "--tertiary-color": "#404040",
    "--quartinary-color": "#2e2e2e",
    "--navbar-color": "#000000",
    "--background-color": "#1a1a1a",
    "--nav-background-color": "#ffffff",
    "--nav-primary-color": "#000000",
    "--nav-secondary-color": "#404040",
    "--table-odd": "#2e2e2e",
    "--table-hover": "#404040",
    "--dash-odd": "#404040",
    "--dash-even": "#404040",
  },
  {
    name: "Purple Light",
    "--primary-color": "#000000",
    "--secondary-color": "#660808",
    "--tertiary-color": "#ffffff",
    "--quartinary-color": "#1074ba",
    "--navbar-color": "#000000",
    "--background-color": "#ffffff",
    "--nav-background-color": "#ffffff",
    "--nav-primary-color": "#263238",
    "--nav-secondary-color": "#404040",
    "--table-odd": "#E4E7F7",
    "--table-hover": "#C5CAE9",
    "--dash-odd": "#C5CAE9",
    "--dash-even": "#E4E7F7",
  },
];


const Themes = () => {
  const applyTheme = (theme: theme) => {
    document.documentElement.style.setProperty(
      "--primary-color",
      theme["--primary-color"],
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      theme["--secondary-color"],
    );
    document.documentElement.style.setProperty(
      "--tertiary-color",
      theme["--tertiary-color"],
    );
    document.documentElement.style.setProperty(
      "--quartinary-color",
      theme["--quartinary-color"],
    );
    document.documentElement.style.setProperty(
      "--navbar-color",
      theme["--navbar-color"],
    );
    document.documentElement.style.setProperty(
      "--background-color",
      theme["--background-color"],
    );
    document.documentElement.style.setProperty(
      "--nav-background-color",
      theme["--nav-background-color"],
    );
    document.documentElement.style.setProperty(
      "--nav-primary-color",
      theme["--nav-primary-color"],
    );
    document.documentElement.style.setProperty(
      "--nav-secondary-color",
      theme["--nav-secondary-color"],
    );
    document.documentElement.style.setProperty(
      "--table-odd",
      theme["--table-odd"],
    );
    document.documentElement.style.setProperty(
      "--table-hover",
      theme["--table-hover"],
    );
    document.documentElement.style.setProperty(
      "--dash-odd",
      theme["--dash-odd"],
    );
    document.documentElement.style.setProperty(
      "--dash-even",
      theme["--dash-even"],
    );
  };
  useEffect(() => {
    // Check if theme is stored in local storage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      const theme = JSON.parse(storedTheme);
      applyTheme(theme);
    }
  }, []); // Run only on mount

  const handleThemeChange = (theme: theme) => {
    applyTheme(theme);
    // Store selected theme in local storage
    localStorage.setItem("theme", JSON.stringify(theme));
    toast.info("Theme Changed to " + theme.name);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Themes" />
      <hr />
      <div className="grid grid-cols-10 gap-y-4 rounded-md">
        {data.map((theme, index) => (
          <div
            key={index}
            className="flex h-36 cursor-pointer flex-col items-center justify-between p-2 duration-200 hover:scale-110 hover:border"
            onClick={() => {
              applyTheme(theme);
              localStorage.setItem("theme", JSON.stringify(theme));
              toast.info("Theme Changed to " + theme.name);
            }}
          >
            <div
              style={{ backgroundColor: theme["--primary-color"] }}
              className="w-full flex-1"
            ></div>
            <div
              style={{ backgroundColor: theme["--secondary-color"] }}
              className="w-full flex-1"
            ></div>
            <div
              style={{ backgroundColor: theme["--tertiary-color"] }}
              className="w-full flex-1"
            ></div>
            <div
              style={{ backgroundColor: theme["--quartinary-color"] }}
              className="w-full flex-1"
            ></div>
            <div
              style={{ backgroundColor: theme["--navbar-color"] }}
              className="w-full flex-1"
            ></div>
            <div
              style={{ backgroundColor: theme["--background-color"] }}
              className="w-full flex-1"
            ></div>
            {/* <div
              style={{ backgroundColor: theme["--nav-background-color"] }}
              className="w-full flex-1"
            ></div>
            <div
              style={{ backgroundColor: theme["--nav-primary-color"] }}
              className="w-full flex-1"
            ></div>
            <div
              style={{ backgroundColor: theme["--nav-secondary-color"] }}
              className="w-full flex-1 "
            ></div> */}

            <p className="text-sm font-medium">{theme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
