import { Metadata } from "next";
import Footer from "./footer/page";
import "./globals.css";
import Navbar from "./navbar/page";


export const metadata: Metadata={
  title: "Khalid Next Course",
  description: "Learning Next.js App Router",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-green-900 text-amber-300">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}