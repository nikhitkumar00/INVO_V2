import "./globals.css";
import { Toaster } from "@/components/sonner";
import RootContext from "@/context/RootContext";
export const dynamic = "force-dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "INVO v2 💵",
  description: "Simplifying Inventory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootContext>
          {children}
          <Toaster />
        </RootContext>
      </body>
    </html>
  );
}
