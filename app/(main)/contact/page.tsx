import Contact from "./Contact";
import type { Metadata } from "next";
import NavbarLayout from "../../layouts/NavbarLayout";

export const metadata: Metadata = {
	title: "Contact Us",
	description: "Simplifying Inventory",
};

const page = () => {
	return (
		<NavbarLayout title="Contact">
			<Contact />
		</NavbarLayout>
	);
};

export default page;
