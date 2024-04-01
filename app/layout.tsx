import "./globals.css";
import { Toaster } from "@/components/sonner";
import RootContext from "@/context/RootContext";
import { Metadata } from "next";
import { Inter } from "next/font/google";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "INVO v2",
  description: "Simplifying Inventory",
  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RootContext>
          {children}
          <Toaster />
        </RootContext>
      </body>
    </html>
  );
}
