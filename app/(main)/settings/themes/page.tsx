"use client";
import { toast } from "sonner";
import Header from "@/app/(main)/_components/Header";

type theme = {
  name: string;
  "--primary-color": string;
  "--secondary-color": string;
  "--tertiary-color": string;
  "--quartinary-color": string;
  "--navbar-color": string;
  "--background-color": string;
};

const Themes = () => {
  const data: theme[] = [
    {
      name: "Default Light",
      "--primary-color": "#000000",
      "--secondary-color": "#404040",
      "--tertiary-color": "#d4d4d4",
      "--quartinary-color": "#e5e5e5",
      "--navbar-color": "#000000",
      "--background-color": "#ffffff",
    },
    {
      name: "Default Dark",
      "--primary-color": "#ffffff",
      "--secondary-color": "#d4d4d4",
      "--tertiary-color": "#404040",
      "--quartinary-color": "#2e2e2e",
      "--navbar-color": "#000000",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Purple Light",
      "--primary-color": "#2e1065",
      "--secondary-color": "#6d28d9",
      "--tertiary-color": "#c4b5fd",
      "--quartinary-color": "#ddd6fe",
      "--navbar-color": "#2e1065",
      "--background-color": "#ffffff",
    },
    {
      name: "Purple Dark",
      "--primary-color": "#c4b5fd",
      "--secondary-color": "#ddd6fe",
      "--tertiary-color": "#6d28d9",
      "--quartinary-color": "#2e1065",
      "--navbar-color": "#c4b5fd",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Green Light",
      "--primary-color": "#0a6640",
      "--secondary-color": "#1db954",
      "--tertiary-color": "#8affb7",
      "--quartinary-color": "#d6f5e5",
      "--navbar-color": "#0a6640",
      "--background-color": "#ffffff",
    },
    {
      name: "Green Dark",
      "--primary-color": "#8affb7",
      "--secondary-color": "#d6f5e5",
      "--tertiary-color": "#1db954",
      "--quartinary-color": "#0a6640",
      "--navbar-color": "#8affb7",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Blue Light",
      "--primary-color": "#0e3b8c",
      "--secondary-color": "#3f8eff",
      "--tertiary-color": "#a9d4ff",
      "--quartinary-color": "#e4f1ff",
      "--navbar-color": "#0e3b8c",
      "--background-color": "#ffffff",
    },
    {
      name: "Blue Dark",
      "--primary-color": "#a9d4ff",
      "--secondary-color": "#e4f1ff",
      "--tertiary-color": "#3f8eff",
      "--quartinary-color": "#0e3b8c",
      "--navbar-color": "#a9d4ff",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Yellow Light",
      "--primary-color": "#a67c00",
      "--secondary-color": "#ffcc00",
      "--tertiary-color": "#ffe066",
      "--quartinary-color": "#fff2cc",
      "--navbar-color": "#a67c00",
      "--background-color": "#ffffff",
    },
    {
      name: "Yellow Dark",
      "--primary-color": "#ffe066",
      "--secondary-color": "#fff2cc",
      "--tertiary-color": "#ffcc00",
      "--quartinary-color": "#a67c00",
      "--navbar-color": "#ffe066",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Red Light",
      "--primary-color": "#8c0a0a",
      "--secondary-color": "#ff4d4d",
      "--tertiary-color": "#ff9999",
      "--quartinary-color": "#ffd6d6",
      "--navbar-color": "#8c0a0a",
      "--background-color": "#ffffff",
    },
    {
      name: "Red Dark",
      "--primary-color": "#ff9999",
      "--secondary-color": "#ffd6d6",
      "--tertiary-color": "#ff4d4d",
      "--quartinary-color": "#8c0a0a",
      "--navbar-color": "#ff9999",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Orange Light",
      "--primary-color": "#a63600",
      "--secondary-color": "#ff6f00",
      "--tertiary-color": "#ffad5c",
      "--quartinary-color": "#ffe6cc",
      "--navbar-color": "#a63600",
      "--background-color": "#ffffff",
    },
    {
      name: "Orange Dark",
      "--primary-color": "#ffad5c",
      "--secondary-color": "#ffe6cc",
      "--tertiary-color": "#ff6f00",
      "--quartinary-color": "#a63600",
      "--navbar-color": "#ffad5c",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Pink Light",
      "--primary-color": "#8c0a4e",
      "--secondary-color": "#ff4d8f",
      "--tertiary-color": "#ff99c2",
      "--quartinary-color": "#ffd6e5",
      "--navbar-color": "#8c0a4e",
      "--background-color": "#ffffff",
    },
    {
      name: "Pink Dark",
      "--primary-color": "#ff99c2",
      "--secondary-color": "#ffd6e5",
      "--tertiary-color": "#ff4d8f",
      "--quartinary-color": "#8c0a4e",
      "--navbar-color": "#ff99c2",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Teal Light",
      "--primary-color": "#005b5b",
      "--secondary-color": "#008080",
      "--tertiary-color": "#66cccc",
      "--quartinary-color": "#ccf2f2",
      "--navbar-color": "#005b5b",
      "--background-color": "#ffffff",
    },
    {
      name: "Teal Dark",
      "--primary-color": "#66cccc",
      "--secondary-color": "#ccf2f2",
      "--tertiary-color": "#008080",
      "--quartinary-color": "#005b5b",
      "--navbar-color": "#66cccc",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Brown Light",
      "--primary-color": "#4d2800",
      "--secondary-color": "#7f4f24",
      "--tertiary-color": "#bf8f4f",
      "--quartinary-color": "#ffd699",
      "--navbar-color": "#4d2800",
      "--background-color": "#ffffff",
    },
    {
      name: "Brown Dark",
      "--primary-color": "#bf8f4f",
      "--secondary-color": "#ffd699",
      "--tertiary-color": "#7f4f24",
      "--quartinary-color": "#4d2800",
      "--navbar-color": "#bf8f4f",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Grey Light",
      "--primary-color": "#424242",
      "--secondary-color": "#757575",
      "--tertiary-color": "#bcbcbc",
      "--quartinary-color": "#e0e0e0",
      "--navbar-color": "#424242",
      "--background-color": "#ffffff",
    },
    {
      name: "Grey Dark",
      "--primary-color": "#bcbcbc",
      "--secondary-color": "#e0e0e0",
      "--tertiary-color": "#757575",
      "--quartinary-color": "#424242",
      "--navbar-color": "#bcbcbc",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Cyan Light",
      "--primary-color": "#004d4d",
      "--secondary-color": "#008b8b",
      "--tertiary-color": "#00cccc",
      "--quartinary-color": "#66e0e0",
      "--navbar-color": "#004d4d",
      "--background-color": "#ffffff",
    },
    {
      name: "Cyan Dark",
      "--primary-color": "#00cccc",
      "--secondary-color": "#66e0e0",
      "--tertiary-color": "#008b8b",
      "--quartinary-color": "#004d4d",
      "--navbar-color": "#00cccc",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Lime Light",
      "--primary-color": "#336600",
      "--secondary-color": "#99cc00",
      "--tertiary-color": "#d9ff66",
      "--quartinary-color": "#f5ffbe",
      "--navbar-color": "#336600",
      "--background-color": "#ffffff",
    },
    {
      name: "Lime Dark",
      "--primary-color": "#d9ff66",
      "--secondary-color": "#f5ffbe",
      "--tertiary-color": "#99cc00",
      "--quartinary-color": "#336600",
      "--navbar-color": "#d9ff66",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Indigo Light",
      "--primary-color": "#1a237e",
      "--secondary-color": "#303f9f",
      "--tertiary-color": "#7986cb",
      "--quartinary-color": "#c5cae9",
      "--navbar-color": "#1a237e",
      "--background-color": "#ffffff",
    },
    {
      name: "Indigo Dark",
      "--primary-color": "#7986cb",
      "--secondary-color": "#c5cae9",
      "--tertiary-color": "#303f9f",
      "--quartinary-color": "#1a237e",
      "--navbar-color": "#7986cb",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Violet Light",
      "--primary-color": "#4a148c",
      "--secondary-color": "#7e57c2",
      "--tertiary-color": "#b39ddb",
      "--quartinary-color": "#e6ceff",
      "--navbar-color": "#4a148c",
      "--background-color": "#ffffff",
    },
    {
      name: "Violet Dark",
      "--primary-color": "#b39ddb",
      "--secondary-color": "#e6ceff",
      "--tertiary-color": "#7e57c2",
      "--quartinary-color": "#4a148c",
      "--navbar-color": "#b39ddb",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Maroon Light",
      "--primary-color": "#400000",
      "--secondary-color": "#800000",
      "--tertiary-color": "#bf4040",
      "--quartinary-color": "#ff9999",
      "--navbar-color": "#400000",
      "--background-color": "#ffffff",
    },
    {
      name: "Maroon Dark",
      "--primary-color": "#bf4040",
      "--secondary-color": "#ff9999",
      "--tertiary-color": "#800000",
      "--quartinary-color": "#400000",
      "--navbar-color": "#bf4040",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Turquoise Light",
      "--primary-color": "#00474f",
      "--secondary-color": "#00838f",
      "--tertiary-color": "#4fb3bf",
      "--quartinary-color": "#99e5e5",
      "--navbar-color": "#00474f",
      "--background-color": "#ffffff",
    },
    {
      name: "Turquoise Dark",
      "--primary-color": "#4fb3bf",
      "--secondary-color": "#99e5e5",
      "--tertiary-color": "#00838f",
      "--quartinary-color": "#00474f",
      "--navbar-color": "#4fb3bf",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Olive Light",
      "--primary-color": "#4b4b00",
      "--secondary-color": "#808000",
      "--tertiary-color": "#b3b342",
      "--quartinary-color": "#e5e59b",
      "--navbar-color": "#4b4b00",
      "--background-color": "#ffffff",
    },
    {
      name: "Olive Dark",
      "--primary-color": "#b3b342",
      "--secondary-color": "#e5e59b",
      "--tertiary-color": "#808000",
      "--quartinary-color": "#4b4b00",
      "--navbar-color": "#b3b342",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Salmon Light",
      "--primary-color": "#8c2f2f",
      "--secondary-color": "#ff6666",
      "--tertiary-color": "#ffc1c1",
      "--quartinary-color": "#ffe6e6",
      "--navbar-color": "#8c2f2f",
      "--background-color": "#ffffff",
    },
    {
      name: "Salmon Dark",
      "--primary-color": "#ffc1c1",
      "--secondary-color": "#ffe6e6",
      "--tertiary-color": "#ff6666",
      "--quartinary-color": "#8c2f2f",
      "--navbar-color": "#ffc1c1",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Sky Blue Light",
      "--primary-color": "#005b96",
      "--secondary-color": "#48cae4",
      "--tertiary-color": "#90e0ef",
      "--quartinary-color": "#ade8f4",
      "--navbar-color": "#005b96",
      "--background-color": "#ffffff",
    },
    {
      name: "Sky Blue Dark",
      "--primary-color": "#90e0ef",
      "--secondary-color": "#ade8f4",
      "--tertiary-color": "#48cae4",
      "--quartinary-color": "#005b96",
      "--navbar-color": "#90e0ef",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Magenta Light",
      "--primary-color": "#6a007a",
      "--secondary-color": "#c77dff",
      "--tertiary-color": "#f0bfff",
      "--quartinary-color": "#f9e0ff",
      "--navbar-color": "#6a007a",
      "--background-color": "#ffffff",
    },
    {
      name: "Magenta Dark",
      "--primary-color": "#f0bfff",
      "--secondary-color": "#f9e0ff",
      "--tertiary-color": "#c77dff",
      "--quartinary-color": "#6a007a",
      "--navbar-color": "#f0bfff",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Tan Light",
      "--primary-color": "#8c5a29",
      "--secondary-color": "#ffaa80",
      "--tertiary-color": "#ffcc99",
      "--quartinary-color": "#ffe6cc",
      "--navbar-color": "#8c5a29",
      "--background-color": "#ffffff",
    },
    {
      name: "Tan Dark",
      "--primary-color": "#ffcc99",
      "--secondary-color": "#ffe6cc",
      "--tertiary-color": "#ffaa80",
      "--quartinary-color": "#8c5a29",
      "--navbar-color": "#ffcc99",
      "--background-color": "#1a1a1a",
    },
    {
      name: "Slate Light",
      "--primary-color": "#1c2833",
      "--secondary-color": "#394b59",
      "--tertiary-color": "#5a6d7a",
      "--quartinary-color": "#8a9aa9",
      "--navbar-color": "#1c2833",
      "--background-color": "#ffffff",
    },
    {
      name: "Slate Dark",
      "--primary-color": "#5a6d7a",
      "--secondary-color": "#8a9aa9",
      "--tertiary-color": "#394b59",
      "--quartinary-color": "#1c2833",
      "--navbar-color": "#5a6d7a",
      "--background-color": "#1a1a1a",
    },
  ];
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
