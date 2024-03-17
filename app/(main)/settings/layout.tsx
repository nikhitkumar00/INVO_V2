"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "../_components/Header";

const data = [
  {
    name: "Customize Columns",
    link: "/settings/customize",
  },
  {
    name: "Status",
    link: "/settings/status",
  },
  {
    name: "Themes",
    link: "/settings/themes",
  },
  {
    name: "FAQ",
    link: "/settings",
  },
  {
    name: "Terms of Service",
    link: "/settings/termsofservice",
  },
  {
    name: "Help and Support",
    link: "/contact",
  },
  {
    name: "About",
    link: "/settings",
  },
];

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-full flex-col">
      <Header title="Settings" logout />
      <div className="flex h-full w-full flex-grow overflow-auto overscroll-contain">
        <nav className="sticky top-0 h-full min-w-52 rounded-tr-xl bg-background">
          {data.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className={`flex h-12 w-11/12 items-center justify-start gap-3 rounded-r-md px-6 py-4 text-sm font-semibold transition duration-200 ${
                pathname === item.link
                  ? "bg-primary text-background"
                  : "bg-background text-primary hover:bg-primary hover:text-background"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex-grow p-2">{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
