"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Dashboard,
	Stocks,
	Contact,
	Settings,
	Profile,
	Billing,
	Billlog,
} from "../public/icons/icons";

const Navbar = () => {
	const pathname = usePathname();

	const links: { name: string; link: string; icon: JSX.Element }[] = [
		{
			name: "Dashboard",
			link: "/",
			icon: <Dashboard className="w-6 stroke-2" />,
		},
		{
			name: "Stocks",
			link: "/stocks",
			icon: <Stocks className="w-6 stroke-2" />,
		},
		{
			name: "Billing",
			link: "/billing",
			icon: <Billing className="w-6 stroke-2" />,
		},
		{
			name: "Bill Logs",
			link: "/billlog",
			icon: <Billlog className="w-6 stroke-2" />,
		},
		{
			name: "Contact",
			link: "/contact",
			icon: <Contact className="w-6 stroke-2" />,
		},
	];

	return (
		<div className="sticky top-0 py-4 max-w-56 min-w-56 h-dvh bg-primary flex flex-col gap-2 items-center">
			<h1 className="text-2xl px-6 pb-2 text-white font-pacifico w-full">
				INVO
			</h1>
			{links.map((link) => (
				<Link
					key={link.name}
					href={link.link}
					className={
						`px-2 font-semibold text-gray-300 w-11/12 text-sm capitalize rounded-md hover:bg-secondary h-10 flex justify-start gap-3 items-center ` +
						(pathname === link.link ? "bg-secondary" : "bg-primary")
					}
				>
					{link.icon}
					{link.name}
				</Link>
			))}
			<div className="flex-grow"></div>
			<Link
				href="/profile"
				className={
					`px-2 font-semibold text-gray-300 w-11/12 text-sm capitalize rounded-md hover:bg-secondary h-10 flex justify-start gap-3 items-center ` +
					(pathname === "/settings" ? "bg-secondary" : "bg-primary")
				}
			>
				<Profile className="w-6 stroke-2" />
				Profile
			</Link>
			<Link
				href="/settings"
				className={
					`px-2 font-semibold text-gray-300 w-11/12 text-sm capitalize rounded-md hover:bg-secondary h-10 flex justify-start gap-3 items-center ` +
					(pathname === "/settings" ? "bg-secondary" : "bg-primary")
				}
			>
				<Settings className="w-6 stroke-2" />
				Settings
			</Link>
		</div>
	);
};

export default Navbar;
