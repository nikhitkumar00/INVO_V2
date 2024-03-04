"use client";
import NavbarLayout from "../../layouts/NavbarLayout";
import { Stocks } from "../../public/icons/icons";

const error = () => {
	return (
		<NavbarLayout title="Bill Logs">
			<div className="w-full text-xl font-semibold h-[calc(100vh-75px)] flex justify-center items-center gap-4">
				<Stocks />
				Database not connected
			</div>
		</NavbarLayout>
	);
};

export default error;
