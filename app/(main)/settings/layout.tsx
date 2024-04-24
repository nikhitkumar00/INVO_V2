"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  {
    name: "Customize Columns",
    link: "/settings/customize",
  },
  {
    name: "Threshold",
    link: "/settings/threshold",
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
    name: "Terms of Service",
    link: "/settings/termsofservice",
  },
  {
    name: "About",
    link: "/settings",
  },
];

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-full flex-grow ">
      <nav className="sticky top-0 h-full min-w-52 bg-background py-10">
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className={`flex h-12 w-full items-center justify-start gap-3 rounded-r-md px-6 py-4 text-sm font-semibold hover:bg-primary hover:text-background ${
              pathname === item.link ? "bg-primary text-background" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="flex-grow py-2">{children}</div>
    </div>
  );
};

export default RootLayout;
