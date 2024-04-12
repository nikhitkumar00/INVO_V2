"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pacifico } from "next/font/google";
import {
  Billing,
  Billlog,
  Camera,
  ChatIcon,
  Contact,
  Dashboard,
  Profile,
  Settings,
  Stocks,
} from "@/svg/Icons";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const pathname = usePathname();

  const links: { name: string; link: string; icon: JSX.Element }[] = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <Dashboard className="size-6 stroke-2" />,
    },
    {
      name: "Stocks",
      link: "/stocks",
      icon: <Stocks className="size-6 stroke-2" />,
    },
    {
      name: "Billing",
      link: "/billing",
      icon: <Billing className="size-6 stroke-2" />,
    },
    {
      name: "Bill Logs",
      link: "/billlog",
      icon: <Billlog className="size-6 stroke-2" />,
    },
    {
      name: "Customer",
      link: "/customer",
      icon: <Profile className="size-6 stroke-2" />,
    },
    {
      name: "ChatBot",
      link: "/chat",
      icon: <ChatIcon className="size-6 stroke-2" />,
    },
    {
      name: "Camera",
      link: "/camera",
      icon: <Camera className="size-6 stroke-2" />,
    },
  ];

  return (
    <div className="sticky top-0 flex h-dvh min-w-56 max-w-56 flex-col items-center gap-2 bg-navbar py-4">
      <h1
        className={
          pacifico.className + " w-full px-6 pb-4 text-2xl text-navBackground"
        }
      >
        INVO
      </h1>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.link}
          className={
            `flex h-10 w-11/12 items-center justify-start gap-3 rounded-md px-2 text-sm font-semibold capitalize text-navBackground hover:bg-navSecondary ` +
            (pathname.includes(link.link) ? "bg-navSecondary" : "bg-navPrimary")
          }
        >
          {link.icon}
          {link.name}
        </Link>
      ))}
      <div className="flex-grow"></div>
      <Link
        href="/contact"
        className={
          `flex h-10 w-11/12 items-center justify-start gap-3 rounded-md px-2 text-sm font-semibold capitalize text-navBackground hover:bg-navSecondary ` +
          (pathname.includes("/contact") ? "bg-navSecondary" : "bg-navPrimary")
        }
      >
        <Contact className="size-6 stroke-2" />
        Contact
      </Link>
      <Link
        href="/settings"
        className={
          `flex h-10 w-11/12 items-center justify-start gap-3 rounded-md px-2 text-sm font-semibold capitalize text-navBackground hover:bg-navSecondary ` +
          (pathname.includes("/settings") ? "bg-navSecondary" : "bg-navPrimary")
        }
      >
        <Settings className="size-6 stroke-2" />
        Settings
      </Link>
    </div>
  );
};

export default Navbar;
