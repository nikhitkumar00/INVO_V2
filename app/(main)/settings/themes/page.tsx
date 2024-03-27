"use client";
import { toast } from "sonner";
import Header from "@/app/(main)/_components/Header";
import { useRecoilState } from "recoil";
import { themeState } from "@/global/globalStates";

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
    name: "Default-Light",
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
    name: "Default-Dark",
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
    name: "Modern",
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
  const [theme, setTheme] = useRecoilState(themeState);
  const applyTheme = (theme: theme) => {
    localStorage.setItem("theme", theme.name);
    setTheme(theme.name);
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
            <p className="text-sm font-medium">{theme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Themes;
