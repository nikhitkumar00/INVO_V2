"use client";
import NavbarLayout from "../../layouts/NavbarLayout";
import { Stocks } from "../../public/icons/icons";

const error = () => {
	return (
		<NavbarLayout title="Stocks">
			<div className="w-full text-xl font-semibold h-[calc(100vh-75px)] flex justify-center items-center gap-4">
				<Stocks className="w-10 stroke-2" />
				Database not connected
			</div>
		</NavbarLayout>
	);
};

export default error;
