import RootContext from "@/layout/RootContext";
import Navbar from "./_components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-screen">
      <Navbar />
      <div className="w-full">
        <RootContext>{children}</RootContext>
      </div>
    </div>
  );
}
