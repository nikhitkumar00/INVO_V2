import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Header = ({ title }: { title: string }) => {
	return (
		<header className="w-full h-fit flex items-center p-4 justify-between">
			<div className="text-3xl font-semibold capitalize">{title}</div>
			<div className="flex gap-4">
				<Link href="/login">
					<Icon className="size-6" icon="lucide:log-out" />
				</Link>
			</div>
		</header>
	);
};

export default Header;
