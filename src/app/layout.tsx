import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { LightDark } from "@/components/LightDark";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Victor Castro",
  description: `Victor's Portifolio`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-100 dark:bg-gray-900 text-gray-950 dark:text-gray-100 relative pt-28 sm:pt-36`}
      >
        <NavBar />
        <LightDark />
        {children}
      </body>
    </html>
  );
}
