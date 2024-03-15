"use client";
import { toast } from "sonner";
import Header from "../../_components/Header";

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
      name: "Default",
      "--primary-color": "#000000",
      "--secondary-color": "#404040",
      "--tertiary-color": "#d4d4d4",
      "--quartinary-color": "#e5e5e5",
      "--navbar-color": "#000000",
      "--background-color": "#ffffff",
    },
    {
      name: "Purple",
      "--primary-color": "#2e1065",
      "--secondary-color": "#6d28d9",
      "--tertiary-color": "#c4b5fd",
      "--quartinary-color": "#ddd6fe",
      "--navbar-color": "#2e1065",
      "--background-color": "#ffffff",
    },
    {
      name: "Blue",
      "--primary-color": "#007bff",
      "--secondary-color": "#17a2b8",
      "--tertiary-color": "#6c757d",
      "--quartinary-color": "#f8f9fa",
      "--navbar-color": "#007bff",
      "--background-color": "#ffffff",
    },
    {
      name: "Green",
      "--primary-color": "#28a745",
      "--secondary-color": "#20c997",
      "--tertiary-color": "#6c757d",
      "--quartinary-color": "#f8f9fa",
      "--navbar-color": "#28a745",
      "--background-color": "#ffffff",
    },
    {
      name: "Red",
      "--primary-color": "#dc3545",
      "--secondary-color": "#fd7e14",
      "--tertiary-color": "#6c757d",
      "--quartinary-color": "#f8f9fa",
      "--navbar-color": "#dc3545",
      "--background-color": "#ffffff",
    },
    {
      name: "Yellow",
      "--primary-color": "#ffc107",
      "--secondary-color": "#ffed4a",
      "--tertiary-color": "#6c757d",
      "--quartinary-color": "#f8f9fa",
      "--navbar-color": "#ffc107",
      "--background-color": "#ffffff",
    },
    {
      name: "Dark",
      "--primary-color": "#343a40",
      "--secondary-color": "#495057",
      "--tertiary-color": "#6c757d",
      "--quartinary-color": "#f8f9fa",
      "--navbar-color": "#343a40",
      "--background-color": "#ffffff",
      },
    {
      name: "Light",
      "--primary-color": "#f8f9fa",
      "--secondary-color": "#e9ecef",
      "--tertiary-color": "#dee2e6",
      "--quartinary-color": "#ced4da",
      "--navbar-color": "#f8f9fa",
      "--background-color": "#ffffff",
    }
  ];
  return (
    <div className="flex h-full w-full flex-col">
      <Header title="Themes" />
      <hr />
      <div className="grid flex-grow grid-cols-4 gap-1 rounded-md">
        {data.map((theme, index) => (
          <div
            key={index}
            className="m-4 flex cursor-pointer flex-col items-center justify-between border border-tertiary p-4 duration-200 hover:scale-110"
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
              className="w-full flex-1 rounded border"
            ></div>
            <div
              style={{ backgroundColor: theme["--secondary-color"] }}
              className="w-full flex-1 rounded border"
            ></div>
            <div
              style={{ backgroundColor: theme["--tertiary-color"] }}
              className="w-full flex-1 rounded border"
            ></div>
            <div
              style={{ backgroundColor: theme["--quartinary-color"] }}
              className="w-full flex-1 rounded border"
            ></div>
            <div
              style={{ backgroundColor: theme["--navbar-color"] }}
              className="w-full flex-1 rounded border"
            ></div>
            <div
              style={{ backgroundColor: theme["--background-color"] }}
              className="w-full flex-1 rounded border"
            ></div>
            <p className="text-sm font-medium uppercase">{theme.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Themes;
