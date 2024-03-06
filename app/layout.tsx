import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/sonner";

export const metadata: Metadata = {
  title: "INVO V2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-primary">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
