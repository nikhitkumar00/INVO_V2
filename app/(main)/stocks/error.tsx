"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

const error = () => {
	return (
		<div>
			<div className="w-full text-xl font-semibold h-[calc(100vh-75px)] flex justify-center items-center gap-4">
				<Icon className="size-10" icon="lucide:database" />
				Database not connected
			</div>
		</div>
	);
};

export default error;
