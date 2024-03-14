import Header from "../_components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full flex-col">
      <Header title="Profile" logout />
      <div className="flex h-full w-full flex-grow justify-between">
        {children}
        <nav className="h-full w-64 rounded-l-xl bg-quartinary"></nav>
      </div>
    </div>
  );
}
