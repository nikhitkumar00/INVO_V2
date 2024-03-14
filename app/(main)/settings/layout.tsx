"use client";
import Link from "next/link";
import Header from "../_components/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const data: { name: string; link: string }[] = [
    {
      name: "Appearance",
      link: "/settings",
    },
    {
      name: "FAQ",
      link: "/settings",
    },
    {
      name: "Terms of Service",
      link: "/settings",
    },
    {
      name: "Privacy Policy",
      link: "/settings/privacypolicy",
    },
    {
      name: "Cookie Policy",
      link: "/settings",
    },
    {
      name: "Help and Support",
      link: "/stocks",
    },
    {
      name: "About",
      link: "/settings",
    },
  ];
  return (
    <div className="flex h-screen w-full flex-col">
      <Header title="Settings" logout />
      <div className="flex h-full w-full flex-grow justify-items-end overflow-auto overscroll-contain">
        <nav className="sticky top-0 h-full min-w-52 rounded-tr-xl bg-background">
          {data.map((item, index) => (
            <div key={index}>
              <Link
                href={item.link}
                className={
                  `flex h-12 w-11/12 items-center justify-start gap-3 rounded-r-md px-6 py-4 text-sm font-semibold ` +
                  (pathname === item.link
                    ? " bg-primary text-background"
                    : "bg-background text-primary hover:bg-secondary hover:text-background")
                }
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}
