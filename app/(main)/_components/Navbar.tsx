"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	const links: { name: string; link: string; icon: JSX.Element }[] = [
		{
			name: "Dashboard",
			link: "/dashboard",
			icon: <Icon className="size-6" icon="lucide:home" />,
		},
		{
			name: "Stocks",
			link: "/stocks",
			icon: <Icon className="size-6" icon="lucide:database" />,
		},
		{
			name: "Billing",
			link: "/billing",
			icon: <Icon className="size-6" icon="lucide:file-text" />,
		},
		{
			name: "Bill Logs",
			link: "/billlog",
			icon: <Icon className="size-6" icon="lucide:history" />,
		},
		{
			name: "Contact",
			link: "/contact",
			icon: <Icon className="size-6" icon="lucide:phone-call" />,
		},
	];

	return (
		<div className="sticky top-0 py-4 max-w-56 min-w-56 h-dvh bg-primary flex flex-col gap-2 items-center">
			<h1 className="text-2xl px-6 pb-2 text-white w-full">INVO</h1>
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
				<Icon className="size-6" icon="lucide:circle-user-round" />
				Profile
			</Link>
			<Link
				href="/settings"
				className={
					`px-2 font-semibold text-gray-300 w-11/12 text-sm capitalize rounded-md hover:bg-secondary h-10 flex justify-start gap-3 items-center ` +
					(pathname === "/settings" ? "bg-secondary" : "bg-primary")
				}
			>
				<Icon className="size-6" icon="lucide:settings" />
				Settings
			</Link>
		</div>
	);
};

export default Navbar;
