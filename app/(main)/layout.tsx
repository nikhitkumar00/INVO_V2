import Navbar from "./_components/Navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-screen h-screen flex">
			<Navbar />
			<div>{children}</div>
		</div>
	);
}
